/**
 * BLOG POST PAGE — Octagon Removals
 * Individual article page with full content, author bio, related posts, and CTA.
 */
import { Link, useParams } from "wouter";
import { Clock, ArrowLeft, ChevronRight, Share2, Phone } from "lucide-react";
import { getBlogPost, blogPosts, type BlogPost } from "@/data/blogPosts";
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

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug || "");

  if (!post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}
      >
        <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: CHARCOAL }}>
          Article Not Found
        </h1>
        <Link href="/blog">
          <button
            className="px-6 py-3 text-xs tracking-widest uppercase"
            style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "DM Sans, sans-serif" }}
          >
            ← Back to Blog
          </button>
        </Link>
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const otherRelated = related.length < 2
    ? blogPosts.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 2 - related.length)
    : [];

  const relatedPosts = [...related, ...otherRelated].slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${post.title} | Octagon Removals Blog`}
        description={post.excerpt}
        canonical={`https://octagonremovals.co.uk/blog/${post.slug}`}
      />

      <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#F5F3EF", minHeight: "100vh" }}>

        {/* ── HERO IMAGE ───────────────────────────────────────────────────── */}
        <div className="relative h-[380px] md:h-[480px] overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,25,35,0.3) 0%, rgba(15,25,35,0.75) 100%)",
            }}
          />

          {/* Back link */}
          <Link href="/blog">
            <div
              className="absolute top-6 left-6 md:left-14 flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif", fontSize: "13px" }}
            >
              <ArrowLeft size={14} />
              <span>All Articles</span>
            </div>
          </Link>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 lg:px-20 pb-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: CATEGORY_COLOURS[post.category],
                    color: "#fff",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Clock size={12} />
                  <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {post.readTime} min read
                  </span>
                </div>
              </div>
              <h1
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
                >
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                    {post.author}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                    {post.authorRole} · {formatDate(post.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <div className="px-8 md:px-14 lg:px-20 py-14">
          <div className="max-w-6xl mx-auto flex gap-12">

            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Excerpt / intro */}
              <p
                className="text-base leading-relaxed mb-8 pb-8"
                style={{
                  color: "#444",
                  fontFamily: "DM Sans, sans-serif",
                  borderBottom: "1px solid #e8e4de",
                  fontSize: "1.05rem",
                }}
              >
                {post.excerpt}
              </p>

              {/* Article content */}
              <div
                className="article-content"
                style={{
                  color: "#333",
                  fontFamily: "DM Sans, sans-serif",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid #e8e4de" }}>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs"
                      style={{
                        backgroundColor: "rgba(184,150,12,0.08)",
                        color: GOLD,
                        border: `1px solid rgba(184,150,12,0.2)`,
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <Share2 size={14} style={{ color: "#999" }} />
                <span className="text-xs" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
                  Share this article:
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://octagonremovals.co.uk/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 transition-opacity hover:opacity-70"
                  style={{ border: "1px solid #ddd", color: "#555", fontFamily: "DM Sans, sans-serif" }}
                >
                  Twitter / X
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://octagonremovals.co.uk/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 transition-opacity hover:opacity-70"
                  style={{ border: "1px solid #ddd", color: "#555", fontFamily: "DM Sans, sans-serif" }}
                >
                  Facebook
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              {/* CTA card */}
              <div
                className="p-6 mb-8 sticky top-24"
                style={{
                  backgroundColor: CHARCOAL,
                  border: `1px solid rgba(184,150,12,0.3)`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1" style={{ backgroundColor: GOLD }} />
                  <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                    Get a Quote
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: GOLD }} />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Ready to move?
                </h3>
                <p
                  className="text-xs leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}
                >
                  Free, fixed-price quote. We respond within 1 hour during office hours.
                </p>
                <Link href="/quote">
                  <button
                    className="w-full py-3 text-xs tracking-widest uppercase font-medium mb-3 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Get Free Quote
                  </button>
                </Link>
                <a href="tel:02085218000" className="block">
                  <button
                    className="w-full py-3 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
                    style={{
                      border: `1px solid rgba(184,150,12,0.4)`,
                      color: GOLD,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    <Phone size={12} />
                    0208 521 8000
                  </button>
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* ── RELATED ARTICLES ─────────────────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <section
            className="px-8 md:px-14 lg:px-20 py-16"
            style={{ backgroundColor: "#fff", borderTop: "1px solid #e8e4de" }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: GOLD }} />
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
                >
                  Related Articles
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <article
                      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{ border: "1px solid #e8e4de" }}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={related.heroImage}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <span
                          className="text-xs uppercase tracking-wider font-semibold"
                          style={{ color: CATEGORY_COLOURS[related.category], fontFamily: "DM Sans, sans-serif" }}
                        >
                          {related.category}
                        </span>
                        <h3
                          className="mt-2 leading-snug"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            color: CHARCOAL,
                          }}
                        >
                          {related.title}
                        </h3>
                        <div
                          className="flex items-center gap-1 mt-3 text-xs font-medium transition-all group-hover:gap-2"
                          style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
                        >
                          Read <ChevronRight size={11} />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
