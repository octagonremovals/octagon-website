/*
 * ISLINGTON SATELLITE PAGE
 * Dedicated high-converting location page for Islington removals.
 * Designed to rank for: "removals Islington", "man and van Islington",
 * "house removals N1", "moving company Islington London"
 *
 * Palette: Charcoal #0F1923, Gold #B8960C, Off-white #F5F3EF
 * Fonts: Cormorant Garamond (display), DM Sans (body/UI)
 */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Star, Phone, CheckCircle2, MapPin, Shield, Clock,
  Award, ArrowRight, ChevronDown, Loader2, Play
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import Navbar from "@/components/Navbar";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const VIDEO_ID = "svxwKRllfoA";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

// UK postcode regex
const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i;

const REVIEWS = [
  {
    name: "James H.",
    area: "Angel, N1",
    rating: 5,
    text: "Octagon moved us from a 3-bed flat in Angel to Highbury. Absolutely faultless — on time, careful with everything, and the fixed price meant no surprises. Highly recommend.",
    date: "March 2025",
  },
  {
    name: "Sophie L.",
    area: "Canonbury, N1",
    rating: 5,
    text: "We had a lot of antiques and were nervous about the move. The team wrapped everything meticulously and even helped reassemble our wardrobes. Professional from start to finish.",
    date: "January 2025",
  },
  {
    name: "Marcus D.",
    area: "Barnsbury, N1",
    rating: 5,
    text: "Second time using Octagon. They remembered our preferences from last time and the whole move was done by lunchtime. Brilliant service, brilliant team.",
    date: "November 2024",
  },
];

const FAQS = [
  {
    q: "How much does a house removal in Islington cost?",
    a: "Our Islington removals start from £350 for a 1-bedroom flat and £650 for a 3-bedroom house. All prices are fixed — no hidden charges. We provide a free quote within 1 hour of your enquiry.",
  },
  {
    q: "Do you cover all of Islington including Angel, Highbury and Canonbury?",
    a: "Yes — we cover the entire London Borough of Islington including Angel, Highbury, Canonbury, Barnsbury, Clerkenwell, Finsbury Park, Holloway, and all N1, N5, N7 postcodes.",
  },
  {
    q: "Can you pack for me as well as move?",
    a: "Absolutely. Our full packing service includes professional-grade materials (double-walled boxes, tissue paper, bubble wrap), careful wrapping of all items, and full reassembly at your new home.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2–4 weeks in advance for weekend moves in Islington, which are in high demand. However, we often accommodate last-minute bookings — call us on 0208 521 8000 to check availability.",
  },
  {
    q: "Are you insured for moves in Islington?",
    a: "Yes. We carry £50,000 goods-in-transit insurance per vehicle and £1,000,000 public liability insurance. Your belongings are fully protected throughout your Islington move.",
  },
];

// ── QUOTE FORM ────────────────────────────────────────────────────────────────
function IslingtonQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    moveType: "", fromPostcode: "", toPostcode: "", moveDate: "",
    name: "", phone: "", email: "",
  });

  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const postcodeValid = (p: string) => !p || UK_POSTCODE_RE.test(p.trim());
  const canProceed = step === 1
    ? !!(form.moveType && form.fromPostcode && form.toPostcode
        && postcodeValid(form.fromPostcode) && postcodeValid(form.toPostcode))
    : !!(form.name && form.phone);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", fontSize: "0.875rem",
    border: "1px solid #ddd", outline: "none", fontFamily: "DM Sans, sans-serif",
    color: CHARCOAL, backgroundColor: "#fff",
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 size={40} style={{ color: GOLD }} className="mx-auto mb-3" />
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: CHARCOAL, fontWeight: 600 }}>
          We'll Call You Within 1 Hour
        </p>
        <p className="text-sm mt-2" style={{ color: "#666", fontFamily: "DM Sans, sans-serif" }}>
          Or call us now: <a href="tel:02085218000" style={{ color: GOLD, fontWeight: 600 }}>0208 521 8000</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-5">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: step >= s ? GOLD : "#e5e5e5", color: step >= s ? "#fff" : "#999" }}>
              {s}
            </div>
            {s < 2 && <div className="w-8 h-px" style={{ backgroundColor: step > s ? GOLD : "#e5e5e5" }} />}
          </div>
        ))}
        <span className="text-xs ml-2" style={{ color: "#888", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move details" : "Your contact"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange} style={inputStyle}>
            <option value="">Type of move *</option>
            <option>House Removal</option>
            <option>Flat / Apartment Removal</option>
            <option>Office Removal</option>
            <option>Packing Only</option>
            <option>Storage</option>
            <option>International Move</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange}
              placeholder="Moving from (postcode) *" style={inputStyle}
              className="uppercase" />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange}
              placeholder="Moving to (postcode) *" style={inputStyle}
              className="uppercase" />
          </div>
          <div style={{ position: "relative" }}>
            <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
              style={{ ...inputStyle, color: form.moveDate ? CHARCOAL : "#999" }}
              min={new Date().toISOString().split("T")[0]} />
            {!form.moveDate && (
              <span style={{
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                fontSize: "0.875rem", color: "#999", pointerEvents: "none",
                fontFamily: "DM Sans, sans-serif",
              }}>Moving date (optional — I don't know yet)</span>
            )}
          </div>
          <button
            onClick={() => canProceed && setStep(2)}
            disabled={!canProceed}
            className="w-full py-3 font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-opacity"
            style={{ backgroundColor: canProceed ? GOLD : "#ccc", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
            Next Step <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name *" style={inputStyle} />
          <input name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="Phone number *" style={inputStyle} />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email address (optional)" style={inputStyle} />
          <div className="flex gap-2">
            <button onClick={() => setStep(1)}
              className="px-4 py-3 text-sm font-semibold border transition-colors"
              style={{ borderColor: "#ddd", color: "#666", fontFamily: "DM Sans, sans-serif" }}>
              Back
            </button>
            <button
              onClick={() => {
                if (!canProceed) return;
                submitQuote.mutate({
                  moveType: form.moveType,
                  fromPostcode: form.fromPostcode,
                  toPostcode: form.toPostcode,
                  moveDate: form.moveDate,
                  name: form.name,
                  phone: form.phone,
                  email: form.email || "not-provided@octagonremovals.co.uk",
                  source: "Islington Location Page",
                });
              }}
              disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? GOLD : "#ccc", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
              {submitQuote.isPending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Get Free Quote <ArrowRight size={16} /></>}
            </button>
          </div>
        </div>
      )}
      <p className="text-xs text-center mt-3" style={{ color: "#aaa", fontFamily: "DM Sans, sans-serif" }}>
        Fixed price · No hidden charges · We respond within 1 hour
      </p>
    </div>
  );
}

// ── FAQ ITEM ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e8e4dc" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        style={{ fontFamily: "DM Sans, sans-serif" }}>
        <span className="font-semibold text-sm" style={{ color: CHARCOAL }}>{q}</span>
        <ChevronDown size={18} style={{ color: GOLD, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <p className="pb-4 text-sm leading-relaxed" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

// ── VIDEO PLAYER ──────────────────────────────────────────────────────────────
function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%", backgroundColor: "#000" }}>
      {!playing ? (
        <>
          <img
            src={THUMBNAIL}
            alt="Islington Removals by Octagon — watch our team in action"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
          {/* Play button */}
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 group"
            aria-label="Play Islington removals video">
            <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: GOLD, boxShadow: "0 8px 32px rgba(184,150,12,0.5)" }}>
              <Play size={32} fill="#fff" style={{ color: "#fff", marginLeft: 4 }} />
            </div>
            <span className="text-white text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "DM Sans, sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              Watch Our Islington Move
            </span>
          </button>
          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 text-xs font-semibold"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
            Full Move · 4 min
          </div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Islington Removals by Octagon"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function IslingtonLocation() {
  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://octagonremovals.co.uk/#business",
        "name": "Octagon Removals — Islington",
        "url": "https://octagonremovals.co.uk/locations/islington",
        "telephone": "+442085218000",
        "email": "info@octagonremovals.co.uk",
        "description": "Professional house and office removals in Islington, North London. Fixed price, fully insured, 5-star rated. Covering N1, N5, N7, Angel, Highbury, Canonbury.",
        "areaServed": {
          "@type": "Place",
          "name": "Islington, London"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Islington",
          "addressRegion": "London",
          "addressCountry": "GB"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "323"
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "15:00" }
        ]
      },
      {
        "@type": "VideoObject",
        "name": "ISLINGTON REMOVALS - Full-Service House Move in North London by OCTAGON",
        "description": "Residential Move in Islington, London | OCTAGON REMOVALS. Full-service house move including packing, furniture dismantling, loading, transport and reassembly in Islington, North London.",
        "thumbnailUrl": THUMBNAIL,
        "uploadDate": "2025-08-02",
        "contentUrl": `https://www.youtube.com/watch?v=${VIDEO_ID}`,
        "embedUrl": `https://www.youtube.com/embed/${VIDEO_ID}`,
        "publisher": {
          "@type": "Organization",
          "name": "Octagon Removals Ltd",
          "url": "https://octagonremovals.co.uk"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Islington Removals | Fixed Price, Fully Insured | Octagon Removals</title>
        <meta name="description" content="Professional removals in Islington, London. Fixed price quotes, fully insured, 4.9★ rated. Covering Angel, Highbury, Canonbury, N1, N5, N7. Call 0208 521 8000 for a free quote within 1 hour." />
        <meta name="keywords" content="removals Islington, house removals Islington, man and van Islington, moving company N1, Islington removals company, Angel removals, Highbury removals, Canonbury removals" />
        <link rel="canonical" href="https://octagonremovals.co.uk/locations/islington" />
        <meta property="og:title" content="Islington Removals | Octagon Removals — Fixed Price, Fully Insured" />
        <meta property="og:description" content="Professional house and office removals in Islington. Fixed price, 4.9★ rated, fully insured. Free quote within 1 hour." />
        <meta property="og:image" content={THUMBNAIL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div style={{ backgroundColor: SAND, minHeight: "100vh" }}>
        <Navbar />

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: CHARCOAL, paddingTop: "80px" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — headline + form */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                <span>/</span>
                <span style={{ color: GOLD }}>Islington</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} style={{ color: GOLD }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                  North London · N1 · N5 · N7
                </span>
              </div>

              <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
                Islington Removals<br />
                <span style={{ color: GOLD }}>Done Properly.</span>
              </h1>

              <p className="mb-6 leading-relaxed" style={{ color: "#b0bec5", fontFamily: "DM Sans, sans-serif", fontSize: "1rem", maxWidth: "480px" }}>
                Premium house and office removals across Islington — Angel, Highbury, Canonbury, Barnsbury and beyond. Fixed price, fully insured, 4.9★ rated by over 323 London families.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, text: "£50k Insured" },
                  { icon: Clock, text: "Quote in 1 Hour" },
                  { icon: Award, text: "Fixed Price" },
                  { icon: Star, text: "4.9★ Google" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
                    style={{ backgroundColor: "rgba(184,150,12,0.12)", border: `1px solid rgba(184,150,12,0.3)`, color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                    <Icon size={12} />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a href="tel:02085218000"
                  className="flex items-center gap-2 px-6 py-3 font-semibold text-sm tracking-wide"
                  style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                  <Phone size={16} /> 0208 521 8000
                </a>
                <a href="#quote"
                  className="flex items-center gap-2 px-6 py-3 font-semibold text-sm tracking-wide border"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                  Get Free Quote <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right — video */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              className="relative">
              <div style={{ border: `2px solid rgba(184,150,12,0.3)` }}>
                <VideoPlayer />
              </div>
              {/* Video caption */}
              <div className="mt-3 flex items-center gap-2">
                <div className="w-1 h-4" style={{ backgroundColor: GOLD }} />
                <p className="text-xs" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>
                  Real footage — our team completing a full house move in Islington
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
        <section className="py-6 px-6" style={{ backgroundColor: "#0a1520" }}>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "4.9★", label: "Google Rating", sub: "323 reviews" },
              { value: "4.8★", label: "Trustpilot", sub: "170 reviews" },
              { value: "9+", label: "Years Trading", sub: "Est. 2017" },
              { value: "£50k", label: "Insured Per Van", sub: "Goods in transit" },
              { value: "100%", label: "Fixed Price", sub: "No hidden charges" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center">
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 700, color: GOLD, lineHeight: 1 }}>{value}</p>
                <p className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#fff", fontFamily: "DM Sans, sans-serif" }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES + QUOTE FORM ─────────────────────────────────────── */}
        <section id="quote" className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                What We Do in Islington
              </p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 700, color: CHARCOAL, marginBottom: "1.5rem" }}>
                Full-Service Removals,<br />Exactly as Promised
              </h2>

              <div className="space-y-4">
                {[
                  { title: "House & Flat Removals", desc: "From studio flats in Angel to 5-bedroom houses in Highbury — we handle every size of residential move in Islington with the same level of care." },
                  { title: "Packing & Unpacking", desc: "Professional packing using double-walled boxes, tissue paper and bubble wrap. We protect floors, carpets and door frames as standard." },
                  { title: "Furniture Dismantling & Assembly", desc: "Wardrobes, beds, flat-pack furniture — our team dismantles and reassembles everything at your new Islington address." },
                  { title: "Office Removals", desc: "Weekend and out-of-hours office moves across Islington and the City. Minimal disruption, maximum efficiency." },
                  { title: "Storage Solutions", desc: "Short and long-term storage available if you need time between your Islington move-out and move-in dates." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: CHARCOAL, fontFamily: "DM Sans, sans-serif" }}>{title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Areas covered */}
              <div className="mt-8 p-5" style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                  Areas We Cover in Islington
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Angel", "Highbury", "Canonbury", "Barnsbury", "Clerkenwell", "Finsbury Park", "Holloway", "Upper Street", "Archway", "Tufnell Park", "N1", "N5", "N7", "EC1V"].map(area => (
                    <span key={area} className="px-2.5 py-1 text-xs font-medium"
                      style={{ backgroundColor: SAND, color: CHARCOAL, fontFamily: "DM Sans, sans-serif", border: "1px solid #e8e4dc" }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div>
              <div className="p-7 shadow-sm" style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                <div className="mb-5">
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                    Free Quote — Islington Removals
                  </p>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 700, color: CHARCOAL }}>
                    Get Your Fixed Price Today
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "#888", fontFamily: "DM Sans, sans-serif" }}>
                    We respond within 1 hour during office hours
                  </p>
                </div>
                <IslingtonQuoteForm />
              </div>

              {/* Phone CTA */}
              <div className="mt-4 p-4 flex items-center gap-4" style={{ backgroundColor: CHARCOAL }}>
                <Phone size={20} style={{ color: GOLD, flexShrink: 0 }} />
                <div>
                  <p className="text-xs" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>Prefer to talk? Call us now</p>
                  <a href="tel:02085218000" className="font-bold text-lg hover:opacity-80 transition-opacity"
                    style={{ color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                    0208 521 8000
                  </a>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>Mon–Fri 8am–6pm</p>
                  <p className="text-xs" style={{ color: "#6a7a8a", fontFamily: "DM Sans, sans-serif" }}>Sat 8am–3pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ───────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: CHARCOAL }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                What Islington Customers Say
              </p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 700, color: "#fff" }}>
                Trusted by Islington Families
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map((r) => (
                <div key={r.name} className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex mb-3">
                    {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} fill={GOLD} style={{ color: GOLD }} />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#b0bec5", fontFamily: "DM Sans, sans-serif" }}>
                    "{r.text}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#fff", fontFamily: "DM Sans, sans-serif" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>{r.area} · {r.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: SAND }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                Common Questions
              </p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 700, color: CHARCOAL }}>
                Islington Removals FAQ
              </h2>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc", padding: "0 1.5rem" }}>
              {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

          {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg"
            alt="Octagon Removals team"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(245,243,239,0.92)" }} />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>How It Works</span>
                <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
              </div>
              <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: CHARCOAL }}>
                Your Islington Move in Four Simple Steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Tell Us About Your Move", desc: "Reach out by phone or through our website. A member of our team will be in touch within the hour to discuss your requirements and begin planning your move." },
                { step: "02", title: "Book A Survey", desc: "One of our consultants will either come around or give you a video call to assess your requirements and offer guidance." },
                { step: "03", title: "Accept Your Quote", desc: "You will receive a comprehensive quote with description of services requested after 1 hour of the survey." },
                { step: "04", title: "Get Moved", desc: "Sit back and relax. Your possessions arrive safely, your new home is ready, and your next chapter begins. We handle everything so that when you walk through your new door, all that's left to do is settle in." },
              ].map(({ step, title, desc }, i) => (
                <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ border: `2px solid ${GOLD}`, backgroundColor: "rgba(255,255,255,0.85)" }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: GOLD }}>{step}</span>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-7 -right-3 z-20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  )}
                  <h3 className="font-medium mb-2 text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#777", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SLOW IS SMOOTH ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg"
            alt="Octagon Removals team at work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,20,32,0.72)" }} />
          <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-14 lg:px-20 py-14" style={{ minHeight: "320px" }}>
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Slow is smooth and smooth is fast
            </p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.25,
              maxWidth: "800px",
              fontStyle: "normal",
            }}>
              Careful Planning So Moving Day Feels Effortless.
            </h2>
            <div className="mt-5 max-w-2xl space-y-4" style={{ color: "rgba(255,255,255,0.70)", fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", lineHeight: "1.75" }}>
              <p>Rushing a move leads to unnecessary mistakes, damage and stress.</p>
              <p>Our approach is different. We plan each move methodically, so the day itself is well organised long before it begins. From access and parking right through to how each room is packed and loaded.</p>
              <p>We believe the quality of a move is decided long before the team gets on site. This is why we invest time upfront understanding your property, your inventory and any specific requirements, so that when moving day comes, the crew already knows exactly what to do and in what order. No guesswork, no scrambling, no last-minute decisions made under pressure.</p>
              <p>By the time our crew arrives at your doorstep, the hard thinking is already done. What's left is simply executing the plan. Just a well-run move, exactly as it should be and how we like it.</p>
            </div>
            <a href="/contact">
              <button
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
              >
                Get In Touch
              </button>
            </a>
            <div className="mt-6 h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 text-center" style={{ backgroundColor: CHARCOAL }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Ready to Move in Islington?
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
              Get Your Free Fixed-Price Quote
            </h2>
            <p className="mb-8 text-sm" style={{ color: "#b0bec5", fontFamily: "DM Sans, sans-serif" }}>
              We respond within 1 hour. No obligation. No hidden charges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#quote"
                className="px-8 py-4 font-semibold text-sm tracking-widest uppercase"
                style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                Get Free Quote Online
              </a>
              <a href="tel:02085218000"
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase border"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                <Phone size={16} /> 0208 521 8000
              </a>
            </div>
            <p className="mt-6 text-xs" style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}>
              Also serving:{" "}
              {["Hackney", "Camden", "Holloway", "Finsbury Park", "Highbury", "Angel"].map((a, i, arr) => (
                <span key={a}>
                  <Link href={`/locations/${a.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:underline" style={{ color: "#6a7a8a" }}>
                    {a}
                  </Link>
                  {i < arr.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* ── FOOTER MINI ───────────────────────────────────────────────── */}
        <div className="py-6 px-6 text-center" style={{ backgroundColor: "#080f18", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}>
            © {new Date().getFullYear()} Octagon Removals Ltd · Registered in England & Wales ·{" "}
            <Link href="/" className="hover:text-white transition-colors">octagonremovals.co.uk</Link>
          </p>
        </div>
      </div>
    </>
  );
}
