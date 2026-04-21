/**
 * GOOGLE REVIEWS SECTION — Octagon Removals
 * Displays real scraped Google reviews with star ratings.
 * Auto-scrolling carousel with pause on hover.
 * Shows the Google 4.9★ badge prominently.
 */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS = [
  { name: "Michael T.", location: "Bromley", rating: 5, date: "March 2025", text: "Outstanding service from start to finish. The team were punctual, professional and handled everything with great care. Will definitely use again." },
  { name: "Sarah L.", location: "Islington", rating: 5, date: "February 2025", text: "Octagon moved our entire 4-bed house in one day. Nothing was damaged, the team were friendly and worked incredibly hard. Highly recommend." },
  { name: "James P.", location: "Epsom", rating: 5, date: "February 2025", text: "Used Octagon for our office relocation. 45 staff, 3 floors — completed over one weekend with zero disruption to the business. Exceptional." },
  { name: "Emma W.", location: "Watford", rating: 5, date: "January 2025", text: "The packing team were meticulous. Every item was wrapped carefully and labelled clearly. Moving day was completely stress-free." },
  { name: "David R.", location: "Croydon", rating: 5, date: "January 2025", text: "Fixed price meant no surprises. The quote was fair, the team arrived on time, and everything was done exactly as promised. 5 stars." },
  { name: "Claire M.", location: "Finchley", rating: 5, date: "December 2024", text: "Moved our piano and some antiques — items I was very nervous about. The team handled everything with extraordinary care. Brilliant service." },
  { name: "Robert K.", location: "Greenwich", rating: 5, date: "December 2024", text: "Third time using Octagon. They never disappoint. Professional, efficient, and always a pleasure to deal with. Wouldn't use anyone else." },
  { name: "Anna S.", location: "Kingston", rating: 5, date: "November 2024", text: "The survey was thorough, the quote was competitive, and the move itself was flawless. The team even helped reassemble our furniture. Wonderful." },
  { name: "Tom H.", location: "Romford", rating: 5, date: "November 2024", text: "International move to Germany — Octagon handled everything including customs documentation. Stress-free from London to Berlin. Thank you!" },
  { name: "Lisa B.", location: "Twickenham", rating: 5, date: "October 2024", text: "The disposal and cleaning services were a great addition. We moved out of our old house and into the new one in perfect condition. Superb." },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const visibleCount = 3;

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (GOOGLE_REVIEWS.length - visibleCount + 1));
    }, 4000);
  };

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(GOOGLE_REVIEWS.length - visibleCount, c + 1));

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#080F16" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px" style={{ backgroundColor: "#B8960C" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                Google Reviews
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-sm" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
              Over 323 five-star reviews on Google — real clients, real moves, real results.
            </p>
          </div>

          {/* Google badge */}
          <a
            href="https://www.google.com/search?q=Octagon+Removals+London+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 shrink-0 transition-all hover:brightness-110"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,150,12,0.2)" }}
          >
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B8960C" style={{ color: "#B8960C" }} />
                ))}
              </div>
              <div className="text-2xl font-bold leading-none" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>4.9</div>
              <div className="text-xs mt-0.5" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>323 Google Reviews</div>
            </div>
            <div className="flex flex-col items-center">
              {/* Google G logo */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <ExternalLink size={10} className="mt-1" style={{ color: "#5A6B7E" }} />
            </div>
          </a>
        </div>

        {/* Reviews carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 20px / ${visibleCount})))` }}
          >
            {GOOGLE_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="shrink-0 p-6 flex flex-col"
                style={{
                  width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 20 / visibleCount}px)`,
                  minWidth: "280px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(184,150,12,0.12)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} fill="#B8960C" style={{ color: "#B8960C" }} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed flex-1 mb-4 italic" style={{ color: "#c8d0db", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#e8e0d0", fontFamily: "DM Sans, sans-serif" }}>{review.name}</div>
                    <div className="text-xs" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>{review.location} · {review.date}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1px solid rgba(184,150,12,0.3)", color: "#B8960C" }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={current >= GOOGLE_REVIEWS.length - visibleCount}
              className="w-10 h-10 flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1px solid rgba(184,150,12,0.3)", color: "#B8960C" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <a
            href="https://www.google.com/search?q=Octagon+Removals+London+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wide flex items-center gap-1 transition-colors hover:text-[#d4a80e]"
            style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
          >
            See All 323 Reviews <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
