/**
 * ISLINGTON MINI-SITE — OFFICE REMOVALS PAGE
 * Target keywords: "office removals Islington", "commercial removals N1",
 * "business relocation Islington", "office move Angel"
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Phone, CheckCircle2, ArrowRight, Building2, Clock, Shield, Users } from "lucide-react";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/removals-company-commercial-office-move-_4871c2b1.jpg";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Woolwich-commercial-moving-company-890x664_598e73ee.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function IslingtonOfficeRemovals() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>Office Removals Islington | Octagon Removals — Minimal Downtime</title>
        <meta name="description" content="Professional office and commercial removals in Islington. Weekend and out-of-hours moves available. Covering all N1, EC1 postcodes. Fixed price, fully insured." />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington/office-removals" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Office Removals Islington" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0.4) 70%, transparent 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: GOLD }}>Commercial · N1 · EC1</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: SAND, lineHeight: 1.2 }}>
              Office Removals<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Islington</span>
            </h1>
            <p className="mt-4 mb-8 leading-relaxed" style={{ color: "rgba(245,243,239,0.8)", fontSize: "0.95rem" }}>
              Minimal-downtime office relocations for Islington businesses. Weekend and out-of-hours moves available. Fixed price, fully insured.
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

      {/* Why choose us for office moves */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>Why Octagon for Office Moves</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
                Your Business Keeps Moving
              </h2>
              <p className="mt-4 mb-6 leading-relaxed text-sm" style={{ color: "#666" }}>
                We understand that every hour of downtime costs your business money. Our Islington office relocation service is designed around your schedule, not ours. We work weekends, evenings, and bank holidays to ensure your team is operational on Monday morning.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated project manager for your office move",
                  "Weekend and out-of-hours moves available",
                  "IT equipment handled with specialist care",
                  "Colour-coded labelling system for fast setup",
                  "Furniture dismantling and reassembly",
                  "Secure document and file handling",
                  "£1,000,000 goods-in-transit insurance",
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
              <img src={TEAM_IMG} alt="Office removals Islington" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-20 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Our Approach</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
              Office Moves Done Right
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Out of Hours", body: "We move your office over the weekend so your team is ready for Monday morning." },
              { icon: Building2, title: "Any Size Office", body: "From a 5-person startup to a 200-person corporate relocation — we scale to your needs." },
              { icon: Shield, title: "Fully Insured", body: "£1,000,000 goods-in-transit and public liability insurance for complete peace of mind." },
              { icon: Users, title: "Dedicated Manager", body: "One point of contact throughout. Your move coordinator handles everything." },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-6 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,150,12,0.2)" }}>
                <Icon size={22} style={{ color: GOLD }} className="mb-4" />
                <h3 className="font-semibold mb-2 text-sm" style={{ color: SAND }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(245,243,239,0.6)" }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Areas Covered</span>
          <h2 className="mt-2 mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: CHARCOAL }}>
            Office Removals Across Islington and Beyond
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Angel", "Clerkenwell", "Finsbury", "Highbury", "Canonbury", "Old Street", "Farringdon", "EC1", "N1", "N5", "N7", "EC2"].map(area => (
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
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
            Plan Your Islington Office Move
          </h2>
          <p className="mt-3 mb-8 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
            Free site visit and fixed-price quote. We respond within 1 hour.
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
