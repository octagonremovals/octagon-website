/**
 * ISLINGTON MINI-SITE — CONTACT / FREE QUOTE PAGE
 * Target keywords: "removals quote Islington", "contact Octagon Removals Islington",
 * "free quote removals N1", "book removals Islington"
 */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import IslingtonLayout from "./IslingtonLayout";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

function IslingtonQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    moveType: "", fromPostcode: "", toPostcode: "", moveDate: "",
    name: "", phone: "", email: "", notes: "",
  });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const postcodeValid = (p: string) => !p || UK_POSTCODE_RE.test(p.trim());
  const canProceed = step === 1
    ? !!(form.moveType && form.fromPostcode && postcodeValid(form.fromPostcode))
    : !!(form.name && form.phone);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={48} style={{ color: GOLD }} className="mx-auto mb-4" />
        <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 600, color: CHARCOAL }}>
          Quote Request Received
        </h3>
        <p className="mt-2 text-sm" style={{ color: "#666" }}>
          We will be in touch within 1 hour during office hours (Mon–Fri 8am–6pm, Sat 8am–3pm).
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center mb-6">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{ backgroundColor: step >= s ? GOLD : "transparent", border: `1px solid ${step >= s ? GOLD : "#ccc"}`, color: step >= s ? "#fff" : "#aaa" }}>
              {s}
            </div>
            {s < 2 && <div className="w-12 h-px mx-1" style={{ backgroundColor: step > s ? GOLD : "#ddd" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-3" style={{ color: "#999" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none"
            style={{ color: form.moveType ? CHARCOAL : "#aaa" }}>
            <option value="">Type of Move</option>
            <option value="House Move">House Move</option>
            <option value="Moving & Packing">Moving &amp; Packing</option>
            <option value="Office Move">Office Move</option>
            <option value="Man & Van">Man &amp; Van</option>
            <option value="Storage">Storage</option>
            <option value="International Removal">International Removal</option>
            <option value="Piano / Specialist">Piano / Specialist Item</option>
            <option value="Other">Other</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange}
                placeholder="From Postcode" className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none"
                style={{ borderColor: form.fromPostcode && !postcodeValid(form.fromPostcode) ? "#e53e3e" : undefined }} />
              {form.fromPostcode && !postcodeValid(form.fromPostcode) && <p className="text-xs text-red-500 mt-1">Invalid postcode</p>}
            </div>
            <div>
              <input name="toPostcode" value={form.toPostcode} onChange={handleChange}
                placeholder="To Postcode (optional)" className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none" />
            </div>
          </div>
          <input name="moveDate" type="date" value={form.moveDate} onChange={handleChange}
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none"
            style={{ color: form.moveDate ? CHARCOAL : "#aaa" }} />
          <textarea name="notes" value={form.notes} onChange={handleChange}
            placeholder="Any additional details (optional)" rows={3}
            className="w-full border border-gray-200 rounded-sm bg-transparent p-3 text-sm outline-none resize-none" />
          <button onClick={() => setStep(2)} disabled={!canProceed}
            className="w-full py-3 text-sm font-semibold rounded-sm transition-opacity"
            style={{ backgroundColor: canProceed ? GOLD : "#ccc", color: "#fff", cursor: canProceed ? "pointer" : "not-allowed" }}>
            Next Step
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Your Full Name" className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none" />
          <input name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="Phone Number" className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none" />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email Address (optional)" className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none" />
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 py-3 text-sm font-semibold rounded-sm border" style={{ borderColor: CHARCOAL, color: CHARCOAL }}>
              Back
            </button>
            <button onClick={() => submitQuote.mutate({ ...form, source: "Islington Mini-Site" })}
              disabled={!canProceed || submitQuote.isPending}
              className="flex-2 flex-grow py-3 text-sm font-semibold rounded-sm flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? GOLD : "#ccc", color: "#fff", cursor: canProceed ? "pointer" : "not-allowed" }}>
              {submitQuote.isPending ? <><Loader2 size={14} className="animate-spin" /> Sending...</> : "Get Free Quote"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function IslingtonContact() {
  return (
    <IslingtonLayout>
      <Helmet>
        <title>Free Quote — Removals Islington | Octagon Removals</title>
        <meta name="description" content="Get a free removals quote for Islington. We respond within 1 hour. Fixed price, fully insured. Call 0208 521 8000 or fill in our form." />
        <link rel="canonical" href="https://octagonremovals.co.uk/islington/contact" />
      </Helmet>

      {/* Hero */}
      <div style={{ backgroundColor: CHARCOAL, paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>Free Quote · No Obligation</span>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: SAND }}>
            Get Your Free Islington Removal Quote
          </h1>
          <p className="mt-3 text-sm" style={{ color: "rgba(245,243,239,0.7)" }}>
            We respond within 1 hour during office hours. Fixed price guaranteed.
          </p>
        </div>
      </div>

      {/* Form + contact info */}
      <section className="py-20 px-6" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 rounded-sm shadow-sm" style={{ backgroundColor: "#fff" }}>
              <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 600, color: CHARCOAL }}>
                Request a Free Quote
              </h2>
              <IslingtonQuoteForm />
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 600, color: CHARCOAL }}>
                Contact Us Directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.1)" }}>
                    <Phone size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: CHARCOAL }}>Phone</div>
                    <a href="tel:02085218000" className="text-lg font-semibold" style={{ color: GOLD }}>0208 521 8000</a>
                    <p className="text-xs mt-1" style={{ color: "#999" }}>We respond within 1 hour during office hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.1)" }}>
                    <Mail size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: CHARCOAL }}>Email</div>
                    <a href="mailto:info@octagonremovals.co.uk" className="text-sm" style={{ color: GOLD }}>info@octagonremovals.co.uk</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.1)" }}>
                    <MapPin size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: CHARCOAL }}>Head Office</div>
                    <p className="text-sm" style={{ color: "#666" }}>Office 56, Millmead Business Centre<br />London N17 9QU</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,150,12,0.1)" }}>
                    <Clock size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: CHARCOAL }}>Opening Hours</div>
                    <p className="text-sm" style={{ color: "#666" }}>Monday – Friday: 8am – 6pm<br />Saturday: 8am – 3pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google map embed */}
              <div className="mt-8 rounded-sm overflow-hidden" style={{ height: 200 }}>
                <iframe
                  title="Octagon Removals Islington area map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19855.68!2d-0.1059!3d51.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6a7b2b1a3b%3A0x7e5c7b3c4a5d6e7f!2sIslington%2C%20London!5e0!3m2!1sen!2suk!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </IslingtonLayout>
  );
}
