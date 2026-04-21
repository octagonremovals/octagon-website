/*
 * LOCATIONS HUB PAGE — Octagon Removals
 * Design: Premium charcoal/gold. Grid of all 17 location cards.
 * Each card links to /locations/:slug for the individual location page.
 * Fonts: Cormorant Garamond (headings), DM Sans (body).
 */
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locationsData } from "@/data/locations";
const allLocations = Object.values(locationsData);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

// Separate component so the card <div> is never wrapped in a <Link> (avoids nested <a> with tel: link)
function LocationGrid() {
  const [, navigate] = useLocation();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {allLocations.map((loc, i) => (
        <motion.div
          key={loc.slug}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div
            role="button"
            tabIndex={0}
            className="p-6 h-full flex flex-col group cursor-pointer transition-all duration-200"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e8e4dc" }}
            onClick={() => navigate(`/locations/${loc.slug}`)}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/locations/${loc.slug}`)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#B8960C";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#e8e4dc";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "#B8960C" }} />
                <h3
                  className="font-semibold text-lg group-hover:text-[#B8960C] transition-colors"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#0F1923" }}
                >
                  {loc.name}
                </h3>
              </div>
              <ChevronRight
                size={14}
                className="mt-1 transition-transform group-hover:translate-x-1"
                style={{ color: "#B8960C" }}
              />
            </div>

            {/* Borough tags */}
            <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
              {loc.boroughs.slice(0, 4).map((b) => (
                <span
                  key={b}
                  className="text-xs px-2 py-0.5"
                  style={{
                    backgroundColor: "rgba(184,150,12,0.07)",
                    border: "1px solid rgba(184,150,12,0.18)",
                    color: "#8a7040",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {b}
                </span>
              ))}
              {loc.boroughs.length > 4 && (
                <span className="text-xs px-2 py-0.5" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                  +{loc.boroughs.length - 4} more
                </span>
              )}
            </div>

            {/* Phone — standalone <a>, NOT inside any other <a> */}
            <div className="flex items-center gap-1.5 pt-3 border-t" style={{ borderColor: "#e8e4dc" }}>
              <Phone size={11} style={{ color: "#B8960C" }} />
              <a
                href={`tel:${loc.phone.replace(/\s/g, "")}`}
                className="text-xs font-semibold transition-colors"
                style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B8960C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#0F1923")}
              >
                {loc.phone}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Locations() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{ minHeight: "48vh", paddingTop: "104px", paddingBottom: "4rem", backgroundColor: "#0F1923" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.8) 100%)" }}
        />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="eyebrow block mb-4">Areas We Serve</span>
            <h1
              className="text-4xl lg:text-6xl font-semibold mb-5"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F5F3EF" }}
            >
              London & M25
              <br />
              <em className="not-italic" style={{ color: "#B8960C" }}>Removals Coverage</em>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}
            >
              We serve all London boroughs and the wider M25 corridor. Select your area below for
              dedicated local information, local phone numbers, and your free fixed-price quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gold divider */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #B8960C 30%, #D4AF37 50%, #B8960C 70%, transparent 100%)" }} />

      {/* Coverage badges */}
      <div style={{ backgroundColor: "#0F1923" }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["All London Boroughs", "M25 Corridor", "Surrey & Kent", "Essex & Hertfordshire", "International Moves"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={13} style={{ color: "#B8960C" }} />
                <span className="text-xs font-semibold" style={{ color: "#c8d0db", fontFamily: "DM Sans, sans-serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location cards */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">{allLocations.length} Dedicated Service Areas</span>
            <h2
              className="text-3xl lg:text-4xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#0F1923" }}
            >
              Find Your Local Octagon Team
            </h2>
          </div>

          <LocationGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#0F1923" }}>
        <div className="container text-center">
          <span className="eyebrow block mb-4">Not Sure Which Area?</span>
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-5"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F5F3EF" }}
          >
            We Cover All of London & the M25
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
            If you're unsure whether we serve your area, just call us and we'll confirm immediately.
            We cover every London borough and the full M25 corridor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/get-quote">
              <span className="btn-gold px-10 py-4 text-sm">Get Free Quote</span>
            </Link>
            <a href="tel:02085218000" className="btn-ghost-gold px-10 py-4 text-sm">
              <Phone size={14} />
              0208 521 8000
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <div className="h-16 lg:hidden" />
    </div>
  );
}
