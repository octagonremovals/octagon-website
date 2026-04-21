/*
 * FLOATING WIDGETS — Octagon Removals
 * Contains:
 *  1. WhatsApp floating button (bottom-right, always visible)
 *  2. Sticky mobile CTA bar (bottom, mobile only)
 *  3. Trustpilot trust badge (rendered inline where needed, exported separately)
 */
import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Star } from "lucide-react";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "442085218000"; // 0208 521 8000 in international format
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Octagon Removals! I'd like to get a free quote for my move. Can you help?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ── WHATSAPP BUTTON ──────────────────────────────────────────────────────────
export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay appearance so it doesn't compete with page load
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px", // above mobile CTA bar
        left: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
      }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            backgroundColor: "#0F1923",
            color: "#F5F3EF",
            fontSize: "12px",
            fontFamily: "DM Sans, sans-serif",
            padding: "8px 14px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            border: "1px solid rgba(184,150,12,0.3)",
            position: "relative",
          }}
        >
          Chat with us on WhatsApp
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "22px",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #0F1923",
            }}
          />
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
          animation: "whatsapp-pulse 2.5s infinite",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </div>
  );
}

// ── STICKY MOBILE CTA BAR ────────────────────────────────────────────────────
export function MobileCTABar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        backgroundColor: "#0F1923",
        borderTop: "2px solid #B8960C",
        padding: "10px 16px",
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
      className="lg:hidden" // Only show on mobile/tablet
    >
      {/* Call button */}
      <a
        href="tel:02085218000"
        style={{
          flex: 1,
          backgroundColor: "transparent",
          border: "1px solid rgba(184,150,12,0.5)",
          color: "#F5F3EF",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "DM Sans, sans-serif",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "12px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          textDecoration: "none",
        }}
      >
        <Phone size={14} style={{ color: "#B8960C" }} />
        Call Now
      </a>

      {/* Quote button */}
      <Link href="/get-quote">
        <span
          style={{
            flex: 2,
            backgroundColor: "#B8960C",
            color: "#0F1923",
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "DM Sans, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            cursor: "pointer",
          }}
        >
          <MessageCircle size={14} />
          Get Free Quote
        </span>
      </Link>

      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          background: "none",
          border: "none",
          color: "rgba(245,243,239,0.4)",
          cursor: "pointer",
          padding: "4px",
          flexShrink: 0,
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}

// ── TRUSTPILOT BADGE ─────────────────────────────────────────────────────────
// Renders a styled trust badge linking to Trustpilot.
// Use inline on the homepage trust bar and footer.
export function TrustpilotBadge({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const bg = variant === "dark" ? "#0F1923" : "#ffffff";
  const textColor = variant === "dark" ? "#F5F3EF" : "#0F1923";
  const subColor = variant === "dark" ? "#8A9BB0" : "#5a6a7a";

  return (
    <a
      href="https://www.trustpilot.com/review/octagonremovals.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        backgroundColor: bg,
        border: "1px solid rgba(184,150,12,0.25)",
        textDecoration: "none",
        transition: "border-color 0.2s",
      }}
      onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#B8960C")}
      onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,12,0.25)")}
    >
      {/* Trustpilot star row */}
      <div style={{ display: "flex", gap: "2px" }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#00B67A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Star size={12} fill="white" color="white" />
          </div>
        ))}
      </div>

      <div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: textColor,
            fontFamily: "DM Sans, sans-serif",
            lineHeight: 1.2,
          }}
        >
          4.9 / 5 — Excellent
        </div>
        <div
          style={{
            fontSize: "10px",
            color: subColor,
            fontFamily: "DM Sans, sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          Based on 171 Trustpilot reviews
        </div>
      </div>

      {/* Trustpilot logo text */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#00B67A",
          fontFamily: "DM Sans, sans-serif",
          letterSpacing: "0.02em",
          borderLeft: "1px solid rgba(184,150,12,0.2)",
          paddingLeft: "10px",
        }}
      >
        Trustpilot
      </div>
    </a>
  );
}

// ── COMBINED EXPORT ──────────────────────────────────────────────────────────
// Drop <FloatingWidgets /> once in App.tsx to get WhatsApp + Mobile CTA bar everywhere.
export default function FloatingWidgets() {
  return (
    <>
      <WhatsAppButton />
      <MobileCTABar />
    </>
  );
}
