/*
 * LAYOUT J — "The Heritage"
 * Style: British heritage luxury. Inspired by Burberry, Barbour, Fortnum & Mason.
 * Palette: British racing green #1B4332, cream #FFF8E7, burgundy #6B1A2A, gold #C9A84C.
 * Fonts: EB Garamond (display), Source Sans Pro (body).
 * Premium signal: Proud British heritage — tradition, trust, excellence.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const SKYLINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp";
const GREEN = "#1B4332";
const CREAM = "#FFF8E7";
const BURGUNDY = "#6B1A2A";
const GOLD = "#C9A84C";

const SWITCHER_LABELS = ["A","B","C","D","E","F","G","H","I","J"];

// British-style crest SVG
const Crest = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <polygon points="24,2 46,14 46,34 24,46 2,34 2,14" fill="none" stroke={GOLD} strokeWidth="1.5" />
    <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" fill={GREEN} stroke={GOLD} strokeWidth="0.5" opacity="0.5" />
    <text x="24" y="30" textAnchor="middle" fill={GOLD} fontSize="16" fontFamily="EB Garamond" fontWeight="bold">O</text>
  </svg>
);

function QuoteFormJ() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GREEN }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.2rem", color: GREEN }}>Thank you — we shall be in touch within the hour.</p>
    </div>
  );

  const inputStyle = {
    fontFamily: "'Source Sans Pro', sans-serif",
    backgroundColor: CREAM,
    borderColor: `${GREEN}40`,
    color: GREEN
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-xs font-semibold border-2"
              style={{ borderColor: step >= s ? GREEN : `${GREEN}30`, color: step >= s ? "#fff" : `${GREEN}50`, backgroundColor: step >= s ? GREEN : "transparent", fontFamily: "'Source Sans Pro', sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-0.5" style={{ backgroundColor: step > s ? GREEN : `${GREEN}20` }} />}
          </div>
        ))}
        <span className="text-xs tracking-wider uppercase ml-1" style={{ color: `${GREEN}60`, fontFamily: "'Source Sans Pro', sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border py-3 px-4 text-sm outline-none"
            style={inputStyle}>
            <option value="">Type of Move</option>
            <option value="house">House Removal</option>
            <option value="office">Office Removal</option>
            <option value="packing">Packing Service</option>
            <option value="storage">Storage</option>
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
            className="w-full py-3.5 text-sm font-semibold tracking-wider uppercase transition-opacity"
            style={{ backgroundColor: canProceed ? GREEN : `${GREEN}30`, color: "#fff", fontFamily: "'Source Sans Pro', sans-serif" }}>
            Continue
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telephone"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
            className="w-full border py-3 px-4 text-sm outline-none" style={inputStyle} />
          <button onClick={() => canProceed && submitQuote.mutate(form)} disabled={!canProceed || submitQuote.isPending}
            className="w-full py-3.5 text-sm font-semibold tracking-wider uppercase"
            style={{ backgroundColor: canProceed ? BURGUNDY : `${GREEN}30`, color: "#fff", fontFamily: "'Source Sans Pro', sans-serif" }}>
            {submitQuote.isPending ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Request Free Survey"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LayoutJ() {
  return (
    <div style={{ fontFamily: "'Source Sans Pro', sans-serif", backgroundColor: CREAM, color: GREEN }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" />

      {/* ── TOP BAR ─────────────────────────────────────────────────── */}
      <div className="py-2 px-8 md:px-16 text-xs font-medium tracking-wider flex justify-between items-center" style={{ backgroundColor: GREEN, color: `${CREAM}90` }}>
        <span>Est. 2009 · London · Fully Insured · Award-Winning</span>
        <div className="flex items-center gap-4">
          <a href="tel:02085218000" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors" style={{ color: GOLD }}>
            <Phone size={11} /> 0208 521 8000
          </a>
          <a href="mailto:info@octagonremovals.co.uk" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors" style={{ color: `${CREAM}70` }}>
            <Mail size={11} /> info@octagonremovals.co.uk
          </a>
        </div>
      </div>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-5 sticky top-0 z-40" style={{ backgroundColor: CREAM, borderBottom: `2px solid ${GREEN}` }}>
        <Link href="/">
          <div className="flex items-center gap-4">
            <Crest size={44} />
            <div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: GREEN, letterSpacing: "0.05em" }}>Octagon Removals</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.2em", fontSize: "0.6rem" }}>London's Finest · Since 2009</div>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide" style={{ color: GREEN }}>
          {["Services","About","Locations","Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`}><span className="hover:text-yellow-700 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-0.5">{item}</span></Link>
          ))}
        </div>
        <Link href="/quote">
          <button className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase transition-colors hover:opacity-90"
            style={{ backgroundColor: BURGUNDY, color: "#fff" }}>
            Free Survey
          </button>
        </Link>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative" style={{ minHeight: "90vh" }}>
        <img src={HERO_IMG} alt="Octagon Removals" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${GREEN}E0 0%, ${GREEN}90 40%, transparent 70%)` }} />

        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 py-24" style={{ minHeight: "90vh" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.3em" }}>London's Premier Removals Company</span>
            </div>
            <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 500, color: CREAM, lineHeight: 1.05, maxWidth: "14ch" }}>
              Trusted by<br />
              <em style={{ color: GOLD }}>London's</em><br />
              Finest Homes
            </h1>
            <p className="mt-8 text-base leading-relaxed max-w-lg" style={{ color: `${CREAM}CC`, fontFamily: "'Source Sans Pro', sans-serif" }}>
              Fixed-price house, office and international removals across London and the M25. Trusted by over 10,000 families and businesses since 2009. Fully insured.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 mt-8 mb-10">
              {[["4.9★","Trustpilot"],["323","Reviews"],["10K+","Moves"],["15+","Years"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.8rem", color: GOLD, lineHeight: 1 }}>{num}</div>
                  <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: `${CREAM}80` }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/quote">
                <motion.button className="px-10 py-4 text-sm font-semibold tracking-wider uppercase"
                  style={{ backgroundColor: GOLD, color: GREEN }}
                  whileHover={{ opacity: 0.9 }}>
                  Request Free Survey
                </motion.button>
              </Link>
              <a href="tel:02085218000" className="px-10 py-4 text-sm font-semibold tracking-wider uppercase border text-white hover:bg-white/10 transition-colors"
                style={{ borderColor: `${CREAM}60` }}>
                0208 521 8000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: GREEN }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.25em" }}>Free, No-Obligation</span>
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: CREAM, lineHeight: 1.2 }}>
              Request Your Fixed-Price Quote
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: `${CREAM}80` }}>
              We'll call you within 1 hour. No hidden fees. No surprises. Just a precise, transparent price for your move.
            </p>
            <div className="mt-8 space-y-3">
              {["£1M+ public liability insurance","Fixed price — no hidden extras","Dedicated move coordinator","GPS-tracked vehicles"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  <span className="text-sm" style={{ color: `${CREAM}90` }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8" style={{ backgroundColor: CREAM }}>
            <QuoteFormJ />
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.25em" }}>Our Services</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: GREEN, lineHeight: 1.2 }}>
            Every Move, Handled with Distinction
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { num: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { num: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { num: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { num: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { num: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ num, title, desc }) => (
              <motion.div key={num} className="p-8 border-l-2 group cursor-pointer hover:border-yellow-600 transition-colors"
                style={{ borderColor: `${GREEN}30`, backgroundColor: "white" }}
                whileHover={{ y: -4 }}>
                <div className="text-xs font-semibold tracking-wider mb-4" style={{ color: GOLD }}>{num}</div>
                <h3 className="mb-2 font-semibold" style={{ fontFamily: "'EB Garamond', serif", color: GREEN, fontSize: "1.15rem" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: `${GREEN}80` }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE ─────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: `${GREEN}10` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={PACKING_IMG} alt="Premium packing" className="w-full object-cover" style={{ height: "500px" }} />
            <div className="absolute -bottom-6 -left-6 px-8 py-6 text-center" style={{ backgroundColor: BURGUNDY }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "2.5rem", fontWeight: 500, color: GOLD }}>15+</div>
              <div className="text-xs font-semibold tracking-widest uppercase mt-1 text-white/70">Years</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.25em" }}>The Octagon Promise</span>
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 500, color: GREEN, lineHeight: 1.2 }}>
              Your home deserves the finest care
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: `${GREEN}80` }}>
              We understand that moving is one of life's most significant moments. That's why we assign a dedicated coordinator to every move — someone who knows your home, your needs, and your timeline intimately.
            </p>
            <div className="mt-8 space-y-3">
              {["Dedicated move coordinator from survey to completion","Premium double-walled boxes and specialist wrapping","GPS-tracked vehicles with real-time updates","£1M+ public liability insurance on every move","Post-move follow-up to ensure your satisfaction"].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span className="text-sm" style={{ color: `${GREEN}80` }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.25em" }}>Client Stories</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: GREEN }}>
            Trusted by London's Finest
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-8 border" style={{ borderColor: `${GREEN}20`, backgroundColor: "white" }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: `${GREEN}80`, fontFamily: "'EB Garamond', serif", fontSize: "1rem", lineHeight: 1.8 }}>
                  "{text}"
                </p>
                <div className="font-semibold text-sm" style={{ color: GREEN }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: `${GREEN}60` }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LONDON SKYLINE CTA ───────────────────────────────────────── */}
      <section className="relative py-32 px-8 text-center overflow-hidden">
        <img src={SKYLINE_IMG} alt="London skyline" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ backgroundColor: `${GREEN}F0` }} />
        <div className="relative z-10">
          <Crest size={64} />
          <h2 className="mt-6" style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 500, color: CREAM, lineHeight: 1.1 }}>
            Your Perfect Move Awaits
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: `${CREAM}80` }}>
            Fixed price. No hidden fees. A dedicated team from first call to final box.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            <Link href="/quote">
              <button className="px-12 py-4 text-sm font-semibold tracking-wider uppercase" style={{ backgroundColor: GOLD, color: GREEN }}>
                Request Free Survey
              </button>
            </Link>
            <a href="tel:02085218000" className="px-12 py-4 text-sm font-semibold tracking-wider uppercase border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: `${CREAM}40` }}>
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
            <button className={`w-7 h-7 text-xs font-bold rounded-full transition-colors ${l === "J" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
              style={l === "J" ? { backgroundColor: GREEN } : {}}>
              {l}
            </button>
          </Link>
        ))}
        <Link href="/"><button className="text-xs text-gray-400 hover:text-gray-600 ml-1 self-center">Live</button></Link>
      </div>
    </div>
  );
}
