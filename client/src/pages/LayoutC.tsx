/**
 * LAYOUT C — "The Magazine"
 * Style: Editorial, inspired by Wallpaper* / Vogue / Monocle.
 * Palette: Pure white #FFFFFF, ink black #111111, warm amber #D4A017, light sand #F9F6F0.
 * Fonts: Cormorant Garamond (display), DM Sans (body).
 * Premium signal: Bold section numbers, editorial grid, typographic hierarchy, restraint.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

const AMBER = "#D4A017";
const INK = "#111111";
const SAND = "#F9F6F0";
const WHITE = "#FFFFFF";

function QuoteFormC() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={28} style={{ color: AMBER }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: INK }}>We'll call you within 1 hour.</p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <span className="text-xs font-bold" style={{ color: step >= s ? AMBER : "#ccc", fontFamily: "DM Sans, sans-serif" }}>0{s}</span>
            {s < 2 && <div className="w-6 h-px" style={{ backgroundColor: step > s ? AMBER : "#e0e0e0" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-2" style={{ color: "#aaa", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border-b py-3 text-sm bg-transparent outline-none"
            style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif", color: form.moveType ? INK : "#aaa" }}>
            <option value="">Move Type</option>
            <option value="House Removal">House Removal</option>
            <option value="Office Removal">Office Removal</option>
            <option value="Packing Service">Packing Service</option>
            <option value="Storage">Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode"
              className="border-b py-3 text-sm bg-transparent outline-none" style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif" }} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode"
              className="border-b py-3 text-sm bg-transparent outline-none" style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif" }} />
          </div>
          <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date"
            className="w-full border-b py-3 text-sm bg-transparent outline-none"
            style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif", color: form.moveDate ? INK : "#aaa" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3 mt-2 text-xs tracking-widest uppercase font-medium transition-all"
            style={{ backgroundColor: canProceed ? INK : "#e0e0e0", color: canProceed ? WHITE : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
            Continue →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border-b py-3 text-sm bg-transparent outline-none" style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif" }} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border-b py-3 text-sm bg-transparent outline-none" style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif" }} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email"
            className="w-full border-b py-3 text-sm bg-transparent outline-none" style={{ borderColor: "#e0e0e0", fontFamily: "DM Sans, sans-serif" }} />
          <div className="flex gap-2 mt-2">
            <button onClick={() => setStep(1)} className="px-4 py-3 text-xs border tracking-widest uppercase"
              style={{ borderColor: "#e0e0e0", color: "#888", fontFamily: "DM Sans, sans-serif" }}>← Back</button>
            <button onClick={() => canProceed && submitQuote.mutate({ ...form, source: "Layout C Hero" })} disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? AMBER : "#e0e0e0", color: canProceed ? WHITE : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
              {submitQuote.isPending ? <Loader2 size={12} className="animate-spin" /> : null}
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LayoutC() {
  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: WHITE, color: INK, minHeight: "100vh" }}>
      <SEOHead title="London's Premium Removals | Octagon Removals" description="Award-winning removals company serving London and the M25. Fixed price, fully insured, white-glove service." />

      {/* ── NAV: EDITORIAL MASTHEAD ──────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: WHITE, borderBottom: "2px solid #111" }}>
        {/* Top strip */}
        <div className="flex items-center justify-between px-8 py-2" style={{ borderBottom: "1px solid #f0f0f0" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#aaa" }}>Est. 2009 · London · Fully Insured</span>
          <a href="tel:02085218000" className="text-xs tracking-widest uppercase font-medium" style={{ color: AMBER }}>0208 521 8000</a>
        </div>
        {/* Main nav */}
        <div className="flex items-center justify-between px-8 py-4">
          <Link href="/">
            <div>
              <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: AMBER, fontFamily: "DM Sans, sans-serif" }}>Premium Removals</div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 600, letterSpacing: "0.08em", color: INK }}>
                OCTAGON
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Locations", "Contact"].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <span className="text-xs tracking-widest uppercase hover:opacity-50 transition-opacity" style={{ color: INK }}>{item}</span>
              </Link>
            ))}
          </div>
          <Link href="/quote">
            <button className="text-xs tracking-widest uppercase font-medium px-6 py-2"
              style={{ backgroundColor: INK, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
              Free Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* ── HERO: EDITORIAL GRID ─────────────────────────────────────── */}
      <section style={{ paddingTop: "120px" }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Issue line */}
          <div className="flex items-center justify-between py-4 mb-8" style={{ borderBottom: "1px solid #e0e0e0" }}>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#aaa" }}>London's Finest Removals</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={AMBER} stroke="none" />)}
            </div>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#aaa" }}>4.9 / 5 — 323 Reviews</span>
          </div>

          {/* Main editorial grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Big number */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-4">
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "8rem", fontWeight: 300, color: "#f0f0f0", lineHeight: 1 }}>
                I
              </span>
            </div>

            {/* Headline — takes 6 cols */}
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 400, lineHeight: 1, color: INK }}>
                Moving<br />
                <span style={{ color: AMBER, fontStyle: "italic" }}>London's</span><br />
                Finest Homes
              </h1>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-px" style={{ backgroundColor: AMBER }} />
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  Fixed-price, white-glove removals across London and the M25.<br />
                  Trusted by over 10,000 families and businesses since 2009.
                </p>
              </div>

              {/* Stats in editorial style */}
              <div className="grid grid-cols-4 gap-0 mt-10" style={{ borderTop: "1px solid #e0e0e0", borderLeft: "1px solid #e0e0e0" }}>
                {[{ v: "4.9★", l: "Trustpilot" }, { v: "323", l: "Reviews" }, { v: "15+", l: "Years" }, { v: "10K+", l: "Moves" }].map(s => (
                  <div key={s.l} className="p-4 text-center" style={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 600, color: INK }}>{s.v}</div>
                    <div className="text-xs tracking-wide uppercase mt-0.5" style={{ color: "#aaa" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/quote">
                  <button className="px-8 py-3 text-xs tracking-widest uppercase font-medium"
                    style={{ backgroundColor: INK, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
                    Free Survey →
                  </button>
                </Link>
                <a href="tel:02085218000" className="px-8 py-3 text-xs tracking-widest uppercase font-medium border"
                  style={{ borderColor: INK, color: INK, fontFamily: "DM Sans, sans-serif" }}>
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Image + form — takes 5 cols */}
            <motion.div className="lg:col-span-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <div className="relative mb-6">
                <img src={HERO_IMG} alt="Premium removals" className="w-full object-cover" style={{ height: "300px" }} />
                <div className="absolute top-4 left-4 px-3 py-1.5" style={{ backgroundColor: AMBER }}>
                  <span className="text-xs tracking-widest uppercase font-medium" style={{ color: WHITE }}>Award-Winning</span>
                </div>
              </div>
              {/* Quote form */}
              <div className="p-6" style={{ backgroundColor: SAND }}>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: AMBER }}>Free, No-Obligation</div>
                <h3 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: INK }}>
                  Get Your Fixed-Price Quote
                </h3>
                <QuoteFormC />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES: EDITORIAL LIST ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: AMBER }}>Our Services</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: INK }}>
                Every Move,<br />Mastered
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: "1px solid #ddd", borderLeft: "1px solid #ddd" }}>
                {[
                  { n: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
                  { n: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
                  { n: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
                  { n: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options." },
                  { n: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
                  { n: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
                ].map(({ n, title, desc }) => (
                  <motion.div key={n}
                    className="group p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors"
                    style={{ borderRight: "1px solid #ddd", borderBottom: "1px solid #ddd" }}
                    whileHover={{ x: 2 }}>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold tracking-widest" style={{ color: AMBER }}>{n}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: AMBER }} />
                    </div>
                    <h3 className="text-base mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: INK, fontWeight: 500 }}>{title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: FULL-WIDTH IMAGE WITH TEXT OVERLAY ─────────────── */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={PACKING_IMG} alt="White-glove packing" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.1))" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-lg">
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: AMBER }}>The Octagon Standard</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: INK, lineHeight: 1.1 }}>
              White-glove care for<br />everything you value
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#555" }}>
              From antiques to artwork, pianos to wine collections — we handle your most 
              prized possessions with the same reverence you do.
            </p>
            <div className="mt-6 space-y-3">
              {["Dedicated move coordinator", "Premium specialist wrapping", "GPS-tracked vehicles", "£1M+ insurance cover"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-px" style={{ backgroundColor: AMBER }} />
                  <span className="text-sm" style={{ color: "#555" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS: EDITORIAL PULL QUOTES ─────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-3">
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: AMBER }}>Testimonials</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, color: INK }}>
                Client<br />Voices
              </h2>
            </div>
            <div className="lg:col-span-9 grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care." },
                { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged." },
                { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. No nasty surprises on moving day." },
              ].map(({ name, location, text }) => (
                <div key={name}>
                  <div className="text-4xl mb-4" style={{ color: AMBER, fontFamily: "Cormorant Garamond, serif", lineHeight: 1 }}>"</div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#555", fontStyle: "italic" }}>{text}</p>
                  <div className="flex items-center gap-2" style={{ borderTop: "1px solid #e0e0e0", paddingTop: "0.75rem" }}>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={9} fill={AMBER} stroke="none" />)}
                    </div>
                    <span className="text-xs font-medium" style={{ color: INK }}>{name}</span>
                    <span className="text-xs" style={{ color: "#aaa" }}>· {location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA: EDITORIAL FULL-WIDTH ────────────────────────────────── */}
      <section style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: AMBER }}>Ready to Move?</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: WHITE }}>
              Get Your Free,<br />Fixed-Price Quote
            </h2>
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              No obligation. No hidden fees. London's finest removals service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote">
              <button className="px-10 py-4 text-xs tracking-widest uppercase font-medium"
                style={{ backgroundColor: AMBER, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
                Get Free Quote
              </button>
            </Link>
            <a href="tel:02085218000" className="px-10 py-4 text-xs tracking-widest uppercase font-medium border text-center"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
              0208 521 8000
            </a>
          </div>
        </div>
      </section>

      {/* Layout selector */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 bg-white shadow-lg px-4 py-2 border border-gray-100">
        <span className="text-xs text-gray-400 mr-2 self-center">Layouts:</span>
        {"ABCDEFGHIJ".split("").map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className="w-7 h-7 text-xs font-bold transition-colors"
              style={l === "C" ? { backgroundColor: AMBER, color: WHITE } : { color: "#888" }}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/">
          <button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button>
        </Link>
      </div>
    </div>
  );
}
