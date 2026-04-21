import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { trpc } from "@/lib/trpc";
import {
  CheckCircle2, Download, FileText, Home, Building2,
  Package, Truck, Key, ClipboardList, Phone, Star,
  ChevronDown, ChevronUp, AlertCircle
} from "lucide-react";

const CHECKLIST_SECTIONS = [
  {
    icon: ClipboardList,
    title: "8 Weeks Before Moving",
    color: "#B8960C",
    items: [
      "Decide on your moving date and book your removal company early (especially for summer/end-of-month moves)",
      "Start decluttering — sell, donate or dispose of items you no longer need",
      "Research and compare removal companies — check Trustpilot and Google reviews",
      "Get at least 3 fixed-price quotes from reputable companies",
      "Notify your employer of your change of address",
      "Start collecting packing boxes and materials",
      "Check your home insurance covers the move",
      "If renting, give notice to your landlord",
    ],
  },
  {
    icon: Home,
    title: "6 Weeks Before Moving",
    color: "#2563eb",
    items: [
      "Book a pre-move survey with your removal company for an accurate fixed price",
      "Confirm school transfers if you have children",
      "Arrange storage if needed between moving out and moving in",
      "Start packing non-essential items (books, seasonal clothing, decorations)",
      "Label every box clearly with contents and destination room",
      "Notify HMRC, DVLA, and your bank of your new address",
      "Arrange parking permits or suspensions for moving day if needed",
      "Check if your new property has any access restrictions",
    ],
  },
  {
    icon: Building2,
    title: "4 Weeks Before Moving",
    color: "#7c3aed",
    items: [
      "Redirect your Royal Mail post to your new address",
      "Notify all utilities: gas, electricity, water, broadband, council tax",
      "Update your address with subscription services (Amazon, Netflix, etc.)",
      "Arrange a cleaner for your old property if required",
      "Confirm your removal company booking and provide any special instructions",
      "Start packing room by room — keep essentials accessible",
      "Take photos of all electronics before disconnecting",
      "Arrange care for children and pets on moving day",
    ],
  },
  {
    icon: Package,
    title: "1 Week Before Moving",
    color: "#059669",
    items: [
      "Confirm your moving day schedule with your removal company",
      "Pack a 'first night' box: kettle, mugs, bedding, phone charger, toiletries",
      "Defrost your fridge and freezer",
      "Drain washing machine and dishwasher",
      "Dismantle large furniture that needs to be moved in pieces",
      "Confirm key collection time with your solicitor or estate agent",
      "Charge all devices and power banks",
      "Prepare payment for your removal company",
    ],
  },
  {
    icon: Truck,
    title: "Moving Day",
    color: "#dc2626",
    items: [
      "Do a final walk-through of every room, loft, shed and garage",
      "Check all windows and doors are locked",
      "Take meter readings at both properties (photograph them)",
      "Ensure the removal team has clear access and parking",
      "Keep your 'first night' box and valuables with you — not on the van",
      "Sign off the inventory with your removal team",
      "Hand over keys to your old property",
      "Do a walk-through of your new property before the team leaves",
    ],
  },
  {
    icon: Key,
    title: "After Moving In",
    color: "#0891b2",
    items: [
      "Change the locks on your new property",
      "Locate the fuse box, stopcock, and boiler",
      "Test smoke alarms and carbon monoxide detectors",
      "Register with a local GP and dentist",
      "Update your driving licence and vehicle registration",
      "Set up your broadband and utilities at the new address",
      "Introduce yourself to your new neighbours",
      "Leave a positive review for your removal company!",
    ],
  },
];

const BONUS_TIPS = [
  { tip: "Book early", detail: "The best removal companies get booked up 4–6 weeks in advance, especially in summer and at month-ends." },
  { tip: "Get a fixed price", detail: "Always insist on a fixed-price quote, not an hourly rate. This protects you from unexpected costs on the day." },
  { tip: "Check insurance", detail: "Ensure your removal company carries full goods-in-transit insurance. Ask for proof before booking." },
  { tip: "Pack smart", detail: "Use smaller boxes for heavy items (books) and larger boxes for light items (duvets). Label every box with room and contents." },
  { tip: "Photograph everything", detail: "Before packing, photograph all electronics and valuables. This is essential for any insurance claims." },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Checklist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openSection, setOpenSection] = useState<number | null>(0);

  const captureMutation = trpc.leads.captureChecklistLead.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () => setError("Something went wrong. Please try again."),
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!validateEmail(email)) { setError("Please enter a valid email address."); return; }
    captureMutation.mutate({ name: name.trim(), email: email.trim() });
  }

  return (
    <div className="min-h-screen" style={{ background: "#F5F3EF" }}>
      <SEOHead
        title="Free London Moving Checklist — Octagon Removals"
        description="Download our free Ultimate London Moving Checklist. Everything you need to do 8 weeks, 4 weeks, 1 week, and on moving day. Used by 10,000+ London families."
        canonical="/moving-checklist"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: "#0F1923" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(184,150,12,0.15)", color: "#B8960C", border: "1px solid rgba(184,150,12,0.3)" }}>
              <FileText size={14} />
              FREE DOWNLOAD
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              The Ultimate London<br />
              <span style={{ color: "#B8960C" }}>Moving Checklist</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Everything you need to do — from 8 weeks before your move to settling in — in one comprehensive, free checklist. Used by over 10,000 London families.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {["48 tasks across 6 phases", "Expert tips from 10+ years experience", "Printable & mobile-friendly"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: "#B8960C" }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Checklist Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0F1923", fontFamily: "Cormorant Garamond, serif" }}>
              Your Complete Moving Timeline
            </h2>

            <div className="space-y-4">
              {CHECKLIST_SECTIONS.map((section, idx) => {
                const Icon = section.icon;
                const isOpen = openSection === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="rounded-xl overflow-hidden"
                    style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => setOpenSection(isOpen ? null : idx)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${section.color}18` }}>
                          <Icon size={20} style={{ color: section.color }} />
                        </div>
                        <div>
                          <div className="font-bold text-base" style={{ color: "#0F1923" }}>{section.title}</div>
                          <div className="text-sm text-gray-500">{section.items.length} tasks</div>
                        </div>
                      </div>
                      {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="px-5 pb-5 border-t" style={{ borderColor: "#f3f4f6" }}>
                            <ul className="mt-4 space-y-3">
                              {section.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5"
                                    style={{ borderColor: section.color }} />
                                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bonus Tips */}
            <div className="mt-12 rounded-xl p-8" style={{ background: "#0F1923" }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                <Star size={18} className="inline mr-2" style={{ color: "#B8960C" }} />
                Expert Tips from Octagon Removals
              </h3>
              <div className="space-y-4">
                {BONUS_TIPS.map((tip, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#B8960C" }} />
                    <div>
                      <span className="font-semibold text-white">{tip.tip}: </span>
                      <span className="text-gray-300 text-sm">{tip.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Capture Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
                  >
                    {/* Form header */}
                    <div className="p-6 text-center" style={{ background: "#B8960C" }}>
                      <Download size={32} className="mx-auto mb-3 text-white" />
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                        Get the Full Checklist
                      </h3>
                      <p className="text-sm text-yellow-100 mt-1">
                        Free PDF — instant download
                      </p>
                    </div>

                    <div className="p-6 bg-white">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>
                            Your Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="e.g. Sarah Johnson"
                            className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                            style={{ borderColor: "#e5e7eb" }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                            style={{ borderColor: "#e5e7eb" }}
                          />
                        </div>

                        {error && (
                          <div className="flex items-center gap-2 text-red-600 text-sm">
                            <AlertCircle size={14} />
                            {error}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={captureMutation.isPending}
                          className="w-full py-3.5 rounded-lg font-bold text-white text-sm transition-opacity"
                          style={{ background: "#0F1923", opacity: captureMutation.isPending ? 0.7 : 1 }}
                        >
                          {captureMutation.isPending ? "Sending..." : "Download Free Checklist →"}
                        </button>

                        <p className="text-xs text-gray-400 text-center">
                          No spam. We'll only send you moving tips and your free checklist.
                        </p>
                      </form>

                      {/* Trust signals */}
                      <div className="mt-6 pt-5 border-t" style={{ borderColor: "#f3f4f6" }}>
                        <div className="flex items-center gap-2 mb-2">
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#B8960C" style={{ color: "#B8960C" }} />)}
                          <span className="text-xs text-gray-500">4.9/5 from 171 reviews</span>
                        </div>
                        <p className="text-xs text-gray-500">
                          "Octagon made our move completely stress-free. The checklist they provided was incredibly helpful." — Emma R., Richmond
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl p-8 text-center bg-white"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(184,150,12,0.1)" }}>
                      <CheckCircle2 size={32} style={{ color: "#B8960C" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#0F1923", fontFamily: "Cormorant Garamond, serif" }}>
                      Checklist Sent!
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Check your inbox at <strong>{email}</strong> for your free moving checklist.
                    </p>
                    <a
                      href="/get-quote"
                      className="block w-full py-3.5 rounded-lg font-bold text-white text-sm text-center"
                      style={{ background: "#B8960C" }}
                    >
                      Get Your Free Quote →
                    </a>
                    <a
                      href="tel:02085218000"
                      className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold"
                      style={{ color: "#0F1923" }}
                    >
                      <Phone size={14} />
                      Or call 0208 521 8000
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Need help box */}
              <div className="mt-6 rounded-xl p-5 text-center" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0F1923" }}>Ready to book your move?</p>
                <p className="text-xs text-gray-500 mb-4">Get a free fixed-price quote in minutes</p>
                <a
                  href="/get-quote"
                  className="block w-full py-3 rounded-lg font-bold text-sm text-center"
                  style={{ background: "#B8960C", color: "#fff" }}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
