/*
 * LAYOUT I — "The Tech Premium"
 * Style: Modern SaaS-meets-luxury. Glassmorphism, gradient backgrounds, clean precision.
 * Palette: Deep indigo #0F0A2E, electric violet #6C3FC7, gold #F0C040, white #FFFFFF.
 * Fonts: Plus Jakarta Sans (all weights).
 * Premium signal: Cutting-edge precision — technology in service of perfection.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Loader2, Zap, Shield, Clock, Award } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const INDIGO = "#0F0A2E";
const VIOLET = "#6C3FC7";
const GOLD = "#F0C040";
const WHITE = "#FFFFFF";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

function QuoteFormI() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})` }}>
        <CheckCircle2 size={20} color="#fff" />
      </div>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", color: WHITE }}>We'll call you within 1 hour.</p>
    </div>
  );

  const inputStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.15)",
    color: WHITE,
    borderRadius: "8px"
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: step >= s ? `linear-gradient(135deg, ${VIOLET}, ${GOLD})` : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-0.5 rounded" style={{ background: step > s ? `linear-gradient(to right, ${VIOLET}, ${GOLD})` : "rgba(255,255,255,0.1)" }} />}
          </div>
        ))}
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border py-3 px-4 text-sm outline-none"
            style={{ ...inputStyle, borderRadius: "8px" }}>
            <option value="" style={{ backgroundColor: INDIGO }}>Type of Move</option>
            <option value="house" style={{ backgroundColor: INDIGO }}>House Removal</option>
            <option value="office" style={{ backgroundColor: INDIGO }}>Office Removal</option>
            <option value="packing" style={{ backgroundColor: INDIGO }}>Packing Service</option>
            <option value="storage" style={{ backgroundColor: INDIGO }}>Storage</option>
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
            className="w-full py-3.5 text-sm font-semibold tracking-wide rounded-lg transition-opacity"
            style={{ background: canProceed ? `linear-gradient(135deg, ${VIOLET}, ${GOLD})` : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Continue →
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
            className="w-full py-3.5 text-sm font-semibold tracking-wide rounded-lg"
            style={{ background: canProceed ? `linear-gradient(135deg, ${VIOLET}, ${GOLD})` : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Get My Free Quote →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutI() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: INDIGO, color: WHITE }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 sticky top-0 z-40"
        style={{ backgroundColor: "rgba(15,10,46,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, color: "#fff" }}>O</div>
            <span className="font-bold text-sm" style={{ color: WHITE }}>Octagon Removals</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-white transition-colors">{item}</span></Link>
          ))}
        </div>
        <a href="tel:02085218000" className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-80"
          style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, color: "#fff" }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Background */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Octagon Removals" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 50%, ${VIOLET}40 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, ${GOLD}20 0%, transparent 50%)` }} />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-6 md:px-12 py-20" style={{ minHeight: "100vh" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-medium"
              style={{ backgroundColor: "rgba(108,63,199,0.2)", border: "1px solid rgba(108,63,199,0.4)", color: GOLD }}>
              <Zap size={12} />
              London's #1 Premium Removals Company
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, color: WHITE, lineHeight: 1.05 }}>
              Moving you<br />
              <span style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                forward
              </span><br />
              with precision
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Fixed-price house, office and international removals across London and the M25. Trusted by over 10,000 families and businesses. Fully insured.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/quote">
                <motion.button className="px-8 py-4 text-sm font-semibold rounded-lg"
                  style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, color: "#fff" }}
                  whileHover={{ scale: 1.03 }}>
                  Get Free Quote →
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-8 py-4 text-sm font-semibold rounded-lg border text-white hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {[
                { icon: Shield, label: "Fully Insured", sub: "£1M+ liability" },
                { icon: Award, label: "Award-Winning", sub: "Best in London 2024" },
                { icon: Clock, label: "Fixed Price", sub: "No hidden fees" },
                { icon: CheckCircle2, label: "White-Glove", sub: "Premium care" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${VIOLET}40, ${GOLD}20)` }}>
                    <Icon size={14} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: WHITE }}>{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote form card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              <div className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: GOLD }}>Free, No-Obligation</div>
              <h3 className="text-xl font-bold mb-6" style={{ color: WHITE }}>Get Your Fixed-Price Quote</h3>
              <QuoteFormI />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[["4.9","Trustpilot"],["323","Reviews"],["10K+","Moves"],["15+","Years"]].map(([num, label]) => (
                <div key={label} className="p-3 rounded-xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-bold text-lg" style={{ color: GOLD }}>{num}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12" style={{ background: `linear-gradient(180deg, ${INDIGO} 0%, #0A0620 100%)` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: GOLD }}>Our Services</div>
          <h2 className="mb-16 text-4xl font-bold" style={{ color: WHITE }}>Every move, mastered</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="p-6 rounded-xl group cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                whileHover={{ backgroundColor: "rgba(108,63,199,0.15)", borderColor: `${VIOLET}60`, y: -4 }}>
                <div className="text-xs font-bold mb-4" style={{ color: GOLD }}>{num}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: WHITE }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{desc}</p>
                <ArrowRight size={14} className="mt-5 group-hover:translate-x-1 transition-transform" style={{ color: GOLD }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: GOLD }}>The Octagon Standard</div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: WHITE, lineHeight: 1.15 }}>
              Every move treated as if it were our own home
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              We don't simply transport boxes. We handle your most valued possessions with the same reverence you do. Every team member is trained to our exacting white-glove standard.
            </p>
            <div className="space-y-3">
              {["Dedicated move coordinator from survey to completion","Premium double-walled boxes and specialist wrapping","GPS-tracked vehicles with real-time updates","£1M+ public liability insurance on every move"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})` }}>
                    <CheckCircle2 size={11} color="#fff" />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-30" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})` }} />
            <img src={PACKING_IMG} alt="Premium packing" className="w-full object-cover rounded-xl relative" style={{ height: "480px" }} />
            <div className="absolute -bottom-4 -right-4 px-6 py-4 rounded-xl" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})` }}>
              <div className="font-bold text-2xl text-white">15+</div>
              <div className="text-xs text-white/80 mt-0.5">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#0A0620" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: GOLD }}>Testimonials</div>
          <h2 className="text-4xl font-bold mb-16" style={{ color: WHITE }}>What our clients say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>"{text}"</p>
                <div className="font-semibold text-sm" style={{ color: WHITE }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${VIOLET}30 0%, transparent 70%)` }} />
        <div className="relative z-10">
          <div className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: GOLD }}>Ready to Move?</div>
          <h2 className="text-5xl font-bold mb-4" style={{ color: WHITE }}>
            Get your{" "}
            <span style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              free quote
            </span>
          </h2>
          <p className="text-sm max-w-md mx-auto mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Fixed price. No hidden fees. London's finest removals service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="px-10 py-4 text-sm font-semibold rounded-lg" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})`, color: "#fff" }}>
                Get Free Quote →
              </button>
            </Link>
            <a href="tel:02085218000" className="px-10 py-4 text-sm font-semibold rounded-lg border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}>
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
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "I" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "I" ? { background: `linear-gradient(135deg, ${VIOLET}, ${GOLD})` } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
