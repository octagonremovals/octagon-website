/**
 * BROMLEY LOCAL LANDING PAGE
 * Template for Octagon Removals location-specific pages.
 * SEO-optimised for "house removals Bromley", "removals company Bromley", etc.
 * Dedicated local phone number, local postcodes, local reviews, schema markup.
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  Phone, Star, Shield, Clock, Award, CheckCircle2,
  MapPin, ChevronRight, Truck, Package, Building2,
  ArrowRight, Users, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── CDN IMAGES (all from Octagon Removals WordPress, re-hosted on CDN) ─────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-team-vans-OctagonRemovals-JsBEiiMW52Q9AUAikDNAEt.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-octagon-2-DmMBPd63dY4PtTxKwbd9Ro.webp";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-service-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-T2bzjdAbqMKwuuGSB5iGHa.webp";
const RICHMOND_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/richmond-clients-DmMBPd63dY4PtTxKwbd9Ro.webp";
const BIGBEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/big-ben-octagon-DmMBPd63dY4PtTxKwbd9Ro.webp";

// ─── LOCATION DATA ────────────────────────────────────────────────────────────
const LOCATION = {
  name: "Bromley",
  county: "London Borough of Bromley",
  localPhone: "0208 927 0542",
  mainPhone: "0208 521 8000",
  postcodes: ["BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "SE20"],
  landmarks: ["Bromley town centre", "Beckenham", "Orpington", "Penge", "Crystal Palace", "Chislehurst"],
  heroTitle: "Removals Company in Bromley",
  heroSubtitle: "Fixed Price · Fully Insured · Free Survey",
  description: "Octagon Removals has been serving Bromley and the surrounding areas since 2017. Our dedicated Bromley team handles house removals, office relocations, and specialist moves across BR1, BR2, BR3, and all surrounding postcodes.",
  reviews: [
    {
      name: "Sarah M.",
      location: "Bromley, BR1",
      rating: 5,
      text: "Absolutely flawless service from start to finish. The team arrived on time, handled our antiques with extraordinary care, and had us settled in our new home by 3pm. The fixed price meant no nasty surprises on moving day. Worth every penny.",
      service: "House Removal, Packing Service",
      date: "March 2025",
    },
    {
      name: "David K.",
      location: "Beckenham, BR3",
      rating: 5,
      text: "We moved from Beckenham to Chislehurst and Octagon were exceptional. Professional, punctual, and careful with everything. The pre-move survey was thorough and the fixed quote was exactly what we paid. Highly recommend to anyone in the Bromley area.",
      service: "House Removal",
      date: "January 2025",
    },
    {
      name: "Emma R.",
      location: "Orpington, BR6",
      rating: 5,
      text: "The packing team were exceptional — they wrapped everything meticulously and even helped reassemble our furniture. Nothing was damaged and the team were polite and professional throughout. Best removals company in Bromley by far.",
      service: "House Removal, Packing & Unpacking",
      date: "February 2025",
    },
  ],
  nearbyAreas: [
    "Beckenham", "Orpington", "Penge", "Crystal Palace",
    "Chislehurst", "Sidcup", "Croydon", "Lewisham"
  ],
};

// ─── SERVICES ────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Truck,
    title: "House Removals Bromley",
    desc: "Full-service residential moves across Bromley and the M25. Fixed price, fully insured, pre-move survey included.",
    img: HERO_IMG,
  },
  {
    icon: Building2,
    title: "Office Removals Bromley",
    desc: "Minimal disruption commercial relocations for Bromley businesses. Weekend and out-of-hours moves available.",
    img: OFFICE_IMG,
  },
  {
    icon: Package,
    title: "Packing Service",
    desc: "Professional packing with premium materials. White-glove care for antiques, art, and fragile items.",
    img: PACKING_IMG,
  },
];

// ─── QUOTE FORM ───────────────────────────────────────────────────────────────
function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    moveType: "",
    fromPostcode: "",
    toPostcode: "",
    moveDate: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`${compact ? "p-6" : "p-8"} text-center`}>
        <div className="w-16 h-16 bg-[#B8960C] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#0F1923] mb-2">Quote Request Received</h3>
        <p className="text-gray-600 mb-4">We'll call you within 1 hour with your fixed price quote.</p>
        <p className="text-sm text-gray-500">
          Or call us now:{" "}
          <a href={`tel:${LOCATION.localPhone}`} className="text-[#B8960C] font-semibold">
            {LOCATION.localPhone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "p-4" : "p-6"}>
      {!compact && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-[#B8960C] text-white" : "bg-gray-200 text-gray-500"}`}>1</div>
            <div className={`flex-1 h-0.5 ${step >= 2 ? "bg-[#B8960C]" : "bg-gray-200"}`} />
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-[#B8960C] text-white" : "bg-gray-200 text-gray-500"}`}>2</div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Move Details</span>
            <span>Your Details</span>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3">
          <select
            value={form.moveType}
            onChange={e => setForm(f => ({ ...f, moveType: e.target.value }))}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C] bg-white"
            required
          >
            <option value="">Move Type</option>
            <option>House Removal</option>
            <option>Office Removal</option>
            <option>Packing Service</option>
            <option>Storage</option>
            <option>International Removal</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="From Postcode"
              value={form.fromPostcode}
              onChange={e => setForm(f => ({ ...f, fromPostcode: e.target.value }))}
              className="border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
              required
            />
            <input
              type="text"
              placeholder="To Postcode"
              value={form.toPostcode}
              onChange={e => setForm(f => ({ ...f, toPostcode: e.target.value }))}
              className="border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
              required
            />
          </div>
          <input
            type="date"
            value={form.moveDate}
            onChange={e => setForm(f => ({ ...f, moveDate: e.target.value }))}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
          />
          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!form.moveType || !form.fromPostcode || !form.toPostcode}
            className="w-full bg-[#B8960C] text-white py-3 rounded font-semibold text-sm tracking-wide hover:bg-[#9a7d0a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            CONTINUE →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B8960C]"
            required
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 border border-gray-300 text-gray-600 py-3 rounded font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#B8960C] text-white py-3 rounded font-semibold text-sm tracking-wide hover:bg-[#9a7d0a] transition-colors"
            >
              GET FREE QUOTE
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" /> We call within 1 hour · No obligation
          </p>
        </div>
      )}
    </form>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function LocationBromley() {
  return (
    <>
      {/* ── SEO Schema Markup ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "name": "Octagon Removals — Bromley",
            "url": "https://octagonremovals-bromley.co.uk",
            "telephone": LOCATION.localPhone,
            "description": LOCATION.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bromley",
              "addressRegion": "London",
              "postalCode": "BR1",
              "addressCountry": "GB",
            },
            "areaServed": LOCATION.postcodes.map(pc => ({
              "@type": "Place",
              "name": pc,
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "320",
              "bestRating": "5",
            },
            "sameAs": [
              "https://octagonremovals.co.uk",
              "https://www.google.com/maps?cid=9521714979498823219",
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-[#F5F3EF] font-['DM_Sans',sans-serif]">

        {/* ── TOP BAR ── */}
        <div className="bg-[#0F1923] text-white text-xs py-2 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="tracking-widest uppercase opacity-70">
              OCTAGON REMOVALS — BROMLEY · EST. 2017
            </span>
            <div className="flex items-center gap-4">
              <a href={`tel:${LOCATION.localPhone}`} className="flex items-center gap-1.5 text-[#B8960C] font-semibold hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                {LOCATION.localPhone}
              </a>
              <span className="opacity-40">|</span>
              <span className="opacity-70 hidden sm:block">NOT ON PRICE COMPARISON SITES</span>
            </div>
          </div>
        </div>

        {/* ── NAVIGATION ── */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/">
              <span className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#0F1923] tracking-tight cursor-pointer">
                OCTAGON <span className="text-[#B8960C]">REMOVALS</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#services" className="hover:text-[#B8960C] transition-colors">Services</a>
              <a href="#reviews" className="hover:text-[#B8960C] transition-colors">Reviews</a>
              <a href="#areas" className="hover:text-[#B8960C] transition-colors">Areas</a>
              <a href="#about" className="hover:text-[#B8960C] transition-colors">About</a>
            </div>
            <div className="flex items-center gap-3">
              <a href={`tel:${LOCATION.localPhone}`} className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#0F1923] hover:text-[#B8960C] transition-colors">
                <Phone className="w-4 h-4" />
                {LOCATION.localPhone}
              </a>
              <a href="#quote" className="bg-[#B8960C] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#9a7d0a] transition-colors">
                FREE QUOTE
              </a>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center" id="quote">
          {/* Background image */}
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="Octagon Removals team in Bromley" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/90 via-[#0F1923]/70 to-[#0F1923]/20" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left — headline */}
              <div>
                {/* Breadcrumb / local signal */}
                <div className="flex items-center gap-2 text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Bromley · BR1 · BR2 · BR3 · BR6</span>
                </div>

                <h1 className="font-['Cormorant_Garamond',serif] text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Removals<br />
                  <span className="text-[#B8960C]">Bromley</span>
                </h1>

                <p className="text-white/80 text-lg mb-6 max-w-md leading-relaxed">
                  London's premium removals company serving Bromley, Beckenham, Orpington and all BR postcodes since 2017. Fixed price, fully insured, pre-move survey included.
                </p>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: Star, text: "4.9★ · 320 Reviews" },
                    { icon: Shield, text: "Fully Insured" },
                    { icon: Clock, text: "Quote in 1 Hour" },
                    { icon: Award, text: "Est. 2017" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-3 py-1.5">
                      <Icon className="w-4 h-4 text-[#B8960C]" />
                      <span className="text-white text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:${LOCATION.localPhone}`} className="flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 rounded font-semibold hover:bg-[#9a7d0a] transition-colors">
                    <Phone className="w-4 h-4" />
                    {LOCATION.localPhone}
                  </a>
                  <a href="#quote-form" className="flex items-center gap-2 bg-white text-[#0F1923] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right — quote form */}
              <div id="quote-form" className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-[#0F1923] px-6 py-4">
                  <h2 className="text-white font-semibold text-base">FREE FIXED-PRICE QUOTE — BROMLEY</h2>
                  <p className="text-white/60 text-xs mt-0.5">We call within 1 hour · No obligation · No hidden fees</p>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-[#0F1923] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Moves Completed" },
                { value: "4.9★", label: "Google Rating" },
                { value: "320+", label: "Verified Reviews" },
                { value: "100%", label: "Fixed Price Guarantee" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-[#B8960C] font-['Cormorant_Garamond',serif] text-3xl font-bold">{value}</div>
                  <div className="text-white/60 text-xs tracking-wide uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY OCTAGON ── */}
        <section className="py-20 bg-white" id="about">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0F1923] mb-6 leading-tight">
                  Bromley's Most Trusted<br />Removals Company
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We don't compete on price comparison sites. Every Bromley client receives a dedicated move coordinator, a pre-move survey, and a fixed price that never changes on moving day. We've been serving BR1, BR2, BR3, BR4, BR5 and BR6 since 2017.
                </p>
                <div className="space-y-4">
                  {[
                    "Fixed price — no hidden charges, ever",
                    "Pre-move survey included as standard",
                    "Dedicated move coordinator assigned",
                    "Fully insured to £50,000 per item",
                    "Not on price comparison sites",
                    "Same-day callback guaranteed",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B8960C] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-3">
                  <a href={`tel:${LOCATION.localPhone}`} className="flex items-center gap-2 bg-[#B8960C] text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-[#9a7d0a] transition-colors">
                    <Phone className="w-4 h-4" />
                    Call Bromley Office
                  </a>
                  <a href="#quote-form" className="flex items-center gap-2 border border-[#0F1923] text-[#0F1923] px-5 py-2.5 rounded font-semibold text-sm hover:bg-[#0F1923] hover:text-white transition-colors">
                    Get Free Quote
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={RICHMOND_IMG} alt="Octagon Removals team with happy clients" className="rounded-lg w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-4 -left-4 bg-[#B8960C] text-white p-4 rounded-lg shadow-lg">
                  <div className="font-['Cormorant_Garamond',serif] text-3xl font-bold">15+</div>
                  <div className="text-xs uppercase tracking-wide opacity-80">Years Serving<br />Bromley</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-20 bg-[#F5F3EF]" id="services">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0F1923]">
                Removals Services in Bromley
              </h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                From a single room to a full 5-bedroom house, from a small office to a multi-floor commercial relocation — we cover every type of move in Bromley and the surrounding areas.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, desc, img }) => (
                <div key={title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 bg-[#B8960C] rounded flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#0F1923] mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <a href="#quote-form" className="text-[#B8960C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Get Free Quote <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="py-20 bg-[#0F1923]" id="reviews">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">Client Reviews</p>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white">
                Trusted by Bromley Families & Businesses
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#B8960C] fill-[#B8960C]" />)}
                <span className="text-white/70 text-sm ml-2">4.9 · 320 Google Reviews</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {LOCATION.reviews.map(review => (
                <div key={review.name} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#B8960C] fill-[#B8960C]" />)}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="text-[#B8960C] text-xs mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                    <div className="text-white/40 text-xs mt-1">{review.service} · {review.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://share.google/ctLdVDIq3osxYRsGs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#B8960C] text-[#B8960C] px-6 py-3 rounded font-semibold text-sm hover:bg-[#B8960C] hover:text-white transition-colors"
              >
                Read All 320 Google Reviews
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── AREAS COVERED ── */}
        <section className="py-20 bg-white" id="areas">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">Coverage</p>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0F1923] mb-4">
                  Areas We Cover<br />in & Around Bromley
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Bromley team covers all BR postcodes and surrounding areas. We operate daily across South East London and can reach any location within the M25 within 45 minutes.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[...LOCATION.postcodes, ...LOCATION.nearbyAreas].map(area => (
                    <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-[#B8960C] flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
                <div className="bg-[#F5F3EF] rounded-lg p-4 border-l-4 border-[#B8960C]">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#0F1923]">Dedicated Bromley number:</span>{" "}
                    <a href={`tel:${LOCATION.localPhone}`} className="text-[#B8960C] font-semibold hover:underline">
                      {LOCATION.localPhone}
                    </a>
                    <br />
                    <span className="text-gray-500 text-xs">Available Mon–Fri 8am–6pm, Sat 8am–3pm · Same-day callback guaranteed</span>
                  </p>
                </div>
              </div>
              <div className="relative">
                <img src={BIGBEN_IMG} alt="Octagon Removals serving London" className="rounded-lg w-full object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/40 to-transparent rounded-lg" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#B8960C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F1923] text-sm">Serving all BR postcodes</div>
                      <div className="text-gray-500 text-xs">BR1 · BR2 · BR3 · BR4 · BR5 · BR6 · SE20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM SECTION ── */}
        <section className="py-20 bg-[#F5F3EF]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img src={TEAM_IMG} alt="Octagon Removals full team" className="rounded-lg w-full object-cover aspect-[16/9]" />
              </div>
              <div>
                <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">Our Team</p>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0F1923] mb-4">
                  Trained. Vetted.<br />Dedicated to Bromley.
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every member of our Bromley team is background-checked, professionally trained, and uniformed. We don't use subcontractors — the team you meet at your survey is the team that moves you.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Users, label: "Dedicated Team", value: "Not subcontractors" },
                    { icon: Shield, label: "Background Checked", value: "Every team member" },
                    { icon: Award, label: "Professionally Trained", value: "In-house training" },
                    { icon: Clock, label: "Punctual", value: "Always on time" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-white rounded-lg p-4 shadow-sm">
                      <Icon className="w-5 h-5 text-[#B8960C] mb-2" />
                      <div className="font-semibold text-[#0F1923] text-sm">{label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{value}</div>
                    </div>
                  ))}
                </div>
                <a href="#quote-form" className="inline-flex items-center gap-2 bg-[#0F1923] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#1a2a3a] transition-colors">
                  Meet the Team & Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-20 bg-[#B8960C]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white mb-4">
              Ready to Move in Bromley?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get your free, fixed-price quote today. No obligation. We call within 1 hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${LOCATION.localPhone}`} className="flex items-center justify-center gap-2 bg-white text-[#B8960C] px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors">
                <Phone className="w-5 h-5" />
                {LOCATION.localPhone}
              </a>
              <a href="#quote-form" className="flex items-center justify-center gap-2 bg-[#0F1923] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#1a2a3a] transition-colors">
                Get Free Quote Online
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Serving BR1 · BR2 · BR3 · BR4 · BR5 · BR6 · SE20 and all surrounding areas
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-[#0F1923] text-white/60 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-white font-bold text-lg">
                  OCTAGON <span className="text-[#B8960C]">REMOVALS</span>
                </span>
                <span className="text-white/40 text-sm ml-3">— Bromley</span>
              </div>
              <div className="text-sm text-center">
                <a href="https://octagonremovals.co.uk" className="text-[#B8960C] hover:text-white transition-colors">
                  octagonremovals.co.uk
                </a>
                {" · "}
                <a href={`tel:${LOCATION.localPhone}`} className="hover:text-white transition-colors">
                  {LOCATION.localPhone}
                </a>
              </div>
              <div className="text-xs">
                © {new Date().getFullYear()} Octagon Removals Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
