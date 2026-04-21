/*
 * HOME PAGE — Octagon Removals
 * Design: Premium removals landing page.
 * Sections: Hero (full-screen, dark overlay, quote form), Trust bar,
 *   Why Choose Us, Services grid, Process, Reviews, Locations, CTA banner.
 * Colours: #0F1923 charcoal, #B8960C gold, #F5F3EF off-white.
 * Fonts: Cormorant Garamond (headings), DM Sans (body/UI).
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Star, Shield, Clock, Award, Phone, ChevronRight,
  Package, Building2, Truck, Warehouse, Globe, Users,
  CheckCircle2, ArrowRight, Loader2
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import { TrustpilotBadge } from "@/components/FloatingWidgets";
import SEOHead from "@/components/SEOHead";
import HowItWorks from "@/components/HowItWorks";
import GoogleReviews from "@/components/GoogleReviews";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";
const SKYLINE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
};

const reviews = [
  {
    name: "Sarah M.",
    location: "Kensington",
    rating: 5,
    text: "Absolutely flawless service from start to finish. The team arrived on time, handled our antiques with extraordinary care, and had us settled in our new home by 3pm. Worth every penny.",
    date: "March 2025",
  },
  {
    name: "James T.",
    location: "Canary Wharf",
    rating: 5,
    text: "We moved our entire office of 45 people over a weekend. Octagon were professional, efficient, and nothing was damaged. I'd recommend them without hesitation to any business.",
    date: "February 2025",
  },
  {
    name: "Emma R.",
    location: "Richmond",
    rating: 5,
    text: "The packing team were exceptional — they wrapped everything meticulously and even helped reassemble our furniture. The fixed price meant no nasty surprises on moving day.",
    date: "January 2025",
  },
];

const services = [
  {
    icon: Truck,
    title: "House Removals",
    desc: "Full-service residential moves across London and the M25. Fixed price, fully insured.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Office Removals",
    desc: "Minimal disruption commercial relocations. Weekend and out-of-hours moves available.",
    href: "/services",
  },
  {
    icon: Package,
    title: "Packing Service",
    desc: "Professional packing with premium materials. White-glove care for antiques and fragile items.",
    href: "/services",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "Secure, climate-controlled storage facilities. Short and long-term options available.",
    href: "/services",
  },
  {
    icon: Globe,
    title: "International Removals",
    desc: "Door-to-door international moves. Full customs documentation and insurance.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Man & Van",
    desc: "Flexible, same-day man and van service for smaller moves and single-item deliveries.",
    href: "/services",
  },
];

const stats = [
  { value: "4.9★", label: "Trustpilot Rating" },
  { value: "323", label: "Google Reviews" },
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Moves Completed" },
];

const locations = [
  { name: "North London", href: "/locations/north-london", boroughs: "Islington · Hackney · Camden" },
  { name: "South London", href: "/locations/south-london", boroughs: "Brixton · Clapham · Dulwich" },
  { name: "East London", href: "/locations/east-london", boroughs: "Stratford · Canary Wharf · Bow" },
  { name: "West London", href: "/locations/west-london", boroughs: "Ealing · Chiswick · Hammersmith" },
  { name: "Central London", href: "/locations/central-london", boroughs: "Mayfair · Chelsea · Kensington" },
  { name: "Epsom & Surrey", href: "/locations/epsom-surrey", boroughs: "Epsom · Guildford · Kingston" },
  { name: "Watford & Herts", href: "/locations/watford-hertfordshire", boroughs: "Watford · St Albans · Hemel" },
  { name: "Brentwood & Essex", href: "/locations/brentwood-essex", boroughs: "Brentwood · Chelmsford · Romford" },
];

// Mini quote form in hero — connected to tRPC backend
function HeroQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    moveType: "",
    fromPostcode: "",
    toPostcode: "",
    moveDate: "",
    propertySize: "",
    name: "",
    phone: "",
    email: "",
  });

  const submitQuote = trpc.leads.submitQuote.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const canProceed =
    step === 1
      ? form.moveType && form.fromPostcode && form.toPostcode
      : form.name && form.phone && form.email;

  const handleSubmit = () => {
    if (!canProceed) return;
    submitQuote.mutate({
      moveType: form.moveType,
      fromPostcode: form.fromPostcode,
      toPostcode: form.toPostcode,
      moveDate: form.moveDate || undefined,
      propertySize: form.propertySize || undefined,
      name: form.name,
      phone: form.phone,
      email: form.email,
      source: "Hero Quote Form",
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 size={40} className="mx-auto mb-3" style={{ color: "#B8960C" }} />
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          Request Received!
        </h3>
        <p className="text-sm" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          We'll call you within 1 hour to arrange your free survey.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-4">
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
            {s < 2 && <div className="flex-1 h-px w-8" style={{ backgroundColor: step > s ? "#B8960C" : "#e8e4dc" }} />}
          </div>
        ))}
        <span className="text-xs ml-1" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-3">
          <select
            name="moveType"
            value={form.moveType}
            onChange={handleChange}
            className="input-premium"
          >
            <option value="">Move Type</option>
            <option value="house">House Removal</option>
            <option value="office">Office Removal</option>
            <option value="packing">Packing Service</option>
            <option value="storage">Storage</option>
            <option value="manvan">Man & Van</option>
            <option value="international">International</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input
              name="fromPostcode"
              value={form.fromPostcode}
              onChange={handleChange}
              placeholder="From Postcode"
              className="input-premium"
            />
            <input
              name="toPostcode"
              value={form.toPostcode}
              onChange={handleChange}
              placeholder="To Postcode"
              className="input-premium"
            />
          </div>
          <input
            name="moveDate"
            type="date"
            value={form.moveDate}
            onChange={handleChange}
            className="input-premium"
          />
          <button
            onClick={() => canProceed && setStep(2)}
            className="btn-gold w-full py-3.5 text-sm mt-1"
            style={{ opacity: canProceed ? 1 : 0.5 }}
          >
            Continue →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="input-premium"
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input-premium"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="input-premium"
          />
          <div className="flex gap-2 mt-1">
            <button
              onClick={() => setStep(1)}
              className="btn-ghost-gold flex-1 py-3.5 text-sm"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canProceed || submitQuote.isPending}
              className="btn-gold flex-1 py-3.5 text-sm flex items-center justify-center gap-2"
              style={{ opacity: canProceed && !submitQuote.isPending ? 1 : 0.5 }}
            >
              {submitQuote.isPending ? (
                <><Loader2 size={14} className="animate-spin" /> Sending...</>
              ) : "Get My Quote"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>
      <SEOHead
        title="London's Premium Removals Company"
        description="Fixed-price house, office and international removals across London and the M25. 4.9★ Trustpilot, 323 Google reviews, 10,000+ moves. Get your free quote today."
        canonical="/"
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ paddingTop: "104px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Dark overlay — gradient left to right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,15,25,0.92) 0%, rgba(10,15,25,0.80) 45%, rgba(10,15,25,0.45) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: headline + trust signals */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="eyebrow">London's Premium Removals Company</span>
                <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#B8960C" }} />
              </div>

              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
              >
                Moving You
                <br />
                <em className="not-italic" style={{ color: "#B8960C" }}>Forward</em>
                <br />
                With Precision
              </h1>

              <p
                className="text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}
              >
                Fixed-price house, office and international removals across London
                and the M25. Trusted by over 10,000 families and businesses.
              </p>

              {/* Trust row with live Trustpilot badge */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <TrustpilotBadge variant="dark" />
                <div className="h-4 w-px hidden sm:block" style={{ backgroundColor: "rgba(184,150,12,0.4)" }} />
                <span className="text-sm" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                  323 Google Reviews
                </span>
                <div className="h-4 w-px hidden sm:block" style={{ backgroundColor: "rgba(184,150,12,0.4)" }} />
                <span className="text-sm" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                  Fully Insured
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/get-quote">
                  <span className="btn-gold px-7 py-4">
                    Get Free Quote
                  </span>
                </Link>
                <a href="tel:02085218000" className="btn-ghost-gold px-7 py-4">
                  <Phone size={15} />
                  0208 521 8000
                </a>
              </div>
            </motion.div>

            {/* Right: quote form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="hidden lg:block"
            >
              <div
                className="p-8 shadow-2xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(184,150,12,0.25)" }}
              >
                <div className="mb-5">
                  <span className="eyebrow block mb-2">Free, No-Obligation</span>
                  <h2
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
                  >
                    Get Your Fixed-Price Quote
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    We'll call you within 1 hour
                  </p>
                </div>
                <HeroQuoteForm />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "rgba(184,150,12,0.5)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(184,150,12,0.6)", fontFamily: "DM Sans, sans-serif" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#0F1923" }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x" style={{ borderColor: "rgba(184,150,12,0.2)" }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center lg:px-8 py-2"
              >
                <div
                  className="text-3xl lg:text-4xl font-semibold mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={PACKING_IMG}
                alt="Professional packing service"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 p-5 shadow-xl"
                style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.3)" }}
              >
                <div
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}
                >
                  15+
                </div>
                <div
                  className="text-xs tracking-wider uppercase mt-0.5"
                  style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                >
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow block mb-3">Why Choose Octagon</span>
              <h2
                className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
              >
                The Premium Standard
                <br />
                in London Removals
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
              >
                We believe moving should be a seamless, stress-free experience. Our
                dedicated teams combine meticulous planning with white-glove execution
                to protect what matters most to you.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Shield,
                    title: "Fixed-Price Guarantee",
                    desc: "No hidden charges. The price we quote is the price you pay.",
                  },
                  {
                    icon: Award,
                    title: "Fully Insured & BAR Registered",
                    desc: "Complete peace of mind with comprehensive goods-in-transit insurance.",
                  },
                  {
                    icon: Clock,
                    title: "On-Time, Every Time",
                    desc: "We respect your time. Punctual arrival and efficient execution, guaranteed.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.2)" }}
                    >
                      <item.icon size={18} style={{ color: "#B8960C" }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-0.5"
                        style={{ fontFamily: "DM Sans, sans-serif", color: "#0F1923", fontSize: "0.95rem" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <span className="btn-ghost-gold mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm">
                  Learn About Us <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0F1923" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow block mb-3">What We Offer</span>
            <h2
              className="text-4xl lg:text-5xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={service.href}>
                  <div
                    className="p-7 h-full group cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: "#1A2535",
                      border: "1px solid rgba(184,150,12,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#B8960C";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#1f2e42";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,12,0.15)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#1A2535";
                    }}
                  >
                    <div
                      className="w-11 h-11 flex items-center justify-center mb-5"
                      style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}
                    >
                      <service.icon size={20} style={{ color: "#B8960C" }} />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      {service.desc}
                    </p>
                    <span
                      className="text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
                      style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Learn More <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow block mb-3">Client Testimonials</span>
            <h2
              className="text-4xl lg:text-5xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
            >
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#B8960C] text-[#B8960C]" />
              ))}
              <span className="text-sm font-semibold ml-1" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>
                4.9/5 from 171 Trustpilot reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc" }}
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-[#B8960C] text-[#B8960C]" />
                  ))}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "#3a3a3a", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
                >
                  "{review.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>
                      {review.name}
                    </div>
                    <div className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      {review.location}
                    </div>
                  </div>
                  <span className="text-xs" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.trustpilot.com/review/octagonremovals.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold inline-flex items-center gap-2 px-7 py-3 text-sm"
            >
              View All Reviews on Trustpilot <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#1A2535" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow block mb-3">Areas We Cover</span>
            <h2
              className="text-4xl lg:text-5xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
            >
              Serving All of London
              <br />& the M25
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={loc.href}>
                  <div
                    className="p-5 group cursor-pointer transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(184,150,12,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#B8960C";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(184,150,12,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,12,0.15)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <h3
                      className="font-semibold mb-1.5 group-hover:text-[#B8960C] transition-colors"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF", fontSize: "1.1rem" }}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      {loc.boroughs}
                    </p>
                    <span
                      className="text-xs font-bold tracking-wider uppercase mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
                    >
                      View Page <ChevronRight size={11} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <HowItWorks />

      {/* ── GOOGLE REVIEWS ── */}
      <GoogleReviews />

      {/* ── CTA BANNER ── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: "#0F1923" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${SKYLINE_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,25,35,0.6) 0%, rgba(15,25,35,0.9) 100%)" }}
        />
        <div className="container relative z-10 text-center">
          <span className="eyebrow block mb-4">Ready to Move?</span>
          <h2
            className="text-4xl lg:text-6xl font-semibold mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
          >
            Get Your Free, Fixed-Price
            <br />
            <em className="not-italic" style={{ color: "#B8960C" }}>Quote Today</em>
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}
          >
            Join over 10,000 satisfied customers. No hidden fees, no surprises —
            just a seamless move from start to finish.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/get-quote">
              <span className="btn-gold px-10 py-4 text-sm">
                Get Free Quote
              </span>
            </Link>
            <a href="tel:02085218000" className="btn-ghost-gold px-10 py-4 text-sm">
              <Phone size={15} />
              0208 521 8000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
