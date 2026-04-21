import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Live Chat ────────────────────────────────────────────────────────────────

/**
 * A chat session represents one visitor's conversation.
 * Sessions are created when a visitor opens the chat widget.
 */
export const chatSessions = mysqlTable("chat_sessions", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique session token stored in visitor's localStorage */
  sessionToken: varchar("sessionToken", { length: 128 }).notNull().unique(),
  /** Visitor's name (collected when they start chat) */
  visitorName: varchar("visitorName", { length: 128 }),
  /** Visitor's email (collected when they start chat) */
  visitorEmail: varchar("visitorEmail", { length: 320 }),
  /** Visitor's phone number (optional) */
  visitorPhone: varchar("visitorPhone", { length: 32 }),
  /** Page the visitor was on when they started the chat */
  startPage: text("startPage"),
  /** Current status of the conversation */
  status: mysqlEnum("status", ["active", "waiting", "closed"]).default("waiting").notNull(),
  /** Whether the owner has seen the latest message */
  ownerRead: boolean("ownerRead").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  closedAt: timestamp("closedAt"),
});

export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = typeof chatSessions.$inferInsert;

/**
 * Individual messages within a chat session.
 */
export const chatMessages = mysqlTable("chat_messages", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: int("sessionId").notNull(),
  /** 'visitor' = sent by website visitor, 'owner' = sent by Octagon staff */
  sender: mysqlEnum("sender", ["visitor", "owner"]).notNull(),
  message: text("message").notNull(),
  /** Whether the recipient has read this message */
  isRead: boolean("isRead").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

// ─── Layout Gallery Annotations ──────────────────────────────────────────────

/**
 * Feedback annotations left by reviewers on layout previews.
 * Each annotation is a pin placed at a relative (x%, y%) position on a layout.
 */
export const layoutAnnotations = mysqlTable("layout_annotations", {
  id: int("id").autoincrement().primaryKey(),
  /** Which layout variant this annotation belongs to, e.g. "layout-a", "layout-gfd" */
  layoutId: varchar("layoutId", { length: 32 }).notNull(),
  /** Reviewer's name */
  reviewerName: varchar("reviewerName", { length: 128 }).notNull(),
  /** The feedback comment */
  comment: text("comment").notNull(),
  /** X position as percentage of the preview width (0–100) */
  xPercent: int("xPercent").notNull(),
  /** Y position as percentage of the preview height (0–100) */
  yPercent: int("yPercent").notNull(),
  /** Sentiment: positive, negative, or neutral */
  sentiment: mysqlEnum("sentiment", ["positive", "negative", "neutral"]).default("neutral").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type LayoutAnnotation = typeof layoutAnnotations.$inferSelect;
export type InsertLayoutAnnotation = typeof layoutAnnotations.$inferInsert;

// ─── Leads ───────────────────────────────────────────────────────────────────

export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  type: mysqlEnum("type", ["quote", "contact", "callback", "checklist"]).notNull(),
  status: mysqlEnum("status", ["new", "contacted", "quoted", "booked", "lost", "spam"]).default("new").notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 32 }),
  moveType: varchar("moveType", { length: 128 }),
  fromPostcode: varchar("fromPostcode", { length: 16 }),
  toPostcode: varchar("toPostcode", { length: 16 }),
  moveDate: varchar("moveDate", { length: 64 }),
  propertySize: varchar("propertySize", { length: 64 }),
  message: text("message"),
  source: varchar("source", { length: 256 }),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
