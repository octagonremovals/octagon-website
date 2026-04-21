/**
 * Real-time live chat handler using Socket.io
 * Manages visitor ↔ owner messaging with persistent DB storage.
 */
import { Server as SocketIOServer } from "socket.io";
import type { Server as HTTPServer } from "http";
import { getDb } from "./db";
import { chatSessions, chatMessages } from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";
import crypto from "crypto";

export function setupChatSocket(httpServer: HTTPServer) {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    path: "/api/socket.io",
  });

  io.on("connection", (socket) => {
    // ── OWNER JOINS ADMIN DASHBOARD ──────────────────────────────────────
    socket.on("owner:join", () => {
      socket.join("owner-room");
      console.log(`[Chat] Owner connected: ${socket.id}`);
    });

    // ── VISITOR STARTS OR RESUMES A CHAT SESSION ─────────────────────────
    socket.on("visitor:init", async (data: { sessionToken?: string; startPage?: string }) => {
      try {
        const db = await getDb();
        if (!db) {
          socket.emit("error", { message: "Chat service temporarily unavailable" });
          return;
        }

        let session;

        if (data.sessionToken) {
          const existing = await db.select()
            .from(chatSessions)
            .where(eq(chatSessions.sessionToken, data.sessionToken))
            .limit(1);
          session = existing[0];
        }

        if (!session) {
          const token = crypto.randomBytes(32).toString("hex");
          await db.insert(chatSessions).values({
            sessionToken: token,
            startPage: data.startPage || "/",
            status: "waiting",
            ownerRead: false,
          });
          const created = await db.select()
            .from(chatSessions)
            .where(eq(chatSessions.sessionToken, token))
            .limit(1);
          session = created[0];
        }

        socket.join(`session-${session.id}`);
        socket.data.sessionId = session.id;
        socket.data.sessionToken = session.sessionToken;

        const messages = await db.select()
          .from(chatMessages)
          .where(eq(chatMessages.sessionId, session.id))
          .orderBy(chatMessages.createdAt);

        socket.emit("session:ready", {
          sessionId: session.id,
          sessionToken: session.sessionToken,
          status: session.status,
          messages,
        });
      } catch (err) {
        console.error("[Chat] visitor:init error:", err);
        socket.emit("error", { message: "Failed to initialize chat session" });
      }
    });

    // ── VISITOR PROVIDES THEIR DETAILS ───────────────────────────────────
    socket.on("visitor:identify", async (data: { name: string; email?: string; phone?: string }) => {
      try {
        const db = await getDb();
        if (!db) return;
        const sessionId = socket.data.sessionId as number | undefined;
        if (!sessionId) return;

        await db.update(chatSessions)
          .set({
            visitorName: data.name,
            visitorEmail: data.email,
            visitorPhone: data.phone,
            status: "active",
          })
          .where(eq(chatSessions.id, sessionId));

        const sessions = await db.select()
          .from(chatSessions)
          .where(eq(chatSessions.id, sessionId))
          .limit(1);

        if (sessions[0]) {
          io.to("owner-room").emit("owner:new-session", {
            session: sessions[0],
          });

          notifyOwner({
            title: `💬 New Live Chat — ${data.name}`,
            content: `${data.name} has started a live chat.\nEmail: ${data.email || "Not provided"}\nPhone: ${data.phone || "Not provided"}\nPage: ${sessions[0].startPage}`,
          }).catch(() => {});
        }
      } catch (err) {
        console.error("[Chat] visitor:identify error:", err);
      }
    });

    // ── VISITOR SENDS A MESSAGE ───────────────────────────────────────────
    socket.on("visitor:message", async (data: { text: string }) => {
      try {
        const db = await getDb();
        if (!db) return;
        const sessionId = socket.data.sessionId as number | undefined;
        if (!sessionId || !data.text?.trim()) return;

        await db.insert(chatMessages).values({
          sessionId,
          sender: "visitor",
          message: data.text.trim(),
          isRead: false,
        });

        const saved = await db.select()
          .from(chatMessages)
          .where(and(
            eq(chatMessages.sessionId, sessionId),
            eq(chatMessages.sender, "visitor")
          ))
          .orderBy(desc(chatMessages.createdAt))
          .limit(1);

        await db.update(chatSessions)
          .set({ ownerRead: false, status: "active" })
          .where(eq(chatSessions.id, sessionId));

        io.to("owner-room").emit("owner:new-message", {
          sessionId,
          message: saved[0],
        });

        socket.emit("message:sent", { message: saved[0] });
      } catch (err) {
        console.error("[Chat] visitor:message error:", err);
      }
    });

    // ── OWNER SENDS A REPLY ───────────────────────────────────────────────
    socket.on("owner:reply", async (data: { sessionId: number; text: string }) => {
      try {
        const db = await getDb();
        if (!db) return;
        if (!data.sessionId || !data.text?.trim()) return;

        await db.insert(chatMessages).values({
          sessionId: data.sessionId,
          sender: "owner",
          message: data.text.trim(),
          isRead: false,
        });

        const saved = await db.select()
          .from(chatMessages)
          .where(and(
            eq(chatMessages.sessionId, data.sessionId),
            eq(chatMessages.sender, "owner")
          ))
          .orderBy(desc(chatMessages.createdAt))
          .limit(1);

        await db.update(chatSessions)
          .set({ ownerRead: true })
          .where(eq(chatSessions.id, data.sessionId));

        io.to(`session-${data.sessionId}`).emit("owner:message", {
          message: saved[0],
        });

        socket.emit("reply:sent", { message: saved[0] });
      } catch (err) {
        console.error("[Chat] owner:reply error:", err);
      }
    });

    // ── OWNER MARKS SESSION AS READ ───────────────────────────────────────
    socket.on("owner:mark-read", async (data: { sessionId: number }) => {
      try {
        const db = await getDb();
        if (!db) return;
        await db.update(chatSessions)
          .set({ ownerRead: true })
          .where(eq(chatSessions.id, data.sessionId));

        await db.update(chatMessages)
          .set({ isRead: true })
          .where(and(
            eq(chatMessages.sessionId, data.sessionId),
            eq(chatMessages.sender, "visitor")
          ));
      } catch (err) {
        console.error("[Chat] owner:mark-read error:", err);
      }
    });

    // ── OWNER CLOSES A SESSION ────────────────────────────────────────────
    socket.on("owner:close-session", async (data: { sessionId: number }) => {
      try {
        const db = await getDb();
        if (!db) return;
        await db.update(chatSessions)
          .set({ status: "closed", closedAt: new Date() })
          .where(eq(chatSessions.id, data.sessionId));

        io.to(`session-${data.sessionId}`).emit("session:closed", {
          message: "This chat has been closed by our team. Thank you for contacting Octagon Removals!",
        });

        io.to("owner-room").emit("owner:session-closed", { sessionId: data.sessionId });
      } catch (err) {
        console.error("[Chat] owner:close-session error:", err);
      }
    });

    // ── TYPING INDICATORS ─────────────────────────────────────────────────
    socket.on("visitor:typing", () => {
      const sessionId = socket.data.sessionId as number | undefined;
      if (sessionId) {
        io.to("owner-room").emit("visitor:typing", { sessionId });
      }
    });

    socket.on("owner:typing", (data: { sessionId: number }) => {
      io.to(`session-${data.sessionId}`).emit("owner:typing");
    });
  });

  return io;
}
