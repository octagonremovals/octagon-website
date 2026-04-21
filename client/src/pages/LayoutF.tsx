/*
 * LAYOUT F — "The Scandinavian"
 * Style: Clean Nordic luxury. Warm whites, natural tones, generous whitespace.
 * Palette: Warm white #FAF9F7, warm grey #E8E4DE, forest green #2D4A3E, gold #C9A84C.
 * Fonts: Playfair Display (headings), Inter (body).
 * Premium signal: Calm confidence — nothing to prove, everything to deliver.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Loader2, Leaf, Shield, Clock, Award } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const GREEN = "#2D4A3E";
const GOLD = "#C9A84C";
const WARM_WHITE = "#FAF9F7";
const WARM_GREY = "#E8E4DE";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

function QuoteFormF() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GREEN }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: GREEN }}>Thank you — we'll be in touch within the hour.</p>
    </div>
  );

  const inputStyle = { fontFamily: "'Inter', sans-serif", backgroundColor: WARM_WHITE, borderColor: WARM_GREY, color: GREEN };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: step >= s ? GREEN : WARM_GREY, color: step >= s ? "#fff" : "#aaa", fontFamily: "'Inter', sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? GREEN : WARM_GREY }} />}
          </div>
        ))}
        <span className="text-xs tracking-wider uppercase ml-1" style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border rounded-none py-3 px-4 text-sm outline-none"
            style={inputStyle}>
            <option value="">Type of Move</option>
            <option value="house">House Removal</option>
            <option value="office">Office Removal</option>
            <option value="packing">Packing Service</option>
            <option value="storage">Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode"
              className="border py-3 px-4 text-sm outline-none w-full rounded-none" style={inputStyle} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode"
              className="border py-3 px-4 text-sm outline-none w-full rounded-none" style={inputStyle} />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            className="w-full border py-3 px-4 text-sm outline-none rounded-none" style={inputStyle} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3.5 text-sm font-medium tracking-wider uppercase transition-opacity"
            style={{ backgroundColor: canProceed ? GREEN : WARM_GREY, color: canProceed ? "#fff" : "#aaa", fontFamily: "'Inter', sans-serif" }}>
            Continue
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border py-3 px-4 text-sm outline-none rounded-none" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border py-3 px-4 text-sm outline-none rounded-none" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
            className="w-full border py-3 px-4 text-sm outline-none rounded-none" style={inputStyle} />
          <button onClick={() => canProceed && submitQuote.mutate(form)} disabled={!canProceed || submitQuote.isPending}
            className="w-full py-3.5 text-sm font-medium tracking-wider uppercase"
            style={{ backgroundColor: canProceed ? GOLD : WARM_GREY, color: canProceed ? "#fff" : "#aaa", fontFamily: "'Inter', sans-serif" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Request Free Quote"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutF() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: WARM_WHITE }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 sticky top-0 z-40" style={{ backgroundColor: WARM_WHITE, borderBottom: `1px solid ${WARM_GREY}` }}>
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: GREEN }}>O</div>
            <span className="font-semibold text-sm tracking-wide" style={{ color: GREEN, fontFamily: "'Playfair Display', serif" }}>Octagon Removals</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-wider uppercase" style={{ color: "#888" }}>
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-green-800 transition-colors">{item}</span></Link>
          ))}
        </div>
        <a href="tel:02085218000" className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: GREEN }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-screen">
        {/* Left — content */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20" style={{ backgroundColor: WARM_WHITE }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: GOLD }}>London's Premium Removals</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: GREEN, lineHeight: 1.1 }}>
              Moving with<br />
              <em style={{ color: GOLD }}>care</em> and<br />
              precision
            </h1>
            <p className="mt-8 text-base leading-relaxed max-w-md" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
              Fixed-price house, office and international removals across London and the M25. Trusted by over 10,000 families and businesses since 2009.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/quote">
                <motion.button className="px-8 py-4 text-sm font-medium tracking-wider uppercase text-white"
                  style={{ backgroundColor: GREEN }}
                  whileHover={{ opacity: 0.9 }}>
                  Free Survey →
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-8 py-4 text-sm font-medium tracking-wider uppercase border"
                style={{ borderColor: GREEN, color: GREEN }}>
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-12" style={{ borderTop: `1px solid ${WARM_GREY}` }}>
              {[
                { icon: Shield, label: "Fully Insured", sub: "£1M+ liability cover" },
                { icon: Award, label: "Award-Winning", sub: "Best in London 2024" },
                { icon: Clock, label: "Fixed Price", sub: "No hidden fees" },
                { icon: Leaf, label: "White-Glove", sub: "Premium care always" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${GREEN}15` }}>
                    <Icon size={14} style={{ color: GREEN }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: GREEN }}>{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#aaa" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — image + form */}
        <div className="relative">
          <img src={HERO_IMG} alt="Octagon Removals" className="w-full h-full object-cover" style={{ minHeight: "60vh" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
          {/* Floating form */}
          <div className="absolute bottom-8 left-8 right-8 p-8" style={{ backgroundColor: WARM_WHITE }}>
            <div className="text-xs tracking-widest uppercase mb-1" style={{ color: GOLD }}>Free, No-Obligation</div>
            <h3 className="mb-6 text-lg" style={{ fontFamily: "'Playfair Display', serif", color: GREEN }}>Get Your Fixed-Price Quote</h3>
            <QuoteFormF />
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: WARM_GREY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>Our Services</div>
          <h2 className="mb-16" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: GREEN }}>
            Every move, handled with care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="bg-white p-8 group cursor-pointer" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="text-xs font-medium mb-4" style={{ color: GOLD }}>{num}</div>
                <h3 className="mb-3 font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: GREEN, fontSize: "1.1rem" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{desc}</p>
                <ArrowRight size={14} className="mt-6 group-hover:translate-x-1 transition-transform" style={{ color: GREEN }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE ─────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={PACKING_IMG} alt="Premium packing" className="w-full object-cover" style={{ height: "500px" }} />
            <div className="absolute -bottom-6 -right-6 px-8 py-6" style={{ backgroundColor: GREEN }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 400, color: GOLD }}>15+</div>
              <div className="text-xs tracking-widest uppercase mt-1 text-white/70">Years of Excellence</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>The Octagon Promise</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: GREEN, lineHeight: 1.2 }}>
              Your home deserves the finest care
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "#666" }}>
              We understand that moving is one of life's most significant moments. That's why we assign a dedicated coordinator to every move — someone who knows your home, your needs, and your timeline intimately.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Dedicated move coordinator from survey to completion",
                "Premium double-walled boxes and specialist wrapping",
                "GPS-tracked vehicles with real-time updates",
                "£1M+ public liability insurance on every move",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${GOLD}20` }}>
                    <CheckCircle2 size={12} style={{ color: GOLD }} />
                  </div>
                  <span className="text-sm" style={{ color: "#666" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: WARM_GREY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-3 text-center" style={{ color: GOLD }}>Testimonials</div>
          <h2 className="text-center mb-16" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: GREEN }}>
            What our clients say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="bg-white p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#666", fontFamily: "'Playfair Display', serif" }}>"{text}"</p>
                <div className="font-semibold text-sm" style={{ color: GREEN }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#aaa" }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: GREEN }}>
        <div className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>Begin Your Journey</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2 }}>
          Your perfect move awaits
        </h2>
        <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          Fixed price. No hidden fees. A dedicated team from first call to final box.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/quote">
            <button className="px-10 py-4 text-sm font-medium tracking-wider uppercase" style={{ backgroundColor: GOLD, color: "#fff" }}>
              Request Free Survey
            </button>
          </Link>
          <a href="tel:02085218000" className="px-10 py-4 text-sm font-medium tracking-wider uppercase border border-white/40 text-white hover:bg-white/10 transition-colors">
            0208 521 8000
          </a>
        </div>
      </section>

      {/* Layout switcher */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 bg-white shadow-xl px-4 py-2 rounded-full border border-gray-200">
        <span className="text-xs text-gray-400 mr-1 self-center">Layouts:</span>
        {SWITCHER_LABELS.map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "F" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "F" ? { backgroundColor: GREEN } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
