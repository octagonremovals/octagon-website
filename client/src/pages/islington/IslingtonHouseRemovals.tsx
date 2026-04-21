/**
 * ISLINGTON MINI-SITE — HOUSE REMOVALS PAGE
 * Target keywords: "house removals Islington", "residential removals N1",
 * "flat removal Islington", "moving house Islington"
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Phone, CheckCircle2, ArrowRight, Shield, Package, Clock, Users } from "lucide-react";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const HERO_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Packing-and-Moving-890x664_ce08ecc2.jpg";
const TEAM_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const FAQS = [
  { q: "How much does a house removal in Islington cost?", a: "Our Islington house removals start from £350 for a 1-bedroom flat and £650 for a 3-bedroom house. All prices are fixed — no hidden charges. We provide a free quote within 1 hour of your enquiry." },
  { q: "Do you cover all Islington postcodes?", a: "Yes — we cover the entire London Borough of Islington including Angel, Highbury, Canonbury, Barnsbury, Clerkenwell, Finsbury Park, Holloway, and all N1, N5, N7 postcodes." },
  { q: "Can you pack for me as well as move?", a: "Absolutely. Our full packing service includes professional-grade materials (double-walled boxes, tissue paper, bubble wrap), careful wrapping of all items, and full reassembly at your new home." },
  { q: "How far in advance should I book?", a: "We recommend booking 2 to 4 weeks in advance for weekend moves in Islington, which are in high demand. However, we often accommodate last-minute bookings — call us on 0208 521 8000 to check availability." },
  { q: "Are you insured for moves in Islington?", a: "Yes. We carry £50,000 goods-in-transit insurance per vehicle and £1,000,000 public liability insurance. Your belongings are fully protected throughout your Islington move." },
];

export default function IslingtonHouseRemovals() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>House Removals Islington | Octagon Removals — Fixed Price, Fully Insured</title>
        <meta name="description" content="Professional house removals in Islington. Covering Angel, Highbury, Canonbury, N1, N5, N7. Fixed price, fully insured up to £50,000. Free quote within 1 hour." />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington/house-removals" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "House Removals Islington",
          "provider": { "@type": "LocalBusiness", "name": "Octagon Removals", "telephone": "+442085218000" },
          "areaServed": "Islington",
          "description": "Professional residential removals across Islington, Angel, Highbury and all N1, N5, N7 postcodes.",
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="House Removals Islington" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0.4) 70%, transparent 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: GOLD }}>Islington · N1 · N5 · N7</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: SAND, lineHeight: 1.2 }}>
              House Removals<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Islington</span>
            </h1>
            <p className="mt-4 mb-8 leading-relaxed" style={{ color: "rgba(245,243,239,0.8)", fontSize: "0.95rem" }}>
              Full-service residential removals across Islington. Fixed price, fully insured, with a dedicated coordinator from booking to completion.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/islington/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white" style={{ backgroundColor: GOLD }}>
                  Get Free Quote <ArrowRight size={14} />
                </span>
              </Link>
              <a href="tel:02085218000" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm"
                style={{ border: `1px solid ${GOLD}`, color: SAND }}>
                <Phone size={14} /> 0208 521 8000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>What's Included</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
                A Complete House Removal Service
              </h2>
              <p className="mt-4 mb-6 leading-relaxed text-sm" style={{ color: "#666" }}>
                Every Islington house removal includes a pre-move survey, uniformed crew, all equipment, and a dedicated coordinator. We handle everything from dismantling furniture to reassembly at your new home.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-move survey (in-person or virtual)",
                  "Uniformed, trained removal crew",
                  "All packing materials (boxes, tape, bubble wrap)",
                  "Professional packing and wrapping",
                  "Furniture dismantling and reassembly",
                  "£50,000 goods-in-transit insurance",
                  "Dedicated move coordinator",
                  "Fixed price — no hidden charges",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#555" }}>
                    <CheckCircle2 size={16} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={TEAM_IMG} alt="Octagon Removals team Islington" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing guide */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Pricing Guide</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
              Islington Removal Prices
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: "#666" }}>
              All prices are fixed and all-inclusive. The price we quote is the price you pay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { size: "1 Bedroom Flat", price: "From £350", items: ["1 van", "2 crew", "Half day", "Packing available"] },
              { size: "2–3 Bedroom House", price: "From £650", items: ["1–2 vans", "3 crew", "Full day", "Packing included"], featured: true },
              { size: "4+ Bedroom House", price: "From £950", items: ["2 vans", "4 crew", "Full day", "Full packing service"] },
            ].map(({ size, price, items, featured }) => (
              <div key={size} className="p-6 rounded-sm text-center"
                style={{ backgroundColor: featured ? CHARCOAL : SAND, border: featured ? `2px solid ${GOLD}` : "1px solid rgba(184,150,12,0.2)" }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: featured ? SAND : CHARCOAL }}>{size}</h3>
                <div className="text-2xl font-bold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: GOLD }}>{price}</div>
                <ul className="space-y-2 mb-6">
                  {items.map(item => (
                    <li key={item} className="text-xs" style={{ color: featured ? "rgba(245,243,239,0.7)" : "#666" }}>{item}</li>
                  ))}
                </ul>
                <Link href="/islington/contact">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold cursor-pointer px-4 py-2 rounded-sm"
                    style={{ backgroundColor: featured ? GOLD : "transparent", color: featured ? "#fff" : GOLD, border: featured ? "none" : `1px solid ${GOLD}` }}>
                    Get Exact Quote <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "#999" }}>
            Prices are indicative. Your exact fixed price is confirmed after a free survey.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>FAQ</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
              House Removals Islington — Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-sm overflow-hidden" style={{ backgroundColor: "#fff", border: "1px solid rgba(184,150,12,0.15)" }}>
                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm" style={{ color: CHARCOAL }}>
                  {q}
                  <span className="ml-4 shrink-0 text-xs" style={{ color: GOLD }}>+</span>
                </summary>
                <div className="px-4 pb-4 text-sm leading-relaxed" style={{ color: "#666" }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
            Plan Your Islington House Move
          </h2>
          <p className="mt-3 mb-8 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
            Free quote within 1 hour. Fixed price guaranteed. No obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/islington/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white" style={{ backgroundColor: GOLD }}>
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
