/**
 * LAYOUT D — "The Concierge"
 * Style: Warm luxury, inspired by 5-star hotels and private concierge services.
 * Palette: Warm cream #FAF7F2, deep bronze #8B6914, rich espresso #2C1A0E, soft gold #D4AF37.
 * Fonts: Cormorant Garamond (display), DM Sans (body).
 * Premium signal: Warmth, hospitality, personal service, tactile textures, human touch.
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Shield, Clock, Award, Phone, CheckCircle2, Loader2, ChevronRight } from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

const GOLD = "#D4AF37";
const BRONZE = "#8B6914";
const ESPRESSO = "#2C1A0E";
const CREAM = "#FAF7F2";
const WARM_WHITE = "#FDF9F4";

function QuoteFormD() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ moveType: "", fromPostcode: "", toPostcode: "", moveDate: "", name: "", phone: "", email: "" });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const canProceed = step === 1 ? (form.moveType && form.fromPostcode && form.toPostcode) : (form.name && form.phone && form.email);

  const inputStyle: React.CSSProperties = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.875rem",
    color: ESPRESSO,
    backgroundColor: WARM_WHITE,
    border: "1px solid #e8ddd0",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    borderRadius: "2px",
  };

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 size={32} style={{ color: GOLD }} className="mx-auto mb-3" />
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: ESPRESSO }}>
        Thank you — your concierge will call within 1 hour.
      </p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center text-xs font-medium rounded-full"
              style={{ backgroundColor: step >= s ? GOLD : "#e8ddd0", color: step >= s ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
              {s}
            </div>
            {s < 2 && <div className="w-6 h-px" style={{ backgroundColor: step > s ? GOLD : "#e8ddd0" }} />}
          </div>
        ))}
        <span className="text-xs ml-2" style={{ color: "#aaa", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange} style={{ ...inputStyle, color: form.moveType ? ESPRESSO : "#aaa" }}>
            <option value="">Type of Move</option>
            <option value="House Removal">House Removal</option>
            <option value="Office Removal">Office Removal</option>
            <option value="Packing Service">Packing Service</option>
            <option value="Storage">Storage</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode" style={inputStyle} />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode" style={inputStyle} />
          </div>
          <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date"
            style={{ ...inputStyle, color: form.moveDate ? ESPRESSO : "#aaa" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3 mt-1 text-sm font-medium transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: canProceed ? GOLD : "#e8ddd0", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif", borderRadius: "2px" }}>
            Continue <ChevronRight size={14} />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" style={inputStyle} />
          <div className="flex gap-2 mt-1">
            <button onClick={() => setStep(1)} className="px-4 py-3 text-sm border transition-colors"
              style={{ borderColor: "#e8ddd0", color: "#888", fontFamily: "DM Sans, sans-serif", borderRadius: "2px" }}>← Back</button>
            <button onClick={() => canProceed && submitQuote.mutate({ ...form, source: "Layout D Hero" })} disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? ESPRESSO : "#e8ddd0", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif", borderRadius: "2px" }}>
              {submitQuote.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Request Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LayoutD() {
  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: CREAM, color: ESPRESSO, minHeight: "100vh" }}>
      <SEOHead title="London's Premium Removals | Octagon Removals" description="Award-winning removals company serving London and the M25. Fixed price, fully insured, white-glove service." />

      {/* ── NAV: WARM CONCIERGE ──────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: ESPRESSO }}>
        {/* Gold top line */}
        <div className="h-0.5 w-full" style={{ backgroundColor: GOLD }} />
        <div className="flex items-center justify-between px-8 py-4">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: GOLD }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: ESPRESSO, fontWeight: 700 }}>O</span>
              </div>
              <div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.08em", color: CREAM }}>
                  OCTAGON REMOVALS
                </div>
                <div className="text-xs tracking-widest" style={{ color: GOLD, opacity: 0.8 }}>Premium · Trusted · Insured</div>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Locations", "Contact"].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <span className="text-xs tracking-widest uppercase hover:text-yellow-300 transition-colors" style={{ color: "rgba(250,247,242,0.7)" }}>{item}</span>
              </Link>
            ))}
          </div>
          <a href="tel:02085218000" className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full"
            style={{ backgroundColor: GOLD, color: ESPRESSO }}>
            <Phone size={14} /> 0208 521 8000
          </a>
        </div>
      </nav>

      {/* ── HERO: WARM CONCIERGE SPLIT ───────────────────────────────── */}
      <section className="min-h-screen flex flex-col lg:flex-row" style={{ paddingTop: "80px" }}>
        {/* Left — image with warm overlay */}
        <div className="relative lg:w-3/5 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <img src={HERO_IMG} alt="Premium removals London" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,26,14,0.3), rgba(44,26,14,0.6))" }} />

          {/* Floating trust badge */}
          <motion.div
            className="absolute bottom-12 left-10 p-6"
            style={{ backgroundColor: "rgba(250,247,242,0.95)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
            </div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: ESPRESSO, fontWeight: 500 }}>
              "Absolutely flawless service"
            </div>
            <div className="text-xs mt-1" style={{ color: BRONZE }}>Sarah M. · Kensington · March 2025</div>
          </motion.div>

          {/* Corner badge */}
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full flex flex-col items-center justify-center"
            style={{ backgroundColor: GOLD }}>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 700, color: ESPRESSO, lineHeight: 1 }}>15+</div>
            <div className="text-xs text-center" style={{ color: ESPRESSO, opacity: 0.8 }}>Years<br />Est.</div>
          </div>
        </div>

        {/* Right — concierge panel */}
        <div className="lg:w-2/5 flex flex-col justify-center px-8 md:px-12 py-16" style={{ backgroundColor: WARM_WHITE }}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            {/* Greeting */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: BRONZE }}>London's Premium Removals</span>
            </div>

            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: ESPRESSO }}>
              Your Move,<br />
              Our <span style={{ color: GOLD, fontStyle: "italic" }}>Expertise</span>
            </h1>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: "#7a5c40" }}>
              We treat every move as if it were our own. From the first survey to the final box, 
              your dedicated concierge team ensures a seamless, stress-free experience.
            </p>

            {/* Trust pillars */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { icon: Shield, title: "Fully Insured", desc: "£1M+ liability cover" },
                { icon: Award, title: "Award-Winning", desc: "Best in London 2024" },
                { icon: Clock, title: "Fixed Price", desc: "No hidden surprises" },
                { icon: Star, title: "White-Glove", desc: "Premium care always" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-3 rounded-sm" style={{ backgroundColor: CREAM }}>
                  <Icon size={16} style={{ color: GOLD, flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: ESPRESSO }}>{title}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#aaa" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote form */}
            <div className="mt-8 p-6 rounded-sm" style={{ backgroundColor: CREAM, border: "1px solid #e8ddd0" }}>
              <div className="text-xs tracking-widest uppercase mb-1" style={{ color: BRONZE }}>Free, No-Obligation</div>
              <h3 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: ESPRESSO }}>
                Request Your Fixed-Price Quote
              </h3>
              <QuoteFormD />
            </div>

            {/* Phone CTA */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-sm" style={{ backgroundColor: "#f0e8d8" }}>
              <Phone size={16} style={{ color: GOLD }} />
              <div>
                <div className="text-xs" style={{ color: "#aaa" }}>Prefer to speak with us?</div>
                <a href="tel:02085218000" className="text-sm font-semibold" style={{ color: ESPRESSO }}>0208 521 8000</a>
              </div>
              <div className="ml-auto text-xs" style={{ color: "#aaa" }}>Mon–Fri 8am–6pm, Sat 8am–3pm</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES: WARM CARDS ─────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: BRONZE }}>Our Services</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: ESPRESSO }}>
              Every Move, Handled with Care
            </h2>
            <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "#9a7a5a" }}>
              From a single room to an entire estate — we bring the same dedication and precision to every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: "01", title: "House Removals", desc: "Full-service residential moves across London and the M25. Fixed price, fully insured." },
              { n: "02", title: "Office Removals", desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available." },
              { n: "03", title: "Packing Service", desc: "Professional packing with premium materials. White-glove care for antiques." },
              { n: "04", title: "Storage Solutions", desc: "Secure, climate-controlled storage. Short and long-term options available." },
              { n: "05", title: "International Removals", desc: "Door-to-door international moves with full customs documentation." },
              { n: "06", title: "Man & Van", desc: "Flexible, same-day service for smaller moves and single-item deliveries." },
            ].map(({ n, title, desc }) => (
              <motion.div key={n}
                className="group p-6 rounded-sm cursor-pointer transition-all"
                style={{ backgroundColor: WARM_WHITE, border: "1px solid #e8ddd0" }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(44,26,14,0.08)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest" style={{ color: GOLD }}>{n}</span>
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRONZE }} />
                </div>
                <h3 className="text-base mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: ESPRESSO, fontWeight: 500 }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#9a7a5a" }}>{desc}</p>
                <div className="mt-4 w-0 group-hover:w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: GOLD }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM PROMISE: WARM FEATURE ───────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: ESPRESSO }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-widest uppercase mb-6" style={{ color: GOLD }}>The Octagon Promise</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: CREAM, lineHeight: 1.2 }}>
              Your home deserves<br />the finest care
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.6)" }}>
              We understand that moving is one of life's most significant moments. That's why we assign 
              a dedicated concierge coordinator to every move — someone who knows your home, your needs, 
              and your timeline intimately.
            </p>
            <div className="mt-10 space-y-4">
              {[
                "Personal move coordinator from survey to completion",
                "Premium double-walled boxes and specialist wrapping",
                "GPS-tracked vehicles with real-time updates",
                "£1M+ public liability insurance on every move",
                "Post-move follow-up to ensure your satisfaction",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: GOLD }} />
                  <span className="text-sm" style={{ color: "rgba(250,247,242,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/quote">
              <button className="mt-10 px-8 py-4 text-sm font-medium rounded-sm"
                style={{ backgroundColor: GOLD, color: ESPRESSO, fontFamily: "DM Sans, sans-serif" }}>
                Request a Free Survey
              </button>
            </Link>
          </div>
          <div className="relative">
            <img src={PACKING_IMG} alt="White-glove packing" className="w-full object-cover rounded-sm" style={{ height: "500px" }} />
            {/* Warm overlay card */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-sm shadow-xl"
              style={{ backgroundColor: GOLD, maxWidth: "200px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", fontWeight: 600, color: ESPRESSO, lineHeight: 1 }}>4.9</div>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={ESPRESSO} stroke="none" />)}
              </div>
              <div className="text-xs" style={{ color: ESPRESSO, opacity: 0.8 }}>323 Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS: WARM HOTEL STYLE ──────────────────────────── */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: WARM_WHITE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: BRONZE }}>Client Stories</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: ESPRESSO }}>
              Trusted by London's Finest
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "Kensington", text: "Absolutely flawless service from start to finish. The team handled our antiques with extraordinary care. Worth every penny." },
              { name: "James T.", location: "Canary Wharf", text: "We moved our entire office of 45 people over a weekend. Professional, efficient, nothing damaged. I'd recommend without hesitation." },
              { name: "Emma R.", location: "Richmond", text: "The packing team were exceptional — every item wrapped meticulously. The fixed price meant no nasty surprises on moving day." },
            ].map(({ name, location, text }) => (
              <div key={name} className="p-8 rounded-sm" style={{ backgroundColor: CREAM, border: "1px solid #e8ddd0" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={GOLD} stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#7a5c40", fontStyle: "italic" }}>"{text}"</p>
                <div className="flex items-center gap-3" style={{ borderTop: "1px solid #e8ddd0", paddingTop: "1rem" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: GOLD, color: ESPRESSO }}>
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: ESPRESSO }}>{name}</div>
                    <div className="text-xs" style={{ color: BRONZE }}>{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: WARM FULL-WIDTH ─────────────────────────────────────── */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: "#f0e8d8" }}>
        <div className="text-xs tracking-widest uppercase mb-4" style={{ color: BRONZE }}>Begin Your Journey</div>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: ESPRESSO }}>
          Your Perfect Move Awaits
        </h2>
        <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "#9a7a5a" }}>
          Fixed price. No hidden fees. A dedicated concierge from first call to final box.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/quote">
            <button className="px-12 py-4 text-sm font-medium rounded-sm"
              style={{ backgroundColor: ESPRESSO, color: CREAM, fontFamily: "DM Sans, sans-serif" }}>
              Get Free Quote
            </button>
          </Link>
          <a href="tel:02085218000" className="px-12 py-4 text-sm font-medium border rounded-sm flex items-center justify-center gap-2"
            style={{ borderColor: ESPRESSO, color: ESPRESSO, fontFamily: "DM Sans, sans-serif" }}>
            <Phone size={14} /> 0208 521 8000
          </a>
        </div>
      </section>

      {/* Layout selector */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 shadow-lg px-4 py-2 rounded-full border"
        style={{ backgroundColor: WARM_WHITE, borderColor: "#e8ddd0" }}>
        <span className="text-xs mr-2 self-center" style={{ color: "#aaa" }}>Layouts:</span>
        {"ABCDEFGHIJ".split("").map(l => (
          <Link key={l} href={`/layout-${l.toLowerCase()}`}>
            <button className="w-7 h-7 text-xs font-bold rounded-full transition-colors"
              style={l === "D" ? { backgroundColor: GOLD, color: ESPRESSO } : { color: "#888" }}>
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
