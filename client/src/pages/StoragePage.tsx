import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import StorageChatbot from "@/components/StorageChatbot";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  ChevronDown, ChevronRight, Shield, Clock, Package,
  Truck, Building2, CheckCircle2, Phone, ArrowRight,
  Warehouse, Lock, MapPin, Users, Box, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// ── CDN Images ───────────────────────────────────────────────────────────────
const FLEET_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/fleet_fb06ee28.jpg";
const STORAGE1_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage1_be1de190.jpg";
const STORAGE2_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage2_3f74dfe6.jpg";
const STORAGE6_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage6_bd8a6420.jpg";
const STORAGE7_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage7_eadefe6c.jpg";
const STORAGE8_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage8_6ac12d12.jpg";
const STORAGE9_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/storage9_e577143b.jpg";
const NEW_IMG1     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102873_0647c4ce.webp";
const NEW_IMG2     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102890_7fbecdf3.webp";
const NEW_IMG3     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102960_624ca1d5.webp";
const NEW_IMG4     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/PHOTO-2026-04-16-17-51-47_eacce01b.jpg";
const STORAGE_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OCTAGONLONDONREMOVALSSTORAGE_2d43c25b.MOV";
const BP102869_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102869_c2631028.webp";
const BP102921_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102921_efaea9a0.webp";
const BP102935_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/BP102935_2d03d84f.webp";

// ── Colours ───────────────────────────────────────────────────────────────────
const GOLD    = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND    = "#F5F3EF";

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqsResidential = [
  { q: "Can you collect my belongings from my home and deliver them back?", a: "Yes. We collect from your door, transport everything to our secure facility, and return it whenever you are ready. You never need to visit the storage site yourself." },
  { q: "How long can I store my household items?", a: "From 7 days to several years. Our terms are fully flexible with no fixed contract length, so you pay only for the time you actually need." },
  { q: "Is my furniture and personal property insured while in storage?", a: "All goods are covered during transit and while in our care. We offer comprehensive protection plans so you can breathe easy from collection to delivery." },
  { q: "How do I know my belongings are safe?", a: "Our facilities operate 24/7 CCTV surveillance, on-site security personnel, and access-controlled entry. Only our trained team handles your items - no third parties, no self-storage walk-ins." },
  { q: "Can I store items during a house renovation or chain break?", a: "Absolutely. Storage during renovation, downsizing, or a chain break is one of our most popular services. We act as a seamless extension of your move so nothing is left in limbo." },
];

const faqsCommercial = [
  { q: "Can you store office equipment and business inventory?", a: "Yes. We handle everything from single pallets to full office clearances. Every item is professionally wrapped, catalogued, and stored in a secure, access-controlled environment." },
  { q: "Do you provide a dedicated point of contact for business accounts?", a: "Every commercial client is assigned a dedicated account manager who oversees collection, storage, and delivery - ensuring no delays, no miscommunication, and no handovers between contractors." },
  { q: "Can you manage our inventory while items are in storage?", a: "Yes. We provide itemised inventory lists with photographic evidence before and after. You always know exactly what is stored and in what condition." },
  { q: "What happens if we need to scale our storage space up or down?", a: "Our commercial terms are built for flexibility. You pay only for the space you use and can scale up or down as your business needs change - with no penalties and no fixed commitments." },
  { q: "Can you handle storage as part of a full office relocation?", a: "Yes. We combine removals and storage under one contract. One company handles your entire relocation - packing, transport, storage, and reinstallation - with no handovers and no gaps." },
];

// ── Features ──────────────────────────────────────────────────────────────────
const features = [
  { icon: Shield,    title: "Security",                desc: "CCTV running round the clock and a clean, dry, pest-free environment. Your things are looked after the same way we'd look after our own." },
  { icon: Clock,     title: "Flexible Terms",          desc: "Store for a week or a year, no fixed contracts, no penalties for leaving early. Your timeline, not ours." },
  { icon: CheckCircle2, title: "Cost Efficiency",     desc: "You pay for the space you actually use. The price we quote is the price you pay. No admin fees, no surprise charges at the end." },
  { icon: Truck,     title: "Collection & Delivery",   desc: "We come to you. Load up, transport, store, and bring everything back to your door when you're ready. You don't need to go anywhere near the facility." },
  { icon: ArrowRight, title: "Instant Quote",          desc: "Tell us what you need to store and we'll give you a fixed price within the hour. No site visits required on your end." },
  { icon: Users,     title: "Versatility",             desc: "Families bridging between homes. Businesses clearing office space. Homeowners mid-renovation. Students gone for summer. We've seen it all, and handled it all." },
  { icon: Warehouse, title: "Perfect Buffer",          desc: "Chain break? Renovation overrunning? Sometimes the move doesn't go to plan. Storage with Octagon buys you the breathing room to sort it out without the panic." },
  { icon: Shield,    title: "Insurance",               desc: "Your belongings are covered in transit and in storage. Full inventory, photographic evidence before and after, so there's never any ambiguity about what went in or came out." },
  { icon: Package,   title: "Inventory Management",    desc: "Every item catalogued and photographed when it arrives. You'll have a full itemised list of what's stored — no guessing, no rummaging, no surprises." },
  { icon: Star,      title: "Transparency & Trust",    desc: "4.9 stars across 500+ verified reviews on Google and Trustpilot. We don't ask you to take our word for it." },
  { icon: Building2, title: "Unified Service",         desc: "One company handles your move and your storage. No handoffs, no gaps, no explaining yourself twice. 44% of people who move need storage — we built the service around that fact." },
  { icon: Box,       title: "Custom Wooden Crating",   desc: "For artwork, antiques, instruments or anything fragile, we build bespoke wooden crates to fit. Proper protection, not bubble wrap and hope." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

// ── Storage Contact Form ─────────────────────────────────────────────────────
function StorageContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", gdpr: false });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submitContact = trpc.leads.submitContact.useMutation({
    onSuccess: () => {
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", message: "", gdpr: false });
    },
    onError: () => setStatus("error"),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    submitContact.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message || "Storage enquiry",
      subject: "Storage Enquiry",
    });
  };

  const inputClass = "w-full px-3 py-2.5 text-sm border rounded outline-none transition-all focus:ring-2";
  const inputStyle = { borderColor: "#d4c9b0", fontFamily: "'DM Sans', sans-serif", color: CHARCOAL };
  const focusRing = "focus:ring-[#B8960C]/30 focus:border-[#B8960C]";

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center flex-1 py-8 text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "#f0ead8" }}>
          <CheckCircle2 size={24} style={{ color: GOLD }} />
        </div>
        <p className="font-semibold text-base" style={{ color: CHARCOAL }}>Thank you!</p>
        <p className="text-sm mt-1" style={{ color: "#6b6b6b" }}>We'll be in touch within the hour.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1">
      <input
        required
        placeholder="Your Name"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className={`${inputClass} ${focusRing}`}
        style={inputStyle}
      />
      <input
        required
        placeholder="Phone Number"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className={`${inputClass} ${focusRing}`}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className={`${inputClass} ${focusRing}`}
        style={inputStyle}
      />
      <textarea
        rows={3}
        placeholder="Tell us what you need to store..."
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className={`${inputClass} ${focusRing} resize-none`}
        style={inputStyle}
      />
      {/* GDPR Consent */}
      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          required
          checked={form.gdpr}
          onChange={e => setForm(f => ({ ...f, gdpr: e.target.checked }))}
          className="mt-0.5 shrink-0 w-4 h-4 rounded accent-[#B8960C] cursor-pointer"
        />
        <span className="text-xs leading-relaxed" style={{ color: "#6b6b6b" }}>
          I consent to Octagon Removals Ltd storing and processing my personal data to respond to this enquiry, in accordance with our{" "}
          <a href="/privacy-policy" className="underline hover:text-[#B8960C] transition-colors" style={{ color: CHARCOAL }}>Privacy Policy</a>.
        </span>
      </label>
      {status === "error" && <p className="text-xs text-red-500">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-auto w-full py-3 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: GOLD, color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
      >
        {status === "sending" ? "Sending..." : "Get My Quote"}
      </button>
    </form>
  );
}

// ── Facilities Slider ────────────────────────────────────────────────────────
const GALLERY_IMGS = [
  { src: NEW_IMG1,     alt: "Octagon van at storage facility" },
  { src: BP102869_IMG, alt: "Octagon team loading van at storage yard" },
  { src: NEW_IMG3,     alt: "Octagon team at storage yard" },
  { src: BP102921_IMG, alt: "Octagon team briefing at storage" },
  { src: BP102935_IMG, alt: "Octagon team with van at storage" },
  { src: STORAGE9_IMG, alt: "Octagon storage yard" },
];

function FacilitiesSlider() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-3" style={{ height: "520px" }}>
      {/* Main large image */}
      <div className="flex-1 overflow-hidden rounded">
        <img
          src={GALLERY_IMGS[active].src}
          alt={GALLERY_IMGS[active].alt}
          className="w-full h-full object-cover rounded transition-all duration-500"
        />
      </div>
      {/* Thumbnail strip */}
      <div className="grid grid-cols-6 gap-2" style={{ height: "80px" }}>
        {GALLERY_IMGS.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="overflow-hidden rounded focus:outline-none"
            style={{
              border: i === active ? `2px solid #B8960C` : "2px solid transparent",
              opacity: i === active ? 1 : 0.6,
              transition: "opacity 0.2s, border-color 0.2s",
            }}
            aria-label={img.alt}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ height: "76px" }} />
          </button>
        ))}
      </div>
    </div>
  );
}

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

// ── Storage FAQ Widget (tabbed, 5+5) ────────────────────────────────────────────────
function StorageFaqWidget() {
  const [tab, setTab] = useState<'residential' | 'commercial'>('residential');
  const faqs = tab === 'residential' ? faqsResidential : faqsCommercial;
  return (
    <section style={{ background: SAND }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>FAQ's: Storage</span>
            <span className="h-px w-8" style={{ background: GOLD }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
            Frequently Asked Questions About Storage
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8">
          {(['residential', 'commercial'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-6 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all"
              style={{
                background: tab === t ? GOLD : 'transparent',
                color: tab === t ? CHARCOAL : GOLD,
                border: `1.5px solid ${GOLD}`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t === 'residential' ? 'Residential' : 'Commercial'}
            </button>
          ))}
        </div>

        {/* 5 FAQs */}
        <div>
          {faqs.map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* See all link */}
        <div className="mt-8 flex items-center gap-2">
          <Link href="/faq/storage">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all hover:brightness-110 cursor-pointer"
              style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}
            >
              See all {tab === 'residential' ? 'Residential' : 'Commercial'} Storage FAQs
              <ChevronRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Storage Size Guide ────────────────────────────────────────────────────────────────
const SIZE_TIERS = [
  {
    sqft: 25,
    label: "25 sqft",
    name: "Small Unit",
    icon: "\ud83d\udce6",
    priceFrom: 52,
    items: [
      "Single bedroom contents",
      "Student belongings",
      "Small office equipment",
      "Boxes and personal items",
      "Seasonal furniture",
    ],
    fits: "Approx. a large van load",
    ideal: "Students, short-term storage, downsizing",
  },
  {
    sqft: 50,
    label: "50 sqft",
    name: "Medium Unit",
    icon: "\ud83c\udfe0",
    priceFrom: 105,
    items: [
      "1-2 bedroom flat contents",
      "Sofa, beds and wardrobes",
      "White goods",
      "Boxes and kitchen items",
      "Bicycles and outdoor gear",
    ],
    fits: "Approx. a 3.5t Luton van",
    ideal: "Between properties, renovation, chain breaks",
  },
  {
    sqft: 100,
    label: "100 sqft",
    name: "Large Unit",
    icon: "\ud83c\udfe1",
    priceFrom: 210,
    items: [
      "3 bedroom house contents",
      "Full dining room furniture",
      "Multiple wardrobes and beds",
      "Garden furniture and tools",
      "Business inventory (small)",
    ],
    fits: "Approx. a 7.5t lorry load",
    ideal: "Family homes, commercial overflow, long-term",
  },
  {
    sqft: 200,
    label: "200 sqft",
    name: "XL Unit",
    icon: "\ud83c\udfdb\ufe0f",
    priceFrom: 420,
    items: [
      "4-5 bedroom house contents",
      "Full office relocation",
      "Retail stock and fixtures",
      "Vehicles and large equipment",
      "Archive and document storage",
    ],
    fits: "Approx. two 7.5t lorries",
    ideal: "Large homes, commercial clients, long-term",
  },
];

function StorageSizeGuide() {
  const [active, setActive] = useState(0);
  const tier = SIZE_TIERS[active];
  const incVat = tier.priceFrom * 1.2;

  return (
    <section style={{ background: CHARCOAL }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>Storage Size Guide</span>
            <span className="h-px w-8" style={{ background: GOLD }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
            How Much Space Do You Need?
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "rgba(245,243,239,0.6)" }}>
            Not sure what size unit to choose? Use our guide to find the right fit. All prices include VAT.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SIZE_TIERS.map((t, i) => (
            <button
              key={t.sqft}
              onClick={() => setActive(i)}
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border"
              style={{
                borderColor: active === i ? GOLD : "rgba(184,150,12,0.3)",
                background: active === i ? GOLD : "transparent",
                color: active === i ? CHARCOAL : "rgba(245,243,239,0.7)",
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(184,150,12,0.25)` }}
        >
          {/* Left: what fits */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{tier.icon}</span>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>{tier.label}</p>
                <h3 className="text-2xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>{tier.name}</h3>
              </div>
            </div>
            <p className="text-xs mb-5 mt-2" style={{ color: "rgba(245,243,239,0.5)" }}>{tier.fits}</p>

            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD }}>What fits inside:</p>
            <ul className="space-y-2">
              {tier.items.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(245,243,239,0.8)" }}>
                  <CheckCircle2 size={14} style={{ color: GOLD, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs" style={{ color: "rgba(245,243,239,0.45)" }}>
              Ideal for: <span style={{ color: "rgba(245,243,239,0.7)" }}>{tier.ideal}</span>
            </p>
          </div>

          {/* Right: pricing + CTA */}
          <div className="p-8 md:p-10 flex flex-col justify-between" style={{ borderLeft: "1px solid rgba(184,150,12,0.15)" }}>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GOLD }}>Starting from (inc. VAT)</p>
              <p className="text-5xl font-bold mb-1" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
                &pound;{incVat.toFixed(0)}
                <span className="text-base font-normal ml-1" style={{ color: "rgba(245,243,239,0.5)" }}>/month</span>
              </p>
              <p className="text-xs mb-8" style={{ color: "rgba(245,243,239,0.4)" }}>
                &pound;{tier.priceFrom}/month ex. VAT &bull; No fixed contract
              </p>

              <div className="space-y-3">
                {[
                  "Fixed monthly price - no hidden fees",
                  "24/7 CCTV and on-site security",
                  "Collection and delivery available",
                  "Itemised inventory included",
                ].map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
                    <CheckCircle2 size={14} style={{ color: GOLD, flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact">
                <button
                  className="w-full flex items-center justify-center gap-2 py-3.5 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                  style={{ background: GOLD, color: CHARCOAL }}
                >
                  Get a Free Quote <ArrowRight size={15} />
                </button>
              </Link>
              <a href="tel:02085218000">
                <button
                  className="w-full flex items-center justify-center gap-2 py-3.5 font-semibold text-sm tracking-widest uppercase border transition-all hover:bg-white/5"
                  style={{ borderColor: "rgba(184,150,12,0.4)", color: "rgba(245,243,239,0.8)" }}
                >
                  <Phone size={14} /> Call 0208 521 8000
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Price Calculator ────────────────────────────────────────────────────────────────
const PRICE_PER_SQFT_PER_WEEK = 1.75; // £ ex VAT
const VAT_RATE = 0.20;

function StoragePriceCalculator() {
  const [sqft, setSqft] = useState(50);
  const [weeks, setWeeks] = useState(4);

  const exVat = sqft * PRICE_PER_SQFT_PER_WEEK * weeks;
  const incVat = exVat * (1 + VAT_RATE);

  const presets = [
    { label: "25 sqft", desc: "Small room", value: 25 },
    { label: "50 sqft", desc: "1-bed flat", value: 50 },
    { label: "100 sqft", desc: "2-bed house", value: 100 },
    { label: "200 sqft", desc: "4-bed house", value: 200 },
  ];

  return (
    <section style={{ background: SAND }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>Storage Price Calculator</span>
            <span className="h-px w-8" style={{ background: GOLD }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
            Estimate Your Storage Cost
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "#4a4a4a" }}>
            Use our instant calculator to get an indicative price. All prices include VAT. Final quote provided after a free survey.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          style={{ background: CHARCOAL }}
        >
          <div className="p-8 md:p-10">
            {/* Size presets */}
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Select Space Size</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {presets.map(p => (
                <button
                  key={p.value}
                  onClick={() => setSqft(p.value)}
                  className="py-3 px-2 rounded-lg text-center transition-all duration-200 border"
                  style={{
                    borderColor: sqft === p.value ? GOLD : "rgba(184,150,12,0.25)",
                    background: sqft === p.value ? "rgba(184,150,12,0.15)" : "rgba(255,255,255,0.04)",
                    color: sqft === p.value ? GOLD : "rgba(245,243,239,0.7)",
                  }}
                >
                  <div className="font-bold text-sm">{p.label}</div>
                  <div className="text-xs mt-0.5 opacity-70">{p.desc}</div>
                </button>
              ))}
            </div>

            {/* Custom sqft slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium" style={{ color: "rgba(245,243,239,0.8)" }}>Custom size: <span style={{ color: GOLD }}>{sqft} sqft</span></label>
              </div>
              <input
                type="range" min={10} max={500} step={5} value={sqft}
                onChange={e => setSqft(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: GOLD }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(245,243,239,0.4)" }}>
                <span>10 sqft</span><span>500 sqft</span>
              </div>
            </div>

            {/* Duration slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium" style={{ color: "rgba(245,243,239,0.8)" }}>Duration: <span style={{ color: GOLD }}>{weeks} week{weeks !== 1 ? "s" : ""}</span></label>
              </div>
              <input
                type="range" min={1} max={52} step={1} value={weeks}
                onChange={e => setWeeks(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: GOLD }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(245,243,239,0.4)" }}>
                <span>1 week</span><span>52 weeks</span>
              </div>
            </div>

            {/* Price result */}
            <div className="rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: "rgba(184,150,12,0.12)", border: `1px solid ${GOLD}` }}>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: GOLD }}>Estimated Total (inc. VAT)</p>
                <p className="text-4xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
                  £{incVat.toFixed(0)}
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(245,243,239,0.5)" }}>£{exVat.toFixed(0)} ex. VAT &bull; {sqft} sqft &bull; {weeks} week{weeks !== 1 ? "s" : ""}</p>
              </div>
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-widest uppercase transition-all hover:brightness-110 whitespace-nowrap"
                  style={{ background: GOLD, color: CHARCOAL }}
                >
                  Get Exact Quote <ArrowRight size={15} />
                </button>
              </Link>
            </div>

            <p className="text-xs text-center mt-4" style={{ color: "rgba(245,243,239,0.35)" }}>
              Indicative price only. Based on £{PRICE_PER_SQFT_PER_WEEK.toFixed(2)}/sqft/week. Final price confirmed after free survey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Phone,
      title: "Get a Free Quote",
      desc: "Call us or fill in the form. We'll confirm your space requirements and provide a fixed price within the hour - no hidden fees, no surprises.",
    },
    {
      num: "02",
      icon: Truck,
      title: "We Collect",
      desc: "Our uniformed team arrives at your door, carefully wraps and loads your belongings, and transports them directly to our secure facility.",
    },
    {
      num: "03",
      icon: Warehouse,
      title: "We Store Securely",
      desc: "Your items are catalogued, photographed and stored in a clean, dry, 24/7 CCTV-monitored unit. Access your inventory list anytime online.",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "We Deliver Back",
      desc: "When you're ready, simply call us. We'll deliver everything back to your door - to the room of your choice - on the date that suits you.",
    },
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>How It Works</span>
            <span className="h-px w-8" style={{ background: GOLD }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
            Storage Made Simple in 4 Steps
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="relative p-7 rounded-xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(184,150,12,0.12)] cursor-default"
              style={{ background: SAND, border: "1px solid rgba(184,150,12,0.2)" }}
            >
              <div className="absolute top-5 right-5 text-5xl font-bold leading-none select-none" style={{ color: "rgba(184,150,12,0.12)", fontFamily: "'Cormorant Garamond', serif" }}>{step.num}</div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(184,150,12,0.12)" }}>
                <step.icon size={22} style={{ color: GOLD }} />
              </div>
              <h3 className="font-bold text-base" style={{ color: CHARCOAL }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────────────
export default function StoragePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: SAND }}>
      <SEOHead
        title="Secure Storage London | Short & Long Term | Octagon Removals"
        description="Secure storage solutions in London. Short and long-term storage for homes and businesses. Fixed price, fully insured. Call 0208 521 8000 for a free quote."
        canonical="/storage"
      />
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
            London Storage That Comes to You, and Comes Back When You're Ready
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: "rgba(245,243,239,0.8)" }}
          >
            We collect from your door, store everything securely in our monitored facility, and deliver it back on the day you choose. No self-storage faff, no hidden fees, no chasing anyone.
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
                { icon: Box,    label: "Custom Wooden Crating" },
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
              <p className="mt-4 text-sm italic text-[#8a7a5a]">Because the things you simply don't want to part with deserve a safe place to wait.</p>
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
                desc: "Life rarely moves in a straight line. Whether you're between properties, mid-renovation, downsizing, or simply reclaiming space at home, having a secure, flexible place for your belongings removes one of the biggest pressures from an already demanding process - a secure storage space. We store everything from single items to full household contents, with every piece handled, wrapped and protected to the same standard we'd apply on moving day itself. What goes into storage comes out exactly as it went in, that's not a promise, it's how we operate. Your belongings carry value beyond the financial, and we treat them accordingly. Monitored around the clock, access-controlled and managed by the same team that moved you, there are no handoffs to third parties and no compromises on security. When you're ready, we bring everything back and place it exactly where you need it - no extra charges, no chasing, no stress.",
              },
              {
                img: STORAGE8_IMG,
                title: "Commercial Storage",
                desc: "For commercial clients, we offer secure, dedicated storage for your business requirements. Every unit is monitored 24/7, access-controlled, and handled exclusively by our trained team - not a self-storage facility where anyone can walk in. Every item stored long-term is professionally wrapped, reinforced and protected, built to withstand the weight of time, not just the journey. We work with businesses that can't afford delays, damaged stock or missing assets. Full inventory management, flexible terms and a dedicated point of contact mean your storage works as hard as your business does. From a single pallet to a full office clearance, we scale with you, making room for your expansion.",
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

            {/* Contact Form card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="bg-white overflow-hidden flex flex-col"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-1" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
                  Get a Storage Quote
                </h3>
                <p className="text-sm mb-5" style={{ color: "#6b6b6b" }}>Tell us what you need and we'll get back to you within the hour.</p>
                <StorageContactForm />
              </div>
            </motion.div>
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
                Our Dedicated Storage Features
              </span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
              Everything Included as Standard
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 border flex flex-col cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(184,150,12,0.18)]"
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

      {/* ── HOW IT WORKS ── */}
      <HowItWorks />

      {/* ── SIZE GUIDE ── */}
      <StorageSizeGuide />

      {/* ── PRICE CALCULATOR ── */}
      <StoragePriceCalculator />

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
              Residential & Commercial Storage In London
            </h2>
          </motion.div>

          {/* Side-by-side: video LEFT, photos RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* LEFT - video */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="rounded overflow-hidden" style={{ height: "520px" }}>
              <video
                src={STORAGE_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded"
              />
            </motion.div>

            {/* RIGHT - photo slider */}
            <FacilitiesSlider />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOLD }}>What Our Clients Say</span>
              <span className="h-px w-8" style={{ background: GOLD }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif" }}>
              Trusted by Hundreds of London Families &amp; Businesses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Kensington",
                date: "March 2025",
                text: "We needed storage at short notice during a chain break and Octagon were absolutely brilliant. Everything was collected, catalogued and returned in perfect condition three months later. Completely stress-free - I wouldn't use anyone else.",
              },
              {
                name: "James T.",
                location: "Canary Wharf",
                date: "January 2025",
                text: "Octagon handled our entire office relocation and stored our equipment over the Christmas period. The inventory management was meticulous and the team were professional throughout. Not a single item was damaged or missing. Exceptional service.",
              },
              {
                name: "Emma R.",
                location: "Richmond",
                date: "February 2025",
                text: "I was renovating and needed somewhere safe for my furniture for six weeks. Octagon collected everything, stored it securely, and delivered it back on the exact day I asked. The fixed price meant no surprises. Highly recommend.",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex flex-col p-7 rounded"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,150,12,0.2)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 20 20" fill="#B8960C"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(245,243,239,0.75)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(184,150,12,0.15)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: GOLD, color: CHARCOAL }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F5F3EF" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "rgba(184,150,12,0.8)" }}>{t.location} &middot; {t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trustpilot CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: "rgba(245,243,239,0.55)" }}>Rated 4.9 / 5 from 500+ verified reviews</p>
            <a
              href="https://www.trustpilot.com/review/octagonremovals.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase transition-all hover:brightness-110"
              style={{ background: GOLD, color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
            >
              Read All Reviews on Trustpilot
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ WIDGET ── */}
      <StorageFaqWidget />

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

      {/* ── AI STORAGE CHATBOT ── */}
      <StorageChatbot />
    </div>
  );
}

