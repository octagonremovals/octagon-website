/**
 * ISLINGTON MINI-SITE — HOME PAGE
 * Target keywords: "removals Islington", "house removals Islington",
 * "moving company Islington", "man and van Islington", "N1 removals"
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Phone, CheckCircle2, ArrowRight, MapPin, Shield, Clock, Package } from "lucide-react";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const HERO_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-slider-2_410682e3.jpeg";
const PACKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Packing-and-Moving-890x664_ce08ecc2.jpg";
const OFFICE_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/removals-company-commercial-office-move-_4871c2b1.jpg";
const STORAGE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Furniure-Securing-London-Removals-Company_cd87b496.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const REVIEWS = [
  { name: "James H.", area: "Angel, N1", rating: 5, text: "Octagon moved us from a 3-bed flat in Angel to Highbury. Absolutely faultless — on time, careful with everything, and the fixed price meant no surprises." },
  { name: "Sophie L.", area: "Canonbury, N1", rating: 5, text: "We had a lot of antiques and were nervous about the move. The team wrapped everything meticulously and even helped reassemble our wardrobes. Professional from start to finish." },
  { name: "Marcus D.", area: "Barnsbury, N1", rating: 5, text: "Second time using Octagon. They remembered our preferences from last time and the whole move was done by lunchtime. Brilliant service, brilliant team." },
];

export default function IslingtonHome() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>Removals Islington | Octagon Removals — Est. 2017</title>
        <meta name="description" content="Professional house and office removals in Islington. Covering Angel, Highbury, Canonbury, Barnsbury and all N1, N5, N7 postcodes. Fixed price, fully insured. Free quote within 1 hour." />
        <meta name="keywords" content="removals Islington, house removals Islington, moving company Islington, man and van N1, office removals Islington" />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Octagon Removals — Islington",
          "description": "Professional removals company serving Islington, Angel, Highbury, Canonbury and all N1, N5, N7 postcodes.",
          "url": "https://octagonremovals.co.uk/islington",
          "telephone": "+442085218000",
          "address": { "@type": "PostalAddress", "streetAddress": "Office 56, Millmead Business Centre", "addressLocality": "London", "postalCode": "N17 9QU", "addressCountry": "GB" },
          "areaServed": ["Islington", "Angel", "Highbury", "Canonbury", "Barnsbury", "Clerkenwell", "Finsbury Park", "Holloway"],
          "priceRange": "££",
          "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-15:00"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "320" }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Octagon Removals Islington" className="absolute inset-0 w-full h-full object-cover object-left" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0.5) 60%, transparent 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} style={{ color: GOLD }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Islington · N1 · N5 · N7</span>
            </div>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 600, color: SAND, lineHeight: 1.15 }}>
              Removals in<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Islington</span>
            </h1>
            <p className="mt-4 mb-8 leading-relaxed" style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif", fontSize: "1rem" }}>
              Professional house and office removals across Islington since 2017.
              Covering Angel, Highbury, Canonbury, Barnsbury and all N1, N5, N7 postcodes.
              Fixed price, fully insured up to £1,000,000 per vehicle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/islington/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white"
                  style={{ backgroundColor: GOLD }}>
                  Get Free Quote <ArrowRight size={14} />
                </span>
              </Link>
              <a href="tel:02085218000" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm"
                style={{ backgroundColor: "transparent", border: `1px solid ${GOLD}`, color: SAND }}>
                <Phone size={14} /> 0208 521 8000
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={GOLD} style={{ color: GOLD }} />)}
              </div>
              <span className="text-xs" style={{ color: "rgba(245,243,239,0.6)" }}>4.9 · 320+ Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: "Fully Insured", sub: "Up to £1,000,000 per vehicle" },
            { icon: CheckCircle2, label: "Fixed Price", sub: "No hidden charges" },
            { icon: Clock, label: "Est. 2017", sub: "Est. 2017 · London" },
            { icon: Star, label: "4.9 Google", sub: "320+ verified reviews" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={18} style={{ color: GOLD, flexShrink: 0 }} />
              <div>
                <div className="text-xs font-semibold" style={{ color: SAND, fontFamily: "DM Sans, sans-serif" }}>{label}</div>
                <div className="text-xs opacity-50" style={{ color: SAND }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services overview */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>What We Do</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: CHARCOAL }}>
              Removals Services in Islington
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#666" }}>
              From a single-bedroom flat in Angel to a large family home in Highbury, we handle every Islington move with the same level of care and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: HERO_IMG,
                title: "House Removals Islington",
                desc: "Full-service residential moves across all Islington postcodes. Fixed price, fully insured, dedicated coordinator.",
                href: "/islington/house-removals",
                cta: "House Removals",
              },
              {
                img: OFFICE_IMG,
                title: "Office Removals Islington",
                desc: "Minimal-downtime office relocations for Islington businesses. Weekend and out-of-hours moves available.",
                href: "/islington/office-removals",
                cta: "Office Removals",
              },
              {
                img: STORAGE_IMG,
                title: "Storage Islington",
                desc: "Secure, CCTV-monitored storage near Islington. Flexible terms from 1 week to 12 months.",
                href: "/islington/storage",
                cta: "Storage Solutions",
              },
            ].map(({ img, title, desc, href, cta }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group rounded-sm overflow-hidden shadow-sm" style={{ backgroundColor: "#fff" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: CHARCOAL }}>{title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{desc}</p>
                  <Link href={href}>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold cursor-pointer" style={{ color: GOLD }}>
                      {cta} <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Octagon */}
      <section className="py-20 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Why Choose Us</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: SAND }}>
              Islington's Trusted Removals Company
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Fully Insured", body: "£1,000,000 goods-in-transit insurance per vehicle. Your belongings are fully protected." },
              { icon: CheckCircle2, title: "Fixed Price", body: "The price we quote is the price you pay. No hidden charges, no surprises on moving day." },
              { icon: Package, title: "Premium Packing", body: "Professional packing materials and trained packers. Everything wrapped and labelled correctly." },
              { icon: Clock, title: "On Time, Every Time", body: "We arrive when we say we will. Your time matters — we respect it." },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-6 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,150,12,0.2)" }}>
                <Icon size={22} style={{ color: GOLD }} className="mb-4" />
                <h3 className="font-semibold mb-2 text-sm" style={{ color: SAND, fontFamily: "DM Sans, sans-serif" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(245,243,239,0.6)" }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Client Reviews</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: CHARCOAL }}>
              What Islington Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="p-6 rounded-sm shadow-sm" style={{ backgroundColor: "#fff" }}>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} fill={GOLD} style={{ color: GOLD }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555", fontStyle: "italic" }}>"{r.text}"</p>
                <div className="text-xs font-semibold" style={{ color: CHARCOAL }}>{r.name}</div>
                <div className="text-xs" style={{ color: "#999" }}>{r.area}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.google.com/search?q=Octagon+Removals+reviews" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold" style={{ color: GOLD }}>
              Read all 320+ reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Areas We Cover</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: CHARCOAL }}>
              All of Islington and Beyond
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Angel", "Highbury", "Canonbury", "Barnsbury", "Clerkenwell", "Finsbury Park", "Holloway", "Archway", "Tufnell Park", "Caledonian Road", "N1", "N5", "N7", "EC1"].map(area => (
              <span key={area} className="px-3 py-1.5 text-xs font-medium rounded-sm"
                style={{ backgroundColor: "rgba(184,150,12,0.08)", color: CHARCOAL, border: "1px solid rgba(184,150,12,0.2)" }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: SAND }}>
            Ready to Move in Islington?
          </h2>
          <p className="mt-3 mb-8 text-sm leading-relaxed" style={{ color: "rgba(245,243,239,0.7)" }}>
            Get a free, no-obligation quote within 1 hour. Fixed price guaranteed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/islington/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white"
                style={{ backgroundColor: GOLD }}>
                Get Free Quote <ArrowRight size={14} />
              </span>
            </Link>
            <a href="tel:02085218000" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-sm"
              style={{ border: `1px solid ${GOLD}`, color: SAND }}>
              <Phone size={14} /> 0208 521 8000
            </a>
          </div>
        </div>
      </section>
    </IslingtonLayout>
  );
}
