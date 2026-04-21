/*
 * LAYOUT G — "The Cinematic"
 * Style: Full-bleed dramatic storytelling. Inspired by luxury car brands (Rolls-Royce, Bentley websites).
 * Palette: Deep black #0C0C0C, platinum #E8E8E8, champagne gold #C6A84B, ivory #F8F6F0.
 * Fonts: Didact Gothic / Libre Baskerville (display), Lato (body).
 * Premium signal: Drama and scale — every section feels like a film frame.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";
const GOLD = "#C6A84B";
const BLACK = "#0C0C0C";
const IVORY = "#F8F6F0";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

function QuoteFormG() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: GOLD }}>
        <CheckCircle2 size={20} color="#fff" />
      </div>
      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.1rem", color: IVORY }}>We'll call you within the hour.</p>
    </div>
  );

  const inputStyle = {
    fontFamily: "'Lato', sans-serif",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.15)",
    color: IVORY
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border"
              style={{ borderColor: step >= s ? GOLD : "rgba(255,255,255,0.2)", color: step >= s ? GOLD : "rgba(255,255,255,0.3)", fontFamily: "'Lato', sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? GOLD : "rgba(255,255,255,0.15)" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Lato', sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border py-3 px-4 text-sm outline-none"
            style={inputStyle}>
            <option value="" style={{ backgroundColor: "#1a1a1a" }}>Type of Move</option>
            <option value="house" style={{ backgroundColor: "#1a1a1a" }}>House Removal</option>
            <option value="office" style={{ backgroundColor: "#1a1a1a" }}>Office Removal</option>
            <option value="packing" style={{ backgroundColor: "#1a1a1a" }}>Packing Service</option>
            <option value="storage" style={{ backgroundColor: "#1a1a1a" }}>Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode"
              className="border py-3 px-4 text-sm outline-none w-full" style={inputStyle} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode"
              className="border py-3 px-4 text-sm outline-none w-full" style={inputStyle} />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-4 text-xs font-semibold tracking-widest uppercase transition-opacity"
            style={{ backgroundColor: canProceed ? GOLD : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Lato', sans-serif" }}>
            Continue
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <button onClick={() => canProceed && submitQuote.mutate(form)} disabled={!canProceed || submitQuote.isPending}
            className="w-full py-4 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: canProceed ? GOLD : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Lato', sans-serif" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Request Free Quote"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutG() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BLACK, color: IVORY }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(12,12,12,0.95) 0%, transparent 100%)" }}>
        <Link href="/">
          <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.1rem", letterSpacing: "0.15em", color: IVORY }}>
            OCTAGON
          </span>
        </Link>
        <div className="hidden md:flex gap-10 text-xs font-light tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-white transition-colors">{item}</span></Link>
          ))}
        </div>
        <a href="tel:02085218000" className="text-xs font-light tracking-widest uppercase border-b pb-0.5 transition-colors hover:text-yellow-400"
          style={{ color: GOLD, borderColor: `${GOLD}40` }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO — full bleed ────────────────────────────────────────── */}
      <section className="relative" style={{ height: "100vh" }}>
        <img src={HERO_IMG} alt="Octagon Removals" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.3) 60%, rgba(12,12,12,0.6) 100%)" }} />

        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>Est. 2009 · London</span>
            </div>
            <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(3.5rem, 8vw, 8rem)", fontWeight: 400, color: IVORY, lineHeight: 1.05, maxWidth: "16ch" }}>
              The Art of<br />
              <em style={{ color: GOLD }}>Exceptional</em><br />
              Removals
            </h1>
            <p className="mt-8 text-base font-light max-w-lg" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
              London's most trusted premium removals company. We handle your most valued possessions with the care, precision and discretion they deserve.
            </p>
            <div className="flex flex-wrap gap-5 mt-10">
              <Link href="/quote">
                <motion.button className="px-10 py-4 text-xs font-light tracking-widest uppercase"
                  style={{ backgroundColor: GOLD, color: "#fff" }}
                  whileHover={{ opacity: 0.9 }}>
                  Request Free Survey
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-10 py-4 text-xs font-light tracking-widest uppercase border text-white hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-light" style={{ color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
          </motion.div>
        </div>

        {/* Stats overlay */}
        <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 flex flex-col gap-6">
          {[["4.9","Trustpilot"],["323","Reviews"],["10K+","Moves"],["15+","Years"]].map(([num, label]) => (
            <div key={label} className="text-right">
              <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.8rem", color: GOLD, lineHeight: 1 }}>{num}</div>
              <div className="text-xs tracking-widest uppercase font-light mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>Free, No-Obligation</span>
            </div>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: IVORY, lineHeight: 1.2 }}>
              Get Your Fixed-Price Quote
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              We'll call you within 1 hour. No hidden fees. No surprises. Just a precise, transparent price for your move.
            </p>
            <div className="mt-8 space-y-4">
              {["£1M+ public liability insurance","Fixed price — no hidden extras","Dedicated move coordinator","GPS-tracked vehicles"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <QuoteFormG />
          </div>
        </div>
      </section>

      {/* ── SERVICES — cinematic grid ────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>Our Services</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: IVORY, lineHeight: 1.1 }}>
            Every move, mastered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {[
              { num: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="p-10 group cursor-pointer" style={{ backgroundColor: BLACK }}
                whileHover={{ backgroundColor: "#161616" }}>
                <div className="text-xs font-light tracking-widest mb-6" style={{ color: GOLD }}>{num}</div>
                <h3 className="mb-3 font-light text-lg" style={{ fontFamily: "'Libre Baskerville', serif", color: IVORY }}>{title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                <ArrowRight size={14} className="mt-8 group-hover:translate-x-1 transition-transform" style={{ color: GOLD }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC SPLIT ─────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2" style={{ minHeight: "60vh" }}>
        <div className="relative">
          <img src={PACKING_IMG} alt="Premium packing" className="w-full h-full object-cover" style={{ minHeight: "400px" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(12,12,12,0.8) 100%)" }} />
        </div>
        <div className="flex flex-col justify-center px-12 py-20" style={{ backgroundColor: "#111" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>The Octagon Standard</span>
          </div>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: IVORY, lineHeight: 1.2 }}>
            Precision, care and<br />discretion — on every move
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            From a single antique to an entire estate, we bring the same meticulous attention to detail. Our senior move coordinators oversee every job personally.
          </p>
          <div className="mt-8 space-y-3">
            {["Dedicated move coordinator","Premium specialist wrapping","GPS-tracked vehicles","£1M+ insurance cover"].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
                <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>Client Voices</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: IVORY }}>
            What our clients say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-8 border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm font-light leading-relaxed mb-8 italic" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Libre Baskerville', serif" }}>
                  "{text}"
                </p>
                <div className="font-light text-sm" style={{ color: IVORY }}>{name}</div>
                <div className="text-xs font-light mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-8 text-center overflow-hidden">
        <img src={OFFICE_IMG} alt="Office move" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,12,12,0.85)" }} />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-widest uppercase font-light" style={{ color: GOLD }}>Begin Your Journey</span>
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: IVORY, lineHeight: 1.1 }}>
            Your perfect move awaits
          </h2>
          <p className="mt-6 text-sm font-light max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Fixed price. No hidden fees. A dedicated team from first call to final box.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
            <Link href="/quote">
              <button className="px-12 py-4 text-xs font-light tracking-widest uppercase" style={{ backgroundColor: GOLD, color: "#fff" }}>
                Request Free Survey
              </button>
            </Link>
            <a href="tel:02085218000" className="px-12 py-4 text-xs font-light tracking-widest uppercase border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              0208 521 8000
            </a>
          </div>
        </div>
      </section>

      {/* Layout switcher */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 bg-white shadow-xl px-4 py-2 rounded-full border border-gray-200">
        <span className="text-xs text-gray-400 mr-1 self-center">Layouts:</span>
        {SWITCHER_LABELS.map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "G" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "G" ? { backgroundColor: GOLD } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
