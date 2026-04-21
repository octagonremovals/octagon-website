import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";
import {
  Home, Package, Truck, Shield, Clock, CheckCircle2,
  Star, Phone, ChevronDown, ChevronUp, ArrowRight,
  MapPin, Award, Users, Wrench
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── CDN images ──────────────────────────────────────────────────────────────
// Real Octagon Removals photos from company archive
const HERO_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const PACKING_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";
const OFFICE_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";
const TEAM_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg";
const HOUSE1_IMG   = "https://octagonremovals.co.uk/wp-content/uploads/2024/01/IMG_7354.jpg";
const HOUSE2_IMG   = "https://octagonremovals.co.uk/wp-content/uploads/2024/01/IMG_7499.jpg";
const PACKING2_IMG = "https://octagonremovals.co.uk/wp-content/uploads/2024/01/IMG_2230.jpg";
const FURNITURE_IMG= "https://octagonremovals.co.uk/wp-content/uploads/2023/12/IMG_9953-1024x768.jpg";

const GOLD = "#B8960C";
const DARK = "#0F1923";
const OFF_WHITE = "#F5F3EF";

// ── Contact Form ─────────────────────────────────────────────────────────────
function HouseContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", gdpr: false });
  const [submitted, setSubmitted] = useState(false);
  const submitContact = trpc.leads.submitContact.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      subject: "House Removals Enquiry",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <CheckCircle2 size={48} style={{ color: GOLD }} className="mb-4" />
        <h3 className="text-xl font-bold mb-2" style={{ color: DARK }}>Thank You!</h3>
        <p className="text-gray-600">We'll be in touch within 1 hour during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold mb-1" style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}>
        Get a Free House Removal Quote
      </h3>
      <p className="text-sm text-gray-500 mb-4">No obligation. Fixed price. Response within 1 hour.</p>
      <input
        type="text" required placeholder="Your Name"
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <input
        type="tel" required placeholder="Phone Number"
        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <input
        type="email" required placeholder="Email Address"
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600"
      />
      <textarea
        required placeholder="Tell us about your move (from/to, property size, date)"
        rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-600 resize-none"
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required checked={form.gdpr}
          onChange={e => setForm({ ...form, gdpr: e.target.checked })}
          className="mt-1 accent-yellow-600"
        />
        <span className="text-xs text-gray-500">
          I consent to Octagon Removals Ltd storing and processing my personal data to respond to this enquiry, in accordance with our{" "}
          <Link href="/privacy-policy" className="underline" style={{ color: GOLD }}>Privacy Policy</Link>.
        </span>
      </label>
      <button
        type="submit" disabled={submitContact.isPending}
        className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-all hover:opacity-90"
        style={{ background: GOLD, color: "#fff" }}
      >
        {submitContact.isPending ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  );
}

// ── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="font-semibold text-sm" style={{ color: DARK }}>{q}</span>
        {open ? <ChevronUp size={16} style={{ color: GOLD }} className="shrink-0" /> : <ChevronDown size={16} style={{ color: GOLD }} className="shrink-0" />}
      </button>
      {open && <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

const faqs = [
  { q: "How far in advance should I book my house removal?", a: "We recommend booking at least 2 to 4 weeks in advance, especially for moves at the end of the month or during summer when demand is highest. That said, we do accommodate last-minute moves where capacity allows, so it's always worth calling us." },
  { q: "Do you provide packing materials and boxes?", a: "Yes. We supply double-walled boxes, bubble wrap, packing paper, wardrobe boxes and specialist crates for fragile items. You can add a full packing service to your quote, or we can simply supply the materials and let you pack at your own pace." },
  { q: "Are my belongings insured during the move?", a: "Absolutely. We carry comprehensive goods-in-transit insurance per vehicle and per item. We also photograph key items before loading to record their condition, which protects both you and us in the unlikely event of a dispute." },
  { q: "What happens if my items don't fit in the vehicle?", a: "We assess your inventory carefully before the move and allocate the right vehicle size. If we have provided a 7.5-tonne truck and your items still don't fit, we guarantee to send an additional vehicle at no extra charge. No surprise fees, ever." },
  { q: "Can you dismantle and reassemble furniture?", a: "Yes, our team is trained in furniture dismantling and reassembly. From flat-pack wardrobes to solid oak beds, we handle it all. Just let us know when booking and we'll include it in your quote." },
  { q: "Do you move pianos or other specialist items?", a: "Yes. We have a dedicated piano moving team with specialist equipment. We also handle antiques, artwork, large mirrors and other high-value items with the extra care they deserve." },
  { q: "What areas of London do you cover?", a: "We cover all 32 London boroughs and the wider M25 area, including parts of Essex, Kent, Surrey and Hertfordshire. We also handle long-distance moves across the UK." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function HouseRemovalsPage() {
  return (
    <div style={{ background: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>
      <SEOHead
        title="House Removals London | Fixed Price, Fully Insured | Octagon Removals"
        description="Professional house removals across London and the M25. Fixed price, no hidden fees, fully insured. 4.9★ Trustpilot. Call 0208 521 8000 for a free quote."
        canonical="/services/house-removals"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[520px] flex items-end"
        style={{
          background: `linear-gradient(to right, ${DARK}ee 45%, transparent 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="container py-20">
          <p className="eyebrow mb-3">Residential Removals London</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            House Removals London
          </h1>
          <p className="text-gray-300 max-w-lg mb-8 text-sm leading-relaxed">
            Expert house removals across London and the M25. Fixed prices, fully insured, no hidden fees.
            Trusted by 15,000+ London families since 2017.
          </p>
          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { icon: Star, label: "4.9/5 Trustpilot" },
              { icon: Shield, label: "Fully Insured" },
              { icon: Clock, label: "Response in 1 Hour" },
              { icon: Award, label: "Est. 2017" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white text-xs">
                <Icon size={14} style={{ color: GOLD }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:02085218000"
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Phone size={14} /> 0208 521 8000
            </a>
            <Link
              href="/get-quote"
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO + FORM ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <p className="eyebrow mb-3">London House Removals</p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
              >
                Moving Home in London Should Feel Like a Fresh Start, Not a Headache
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Moving house is one of the most stressful things you can do. We know that, because we've helped over 15,000 London families do it since 2017. The boxes, the logistics, the worry about your furniture arriving in one piece - it's a lot to manage on top of everything else going on in your life.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                At Octagon Removals, we take that weight off your shoulders. Our team handles everything from the first box to the last piece of furniture, so you can focus on what actually matters: settling into your new home. We work across all 32 London boroughs and the wider M25 area, and we've built our reputation on one simple principle - do the job properly, every single time.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Whether you're moving a studio flat in Islington or a five-bedroom family home in Bromley, you'll get the same level of care and the same fixed, transparent price. No surprises on moving day. Just a smooth, well-organised move that leaves you smiling.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, text: "Fixed, transparent pricing" },
                  { icon: Shield, text: "Fully insured, every move" },
                  { icon: Package, text: "Full packing service available" },
                  { icon: Truck, text: "Right vehicle, guaranteed" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon size={14} style={{ color: GOLD }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <HouseContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">What We Offer</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Everything Your Move Needs, Under One Roof
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "Full House Removals", desc: "We handle the entire move from start to finish. Loading, transport, unloading and placement in your new home." },
              { icon: Package, title: "Professional Packing", desc: "Our packing team wraps and boxes everything using premium materials. Fragile items get specialist crating." },
              { icon: Wrench, title: "Furniture Dismantling", desc: "We dismantle beds, wardrobes and flat-pack furniture before the move and reassemble everything at your new address." },
              { icon: Truck, title: "Man and Van", desc: "For smaller moves, studio flats or single-room relocations, our man and van service is fast, flexible and affordable." },
              { icon: Shield, title: "High-Value Item Moves", desc: "Pianos, antiques, artwork and large mirrors handled by specialists with the right equipment and full insurance." },
              { icon: MapPin, title: "Long-Distance Moves", desc: "Moving out of London? We cover the whole of the UK, with the same fixed pricing and professional service." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6 flex flex-col transition-all duration-300 cursor-default"
                style={{ background: "#1a2535", border: `1px solid #2a3545` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${GOLD}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <Icon size={28} style={{ color: GOLD }} className="mb-4" />
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-16" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[PACKING_IMG, HOUSE1_IMG, HOUSE2_IMG, PACKING2_IMG].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img src={src} alt={`Octagon house removals ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">The Process</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How Your Move Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Get in Touch", desc: "Call us or fill in the form. Tell us about your move and we'll get back to you within the hour." },
              { step: "02", title: "Book a Survey", desc: "One of our consultants visits in person or via video call to assess your requirements and give you a fixed price." },
              { step: "03", title: "Accept Your Quote", desc: "You receive a detailed, fixed-price quote within 1 hour of the survey. No hidden extras, ever." },
              { step: "04", title: "Moving Day", desc: "Our team arrives on time, handles everything with care, and has you settled into your new home by the end of the day." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                  style={{ background: `${GOLD}22`, color: GOLD, border: `2px solid ${GOLD}44` }}
                >
                  {step}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OCTAGON ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Why Choose Us</p>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
              >
                We Don't Just Move Boxes. We Move Lives.
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Transparent Fixed Quotes", desc: "Your price is agreed upfront based on your inventory. What we quote is what you pay. No last-minute additions, no surprises." },
                  { icon: Award, title: "Space Guarantee", desc: "If we've allocated a 7.5-tonne truck and your items don't fit, we bring an additional vehicle at no extra charge. Simple as that." },
                  { icon: CheckCircle2, title: "Photographic Evidence", desc: "We photograph key items before we move them. This protects you and gives you complete peace of mind throughout the process." },
                  { icon: Users, title: "Experienced, Vetted Team", desc: "Every member of our team is trained, background-checked and takes genuine pride in their work. Your home is in safe hands." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                      <Icon size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: DARK }}>{title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={PACKING_IMG} alt="Octagon packing service" className="rounded-xl w-full h-48 object-cover" />
              <img src={FURNITURE_IMG} alt="Octagon furniture securing" className="rounded-xl w-full h-48 object-cover mt-6" />
              <img src={HOUSE2_IMG} alt="Octagon house move" className="rounded-xl w-full h-48 object-cover -mt-6" />
              <img src={PACKING2_IMG} alt="Octagon packing team" className="rounded-xl w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Client Reviews</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Gordon Slaven",
                location: "Kingston upon Thames to York",
                text: "The pre-contract communications were clear and helpful. The price was very competitive and no deposit was required. On the day, the team arrived on time and began work immediately. Having had a lot of experience with removal companies, I can honestly say this was the best service I have ever had.",
                date: "February 2025",
              },
              {
                name: "Matthias Winkler",
                location: "Islington, London",
                text: "Nothing broke and not even the big, heavy turn-of-the-century furniture from Vienna had a single scratch. The move was very well prepared and organised from beginning to end. Very efficient, professional and a very good price for the quality of service.",
                date: "January 2025",
              },
              {
                name: "Sarah M.",
                location: "Kensington, London",
                text: "Absolutely flawless from start to finish. The team arrived on time, handled our antiques with extraordinary care and had us settled in our new home by 3pm. The fixed price meant no nasty surprises on moving day. Worth every penny.",
                date: "March 2025",
              },
            ].map(({ name, location, text, date }) => (
              <div key={name} className="rounded-xl p-6 flex flex-col" style={{ background: "#1a2535" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={GOLD} style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: `${GOLD}22`, color: GOLD }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{location} · {date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.trustpilot.com/review/octagonremovals.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: GOLD }}
            >
              <Star size={14} fill={GOLD} /> 4.9/5 from 500+ verified reviews on Trustpilot
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="py-20" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Coverage</p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: DARK, fontFamily: "'Cormorant Garamond', serif" }}
              >
                We Cover All of London and the M25
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Based in North London, our teams are on the road every day across all 32 London boroughs and the wider M25 area. We also cover selected areas of Essex, Kent, Surrey and Hertfordshire, and handle long-distance moves across the UK.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "North London: Islington, Haringey, Enfield",
                  "East London: Stratford, Romford, Newham",
                  "West London: Ealing, Harrow, Uxbridge",
                  "South London: Wandsworth, Bromley, Croydon",
                  "South West: Kingston, Epsom, Richmond",
                  "Home Counties: Essex, Kent, Surrey, Herts",
                ].map(area => (
                  <div key={area} className="flex items-start gap-2 text-xs text-gray-700">
                    <MapPin size={12} style={{ color: GOLD }} className="mt-0.5 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={TEAM_IMG} alt="Octagon Removals London team" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">FAQ's: House Removals</p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #1a2535 100%)`,
          borderTop: `3px solid ${GOLD}`,
        }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Move? Let's Make It Happen.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
            Get a free, fixed-price quote today. No obligation, no hidden fees. Just a straightforward answer within the hour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:02085218000"
              className="flex items-center gap-2 px-8 py-4 rounded font-semibold"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Phone size={16} /> 0208 521 8000
            </a>
            <Link
              href="/get-quote"
              className="flex items-center gap-2 px-8 py-4 rounded font-semibold border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

