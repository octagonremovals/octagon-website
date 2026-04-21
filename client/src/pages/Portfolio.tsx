import SEOHead from "@/components/SEOHead";
/*
 * PORTFOLIO PAGE — Octagon Removals
 * Design: Premium charcoal/gold brand. Filterable masonry grid.
 * All 43 real portfolio items scraped from the live WordPress site.
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin, Tag, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const locations = useMemo(() => {
    const locs = Array.from(new Set(portfolioItems.map(p => p.location))).sort();
    return ["All", ...locs];
  }, []);

  const filtered = useMemo(() => {
    return portfolioItems.filter(item => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchLoc = activeLocation === "All" || item.location === activeLocation;
      const matchSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchLoc && matchSearch;
    });
  }, [activeCategory, activeLocation, searchQuery]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1923" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        backgroundColor: "#0F1923",
        borderBottom: "1px solid rgba(184,150,12,0.2)",
        padding: "4rem 0 3rem",
      }}>
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span style={{
              color: "#B8960C", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              display: "block", marginBottom: "1rem",
            }}>
              Our Work
            </span>
            <h1 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              color: "#F5F3EF", fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 600, lineHeight: 1.05, marginBottom: "1.25rem",
            }}>
              Real Moves.<br />Real Results.
            </h1>
            <p style={{ color: "#8A9BB0", fontSize: "15px", lineHeight: 1.8, maxWidth: "560px" }}>
              Browse our portfolio of completed moves across London and the M25. Every project is a testament to our team's care, precision, and professionalism.
            </p>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "flex", gap: "2.5rem", flexWrap: "wrap",
            marginTop: "2.5rem", paddingTop: "2rem",
            borderTop: "1px solid rgba(184,150,12,0.15)",
          }}>
            {[
              ["43+", "Portfolio Projects"],
              ["17", "Areas Covered"],
              ["10,000+", "Moves Completed"],
              ["4.9★", "Average Rating"],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#B8960C", fontSize: "1.8rem", fontWeight: 700 }}>{num}</div>
                <div style={{ color: "#8A9BB0", fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        backgroundColor: "#111D2B",
        borderBottom: "1px solid rgba(184,150,12,0.15)",
        padding: "1.5rem 0",
        position: "sticky", top: "64px", zIndex: 40,
      }}>
        <div className="container">
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "0 0 220px" }}>
              <Search size={14} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#8A9BB0" }} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: "100%", padding: "8px 12px 8px 32px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(184,150,12,0.2)",
                  color: "#F5F3EF", fontSize: "12px",
                  outline: "none",
                }}
              />
            </div>

            {/* Category filter */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {portfolioCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "6px 14px",
                    backgroundColor: activeCategory === cat ? "#B8960C" : "transparent",
                    color: activeCategory === cat ? "#0F1923" : "#8A9BB0",
                    border: `1px solid ${activeCategory === cat ? "#B8960C" : "rgba(184,150,12,0.2)"}`,
                    fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Location filter */}
            <select
              value={activeLocation}
              onChange={e => setActiveLocation(e.target.value)}
              style={{
                padding: "7px 12px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,12,0.2)",
                color: "#F5F3EF", fontSize: "11px",
                outline: "none", cursor: "pointer",
              }}
            >
              {locations.map(loc => (
                <option key={loc} value={loc} style={{ backgroundColor: "#111D2B" }}>{loc === "All" ? "All Locations" : loc}</option>
              ))}
            </select>

            {/* Count */}
            <span style={{ color: "#8A9BB0", fontSize: "11px", marginLeft: "auto" }}>
              Showing <strong style={{ color: "#B8960C" }}>{filtered.length}</strong> of {portfolioItems.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: "center", padding: "5rem 0", color: "#8A9BB0" }}
              >
                <p style={{ fontSize: "1.1rem" }}>No projects match your filters.</p>
                <button
                  onClick={() => { setActiveCategory("All"); setActiveLocation("All"); setSearchQuery(""); }}
                  style={{ marginTop: "1rem", color: "#B8960C", fontSize: "13px", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5px",
              }}>
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                    onMouseEnter={() => setHoveredId(item.slug)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3" }}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        transform: hoveredId === item.slug ? "scale(1.06)" : "scale(1)",
                        display: "block",
                      }}
                    />

                    {/* Overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: hoveredId === item.slug
                        ? "linear-gradient(to top, rgba(10,15,25,0.95) 0%, rgba(10,15,25,0.5) 60%, rgba(10,15,25,0.1) 100%)"
                        : "linear-gradient(to top, rgba(10,15,25,0.85) 0%, rgba(10,15,25,0.2) 60%, transparent 100%)",
                      transition: "background 0.3s ease",
                    }} />

                    {/* Category badge */}
                    <div style={{
                      position: "absolute", top: "12px", left: "12px",
                      backgroundColor: "rgba(184,150,12,0.9)",
                      color: "#0F1923", fontSize: "9px", fontWeight: 700,
                      padding: "3px 9px", letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      {item.category}
                    </div>

                    {/* Content */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      padding: "1.25rem",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }}>
                        <MapPin size={11} style={{ color: "#B8960C" }} />
                        <span style={{ color: "#B8960C", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.location}</span>
                      </div>
                      <h3 style={{
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        color: "#F5F3EF", fontSize: "1.05rem", fontWeight: 600,
                        lineHeight: 1.3, margin: 0,
                      }}>
                        {item.title}
                      </h3>

                      {/* View link — appears on hover */}
                      <div style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        marginTop: "0.75rem",
                        opacity: hoveredId === item.slug ? 1 : 0,
                        transform: hoveredId === item.slug ? "translateY(0)" : "translateY(8px)",
                        transition: "all 0.25s ease",
                      }}>
                        <span style={{ color: "#B8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>View Case Study</span>
                        <ExternalLink size={11} style={{ color: "#B8960C" }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: "#B8960C",
        padding: "3.5rem 0",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#0F1923", fontSize: "2rem", fontWeight: 600, margin: 0, marginBottom: "0.5rem" }}>
              Ready to Plan Your Move?
            </h2>
            <p style={{ color: "rgba(15,25,35,0.7)", fontSize: "14px", margin: 0 }}>
              Get a free, no-obligation fixed-price quote in minutes.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/get-quote" style={{
              backgroundColor: "#0F1923", color: "#B8960C",
              fontSize: "12px", fontWeight: 700, padding: "14px 32px",
              letterSpacing: "0.12em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block",
            }}>
              Get Free Quote
            </a>
            <a href="tel:02085218000" style={{
              backgroundColor: "transparent", color: "#0F1923",
              fontSize: "12px", fontWeight: 700, padding: "14px 32px",
              letterSpacing: "0.12em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block",
              border: "1px solid rgba(15,25,35,0.4)",
            }}>
              0208 521 8000
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
