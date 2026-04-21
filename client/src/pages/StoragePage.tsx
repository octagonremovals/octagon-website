import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ChevronDown, ChevronRight, Shield, Clock, Package,
  Truck, Building2, CheckCircle2, Phone, ArrowRight,
  Warehouse, Lock, MapPin, Users, Box
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── CDN Images ───────────────────────────────────────────────────────────────
const FLEET_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/fleet_fb06ee28.jpg";
const STORAGE1_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage1_be1de190.jpg";
const STORAGE2_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage2_3f74dfe6.jpg";
const STORAGE6_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage6_bd8a6420.jpg";
const STORAGE7_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage7_eadefe6c.jpg";
const STORAGE8_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage8_6ac12d12.jpg";
const STORAGE9_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage9_e577143b.jpg";

// ── Colours ───────────────────────────────────────────────────────────────────
const GOLD    = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND    = "#F5F3EF";

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What types of storage services do you offer?",
    a: "Octagon Removals provides comprehensive commercial and residential storage solutions in London. This includes short-term storage for temporary needs and long-term storage for extended periods, catering to both businesses and homeowners.",
  },
  {
    q: "Where are your storage facilities located?",
    a: "Our secure storage facilities are conveniently located to serve London and the surrounding areas, including Essex. We offer easy access and a full collection and delivery service to and from your location.",
  },
  {
    q: "How secure are your storage units?",
    a: "Our storage facilities are equipped with 24/7 security measures, including CCTV surveillance, alarm systems, and restricted access, ensuring your belongings are safe and protected at all times.",
  },
  {
    q: "Can you collect my items for storage and deliver them back?",
    a: "Yes, our full spectrum of services includes careful collection, transportation, and delivery of your items to and from our storage facilities, making the process completely hassle-free for you.",
  },
  {
    q: "What items can I store in your facilities?",
    a: "You can store a wide range of items, including household furniture, personal belongings, office equipment, documents, and retail stock. We can advise on specific items during your consultation.",
  },
  {
    q: "Are there any items I cannot store?",
    a: "For safety and legal reasons, hazardous materials, perishable goods, live animals, illegal substances, and flammable items are generally not permitted in storage. Please check our full terms or ask our team.",
  },
  {
    q: "How long can I store my items?",
    a: "We offer flexible storage terms, from as little as 7 days right through to long-term arrangements. Whether you need a few weeks during a renovation or a permanent solution for business inventory, we can accommodate you.",
  },
  {
    q: "Is my inventory tracked and catalogued?",
    a: "Yes. We take inventory management seriously. A comprehensive list of your stored items is created at the time of the move and double-checked by our warehouse operatives upon receipt. This meticulous approach ensures that every item is accounted for.",
  },
];

// ── Features ──────────────────────────────────────────────────────────────────
const features = [
  { icon: Shield,    title: "24/7 Security",           desc: "CCTV surveillance, alarm systems and restricted access around the clock." },
  { icon: Clock,     title: "Flexible Terms",          desc: "Short and long-term options. Storage that fits your timeline, not ours." },
  { icon: Truck,     title: "Collection & Delivery",   desc: "We collect, store and return your items. Fully managed, door to door." },
  { icon: Package,   title: "Inventory Management",    desc: "Every item catalogued and double-checked by our warehouse team." },
  { icon: Building2, title: "Commercial Storage",      desc: "Dedicated units for inventory, documents, equipment and retail stock." },
  { icon: Warehouse, title: "Residential Storage",     desc: "Perfect for renovations, relocations or simply reclaiming your space." },
  { icon: Users,     title: "Porterage",               desc: "Trained porters to carry, position and manage your items at any location." },
  { icon: Box,       title: "Custom Wooden Crating",   desc: "Bespoke crates built to protect artwork, antiques and fragile valuables." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(184,150,12,0.25)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start gap-4 py-5 text-left"
      >
        <span className="font-semibold text-base" style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          style={{ color: GOLD, flexShrink: 0, marginTop: 2, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'DM Sans', sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function StoragePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: SAND }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 520, background: CHARCOAL }}>
        <img
          src={FLEET_IMG}
          alt="Octagon Removals Fleet at Storage Facility"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35, objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,25,35,0.95) 45%, rgba(15,25,35,0.4))" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex flex-col justify-center" style={{ minHeight: 520 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                Storage Services
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif", maxWidth: 640 }}
          >
            Premier Storage Solutions in London and Essex
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: "rgba(245,243,239,0.8)" }}
          >
            Security, accessibility and flexibility — whether you are a business owner, a homeowner in transition, or simply need extra space, our tailored storage solutions are designed around your needs.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                style={{ background: GOLD, color: CHARCOAL }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
            </Link>
            <a href="tel:02085218000">
              <button
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(245,243,239,0.4)", color: "#F5F3EF" }}
              >
                <Phone size={16} /> 0208 521 8000
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                What We Do
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Comprehensive Service from Start to Finish
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
              <p>
                We take inventory management seriously. A comprehensive list of your stored items is created at the time of the move and double-checked by our warehouse operatives upon receipt. This meticulous approach ensures that every item is accounted for, providing you with additional assurance.
              </p>
              <p>
                Our full spectrum of services includes careful collection, transportation, and delivery of your items to and from our storage facilities. We handle everything with the utmost care and professionalism, ensuring that your items are not only securely stored but also transported safely.
              </p>
              <p>
                Our commercial storage solutions are perfect for businesses that require their goods to be packed, catalogued, and stored securely. Residential clients will find our storage services ideal for property renovations or when transitioning between homes.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: MapPin, label: "London & Essex" },
                { icon: Lock,   label: "24/7 Secure" },
                { icon: Clock,  label: "Short and Long Term" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: SAND, color: CHARCOAL }}>
                  <Icon size={14} style={{ color: GOLD }} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="grid grid-cols-2 gap-3">
              <img src={STORAGE2_IMG} alt="Octagon Storage Facility" className="rounded w-full h-64 object-cover" />
              <img src={STORAGE7_IMG} alt="Octagon Storage Units" className="rounded w-full h-64 object-cover" />
              <img src={STORAGE6_IMG} alt="Octagon Storage Interior" className="col-span-2 rounded w-full h-72 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SHORT & LONG TERM ── */}
      <section style={{ background: SAND }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                Flexible Storage Solutions
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Short and Long Term Storage Solutions
            </h2>
            <div className="mt-6 max-w-2xl mx-auto space-y-3 text-base" style={{ color: "#4a4a4a" }}>
              <p>Not ready to move in yet? We'll hold your belongings safely, for as long as you need, returned exactly as they left.</p>
              <p>Your move doesn't have to happen all at once. Store with us for a week or a year, and when you're ready, we bring it all back, upon your request.</p>
              <p>Fully insured, monitored 24/7, and collected or delivered at a time that works for you.</p>
              <p>Speak to our team today and we'll arrange everything around your schedule.</p>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                  style={{ background: GOLD, color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Speak to Our Team <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: STORAGE1_IMG,
                title: "Residential Storage",
                desc: "Life rarely moves in a straight line. Whether you're between properties, mid-renovation, downsizing, or simply reclaiming space at home, having a secure, flexible place for your belongings removes one of the biggest pressures from an already demanding process — a secure storage space. We store everything from single items to full household contents, with every piece handled, wrapped and protected to the same standard we'd apply on moving day itself. What goes into storage comes out exactly as it went in, that's not a promise, it's how we operate. Your belongings carry value beyond the financial, and we treat them accordingly. Monitored around the clock, access-controlled and managed by the same team that moved you, there are no handoffs to third parties and no compromises on security. When you're ready, we bring everything back and place it exactly where you need it — no extra charges, no chasing, no stress.",
              },
              {
                img: STORAGE8_IMG,
                title: "Commercial Storage",
                desc: "For commercial clients, we offer secure, dedicated storage for your business requirements. Every unit is monitored 24/7, access-controlled, and handled exclusively by our trained team — not a self-storage facility where anyone can walk in. Every item stored long-term is professionally wrapped, reinforced and protected, built to withstand the weight of time, not just the journey. We work with businesses that can't afford delays, damaged stock or missing assets. Full inventory management, flexible terms and a dedicated point of contact mean your storage works as hard as your business does. From a single pallet to a full office clearance, we scale with you, making room for your expansion.",
              },
              {
                img: STORAGE9_IMG,
                title: "Why Choose Us?",
                desc: "We are not a self-storage facility — we are a full-service removals and storage company. The same trained team that moves you stores your belongings, with no handoffs to third parties, no strangers accessing your items, and no compromises on care. Fully insured, monitored 24/7, and with a dedicated point of contact throughout, we make storage as straightforward as it should be.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white overflow-hidden"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
              >
                <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section style={{ background: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                Space Solutions for Diverse Needs
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
              Everything Included as Standard
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 border"
                style={{ borderColor: "rgba(184,150,12,0.25)", background: "rgba(255,255,255,0.04)" }}
              >
                <f.icon size={28} style={{ color: GOLD, marginBottom: 14 }} />
                <h3 className="font-bold text-base mb-2" style={{ color: "#F5F3EF" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,243,239,0.65)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                Our Facilities
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Purpose-Built Storage in London
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <img src={STORAGE1_IMG} alt="Storage facility 1" className="w-full h-44 object-cover rounded" />
            <img src={STORAGE2_IMG} alt="Storage facility 2" className="w-full h-44 object-cover rounded" />
            <img src={STORAGE7_IMG} alt="Storage facility 7" className="w-full h-44 object-cover rounded" />
            <img src={STORAGE6_IMG} alt="Storage facility 6" className="w-full h-44 object-cover rounded" />
            <img src={STORAGE8_IMG} alt="Storage facility 8" className="col-span-2 w-full h-44 object-cover rounded" />
            <img src={STORAGE9_IMG} alt="Storage facility 9" className="col-span-2 w-full h-44 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: SAND }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
                Frequently Asked Questions
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently Asked Questions About Storage
            </h2>
          </motion.div>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: GOLD }}>
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to Book Your Storage?
            </h2>
            <p className="text-sm" style={{ color: "rgba(15,25,35,0.75)" }}>
              Call us on 0208 521 8000 or request a free quote online. We respond within the hour.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-90"
                style={{ background: CHARCOAL, color: "#F5F3EF" }}
              >
                Get a Free Quote <ChevronRight size={16} />
              </button>
            </Link>
            <a href="tel:02085218000">
              <button
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase border border-current transition-all hover:bg-black/10"
                style={{ color: CHARCOAL }}
              >
                <Phone size={16} /> Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
