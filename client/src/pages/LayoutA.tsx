/**
 * LAYOUT A — "The Architect"
 * Style: Minimalist, asymmetric split-screen, strong typography.
 * Palette: Pure white #FFFFFF, deep charcoal #0A0A0A, gold #B8960C, light grey #F7F7F5.
 * Fonts: Cormorant Garamond (display), DM Sans (body).
 * Premium signal: Restraint, precision, negative space — less is more.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock, Award, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

const GOLD = "#B8960C";
const CHARCOAL = "#0A0A0A";
const OFFWHITE = "#F7F7F5";

function QuoteFormA() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GOLD }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: CHARCOAL }}>Thank you — we'll call within 1 hour.</p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center text-xs font-bold border"
              style={{ borderColor: step >= s ? GOLD : "#ddd", color: step >= s ? GOLD : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? GOLD : "#ddd" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-1" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>
            <option value="">Move Type</option>
            <option value="House Removal">House Removal</option>
            <option value="Office Removal">Office Removal</option>
            <option value="Packing Service">Packing Service</option>
            <option value="Storage">Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode"
              className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode"
              className="border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
          <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif", color: form.moveDate ? CHARCOAL : "#aaa" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3 mt-2 text-sm tracking-widest uppercase font-medium transition-all"
            style={{ backgroundColor: canProceed ? CHARCOAL : "#ddd", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
            Continue →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          <div className="flex gap-2 mt-2">
            <button onClick={() => setStep(1)} className="px-4 py-3 text-sm border border-gray-200 hover:border-gray-400 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}>← Back</button>
            <button onClick={() => canProceed && submitQuote.mutate({ ...form, source: "Layout A Hero" })} disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 text-sm tracking-widest uppercase font-medium transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? GOLD : "#ddd", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
              {submitQuote.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LayoutA() {
  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff", color: CHARCOAL, minHeight: "100vh" }}>
      <SEOHead title="London's Premium Removals | Octagon Removals" description="Award-winning removals company serving London and the M25. Fixed price, fully insured, white-glove service." />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: "rgba(255,255,255,0.96)", borderBottom: "1px solid #f0f0f0" }}>
        <Link href="/">
          <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.05em", color: CHARCOAL }}>
            OCTAGON <span style={{ color: GOLD }}>REMOVALS</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Locations", "Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <span className="text-sm tracking-wide hover:opacity-60 transition-opacity" style={{ color: CHARCOAL }}>{item}</span>
            </Link>
          ))}
        </div>
        <a href="tel:02085218000" className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide"
          style={{ color: GOLD }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO: SPLIT SCREEN ──────────────────────────────────────── */}
      <section className="min-h-screen flex" style={{ paddingTop: "72px" }}>
        {/* Left — content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 w-full lg:w-1/2">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                London's Premium Removals Company
              </span>
            </div>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 1.05, color: CHARCOAL }}>
              Moving You<br />
              <em style={{ color: GOLD }}>Forward</em><br />
              With Precision
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: "#555", fontFamily: "DM Sans, sans-serif" }}>
              Fixed-price house, office and international removals across London and the M25.
              Trusted by over 10,000 families and businesses. Fully insured.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-8 mb-10">
              {[{ v: "4.9★", l: "Trustpilot" }, { v: "323", l: "Google Reviews" }, { v: "15+", l: "Years" }, { v: "10K+", l: "Moves" }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 600, color: CHARCOAL }}>{s.v}</div>
                  <div className="text-xs tracking-wide uppercase mt-0.5" style={{ color: "#999" }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Quote form */}
            <div className="max-w-sm">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Free, No-Obligation Quote</p>
              <QuoteFormA />
            </div>
          </motion.div>
        </div>

        {/* Right — image */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden">
          <motion.img
            src={HERO_IMG} alt="Premium removals London"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}
          />
          {/* Vertical text overlay */}
          <div className="absolute bottom-12 left-8 flex flex-col items-center gap-2">
            <div className="w-px h-16" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
            <span className="text-xs tracking-widest uppercase text-white opacity-60"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Est. 2009 · London
            </span>
          </div>
          {/* Floating badge */}
          <div className="absolute top-8 right-8 px-4 py-3 text-center"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="text-xs tracking-widest uppercase text-white opacity-70 mb-1">Rated</div>
            <div className="flex gap-0.5 justify-center mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={GOLD} stroke="none" />)}
            </div>
            <div className="text-xs text-white opacity-70">Trustpilot · Google</div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <section className="py-12 border-y" style={{ borderColor: "#f0f0f0" }}>
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Fully Insured", desc: "£1M+ public liability cover on every move" },
            { icon: Award, title: "Award-Winning", desc: "Best Removals Company London 2024" },
            { icon: Clock, title: "Fixed Price", desc: "No hidden fees, guaranteed from survey" },
            { icon: Star, title: "White-Glove", desc: "Premium care for antiques & fragile items" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-2">
              <Icon size={20} style={{ color: GOLD }} />
              <div className="text-sm font-semibold tracking-wide" style={{ color: CHARCOAL }}>{title}</div>
              <div className="text-xs leading-relaxed" style={{ color: "#888" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES: NUMBERED LIST ──────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>What We Offer</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: CHARCOAL }}>
                Our Services
              </h2>
            </div>
            <Link href="/services">
              <span className="hidden md:flex items-center gap-2 text-sm tracking-wide hover:gap-3 transition-all" style={{ color: GOLD }}>
                View All <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { n: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { n: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { n: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { n: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { n: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { n: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ n, title, desc }) => (
              <motion.div key={n}
                className="group border-t py-8 px-6 cursor-pointer hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#f0f0f0" }}
                whileHover={{ x: 4 }}>
                <div className="text-xs tracking-widest mb-4" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>{n}</div>
                <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: CHARCOAL }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GOLD }}>
                  Learn more <ArrowRight size={10} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL SECTION: PREMIUM PROMISE ──────────────────────── */}
      <section className="py-24" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-widest uppercase mb-6" style={{ color: GOLD }}>The Octagon Standard</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2 }}>
              Every move treated as if it were our own home
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              We don't simply transport boxes. We handle your most valued possessions — antiques, artwork, 
              pianos, wine collections — with the same reverence you do. Every team member is trained 
              to our exacting white-glove standard.
            </p>
            <div className="mt-10 space-y-4">
              {[
                "Dedicated move coordinator from survey to completion",
                "Premium double-walled boxes and specialist wrapping",
                "GPS-tracked vehicles with real-time updates",
                "£1M+ public liability insurance on every move",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-px mt-2.5 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/quote">
              <motion.button className="mt-10 px-8 py-4 text-sm tracking-widest uppercase font-medium"
                style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
                whileHover={{ opacity: 0.9 }}>
                Request a Free Survey
              </motion.button>
            </Link>
          </div>
          <div className="relative">
            <img src={PACKING_IMG} alt="White-glove packing service" className="w-full object-cover" style={{ height: "480px" }} />
            <div className="absolute -bottom-6 -left-6 px-6 py-5" style={{ backgroundColor: GOLD }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 600, color: "#fff" }}>15+</div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ backgroundColor: OFFWHITE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-3 text-center" style={{ color: GOLD }}>Client Testimonials</div>
          <h2 className="text-center mb-16" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: CHARCOAL }}>
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="bg-white p-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#555", fontFamily: "DM Sans, sans-serif" }}>"{text}"</p>
                <div>
                  <div className="text-sm font-semibold" style={{ color: CHARCOAL }}>{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#999" }}>{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ──────────────────────────────────────────────── */}
      <section className="py-24 px-8 text-center">
        <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Ready to Move?</div>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: CHARCOAL }}>
          Get Your Free, Fixed-Price Quote
        </h2>
        <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "#888" }}>
          No obligation. No hidden fees. Just a precise, transparent quote from London's most trusted removals company.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/quote">
            <button className="px-10 py-4 text-sm tracking-widest uppercase font-medium"
              style={{ backgroundColor: CHARCOAL, color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
              Get Free Quote
            </button>
          </Link>
          <a href="tel:02085218000" className="px-10 py-4 text-sm tracking-widest uppercase font-medium border"
            style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "DM Sans, sans-serif" }}>
            0208 521 8000
          </a>
        </div>
      </section>

      {/* Layout selector */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 bg-white shadow-lg px-4 py-2 rounded-full border border-gray-100">
        <span className="text-xs text-gray-400 mr-2 self-center">Layouts:</span>
        {"ABCDEFGHIJ".split("").map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "A" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "A" ? { backgroundColor: GOLD } : {}}>
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
