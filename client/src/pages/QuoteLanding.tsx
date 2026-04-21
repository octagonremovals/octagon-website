/**
 * QUOTE LANDING PAGE — Octagon Removals
 * Distraction-free, conversion-optimised page for paid traffic.
 * No navbar, no footer, no distractions — just the quote form.
 * URL: /quote
 * Use this URL for Google Ads, Facebook Ads, and any paid campaigns.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Star, CheckCircle2, Phone, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png";

const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;

const trustPoints = [
  { icon: Star, text: "4.9/5 Trustpilot — 171 Reviews" },
  { icon: Shield, text: "Fully Insured — Fixed Price Guaranteed" },
  { icon: Clock, text: "We Call Back Within 1 Hour" },
  { icon: CheckCircle2, text: "No Hidden Charges — Ever" },
];

export default function QuoteLanding() {
  const [step, setStep] = useState(1);
  const [moveType, setMoveType] = useState("");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitMutation = trpc.leads.submitQuote.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: (err) => setErrors({ submit: err.message }),
  });

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!moveType) e.moveType = "Please select a move type";
    if (!fromPostcode) e.fromPostcode = "Required";
    else if (!UK_POSTCODE_RE.test(fromPostcode)) e.fromPostcode = "Invalid UK postcode";
    if (!toPostcode) e.toPostcode = "Required";
    else if (!UK_POSTCODE_RE.test(toPostcode)) e.toPostcode = "Invalid UK postcode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Required";
    if (!phone.trim()) errs.phone = "Required";
    if (!email.trim()) errs.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Invalid email";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    submitMutation.mutate({ moveType, fromPostcode, toPostcode, moveDate, propertySize, name, phone, email, message, source: "Quote Landing Page" });
  };

  const inputStyle = (err?: string) => ({
    backgroundColor: "rgba(255,255,255,0.06)",
    border: `1px solid ${err ? "#e57373" : "rgba(184,150,12,0.25)"}`,
    color: "#e8e0d0",
    fontFamily: "DM Sans, sans-serif",
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ backgroundColor: "#0F1923" }}>

      {/* LEFT — Trust panel */}
      <div
        className="lg:w-5/12 xl:w-2/5 flex flex-col justify-between p-8 lg:p-12"
        style={{ backgroundColor: "#080F16" }}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="Octagon Removals"
              className="h-9 w-auto object-contain mb-10 cursor-pointer"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px" style={{ backgroundColor: "#B8960C" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                London's Premium Removals
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
              Get Your Free,<br />Fixed-Price Quote
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
              Fill in the form and we'll call you within 1 hour with a fully itemised, no-obligation quote. The price we give is the price you pay — guaranteed.
            </p>
          </div>

          {/* Trust points */}
          <div className="space-y-3 mb-8">
            {trustPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.2)" }}>
                    <Icon size={14} style={{ color: "#B8960C" }} />
                  </div>
                  <span className="text-sm" style={{ color: "#c8d0db", fontFamily: "DM Sans, sans-serif" }}>{t.text}</span>
                </div>
              );
            })}
          </div>

          {/* Reviews snippet */}
          <div className="p-4" style={{ backgroundColor: "rgba(184,150,12,0.06)", border: "1px solid rgba(184,150,12,0.15)" }}>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#B8960C" style={{ color: "#B8960C" }} />
              ))}
            </div>
            <p className="text-sm italic mb-2" style={{ color: "#c8d0db", fontFamily: "Cormorant Garamond, serif" }}>
              "Absolutely flawless from start to finish. The team arrived on time, handled our antiques with extraordinary care. Worth every penny."
            </p>
            <p className="text-xs font-semibold" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
              Sarah M. — Kensington
            </p>
          </div>
        </div>

        {/* Phone CTA */}
        <div className="mt-8">
          <p className="text-xs mb-2" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>Prefer to speak to someone?</p>
          <a
            href="tel:02085218000"
            className="flex items-center gap-2 text-base font-bold transition-colors hover:text-[#d4a80e]"
            style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
          >
            <Phone size={16} />
            0208 521 8000
          </a>
          <p className="text-xs mt-1" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>Mon–Fri 8am–6pm, Sat 8am–3pm</p>
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-lg">

          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={56} className="mx-auto mb-5" style={{ color: "#B8960C" }} />
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                Quote Request Received!
              </h2>
              <p className="text-base mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                Thank you, {name}. One of our removal specialists will call you at <strong style={{ color: "#B8960C" }}>{phone}</strong> within 1 hour to discuss your move and provide your fixed-price quote.
              </p>
              <div className="p-4 mb-6" style={{ backgroundColor: "rgba(184,150,12,0.08)", border: "1px solid rgba(184,150,12,0.2)" }}>
                <p className="text-sm" style={{ color: "#c8d0db", fontFamily: "DM Sans, sans-serif" }}>
                  While you wait, why not download our free <strong>Ultimate London Moving Checklist</strong>?
                </p>
                <Link href="/moving-checklist">
                  <span className="inline-block mt-2 text-xs font-bold tracking-wide underline cursor-pointer" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                    Get the Free Checklist →
                  </span>
                </Link>
              </div>
              <Link href="/">
                <span className="text-sm cursor-pointer hover:text-[#B8960C] transition-colors" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                  ← Back to Homepage
                </span>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: step >= s ? "#B8960C" : "rgba(255,255,255,0.05)",
                        color: step >= s ? "#0F1923" : "#5A6B7E",
                        border: `1px solid ${step >= s ? "#B8960C" : "rgba(255,255,255,0.1)"}`,
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {s}
                    </div>
                    <span className="text-xs" style={{ color: step >= s ? "#B8960C" : "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>
                      {s === 1 ? "Move Details" : "Your Details"}
                    </span>
                    {s < 2 && <div className="w-8 h-px mx-1" style={{ backgroundColor: step > s ? "#B8960C" : "rgba(255,255,255,0.1)" }} />}
                  </div>
                ))}
              </div>

              {step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-bold mb-1" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                    Tell Us About Your Move
                  </h2>
                  <p className="text-sm mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    Takes less than 60 seconds
                  </p>

                  <div className="space-y-4">
                    <div>
                      <select
                        value={moveType}
                        onChange={(e) => setMoveType(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle(errors.moveType)}
                      >
                        <option value="">What type of move?</option>
                        <option value="House Removal">House Removal</option>
                        <option value="Flat/Apartment Removal">Flat/Apartment Removal</option>
                        <option value="Office Relocation">Office Relocation</option>
                        <option value="International Removal">International Removal</option>
                        <option value="Storage">Storage</option>
                        <option value="Packing Service Only">Packing Service Only</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.moveType && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.moveType}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="From Postcode (e.g. SW1A 1AA)"
                          value={fromPostcode}
                          onChange={(e) => setFromPostcode(e.target.value.toUpperCase())}
                          className="w-full px-4 py-3.5 text-sm outline-none"
                          style={inputStyle(errors.fromPostcode)}
                        />
                        {errors.fromPostcode && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.fromPostcode}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="To Postcode (e.g. N17 9QU)"
                          value={toPostcode}
                          onChange={(e) => setToPostcode(e.target.value.toUpperCase())}
                          className="w-full px-4 py-3.5 text-sm outline-none"
                          style={inputStyle(errors.toPostcode)}
                        />
                        {errors.toPostcode && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.toPostcode}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={propertySize}
                        onChange={(e) => setPropertySize(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle()}
                      >
                        <option value="">Property size</option>
                        <option value="Studio/Bedsit">Studio/Bedsit</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="5+ Bedrooms">5+ Bedrooms</option>
                        <option value="Office (Small)">Office (Small)</option>
                        <option value="Office (Large)">Office (Large)</option>
                      </select>
                      <input
                        type="date"
                        value={moveDate}
                        onChange={(e) => setMoveDate(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle()}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <button
                      onClick={() => { if (validateStep1()) setStep(2); }}
                      className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all hover:brightness-110"
                      style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Continue — Get My Quote →
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-bold mb-1" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                    Where Should We Send Your Quote?
                  </h2>
                  <p className="text-sm mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    We'll call you within 1 hour
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle(errors.name)}
                        required
                      />
                      {errors.name && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle(errors.phone)}
                        required
                      />
                      {errors.phone && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.phone}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 text-sm outline-none"
                        style={inputStyle(errors.email)}
                        required
                      />
                      {errors.email && <p className="text-xs mt-1" style={{ color: "#e57373" }}>{errors.email}</p>}
                    </div>
                    <textarea
                      placeholder="Anything else we should know? (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3.5 text-sm outline-none resize-none"
                      style={inputStyle()}
                    />

                    {errors.submit && <p className="text-xs" style={{ color: "#e57373" }}>{errors.submit}</p>}

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-4 text-xs font-bold tracking-wide transition-all"
                        style={{ backgroundColor: "transparent", color: "#8A9BB0", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "DM Sans, sans-serif" }}
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="flex-1 py-4 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:brightness-110 disabled:opacity-60"
                        style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                      >
                        {submitMutation.isPending ? (
                          <><Loader2 size={16} className="animate-spin" /> Sending...</>
                        ) : (
                          "Get My Free Quote →"
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-center" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>
                      By submitting you agree to be contacted about your move. No spam, ever.
                    </p>
                  </form>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
