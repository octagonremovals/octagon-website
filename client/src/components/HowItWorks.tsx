/**
 * HOW IT WORKS — Octagon Removals
 * 4-step visual process that removes uncertainty and increases form completion.
 * Steps: Book Free Survey → Fixed Price Quote → Confirm & Prepare → Move Day
 */
import { motion } from "framer-motion";
import { ClipboardList, FileCheck2, PackageCheck, Truck } from "lucide-react";
import { Link } from "wouter";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Book Your Free Survey",
    desc: "Call us, fill in our online form, or chat with our AI assistant. We'll arrange a free, no-obligation survey at a time that suits you — in person or virtual.",
    highlight: "Free & No Obligation",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Receive Your Fixed Price",
    desc: "Within 24 hours of your survey, you'll receive a fully itemised, fixed-price quote. No hidden charges, no surprises on moving day. The price you see is the price you pay.",
    highlight: "Guaranteed Fixed Price",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Confirm & Prepare",
    desc: "Once you're happy, simply confirm your booking. Our team will send you a personalised moving guide and be on hand to answer any questions before your move day.",
    highlight: "Dedicated Support",
  },
  {
    number: "04",
    icon: Truck,
    title: "Sit Back on Move Day",
    desc: "Our uniformed, fully insured team arrives on time, handles everything with care, and has you settled in your new home or office — exactly as agreed.",
    highlight: "Fully Insured",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#0F1923" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px" style={{ backgroundColor: "#B8960C" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
              Our Process
            </span>
            <div className="w-10 h-px" style={{ backgroundColor: "#B8960C" }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
            How It Works
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
            From your first enquiry to the last box in your new home — here's exactly what to expect when you move with Octagon.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="relative p-6 flex flex-col"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(184,150,12,0.15)",
                }}
              >
                {/* Step number */}
                <div
                  className="text-5xl font-bold mb-4 leading-none select-none"
                  style={{ color: "rgba(184,150,12,0.12)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.25)" }}
                >
                  <Icon size={20} style={{ color: "#B8960C" }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2" style={{ color: "#e8e0d0", fontFamily: "Cormorant Garamond, serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                  {step.desc}
                </p>

                {/* Highlight badge */}
                <div
                  className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold w-fit"
                  style={{ backgroundColor: "rgba(184,150,12,0.1)", color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B8960C" }} />
                  {step.highlight}
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 z-10 text-lg select-none"
                    style={{ color: "rgba(184,150,12,0.3)", transform: "translateY(-50%)" }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/get-quote">
            <span
              className="inline-block px-8 py-4 text-sm font-bold tracking-widest uppercase cursor-pointer transition-all hover:brightness-110"
              style={{ backgroundColor: "#B8960C", color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
            >
              Start With a Free Survey →
            </span>
          </Link>
          <p className="mt-3 text-xs" style={{ color: "#5A6B7E", fontFamily: "DM Sans, sans-serif" }}>
            No obligation · Fixed price guaranteed · Fully insured
          </p>
        </div>
      </div>
    </section>
  );
}
