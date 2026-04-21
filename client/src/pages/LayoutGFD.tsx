/**
 * LAYOUT GFD — "The Octagon Signature"
 * Combines:
 *   G (Cinematic) — full-bleed dramatic hero, bold typography, storytelling flow
 *   F (Scandinavian) — clean structure, warm whites, breathing space, honest copy
 *   D (Concierge) — warm hospitality, personal touch, trust-first conversion
 *
 * Brand Colours (extracted from octagonremovals.co.uk):
 *   Gold:          #FAB700  — primary accent, CTAs, highlights
 *   Charcoal:      #161921  — primary dark background
 *   Deep Navy:     #0F173B  — secondary dark
 *   Darkest:       #040817  — hero overlays
 *   Off-White:     #EDEDED  — light backgrounds
 *   Pure White:    #FFFFFF  — text on dark
 *
 * Fonts: Cormorant Garamond (display headings), DM Sans (body/UI)
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Star, Shield, Clock, Award, Phone, CheckCircle2, Loader2,
  ChevronRight, Package, Building2, Truck, Warehouse, Globe,
  Users, ArrowRight, MapPin, Calendar, Quote
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";

// ─── Brand Colours ───────────────────────────────────────────────────────────
const GOLD       = "#FAB700";
const CHARCOAL   = "#161921";
const NAVY       = "#0F173B";
const DARKEST    = "#040817";
const OFF_WHITE  = "#EDEDED";
const WARM_GREY  = "#F5F3EF";

// ─── CDN Images (all real Octagon photos) ────────────────────────────────────
const HERO_IMG      = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-team-vans_6ff57777.jpeg";
const SKYLINE_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/big-ben_23d44d30.jpeg";
const TEAM_SLIDER2  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-slider-2_410682e3.jpeg";
const PACKING_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-service_3a075a0e.jpeg";
const OFFICE_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move_f93120f3.jpeg";
const FURNITURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/furniture-securing_0e9d0cb3.jpeg";
const PIANO_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/piano-move_d00780c5.jpeg";
const INTL_IMG      = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/international_72c94721.jpeg";
const PAWEL_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/pawel-portrait_35d61ad7.jpeg";
const TEAM_WORK1    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-work-1_8b0e40fa.jpeg";
const TEAM_WORK2    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-work-2_1a5d9362.jpeg";
const TEAM_OCTAGON  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-london_a4002f40.jpeg";
const TEAM_CLIENT   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/richmond-clients_cb42d7d0.jpeg";
const TEAM_EPPING   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-epping_3ecb555f.jpeg";
const TEAM_OCTAGON2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-octagon-2_3e9dad2c.jpeg";

const LAYOUTS = ["A","B","C","D","E","F","G","H","I","J","ABC","GFD"];

// ─── Quote Form ───────────────────────────────────────────────────────────────
function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    moveType: "", fromPostcode: "", toPostcode: "", moveDate: "",
    name: "", phone: "", email: ""
  });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1
    ? (form.moveType && form.fromPostcode && form.toPostcode)
    : (form.name && form.phone && form.email);

  const inputStyle: React.CSSProperties = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.875rem",
    color: CHARCOAL,
    backgroundColor: "#fff",
    border: `1px solid ${OFF_WHITE}`,
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    borderRadius: "2px",
    transition: "border-color 0.2s",
  };

  if (submitted) return (
    <div className="text-center py-10">
      <CheckCircle2 size={40} style={{ color: GOLD }} className="mx-auto mb-4" />
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: CHARCOAL, fontWeight: 600 }}>
        Thank you — we'll call within 1 hour.
      </p>
      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", color: "#666", marginTop: "8px" }}>
        Mon–Fri 8am–6pm · Sat 9am–2pm
      </p>
    </div>
  );

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-6">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{
                backgroundColor: step >= s ? GOLD : OFF_WHITE,
                color: step >= s ? "#fff" : "#999",
                fontFamily: "DM Sans, sans-serif",
                transition: "all 0.3s"
              }}>
              {s}
            </div>
            {s < 2 && <div className="w-6 h-px" style={{ backgroundColor: step > s ? GOLD : OFF_WHITE }} />}
          </div>
        ))}
        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#999", textTransform: "uppercase" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange} style={inputStyle}>
            <option value="">Move Type</option>
            <option value="house">House Removal</option>
            <option value="flat">Flat Removal</option>
            <option value="office">Office Removal</option>
            <option value="storage">Storage</option>
            <option value="international">International</option>
            <option value="piano">Piano / Specialist</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange}
              placeholder="From Postcode" style={inputStyle} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange}
              placeholder="To Postcode" style={inputStyle} />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            style={inputStyle} />
          <button
            onClick={() => canProceed && setStep(2)}
            disabled={!canProceed}
            style={{
              width: "100%", padding: "14px",
              backgroundColor: canProceed ? GOLD : OFF_WHITE,
              color: canProceed ? CHARCOAL : "#999",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700, fontSize: "0.875rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              border: "none", cursor: canProceed ? "pointer" : "not-allowed",
              borderRadius: "2px", transition: "all 0.2s"
            }}>
            Get My Fixed Price →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Full Name" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange}
            placeholder="Phone Number" style={inputStyle} />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email Address" style={inputStyle} />
          <button
            onClick={() => canProceed && submitQuote.mutate({
              moveType: form.moveType, fromPostcode: form.fromPostcode,
              toPostcode: form.toPostcode, moveDate: form.moveDate,
              name: form.name, phone: form.phone, email: form.email,
              source: "layout-gfd"
            })}
            disabled={!canProceed || submitQuote.isPending}
            style={{
              width: "100%", padding: "14px",
              backgroundColor: canProceed ? GOLD : OFF_WHITE,
              color: canProceed ? CHARCOAL : "#999",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700, fontSize: "0.875rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              border: "none", cursor: canProceed ? "pointer" : "not-allowed",
              borderRadius: "2px", transition: "all 0.2s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"
            }}>
            {submitQuote.isPending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Request My Free Quote"}
          </button>
          <button onClick={() => setStep(1)}
            style={{ background: "none", border: "none", color: "#999", fontSize: "0.8rem", cursor: "pointer", fontFamily: "DM Sans, sans-serif", width: "100%", textAlign: "center" }}>
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LayoutGFD() {
  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: WARM_GREY }}>
      <SEOHead
        title="Octagon Removals — London's Premium Removals Company"
        description="Fixed-price house, office and international removals across London and the M25. Trusted by over 10,000 families and businesses. Call 0208 927 0542."
      />

      {/* ── STICKY NAV (from G — cinematic, dark) ──────────────────────────── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: CHARCOAL, borderBottom: `1px solid rgba(250,183,0,0.15)` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1rem", color: CHARCOAL }}>O</span>
            </div>
            <div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", lineHeight: 1 }}>OCTAGON</div>
              <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>REMOVALS LTD</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Locations", "Reviews"].map(item => (
              <a key={item} href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: OFF_WHITE, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = OFF_WHITE)}>
                {item}
              </a>
            ))}
          </div>
          <a href="tel:02089270542" style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: GOLD, padding: "10px 20px", textDecoration: "none" }}>
            <Phone size={14} color={CHARCOAL} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.8rem", color: CHARCOAL, letterSpacing: "0.05em" }}>0208 927 0542</span>
          </a>
        </div>
      </nav>

      {/* ── HERO (from G — cinematic full-bleed with real van photo) ─────────── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden", paddingTop: "64px" }}>
        <img src={HERO_IMG} alt="Octagon Removals team and fleet" loading="eager"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        {/* Gradient overlay — brand charcoal */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, ${DARKEST}ee 0%, ${CHARCOAL}cc 40%, transparent 100%)` }} />
        {/* Gold accent line */}
        <div style={{ position: "absolute", left: 0, top: "64px", bottom: 0, width: "4px", backgroundColor: GOLD }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: "620px" }}>
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "1px", backgroundColor: GOLD }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>
                London's Premium Removals Company
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, marginBottom: "24px" }}>
              Moving You<br />
              <span style={{ color: GOLD }}>Forward</span><br />
              With Precision
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "480px" }}>
              Fixed-price house, office and international removals across London and the M25.
              Trusted by over 10,000 families and businesses since 2017.
            </motion.p>

            {/* Trust badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Star, text: "4.9★ Google (320 reviews)" },
                { icon: Shield, text: "Fully Insured" },
                { icon: Award, text: "9+ Years Experience" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.08)", padding: "8px 16px", border: "1px solid rgba(250,183,0,0.3)" }}>
                  <Icon size={14} color={GOLD} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: OFF_WHITE }}>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4">
              <a href="#quote"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: GOLD, color: CHARCOAL, padding: "16px 32px", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}>
                Get Free Quote <ArrowRight size={16} />
              </a>
              <a href="tel:02089270542"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: `1px solid rgba(250,183,0,0.5)`, color: "#fff", padding: "16px 32px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}>
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", backgroundColor: GOLD, opacity: 0.5 }} />
        </div>
      </section>

      {/* ── TRUST BAR (from F — Scandinavian clean) ──────────────────────────── */}
      <section style={{ backgroundColor: CHARCOAL, padding: "20px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px" }}>
          {[
            { label: "Google Rating", value: "4.9★", sub: "320 reviews" },
            { label: "Trustpilot", value: "4.8★", sub: "170 reviews" },
            { label: "Years Trading", value: "9+", sub: "Since 2017" },
            { label: "Moves Completed", value: "10,000+", sub: "Families & businesses" },
            { label: "Fixed Price", value: "100%", sub: "No hidden fees" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 700, color: GOLD }}>{value}</div>
              <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: OFF_WHITE, marginTop: "2px" }}>{label}</div>
              <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE SECTION (from D — Concierge, warm and personal) ─────────────── */}
      <section id="quote" style={{ backgroundColor: WARM_GREY, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          {/* Left — image + promise */}
          <div>
            <div style={{ position: "relative" }}>
              <img src={TEAM_CLIENT} alt="Octagon team with clients in Richmond"
                style={{ width: "100%", height: "420px", objectFit: "cover" }} />
              {/* Gold accent */}
              <div style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "80px", height: "80px", backgroundColor: GOLD, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1.6rem", color: CHARCOAL, lineHeight: 1 }}>15</span>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: CHARCOAL }}>Years</span>
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 700, color: CHARCOAL, marginBottom: "16px" }}>
                The Octagon Promise
              </h3>
              <div className="space-y-3">
                {[
                  "Fixed price agreed upfront — no surprises on moving day",
                  "Fully insured to £50,000 per item",
                  "Not on price comparison sites — direct, personal service",
                  "Dedicated move manager from first call to final box",
                  "Mon–Fri 8am–6pm · Sat 9am–2pm",
                ].map(promise => (
                  <div key={promise} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle2 size={16} style={{ color: GOLD, flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.6 }}>{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — quote form */}
          <div>
            <div style={{ backgroundColor: "#fff", padding: "40px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD }}>Free, No-Obligation</span>
              </div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 700, color: CHARCOAL, marginBottom: "8px" }}>
                Get Your Fixed-Price Quote
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", color: "#888", marginBottom: "28px" }}>
                We'll call you within 1 hour during business hours.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID (from F — Scandinavian clean grid) ─────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>What We Do</span>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: CHARCOAL }}>
              Premium Removal Services
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "#666", marginTop: "12px", maxWidth: "560px", margin: "12px auto 0" }}>
              Every service is delivered with the same commitment to care, precision and fixed pricing.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px", backgroundColor: OFF_WHITE }}>
            {[
              { img: HERO_IMG, icon: Truck, title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured, dedicated team." },
              { img: OFFICE_IMG, icon: Building2, title: "Office Removals", desc: "Minimal downtime, maximum care. We move businesses of all sizes — from single offices to 100+ desks." },
              { img: PACKING_IMG, icon: Package, title: "Packing Service", desc: "Professional packing using premium materials. We wrap, box and protect every item as if it were our own." },
              { img: FURNITURE_IMG, icon: Users, title: "Furniture Assembly", desc: "Dismantling and reassembly included. Our team handles wardrobes, beds, flat-packs and bespoke furniture." },
              { img: PIANO_IMG, icon: Award, title: "Piano & Specialist", desc: "Baby grands, uprights, antiques and fine art. Specialist equipment, specialist team, specialist care." },
              { img: INTL_IMG, icon: Globe, title: "International Removals", desc: "Door-to-door European and worldwide moves. Full customs documentation and dedicated move manager." },
            ].map(({ img, icon: Icon, title, desc }) => (
              <div key={title} style={{ backgroundColor: "#fff", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", width: "36px", height: "36px", backgroundColor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} color={CHARCOAL} />
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 700, color: CHARCOAL, marginBottom: "8px" }}>{title}</h3>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", color: "#666", lineHeight: 1.7 }}>{desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "16px" }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: GOLD }}>Learn more</span>
                    <ChevronRight size={14} color={GOLD} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC SPLIT (from G — full-bleed dark section with skyline) ─── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
          {/* Left — dark brand panel */}
          <div style={{ backgroundColor: CHARCOAL, padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ width: "40px", height: "3px", backgroundColor: GOLD, marginBottom: "32px" }} />
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "24px" }}>
              Not on price<br />
              comparison sites.<br />
              <span style={{ color: GOLD }}>By design.</span>
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "32px", maxWidth: "400px" }}>
              We don't compete on price with anonymous companies. We compete on quality, reliability and the personal service that comes from 15 years of doing this properly. Every quote is fixed. Every team member is vetted. Every move is insured.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Fully Insured", sub: "£50k per item" },
                { icon: Clock, label: "On Time", sub: "Guaranteed" },
                { icon: Award, label: "Vetted Teams", sub: "DBS checked" },
                { icon: Users, label: "Dedicated Manager", sub: "Your single point of contact" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(250,183,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={14} color={GOLD} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#fff" }}>{label}</div>
                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Big Ben / London skyline photo */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={SKYLINE_IMG} alt="Octagon Removals in London"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${CHARCOAL}44, transparent)` }} />
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION (from D — Concierge, warm and personal) ─────────────── */}
      <section style={{ backgroundColor: WARM_GREY, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "64px" }}>
            {/* Left — Pawel portrait */}
            <div style={{ position: "relative" }}>
              <img src={PAWEL_IMG} alt="Pawel Walerczuk — Managing Director, Octagon Removals"
                style={{ width: "100%", height: "500px", objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", backgroundColor: CHARCOAL, padding: "20px 24px" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Pawel Walerczuk</div>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginTop: "4px" }}>Managing Director & Founder</div>
              </div>
            </div>
            {/* Right — founder message */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ height: "1px", width: "40px", backgroundColor: GOLD }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>From the Founder</span>
              </div>
              <Quote size={32} style={{ color: GOLD, opacity: 0.4, marginBottom: "16px" }} />
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontStyle: "italic", color: CHARCOAL, lineHeight: 1.7, marginBottom: "24px" }}>
                "I started Octagon because I believed that moving home or office should be a positive experience — not a source of stress. Fifteen years later, that belief drives everything we do."
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#666", lineHeight: 1.8, marginBottom: "32px" }}>
                Every member of our team is personally vetted, trained to our standards, and committed to the same principle: your belongings are treated with the same care we would give our own. That is not a marketing line — it is how we have built a business that 95% of our clients recommend to others.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10,000+", label: "Moves completed" },
                  { value: "320", label: "Google reviews" },
                  { value: "9+", label: "Years experience" },
                ].map(({ value, label }) => (
                  <div key={label} style={{ textAlign: "center", padding: "16px", backgroundColor: "#fff" }}>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 700, color: GOLD }}>{value}</div>
                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "#888", marginTop: "4px" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team in action — photo strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
            {[
              { img: TEAM_WORK1, caption: "Our storage facility" },
              { img: TEAM_WORK2, caption: "Interior care" },
              { img: TEAM_EPPING, caption: "Epping clients" },
              { img: TEAM_OCTAGON2, caption: "The full Octagon fleet" },
            ].map(({ img, caption }) => (
              <div key={caption} style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                <img src={img} alt={caption} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "linear-gradient(to top, rgba(22,25,33,0.8), transparent)" }}>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: OFF_WHITE }}>{caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS (from F — Scandinavian, clean card layout) ───────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>Client Reviews</span>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: CHARCOAL }}>
              What Our Clients Say
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={GOLD} color={GOLD} />)}
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#666", marginLeft: "8px" }}>4.9 average from 320 Google reviews</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { name: "Sarah M.", location: "Kensington", rating: 5, text: "Absolutely flawless service from start to finish. The team arrived on time, handled our antiques with extraordinary care, and had us settled in our new home by 3pm. Worth every penny.", date: "March 2025" },
              { name: "James T.", location: "Canary Wharf", rating: 5, text: "We moved our entire office of 45 people over a weekend. Octagon were professional, efficient, and nothing was damaged. I'd recommend them without hesitation to any business.", date: "February 2025" },
              { name: "Emma R.", location: "Richmond", rating: 5, text: "The packing team were exceptional — they wrapped everything meticulously and even helped reassemble our furniture. The fixed price meant no nasty surprises on moving day.", date: "January 2025" },
            ].map(({ name, location, rating, text, date }) => (
              <div key={name} style={{ backgroundColor: WARM_GREY, padding: "32px", borderLeft: `3px solid ${GOLD}` }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {Array.from({ length: rating }).map((_, i) => <Star key={i} size={14} fill={GOLD} color={GOLD} />)}
                </div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "20px", fontStyle: "italic" }}>
                  "{text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.875rem", color: CHARCOAL }}>{name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <MapPin size={11} color={GOLD} />
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#888" }}>{location}</span>
                    </div>
                  </div>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#aaa" }}>{date}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/reviews" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", fontWeight: 600, color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: "2px" }}>
              Read all 320 reviews on Google <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS (from G — cinematic dark grid) ─────────────────────────── */}
      <section style={{ backgroundColor: CHARCOAL, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>Service Areas</span>
              <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff" }}>
              Covering London & the M25
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "2px" }}>
            {[
              "Barking", "Barnet", "Battersea", "Brentwood", "Bromley", "Camden",
              "Chelsea", "Chiswick", "Croydon", "Dartford", "Ealing", "Enfield",
              "Epping", "Epsom", "Fulham", "Greenwich", "Hackney", "Harrow",
              "Havering", "Holborn", "Islington", "Kensington", "Kingston",
              "Orpington", "Richmond", "Romford", "Tower Hamlets", "Twickenham",
              "Uxbridge", "Wandsworth", "Watford", "Westminster",
            ].map(area => (
              <Link key={area} href={`/locations/${area.toLowerCase().replace(/\s+/g, "-")}`}>
                <div style={{ backgroundColor: "rgba(255,255,255,0.04)", padding: "14px 16px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", transition: "background 0.2s", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => { (e.currentTarget.style.backgroundColor = "rgba(250,183,0,0.1)"); (e.currentTarget.style.borderBottomColor = GOLD); }}
                  onMouseLeave={e => { (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"); (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.06)"); }}>
                  <MapPin size={12} color={GOLD} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: OFF_WHITE }}>{area}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (from D — Concierge warmth + G cinematic impact) ──────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src={TEAM_OCTAGON} alt="Octagon Removals full fleet"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: `${DARKEST}dd` }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD }}>Ready to Move?</span>
            <div style={{ height: "1px", width: "60px", backgroundColor: GOLD }} />
          </div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>
            Let's Plan Your Move<br />
            <span style={{ color: GOLD }}>Together</span>
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            Call us or request a free quote online. We'll confirm your fixed price within 1 hour and assign your dedicated move manager.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: GOLD, color: CHARCOAL, padding: "18px 40px", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Get Free Quote <ArrowRight size={16} />
            </a>
            <a href="tel:02089270542" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: `2px solid ${GOLD}`, color: "#fff", padding: "18px 40px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              <Phone size={16} /> 0208 927 0542
            </a>
          </div>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "24px" }}>
            Mon–Fri 8am–6pm · Sat 9am–2pm · Fully Insured · Fixed Price
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: DARKEST, padding: "48px 24px 24px", borderTop: `1px solid rgba(250,183,0,0.15)` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "36px", height: "36px", backgroundColor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1rem", color: CHARCOAL }}>O</span>
                </div>
                <div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>OCTAGON REMOVALS LTD</div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase" }}>London's Premium Removals Company</div>
                </div>
              </div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "280px" }}>
                Fixed-price removals across London and the M25 since 2017. Trusted by over 10,000 families and businesses.
              </p>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="tel:02089270542" style={{ display: "flex", alignItems: "center", gap: "8px", color: GOLD, textDecoration: "none", fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem" }}>
                  <Phone size={14} /> 0208 927 0542
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem" }}>
                  <Clock size={14} /> Mon–Fri 8am–6pm · Sat 9am–2pm
                </div>
              </div>
            </div>
            {[
              { heading: "Services", links: ["House Removals", "Office Removals", "Packing Service", "Piano Moving", "International", "Storage"] },
              { heading: "Company", links: ["About Us", "Our Team", "Reviews", "FAQ", "Blog", "Contact"] },
              { heading: "Areas", links: ["Bromley", "Croydon", "Kensington", "Richmond", "Islington", "All Areas →"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "16px" }}>{heading}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()} Octagon Removals Ltd. Registered in England & Wales. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(link => (
                <a key={link} href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── LAYOUT SWITCHER ────────────────────────────────────────────────────── */}
      <div style={{ position: "fixed", bottom: "80px", right: "16px", zIndex: 999, display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: "4px" }}>Layouts</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "200px", justifyContent: "flex-end" }}>
          {LAYOUTS.map(l => (
            <Link key={l} href={l === "ABC" ? "/layout-abc" : l === "GFD" ? "/layout-gfd" : `/layout-${l.toLowerCase()}`}>
              <div style={{
                width: l.length > 1 ? "auto" : "28px", height: "28px",
                padding: l.length > 1 ? "0 8px" : "0",
                backgroundColor: l === "GFD" ? GOLD : CHARCOAL,
                color: l === "GFD" ? CHARCOAL : OFF_WHITE,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", fontWeight: 700,
                cursor: "pointer", transition: "all 0.2s",
                border: l === "GFD" ? "none" : `1px solid rgba(255,255,255,0.15)`
              }}>
                {l}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
