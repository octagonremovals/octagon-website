/**
 * BLOG LISTING PAGE — Octagon Removals
 * SEO-optimised blog with category filtering.
 * Design: Premium editorial style matching brand identity.
 */
import { useState } from "react";
import { Link } from "wouter";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories, type BlogPost } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";

const GOLD = "#B8960C";
const CHARCOAL = "#0F1923";

const CATEGORY_COLOURS: Record<BlogPost["category"], string> = {
  "Moving Tips": "#2563EB",
  "Packing Guide": "#059669",
  "London Guide": "#7C3AED",
  "Cost Guide": "#B8960C",
  "Storage": "#DC2626",
  "Office Moves": "#0F1923",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogPost["category"] | "All">("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts[0];
  const rest = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <SEOHead
        title="Removals Blog | Moving Tips, Guides & Advice | Octagon Removals"
        description="Expert moving advice from London's premium removals company. Packing guides, area guides, cost breakdowns, and practical tips to make your move stress-free."
        canonical="https://octagonremovals.co.uk/blog"
      />

      <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#F5F3EF", minHeight: "100vh" }}>

        {/* ── HERO BANNER ──────────────────────────────────────────────────── */}
        <section
          className="py-20 px-8 md:px-14 lg:px-20"
          style={{ backgroundColor: CHARCOAL }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
              >
                Octagon Insights
              </span>
            </div>
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.15,
              }}
            >
              Moving Advice from<br />
              <em style={{ color: GOLD }}>London's Experts</em>
            </h1>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}
            >
              Practical guides, honest area reviews, and cost breakdowns — everything you need to plan a stress-free move in London and the M25.
            </p>
          </div>
        </section>

        {/* ── FEATURED ARTICLE ─────────────────────────────────────────────── */}
        <section className="px-8 md:px-14 lg:px-20 -mt-8">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featured.slug}`}>
              <div
                className="relative overflow-hidden cursor-pointer group"
                style={{
                  border: `1px solid rgba(184,150,12,0.2)`,
                  boxShadow: "0 4px 30px rgba(0,0,0,0.12)",
                }}
              >
                {/* Hero image */}
                <div className="relative h-[340px] md:h-[420px] overflow-hidden">
                  <img
                    src={featured.heroImage}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.4) 50%, transparent 100%)",
                    }}
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-5 left-5 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: CATEGORY_COLOURS[featured.category],
                      color: "#fff",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {featured.category}
                  </div>
                  <div
                    className="absolute top-5 right-5 px-3 py-1 text-xs uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(184,150,12,0.9)",
                      color: "#fff",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Featured
                  </div>
                </div>

                {/* Content overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-8"
                  style={{ background: "transparent" }}
                >
                  <h2
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.25,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="mt-2 text-sm max-w-2xl"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {featured.author} · {formatDate(featured.publishedAt)}
                    </span>
                    <div className="flex items-center gap-1" style={{ color: GOLD }}>
                      <Clock size={12} />
                      <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {featured.readTime} min read
                      </span>
                    </div>
                    <span
                      className="ml-auto text-xs flex items-center gap-1 transition-all group-hover:gap-2"
                      style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
                    >
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── CATEGORY FILTER ──────────────────────────────────────────────── */}
        <section className="px-8 md:px-14 lg:px-20 mt-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {(["All", ...blogCategories] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as BlogPost["category"] | "All")}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    backgroundColor:
                      activeCategory === cat ? CHARCOAL : "transparent",
                    color:
                      activeCategory === cat ? "#fff" : "#666",
                    border: `1px solid ${activeCategory === cat ? CHARCOAL : "#ddd"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTICLE GRID ─────────────────────────────────────────────────── */}
        <section className="px-8 md:px-14 lg:px-20 mt-8 pb-24">
          <div className="max-w-6xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center py-20" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
                No articles in this category yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article
                      className="group cursor-pointer bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        border: "1px solid #e8e4de",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
                          style={{
                            backgroundColor: CATEGORY_COLOURS[post.category],
                            color: "#fff",
                            fontFamily: "DM Sans, sans-serif",
                          }}
                        >
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-xs"
                            style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}
                          >
                            {formatDate(post.publishedAt)}
                          </span>
                          <div className="flex items-center gap-1" style={{ color: GOLD }}>
                            <Clock size={11} />
                            <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
                              {post.readTime} min
                            </span>
                          </div>
                        </div>

                        <h3
                          className="mb-2 leading-snug"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                            fontSize: "1.15rem",
                            fontWeight: 600,
                            color: CHARCOAL,
                          }}
                        >
                          {post.title}
                        </h3>

                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{
                            color: "#666",
                            fontFamily: "DM Sans, sans-serif",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {post.excerpt}
                        </p>

                        <div
                          className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                          style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
                        >
                          Read More <ChevronRight size={12} />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA STRIP ────────────────────────────────────────────────────── */}
        <section
          className="py-14 px-8 md:px-14 lg:px-20"
          style={{ backgroundColor: CHARCOAL }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Ready to plan your move?
              </h2>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
              >
                Get a free, fixed-price quote from London's premium removals company.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="tel:02085218000">
                <button
                  className="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-80"
                  style={{
                    border: `1px solid rgba(184,150,12,0.5)`,
                    color: GOLD,
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  0208 521 8000
                </button>
              </a>
              <Link href="/quote">
                <button
                  className="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: GOLD,
                    color: "#fff",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Free Quote
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
