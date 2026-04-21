/*
 * OFFICE RELOCATION PAGE - Octagon Removals
 * Human-written, SEO-optimised content based on the original page.
 * Colours: #0F1923 charcoal, #B8960C gold, #F5F3EF off-white.
 * Fonts: Cormorant Garamond (headings), DM Sans (body/UI).
 */
import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";
import {
  CheckCircle2, Phone, ChevronRight, Clock, Shield,
  Truck, Users, Building2, Package, ArrowRight,
  ChevronDown, ChevronUp, Leaf, Headphones, BarChart3,
  Wrench, FileText, CalendarCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHARCOAL = "#0F1923";
const GOLD = "#B8960C";
const OFF_WHITE = "#F5F3EF";
const DARK_CARD = "#141E28";

// Real images scraped from octagonremovals.co.uk/services/office-relocation/
const IMG_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-relocation-workers_fd6c7e5c.webp";
const IMG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-relocation-workers_fd6c7e5c.webp";
const IMG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-relocation-team-office_9726bd70.webp";
const IMG_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-relocation-desk-setup-left_f001c0a5.webp";
const IMG_4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-relocation-desk-setup-right_564c3241.webp";
const IMG_5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";
const IMG_6 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/office-move-premium-T2bzjdAbqMKwuuGSB5iGHa.webp";

// Contact Form
function OfficeContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", gdpr: false });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.leads.submitContact.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      subject: "Office Relocation Enquiry",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
        <CheckCircle2 size={48} style={{ color: GOLD }} />
        <h3 className="text-2xl font-bold" style={{ color: OFF_WHITE, fontFamily: "'Cormorant Garamond', serif" }}>
          Thank You
        </h3>
        <p className="text-sm" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
          We'll be in touch within 10 minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold mb-1" style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif" }}>
        Get a Free Office Move Quote
      </h3>
      <p className="text-xs mb-2" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
        We'll call you back within 10 minutes during business hours.
      </p>
      {[
        { key: "name", label: "Your Name", type: "text", placeholder: "e.g. James Thompson" },
        { key: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 07700 900000" },
        { key: "email", label: "Email Address", type: "email", placeholder: "e.g. james@company.co.uk" },
      ].map(({ key, label, type, placeholder }) => (
        <div key={key} className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
            {label}
          </label>
          <input
            type={type}
            placeholder={placeholder}
            value={(form as unknown as Record<string, string>)[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            required
            className="px-4 py-3 rounded text-sm outline-none focus:ring-2 transition-all"
            style={{
              background: "#1a2535",
              border: "1px solid #2a3a4a",
              color: OFF_WHITE,
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
          Tell Us About Your Move
        </label>
        <textarea
          rows={3}
          placeholder="Office size, move date, any special requirements..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="px-4 py-3 rounded text-sm outline-none resize-none transition-all"
          style={{
            background: "#1a2535",
            border: "1px solid #2a3a4a",
            color: OFF_WHITE,
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.gdpr}
          onChange={(e) => setForm((f) => ({ ...f, gdpr: e.target.checked }))}
          required
          className="mt-1 accent-yellow-600"
        />
        <span className="text-xs leading-relaxed" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
          I consent to Octagon Removals Ltd storing and processing my personal data to respond to this enquiry, in accordance with our{" "}
          <Link href="/privacy-policy" className="underline" style={{ color: GOLD }}>Privacy Policy</Link>.
        </span>
      </label>
      <p className="text-center text-xs mt-1 mb-2" style={{ color: "#7a8a9a", fontFamily: "'DM Sans', sans-serif" }}>
        🔒 Your details are safe. No spam. No obligation.
      </p>
      <button
        type="submit"
        disabled={submitMutation.isPending || !form.gdpr}
        className="mt-2 py-4 font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 disabled:opacity-50"
        style={{ background: GOLD, color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
      >
        {submitMutation.isPending ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  );
}

// FAQ Item
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b transition-all"
      style={{ borderColor: "#1e2d3d" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-base font-semibold" style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>
          {q}
        </span>
        {open
          ? <ChevronUp size={18} style={{ color: GOLD, flexShrink: 0 }} />
          : <ChevronDown size={18} style={{ color: GOLD, flexShrink: 0 }} />
        }
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

// Move Timeline Planner Widget
function MovePlanner() {
  const [moveDate, setMoveDate] = useState("");
  const CHARCOAL_LOCAL = "#0F1923";
  const GOLD_LOCAL = "#B8960C";
  const DARK_CARD_LOCAL = "#141E28";
  const OFF_WHITE_LOCAL = "#F5F3EF";

  const getResult = () => {
    if (!moveDate) return null;
    const today = new Date();
    const target = new Date(moveDate);
    const diffMs = target.getTime() - today.getTime();
    const diffWeeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
    if (diffWeeks >= 12) return {
      icon: "✅",
      msg: "Perfect timing. You have enough time for a full survey, move plan, and out-of-hours scheduling. Call us this week to lock in your date.",
    };
    if (diffWeeks >= 6) return {
      icon: "⚡",
      msg: "Good timing. We can still plan a smooth move. Contact us within the next 5 days to secure your slot.",
    };
    if (diffWeeks >= 3) return {
      icon: "⚠️",
      msg: "Tight but manageable. We handle last-minute commercial moves regularly. Call 0208 521 8000 now — don't wait.",
    };
    return {
      icon: "🚨",
      msg: "Urgent. Call us immediately on 0208 521 8000. We have emergency slots available for time-critical moves.",
    };
  };

  const result = getResult();

  return (
    <section className="py-20 md:py-28" style={{ background: CHARCOAL_LOCAL }}>
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD_LOCAL, fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD_LOCAL }} />
            Planning Tool
            <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD_LOCAL }} />
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: OFF_WHITE_LOCAL, fontFamily: "'Cormorant Garamond', serif" }}>
            When Should You Start Planning Your Move?
          </h2>
        </div>
        <div className="p-8 rounded-lg" style={{ background: DARK_CARD_LOCAL, border: "1px solid #1e2d3d" }}>
          <label className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
            Your target move date
          </label>
          <input
            type="date"
            value={moveDate}
            onChange={(e) => setMoveDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 rounded text-sm outline-none mb-6"
            style={{ background: "#1a2535", border: "1px solid #2a3a4a", color: OFF_WHITE_LOCAL, fontFamily: "'DM Sans', sans-serif" }}
          />
          {result && (
            <div className="rounded-lg p-6" style={{ background: "#0a1420", border: `1px solid ${GOLD_LOCAL}` }}>
              <p className="text-base leading-relaxed mb-5" style={{ color: OFF_WHITE_LOCAL, fontFamily: "'DM Sans', sans-serif" }}>
                <span className="mr-2">{result.icon}</span>{result.msg}
              </p>
              <a href="/get-quote">
                <button
                  className="w-full py-4 font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                  style={{ background: GOLD_LOCAL, color: CHARCOAL_LOCAL, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get a Quote for This Date →
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Main Page─
export default function OfficeRelocationPage() {
  const services = [
    { icon: Building2, title: "Office Removals", desc: "Desks, chairs, filing cabinets, partitions and office furniture - everything moved and reassembled at the new site.", closing: "Everything reassembled and ready to use on day one." },
    { icon: Wrench, title: "IT & Server Relocation", desc: "Careful disconnect, transport and reconnect of workstations, servers and network equipment following agreed procedures.", closing: "Your team logs in Monday morning as if they never moved." },
    { icon: Package, title: "Packing & Labelling", desc: "Professional packing with colour-coded labelling by department so every box lands in the right room.", closing: "No lost items. No wasted hours searching boxes." },
    { icon: Truck, title: "Office Clearance & Disposal", desc: "Responsible disposal and recycling of unwanted furniture, fittings and equipment - helping you meet end-of-lease conditions.", closing: "Full waste transfer documentation provided." },
    { icon: FileText, title: "Temporary Storage", desc: "Short and long-term storage for goods during office renovations, downsizing or waiting for new premises to be ready.", closing: "Flexible access. No long-term contracts." },
    { icon: CalendarCheck, title: "Out-of-Hours Moves", desc: "Evening, overnight and weekend moves so your staff finish work in one office and start Monday morning in the new one.", closing: "Zero disruption to your business operations." },
  ];

  const process = [
    { step: "01", title: "Pre-Move Survey", desc: "We survey your premises, assess access restrictions, building rules, and parking logistics. A detailed move plan is produced before any work begins." },
    { step: "02", title: "Dedicated Move Manager", desc: "A single point of contact is assigned to your project from day one. They coordinate everything - your building, our crew, your IT team." },
    { step: "03", title: "Packing & Asset Labelling", desc: "Commercial-grade packing with colour-coded labelling by department, floor, and desk number. Every item tracked from origin to destination." },
    { step: "04", title: "Out-of-Hours Relocation", desc: "We move overnight or at weekends to eliminate business disruption. Your staff leave one office on Friday and walk into the new one Monday morning." },
    { step: "05", title: "IT Reconnection & Sign-Off", desc: "We reconnect workstations and assist your IT team. A final walk-through confirms everything is in place before we leave." },
  ];

  const advantages = [
    { icon: Shield, title: "Safety First", desc: "Strict health and safety compliance, risk assessments and first-aid equipped vehicles ensure every move is protected." },
    { icon: Clock, title: "Reduced Downtime", desc: "Our organised processes minimise disruption so your operations resume quickly. Most clients are back to full capacity the next working day." },
    { icon: Headphones, title: "Dedicated Consultant", desc: "One point of contact before, during and after the move for clear communication and peace of mind. No being passed around." },
    { icon: BarChart3, title: "Tailored Solutions", desc: "Every move is customised - from partial packing and parking permits to planning your new office layout. We adapt to your project." },
    { icon: Leaf, title: "We Don't Just Skip It", desc: "Cleared furniture goes to charity, resale, or certified recycling — never landfill where avoidable. We provide waste transfer notes for your records, supporting your ESG reporting and end-of-lease obligations. Documentation available on request." },
    { icon: Users, title: "Most Clients Come Back", desc: "We don't treat office moves as one-off jobs. Most of our commercial clients call us again for their next move, refurbishment, or porterage work. That tells you more than any award." },
  ];

  const clients = [
    { name: "Tech & Creative Agencies", desc: "Fast, flexible moves that keep your team productive." },
    { name: "Law Firms", desc: "Secure handling of files, servers and client-sensitive equipment." },
    { name: "Property Management", desc: "Multi-site coordination and clearance for landlords and agents." },
    { name: "Public Sector & Education", desc: "Compliant, insured moves for councils and institutions." },
    { name: "Financial Services", desc: "Precision moves for trading desks and regulated environments." },
    { name: "Healthcare & Clinics", desc: "Careful relocation of specialist medical equipment." },
  ];

  const faqs = [
    {
      q: "How much does an office relocation in London cost?",
      a: "Most small-to-medium office moves (up to 30 workstations) in London range from £800 to £3,500 depending on floor access, distance, volume and timing. Larger corporate moves are quoted on survey. We provide a fixed, itemised price before any work begins — no surprises on the day.",
    },
    {
      q: "How far in advance should we start planning?",
      a: "We recommend contacting us at least 4–6 weeks before your move date for small offices, and 8–12 weeks for larger relocations. This gives us time to survey your space, coordinate with your building management, arrange parking permits and produce a detailed move plan.",
    },
    {
      q: "Can you move us outside normal working hours?",
      a: "Yes. We regularly carry out evening, overnight and weekend relocations. Your staff leave on Friday, we move overnight, and everyone arrives at the new office Monday morning ready to work.",
    },
    {
      q: "Do you handle IT and server relocation?",
      a: "Yes. We carefully disconnect, transport and reconnect workstations, servers and network equipment following agreed procedures. For complex infrastructure, we coordinate directly with your IT team or managed service provider.",
    },
    {
      q: "Are you insured for commercial office removals?",
      a: "Yes. We carry full goods-in-transit and public liability insurance on every commercial job. Documentation available on request.",
    },
    {
      q: "Can you help with clearance of old furniture?",
      a: "Yes. Items go to charity, resale or certified recycling wherever possible. We provide waste transfer notes for your records.",
    },
    {
      q: "Do you offer storage during the move?",
      a: "Yes. Short and long-term storage for furniture, equipment or documents during renovations, phased moves or gap periods between leases.",
    },
    {
      q: "Do you provide a fixed price or charge by the hour?",
      a: "We always provide a fixed price agreed upfront based on a survey of your premises. No hourly surprises, no add-ons on move day. What we quote is what you pay.",
    },
  ];

   return (
    <div style={{ background: OFF_WHITE }}>
      <SEOHead
        title="Office Relocation London | Overnight & Weekend Moves | Octagon Removals"
        description="Expert office removals across London. Out-of-hours moves, IT relocation, packing & clearance. Fixed price, fully insured. Call 0208 521 8000 for a free survey."
        canonical="/services/office-relocation"
      />
      <Navbar />
      {/* HERO */}
      <section
        className="relative flex items-end min-h-[520px] md:min-h-[620px]"
        style={{ background: CHARCOAL }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_HERO})`, opacity: 0.35 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,25,35,0.95) 40%, rgba(15,25,35,0.4) 100%)" }} />
        <div className="relative container py-20 md:py-28 max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 flex items-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            Commercial Removals London
            <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: OFF_WHITE, fontFamily: "'Cormorant Garamond', serif" }}>
            Office Relocation<br />Services in London
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed" style={{ color: "#c8d8e8", fontFamily: "'DM Sans', sans-serif" }}>
            London businesses trust Octagon to move their offices without losing a single working day. We've completed 500+ commercial relocations — from Shoreditch startups to Canary Wharf corporations — with zero cancellations and one fixed price agreed upfront.
          </p>
          {/* HERO STATS ROW */}
          <div className="flex flex-wrap gap-0 mb-10 border-t border-b" style={{ borderColor: "rgba(184,150,12,0.3)" }}>
            {[
              { value: "500+", label: "Office Moves Completed" },
              { value: "10 yrs", label: "Commercial Experience" },
              { value: "4.8/5", label: "Google Reviews" },
              { value: "0", label: "Cancellations Ever" },
            ].map(({ value, label }, i, arr) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center py-5 px-6 flex-1 min-w-[120px]"
                style={{ borderRight: i < arr.length - 1 ? "1px solid rgba(184,150,12,0.3)" : "none" }}
              >
                <span className="text-3xl md:text-4xl font-bold" style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif" }}>{value}</span>
                <span className="text-xs mt-1 text-center uppercase tracking-wider" style={{ color: "rgba(245,243,239,0.6)", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-quote">
              <button
                className="flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                style={{ background: GOLD, color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
              >
                Get a Free Quote <ChevronRight size={16} />
              </button>
            </Link>
            <a href="tel:02085218000">
              <button
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase border border-white/30 transition-all hover:border-white/60"
                style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone size={16} /> 0208 521 8000
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: GOLD }}>
        <div className="container py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            "Fully Insured",
            "Out-of-Hours Available",
            "IT Relocation Included",
            "Fixed Price Quotes",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} style={{ color: CHARCOAL }} />
              <span className="text-xs font-bold tracking-wide uppercase" style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO + FORM */}
      <section className="py-20 md:py-28" style={{ background: OFF_WHITE }}>
        <div className="container grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              Office Relocation London
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Professional Office Relocation Services in London and Across the M25
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#3a4a5a", fontFamily: "'DM Sans', sans-serif" }}>
              We provide professional office relocation services in London and across the M25, helping businesses of all sizes move with minimal downtime. Our specialist office removals team has relocated over 500 London businesses — from single-floor startups in Shoreditch to multi-floor corporate offices in Canary Wharf and the City.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#3a4a5a", fontFamily: "'DM Sans', sans-serif" }}>
              Every relocation starts with a proper survey. We map out your existing space, understand what's going where, coordinate with your building management, and build a move schedule that fits your business - not the other way round. We adapt to your schedule, including out-of-hours and weekend work, so your operations face minimal disruption.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#3a4a5a", fontFamily: "'DM Sans', sans-serif" }}>
              We handle everything: packing and labelling, IT and server disconnection and reconnection, furniture assembly, office clearance and storage. Our skilled team brings a solutions-driven attitude, ensuring every relocation is carried out with precision and care. One company, one point of contact, one fixed price.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "500+", sub: "Office Moves Completed" },
                { label: "10 yrs", sub: "Commercial Experience" },
                { label: "4.8/5", sub: "Google Reviews" },
                { label: "London", sub: "London Based" },
              ].map(({ label, sub }) => (
                <div key={sub} className="p-4 rounded text-center" style={{ background: "#e8e4dc" }}>
                  <p className="text-2xl font-bold" style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif" }}>{label}</p>
                  <p className="text-xs mt-1" style={{ color: "#5a6a7a", fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: form */}
          <div className="rounded-lg p-8" style={{ background: DARK_CARD }}>
            <OfficeContactForm />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28" style={{ background: CHARCOAL }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              What We Do
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: OFF_WHITE, fontFamily: "'Cormorant Garamond', serif" }}>
              Office Relocation Services We Provide
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>
              From full office removals to IT relocation and clearance - every service is delivered by our own trained team, not subcontractors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, closing }) => (
              <div
                key={title}
                className="p-7 rounded-lg flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{ background: DARK_CARD, border: "1px solid #1e2d3d" }}
              >
                <Icon size={28} style={{ color: GOLD }} />
                <h3 className="text-lg font-bold" style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                <p className="text-sm font-bold" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>{closing}</p>
              </div>            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-4" style={{ background: CHARCOAL }}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {[
            { src: IMG_1, caption: "Office clearance — North London" },
            { src: IMG_2, caption: "Crew briefing — commercial job" },
            { src: IMG_3, caption: "Octagon fleet — ready to deploy" },
            { src: IMG_4, caption: "Multi-van operation — City of London" },
            { src: IMG_5, caption: "Furniture reassembly — new office setup" },
            { src: IMG_6, caption: "IT equipment relocation — server room" },
          ].map(({ src, caption }, i) => (
            <div key={i} className="aspect-square overflow-hidden relative">
              <img src={src} alt={caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1" style={{ background: "rgba(0,0,0,0.6)" }}>
                <span className="text-white block" style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>{caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              How It Works
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              Our Office Move Process
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "#5a6a7a", fontFamily: "'DM Sans', sans-serif" }}>
              Five steps. One fixed price. No surprises.
            </p>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
            <div className="grid md:grid-cols-5 gap-8">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold relative z-10"
                    style={{ background: CHARCOAL, color: GOLD, fontFamily: "'Cormorant Garamond', serif", border: `2px solid ${GOLD}` }}
                  >
                    {step}
                  </div>
                  <h3 className="text-base font-bold" style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOVE TIMELINE WIDGET */}
      <MovePlanner />

      {/* WHERE WE WORK */}
      <section className="py-20 md:py-28" style={{ background: "#e8e4dc" }}>
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              Coverage
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              We Relocate Offices Across London and the M25
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#3a4a5a", fontFamily: "'DM Sans', sans-serif" }}>
              Our commercial team operates across the whole of Greater London - from the City and Canary Wharf to Shoreditch, Westminster, South Bank and beyond. We also cover key business hubs in Kent, Surrey, Essex, Middlesex and Hertfordshire.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#3a4a5a", fontFamily: "'DM Sans', sans-serif" }}>
              If you're moving within London, out of London, or bringing your business into the capital, we can manage it. We've handled relocations from as far as Edinburgh and as local as the next street.
            </p>
            <div className="flex flex-wrap gap-3">
              {["City of London", "Canary Wharf", "Shoreditch", "Westminster", "South Bank", "Mayfair", "Hammersmith", "Croydon"].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: CHARCOAL, color: GOLD, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}>
              Who We Work With
            </p>
            <div className="grid grid-cols-2 gap-4">
              {clients.map(({ name, desc }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ background: CHARCOAL }}
                >
                  <CheckCircle2 size={16} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <span className="text-sm font-medium block" style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
                    <span className="text-xs mt-1 block" style={{ color: "rgba(245,243,239,0.5)", fontFamily: "'DM Sans', sans-serif" }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 md:py-28" style={{ background: CHARCOAL }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              The Octagon Difference
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: OFF_WHITE, fontFamily: "'Cormorant Garamond', serif" }}>
              Why London Businesses Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-7 rounded-lg flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{ background: DARK_CARD, border: "1px solid #1e2d3d" }}
              >
                <Icon size={28} style={{ color: GOLD }} />
                <h3 className="text-lg font-bold" style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9aabb8", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28" style={{ background: OFF_WHITE }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              Client Stories
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James T.",
                company: "Tech Agency, Canary Wharf",
                text: "We moved our entire office of 45 people over a weekend. Octagon were professional, efficient, and nothing was damaged. The team even helped set up the new space. I'd recommend them without hesitation.",
                date: "February 2025",
                moveDetails: "Move: 45-person office, 3 floors, overnight relocation, Canary Wharf",
              },
              {
                name: "Rachel S.",
                company: "Law Firm, City of London",
                text: "We needed an overnight move with zero disruption to client files and IT systems. Octagon delivered exactly that. Staff arrived Monday morning to a fully operational office. Exceptional service.",
                date: "January 2025",
                moveDetails: "Move: Law firm, 2 floors, server room + document archive, City of London",
              },
              {
                name: "David M.",
                company: "Property Management, Westminster",
                text: "Third time using Octagon for a commercial relocation. Same high standard every time. Fixed price, clear communication, and a team that genuinely cares about getting it right.",
                date: "March 2025",
                moveDetails: "Move: Multi-office consolidation, furniture clearance included, Westminster",
              },
            ].map(({ name, company, text, date, moveDetails }) => (
              <div key={name} className="p-8 rounded-lg flex flex-col gap-5" style={{ background: DARK_CARD }}>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: GOLD }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: "#c8d8e8", fontFamily: "'DM Sans', sans-serif" }}>
                  "{text}"
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-bold" style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}>{name}</p>
                  <p className="text-xs" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>{company}</p>
                  <p className="text-xs mt-1" style={{ color: "#5a6a7a", fontFamily: "'DM Sans', sans-serif" }}>{date}</p>
                  <p className="text-xs mt-1 italic" style={{ color: "rgba(184,150,12,0.6)", fontFamily: "'DM Sans', sans-serif" }}>{moveDetails}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ background: CHARCOAL }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3" style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
              FAQ's: Office Relocation
              <span style={{ display: 'inline-block', width: 40, height: 1, background: GOLD }} />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: OFF_WHITE, fontFamily: "'Cormorant Garamond', serif" }}>
              Common Questions
            </h2>
          </div>
          <div>
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 md:py-28" style={{ background: GOLD }}>
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: CHARCOAL, fontFamily: "'Cormorant Garamond', serif" }}>
            Ready to Plan Your Office Move?
          </h2>
          <p className="text-base mb-10" style={{ color: "#2a3a1a", fontFamily: "'DM Sans', sans-serif" }}>
            Get a fixed, itemised quote with no obligation. We'll call you back within 10 minutes during business hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-quote">
              <button
                className="flex items-center gap-2 px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all hover:brightness-90"
                style={{ background: CHARCOAL, color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
            </Link>
            <a href="tel:02085218000">
              <button
                className="flex items-center gap-2 px-10 py-4 font-bold text-sm tracking-widest uppercase border-2 border-current transition-all hover:bg-black/10"
                style={{ color: CHARCOAL, fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone size={16} /> 0208 521 8000
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

