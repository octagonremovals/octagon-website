/*
 * LAYOUT OPTIONS PAGE — Octagon Removals
 * 5 distinct homepage layout concepts shown as large, fully rendered previews.
 * Each preview is a complete mini-site rendered inline at full width.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Phone, Star, MapPin, ArrowRight, Package, Building2, Home, Truck, Shield, Clock, Award } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-6Uf7qzSVCzFXJfRXBVjVhH.webp";

// ─── Shared mini-components ────────────────────────────────────────────────

const MiniNav = ({ light = false }: { light?: boolean }) => (
  <div style={{
    backgroundColor: light ? "#fff" : "#0F1923",
    borderBottom: light ? "2px solid #0F1923" : "none",
    padding: "0 2rem", height: "52px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
  }}>
    <img src={LOGO_URL} alt="Octagon" style={{ height: "26px", filter: light ? "none" : "brightness(0) invert(1)" }} />
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {["Services", "Locations", "About", "Contact"].map(l => (
        <span key={l} style={{ color: light ? "#0F1923" : "#c8d0db", fontSize: "11px", fontWeight: 500 }}>{l}</span>
      ))}
      <span style={{
        backgroundColor: "#B8960C", color: "#0F1923",
        fontSize: "10px", fontWeight: 700, padding: "5px 14px",
        letterSpacing: "0.08em", textTransform: "uppercase",
      }}>Get Free Quote</span>
    </div>
  </div>
);

const TrustBar = ({ dark = false }: { dark?: boolean }) => (
  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
    {["★ 4.9/5 Trustpilot", "323 Google Reviews", "Fully Insured", "Fixed Price"].map(b => (
      <span key={b} style={{ color: dark ? "rgba(255,255,255,0.6)" : "#8A9BB0", fontSize: "11px", fontWeight: 500 }}>{b}</span>
    ))}
  </div>
);

// ─── Layout A: Split Hero ──────────────────────────────────────────────────
const LayoutA = () => (
  <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#0F1923" }}>
    <MiniNav />
    <div style={{ display: "grid", gridTemplateColumns: "55% 45%", minHeight: "480px" }}>
      {/* Left */}
      <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>London's Premium Removals Company</span>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F5F3EF", fontSize: "3.2rem", fontWeight: 600, lineHeight: 1.05, marginBottom: "1.25rem" }}>
          Moving You<br /><span style={{ color: "#B8960C" }}>Forward</span><br />With Precision
        </h1>
        <TrustBar dark />
        <div style={{ marginTop: "1.5rem", backgroundColor: "#fff", padding: "1.5rem", borderTop: "3px solid #B8960C" }}>
          <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>Free, No-Obligation Quote</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <div style={{ border: "1px solid #d4cfc7", padding: "9px 12px", fontSize: "12px", color: "#8A9BB0", backgroundColor: "#fafaf8" }}>From Postcode</div>
            <div style={{ border: "1px solid #d4cfc7", padding: "9px 12px", fontSize: "12px", color: "#8A9BB0", backgroundColor: "#fafaf8" }}>To Postcode</div>
          </div>
          <div style={{ border: "1px solid #d4cfc7", padding: "9px 12px", fontSize: "12px", color: "#8A9BB0", backgroundColor: "#fafaf8", marginBottom: "0.5rem" }}>Move Type ▾</div>
          <div style={{ backgroundColor: "#B8960C", color: "#0F1923", fontSize: "11px", fontWeight: 700, padding: "11px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
            Get My Free Quote →
          </div>
        </div>
      </div>
      {/* Right: image */}
      <div style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,25,35,0.4) 0%, transparent 60%)" }} />
      </div>
    </div>
    {/* Trust strip */}
    <div style={{ backgroundColor: "#B8960C", padding: "0.75rem 2.5rem", display: "flex", gap: "2rem", justifyContent: "center" }}>
      {[["10,000+", "Moves Completed"], ["4.9★", "Trustpilot Rating"], ["15+", "Years Experience"], ["100%", "Fixed Price"]].map(([n, l]) => (
        <div key={l} style={{ textAlign: "center" }}>
          <div style={{ color: "#0F1923", fontSize: "1.1rem", fontWeight: 700, fontFamily: "Cormorant Garamond, Georgia, serif" }}>{n}</div>
          <div style={{ color: "rgba(15,25,35,0.7)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Layout B: Full-Screen Cinematic ──────────────────────────────────────
const LayoutB = () => (
  <div style={{ fontFamily: "DM Sans, sans-serif", position: "relative", minHeight: "560px", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,25,0.95) 0%, rgba(10,15,25,0.65) 60%, rgba(10,15,25,0.4) 100%)" }} />
    <div style={{ position: "relative", zIndex: 2 }}>
      <MiniNav />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "500px", textAlign: "center", padding: "2rem" }}>
        <div style={{ width: "40px", height: "1px", backgroundColor: "#B8960C", marginBottom: "1.5rem" }} />
        <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem", display: "block" }}>London's Premium Removals Company</span>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#fff", fontSize: "4.5rem", fontWeight: 600, lineHeight: 1.0, marginBottom: "1.5rem", maxWidth: "700px" }}>
          Making Room<br />For Your <em style={{ color: "#B8960C", fontStyle: "italic" }}>Expansion</em>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", maxWidth: "460px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Fixed-price house and office removals across London and the M25. Trusted by over 10,000 families and businesses.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
          <div style={{ backgroundColor: "#B8960C", color: "#0F1923", fontSize: "12px", fontWeight: 700, padding: "14px 36px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Get Free Quote</div>
          <div style={{ backgroundColor: "transparent", color: "#B8960C", fontSize: "12px", fontWeight: 700, padding: "14px 36px", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #B8960C" }}>Call 0208 521 8000</div>
        </div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {["★ 4.9/5 Trustpilot · 171 Reviews", "323 Google Reviews", "Fully Insured · Fixed Price"].map(b => (
            <span key={b} style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Layout C: Magazine Editorial ─────────────────────────────────────────
const LayoutC = () => (
  <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff" }}>
    <MiniNav light />
    <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", minHeight: "500px" }}>
      {/* Left */}
      <div style={{ borderRight: "1px solid #e8e4dc" }}>
        <div style={{ padding: "2.5rem 2.5rem 1.5rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ backgroundColor: "rgba(184,150,12,0.1)", color: "#B8960C", fontSize: "10px", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>★ 4.9/5 Trustpilot</span>
            <span style={{ backgroundColor: "#f0ede8", color: "#5a6a7a", fontSize: "10px", fontWeight: 600, padding: "4px 10px" }}>323 Google Reviews</span>
            <span style={{ backgroundColor: "#f0ede8", color: "#5a6a7a", fontSize: "10px", fontWeight: 600, padding: "4px 10px" }}>Fully Insured</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#0F1923", fontSize: "3.8rem", fontWeight: 700, lineHeight: 1.0, marginBottom: "1.25rem" }}>
            London's Most<br />Trusted Removals<br /><span style={{ color: "#B8960C" }}>Company</span>
          </h1>
          <p style={{ color: "#5a6a7a", fontSize: "13px", lineHeight: 1.8, maxWidth: "500px", marginBottom: "1.5rem" }}>
            Fixed-price house and office removals across London and the M25. Trusted by over 10,000 families and businesses since 2008.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <div style={{ backgroundColor: "#B8960C", color: "#0F1923", fontSize: "11px", fontWeight: 700, padding: "12px 24px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Get Free Quote</div>
            <div style={{ backgroundColor: "transparent", color: "#0F1923", fontSize: "11px", fontWeight: 700, padding: "12px 24px", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #0F1923" }}>Call Us Now</div>
          </div>
        </div>
        <div style={{ height: "180px", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top" }} />
      </div>
      {/* Right */}
      <div style={{ padding: "2rem", backgroundColor: "#F5F3EF" }}>
        <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>Quick Quote</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {["From Postcode", "To Postcode", "Move Type ▾", "Move Date"].map(p => (
            <div key={p} style={{ border: "1px solid #d4cfc7", padding: "9px 12px", fontSize: "12px", color: "#8A9BB0", backgroundColor: "#fff" }}>{p}</div>
          ))}
          <div style={{ backgroundColor: "#B8960C", color: "#0F1923", fontSize: "11px", fontWeight: 700, padding: "11px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>Get Quote →</div>
        </div>
        <div style={{ borderTop: "1px solid #d4cfc7", paddingTop: "1rem" }}>
          <span style={{ color: "#0F1923", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>Our Services</span>
          {[["🏠", "House Removals"], ["🏢", "Office Removals"], ["📦", "Packing Service"], ["🗄️", "Storage"], ["🌍", "International"]].map(([icon, s]) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "14px" }}>{icon}</span>
              <span style={{ fontSize: "12px", color: "#5a6a7a" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Layout D: Bold Diagonal ───────────────────────────────────────────────
const LayoutD = () => (
  <div style={{ fontFamily: "DM Sans, sans-serif", overflow: "hidden" }}>
    <div style={{ position: "relative", backgroundColor: "#0F1923", paddingBottom: "70px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70px", backgroundColor: "#F5F3EF", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <MiniNav />
        <div style={{ padding: "2.5rem 2.5rem 1rem", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "center" }}>
          <div>
            <div style={{ width: "48px", height: "3px", backgroundColor: "#B8960C", marginBottom: "1.25rem" }} />
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#fff", fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.0, marginBottom: "1rem" }}>
              Premium Removals<br /><span style={{ color: "#B8960C" }}>Across London</span><br />& the M25
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Fixed-price. Fully insured. Trusted by 10,000+ families and businesses.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ backgroundColor: "#B8960C", color: "#0F1923", fontSize: "11px", fontWeight: 700, padding: "12px 24px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Get Free Quote</div>
              <div style={{ backgroundColor: "transparent", color: "#B8960C", fontSize: "11px", fontWeight: 700, padding: "12px 24px", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #B8960C" }}>Call Now</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(184,150,12,0.25)" }}>
            {[["4.9★", "Trustpilot"], ["323", "Google Reviews"], ["10,000+", "Moves Done"], ["15+", "Years Exp."]].map(([num, label]) => (
              <div key={label} style={{ backgroundColor: "rgba(15,25,35,0.85)", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#B8960C", fontSize: "2rem", fontWeight: 700 }}>{num}</div>
                <div style={{ color: "#8A9BB0", fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: "#F5F3EF", padding: "1.5rem 2.5rem" }}>
      <div style={{ display: "flex", gap: "1px", backgroundColor: "#e8e4dc" }}>
        {[["🏠", "House Removals"], ["🏢", "Office Moves"], ["📦", "Packing"], ["🗄️", "Storage"], ["🌍", "International"]].map(([icon, label]) => (
          <div key={label} style={{ flex: 1, backgroundColor: "#fff", padding: "1.25rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{icon}</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "#0F1923" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Layout E: Minimal Luxury ──────────────────────────────────────────────
const LayoutE = () => (
  <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#FAFAF8" }}>
    {/* Ultra-minimal nav */}
    <div style={{ borderBottom: "1px solid #e8e4dc", padding: "0 3rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img src={LOGO_URL} alt="Octagon" style={{ height: "26px" }} />
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {["Services", "Locations", "About", "Contact"].map(l => (
          <span key={l} style={{ color: "#5a6a7a", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span style={{ color: "#B8960C", fontSize: "11px", fontWeight: 600 }}>0208 521 8000</span>
        <span style={{ backgroundColor: "#0F1923", color: "#B8960C", fontSize: "9px", fontWeight: 700, padding: "7px 18px", letterSpacing: "0.14em", textTransform: "uppercase" }}>Enquire</span>
      </div>
    </div>
    {/* Hero */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "500px" }}>
      <div style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ width: "32px", height: "1px", backgroundColor: "#B8960C", marginBottom: "2rem" }} />
        <span style={{ color: "#B8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>London Removals Since 2008</span>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#0F1923", fontSize: "4rem", fontWeight: 400, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
          Making Room<br />For Your<br /><em style={{ color: "#B8960C" }}>Expansion.</em>
        </h1>
        <p style={{ color: "#8A9BB0", fontSize: "13px", lineHeight: 1.9, maxWidth: "380px", marginBottom: "2.5rem" }}>
          Premium house and office removals across London and the M25. Fixed price. Fully insured. White-glove service.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <div style={{ backgroundColor: "transparent", color: "#0F1923", fontSize: "10px", fontWeight: 700, padding: "12px 28px", letterSpacing: "0.14em", textTransform: "uppercase", border: "1px solid #0F1923" }}>Request a Quote</div>
          <span style={{ color: "#B8960C", fontSize: "11px", fontWeight: 600 }}>View Our Work →</span>
        </div>
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e8e4dc", display: "flex", gap: "1.5rem" }}>
          <span style={{ color: "#8A9BB0", fontSize: "10px" }}>★★★★★ <strong style={{ color: "#0F1923" }}>4.9/5</strong> Trustpilot</span>
          <span style={{ color: "#8A9BB0", fontSize: "10px" }}><strong style={{ color: "#0F1923" }}>323</strong> Google Reviews</span>
          <span style={{ color: "#8A9BB0", fontSize: "10px" }}><strong style={{ color: "#0F1923" }}>Fully</strong> Insured</span>
        </div>
      </div>
      <div style={{ position: "relative", margin: "2rem 2rem 2rem 0" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", top: "-8px", left: "-8px", width: "36px", height: "36px", borderTop: "2px solid #B8960C", borderLeft: "2px solid #B8960C" }} />
        <div style={{ position: "absolute", bottom: "-8px", right: "-8px", width: "36px", height: "36px", borderBottom: "2px solid #B8960C", borderRight: "2px solid #B8960C" }} />
      </div>
    </div>
  </div>
);

const layouts = [
  { id: 1, label: "A", name: "Split Hero", tag: "Asymmetric · Highest Conversion", description: "Quote form always visible above the fold — visitors never have to scroll to enquire. Best for lead generation.", Component: LayoutA },
  { id: 2, label: "B", name: "Full-Screen Cinematic", tag: "Immersive · Premium Feel", description: "Full-viewport dark hero with large serif headline. Luxury hotel aesthetic — commands attention and conveys premium quality.", Component: LayoutB },
  { id: 3, label: "C", name: "Magazine Editorial", tag: "Editorial · Trust-First", description: "Newspaper-style grid with trust badges prominent at the top. Conveys authority, credibility, and established expertise.", Component: LayoutC },
  { id: 4, label: "D", name: "Bold Diagonal", tag: "Dynamic · Modern", description: "Diagonal section cuts with gold accent lines and a stats panel. High energy, contemporary feel — stands out from competitors.", Component: LayoutD },
  { id: 5, label: "E", name: "Minimal Luxury", tag: "Understated · Ultra-Premium", description: "Generous whitespace, thin gold lines, small caps. Inspired by high-end estate agents. For clients who value discretion.", Component: LayoutE },
];

export default function LayoutOptions() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#0F1923", minHeight: "100vh", fontFamily: "DM Sans, sans-serif" }}>
      {/* Page header */}
      <div style={{ padding: "2rem 2.5rem", borderBottom: "1px solid rgba(184,150,12,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Design Selection</span>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F5F3EF", fontSize: "2rem", fontWeight: 600, margin: 0 }}>
            Choose Your Homepage Layout
          </h1>
        </div>
        <Link href="/">
          <span style={{ color: "#8A9BB0", fontSize: "12px", cursor: "pointer", border: "1px solid rgba(184,150,12,0.2)", padding: "8px 16px" }}>← Back to Current Site</span>
        </Link>
      </div>

      <div style={{ padding: "2rem 2.5rem" }}>
        <p style={{ color: "#8A9BB0", fontSize: "13px", lineHeight: 1.7, maxWidth: "700px", marginBottom: "2.5rem" }}>
          Below are five distinct homepage layout concepts. Each shows a live preview of exactly how your homepage would look. Click <strong style={{ color: "#B8960C" }}>Select This Layout</strong> on the one you prefer and we'll build it out immediately.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {layouts.map((layout, i) => {
            const isSelected = selected === layout.id;
            return (
              <motion.div
                key={layout.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  border: isSelected ? "2px solid #B8960C" : "1px solid rgba(184,150,12,0.25)",
                  overflow: "hidden",
                  backgroundColor: "#1A2535",
                }}
              >
                {/* Option header */}
                <div style={{ padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(184,150,12,0.15)", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: isSelected ? "#B8960C" : "rgba(184,150,12,0.12)",
                      border: "1px solid rgba(184,150,12,0.4)",
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      color: isSelected ? "#0F1923" : "#B8960C",
                      fontWeight: 700, fontSize: "1.1rem",
                    }}>
                      {layout.label}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F5F3EF", fontSize: "1.2rem", fontWeight: 600, margin: 0, marginBottom: "2px" }}>
                        Option {layout.label} — {layout.name}
                      </h3>
                      <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{layout.tag}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(isSelected ? null : layout.id)}
                    style={{
                      backgroundColor: isSelected ? "#B8960C" : "transparent",
                      color: isSelected ? "#0F1923" : "#B8960C",
                      fontSize: "11px", fontWeight: 700,
                      border: "1px solid #B8960C", padding: "8px 20px",
                      cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase",
                      display: "flex", alignItems: "center", gap: "6px",
                    }}
                  >
                    {isSelected ? "✓ Selected" : "Select This Layout"}
                  </button>
                </div>

                {/* Description */}
                <div style={{ padding: "0.75rem 1.75rem", borderBottom: "1px solid rgba(184,150,12,0.1)", backgroundColor: "rgba(0,0,0,0.2)" }}>
                  <p style={{ color: "#8A9BB0", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{layout.description}</p>
                </div>

                {/* FULL PREVIEW — always visible */}
                <div style={{ overflow: "hidden" }}>
                  <layout.Component />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selection confirmation */}
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem 2rem",
              backgroundColor: "rgba(184,150,12,0.1)",
              border: "1px solid #B8960C",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
            }}
          >
            <div>
              <p style={{ color: "#B8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px", margin: 0 }}>You've selected:</p>
              <p style={{ color: "#F5F3EF", fontSize: "1.15rem", fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 600, margin: 0, marginTop: "4px" }}>
                {layouts.find(l => l.id === selected)?.name} — Option {layouts.find(l => l.id === selected)?.label}
              </p>
            </div>
            <p style={{ color: "#8A9BB0", fontSize: "12px", maxWidth: "400px", lineHeight: 1.6, margin: 0 }}>
              Tell us in the chat which option you've chosen and we'll build it out as your full homepage right away.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
