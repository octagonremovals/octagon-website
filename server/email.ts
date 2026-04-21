/**
 * Email notification utility for Octagon Removals.
 * Sends formatted lead emails to the business inbox using SMTP.
 * Falls back gracefully if SMTP is not configured.
 */
import nodemailer from "nodemailer";

const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@octagonremovals.co.uk";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || `"Octagon Removals Website" <noreply@octagonremovals.co.uk>`;

function isSmtpConfigured(): boolean {
  return !!(SMTP_HOST && SMTP_USER && SMTP_PASS);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export interface QuoteLead {
  name: string;
  phone: string;
  email: string;
  moveType: string;
  fromPostcode: string;
  toPostcode: string;
  moveDate?: string;
  propertySize?: string;
  message?: string;
  source?: string;
}

export interface ContactLead {
  name: string;
  phone?: string;
  email: string;
  subject?: string;
  message: string;
}

export interface CallbackLead {
  name: string;
  phone: string;
  bestTime?: string;
  source?: string;
}

export interface ChecklistLead {
  name: string;
  email: string;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Not specified";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function htmlWrap(title: string, body: string, urgency: "high" | "normal" = "normal"): string {
  const urgencyBanner = urgency === "high"
    ? `<div style="background:#dc2626;color:#fff;padding:12px 24px;font-weight:700;font-size:16px;text-align:center;">⚡ ACTION REQUIRED — Call this lead back within 1 hour</div>`
    : "";
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr><td style="background:#0F1923;padding:24px 32px;text-align:center;">
          <div style="color:#B8960C;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;">Octagon Removals</div>
          <div style="color:#fff;font-size:22px;font-weight:700;">${title}</div>
        </td></tr>
        ${urgencyBanner}
        <!-- Body -->
        <tr><td style="padding:32px;">
          ${body}
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
          <p style="color:#6b7280;font-size:12px;margin:0;">This notification was sent automatically from the Octagon Removals website. Do not reply to this email.</p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#0F1923;padding:16px 32px;text-align:center;">
          <p style="color:#9ca3af;font-size:12px;margin:0;">Octagon Removals Ltd · Office 56, Millmead Business Centre, London N17 9QU</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${value}</td>
  </tr>`;
}

export async function sendQuoteLeadEmail(lead: QuoteLead): Promise<boolean> {
  if (!isSmtpConfigured()) {
    console.log("[Email] SMTP not configured — skipping email for quote lead:", lead.name);
    return false;
  }

  const body = `
    <p style="font-size:16px;color:#111827;margin:0 0 20px;">A new quote request has been submitted on the Octagon Removals website.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", lead.name)}
      ${row("Phone", `<a href="tel:${lead.phone}" style="color:#B8960C;">${lead.phone}</a>`)}
      ${row("Email", `<a href="mailto:${lead.email}" style="color:#B8960C;">${lead.email}</a>`)}
      ${row("Move Type", lead.moveType)}
      ${row("Property Size", lead.propertySize || "Not specified")}
      ${row("From Postcode", lead.fromPostcode.toUpperCase())}
      ${row("To Postcode", lead.toPostcode.toUpperCase())}
      ${row("Move Date", formatDate(lead.moveDate))}
      ${row("Message", lead.message || "None")}
      ${row("Source", lead.source || "Website")}
      ${row("Submitted", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }))}
    </table>
    <div style="margin-top:24px;">
      <a href="tel:${lead.phone}" style="display:inline-block;background:#B8960C;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;font-size:15px;">📞 Call ${lead.name} Now</a>
    </div>`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_FROM,
      to: OWNER_EMAIL,
      subject: `🚚 New Quote Request — ${lead.name} (${lead.fromPostcode.toUpperCase()} → ${lead.toPostcode.toUpperCase()})`,
      html: htmlWrap("New Quote Request", body, "high"),
    });
    console.log("[Email] Quote lead email sent to", OWNER_EMAIL);
    return true;
  } catch (err) {
    console.error("[Email] Failed to send quote lead email:", err);
    return false;
  }
}

export async function sendContactLeadEmail(lead: ContactLead): Promise<boolean> {
  if (!isSmtpConfigured()) {
    console.log("[Email] SMTP not configured — skipping email for contact lead:", lead.name);
    return false;
  }

  const body = `
    <p style="font-size:16px;color:#111827;margin:0 0 20px;">A new contact message has been submitted on the Octagon Removals website.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", lead.name)}
      ${row("Phone", lead.phone ? `<a href="tel:${lead.phone}" style="color:#B8960C;">${lead.phone}</a>` : "Not provided")}
      ${row("Email", `<a href="mailto:${lead.email}" style="color:#B8960C;">${lead.email}</a>`)}
      ${row("Subject", lead.subject || "General Enquiry")}
      ${row("Submitted", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }))}
    </table>
    <div style="margin-top:16px;background:#f9fafb;border-left:4px solid #B8960C;padding:16px 20px;border-radius:0 6px 6px 0;">
      <p style="color:#374151;font-size:14px;margin:0;line-height:1.6;">${lead.message.replace(/\n/g, "<br>")}</p>
    </div>`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_FROM,
      to: OWNER_EMAIL,
      subject: `📩 Contact Message — ${lead.name}: ${lead.subject || "General Enquiry"}`,
      html: htmlWrap("New Contact Message", body),
    });
    console.log("[Email] Contact lead email sent to", OWNER_EMAIL);
    return true;
  } catch (err) {
    console.error("[Email] Failed to send contact lead email:", err);
    return false;
  }
}

export async function sendCallbackRequestEmail(lead: CallbackLead): Promise<boolean> {
  if (!isSmtpConfigured()) {
    console.log("[Email] SMTP not configured — skipping callback email:", lead.name);
    return false;
  }

  const body = `
    <p style="font-size:16px;color:#111827;margin:0 0 20px;">Someone has requested a callback via the AI chat widget.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", lead.name)}
      ${row("Phone", `<a href="tel:${lead.phone}" style="color:#B8960C;">${lead.phone}</a>`)}
      ${row("Best Time", lead.bestTime || "As soon as possible")}
      ${row("Source", lead.source || "AI Chat Widget")}
      ${row("Submitted", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }))}
    </table>
    <div style="margin-top:24px;">
      <a href="tel:${lead.phone}" style="display:inline-block;background:#B8960C;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;font-size:15px;">📞 Call ${lead.name} Now</a>
    </div>`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_FROM,
      to: OWNER_EMAIL,
      subject: `📞 Callback Request — ${lead.name} (${lead.phone})`,
      html: htmlWrap("Callback Request", body, "high"),
    });
    return true;
  } catch (err) {
    console.error("[Email] Failed to send callback email:", err);
    return false;
  }
}

export async function sendChecklistLeadEmail(lead: ChecklistLead): Promise<boolean> {
  if (!isSmtpConfigured()) {
    console.log("[Email] SMTP not configured — skipping checklist email:", lead.email);
    return false;
  }

  const body = `
    <p style="font-size:16px;color:#111827;margin:0 0 20px;">Someone downloaded the Moving Checklist — this is a warm lead actively planning a move.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", lead.name)}
      ${row("Email", `<a href="mailto:${lead.email}" style="color:#B8960C;">${lead.email}</a>`)}
      ${row("Downloaded", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }))}
    </table>
    <p style="margin-top:16px;color:#374151;font-size:14px;">Recommended follow-up: Send a personalised email within 24 hours offering a free quote.</p>`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_FROM,
      to: OWNER_EMAIL,
      subject: `📋 Checklist Download — ${lead.name} (${lead.email})`,
      html: htmlWrap("Moving Checklist Download", body),
    });
    return true;
  } catch (err) {
    console.error("[Email] Failed to send checklist email:", err);
    return false;
  }
}
