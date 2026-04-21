/**
 * CALLBACK WIDGET — Octagon Removals
 * Floating "Call me back in 15 minutes" button + modal form.
 * Captures name + phone only — lowest friction lead capture possible.
 * Sends via tRPC leads.requestCallback and notifies owner instantly.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const callbackMutation = trpc.leads.requestCallback.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setName("");
      setPhone("");
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please call us directly.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    callbackMutation.mutate({ name: name.trim(), phone: phone.trim() });
  };

  return (
    <>
      {/* Floating trigger button — positioned above WhatsApp button */}
      <motion.button
        onClick={() => { setOpen(true); setSubmitted(false); }}
        className="fixed z-40 flex items-center gap-2 px-5 py-3.5 text-sm font-bold tracking-wider uppercase"
        style={{
          bottom: "100px",
          right: "20px",
          backgroundColor: "#B8960C",
          color: "#0F1923",
          border: "none",
          fontFamily: "DM Sans, sans-serif",
          boxShadow: "0 0 0 0 rgba(184,150,12,0.7)",
          animation: "callPulse 2s infinite",
          borderRadius: "4px",
        }}
        whileHover={{ scale: 1.08, backgroundColor: "#d4a80e" }}
        whileTap={{ scale: 0.96 }}
        aria-label="Request a callback"
      >
        <Phone size={16} strokeWidth={2.5} />
        <span>Call Me Back</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed z-50 w-full max-w-md mx-auto p-6"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#0F1923",
                border: "1px solid rgba(184,150,12,0.4)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
              }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1 transition-colors hover:text-[#B8960C]"
                style={{ color: "#8A9BB0" }}
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#B8960C" }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                    We'll Call You Shortly
                  </h3>
                  <p className="text-sm" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    One of our team will call you within 15 minutes during business hours (Mon–Fri 8am–6pm, Sat 8am–3pm).
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 px-6 py-2.5 text-xs font-bold tracking-widest uppercase"
                    style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-0.5" style={{ backgroundColor: "#B8960C" }} />
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                        Free Callback
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                      We'll Call You Back in 15 Minutes
                    </h3>
                    <p className="text-sm" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      Leave your name and number — one of our removal specialists will call you right back.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-sm outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(184,150,12,0.25)",
                          color: "#e8e0d0",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 text-sm outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(184,150,12,0.25)",
                          color: "#e8e0d0",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-xs" style={{ color: "#e57373", fontFamily: "DM Sans, sans-serif" }}>{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={callbackMutation.isPending}
                      className="w-full py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:brightness-110 disabled:opacity-60"
                      style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {callbackMutation.isPending ? (
                        <><Loader2 size={14} className="animate-spin" /> Sending...</>
                      ) : (
                        <><Phone size={14} /> Call Me Back in 15 Minutes</>
                      )}
                    </button>

                    <p className="text-xs text-center" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>
                      Mon–Fri 8am–6pm, Sat 8am–3pm · No obligation · Fully insured
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
