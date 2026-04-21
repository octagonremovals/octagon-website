/**
 * LAYOUT B — "The Estate"
 * Style: Dark luxury, inspired by premium real estate and private members' clubs.
 * Palette: Deep navy #0C1420, warm black #0A0A0A, gold #C9A84C, cream #F5F0E8.
 * Fonts: Cormorant Garamond (display), DM Sans (body).
 * Premium signal: Dark sophistication, gold accents, full-bleed imagery, editorial spacing.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Shield, Clock, Award, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";
const SKYLINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp";

const GOLD = "#C9A84C";
const NAVY = "#0C1420";
const CREAM = "#F5F0E8";
const DARK = "#0A0A0A";

function QuoteFormB() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  const inputStyle: React.CSSProperties = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.875rem",
    color: CREAM,
    backgroundColor: "transparent",
    borderBottom: "1px solid rgba(201,168,76,0.3)",
    padding: "12px 0",
    width: "100%",
    outline: "none",
  };

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GOLD }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: CREAM }}>
        Thank you — we'll call within 1 hour.
      </p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-xs font-bold border"
              style={{ borderColor: step >= s ? GOLD : "rgba(255,255,255,0.2)", color: step >= s ? GOLD : "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? GOLD : "rgba(255,255,255,0.15)" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <select name="moveType" value={form.moveType} onChange={handleChange} style={{ ...inputStyle, color: form.moveType ? CREAM : "rgba(245,240,232,0.4)" }}>
            <option value="" style={{ backgroundColor: NAVY }}>Move Type</option>
            <option value="House Removal" style={{ backgroundColor: NAVY }}>House Removal</option>
            <option value="Office Removal" style={{ backgroundColor: NAVY }}>Office Removal</option>
            <option value="Packing Service" style={{ backgroundColor: NAVY }}>Packing Service</option>
            <option value="Storage" style={{ backgroundColor: NAVY }}>Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode" style={{ ...inputStyle }} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode" style={{ ...inputStyle }} />
          </div>
          <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date" style={{ ...inputStyle, color: form.moveDate ? CREAM : "rgba(245,240,232,0.4)" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3 mt-2 text-sm tracking-widest uppercase font-medium transition-all"
            style={{ backgroundColor: canProceed ? GOLD : "rgba(255,255,255,0.1)", color: canProceed ? DARK : "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
            Continue →
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" style={inputStyle} />
          <div className="flex gap-2 mt-2">
            <button onClick={() => setStep(1)} className="px-4 py-3 text-sm border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>← Back</button>
            <button onClick={() => canProceed && submitQuote.mutate({ ...form, source: "Layout B Hero" })} disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? GOLD : "rgba(255,255,255,0.1)", color: canProceed ? DARK : "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
              {submitQuote.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LayoutB() {
  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: DARK, color: CREAM, minHeight: "100vh" }}>
      <SEOHead title="London's Premium Removals | Octagon Removals" description="Award-winning removals company serving London and the M25. Fixed price, fully insured, white-glove service." />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: "rgba(10,10,10,0.92)", borderBottom: `1px solid rgba(201,168,76,0.15)` }}>
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ border: `1px solid ${GOLD}` }}>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", color: GOLD, fontWeight: 600 }}>O</span>
            </div>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 500, letterSpacing: "0.1em", color: CREAM }}>
              OCTAGON REMOVALS
            </span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Locations", "Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <span className="text-xs tracking-widest uppercase hover:text-yellow-400 transition-colors" style={{ color: "rgba(245,240,232,0.6)" }}>{item}</span>
            </Link>
          ))}
        </div>
        <a href="tel:02085218000" className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2 border"
          style={{ borderColor: GOLD, color: GOLD }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO: FULL-BLEED DARK ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center" style={{ paddingTop: "72px" }}>
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(10,10,10,0.92) 45%, rgba(10,10,10,0.5) 100%)" }} />
        </div>

        {/* Gold decorative lines */}
        <div className="absolute top-0 left-0 w-px h-full opacity-20" style={{ backgroundColor: GOLD, marginLeft: "10%" }} />
        <div className="absolute top-0 right-0 w-px h-1/2 opacity-10" style={{ backgroundColor: GOLD, marginRight: "10%" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-16 items-center w-full py-16">
          {/* Left — headline */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Gold rule */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Est. 2009 · London</span>
            </div>

            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 300, lineHeight: 1, color: CREAM }}>
              The Art of<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Exceptional</span><br />
              Removals
            </h1>

            <p className="mt-8 text-base leading-relaxed max-w-lg" style={{ color: "rgba(245,240,232,0.65)" }}>
              London's most trusted premium removals company. We handle your most valued possessions 
              with the care, precision and discretion they deserve. Fixed price. Fully insured. Flawless.
            </p>

            {/* Awards row */}
            <div className="flex items-center gap-6 mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
              {[
                { v: "4.9", l: "Trustpilot" },
                { v: "323", l: "Google Reviews" },
                { v: "10K+", l: "Moves" },
                { v: "15+", l: "Years" },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", fontWeight: 500, color: GOLD }}>{s.v}</div>
                  <div className="text-xs tracking-wide mt-0.5" style={{ color: "rgba(245,240,232,0.4)" }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <Link href="/quote">
                <button className="px-8 py-4 text-sm tracking-widest uppercase font-medium"
                  style={{ backgroundColor: GOLD, color: DARK, fontFamily: "DM Sans, sans-serif" }}>
                  Free Survey
                </button>
              </Link>
              <a href="tel:02085218000" className="px-8 py-4 text-sm tracking-widest uppercase font-medium border"
                style={{ borderColor: "rgba(201,168,76,0.4)", color: CREAM, fontFamily: "DM Sans, sans-serif" }}>
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right — quote form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8" style={{ backgroundColor: "rgba(12,20,32,0.85)", backdropFilter: "blur(12px)", border: `1px solid rgba(201,168,76,0.2)` }}>
            <div className="text-xs tracking-widest uppercase mb-1" style={{ color: GOLD }}>Free, No-Obligation</div>
            <h3 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: CREAM }}>
              Get Your Fixed-Price Quote
            </h3>
            <p className="text-xs mb-6" style={{ color: "rgba(245,240,232,0.45)" }}>We'll call you within 1 hour</p>
            <QuoteFormB />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: CREAM }}>Scroll</span>
          <ChevronDown size={16} style={{ color: CREAM }} className="animate-bounce" />
        </div>
      </section>

      {/* ── GOLD TRUST BAR ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: GOLD }}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex flex-wrap justify-between items-center gap-4">
          {[
            { icon: Shield, text: "Fully Insured — £1M+ Cover" },
            { icon: Award, text: "Award-Winning Service" },
            { icon: Clock, text: "Fixed Price Guaranteed" },
            { icon: Star, text: "White-Glove Standard" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={14} style={{ color: DARK }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: DARK, fontFamily: "DM Sans, sans-serif" }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES: DARK GRID ──────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Our Services</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: CREAM }}>
                Every Move, Mastered
              </h2>
            </div>
            <Link href="/services">
              <span className="hidden md:block text-xs tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity" style={{ color: GOLD, borderColor: GOLD }}>
                All Services
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
            {[
              { n: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { n: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { n: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { n: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { n: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { n: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ n, title, desc }) => (
              <motion.div key={n}
                className="group p-8 cursor-pointer"
                style={{ backgroundColor: NAVY }}
                whileHover={{ backgroundColor: "#111c2c" }}>
                <div className="text-xs tracking-widest mb-6" style={{ color: GOLD }}>{n}</div>
                <h3 className="text-lg mb-3" style={{ fontFamily: "Cormorant Garamond, serif", color: CREAM, fontWeight: 400 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{desc}</p>
                <div className="mt-6 w-0 group-hover:w-8 h-px transition-all duration-300" style={{ backgroundColor: GOLD }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM PROMISE: SPLIT WITH IMAGE ───────────────────────── */}
      <section className="grid lg:grid-cols-2 min-h-[600px]">
        <div className="relative overflow-hidden">
          <img src={PACKING_IMG} alt="White-glove packing" className="w-full h-full object-cover" style={{ minHeight: "400px" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(10,10,10,0.8))" }} />
        </div>
        <div className="flex flex-col justify-center px-12 py-16" style={{ backgroundColor: DARK }}>
          <div className="text-xs tracking-widest uppercase mb-6" style={{ color: GOLD }}>The Octagon Standard</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: CREAM, lineHeight: 1.2 }}>
            Precision, care and<br />discretion — on every move
          </h2>
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
            From a single antique to an entire estate, we bring the same meticulous attention to detail. 
            Our senior move coordinators oversee every job personally, ensuring nothing is left to chance.
          </p>
          <div className="mt-10 space-y-5">
            {[
              "Dedicated move coordinator from survey to completion",
              "Premium double-walled boxes and specialist wrapping",
              "GPS-tracked vehicles with real-time client updates",
              "£1M+ public liability insurance on every move",
            ].map(item => (
              <div key={item} className="flex items-start gap-4">
                <div className="w-5 h-px mt-2.5 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                <span className="text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>{item}</span>
              </div>
            ))}
          </div>
          <Link href="/quote">
            <button className="mt-10 px-8 py-4 text-sm tracking-widest uppercase font-medium self-start"
              style={{ backgroundColor: GOLD, color: DARK, fontFamily: "DM Sans, sans-serif" }}>
              Request a Free Survey
            </button>
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS: DARK CARDS ─────────────────────────────────── */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Client Testimonials</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: CREAM }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-8" style={{ border: "1px solid rgba(201,168,76,0.15)", backgroundColor: "rgba(12,20,32,0.5)" }}>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}>"{text}"</p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "1rem" }}>
                  <div className="text-sm font-medium" style={{ color: CREAM }}>{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: GOLD }}>{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-32 text-center overflow-hidden">
        <img src={SKYLINE_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${DARK}, rgba(10,10,10,0.85))` }} />
        <div className="relative z-10 px-8">
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Ready to Move?</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: CREAM }}>
            Begin Your Premium Move
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "rgba(245,240,232,0.5)" }}>
            Fixed price. No hidden fees. No surprises. Just London's finest removals service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/quote">
              <button className="px-12 py-4 text-sm tracking-widest uppercase font-medium"
                style={{ backgroundColor: GOLD, color: DARK, fontFamily: "DM Sans, sans-serif" }}>
                Get Free Quote
              </button>
            </Link>
            <a href="tel:02085218000" className="px-12 py-4 text-sm tracking-widest uppercase font-medium border"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: CREAM, fontFamily: "DM Sans, sans-serif" }}>
              0208 521 8000
            </a>
          </div>
        </div>
      </section>

      {/* Layout selector */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 shadow-lg px-4 py-2 rounded-full border"
        style={{ backgroundColor: NAVY, borderColor: "rgba(201,168,76,0.3)" }}>
        <span className="text-xs mr-2 self-center" style={{ color: "rgba(245,240,232,0.4)" }}>Layouts:</span>
        {"ABCDEFGHIJ".split("").map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className="w-7 h-7 text-xs font-bold rounded-full transition-colors"
              style={l === "B" ? { backgroundColor: GOLD, color: DARK } : { color: "rgba(245,240,232,0.5)" }}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/">
          <button className="text-xs ml-1 self-center" style={{ color: "rgba(245,240,232,0.4)" }}>Live</button>
        </Link>
      </div>
    </div>
  );
}
