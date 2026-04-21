/*
 * LAYOUT H — "The Art Deco"
 * Style: 1920s luxury revival. Geometric patterns, opulent gold, symmetry.
 * Palette: Deep navy #0D1B2A, rich gold #D4AF37, cream #F5EFD6, dark teal #1A3A4A.
 * Fonts: Cormorant Garamond (display), Josefin Sans (body).
 * Premium signal: Timeless opulence — heritage meets modernity.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const NAVY = "#0D1B2A";
const GOLD = "#D4AF37";
const CREAM = "#F5EFD6";
const TEAL = "#1A3A4A";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

// Art Deco geometric divider SVG
const DecoDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="h-px flex-1" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
    <svg width="40" height="20" viewBox="0 0 40 20">
      <polygon points="20,0 40,10 20,20 0,10" fill="none" stroke={GOLD} strokeWidth="1" />
      <polygon points="20,4 36,10 20,16 4,10" fill={GOLD} opacity="0.3" />
    </svg>
    <div className="h-px flex-1" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
  </div>
);

function QuoteFormH() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GOLD }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: CREAM }}>We shall be in touch within the hour.</p>
    </div>
  );

  const inputStyle = {
    fontFamily: "'Josefin Sans', sans-serif",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: `${GOLD}50`,
    color: CREAM,
    letterSpacing: "0.1em"
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-8">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center text-xs font-semibold border"
              style={{ borderColor: step >= s ? GOLD : `${GOLD}30`, color: step >= s ? GOLD : `${GOLD}40`, fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.1em" }}>
              {s}
            </div>
            {s < 2 && <div className="w-10 h-px" style={{ backgroundColor: step > s ? GOLD : `${GOLD}30` }} />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border py-3 px-4 text-xs uppercase tracking-widest outline-none"
            style={inputStyle}>
            <option value="" style={{ backgroundColor: NAVY }}>Type of Move</option>
            <option value="house" style={{ backgroundColor: NAVY }}>House Removal</option>
            <option value="office" style={{ backgroundColor: NAVY }}>Office Removal</option>
            <option value="packing" style={{ backgroundColor: NAVY }}>Packing Service</option>
            <option value="storage" style={{ backgroundColor: NAVY }}>Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="FROM POSTCODE"
              className="border py-3 px-4 text-xs uppercase tracking-widest outline-none w-full" style={inputStyle} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="TO POSTCODE"
              className="border py-3 px-4 text-xs uppercase tracking-widest outline-none w-full" style={inputStyle} />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            className="w-full border py-3 px-4 text-xs uppercase tracking-widest outline-none" style={inputStyle} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-4 text-xs font-semibold tracking-widest uppercase border transition-colors"
            style={{ borderColor: canProceed ? GOLD : `${GOLD}30`, color: canProceed ? GOLD : `${GOLD}40`, fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.2em" }}>
            CONTINUE
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="FULL NAME"
            className="w-full border py-3 px-4 text-xs uppercase tracking-widest outline-none" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="TELEPHONE"
            className="w-full border py-3 px-4 text-xs uppercase tracking-widest outline-none" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="EMAIL ADDRESS"
            className="w-full border py-3 px-4 text-xs uppercase tracking-widest outline-none" style={inputStyle} />
          <button onClick={() => canProceed && submitQuote.mutate(form)} disabled={!canProceed || submitQuote.isPending}
            className="w-full py-4 text-xs font-semibold tracking-widest uppercase transition-colors"
            style={{ backgroundColor: canProceed ? GOLD : `${GOLD}30`, color: "#fff", fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.2em" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "REQUEST QUOTE"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutH() {
  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif", backgroundColor: NAVY, color: CREAM }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap" />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-5 sticky top-0 z-40" style={{ backgroundColor: NAVY, borderBottom: `1px solid ${GOLD}30` }}>
        <Link href="/">
          <div className="flex items-center gap-3">
            {/* Art Deco octagon logo */}
            <svg width="32" height="32" viewBox="0 0 32 32">
              <polygon points="10,2 22,2 30,10 30,22 22,30 10,30 2,22 2,10" fill="none" stroke={GOLD} strokeWidth="1.5" />
              <text x="16" y="21" textAnchor="middle" fill={GOLD} fontSize="11" fontFamily="Josefin Sans" fontWeight="600">O</text>
            </svg>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: CREAM, letterSpacing: "0.25em" }}>Octagon</div>
              <div className="text-xs tracking-widest" style={{ color: GOLD, letterSpacing: "0.15em", fontSize: "0.6rem" }}>Removals</div>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase" style={{ color: `${CREAM}80`, letterSpacing: "0.2em" }}>
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-yellow-400 transition-colors">{item}</span></Link>
          ))}
        </div>
        <a href="tel:02085218000" className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-colors hover:bg-yellow-600/20"
          style={{ borderColor: GOLD, color: GOLD, letterSpacing: "0.15em" }}>
          0208 521 8000
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <img src={HERO_IMG} alt="Octagon Removals" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        {/* Art Deco geometric overlay */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${TEAL}90 50%, ${NAVY} 100%)` }} />
        {/* Corner decorations */}
        <svg className="absolute top-8 left-8 opacity-30" width="80" height="80" viewBox="0 0 80 80">
          <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill={GOLD} />
        </svg>
        <svg className="absolute top-8 right-8 opacity-30" width="80" height="80" viewBox="0 0 80 80">
          <path d="M80,0 L40,0 L40,4 L76,4 L76,40 L80,40 Z" fill={GOLD} />
        </svg>
        <svg className="absolute bottom-8 left-8 opacity-30" width="80" height="80" viewBox="0 0 80 80">
          <path d="M0,80 L40,80 L40,76 L4,76 L4,40 L0,40 Z" fill={GOLD} />
        </svg>
        <svg className="absolute bottom-8 right-8 opacity-30" width="80" height="80" viewBox="0 0 80 80">
          <path d="M80,80 L40,80 L40,76 L76,76 L76,40 L80,40 Z" fill={GOLD} />
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32" style={{ minHeight: "100vh" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.4em" }}>Est. 2009</div>
            <DecoDivider />
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.5rem, 8vw, 8rem)", fontWeight: 300, color: CREAM, lineHeight: 1, letterSpacing: "0.05em" }}>
              OCTAGON<br />
              <span style={{ color: GOLD, fontStyle: "italic", fontWeight: 400 }}>Removals</span>
            </h1>
            <DecoDivider />
            <p className="text-sm font-light tracking-wider max-w-lg mx-auto mt-4" style={{ color: `${CREAM}80`, lineHeight: 1.8, letterSpacing: "0.1em" }}>
              London's most distinguished removals company. Trusted by discerning families and businesses since 2009. Fixed price. Fully insured. Flawless.
            </p>
            <div className="flex flex-wrap gap-5 justify-center mt-10">
              <Link href="/quote">
                <motion.button className="px-12 py-4 text-xs font-semibold tracking-widest uppercase"
                  style={{ backgroundColor: GOLD, color: NAVY, letterSpacing: "0.2em" }}
                  whileHover={{ opacity: 0.9 }}>
                  REQUEST FREE SURVEY
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-12 py-4 text-xs font-semibold tracking-widest uppercase border transition-colors hover:bg-yellow-600/10"
                style={{ borderColor: GOLD, color: GOLD, letterSpacing: "0.2em" }}>
                CALL NOW
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 mt-20 pt-12" style={{ borderTop: `1px solid ${GOLD}30` }}>
            {[["4.9","Trustpilot"],["323","Reviews"],["10K+","Moves"],["15+","Years"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", color: GOLD, fontWeight: 300 }}>{num}</div>
                <div className="text-xs tracking-widest uppercase mt-1 font-light" style={{ color: `${CREAM}60`, letterSpacing: "0.2em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: TEAL }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.3em" }}>Free, No-Obligation</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: CREAM, letterSpacing: "0.05em" }}>
            Request Your Fixed-Price Quote
          </h2>
          <DecoDivider />
          <div className="max-w-lg mx-auto">
            <QuoteFormH />
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.3em" }}>Our Services</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: CREAM, letterSpacing: "0.05em" }}>
              Every Move, Mastered
            </h2>
            <DecoDivider />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "I", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "II", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "III", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "IV", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "V", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "VI", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="p-8 text-center border group cursor-pointer"
                style={{ borderColor: `${GOLD}25` }}
                whileHover={{ borderColor: GOLD, y: -4 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: GOLD, fontWeight: 300, letterSpacing: "0.2em" }}>{num}</div>
                <div className="w-8 h-px mx-auto my-4" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
                <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase" style={{ color: CREAM, letterSpacing: "0.15em" }}>{title}</h3>
                <p className="text-xs leading-relaxed font-light" style={{ color: `${CREAM}70`, lineHeight: 1.8 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE ─────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: TEAL }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border opacity-20" style={{ borderColor: GOLD }} />
            <img src={PACKING_IMG} alt="Premium packing" className="w-full object-cover relative" style={{ height: "480px" }} />
            <div className="absolute -bottom-6 -right-6 px-8 py-6 text-center" style={{ backgroundColor: GOLD }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: NAVY }}>15+</div>
              <div className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: NAVY, letterSpacing: "0.2em", opacity: 0.7 }}>Years</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.3em" }}>The Octagon Standard</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: CREAM, lineHeight: 1.2, letterSpacing: "0.03em" }}>
              Precision, care and<br />discretion — on every move
            </h2>
            <DecoDivider />
            <div className="space-y-4">
              {["Dedicated move coordinator from survey to completion","Premium double-walled boxes and specialist wrapping","GPS-tracked vehicles with real-time client updates","£1M+ public liability insurance on every move"].map(item => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-4 h-px mt-2.5 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  <span className="text-xs font-light leading-relaxed tracking-wider" style={{ color: `${CREAM}80`, lineHeight: 1.8 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.3em" }}>Testimonials</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: CREAM, letterSpacing: "0.05em" }}>
              What Our Clients Say
            </h2>
            <DecoDivider />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-8 text-center border" style={{ borderColor: `${GOLD}25` }}>
                <div className="flex gap-1 justify-center mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm font-light leading-relaxed mb-6 italic" style={{ color: `${CREAM}80`, fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: 1.8 }}>
                  "{text}"
                </p>
                <div className="w-8 h-px mx-auto mb-4" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: CREAM, letterSpacing: "0.2em" }}>{name}</div>
                <div className="text-xs font-light tracking-wider mt-1" style={{ color: `${CREAM}50` }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: TEAL }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD, letterSpacing: "0.3em" }}>Begin Your Journey</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: CREAM, letterSpacing: "0.05em" }}>
          Your Perfect Move Awaits
        </h2>
        <DecoDivider />
        <p className="text-xs font-light tracking-wider max-w-md mx-auto" style={{ color: `${CREAM}70`, lineHeight: 1.8, letterSpacing: "0.1em" }}>
          Fixed price. No hidden fees. A dedicated concierge from first call to final box.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <Link href="/quote">
            <button className="px-12 py-4 text-xs font-semibold tracking-widest uppercase" style={{ backgroundColor: GOLD, color: NAVY, letterSpacing: "0.2em" }}>
              REQUEST FREE SURVEY
            </button>
          </Link>
          <a href="tel:02085218000" className="px-12 py-4 text-xs font-semibold tracking-widest uppercase border transition-colors hover:bg-yellow-600/10"
            style={{ borderColor: GOLD, color: GOLD, letterSpacing: "0.2em" }}>
            0208 521 8000
          </a>
        </div>
      </section>

      {/* Layout switcher */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 bg-white shadow-xl px-4 py-2 rounded-full border border-gray-200">
        <span className="text-xs text-gray-400 mr-1 self-center">Layouts:</span>
        {SWITCHER_LABELS.map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "H" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "H" ? { backgroundColor: GOLD } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
