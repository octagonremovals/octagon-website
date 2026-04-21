/*
 * LAYOUT E — "The Brutalist"
 * Style: Bold, raw typographic power. Oversized text, hard edges, stark contrast.
 * Palette: Pure white #FFFFFF, jet black #000000, electric gold #D4A017, red accent #C0392B.
 * Fonts: Impact/Anton (display), Space Grotesk (body).
 * Premium signal: Confidence through scale — we're so good we don't need decoration.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const GOLD = "#D4A017";
const BLACK = "#000000";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

function QuoteFormE() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GOLD }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", color: BLACK }}>We'll call you within 1 hour.</p>
    </div>
  );

  return (
    <div>
      <div className="flex gap-2 mb-5">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-sm font-black border-2"
              style={{ borderColor: step >= s ? BLACK : "#ccc", color: step >= s ? "#fff" : "#ccc", backgroundColor: step >= s ? BLACK : "transparent", fontFamily: "'Space Grotesk', sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-6 h-0.5" style={{ backgroundColor: step > s ? BLACK : "#ddd" }} />}
          </div>
        ))}
        <span className="text-xs font-bold tracking-widest uppercase ml-2 self-center" style={{ color: "#888", fontFamily: "'Space Grotesk', sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border-2 border-black bg-white py-3 px-4 text-sm font-medium outline-none focus:border-yellow-600"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <option value="">Move Type</option>
            <option value="house">House Removal</option>
            <option value="office">Office Removal</option>
            <option value="packing">Packing Service</option>
            <option value="storage">Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode"
              className="border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600 w-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode"
              className="border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600 w-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            className="w-full border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-4 text-sm font-black tracking-widest uppercase transition-opacity"
            style={{ backgroundColor: canProceed ? BLACK : "#ccc", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
            CONTINUE →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
            className="w-full border-2 border-black py-3 px-4 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          <button onClick={() => canProceed && submitQuote.mutate(form)} disabled={!canProceed || submitQuote.isPending}
            className="w-full py-4 text-sm font-black tracking-widest uppercase"
            style={{ backgroundColor: canProceed ? GOLD : "#ccc", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "GET MY FREE QUOTE →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutE() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: "#fff" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Anton&display=swap" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b-4 border-black sticky top-0 bg-white z-40">
        <Link href="/">
          <span className="font-black text-xl tracking-tight" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.05em" }}>
            OCTAGON<span style={{ color: GOLD }}>.</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase">
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-yellow-600 transition-colors">{item}</span></Link>
          ))}
        </div>
        <a href="tel:02085218000" className="px-5 py-2.5 text-xs font-black tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white transition-colors">
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Octagon Removals" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        </div>

        {/* Big diagonal text */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 pt-16 pb-32" style={{ minHeight: "100vh" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: GOLD }}>EST. 2009 · LONDON</div>
            <h1 className="leading-none mb-8" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(4rem, 12vw, 10rem)", color: "#fff", letterSpacing: "0.02em" }}>
              LONDON'S<br />
              <span style={{ color: GOLD, WebkitTextStroke: "2px #D4A017", WebkitTextFillColor: "transparent" }}>FINEST</span><br />
              REMOVALS
            </h1>
            <p className="text-lg max-w-xl mb-10" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.6 }}>
              Fixed-price house, office and international removals. Trusted by over 10,000 London families. Fully insured. Zero compromises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote">
                <motion.button className="px-10 py-4 text-sm font-black tracking-widest uppercase"
                  style={{ backgroundColor: GOLD, color: "#fff" }}
                  whileHover={{ scale: 1.03 }}>
                  GET FREE QUOTE →
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-10 py-4 text-sm font-black tracking-widest uppercase border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                CALL NOW
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 border-t-4 border-white/20">
            {[["4.9★","Trustpilot"],["323","Reviews"],["10K+","Moves"],["15+","Years"]].map(([num, label]) => (
              <div key={label} className="py-6 px-4 text-center border-r border-white/20 last:border-r-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", color: GOLD }}>{num}</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>FREE, NO-OBLIGATION</div>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: BLACK, lineHeight: 1 }}>
              GET YOUR<br />FIXED-PRICE<br />QUOTE
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "#666" }}>
              We'll call you within 1 hour. No hidden fees. No surprises. Just a precise, transparent price for your move.
            </p>
            <div className="mt-8 space-y-3">
              {["£1M+ public liability insurance","Fixed price — no hidden extras","Dedicated move coordinator","GPS-tracked vehicles"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GOLD }}>
                    <CheckCircle2 size={12} color="#fff" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 border-2 border-black">
            <QuoteFormE />
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Our Services</div>
          <h2 className="mb-16" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}>
            EVERY MOVE,<br />MASTERED
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              { num: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="p-8 bg-black hover:bg-zinc-900 transition-colors cursor-pointer group"
                whileHover={{ y: -2 }}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", color: GOLD, lineHeight: 1 }}>{num}</div>
                <h3 className="mt-4 mb-3 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{desc}</p>
                <ArrowRight size={16} className="mt-6 group-hover:translate-x-1 transition-transform" style={{ color: GOLD }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>The Octagon Standard</div>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: BLACK, lineHeight: 1.05 }}>
              EVERY MOVE TREATED AS IF IT WERE OUR OWN HOME
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "#666" }}>
              We don't simply transport boxes. We handle your most valued possessions with the same reverence you do. Every team member is trained to our exacting white-glove standard.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Dedicated coordinator","Premium wrapping","GPS tracking","£1M+ insurance"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={PACKING_IMG} alt="Premium packing" className="w-full object-cover" style={{ height: "480px" }} />
            <div className="absolute -bottom-4 -right-4 px-6 py-5 border-4 border-black" style={{ backgroundColor: GOLD }}>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>15+</div>
              <div className="text-xs font-bold tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Client Testimonials</div>
          <h2 className="mb-16" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: BLACK, lineHeight: 1 }}>
            WHAT OUR<br />CLIENTS SAY
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="bg-white p-8 border-l-4" style={{ borderColor: GOLD }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>"{text}"</p>
                <div className="font-bold text-sm">{name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#999" }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-black">
        <div className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: GOLD }}>Ready to Move?</div>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#fff", lineHeight: 1 }}>
          GET YOUR<br /><span style={{ color: GOLD }}>FREE QUOTE</span>
        </h2>
        <p className="mt-6 text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
          Fixed price. No hidden fees. London's finest removals service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/quote">
            <button className="px-12 py-5 text-sm font-black tracking-widest uppercase" style={{ backgroundColor: GOLD, color: "#fff" }}>
              GET FREE QUOTE →
            </button>
          </Link>
          <a href="tel:02085218000" className="px-12 py-5 text-sm font-black tracking-widest uppercase border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
            0208 521 8000
          </a>
        </div>
      </section>

      {/* Layout switcher */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 bg-white shadow-xl px-4 py-2 rounded-full border border-gray-200">
        <span className="text-xs text-gray-400 mr-1 self-center">Layouts:</span>
        {SWITCHER_LABELS.map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className={`w-7 h-7 text-xs font-black rounded-full transition-colors ${l === "E" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "E" ? { backgroundColor: GOLD } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
