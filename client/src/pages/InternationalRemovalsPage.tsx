import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import {
  Globe, CheckCircle2, Star, Phone, ChevronDown, ChevronUp,
  ArrowRight, Shield, Clock, Award, Truck, Users, FileText, MapPin,
  PhoneCall, Calendar, Flag
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// ── CDN images ────────────────────────────────────────────────────────────────
// Real Octagon Removals photo - two Octagon vans at European property
const INTL_MAIN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/international-removals-vans_55e47efd.webp";
const HERO_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp";

const GOLD      = "#B8960C";
const DARK      = "#0F1923";
const OFF_WHITE = "#F5F3EF";

// ── Callback Request Form ────────────────────────────────────────────────────
const EUROPEAN_COUNTRIES = [
  "France", "Germany", "Spain", "Italy", "Netherlands", "Belgium",
  "Switzerland", "Austria", "Poland", "Portugal", "Sweden", "Denmark",
  "Norway", "Finland", "Ireland", "Czech Republic", "Hungary", "Romania",
  "Bulgaria", "Greece", "Croatia", "Slovakia", "Slovenia", "Luxembourg",
  "Other (please specify in notes)",
];

const BEST_TIMES = [
  "As soon as possible",
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Late afternoon (4pm – 6pm)",
  "Saturday morning (8am – 2pm)",
];

function CallbackRequestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    moveDate: "",
    bestTime: "",
    gdpr: false,
  });
  const [propertyPhotos, setPropertyPhotos] = useState<FileList | null>(null);
  const [accessPhotos, setAccessPhotos] = useState<FileList | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const requestCallback = trpc.leads.requestCallback.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const photoNotes = [
      propertyPhotos && propertyPhotos.length > 0 ? `Property photos attached: ${propertyPhotos.length}` : "",
      accessPhotos && accessPhotos.length > 0 ? `Access/stairs photos attached: ${accessPhotos.length}` : "",
    ].filter(Boolean).join(" | ");
    requestCallback.mutate({
      name: form.name,
      phone: form.phone,
      destination: form.destination || undefined,
      moveDate: form.moveDate ? (photoNotes ? `${form.moveDate} — ${photoNotes}` : form.moveDate) : (photoNotes || undefined),
      bestTime: form.bestTime || undefined,
      source: "/services/international-removals",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(184,150,12,0.15)" }}
        >
          <PhoneCall size={28} style={{ color: GOLD }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          We'll Call You Shortly
        </h3>
        <p className="text-sm max-w-xs" style={{ color: "rgba(245,243,239,0.7)" }}>
          Your callback request has been received. A dedicated international removals consultant will call you{form.bestTime && form.bestTime !== "As soon as possible" ? ` ${form.bestTime.toLowerCase()}` : " as soon as possible"}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="relative">
        <PhoneCall size={14} className="absolute left-3 top-3.5" style={{ color: GOLD }} />
        <input
          type="text" required placeholder="Your Full Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full pl-9 pr-4 py-3 text-sm rounded-lg focus:outline-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(184,150,12,0.3)", color: OFF_WHITE }}
        />
      </div>
      {/* Phone */}
      <div className="relative">
        <Phone size={14} className="absolute left-3 top-3.5" style={{ color: GOLD }} />
        <input
          type="tel" required placeholder="Phone Number"
          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full pl-9 pr-4 py-3 text-sm rounded-lg focus:outline-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(184,150,12,0.3)", color: OFF_WHITE }}
        />
      </div>
      {/* Destination country */}
      <div className="relative">
        <Flag size={14} className="absolute left-3 top-3.5" style={{ color: GOLD }} />
        <select
          required value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })}
          className="w-full pl-9 pr-4 py-3 text-sm rounded-lg focus:outline-none appearance-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(184,150,12,0.3)", color: form.destination ? OFF_WHITE : "rgba(245,243,239,0.45)" }}
        >
          <option value="" disabled style={{ background: DARK }}>Destination Country</option>
          {EUROPEAN_COUNTRIES.map(c => (
            <option key={c} value={c} style={{ background: DARK, color: OFF_WHITE }}>{c}</option>
          ))}
        </select>
      </div>
      {/* Approximate move date */}
      <div className="relative">
        <Calendar size={14} className="absolute left-3 top-3.5" style={{ color: GOLD }} />
        <input
          type="text" placeholder="Approximate Move Date (e.g. June 2025)"
          value={form.moveDate} onChange={e => setForm({ ...form, moveDate: e.target.value })}
          className="w-full pl-9 pr-4 py-3 text-sm rounded-lg focus:outline-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(184,150,12,0.3)", color: OFF_WHITE }}
        />
      </div>
      {/* Property photos */}
      <div className="space-y-1">
        <label className="block text-xs font-medium" style={{ color: "rgba(245,243,239,0.65)" }}>Photos of your property (optional)</label>
        <input
          type="file" accept="image/*" multiple
          onChange={e => setPropertyPhotos(e.target.files)}
          className="w-full text-xs file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:cursor-pointer"
          style={{ color: "rgba(245,243,239,0.5)" }}
        />
        <p className="text-xs" style={{ color: "rgba(245,243,239,0.35)" }}>Helps us understand the volume and type of move</p>
      </div>
      {/* Access photos */}
      <div className="space-y-1">
        <label className="block text-xs font-medium" style={{ color: "rgba(245,243,239,0.65)" }}>Photos of access — stairs, hallways, doorways (optional)</label>
        <input
          type="file" accept="image/*" multiple
          onChange={e => setAccessPhotos(e.target.files)}
          className="w-full text-xs file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:cursor-pointer"
          style={{ color: "rgba(245,243,239,0.5)" }}
        />
        <p className="text-xs" style={{ color: "rgba(245,243,239,0.35)" }}>Tight staircases or narrow hallways can affect packing and vehicle planning</p>
      </div>
      {/* Best time to call */}
      <div className="relative">
        <Clock size={14} className="absolute left-3 top-3.5" style={{ color: GOLD }} />
        <select
          value={form.bestTime} onChange={e => setForm({ ...form, bestTime: e.target.value })}
          className="w-full pl-9 pr-4 py-3 text-sm rounded-lg focus:outline-none appearance-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(184,150,12,0.3)", color: form.bestTime ? OFF_WHITE : "rgba(245,243,239,0.45)" }}
        >
          <option value="" style={{ background: DARK }}>Best Time to Call (optional)</option>
          {BEST_TIMES.map(t => (
            <option key={t} value={t} style={{ background: DARK, color: OFF_WHITE }}>{t}</option>
          ))}
        </select>
      </div>
      {/* GDPR */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required checked={form.gdpr}
          onChange={e => setForm({ ...form, gdpr: e.target.checked })}
          className="mt-1 accent-yellow-600"
        />
        <span className="text-xs" style={{ color: "rgba(245,243,239,0.55)" }}>
          I consent to Octagon Removals Ltd storing my details to arrange this callback, in accordance with our{" "}
          <Link href="/privacy-policy" className="underline" style={{ color: GOLD }}>Privacy Policy</Link>.
        </span>
      </label>
      <button
        type="submit" disabled={requestCallback.isPending}
        className="w-full py-3.5 font-semibold text-sm tracking-wide rounded-lg transition-all hover:opacity-90"
        style={{ background: GOLD, color: "#fff" }}
      >
        {requestCallback.isPending ? "Requesting..." : "Request My Callback"}
      </button>
      <p className="text-center text-xs" style={{ color: "rgba(245,243,239,0.4)" }}>
        Mon–Fri 8am–6pm · Sat 8am–2pm · We aim to call within 30 minutes
      </p>
    </form>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function InternationalContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", gdpr: false });
  const [submitted, setSubmitted] = useState(false);
  const submitContact = trpc.leads.submitContact.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      subject: "International Removals Enquiry",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <CheckCircle2 size={48} style={{ color: GOLD }} className="mb-4" />
        <h3 className="text-xl font-bold mb-2" style={{ color: DARK }}>Thank You!</h3>
        <p className="text-gray-600">We'll be in touch within 1 hour during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold mb-1" style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}>
        Get a Free International Removals Quote
      </h3>
      <p className="text-sm text-gray-500 mb-4">Quotes valid for 60 days. Fixed price includes ferry, fuel, insurance and customs. Response within 1 hour.</p>
      <input
        type="text" required placeholder="Your Name"
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <input
        type="tel" required placeholder="Phone Number"
        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <input
        type="email" required placeholder="Email Address"
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <textarea
        required placeholder="Tell us about your move (from/to address, approximate volume, preferred move date)"
        rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600 resize-none"
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required checked={form.gdpr}
          onChange={e => setForm({ ...form, gdpr: e.target.checked })}
          className="mt-1 accent-yellow-600"
        />
        <span className="text-xs text-gray-500">
          I consent to Octagon Removals Ltd storing and processing my personal data to respond to this enquiry, in accordance with our{" "}
          <Link href="/privacy-policy" className="underline" style={{ color: GOLD }}>Privacy Policy</Link>.
        </span>
      </label>
      <button
        type="submit" disabled={submitContact.isPending}
        className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-all hover:opacity-90"
        style={{ background: GOLD, color: "#fff" }}
      >
        {submitContact.isPending ? "Sending..." : "Get My Free International Quote"}
      </button>
    </form>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="font-semibold text-sm" style={{ color: DARK }}>{q}</span>
        {open ? <ChevronUp size={16} style={{ color: GOLD }} className="shrink-0" /> : <ChevronDown size={16} style={{ color: GOLD }} className="shrink-0" />}
      </button>
      {open && <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

const faqs = [
  { q: "How long does an international removal to Europe take?", a: "We aim to deliver your goods within 2 to 7 days of collection, depending on the destination country. We do not wait for a container to be fully loaded before departing - your goods travel exclusively in our vehicle, directly to your new home. This is why our delivery times are significantly faster than shared-load services." },
  { q: "Do you mix my goods with other clients' belongings?", a: "No, never. This is one of our most important differentiators. We exclusively transport your items in our vehicles. We do not mix your goods with those of other clients. Your belongings travel directly from your UK address to your European destination without being transferred to a shared container." },
  { q: "What is the minimum volume for an international move?", a: "We take a minimum of 5 cubic metres per move. This ensures we can provide a dedicated vehicle for your goods rather than a shared-load service. If your volume is below 5 cubic metres, please call us to discuss options." },
  { q: "What does the fixed price include?", a: "Our fixed price includes ferry costs, fuel, insurance, road tolls, and customs agent fees. There are no hidden charges. You receive a transparent, itemised quote before you commit to anything." },
  { q: "How long is my quote valid for?", a: "Our quotes remain valid for 60 days from the date of issue. This gives you ample time to confirm your move date, sort your paperwork, and plan your transition without the pressure of a short-validity quote." },
  { q: "Do I get a dedicated moving consultant?", a: "Yes. Every international move is assigned a dedicated moving consultant who communicates with you throughout the journey. They will keep you updated on progress, notify you of any delays (customs, traffic, weather), and be your single point of contact from booking to delivery." },
  { q: "Which countries in Europe do you cover?", a: "We cover all European countries, including France, Germany, Spain, Italy, Netherlands, Belgium, Switzerland, Austria, Poland, and beyond. We plan every detail including traffic, distance, weather conditions, customs, and ferry requirements for your specific destination." },
  { q: "How far in advance should I book?", a: "We advise starting your international moving plans at least two months in advance for the smoothest experience. However, we are logistically advanced and can accommodate fast-turnaround moves for clients who need to move quickly. Call us to discuss your timeline." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function InternationalRemovalsPage() {
  return (
    <div style={{ background: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>
      <SEOHead
        title="International Removals London to Europe | 2–7 Day Delivery | Octagon Removals"
        description="International removals from London to Europe. Dedicated vehicle, no shared loads, 2–7 day delivery. Fixed price, fully insured. Call 0208 521 8000 for a free quote."
        canonical="/services/international-removals"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[520px] flex items-end"
        style={{
          background: `linear-gradient(to right, ${DARK}ee 45%, transparent 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="container py-20">
          <p className="eyebrow mb-3">International Removals London</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            London International Removals
          </h1>
          <p className="text-gray-300 max-w-lg mb-8 text-sm leading-relaxed">
            Exclusive vehicle. No shared loads. London to anywhere in Europe in 2 to 7 days.
            Fixed price includes ferry, fuel, insurance, road tolls and customs.
          </p>
          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { icon: Star, label: "4.9/5 Trustpilot" },
              { icon: Shield, label: "Fully Insured" },
              { icon: Clock, label: "2-7 Day Delivery" },
              { icon: Award, label: "Est. 2017" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white text-xs">
                <Icon size={14} style={{ color: GOLD }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:02085218000"
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Phone size={14} /> 0208 521 8000
            </a>
            <Link
              href="/get-quote"
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── KEY DIFFERENTIATOR BANNER ── */}
      <section className="py-8" style={{ background: GOLD }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            {[
              { icon: Truck, text: "We do not mix your goods with other clients" },
              { icon: Clock, text: "We do not wait for a container to be fully loaded" },
              { icon: Globe, text: "Delivery anywhere in Europe in 2 to 7 days" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={20} className="shrink-0" style={{ color: "#fff" }} />
                <span className="text-sm font-semibold text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO + FORM ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <p className="eyebrow mb-3">London to Europe Removals</p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
              >
                We Move Households from London to Europe. Here's Exactly How It Works.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                What sets us apart is simple: we exclusively transport your items in our vehicles. We do not mix your goods with those of other clients. We also do not wait for a container to be fully loaded before departing - which with some companies can mean waiting up to 10 weeks to receive your belongings. We aim to deliver within 2 to 7 days of collection.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Whether you are moving from London, Essex, Kent, Middlesex, Surrey, or Hertfordshire to France, Germany, Spain, Netherlands, Belgium, Switzerland, or anywhere else in Europe, our team is trained to make the journey as smooth as possible. We plan every detail: traffic, distance, weather conditions, customs, ferries, and the unique requirements of your move.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our fixed price includes everything: ferry costs, fuel, insurance, road tolls, and customs agent fees. No hidden charges. No surprises. Just a transparent, professional international removal service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, text: "Exclusive vehicle - no shared loads" },
                  { icon: Shield, text: "Fixed price, all fees included" },
                  { icon: Users, text: "Dedicated moving consultant" },
                  { icon: FileText, text: "60-day quote validity" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon size={14} style={{ color: GOLD }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <InternationalContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL PHOTO + GUARANTEES ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={INTL_MAIN}
                alt="Octagon Removals vans at a European property during an international removal from London"
                className="w-full object-cover rounded-lg"
                style={{ maxHeight: "480px" }}
              />
            </div>
            <div>
              <p className="eyebrow mb-3">Our Quality Guarantees</p>
              <h2
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Your Assurance of Quality on Every International Move
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Space Guarantee", desc: "We ensure the correct vehicle size for your move. Your dedicated consultant performs an in-person survey to guarantee the right vehicle is provided. If your items do not fit, we send an additional vehicle at no extra charge." },
                  { title: "Transparent Pricing", desc: "Our pricing is based on your inventory list with no hidden fees. The fixed price includes ferry, petrol, insurance, road fees and customs agents. What we quote is what you pay." },
                  { title: "24/7 CCTV Storage", desc: "When the majority of your belongings are loaded, we transport them to our local storage facility, gated and safeguarded by 24/7 CCTV surveillance. Each stage of transport is well planned to prioritise safety and security." },
                  { title: "Dedicated Consultant", desc: "We allocate a dedicated moving consultant who communicates with you throughout the journey. You are kept updated on progress, any customs delays, traffic issues, or other factors affecting delivery." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4" style={{ border: "1px solid rgba(184,150,12,0.2)" }}>
                    <div className="text-sm font-semibold mb-1" style={{ color: GOLD }}>{title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "rgba(245,243,239,0.7)" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">How It Works</p>
            <h2
              className="text-3xl font-bold"
              style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
            >
              Moving to Europe in 3 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Contact Us for a Free Quote",
                desc: "Explain your requirements and we will create a personalised quote for your international removals needs. Our quotes remain valid for 60 days, giving you ample time to plan your transition."
              },
              {
                step: "02",
                title: "Accept Your Quote and Confirm Documents",
                desc: "You receive a fixed price which includes customs agent fees, ferries, road tolls, fuel and any additional services. Once paperwork is confirmed, your move date is secured."
              },
              {
                step: "03",
                title: "Relax at Your New Home in Europe",
                desc: "Once all paperwork is confirmed, we proceed to move your goods to your new home. Your dedicated consultant keeps you updated throughout the journey. Delivery in 2 to 7 days."
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center p-8" style={{ background: "#fff", border: "1px solid #e8e4dc" }}>
                <div className="text-4xl font-bold mb-4" style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif" }}>{step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Destinations We Cover</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              London to Anywhere in Europe
            </h2>
            <p className="text-sm mt-4 max-w-xl mx-auto" style={{ color: "rgba(245,243,239,0.7)" }}>
              We move from London, Essex, Kent, Middlesex, Surrey and Hertfordshire to all European countries. Popular destinations include:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* France has a dedicated destination page */}
            <Link
              href="/international-removals/france"
              className="flex items-center gap-2 p-3 transition-colors"
              style={{ border: `1px solid ${GOLD}`, background: "rgba(184,150,12,0.08)" }}
            >
              <MapPin size={12} style={{ color: GOLD }} className="shrink-0" />
              <span className="text-xs font-semibold" style={{ color: GOLD }}>France →</span>
            </Link>
            {[
              "Germany", "Spain", "Italy", "Netherlands",
              "Belgium", "Switzerland", "Austria", "Poland", "Monaco",
              "Sweden", "Denmark"
            ].map((country) => (
              <div key={country} className="flex items-center gap-2 p-3" style={{ border: "1px solid rgba(184,150,12,0.2)" }}>
                <MapPin size={12} style={{ color: GOLD }} className="shrink-0" />
                <span className="text-xs text-white">{country}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "rgba(245,243,239,0.5)" }}>
            Don't see your destination? Call us on 0208 521 8000 - we cover all European countries.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Client Reviews</p>
            <h2
              className="text-3xl font-bold"
              style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Clients Say About Our International Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Thomas and Claire Muller",
                location: "London to Munich, Germany",
                rating: 5,
                text: "Octagon handled our international move to Germany. They exclusively used their own vehicle - no shared loads - which gave us complete peace of mind. Everything arrived on time and in perfect condition. The dedicated consultant kept us informed throughout."
              },
              {
                name: "Isabelle Fontaine",
                location: "London to Lyon, France",
                rating: 5,
                text: "I was nervous about moving from London to France after Brexit but Octagon handled all the customs paperwork. The fixed price included everything - no surprise charges at the border. My belongings arrived in 4 days. Exceptional service."
              },
              {
                name: "Marco and Sofia Rossi",
                location: "London to Milan, Italy",
                rating: 5,
                text: "We moved a full family home from Kensington to Milan. Octagon sent a dedicated consultant who surveyed our property and confirmed the right vehicle size. The move was completed in 6 days. We would not hesitate to recommend them."
              },
            ].map(({ name, location, rating, text }) => (
              <div key={name} className="p-8" style={{ background: "#fff", border: "1px solid #e8e4dc" }}>
                <div className="flex mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed mb-4 italic text-gray-600">"{text}"</blockquote>
                <div className="text-sm font-semibold" style={{ color: DARK }}>{name}</div>
                <div className="text-xs text-gray-400">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Common Questions</p>
            <h2
              className="text-3xl font-bold"
              style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
            >
              International Removals FAQ
            </h2>
          </div>
          <div>
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CALLBACK SECTION ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: value proposition */}
            <div>
              <p className="eyebrow mb-3">Speak to a Specialist</p>
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                International Moves Are Complex. Let Us Call You.
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,243,239,0.7)" }}>
                Moving abroad involves customs paperwork, ferry bookings, road toll planning, and coordinating delivery to a property you may not yet have access to. Our international removals consultants have handled hundreds of London-to-Europe moves and can answer every question in a single call.
              </p>
              <div className="space-y-4">
                {[
                  { icon: PhoneCall, title: "Callback within 30 minutes", desc: "During business hours, we aim to call back within 30 minutes of receiving your request." },
                  { icon: Globe, title: "Dedicated international consultant", desc: "You'll speak directly with a consultant who specialises in European removals — not a general sales team." },
                  { icon: FileText, title: "Fixed price confirmed on the call", desc: "We can often provide a fixed price on the first call, valid for 60 days, with no obligation to proceed." },
                  { icon: Shield, title: "No pressure, no obligation", desc: "Our consultants are advisors, not salespeople. The call is to understand your needs and give you accurate information." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(184,150,12,0.15)" }}
                    >
                      <Icon size={14} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-0.5">{title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "rgba(245,243,239,0.6)" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: form */}
            <div
              className="p-8 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,150,12,0.25)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(184,150,12,0.15)" }}
                >
                  <PhoneCall size={18} style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="text-base font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Request a Callback</div>
                  <div className="text-xs" style={{ color: "rgba(245,243,239,0.5)" }}>International removals specialist · 30 min response</div>
                </div>
              </div>
              <CallbackRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: "#0a1118" }}>
        <div className="container text-center">
          <p className="eyebrow mb-3">Get Started Today</p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Plan Your International Move?
          </h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(245,243,239,0.7)" }}>
            Free quote valid for 60 days. Fixed price includes all fees. Dedicated consultant assigned. Call us or request a quote online and we will respond within 1 hour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:02085218000"
              className="flex items-center gap-2 px-8 py-4 font-semibold text-sm"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Phone size={14} /> 0208 521 8000
            </a>
            <Link
              href="/get-quote"
              className="flex items-center gap-2 px-8 py-4 font-semibold text-sm border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

