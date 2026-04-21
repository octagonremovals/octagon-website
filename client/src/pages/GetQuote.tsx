import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Shield, Clock, Star, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function GetQuote() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#1C2B3A] py-16">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Free & No Obligation</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                Get Your Free Quote
              </h1>
              <p className="text-slate-300 text-lg max-w-xl mx-auto">
                Fill in the form below and we'll respond within 1 hour during business hours with your free, fixed-price quote.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                  Tell Us About Your Move
                </h2>
                <QuoteForm />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1C2B3A] rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                  Why Choose Octagon?
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    { icon: Shield, text: "Fully insured — goods in transit & public liability" },
                    { icon: CheckCircle2, text: "Fixed price guarantee — no hidden fees" },
                    { icon: Clock, text: "Free virtual or in-person survey" },
                    { icon: Star, text: "4.9/5 on Trustpilot from 171 reviews" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-slate-300">
                      <item.icon size={16} className="text-green-400 shrink-0 mt-0.5" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6"
              >
                <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Prefer to Call?
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Our team is available Mon–Fri 8am–6pm, Sat 8am–3pm to take your enquiry.
                </p>
                <a
                  href="tel:02085218000"
                  className="flex items-center gap-2 bg-green-600 text-white font-bold px-5 py-3 rounded-lg hover:bg-green-700 transition-all text-sm"
                >
                  <Phone size={16} />
                  0208 521 8000
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "The team were punctual, careful with our belongings, and the fixed price meant no nasty surprises. Highly recommend."
                </p>
                <p className="text-slate-400 text-xs mt-2">— Emma W., Bromley</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
