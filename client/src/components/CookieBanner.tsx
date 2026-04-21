/**
 * COOKIE CONSENT BANNER — Octagon Removals
 * UK GDPR compliant cookie consent banner.
 * Stores consent in localStorage. Shows on first visit only.
 * Includes Accept All, Manage Preferences, and Reject Non-Essential options.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const CONSENT_KEY = "octagon_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Delay slightly so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ essential: true, analytics: true, marketing: true, timestamp: Date.now() }));
    setVisible(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ essential: true, analytics: false, marketing: false, timestamp: Date.now() }));
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ essential: true, analytics, marketing, timestamp: Date.now() }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="max-w-4xl mx-auto"
            style={{
              backgroundColor: "#0F1923",
              border: "1px solid rgba(184,150,12,0.3)",
              boxShadow: "0 -10px 60px rgba(0,0,0,0.5)",
            }}
          >
            {!showManage ? (
              <div className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}
                  >
                    <Cookie size={18} style={{ color: "#B8960C" }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold mb-1" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                      We Use Cookies
                    </h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      We use essential cookies to make our website work. We'd also like to set analytics cookies to help us improve it and marketing cookies to show you relevant ads. You can manage your preferences or accept all cookies below.{" "}
                      <Link href="/privacy-policy">
                        <span className="underline cursor-pointer" style={{ color: "#B8960C" }}>Privacy Policy</span>
                      </Link>
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={acceptAll}
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all hover:brightness-110"
                        style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                      >
                        Accept All
                      </button>
                      <button
                        onClick={() => setShowManage(true)}
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all hover:border-[#B8960C] hover:text-[#B8960C] flex items-center gap-1.5"
                        style={{ backgroundColor: "transparent", color: "#8A9BB0", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "DM Sans, sans-serif" }}
                      >
                        <Settings size={11} /> Manage
                      </button>
                      <button
                        onClick={rejectNonEssential}
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all hover:text-[#e8e0d0]"
                        style={{ backgroundColor: "transparent", color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}
                      >
                        Reject Non-Essential
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={rejectNonEssential}
                    className="shrink-0 p-1 transition-colors hover:text-[#B8960C]"
                    style={{ color: "#5A6B7E" }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                    Manage Cookie Preferences
                  </h3>
                  <button onClick={() => setShowManage(false)} className="p-1 transition-colors hover:text-[#B8960C]" style={{ color: "#5A6B7E" }}>
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-3 mb-5">
                  {/* Essential — always on */}
                  <div className="flex items-center justify-between p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: "#e8e0d0", fontFamily: "DM Sans, sans-serif" }}>Essential Cookies</div>
                      <div className="text-xs" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>Required for the website to function. Cannot be disabled.</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                      <CheckCircle2 size={14} /> Always On
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: "#e8e0d0", fontFamily: "DM Sans, sans-serif" }}>Analytics Cookies</div>
                      <div className="text-xs" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>Help us understand how visitors use the site (Google Analytics).</div>
                    </div>
                    <button
                      onClick={() => setAnalytics(!analytics)}
                      className="w-11 h-6 relative transition-colors"
                      style={{ backgroundColor: analytics ? "#B8960C" : "rgba(255,255,255,0.1)" }}
                    >
                      <div
                        className="absolute top-1 w-4 h-4 bg-white transition-all"
                        style={{ left: analytics ? "calc(100% - 20px)" : "4px" }}
                      />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: "#e8e0d0", fontFamily: "DM Sans, sans-serif" }}>Marketing Cookies</div>
                      <div className="text-xs" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>Used to show you relevant ads on other websites (Google Ads, Facebook).</div>
                    </div>
                    <button
                      onClick={() => setMarketing(!marketing)}
                      className="w-11 h-6 relative transition-colors"
                      style={{ backgroundColor: marketing ? "#B8960C" : "rgba(255,255,255,0.1)" }}
                    >
                      <div
                        className="absolute top-1 w-4 h-4 bg-white transition-all"
                        style={{ left: marketing ? "calc(100% - 20px)" : "4px" }}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={savePreferences}
                    className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all hover:brightness-110"
                    style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all hover:border-[#B8960C] hover:text-[#B8960C]"
                    style={{ backgroundColor: "transparent", color: "#8A9BB0", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
