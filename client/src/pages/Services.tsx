/*
 * SERVICES PAGE - Octagon Removals
 * Shows all services grouped by Commercial / Residential / Specialised.
 * Each card links to its dedicated service page.
 * Sections: Hero, Services by category, Why Octagon, FAQ, CTA.
 * Sticky floating Get Free Quote button on scroll.
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Truck, Package, Wrench, Sparkles, Trash2, Warehouse, Building2, ClipboardList, Users, Music, Globe, Phone, ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import { SERVICES, COMPANY } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOLD = "#B8960C";
const DARK = "#0F1923";
const LIGHT_BG = "#F5F3EF";

const ICON_MAP: Record<string, React.ElementType> = {
  Truck, Package, Wrench, Sparkles, Trash2, Warehouse, Building2, ClipboardList, Users, Music, Globe,
};

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

const CATEGORIES = [
  {
    key: "commercial",
    label: "Commercial Services",
    desc: "Professional solutions for businesses of all sizes - office relocations, clearances, and on-site logistics.",
  },
  {
    key: "residential",
    label: "Residential Services",
    desc: "Full-service home moves across London and the M25, from packing to storage and everything in between.",
  },
  {
    key: "specialised",
    label: "Specialised Services",
    desc: "Expert handling for unique items and complex moves that require specialist knowledge and equipment.",
  },
];

const STATS = [
  { value: "15K+", label: "Moves completed" },
  { value: "4.9/5", label: "Trustpilot rating" },
  { value: "500+", label: "Verified reviews" },
  { value: "Since 2015", label: "Serving London" },
];

const FAQS = [
  {
    q: "Do I have to book each service separately?",
    a: "No. Most clients book several services together as part of one move. We give you one quote that covers everything you need, packing, removals, storage, cleaning, furniture dismantling. One payment, one team, one moving day.",
  },
  {
    q: "Do you work across all of London?",
    a: "Yes. We cover all London boroughs and the wider M25 area including parts of Essex, Kent, Surrey, Hertfordshire and Middlesex. If you are not sure whether we cover your area, call us and we will tell you within minutes.",
  },
  {
    q: "How much do your services cost?",
    a: "Every move is different so we give fixed-price quotes based on your specific requirements. We assess your home or office either in person or by video call and give you a price that covers everything we agreed. No hidden charges on the day.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry comprehensive goods-in-transit insurance and public liability insurance on every job. High-value items such as artwork, antiques and pianos have additional specialist cover.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "For standard house moves we recommend at least 2 to 3 weeks. For international removals, piano moves or large office relocations, 4 to 6 weeks gives you the most flexibility. That said, we keep capacity for shorter notice jobs. Call us and we will tell you what is available.",
  },
  {
    q: "What areas do you cover for international removals?",
    a: "We move households from London to all European countries. France, Germany, Spain, Poland, Italy, Netherlands, Belgium, Switzerland and more. Exclusive vehicle, no shared loads, fixed price includes ferry, fuel, insurance, road tolls and customs agent fees.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#e8e4dc" }}>
      {FAQS.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span
              className="text-base font-semibold leading-snug"
              style={{ fontFamily: "Cormorant Garamond, serif", color: DARK, fontSize: "1.1rem" }}
            >
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              style={{
                color: GOLD,
                flexShrink: 0,
                transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>
          {open === i && (
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const ctaTop = ctaRef.current?.getBoundingClientRect().top ?? window.innerHeight;
      setShowSticky(heroBottom < 0 && ctaTop > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO meta */}
      <title>Our Services | London Removals, Storage and International Moves | Octagon Removals</title>
      <meta name="description" content="Full-service removals across London and the M25. Packing, storage, furniture dismantling, piano moving and international removals to Europe. Fixed price, fully insured. Call 0208 521 8000." />

      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: LIGHT_BG }}>

        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden" ref={heroRef}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.75) 100%)" }}
          />
          <div className="container relative z-10">
            <div className="flex items-center gap-2 mb-6 text-xs"
              style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: GOLD }}>Our Services</span>
            </div>
            <div className="max-w-3xl">
              <span className="eyebrow mb-4">What We Offer</span>
              <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                Our Services
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                From single-item moves to full international relocations, Octagon Removals provides a comprehensive range of premium removal and logistics services across London and the M25.
              </p>
            </div>
          </div>
        </section>

        {/* Services by category */}
        {CATEGORIES.map((cat, catIdx) => {
          const catServices = SERVICES.filter((s) => s.category === cat.key);
          return (
            <section
              key={cat.key}
              className="py-16 lg:py-24"
              style={{ backgroundColor: catIdx % 2 === 0 ? LIGHT_BG : DARK }}
            >
              <div className="container">
                {/* Category header */}
                <div className="mb-12">
                  <span className="eyebrow mb-3">{cat.label}</span>
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: catIdx % 2 === 0 ? DARK : "#F5F3EF" }}>
                      {cat.label}
                    </h2>
                    <p className="text-sm max-w-md"
                      style={{ color: catIdx % 2 === 0 ? "#5a6a7a" : "rgba(245,243,239,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-4 h-px w-full" style={{ backgroundColor: catIdx % 2 === 0 ? "#e8e4dc" : "rgba(184,150,12,0.2)" }} />
                </div>

                {/* Service cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catServices.map((service) => {
                    const Icon = ICON_MAP[service.icon] || Truck;
                    return (
                      <Link key={service.slug} href={`/services/${service.slug}`}>
                        <div
                          className="p-7 h-full group cursor-pointer transition-all duration-300"
                          style={{
                            backgroundColor: catIdx % 2 === 0 ? "#fff" : "#1A2535",
                            border: `1px solid ${catIdx % 2 === 0 ? "#e8e4dc" : "rgba(184,150,12,0.15)"}`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = GOLD;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = catIdx % 2 === 0 ? "#e8e4dc" : "rgba(184,150,12,0.15)";
                          }}
                        >
                          <div className="w-11 h-11 flex items-center justify-center mb-5"
                            style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}>
                            <Icon size={20} style={{ color: GOLD }} />
                          </div>
                          <h3 className="text-xl font-semibold mb-2"
                            style={{ fontFamily: "Cormorant Garamond, serif", color: catIdx % 2 === 0 ? DARK : "#F5F3EF" }}>
                            {service.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-5"
                            style={{ color: catIdx % 2 === 0 ? "#5a6a7a" : "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                            {service.excerpt}
                          </p>
                          <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
                            style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                            Learn More <ArrowRight size={12} />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* SECTION 1: Why Octagon */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: DARK }}>
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="eyebrow mb-3">WHY OCTAGON</span>
              <h2 className="text-3xl lg:text-5xl font-semibold mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                One Company. Every Part of Your Move.
              </h2>
              <p className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                Most people need more than just a van on moving day. They need someone to pack the kitchen, dismantle the wardrobe, clean the old flat, store the things that do not fit yet, and move the piano without scratching the floor. Most removal companies do one or two of these things. We do all of them.
              </p>
              <p className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                Every service on this page is carried out by our own team using our own vehicles and equipment. No subcontractors, no handoffs, no explaining yourself twice. One fixed price covers everything you book. One point of contact from first call to final delivery.
              </p>
              <p className="text-base leading-relaxed"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                We have been doing this across London and the M25 since 2017. Over 15K completed moves. 4.9 out of 5 on Trustpilot and Google Reviews from 500 verified reviews.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-7 text-center"
                  style={{ backgroundColor: "#1A2535", border: "1px solid rgba(184,150,12,0.2)" }}
                >
                  <div
                    className="text-3xl lg:text-4xl font-semibold mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: GOLD }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "rgba(245,243,239,0.6)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: LIGHT_BG }}>
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="eyebrow mb-3">COMMON QUESTIONS</span>
              <h2 className="text-3xl lg:text-5xl font-semibold mb-10"
                style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}>
                Questions About Our Services
              </h2>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-16 lg:py-24" style={{ backgroundColor: DARK }}>
          <div className="container text-center" style={{ borderTop: "1px solid rgba(184,150,12,0.2)", paddingTop: "4rem" }}>
            <span className="eyebrow mb-4">Ready to Move?</span>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              Get Your Free, Fixed-Price Quote
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto"
              style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
              No hidden fees, no surprises, just a straightforward move from start to finish.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/get-quote">
                <span className="btn-gold px-10 py-4 cursor-pointer">Get Free Quote</span>
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost-gold px-10 py-4 flex items-center gap-2">
                <Phone size={14} />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: Sticky floating CTA button */}
      {showSticky && (
        <Link href="/get-quote">
          <div
            className="fixed right-5 bottom-24 z-50 cursor-pointer"
            style={{
              backgroundColor: GOLD,
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 20px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              boxShadow: "0 4px 20px rgba(184,150,12,0.4)",
            }}
          >
            Get Free Quote
          </div>
        </Link>
      )}

      <Footer />
    </>
  );
}

