/*
 * SERVICES PAGE — Octagon Removals
 * Shows all 11 services grouped by Commercial / Residential / Specialised.
 * Each card links to its dedicated service page.
 */
import { Link } from "wouter";
import { Truck, Package, Wrench, Sparkles, Trash2, Warehouse, Building2, ClipboardList, Users, Music, Globe, Phone, ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ICON_MAP: Record<string, React.ElementType> = {
  Truck, Package, Wrench, Sparkles, Trash2, Warehouse, Building2, ClipboardList, Users, Music, Globe,
};

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

const CATEGORIES = [
  {
    key: "commercial",
    label: "Commercial Services",
    desc: "Professional solutions for businesses of all sizes — office relocations, clearances, and on-site logistics.",
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

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
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
              <span style={{ color: "#B8960C" }}>Our Services</span>
            </div>
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">What We Offer</span>
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
              style={{ backgroundColor: catIdx % 2 === 0 ? "#F5F3EF" : "#0F1923" }}
            >
              <div className="container">
                {/* Category header */}
                <div className="mb-12">
                  <span className="eyebrow block mb-3">{cat.label}</span>
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: catIdx % 2 === 0 ? "#0F1923" : "#F5F3EF" }}>
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
                            (e.currentTarget as HTMLElement).style.borderColor = "#B8960C";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = catIdx % 2 === 0 ? "#e8e4dc" : "rgba(184,150,12,0.15)";
                          }}
                        >
                          <div className="w-11 h-11 flex items-center justify-center mb-5"
                            style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}>
                            <Icon size={20} style={{ color: "#B8960C" }} />
                          </div>
                          <h3 className="text-xl font-semibold mb-2"
                            style={{ fontFamily: "Cormorant Garamond, serif", color: catIdx % 2 === 0 ? "#0F1923" : "#F5F3EF" }}>
                            {service.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-5"
                            style={{ color: catIdx % 2 === 0 ? "#5a6a7a" : "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                            {service.excerpt}
                          </p>
                          <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
                            style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
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

        {/* CTA */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: "#0F1923" }}>
          <div className="container text-center">
            <span className="eyebrow block mb-4">Ready to Move?</span>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              Get Your Free, Fixed-Price Quote
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto"
              style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
              No hidden fees, no surprises — just a seamless move from start to finish.
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
      <Footer />
    </>
  );
}
