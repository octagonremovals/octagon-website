import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ChevronDown, Phone, ArrowRight, HelpCircle, Search, X } from "lucide-react";
import { Link } from "wouter";
import { FAQ_CATEGORIES } from "@/data/faqData";

const GOLD = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND = "#F5F3EF";

// Flatten all questions for schema + search
const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) =>
  c.questions.map((q) => ({ ...q, catTitle: c.title, catIcon: c.icon, catId: c.id }))
);

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return ALL_FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const currentCategory = FAQ_CATEGORIES[activeTab];
  const totalQuestions = FAQ_CATEGORIES.reduce((sum, c) => sum + c.questions.length, 0);

  // Build FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen" style={{ background: SAND }}>
      <SEOHead
        title="FAQ — Octagon Removals London | 100 Questions Answered"
        description="Comprehensive FAQ covering house removals, commercial relocations, storage solutions, and international moves. 100 questions answered by London's trusted removals company."
        canonical="/faq"
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16" style={{ background: CHARCOAL }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(184,150,12,0.15)",
                color: GOLD,
                border: "1px solid rgba(184,150,12,0.3)",
              }}
            >
              <HelpCircle size={14} />
              {totalQuestions} QUESTIONS ANSWERED
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Everything You Need to Know
              <br />
              <span style={{ color: GOLD }}>About Your Move</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Browse our comprehensive FAQ or search for specific answers. Can't
              find what you need? Call us on{" "}
              <a
                href="tel:02085218000"
                className="font-bold"
                style={{ color: GOLD }}
              >
                0208 521 8000
              </a>
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search all ${totalQuestions} questions...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8960C] transition-colors text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* ── Search Results ─────────────────────────────────── */}
        {searchResults !== null ? (
          <div>
            <p
              className="text-sm text-gray-500 mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
            {searchResults.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg mb-4">
                  No questions match your search.
                </p>
                <p className="text-gray-500 text-sm">
                  Try different keywords or{" "}
                  <a
                    href="tel:02085218000"
                    style={{ color: GOLD }}
                    className="underline"
                  >
                    call us directly
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchResults.map((faq, idx) => {
                  const key = `search-${idx}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={key}>
                      <span
                        className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-1"
                        style={{
                          background: "rgba(184,150,12,0.1)",
                          color: GOLD,
                        }}
                      >
                        {faq.catIcon} {faq.catTitle}
                      </span>
                      <div
                        className="rounded-xl overflow-hidden"
                        style={{
                          background: "#fff",
                          border: isOpen
                            ? "1px solid rgba(184,150,12,0.4)"
                            : "1px solid #e5e7eb",
                          boxShadow: isOpen
                            ? "0 4px 20px rgba(184,150,12,0.08)"
                            : "0 1px 4px rgba(0,0,0,0.04)",
                          transition: "border-color 0.2s, box-shadow 0.2s",
                        }}
                      >
                        <button
                          className="w-full flex items-start justify-between gap-4 p-5 text-left"
                          onClick={() => toggle(key)}
                        >
                          <span
                            className="font-semibold text-base leading-snug"
                            style={{ color: CHARCOAL }}
                          >
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0 mt-0.5"
                          >
                            <ChevronDown
                              size={18}
                              style={{
                                color: isOpen ? GOLD : "#9ca3af",
                              }}
                            />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              style={{ overflow: "hidden" }}
                            >
                              <div
                                className="px-5 pb-5 border-t"
                                style={{ borderColor: "#f3f4f6" }}
                              >
                                <p
                                  className="mt-4 text-sm leading-relaxed"
                                  style={{ color: "#4b5563" }}
                                >
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* ── Category View ─────────────────────────────────── */
          <>
            {/* Category tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {FAQ_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(i);
                    setOpenItems({});
                  }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-200 text-left ${
                    i === activeTab
                      ? "text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                  style={i === activeTab ? { backgroundColor: CHARCOAL } : {}}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {cat.title}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${
                        i === activeTab ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {cat.questions.length} questions
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Category header */}
            <div className="mb-8">
              <h2
                className="text-3xl font-bold mb-2"
                style={{
                  color: CHARCOAL,
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {currentCategory.title}
              </h2>
              <p
                className="text-gray-500"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {currentCategory.subtitle}
              </p>
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {currentCategory.questions.map((faq, faqIdx) => {
                const key = `${activeTab}-${faqIdx}`;
                const isOpen = openItems[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: faqIdx * 0.02 }}
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: isOpen
                        ? "1px solid rgba(184,150,12,0.4)"
                        : "1px solid #e5e7eb",
                      boxShadow: isOpen
                        ? "0 4px 20px rgba(184,150,12,0.08)"
                        : "0 1px 4px rgba(0,0,0,0.04)",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <button
                      className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      onClick={() => toggle(key)}
                    >
                      <span
                        className="font-semibold text-base leading-snug"
                        style={{ color: CHARCOAL }}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <ChevronDown
                          size={18}
                          style={{
                            color: isOpen ? GOLD : "#9ca3af",
                          }}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            className="px-5 pb-5 border-t"
                            style={{ borderColor: "#f3f4f6" }}
                          >
                            <p
                              className="mt-4 text-sm leading-relaxed"
                              style={{ color: "#4b5563" }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {/* ── CTA section ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-2xl p-10 text-center"
          style={{ background: CHARCOAL }}
        >
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Our friendly team is available Mon-Fri 8am-6pm and Sat 8am-3pm.
            Call us or fill in the quote form and we'll call you back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02085218000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Phone size={16} />
              Call 0208 521 8000
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
