/*
 * LOCATION PAGE TEMPLATE - Octagon Removals
 * Design: Premium charcoal/gold. Reusable across all 8 location pages.
 * Sections: Hero (dark, location-specific), Trust bar, Local intro,
 *   Services, Why Us locally, Reviews, FAQ, CTA.
 * Fonts: Cormorant Garamond (headings), DM Sans (body).
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone, Star, Shield, Clock, Award, CheckCircle2,
  ChevronDown, ArrowRight, MapPin, Truck, Package, Building2,
  ExternalLink, Mail
} from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export interface LocationData {
  name: string;
  slug: string;
  phone: string;
  heroTagline: string;
  intro: string;
  boroughs: string[];
  faqs: { q: string; a: string }[];
  localReviews: { name: string; area: string; text: string; source?: string; date?: string }[];
  ghosted?: boolean;
}

function QuoteForm({ locationName }: { locationName: string }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    moveType: "", fromPostcode: "", toPostcode: "",
    moveDate: "", name: "", phone: "", email: "", otherDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const step1Valid = form.moveType && form.fromPostcode && form.toPostcode;
  const step2Valid = form.name && form.phone && form.email;

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 size={44} className="mx-auto mb-4" style={{ color: "#B8960C" }} />
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          Thank You, {form.name}!
        </h3>
        <p className="text-sm" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          Our {locationName} team will call you within 1 hour to arrange your free survey.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className="w-6 h-6 flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: step >= s ? "#B8960C" : "#e8e4dc",
                color: step >= s ? "#0F1923" : "#8A9BB0",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {s}
            </div>
            {s < 2 && <div className="h-px w-8" style={{ backgroundColor: step > s ? "#B8960C" : "#e8e4dc" }} />}
          </div>
        ))}
        <span className="text-xs ml-1" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-3">
          <select name="moveType" value={form.moveType} onChange={handleChange} className="input-premium">
            <option value="">Type of Move</option>
            <option value="house">House Removal</option>
            <option value="moving-packing">Moving & Packing</option>
            <option value="office">Office Removal</option>
            <option value="storage">Storage</option>
            <option value="manvan">Man & Van</option>
            <option value="international">International Removal</option>
            <option value="other">Other (please describe)</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange} placeholder="From Postcode" className="input-premium" />
            <input name="toPostcode" value={form.toPostcode} onChange={handleChange} placeholder="To Postcode" className="input-premium" />
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange} className="input-premium" />
          {form.moveType === "other" && (
            <textarea name="otherDetails" value={form.otherDetails} onChange={handleChange} placeholder="Please describe your requirements..." rows={3} className="input-premium resize-none" />
          )}
          <button
            onClick={() => step1Valid && setStep(2)}
            className="btn-gold w-full py-3.5 text-sm mt-1"
            style={{ opacity: step1Valid ? 1 : 0.5 }}
          >
            Continue →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="input-premium" />
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="input-premium" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="input-premium" />
          <div className="flex gap-2 mt-1">
            <button onClick={() => setStep(1)} className="btn-ghost-gold flex-1 py-3.5 text-sm">← Back</button>
            <button
              onClick={() => step2Valid && setSubmitted(true)}
              className="btn-gold flex-1 py-3.5 text-sm"
              style={{ opacity: step2Valid ? 1 : 0.5 }}
            >
              Get My Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "#e8e4dc" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5">
        <span className="font-medium text-sm pr-4" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-200"
          style={{ color: "#B8960C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function LocationPage({ data, locationPhotos = [] }: { data: LocationData; locationPhotos?: PortfolioItem[] }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative flex items-center"
        style={{ minHeight: "70vh", paddingTop: "104px", paddingBottom: "4rem" }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.78) 55%, rgba(10,15,25,0.5) 100%)" }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} style={{ color: "#B8960C" }} />
                <span className="eyebrow">{data.name} Removals</span>
              </div>
              <h1
                className="text-4xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
              >
                Premium Removals
                <br />
                in <em className="not-italic" style={{ color: "#B8960C" }}>{data.name}</em>
              </h1>
              <p className="text-lg mb-6 max-w-lg" style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                {data.heroTagline}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-[#B8960C] text-[#B8960C]" />)}
                </div>
                <span className="text-sm font-semibold" style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>
                  4.8/5 Trustpilot · 170 Reviews
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/get-quote">
                  <span className="btn-gold px-7 py-4 text-sm">Get Free Quote</span>
                </Link>
                <a href={`tel:${data.phone.replace(/\s/g, "")}`} className="btn-ghost-gold px-7 py-4 text-sm">
                  <Phone size={14} />
                  {data.phone}
                </a>
              </div>
            </motion.div>

            {/* Right: quote form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:block"
            >
              <div
                className="p-8 shadow-2xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(184,150,12,0.25)" }}
              >
                <span className="eyebrow mb-2">Free, No-Obligation</span>
                <h2
                  className="text-2xl font-semibold mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
                >
                  Get Your {data.name} Quote
                </h2>
                <p className="text-sm mb-5" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                  We'll call you within 1 hour
                </p>
                <QuoteForm locationName={data.name} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ backgroundColor: "#0F1923" }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              { icon: Shield, text: "Fixed Price or Hourly Rate" },
              { icon: Award, text: "Insured up to £1,000,000 per vehicle" },
              { icon: Clock, text: "On-Time Arrival" },
              { icon: Star, text: "4.9★ Trustpilot" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon size={14} style={{ color: "#B8960C" }} />
                <span className="text-xs font-semibold" style={{ color: "#c8d0db", fontFamily: "DM Sans, sans-serif" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LOCAL INTRO ── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">Local Expertise</span>
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
            >
              Your Trusted {data.name} Removals Company
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              {data.intro}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.boroughs.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(184,150,12,0.08)",
                    border: "1px solid rgba(184,150,12,0.2)",
                    color: "#B8960C",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#0F1923" }}>
        <div className="container">
          <div className="mb-12">
            <span className="eyebrow mb-3">What We Offer in {data.name}</span>
            <h2
              className="text-3xl lg:text-4xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
            >
              Our {data.name} Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Truck, title: "House Removals", desc: `Full-service residential moves in and around ${data.name}. Fixed price, fully insured, stress-free.` },
              { icon: Building2, title: "Office Removals", desc: `Commercial relocations across ${data.name}. Weekend moves available to minimise business disruption.` },
              { icon: Package, title: "Packing Service", desc: `Professional packing with premium materials. White-glove care for antiques and fragile items.` },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7"
                style={{ backgroundColor: "#1A2535", border: "1px solid rgba(184,150,12,0.15)" }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}
                >
                  <s.icon size={20} style={{ color: "#B8960C" }} />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US LOCALLY ── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-3">Why Choose Octagon in {data.name}</span>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
              >
                The Local Removals
                <br />Specialists
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  `Deep knowledge of ${data.name}'s streets, parking restrictions, and access requirements`,
                  "Fixed-price quotes - no hidden charges on moving day",
                  "Fully insured with comprehensive goods-in-transit cover",
                  "Dedicated local team serving London & M25 since 2017",
                  "Free, no-obligation home or video survey",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#B8960C" }} />
                    <span className="text-sm" style={{ color: "#3a3a3a", fontFamily: "DM Sans, sans-serif" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-8"
              style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.2)" }}
            >
              <span className="eyebrow mb-3">Get Your Free Quote</span>
              <h3
                className="text-2xl font-semibold mb-5"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
              >
                {data.name} Removals Quote
              </h3>
              <QuoteForm locationName={data.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL REVIEWS ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A2535" }}>
        <div className="container">
          <div className="mb-12 text-center">
            <span className="eyebrow mb-3">Client Testimonials</span>
            <h2
              className="text-3xl lg:text-4xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
            >
              What {data.name} Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {data.localReviews.map((r, i) => (
              <motion.div
                key={r.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7"
                style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.15)" }}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#B8960C] text-[#B8960C]" />)}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "#c8d0db", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
                >
                  "{r.text}"
                </blockquote>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>
                      {r.name}
                    </div>
                    <div className="text-xs" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                      {r.area}{r.date ? ` · ${r.date}` : ""}
                    </div>
                  </div>
                  {r.source && (
                    <span
                      className="text-xs px-2 py-0.5 shrink-0"
                      style={{
                        backgroundColor: r.source === "Google" ? "rgba(66,133,244,0.15)" : "rgba(0,182,122,0.15)",
                        color: r.source === "Google" ? "#4285F4" : "#00B67A",
                        border: `1px solid ${r.source === "Google" ? "rgba(66,133,244,0.3)" : "rgba(0,182,122,0.3)"}`,
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {r.source}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      {locationPhotos.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="mb-10">
              <span className="eyebrow mb-3">Our Work in {data.name}</span>
              <h2
                className="text-3xl lg:text-4xl font-semibold"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
              >
                Recent {data.name} Jobs
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {locationPhotos.map((photo, i) => (
                <motion.a
                  key={photo.slug}
                  href={photo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative overflow-hidden block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={photo.img}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(10,15,25,0.92) 0%, transparent 60%)" }}
                  >
                    <div>
                      <div
                        className="text-xs font-medium mb-1"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
                      >
                        {photo.category}
                      </div>
                      <div
                        className="text-sm font-medium leading-snug flex items-center gap-1.5"
                        style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}
                      >
                        {photo.title.length > 55 ? photo.title.slice(0, 55) + "…" : photo.title}
                        <ExternalLink size={11} style={{ color: "#B8960C", flexShrink: 0 }} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-3">Common Questions</span>
              <h2
                className="text-3xl lg:text-4xl font-semibold"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
              >
                {data.name} Removals FAQ
              </h2>
            </div>
            <div>
              {data.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT WIDGET ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 overflow-hidden" style={{ border: "1px solid rgba(184,150,12,0.2)" }}>
              {/* Left: Contact details */}
              <div className="p-8 lg:p-10" style={{ backgroundColor: "#0F1923" }}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: "#B8960C" }} />
                  <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>Contact Us</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6" style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                  {data.name} Office
                </h3>
                <div className="space-y-5">
                  {/* Phone */}
                  <a href={`tel:${data.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.12)", border: "1px solid rgba(184,150,12,0.25)" }}>
                      <Phone size={16} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Local Number</p>
                      <p className="text-lg font-semibold transition-colors group-hover:text-[#B8960C]" style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>{data.phone}</p>
                    </div>
                  </a>
                  {/* Main line */}
                  <a href="tel:02085218000" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.12)", border: "1px solid rgba(184,150,12,0.25)" }}>
                      <Phone size={16} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Main Office</p>
                      <p className="text-lg font-semibold transition-colors group-hover:text-[#B8960C]" style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>0208 521 8000</p>
                    </div>
                  </a>
                  {/* Email */}
                  <a href="mailto:info@octagonremovals.co.uk" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.12)", border: "1px solid rgba(184,150,12,0.25)" }}>
                      <Mail size={16} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Email</p>
                      <p className="text-base font-medium transition-colors group-hover:text-[#B8960C]" style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>info@octagonremovals.co.uk</p>
                    </div>
                  </a>
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.12)", border: "1px solid rgba(184,150,12,0.25)" }}>
                      <MapPin size={16} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Head Office</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                        Office 56, Millmead Business Centre,<br />
                        Millmead Road, South Tottenham,<br />
                        London, N17 9QU
                      </p>
                    </div>
                  </div>
                  {/* Opening hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.12)", border: "1px solid rgba(184,150,12,0.25)" }}>
                      <Clock size={16} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Opening Hours</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>Mon–Fri: 8:00am – 6:00pm</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>Saturday: 8:00am – 3:00pm</p>
                      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>Sunday: Closed (emergency available)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Map + CTA */}
              <div className="flex flex-col">
                <div className="flex-1 relative" style={{ minHeight: 280, backgroundColor: "#1A2535" }}>
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Octagon+Removals+London&zoom=11`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Octagon Removals ${data.name} coverage`}
                  />
                </div>
                <div className="p-6 text-center" style={{ backgroundColor: "#B8960C" }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>
                    Ready to move in {data.name}?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/get-quote">
                      <span className="inline-block px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-90" style={{ backgroundColor: "#0F1923", color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>
                        Get Free Quote
                      </span>
                    </Link>
                    <a href={`tel:${data.phone.replace(/\s/g, "")}`}>
                      <span className="inline-block px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-80" style={{ border: "1px solid #0F1923", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>
                        Call {data.phone}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#0F1923" }}>
        <div className="container text-center">
          <span className="eyebrow mb-4">Ready to Move in {data.name}?</span>
          <h2
            className="text-3xl lg:text-5xl font-semibold mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
          >
            Get Your Free <em className="not-italic" style={{ color: "#B8960C" }}>No-Obligation</em> Quote
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
            Our {data.name} team is ready to help. Call us or request a quote online - we'll respond within 1 hour during office hours (Mon–Fri 8am–6pm, Sat 8am–3pm). Out-of-hours enquiries will be responded to as soon as the office reopens.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/get-quote">
              <span className="btn-gold px-10 py-4 text-sm">Get Free Quote</span>
            </Link>
            <a href={`tel:${data.phone.replace(/\s/g, "")}`} className="btn-ghost-gold px-10 py-4 text-sm">
              <Phone size={14} />
              {data.phone}
            </a>
          </div>
          <div className="mt-8">
            <Link href="/locations">
              <span className="text-sm flex items-center justify-center gap-1.5 transition-colors"
                style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B8960C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8A9BB0")}
              >
                ← View All Locations <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <div className="h-16 lg:hidden" />
    </div>
  );
}

