/**
 * ISLINGTON MINI-SITE — ABOUT PAGE
 * Target keywords: "about Octagon Removals Islington", "removals company Islington",
 * "trusted removals N1", "Octagon Removals Est 2017"
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Phone, ArrowRight, Shield, CheckCircle2, Award } from "lucide-react";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const PAWEL_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Pawel-Walerczuk_d0f1e3c5.jpg";
const TEAM_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg";
const FLEET_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-slider-2_410682e3.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function IslingtonAbout() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>About Octagon Removals Islington | Est. 2017 — London's Premium Removals</title>
        <meta name="description" content="Octagon Removals has served Islington since 2017. Founded by Pawel Walerczuk, we are London's premium removals company. Fully insured, fixed price, 4.9 Google rating." />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington/about" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={FLEET_IMG} alt="Octagon Removals fleet" className="absolute inset-0 w-full h-full object-cover object-left" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0.4) 70%, transparent 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: GOLD }}>Est. 2017 · London</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: SAND, lineHeight: 1.2 }}>
              About<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Octagon Removals</span>
            </h1>
            <p className="mt-4 leading-relaxed" style={{ color: "rgba(245,243,239,0.8)", fontSize: "0.95rem" }}>
              London's premium removals company, serving Islington and all of London since 2017.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>Our Story</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
                Built on a Simple Belief
              </h2>
              <p className="mt-4 mb-4 leading-relaxed text-sm" style={{ color: "#666" }}>
                Octagon Removals was founded in 2017 by Pawel Walerczuk with a single belief: that a removal company should treat every client's home as if it were their own. Not as a job to be rushed, but as a responsibility to be honoured.
              </p>
              <p className="mb-4 leading-relaxed text-sm" style={{ color: "#666" }}>
                Since then, we have completed over 15,000 moves across London and the M25. We have moved families from Islington to Edinburgh, offices from Angel to Amsterdam, and pianos from Canonbury to the countryside.
              </p>
              <p className="leading-relaxed text-sm" style={{ color: "#666" }}>
                Every move is assigned a dedicated coordinator, carried out by uniformed professionals, and backed by a fixed-price guarantee. That is not a premium add-on. That is the Octagon Standard.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: 480 }}>
              <img src={PAWEL_IMG} alt="Pawel Walerczuk — Founder, Octagon Removals" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(transparent, rgba(15,25,35,0.85))" }}>
                <div className="text-sm font-semibold" style={{ color: SAND, fontFamily: "Cormorant Garamond, serif" }}>Pawel Walerczuk</div>
                <div className="text-xs" style={{ color: GOLD }}>Founder, Octagon Removals</div>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2017", label: "Year Founded" },
              { value: "15,000+", label: "Moves Completed" },
              { value: "4.9★", label: "Google Rating" },
              { value: "£1,000,000", label: "Insurance Per Vehicle" },
            ].map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 600, color: GOLD }}>{value}</div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(245,243,239,0.5)" }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={TEAM_IMG} alt="Octagon Removals team" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>The Octagon Standard</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
                Some Call It Exclusive. We Call It Standard.
              </h2>
              <p className="mt-4 mb-6 leading-relaxed text-sm" style={{ color: "#666" }}>
                Every Octagon move is delivered by uniformed, trained professionals. Not day-labour crews. We carry full goods-in-transit insurance, use premium packing materials, and assign a dedicated coordinator to every job.
              </p>
              <ul className="space-y-3">
                {[
                  "Uniformed, trained professionals",
                  "£1,000,000 goods-in-transit insurance",
                  "Premium packing materials",
                  "Dedicated coordinator per move",
                  "Fixed price — no hidden charges",
                  "4.9 Google rating from 320+ reviews",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#555" }}>
                    <CheckCircle2 size={16} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer" style={{ color: GOLD }}>
                    Visit our main website <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
            Ready to Experience the Octagon Standard?
          </h2>
          <p className="mt-3 mb-8 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
            Free quote within 1 hour. Fixed price guaranteed.
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
