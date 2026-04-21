import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const GOLD = "#B8960C";
const CHARCOAL = "#0F1923";

export default function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Show 3 cards at a time on desktop
  const visibleCount = 3;
  const maxIndex = Math.max(0, blogPosts.length - visibleCount);

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
    resetAutoPlay();
  };

  const next = () => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxIndex]);

  return (
    <section className="py-16 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            {/* Label with gold lines on both sides */}
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Octagon Insights</span>
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: CHARCOAL }}>
              Blog Articles Worth Reading Before You Move
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-9 h-9 flex items-center justify-center transition-all disabled:opacity-30 hover:opacity-70"
                style={{ border: `1px solid ${GOLD}`, color: GOLD }}
                aria-label="Previous articles"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="w-9 h-9 flex items-center justify-center transition-all disabled:opacity-30 hover:opacity-70"
                style={{ border: `1px solid ${GOLD}`, color: GOLD }}
                aria-label="Next articles"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <Link href="/blog">
              <span className="text-xs uppercase tracking-widest flex items-center gap-1 transition-all hover:gap-2" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                All Articles <ArrowRight size={11} />
              </span>
            </Link>
          </div>
        </div>

        {/* Slider track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount} + 8px)))` }}
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  flex: `0 0 calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`,
                  minWidth: 0,
                }}
              >
                <article
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ border: "1px solid #e8e4de" }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={11} style={{ color: GOLD }} />
                      <span className="text-xs" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>{post.readTime} min read</span>
                    </div>
                    <h3 className="leading-snug mb-3" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 600, color: CHARCOAL }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                      Read More <ChevronRight size={11} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); resetAutoPlay(); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === currentIndex ? GOLD : "#d4cfc8" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
