import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Home, Building2, Package, Truck } from "lucide-react";
import { toast } from "sonner";

/*
  Design: Premium Modern Removals
  Component: Multi-step quote form
  Steps: 1) Move details → 2) Contact info → 3) Confirmation
  Philosophy: Foot-in-the-door - low commitment first, then capture contact
*/

interface QuoteFormProps {
  compact?: boolean;
}

const moveTypes = [
  { id: "house", label: "House Move", icon: Home },
  { id: "office", label: "Office Move", icon: Building2 },
  { id: "packing", label: "Packing Only", icon: Package },
  { id: "van", label: "Man & Van", icon: Truck },
];

const propertySizes = [
  "Studio / 1 Bed",
  "2 Bedroom",
  "3 Bedroom",
  "4+ Bedroom",
  "Office / Commercial",
];

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    moveType: "",
    fromPostcode: "",
    toPostcode: "",
    moveDate: "",
    propertySize: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const totalSteps = 2;

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => {
    if (step === 1) {
      if (!form.fromPostcode || !form.toPostcode || !form.moveType) {
        toast.error("Please fill in all required fields.");
        return;
      }
    }
    setDirection(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const submit = () => {
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in your contact details.");
      return;
    }
    // In production this would POST to a CRM/email endpoint
    setSubmitted(true);
    toast.success("Quote request sent! We'll be in touch within 1 hour.");
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-6"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
          Quote Request Sent!
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Thank you, <strong>{form.name}</strong>. We'll review your details and respond within 1 hour during business hours.
        </p>
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700">
          Moving from <strong>{form.fromPostcode}</strong> to <strong>{form.toPostcode}</strong>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              s <= step ? "bg-green-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">
              Step 1 of 2 - Move Details
            </p>

            {/* Move type */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Type of Move <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {moveTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => update("moveType", type.id)}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      form.moveType === type.id
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <type.icon size={16} />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Postcodes */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Moving From <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. N1 2AB"
                  value={form.fromPostcode}
                  onChange={(e) => update("fromPostcode", e.target.value.toUpperCase())}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Moving To <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. SW1 3CD"
                  value={form.toPostcode}
                  onChange={(e) => update("toPostcode", e.target.value.toUpperCase())}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Property size */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Property Size</label>
              <select
                value={form.propertySize}
                onChange={(e) => update("propertySize", e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
              >
                <option value="">Select property size</option>
                {propertySizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Move date */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Move Date</label>
              <input
                type="date"
                value={form.moveDate}
                onChange={(e) => update("moveDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              onClick={next}
              className="btn-cta w-full flex items-center justify-center gap-2 py-3.5"
            >
              Next: Enter Contact Details <ArrowRight size={16} />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
              Step 2 of 2 - Your Details
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-sm text-green-700">
              ✓ Move: <strong>{form.fromPostcode}</strong> → <strong>{form.toPostcode}</strong>
              {form.propertySize && <span> · {form.propertySize}</span>}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="07700 000000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Notes</label>
              <textarea
                placeholder="e.g. piano, fragile items, access restrictions..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={compact ? 2 : 3}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={back}
                className="flex items-center gap-1.5 px-4 py-3 border border-slate-200 rounded-lg text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all"
              >
                <ArrowLeft size={15} /> Back
              </button>
              <button
                onClick={submit}
                className="btn-cta flex-1 flex items-center justify-center gap-2 py-3"
              >
                Get My Free Quote <CheckCircle2 size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center mt-3">
              We respond within 1 hour · No spam · No obligation
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

