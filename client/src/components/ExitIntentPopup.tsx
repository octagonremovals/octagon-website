/*
 * EXIT-INTENT POPUP — Octagon Removals
 * Fires when the user's cursor moves toward the top of the browser (about to leave).
 * Also fires on mobile after 45 seconds of inactivity.
 * Shows a compelling offer to get a free quote before they go.
 * Uses UK postcode validation to ensure clean lead data.
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Star, Loader2, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png";

// UK postcode regex (simplified but covers all valid formats)
const UK_POSTCODE_RE =
  /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;

function validatePostcode(pc: string) {
  return UK_POSTCODE_RE.test(pc.trim());
}

// Session storage key — only show once per session
const SHOWN_KEY = "octagon_exit_popup_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fromError, setFromError] = useState("");
  const [toError, setToError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasShown = useRef(false);

  const submitQuote = trpc.leads.submitQuote.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const show = useCallback(() => {
    if (hasShown.current || sessionStorage.getItem(SHOWN_KEY)) return;
    hasShown.current = true;
    sessionStorage.setItem(SHOWN_KEY, "1");
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    setDismissed(true);
  }, []);

  // Desktop: mouse leaves toward the top
  useEffect(() => {
    if (dismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) show();
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [show, dismissed]);

  // Mobile: show after 45 seconds
  useEffect(() => {
    if (dismissed) return;
    timerRef.current = setTimeout(show, 45_000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [show, dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!validatePostcode(fromPostcode)) {
      setFromError("Please enter a valid UK postcode (e.g. SW1A 1AA)");
      valid = false;
    } else {
      setFromError("");
    }

    if (!validatePostcode(toPostcode)) {
      setToError("Please enter a valid UK postcode (e.g. E1 6RF)");
      valid = false;
    } else {
      setToError("");
    }

    if (!valid) return;

    submitQuote.mutate({
      moveType: "House Removal",
      fromPostcode,
      toPostcode,
      name: name || "Not provided",
      phone: phone || "Not provided",
      email: "not-provided@octagonremovals.co.uk",
      source: "Exit Intent Popup",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "rgba(15,25,35,0.75)", backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 260 }}
            className="fixed z-[61] inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md pointer-events-auto"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(184,150,12,0.25)",
                boxShadow: "0 25px 80px rgba(15,25,35,0.35)",
              }}
            >
              {/* Gold top bar */}
              <div className="h-1 w-full" style={{ backgroundColor: "#B8960C" }} />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-colors"
                style={{ color: "#5a6a7a" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#0F1923")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5a6a7a")}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {submitted ? (
                /* Success state */
                <div className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "2px solid #B8960C" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#B8960C" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
                  >
                    We'll Call You Shortly
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Thank you! One of our move specialists will call you within 1 hour to discuss your move and provide a fixed price.
                  </p>
                  <button
                    onClick={dismiss}
                    className="btn-gold px-8 py-3 text-sm"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form state */
                <div className="p-6 pt-5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={LOGO_URL}
                      alt="Octagon Removals"
                      className="h-10 object-contain"
                    />
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
                      >
                        Before You Go
                      </div>
                      <h3
                        className="text-xl font-bold leading-tight"
                        style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}
                      >
                        Get Your Free Fixed-Price Quote
                      </h3>
                    </div>
                  </div>

                  {/* Trust row */}
                  <div
                    className="flex items-center gap-3 px-3 py-2 mb-4"
                    style={{ backgroundColor: "#F5F3EF", border: "1px solid #e8e4dc" }}
                  >
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} fill="#B8960C" style={{ color: "#B8960C" }} />
                      ))}
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
                    >
                      4.9/5 from 323 Google reviews · No hidden charges
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Postcodes */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1"
                          style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                        >
                          Moving From
                        </label>
                        <input
                          value={fromPostcode}
                          onChange={(e) => {
                            setFromPostcode(e.target.value.toUpperCase());
                            setFromError("");
                          }}
                          placeholder="e.g. SW1A 1AA"
                          className="w-full px-3 py-2 text-sm focus:outline-none uppercase"
                          style={{
                            border: fromError ? "1px solid #dc2626" : "1px solid #e8e4dc",
                            fontFamily: "DM Sans, sans-serif",
                            color: "#0F1923",
                          }}
                          onFocus={(e) => {
                            if (!fromError) (e.target as HTMLInputElement).style.borderColor = "#B8960C";
                          }}
                          onBlur={(e) => {
                            if (!fromError) (e.target as HTMLInputElement).style.borderColor = "#e8e4dc";
                          }}
                        />
                        {fromError && (
                          <p className="text-xs mt-1" style={{ color: "#dc2626", fontFamily: "DM Sans, sans-serif" }}>
                            {fromError}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1"
                          style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                        >
                          Moving To
                        </label>
                        <input
                          value={toPostcode}
                          onChange={(e) => {
                            setToPostcode(e.target.value.toUpperCase());
                            setToError("");
                          }}
                          placeholder="e.g. E1 6RF"
                          className="w-full px-3 py-2 text-sm focus:outline-none uppercase"
                          style={{
                            border: toError ? "1px solid #dc2626" : "1px solid #e8e4dc",
                            fontFamily: "DM Sans, sans-serif",
                            color: "#0F1923",
                          }}
                          onFocus={(e) => {
                            if (!toError) (e.target as HTMLInputElement).style.borderColor = "#B8960C";
                          }}
                          onBlur={(e) => {
                            if (!toError) (e.target as HTMLInputElement).style.borderColor = "#e8e4dc";
                          }}
                        />
                        {toError && (
                          <p className="text-xs mt-1" style={{ color: "#dc2626", fontFamily: "DM Sans, sans-serif" }}>
                            {toError}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="px-3 py-2 text-sm focus:outline-none"
                        style={{
                          border: "1px solid #e8e4dc",
                          fontFamily: "DM Sans, sans-serif",
                          color: "#0F1923",
                        }}
                        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#B8960C")}
                        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4dc")}
                      />
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        type="tel"
                        className="px-3 py-2 text-sm focus:outline-none"
                        style={{
                          border: "1px solid #e8e4dc",
                          fontFamily: "DM Sans, sans-serif",
                          color: "#0F1923",
                        }}
                        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#B8960C")}
                        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4dc")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitQuote.isPending}
                      className="btn-gold w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {submitQuote.isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <p
                      className="text-center text-xs"
                      style={{ color: "#8a9aaa", fontFamily: "DM Sans, sans-serif" }}
                    >
                      We'll call you within 1 hour · No obligation · Fixed price guaranteed
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
