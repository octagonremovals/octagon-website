import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  sendQuoteLeadEmail,
  sendContactLeadEmail,
  sendCallbackRequestEmail,
  sendChecklistLeadEmail,
} from "./email";
import { getDb, saveLead, getLeads, updateLeadStatus } from "./db";
import { chatSessions, chatMessages, layoutAnnotations } from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";

// ── Octagon AI system prompt ────────────────────────────────────────────────
const OCTAGON_SYSTEM_PROMPT = `You are the Octagon Removals AI assistant - a helpful, professional, and friendly virtual advisor for Octagon Removals Ltd, London's premium removals company.

COMPANY FACTS:
- Company: Octagon Removals Ltd
- Tagline: "Making Room For Your Expansion" / "Artists of Removals"
- Phone: 0208 521 8000 (main), available Mon–Sun 7am–8pm
- Email: info@octagonremovals.co.uk
- Address: Office 56, Millmead Business Centre, Millmead Road, South Tottenham, London N17 9QU
- WhatsApp: Available via the website
- Trustpilot: 4.9/5 from 171 reviews
- Google Reviews: 323 reviews
- Experience: 10+ years, 15,000+ moves completed
- Fully insured, fixed-price quotes, no hidden charges

SERVICES:
RESIDENTIAL: House & Flat Removals, Packing & Unpacking, Furniture Dismantling & Reassembly, Pre/Post Cleaning, Disposal Service, Storage Solutions
COMMERCIAL: Office Relocation, Office Clearance, Porterage Services
SPECIALISED: Piano Moving, International Removals, Packing Materials Supply, Parking Arrangements

AREAS COVERED (with local numbers):
- Bromley: 0208 927 0542
- Epsom/Surrey: 0137 267 9060
- Watford: 0192 396 4026
- Brentwood: 0127 728 7453
- Romford: 0170 897 3210
- Greenwich: 0203 002 6383
- Islington: 0203 667 8598
- Wandsworth: 0208 927 0543
- Lewisham: 0208 927 0544
- Also: Croydon, Orpington, Enfield, Epping, Finchley, Fulham, Kingston, Dartford, Twickenham, Uxbridge, North/South/East/West/Central London

PRICING GUIDANCE (estimates only - always recommend a free survey for exact pricing):
- Studio/bedsit local move: from ~£280
- 1 bed local: from ~£380
- 2 bed local: from ~£520
- 3 bed local: from ~£680
- 4 bed local: from ~£850
- 5+ bed local: from ~£1,100
- Office (small): from ~£450
- Packing service: from ~£120 extra
- Piano moving: from ~£200 extra
- International: quote required

CALLBACK REQUESTS:
If a user asks to be called back, or says they want to speak to someone, or provides their phone number, respond with:
"I'll arrange a callback for you right away. Please use the callback button below to confirm your details."
Then end your message with the special token: [SHOW_CALLBACK_FORM]

TONE & BEHAVIOUR:
- Be warm, professional, and concise. You represent a premium brand.
- Always encourage visitors to get a free fixed-price quote (link: /get-quote) or call 0208 521 8000.
- If asked about exact prices, give a ballpark range and explain that a free survey gives an exact fixed price.
- If asked about availability, tell them to call or fill in the quote form.
- Never make up information. If unsure, say "I'd recommend calling us on 0208 521 8000 for the most accurate answer."
- Keep responses concise - 2–4 sentences max unless the user asks for detail.
- End responses with a gentle nudge toward getting a quote or calling, but don't be pushy.`;

// ── CHAT ADMIN (tRPC procedures for the owner dashboard) ──────────────────
const chatRouter = router({
  // Get all chat sessions for the admin dashboard
  getSessions: publicProcedure
    .input(z.object({
      status: z.enum(["active", "waiting", "closed", "all"]).default("all"),
    }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      const sessions = await db.select()
        .from(chatSessions)
        .orderBy(desc(chatSessions.updatedAt))
        .limit(100);
      if (input.status === "all") return sessions;
      return sessions.filter(s => s.status === input.status);
    }),

  // Get messages for a specific session
  getMessages: publicProcedure
    .input(z.object({ sessionId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return db.select()
        .from(chatMessages)
        .where(eq(chatMessages.sessionId, input.sessionId))
        .orderBy(chatMessages.createdAt);
    }),

  // Get unread count for badge
  getUnreadCount: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return 0;
    const sessions = await db.select()
      .from(chatSessions)
      .where(and(
        eq(chatSessions.ownerRead, false),
        eq(chatSessions.status, "active")
      ));
    return sessions.length;
  }),
});

// ── LAYOUT GALLERY ANNOTATIONS ────────────────────────────────────────────
const layoutGalleryRouter = router({
  getAnnotations: publicProcedure
    .input(z.object({ layoutId: z.string().optional() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      const query = db.select().from(layoutAnnotations).orderBy(desc(layoutAnnotations.createdAt));
      const results = await query;
      if (input.layoutId) return results.filter(a => a.layoutId === input.layoutId);
      return results;
    }),

  addAnnotation: publicProcedure
    .input(z.object({
      layoutId: z.string().min(1),
      reviewerName: z.string().min(1).max(128),
      comment: z.string().min(1).max(2000),
      xPercent: z.number().int().min(0).max(100),
      yPercent: z.number().int().min(0).max(100),
      sentiment: z.enum(["positive", "negative", "neutral"]).default("neutral"),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database unavailable");
      const result = await db.insert(layoutAnnotations).values({
        layoutId: input.layoutId,
        reviewerName: input.reviewerName,
        comment: input.comment,
        xPercent: input.xPercent,
        yPercent: input.yPercent,
        sentiment: input.sentiment,
      });
      return { success: true, id: Number(result[0].insertId) };
    }),

  deleteAnnotation: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database unavailable");
      await db.delete(layoutAnnotations).where(eq(layoutAnnotations.id, input.id));
      return { success: true };
    }),
});

export const appRouter = router({
  system: systemRouter,
  chat: chatRouter,
  layoutGallery: layoutGalleryRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ── AI CHATBOT ──────────────────────────────────────────────────────────
  ai: router({
    chat: publicProcedure
      .input(z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })).min(1).max(20),
      }))
      .mutation(async ({ input }) => {
        const response = await invokeLLM({
          messages: [
            { role: "system" as const, content: OCTAGON_SYSTEM_PROMPT },
            ...input.messages.map(m => ({ role: m.role as "user" | "assistant", content: m.content as string })),
          ],
        });

        const reply = response.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't process that. Please call us on 0208 521 8000.";
        const showCallbackForm = typeof reply === "string" && reply.includes("[SHOW_CALLBACK_FORM]");
        const cleanReply = typeof reply === "string" ? reply.replace("[SHOW_CALLBACK_FORM]", "").trim() : reply;

        return { reply: cleanReply, showCallbackForm };
      }),
  }),

  // ── LEADS ──────────────────────────────────────────────────────────────
  leads: router({
    submitQuote: publicProcedure
      .input(z.object({
        moveType: z.string().min(1),
        fromPostcode: z.string().min(2),
        toPostcode: z.string().min(2),
        moveDate: z.string().optional(),
        propertySize: z.string().optional(),
        name: z.string().min(1),
        phone: z.string().min(7),
        email: z.string().email(),
        message: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const formattedDate = input.moveDate
          ? new Date(input.moveDate).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
          : "Not specified";

        const notifContent = `🏠 NEW QUOTE REQUEST - Octagon Removals

👤 Name: ${input.name}
📞 Phone: ${input.phone}
📧 Email: ${input.email}

📦 Move Type: ${input.moveType}
🏡 Property Size: ${input.propertySize || "Not specified"}
📍 From: ${input.fromPostcode.toUpperCase()}
📍 To: ${input.toPostcode.toUpperCase()}
📅 Move Date: ${formattedDate}

💬 Message: ${input.message || "None"}
🔗 Source: ${input.source || "Website"}

⏰ Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`.trim();

        // Save lead to database first (non-blocking on failure)
        await saveLead({
          type: "quote",
          status: "new",
          name: input.name,
          email: input.email,
          phone: input.phone,
          moveType: input.moveType,
          fromPostcode: input.fromPostcode.toUpperCase(),
          toPostcode: input.toPostcode.toUpperCase(),
          moveDate: input.moveDate,
          propertySize: input.propertySize,
          message: input.message,
          source: input.source || "/quote",
        });

        // Fire notification and email in parallel - neither blocks the response
        await Promise.allSettled([
          notifyOwner({
            title: `🚚 New Quote Request - ${input.name} (${input.fromPostcode.toUpperCase()} → ${input.toPostcode.toUpperCase()})`,
            content: notifContent,
          }),
          sendQuoteLeadEmail({
            name: input.name,
            phone: input.phone,
            email: input.email,
            moveType: input.moveType,
            fromPostcode: input.fromPostcode,
            toPostcode: input.toPostcode,
            moveDate: input.moveDate,
            propertySize: input.propertySize,
            message: input.message,
            source: input.source,
          }),
        ]);

        return {
          success: true,
          message: "Thank you! We'll call you within 1 hour to discuss your move.",
        };
      }),

    submitContact: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        phone: z.string().optional(),
        email: z.string().email(),
        message: z.string().min(5),
        subject: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const notifContent = `📩 NEW CONTACT MESSAGE - Octagon Removals

👤 Name: ${input.name}
📞 Phone: ${input.phone || "Not provided"}
📧 Email: ${input.email}
📋 Subject: ${input.subject || "General Enquiry"}

💬 Message:
${input.message}

⏰ Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`.trim();

        await saveLead({
          type: "contact",
          status: "new",
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          source: input.subject || "/contact",
        });

        await Promise.allSettled([
          notifyOwner({
            title: `📩 Contact Message from ${input.name}`,
            content: notifContent,
          }),
          sendContactLeadEmail({
            name: input.name,
            phone: input.phone,
            email: input.email,
            subject: input.subject,
            message: input.message,
          }),
        ]);

        return {
          success: true,
          message: "Message received! We'll get back to you within 2 hours.",
        };
      }),

    requestCallback: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        phone: z.string().min(7),
        bestTime: z.string().optional(),
        source: z.string().optional(),
        destination: z.string().optional(),
        moveDate: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const intlLines = [
          input.destination ? `🌍 Destination: ${input.destination}` : null,
          input.moveDate ? `📅 Move Date: ${input.moveDate}` : null,
        ].filter(Boolean).join("\n");

        const notifContent = `📞 CALLBACK REQUEST - Octagon Removals${
          input.destination ? " (INTERNATIONAL LEAD)" : ""
        }\n\n👤 Name: ${input.name}\n📞 Phone: ${input.phone}\n⏰ Best Time: ${input.bestTime || "As soon as possible"}${intlLines ? "\n" + intlLines : ""}\n🔗 Source: ${input.source || "Website"}\n\nSubmitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`.trim();

        const messageLines = [
          input.bestTime ? `Best time: ${input.bestTime}` : null,
          input.destination ? `Destination: ${input.destination}` : null,
          input.moveDate ? `Move date: ${input.moveDate}` : null,
        ].filter(Boolean).join(" | ");

        await saveLead({
          type: "callback",
          status: "new",
          name: input.name,
          phone: input.phone,
          message: messageLines || undefined,
          source: input.source || "/callback",
        });

        await Promise.allSettled([
          notifyOwner({
            title: `📞 ${input.destination ? "🌍 INTL " : ""}Callback - ${input.name} (${input.phone})${input.destination ? " → " + input.destination : ""}`,
            content: notifContent,
          }),
          sendCallbackRequestEmail({
            name: input.name,
            phone: input.phone,
            bestTime: input.bestTime,
            source: input.source,
          }),
        ]);

        return {
          success: true,
          message: `Thank you, ${input.name}! We'll call you back at ${input.phone} ${input.bestTime ? `around ${input.bestTime}` : "as soon as possible"}.`,
        };
      }),

    getAll: publicProcedure
      .query(async () => {
        return getLeads(500);
      }),

    updateStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "quoted", "booked", "lost", "spam"]),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await updateLeadStatus(input.id, input.status, input.notes);
        return { success: true };
      }),

    captureChecklistLead: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        const notifContent = `📋 CHECKLIST DOWNLOAD - Octagon Removals

👤 Name: ${input.name}
📧 Email: ${input.email}
⏰ Downloaded: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}

This is a warm lead actively planning a move. Recommended: follow up within 24 hours.`.trim();

        await saveLead({
          type: "checklist",
          status: "new",
          name: input.name,
          email: input.email,
          source: "/checklist-download",
        });

        await Promise.allSettled([
          notifyOwner({
            title: `📋 Checklist Download - ${input.name} (${input.email})`,
            content: notifContent,
          }),
          sendChecklistLeadEmail({ name: input.name, email: input.email }),
        ]);

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

