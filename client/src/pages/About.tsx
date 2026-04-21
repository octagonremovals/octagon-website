import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Award, Users, Star, CheckCircle2, Heart } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-removals-PBJDRCqmtjBwoUbZe48FmD.webp";

const values = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "Comprehensive goods in transit and public liability insurance on every move.",
  },
  {
    icon: Award,
    title: "Fixed Price Guarantee",
    desc: "The price we quote is the price you pay. No surprises, no hidden extras.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    desc: "Every team member is background-checked, trained, and uniformed.",
  },
  {
    icon: Star,
    title: "4.9/5 Trustpilot",
    desc: "Our reputation is built on 171 verified 5-star reviews from real customers.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    desc: "We respond to all enquiries within 1 hour and are available Mon–Fri 8am–6pm and Sat 8am–3pm.",
  },
  {
    icon: CheckCircle2,
    title: "Free Surveys",
    desc: "We conduct free virtual or in-person surveys to ensure accurate pricing.",
  },
];

const stats = [
  { val: "5,000+", label: "Moves Completed" },
  { val: "10+", label: "Years in Business" },
  { val: "4.9/5", label: "Trustpilot Rating" },
  { val: "323", label: "Google Reviews" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#1C2B3A] py-16">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Our Story</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                About Octagon Removals
              </h1>
              <p className="text-slate-300 text-lg max-w-xl mx-auto">
                A London removals company built on trust, transparency, and an unwavering commitment to doing the job right.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story section */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold text-sm tracking-widest uppercase">Who We Are</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2 mb-5" style={{ fontFamily: "Sora, sans-serif" }}>
                London's Trusted Removals Partner
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Octagon Removals was founded with a simple belief: moving home or office should be a positive experience, 
                not a stressful one. Over more than a decade of operating across London and the M25, we have built our 
                reputation one move at a time — by being reliable, transparent, and genuinely caring about the outcome for every customer.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                We are a family-run business, and that ethos runs through everything we do. Every member of our team is 
                personally vetted, professionally trained, and takes pride in their work. We don't cut corners, we don't 
                use subcontractors, and we never spring hidden charges on our customers.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our fixed-price guarantee means you know exactly what you'll pay before the van arrives. Our free survey 
                process — available virtually or in person — ensures we understand your move fully before we quote.
              </p>
              <Link href="/get-quote">
                <button className="btn-cta text-sm px-7 py-3">
                  Get Your Free Quote →
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={HERO_IMAGE} alt="Octagon Removals team" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-green-600 py-14">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                    {stat.val}
                  </div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-50 py-16">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-green-600 font-semibold text-sm tracking-widest uppercase">Our Commitments</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2" style={{ fontFamily: "Sora, sans-serif" }}>
                Why Choose Octagon Removals
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-green-200 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <val.icon size={22} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1C2B3A] py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Ready to Experience the Octagon Difference?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Get your free, no-obligation quote today and see why thousands of London families and businesses trust us with their moves.
            </p>
            <Link href="/get-quote">
              <button className="btn-cta text-base px-10 py-4">
                Get My Free Quote →
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" />
    </div>
  );
}
