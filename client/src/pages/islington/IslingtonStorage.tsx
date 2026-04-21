/**
 * ISLINGTON MINI-SITE — STORAGE PAGE
 * Target keywords: "storage Islington", "self storage N1",
 * "storage units Islington", "secure storage Angel"
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowRight, Shield, Lock, Clock, Package } from "lucide-react";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const HERO_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Furniure-Securing-London-Removals-Company_cd87b496.jpg";
const STORAGE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Packing-London-Moving-Company-5-890x664_1d7d6a98.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function IslingtonStorage() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>Storage Islington | Octagon Removals — Secure, CCTV-Monitored</title>
        <meta name="description" content="Secure storage near Islington. CCTV-monitored, fully insured. Flexible terms from 1 week to 12 months. Ideal for house moves, renovations and business storage." />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington/storage" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Storage Islington" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0.4) 70%, transparent 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: GOLD }}>Secure Storage · Islington</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: SAND, lineHeight: 1.2 }}>
              Storage Solutions<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Near Islington</span>
            </h1>
            <p className="mt-4 mb-8 leading-relaxed" style={{ color: "rgba(245,243,239,0.8)", fontSize: "0.95rem" }}>
              Secure, CCTV-monitored storage for Islington residents and businesses. Flexible terms from 1 week to 12 months. We collect, store, and redeliver.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/islington/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white" style={{ backgroundColor: GOLD }}>
                  Get Storage Quote <ArrowRight size={14} />
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

      {/* Storage features */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>What We Offer</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
                Safe Storage for Islington
              </h2>
              <p className="mt-4 mb-6 leading-relaxed text-sm" style={{ color: "#666" }}>
                Whether you are between properties, renovating, or simply need extra space, our storage service is designed for Islington residents and businesses. We collect your items, store them securely, and redeliver when you are ready.
              </p>
              <ul className="space-y-3">
                {[
                  "CCTV-monitored 24/7",
                  "Fully insured contents",
                  "Flexible terms — 1 week to 12 months",
                  "We collect and redeliver",
                  "Climate-controlled units available",
                  "Secure access control",
                  "Inventory list provided",
                  "No long-term contracts required",
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
              <img src={STORAGE_IMG} alt="Secure storage Islington" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>When You Need Storage</span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
              Storage for Every Situation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Between Properties", body: "Sold your Islington home but your new property is not ready yet? We store everything safely." },
              { icon: Shield, title: "Home Renovation", body: "Protect your furniture and valuables while works are being carried out in your home." },
              { icon: Lock, title: "Business Storage", body: "Archive documents, excess stock, or office furniture. Secure and accessible." },
              { icon: Clock, title: "Flexible Terms", body: "Store for a week or a year. No long-term commitment required." },
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

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600, color: SAND }}>
            Need Storage Near Islington?
          </h2>
          <p className="mt-3 mb-8 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
            Free quote within 1 hour. Flexible terms. We collect from your door.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/islington/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-sm cursor-pointer text-white" style={{ backgroundColor: GOLD }}>
                Get Storage Quote <ArrowRight size={14} />
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
