/**
 * LAYOUT ABC — "The Signature" — ENHANCED v3
 * Foundation: A (Architect) + B (Estate) + C (Magazine)
 * Full company data from octagonremovals.co.uk
 *
 * WIDGET SEQUENCE (conversion-optimised, based on competitor research):
 * 1. Top info bar (phone + USP)
 * 2. Sticky nav (logo + links + CTA)
 * 3. Hero — asymmetric split, headline + 2-step quote form
 * 4. Trust bar — 5 social proof signals
 * 5. Services grid — 6 services with real photos
 * 6. Why Octagon — dark full-bleed with stats + glass panel
 * 7. Postcode coverage checker
 * 8. Our Story — "Artists of Removals" brand narrative with Pawel
 * 9. Process — 4 steps
 * 10. Reviews — 6 real Google reviews
 * 11. Video section — YouTube embed
 * 12. FAQ accordion — 5 questions with Schema
 * 13. Areas served — M25 coverage
 * 14. Final CTA banner
 * 15. Footer
 *
 * Palette: Charcoal #0F1923, Gold #B8960C, Off-white #F5F3EF, Navy #0C1420
 * Fonts: Cormorant Garamond (display), DM Sans (body/UI)
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Shield, Clock, Award, CheckCircle2, Loader2,
  Phone, ArrowRight, Package, Building2, Truck, Warehouse,
  Globe, Users, ChevronDown, MapPin, Play, Menu, X,
  Quote, Zap, Camera, Lock, ChevronRight, MessageSquare,
  CalendarCheck, Gem, Boxes, CircleArrowRight
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import LondonMap from "@/components/LondonMap";
import BlogSlider from "@/components/BlogSlider";

// ── REAL PHOTOS from octagonremovals.co.uk ─────────────────────────────
const HERO_IMG      = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-slider-2_410682e3.jpeg";           // Octagon fleet — 3 vans, bright blue sky
const SKYLINE_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OCTAGON-BIG-BEN-2-1024x768_c4fed645.jpg"; // Octagon van + Big Ben
const PACKING_IMG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Packing-and-Moving-890x664_ce08ecc2.jpg"; // Packing service
const OFFICE_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/removals-company-commercial-office-move-_4871c2b1.jpg"; // Office move
const FURNITURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Furniure-Securing-London-Removals-Company_cd87b496.jpg"; // Furniture securing
const PIANO_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/piano-move_d00780c5.jpeg";             // Piano move (keep existing)
const INTL_IMG      = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OCTAGON-REMOVALS-INTERNATIONAL-London-Company-Large-Large-890x664_25d392b1.jpeg"; // International
const PAWEL_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Pawel-Walerczuk_d0f1e3c5.jpg";          // Pawel portrait (official)
const TEAM_WORK1    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/London-Removals-Company-Team_3c056c3d.jpg"; // Team photo
const TEAM_WORK2    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/1-890x664_8b0fc891.jpg";                // Team at work 2
const TEAM_OCTAGON  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Woolwich-commercial-moving-company-890x664_598e73ee.jpg"; // Commercial move
const TEAM_EPPING   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/Packing-London-Moving-Company-5-890x664_1d7d6a98.jpg"; // Packing team
const TEAM_OCTAGON2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/122032_6f922388.jpg";                   // Team photo 2
const TEAM_CLIENT   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/richmond-clients_cb42d7d0.jpeg";        // Richmond clients (keep)

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const NAVY     = "#0C1420";
const CREAM    = "#F5F0E8";
const SAND     = "#F5F3EF";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

// ── UK POSTCODE REGEX ────────────────────────────────────────────────────────
const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i;

// ── M25 COVERAGE AREAS ───────────────────────────────────────────────────────
const M25_AREAS = [
  "Barking", "Barnet", "Battersea", "Brentwood", "Bromley", "Camden", "Chelsea",
  "Chiswick", "Croydon", "Dartford", "Ealing", "Enfield", "Epping", "Epsom",
  "Finchley", "Fulham", "Greenwich", "Hackney", "Harrow", "Havering", "Holborn",
  "Islington", "Kensington", "Kingston upon Thames", "Lewisham", "Orpington",
  "Richmond", "Romford", "Tower Hamlets", "Twickenham", "Uxbridge",
  "Wandsworth", "Watford", "Westminster",
];

// ── HERO SLIDER ─────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    src: HERO_IMG,
    alt: "Octagon Removals fleet — 3 branded vans, London",
    // On mobile show the left side where the Octagon logo is visible
    mobilePosition: "object-left",
  },
  {
    src: SKYLINE_IMG,
    alt: "Octagon Removals van at Big Ben, London",
    mobilePosition: "object-center",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % HERO_SLIDES.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <>
      <img
        key={current}
        src={slide.src}
        alt={slide.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fading ? "opacity-0" : "opacity-100"
        } sm:object-center ${slide.mobilePosition}`}
      />
      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 600); }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-[#B8960C] w-5" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

// ── QUOTE FORM ───────────────────────────────────────────────────────────────
function QuoteForm({ source = "Homepage Hero" }: { source?: string }) {
  const [step, setStep]           = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({
    moveType: "", fromPostcode: "", toPostcode: "", moveDate: "",
    name: "", phone: "", email: "",
  });
  const submitQuote = trpc.leads.submitQuote.useMutation({ onSuccess: () => setSubmitted(true) });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const postcodeValid = (p: string) => !p || UK_POSTCODE_RE.test(p.trim());
  const canProceed = step === 1
    ? !!(form.moveType && form.fromPostcode && form.toPostcode && form.moveDate && postcodeValid(form.fromPostcode) && postcodeValid(form.toPostcode))
    : !!(form.name && form.phone);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 size={36} style={{ color: GOLD }} className="mx-auto mb-3" />
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: CHARCOAL, fontWeight: 600 }}>
          Quote Request Received
        </p>
        <p className="text-sm mt-1" style={{ color: "#666", fontFamily: "DM Sans, sans-serif" }}>
          We'll be in touch within 1 hour — Mon–Fri 8am–6pm, Sat 8am–3pm. Out of hours? We'll contact you first thing when we reopen.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-5">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{
                backgroundColor: step >= s ? GOLD : "transparent",
                border: `1px solid ${step >= s ? GOLD : "#ccc"}`,
                color: step >= s ? "#fff" : "#aaa",
                fontFamily: "DM Sans, sans-serif",
              }}>
              {s}
            </div>
            {s < 2 && <div className="w-10 h-px mx-1" style={{ backgroundColor: step > s ? GOLD : "#ddd" }} />}
          </div>
        ))}
        <span className="text-xs tracking-widest uppercase ml-2" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
          {step === 1 ? "Move Details" : "Your Details"}
        </span>
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          <select name="moveType" value={form.moveType} onChange={handleChange}
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif", color: form.moveType ? CHARCOAL : "#aaa" }}>
            <option value="">Type of Move</option>
            <option value="House Move">House Move</option>
            <option value="Moving & Packing">Moving &amp; Packing</option>
            <option value="Office Move">Office Move</option>
            <option value="Man & Van">Man &amp; Van</option>
            <option value="Storage">Storage</option>
            <option value="International Removal">International Removal</option>
            <option value="Piano / Specialist">Piano / Specialist Item</option>
            <option value="Other">Other (describe below)</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input name="fromPostcode" value={form.fromPostcode} onChange={handleChange}
                placeholder="From Postcode"
                className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
                style={{ fontFamily: "DM Sans, sans-serif", borderColor: form.fromPostcode && !postcodeValid(form.fromPostcode) ? "#e53e3e" : undefined }} />
              {form.fromPostcode && !postcodeValid(form.fromPostcode) && (
                <p className="text-xs mt-1" style={{ color: "#e53e3e", fontFamily: "DM Sans, sans-serif" }}>Invalid postcode</p>
              )}
            </div>
            <div>
              <input name="toPostcode" value={form.toPostcode} onChange={handleChange}
                placeholder="To Postcode"
                className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
                style={{ fontFamily: "DM Sans, sans-serif", borderColor: form.toPostcode && !postcodeValid(form.toPostcode) ? "#e53e3e" : undefined }} />
              {form.toPostcode && !postcodeValid(form.toPostcode) && (
                <p className="text-xs mt-1" style={{ color: "#e53e3e", fontFamily: "DM Sans, sans-serif" }}>Invalid postcode</p>
              )}
            </div>
          </div>
          <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date"
            min={new Date().toISOString().split("T")[0]}
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif", color: form.moveDate ? CHARCOAL : "#aaa" }} />
          <button onClick={() => canProceed && setStep(2)} disabled={!canProceed}
            className="w-full py-3 mt-2 text-sm tracking-widest uppercase font-medium transition-all"
            style={{ backgroundColor: canProceed ? CHARCOAL : "#ddd", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
            Continue →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" type="email"
            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600"
            style={{ fontFamily: "DM Sans, sans-serif" }} />
          {form.moveType === "Other" && (
            <textarea name="otherRequest" value={(form as any).otherRequest || ""}
              onChange={e => setForm({ ...form, ...(e.target.name === "otherRequest" ? { otherRequest: e.target.value } as any : {}) })}
              placeholder="Please describe your request..."
              rows={3}
              className="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none focus:border-yellow-600 resize-none"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          )}
          <p className="text-xs" style={{ color: "#aaa", fontFamily: "DM Sans, sans-serif" }}>
            <Lock size={10} className="inline mr-1" />Your data is safe. We never share your details.
          </p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setStep(1)}
              className="px-4 py-3 text-sm border border-gray-200 hover:border-gray-400 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}>← Back</button>
            <button
              onClick={() => canProceed && submitQuote.mutate({ ...form, source })}
              disabled={!canProceed || submitQuote.isPending}
              className="flex-1 py-3 text-sm tracking-widest uppercase font-medium transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: canProceed ? GOLD : "#ddd", color: canProceed ? "#fff" : "#aaa", fontFamily: "DM Sans, sans-serif" }}>
              {submitQuote.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── POSTCODE CHECKER ─────────────────────────────────────────────────────────
function PostcodeChecker() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult]     = useState<"covered" | "outside" | null>(null);

  const check = () => {
    if (!postcode.trim()) return;
    const pc = postcode.trim().toUpperCase();
    // M25 coverage: all London postcodes + surrounding counties
    const covered = /^(E|EC|N|NW|SE|SW|W|WC|BR|CR|DA|EN|HA|IG|KT|RM|SM|TW|UB|WD)[0-9]/.test(pc) ||
      /^(SL|GU|CM|SS|ME|TN|RH|KT)[0-9]/.test(pc);
    setResult(covered ? "covered" : "outside");
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex gap-0">
        <input
          value={postcode}
          onChange={e => { setPostcode(e.target.value); setResult(null); }}
          onKeyDown={e => e.key === "Enter" && check()}
          placeholder="Enter your postcode e.g. SW1A 1AA"
          className="flex-1 px-5 py-4 text-sm border border-gray-200 outline-none focus:border-yellow-600"
          style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}
        />
        <button onClick={check}
          className="px-6 py-4 text-sm tracking-widest uppercase font-medium"
          style={{ backgroundColor: CHARCOAL, color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
          Check
        </button>
      </div>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-3 px-4 py-3 flex items-center gap-3"
            style={{
              backgroundColor: result === "covered" ? "rgba(184,150,12,0.08)" : "rgba(229,62,62,0.06)",
              border: `1px solid ${result === "covered" ? "rgba(184,150,12,0.3)" : "rgba(229,62,62,0.2)"}`,
            }}>
            {result === "covered" ? (
              <>
                <CheckCircle2 size={16} style={{ color: GOLD, flexShrink: 0 }} />
                <span className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>
                  <strong>Great news!</strong> We cover your area. <Link href="/get-quote"><span className="underline cursor-pointer" style={{ color: GOLD }}>Get a free quote →</span></Link>
                </span>
              </>
            ) : (
              <>
                <Phone size={16} style={{ color: "#e53e3e", flexShrink: 0 }} />
                <span className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>
                  Your area may be outside our standard zone — <a href="tel:02085218000" className="underline" style={{ color: GOLD }}>call us on 0208 521 8000</a> and we'll see what we can do.
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#e8e8e8" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ fontFamily: "DM Sans, sans-serif" }}>
        <span className="text-sm font-medium pr-4" style={{ color: CHARCOAL }}>{q}</span>
        <ChevronDown size={16} style={{ color: GOLD, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            className="overflow-hidden">
            <p className="pb-5 text-sm leading-relaxed" style={{ color: "#666", fontFamily: "DM Sans, sans-serif" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function LayoutABC() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [videoPlaying, setVideoPlaying]     = useState(false);
  const [mobileServicesShown, setMobileServicesShown] = useState(4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    // Row 1
    { n: "01", icon: Truck,     title: "London Removals Services", href: "/services/house-removals",
      desc: "Reliable London movers. Expert home removals across London and nearby areas. Fixed price, fully insured.", img: HERO_IMG },
    { n: "02", icon: Building2, title: "Office Relocation Services", href: "/services/office-relocation",
      desc: "London's trusted commercial movers. Seamless moves, expert service. Weekend and out-of-hours available.", img: OFFICE_IMG },
    { n: "03", icon: Warehouse, title: "Storage In London",    href: "/services/storage",
      desc: "Secure storage in London. Short and long-term storage tailored to you. Pack and storage with ease.", img: FURNITURE_IMG },
    { n: "04", icon: Globe,     title: "International Removals", href: "/services/international-removals",
      desc: "Comprehensive international moves to Europe within a few days delivery. Full customs documentation.", img: INTL_IMG },
    // Row 2
    { n: "05", icon: Package,   title: "Packing / Unpacking",  href: "/services/packing-service",
      desc: "Professional packing with premium materials. White-glove care for antiques, artwork and fragile items.", img: PACKING_IMG },
    { n: "06", icon: Zap,       title: "Furniture Dismantling & Reassembly", href: "/services/furniture-assembly",
      desc: "Expert dismantling and reassembly of all furniture types. Beds, wardrobes, desks — handled with care.", img: TEAM_WORK1 },
    { n: "07", icon: Truck,     title: "Disposal",             href: "/services/disposal",
      desc: "Responsible disposal and recycling of unwanted items. We handle bulky waste, old furniture and appliances.", img: TEAM_WORK2 },
    { n: "08", icon: Shield,    title: "Deep Cleaning",        href: "/services/deep-cleaning",
      desc: "End-of-tenancy and post-move deep cleaning. Professional teams, all equipment provided.", img: TEAM_EPPING },
    // Row 3
    { n: "09", icon: Building2, title: "Office Clearance",     href: "/services/office-clearance",
      desc: "Complete office clearance and decommissioning. IT equipment, furniture, confidential waste disposal.", img: TEAM_OCTAGON },
    { n: "10", icon: Users,     title: "Porterage",            href: "/services/porterage",
      desc: "Short-distance moves within buildings. Ideal for office reshuffles, deliveries and internal relocations.", img: TEAM_OCTAGON2 },
    { n: "11", icon: Users,     title: "Piano & Specialist",   href: "/services/piano-removals",
      desc: "Expert handling of pianos, antiques, fine art and high-value items. Specialist equipment, fully insured.", img: PIANO_IMG },
    { n: "12", icon: Camera,    title: "Fine Art",             href: "/services/fine-art",
      desc: "Museum-grade handling for paintings, sculptures and collectibles. Custom crating, climate control available.", img: TEAM_CLIENT },
  ];

  const reviews = [
    { name: "Craig Bannister",  location: "Cheshunt, London",   rating: 5, date: "March 2025",
      text: "Can't thank these guys enough, from start to finish they were brilliant, from the initial enquiry and having all my questions answered to the removal day itself. Fast, efficient, really friendly and great pricing. Even trying to rush the stuff off their van at the end to save me any further money. Absolute legends! Honestly wouldn't have any problems recommending or using these guys again. Much Appreciated All!",
      type: "Residential Moving" },
    { name: "Des Campbell",     location: "Banstead, Surrey",   rating: 5, date: "February 2025",
      text: "This is the third time we've used Pawel and the team and we wouldn't consider using anyone else. They moved our daughter and my brother last year too. From start to finish they are professional, polite and punctual. The quotation stage with Pawel is painless and he always sends the quote quickly. Once Robert and the team arrive, they are a blur of activity! Nothing is too much trouble, they take care of your furniture, and they don't stop until the job is done… an amazing energy level and work ethic. Give them a try… very highly recommended!",
      type: "Residential Moving" },
    { name: "Janet Page",       location: "Epsom, Surrey",      rating: 5, date: "January 2025",
      text: "This is the second time I could count on Octagon Removals! Thanks to Rafal, Andrew and Filip for their hard work in removing my furniture to storage, on probably the hottest day of the year… and for being great 'Artists' in tetris to make everything fit in a small space! Thanks guys — would highly recommend this team to anyone.",
      type: "Residential Moving & Storage" },
    { name: "Jon Spence",       location: "Swanley, Kent",      rating: 5, date: "December 2024",
      text: "Robert and his team arrived bang on time and took perfect care of all our belongings, loading 3 vans and moving us without a single issue. Everything was carefully protected and arrived in perfect condition.",
      type: "Residential Moving" },
    { name: "Patricia Marcos",  location: "Wapping, London",    rating: 5, date: "November 2024",
      text: "Thomas and Kajtek were very professional and experienced. They showed up on time with a positive, kind and can-do attitude. The job was done quickly but with care within an affordable price.",
      type: "Residential Moving" },
    { name: "Kerrita",          location: "London",             rating: 5, date: "October 2024",
      text: "I had to reschedule my move on short notice and they were able to accommodate me. I purchased both their packing and moving services and was very happy with the results. They were quick, organised, careful and professional.",
      type: "Moving & Packing" },
  ];

  const faqs = [
    {
      q: "How much does a house removal in London cost?",
      a: "The cost depends on the size of your property, distance, and additional services. A typical 2-bedroom flat move within London starts from around £400–£900. A 3-bedroom house move ranges from £700–£1,500. We always provide a fixed, all-inclusive price after a free survey — no hidden charges on moving day.",
    },
    {
      q: "Do you provide a fixed price or an estimate?",
      a: "We provide both fixed prices and hourly rates depending on the nature of your move. For most house and office moves we offer a fixed price after a free survey — the price we quote is the price you pay, with no surprises on moving day. For smaller or more flexible jobs, an hourly rate may be more suitable. We'll advise which is best for you.",
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 2–4 weeks in advance for residential moves, and 8–12 weeks for office relocations. That said, we can often accommodate shorter notice — call us on 0208 521 8000 and we'll do our best to fit you in.",
    },
    {
      q: "Are you insured?",
      a: "Yes. We carry goods-in-transit insurance up to £50,000 per vehicle, plus public liability insurance. For high-value or specialist items (pianos, antiques, fine art), we can discuss specific coverage in advance. Documentation available on request.",
    },
    {
      q: "Do you cover areas outside London?",
      a: "Yes. We cover all of London and the M25 corridor, including Essex, Kent, Surrey, Middlesex and Hertfordshire. We also offer international removals to Europe with delivery in 2–7 days. Call us to confirm your specific location.",
    },
  ];

  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff", color: CHARCOAL, minHeight: "100vh" }}>
      <SEOHead
        title="London Removals Company | House & Office Moves | Octagon Removals"
        description="Professional removals company serving London and the M25 since 2015. Fixed price or hourly rate, insured up to £50,000 per vehicle. House moves, office relocations, packing, storage and international removals. 4.9★ on Google · 323 reviews."
      />

      {/* ── 1 & 2. SHARED NAVBAR (top bar + main nav) ─────────────────── */}
      <Navbar />

      {/* ── 3. HERO — ASYMMETRIC SPLIT ───────────────────────────────── */}
      <section className="flex flex-col lg:flex-row min-h-[90vh]" style={{ backgroundColor: SAND }}>
        {/* Left — content + form */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 w-full lg:w-[52%]">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              London's Best Removals Company · Est. 2015
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 600, lineHeight: 1.08, color: CHARCOAL }}>
            The Move You Wished<br />
            <span style={{ color: GOLD }}>You'd Done</span><br />
            Sooner.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="mt-5 text-base leading-relaxed max-w-md"
            style={{ color: "#555", fontFamily: "DM Sans, sans-serif" }}>
            Trusted by 15,000+ London families and businesses. Premium services, fixed prices,
            fully insured up to £1m, and we'll get back to you in minutes.
            <strong style={{ color: CHARCOAL }}> Flexibility and a straightforward move.</strong>
          </motion.p>

          {/* Trust signals */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 mt-6 mb-8">
            {[
              { icon: Star,         label: "4.8/5 · 323 Google Reviews" },
              { icon: Shield,       label: "Insured up to £1,000,000" },
              { icon: Clock,        label: "Fixed Price or Hourly Rate" },
              { icon: Award,        label: "15,000+ Moves Completed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs"
                style={{ fontFamily: "DM Sans, sans-serif", color: "#555" }}>
                <Icon size={13} style={{ color: GOLD }} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Quote form card */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="bg-white p-6 shadow-sm max-w-md"
            style={{ border: "1px solid #ebebeb" }}>
            <p className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
              FREE QUOTE — MOST COMPANIES TAKE 24 HOURS+ TO REPLY. WE TAKE MINUTES. GUARANTEED.
            </p>
            <QuoteForm source="Homepage Hero" />
          </motion.div>
        </div>

        {/* Right — hero photo — auto-rotating slider */}
        <div className="hidden lg:block w-[48%] relative overflow-hidden">
          <HeroSlider />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(12,20,32,0.55) 0%, transparent 50%)" }} />
          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-10 left-8 p-5"
            style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderLeft: `3px solid ${GOLD}` }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "2rem", fontWeight: 700, color: CHARCOAL, lineHeight: 1 }}>
              15,000+
            </p>
            <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#888", fontFamily: "DM Sans, sans-serif" }}>
              Successful Moves
            </p>
          </motion.div>
          {/* Not on comparison sites badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute top-8 right-8 px-4 py-2"
            style={{ backgroundColor: "rgba(15,25,35,0.85)", backdropFilter: "blur(8px)" }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Not on Price Comparison Sites
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 4. TRUST BAR ─────────────────────────────────────────────── */}
      <section className="py-8 px-8 md:px-14 lg:px-20" style={{ backgroundColor: CHARCOAL }}>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between">
          {[
            { value: "4.8★",    label: "GOOGLE RATING",   sub: "320 reviews" },
            { value: "4.9★",    label: "TRUSTPILOT",       sub: "170 reviews" },
            { value: "11+",     label: "YEARS TRADING",    sub: "Est. 2015" },
            { value: "15,000+", label: "MOVES COMPLETED",  sub: "Families & Businesses" },
            { value: "£1M",     label: "FULLY INSURED",    sub: "Up to £1,000,000" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="text-center px-4">
              <p className="whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "2rem", fontWeight: 700, color: GOLD, lineHeight: 1 }}>{value}</p>
              <p className="text-xs font-bold tracking-widest uppercase mt-1" style={{ color: "#fff", fontFamily: "DM Sans, sans-serif" }}>{label}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. SERVICES GRID ─────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#fff" }}>
        <div className="flex items-end justify-between mb-12 pb-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
          <div>
            <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Our Services
            </span>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, color: CHARCOAL }}>
              London Removals Services
            </h2>
          </div>
          <Link href="/services">
            <span className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              All Services <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        {/* Desktop: all tiles visible. Mobile: progressive disclosure — 4 at a time */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0"
          style={{ border: "1px solid #e8e8e8", borderRight: "none", borderBottom: "none" }}>
          {services.map(({ n, icon: Icon, title, desc, img, href }, i) => (
            <motion.div key={n} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className={`group cursor-pointer overflow-hidden ${i >= mobileServicesShown ? "hidden md:block" : ""}`}
              style={{ borderRight: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
              <Link href={href}>
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img src={img} alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,25,35,0.55) 0%, transparent 60%)" }} />
                  <span className="absolute bottom-3 left-4"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>
                    {n}
                  </span>
                  <Icon size={16} style={{ color: GOLD }} className="absolute bottom-4 right-4" />
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-2" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", color: CHARCOAL }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#777", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                    Learn more <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Read More button — hidden on md+ */}
        {mobileServicesShown < services.length && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setMobileServicesShown(prev => Math.min(prev + 4, services.length))}
              className="flex items-center gap-2 px-8 py-3 text-xs tracking-widest uppercase font-semibold transition-all"
              style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "DM Sans, sans-serif", backgroundColor: "transparent" }}
            >
              Read More <ChevronRight size={14} />
            </button>
          </div>
        )}
      </section>

      {/* ── 6. WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-14 lg:px-20" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Why Choose Us</span>
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, color: CHARCOAL }}>
              Four Reasons London Trusts Octagon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: CircleArrowRight,
                title: "Versatile. Comprehensive. Dependable.",
                desc: "Relocation is never just a move. It's the foundation for your expansion that comes next. Whether you're growing your family, scaling your business or simply making room for a new chapter, we coordinate everything from start to finish. Packing, handling, transport, storage, reassembly and beyond. One company, one point of contact, no gaps in the process."
              },
              {
                num: "02",
                icon: Truck,
                title: "Professional handling and relocating.",
                desc: "The things you've spent years collecting deserve more than a quick load and a bumpy ride. Careful packing, secure loading, and an experienced team that knows your possessions deserve to arrive exactly as they left. We've been doing this long enough to know the difference and consistently deliver."
              },
              {
                num: "03",
                icon: Boxes,
                title: "Flexible and secure storage guarantee.",
                desc: "Storage shouldn't add to the stress of moving. So we made it as simple and as convenient as possible. We collect from your door, catalogue every item, secure it in our monitored facility and when you're ready, we bring what you need back to you. No self-storage runs, no heavy lifting on your part, no chasing anyone for access. Only peace of mind."
              },
              {
                num: "04",
                icon: MessageSquare,
                title: "Communication is key.",
                desc: "Real people. Real answers. Straightforward communication. We call back, we follow through. From your first enquiry to moving day, you're kept informed, questions get real answers, and nothing important is left unsaid. Good communication isn't a feature. It's the foundation of trust."
              },
            ].map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div key={num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="p-8 flex flex-col rounded-sm"
                style={{ backgroundColor: "#fff", border: `1px solid rgba(184,150,12,0.12)` }}>
                <div className="text-xs font-bold tracking-widest mb-4" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>{num}</div>
                <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-md"
                  style={{ backgroundColor: `rgba(184,150,12,0.08)` }}>
                  <Icon size={22} style={{ color: GOLD }} />
                </div>
                <h3 className="font-bold mb-4 text-base leading-snug" style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>{title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#555", fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", lineHeight: 1.75 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8b. OCTAGON STANDARD ─────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-14 lg:px-20" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={TEAM_OCTAGON} alt="Octagon Removals Standard" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(184,150,12,0.15) 0%, transparent 60%)" }} />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12" style={{ borderTop: `3px solid ${GOLD}`, borderLeft: `3px solid ${GOLD}` }} />
              <div className="absolute bottom-0 right-0 w-12 h-12" style={{ borderBottom: `3px solid ${GOLD}`, borderRight: `3px solid ${GOLD}` }} />
            </motion.div>

            {/* Right — content */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                The Octagon Standard
              </span>
              <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, color: SAND, lineHeight: 1.2 }}>
                Some Call It Exclusive.<br />We Call It{" "}
                <span style={{ color: GOLD, fontStyle: "italic" }}>Standard.</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem" }}>
                Since 2015, every Octagon move has been delivered by uniformed, trained professionals.
                We know your move is more than just boxes and furniture — it's about protecting your memories
                and giving you a fresh start with total peace of mind. Whether you're moving your family home
                or relocating your business, our team is dedicated to making your transition smooth and successful.
              </p>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🛡️", label: "Fully Insured",        sub: "Up to £50,000 per vehicle" },
                  { icon: "📋", label: "Fixed Price Guarantee", sub: "No hidden charges, ever" },
                  { icon: "📦", label: "Premium Packing",       sub: "Materials included as standard" },
                  { icon: "🎯", label: "Dedicated Coordinator", sub: "One point of contact throughout" },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,150,12,0.2)" }}>
                    <span className="text-xl mt-0.5">{icon}</span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: SAND, fontFamily: "DM Sans, sans-serif" }}>{label}</div>
                      <div className="text-xs" style={{ color: "rgba(245,243,239,0.5)", fontFamily: "DM Sans, sans-serif" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google badge */}
              <div className="flex items-center gap-3 p-4 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: `1px solid ${GOLD}`, maxWidth: 320 }}>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={GOLD} style={{ color: GOLD }} />)}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: SAND, fontFamily: "DM Sans, sans-serif" }}>4.8 / 5.0</div>
                  <div className="text-xs" style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>Based on 320+ Google Reviews</div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. PROCESS ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src={TEAM_WORK1} alt="Octagon Removals team" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(245,243,239,0.92)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-14 lg:px-20">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>How It Works</span>
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: CHARCOAL }}>
              Your Move in Four Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Tell Us About Your Move", desc: "Reach out by phone or through our website. A member of our team will be in touch within the hour to discuss your requirements and begin planning your move." },
              { step: "02", title: "Book A Survey",    desc: "One of our consultants will either come around or give you a video call to assess your requirements and offer guidance." },
              { step: "03", title: "Accept Your Quote", desc: "You will receive a comprehensive quote with description of services requested after 1 hour of the survey." },
              { step: "04", title: "Get Moved",        desc: "Sit back and relax. Your possessions arrive safely, your new home is ready, and your next chapter begins. We handle everything so that when you walk through your new door, all that's left to do is settle in." },
            ].map(({ step, title, desc }, i) => (
              <motion.div key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="text-center relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ border: `2px solid ${GOLD}`, backgroundColor: "rgba(255,255,255,0.85)" }}>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: GOLD }}>{step}</span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 -right-3 z-20">
                    <ChevronRight size={18} style={{ color: GOLD, opacity: 0.5 }} />
                  </div>
                )}
                <h3 className="font-medium mb-2 text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: CHARCOAL }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#777", fontFamily: "DM Sans, sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INTERACTIVE LONDON MAP ──────────────────────────────── */}
      <section className="py-20 px-8 md:px-14 lg:px-20" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Service Areas</span>
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="text-center mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600, color: "#fff" }}>
            Covering London &amp; the M25
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}>
            Based in North London, we provide removals and storage services across all London Boroughs and the wider M25 area, including parts of Kent, Middlesex, Essex, Surrey and Hertfordshire.
          </p>
          <LondonMap />
        </div>
      </section>



      {/* ── 10. REVIEWS ──────────────────────────────────────────────── */}
      <section className="py-16 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#fff" }}>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Client Testimonials</span>
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 600, color: CHARCOAL }}>
            Trusted by London Families & Businesses
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={GOLD} style={{ color: GOLD }} />)}
            <span className="text-sm ml-2" style={{ color: "#666", fontFamily: "DM Sans, sans-serif" }}>4.8 rating from 320+ Google reviews and counting</span>
          </div>
        </div>

        {/* Infinite auto-scroll slider — duplicated for seamless loop */}
        <div
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
          onMouseEnter={e => { const el = e.currentTarget.querySelector<HTMLElement>('.testimonial-track'); if (el) el.style.animationPlayState = 'paused'; }}
          onMouseLeave={e => { const el = e.currentTarget.querySelector<HTMLElement>('.testimonial-track'); if (el) el.style.animationPlayState = 'running'; }}
          onTouchStart={e => { const el = e.currentTarget.querySelector<HTMLElement>('.testimonial-track'); if (el) el.style.animationPlayState = 'paused'; }}
          onTouchEnd={e => { const el = e.currentTarget.querySelector<HTMLElement>('.testimonial-track'); if (el) el.style.animationPlayState = 'running'; }}
        >
          <div
            className="flex gap-5 testimonial-track"
            style={{
              width: "max-content",
              animation: "testimonialScroll 40s linear infinite",
            }}
          >
            {[...reviews, ...reviews].map(({ name, location, rating, text }, idx) => (
              <div
                key={`${name}-${idx}`}
                className="relative flex-shrink-0"
                style={{
                  width: "340px",
                  padding: "28px",
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <Quote size={20} style={{ color: GOLD, opacity: 0.25, position: "absolute", top: 18, right: 18 }} />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={12} fill={GOLD} style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#555", fontFamily: "DM Sans, sans-serif", lineHeight: 1.7 }}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #f0f0f0" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: CHARCOAL, fontFamily: "DM Sans, sans-serif" }}>{name}</p>
                    <p className="text-xs" style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>{location}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1" style={{ opacity: 0.4 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif", color: "#666" }}>Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="https://www.google.com/maps/place/Octagon+Removals+Ltd" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-80"
              style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Read all 320+ reviews on Google <ArrowRight size={11} className="inline ml-1" />
            </button>
          </a>
        </div>
      </section>

      {/* ── 11. VIDEO SECTION ────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-14 lg:px-20" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.6 }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                See Us In Action !
              </span>
              <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.6 }} />
            </div>
            <h2 className="mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 600, color: "#fff" }}>
              Watch Our Team Work
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
              and expect us to move you with such ease.
            </p>
          </div>

          {/* YouTube embed */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {!videoPlaying ? (
              <div className="absolute inset-0 cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                <img src={PIANO_IMG} alt="Octagon Removals — piano move video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(12,20,32,0.6)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: GOLD }}>
                    <Play size={24} fill="#fff" style={{ color: "#fff", marginLeft: 3 }} />
                  </div>
                </div>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                  Click to play
                </p>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLsomething&autoplay=1"
                title="Octagon Removals — Piano Move"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="flex justify-center mt-6">
            <a href="https://www.youtube.com/@OctagonRemovals" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all hover:opacity-80"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                View more videos on our YouTube Channel <ArrowRight size={11} className="inline ml-1" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 12b. FAQ WIDGET — full-bleed split ──────────────────────────── */}
      <section className="flex flex-col md:flex-row" style={{ backgroundColor: SAND, minHeight: "520px" }}>
        {/* LEFT — text panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16">
          {/* Label with gold side lines */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>Got Questions?</span>
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, color: CHARCOAL, lineHeight: 1.15 }}>
            We Have Answers
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#555", fontFamily: "DM Sans, sans-serif", maxWidth: "420px" }}>
            From pricing and insurance to packing tips and customs paperwork — our comprehensive FAQ library covers everything you need to know before, during, and after your move.
          </p>
          <Link href="/faq">
            <button
              className="inline-flex items-center px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
            >
              Browse Hundreds of FAQ's Here: <ArrowRight size={13} className="ml-2" />
            </button>
          </Link>
        </div>

        {/* RIGHT — full-height image, no cropping */}
        <div className="w-full md:w-1/2 flex items-stretch">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/FAQforwww_eaf57ba5.jpg"
            alt="Octagon Removals FAQ — van with FAQ boxes"
            className="w-full h-full object-contain"
            style={{ display: "block", backgroundColor: SAND }}
          />
        </div>
      </section>
      {/* ── 12. ADVICE CTA WIDGET — Dark photo bg, elegant serif text ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <img src={TEAM_OCTAGON} alt="Octagon Removals team at work"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,20,32,0.72)" }} />
        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-14 lg:px-20 py-14" style={{ minHeight: "320px" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
            Slow is smooth and smooth is fast
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.25,
            maxWidth: "800px",
            fontStyle: "normal",
          }}>
            Careful Planning So Moving Day Feels Effortless.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4" style={{ color: "rgba(255,255,255,0.70)", fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", lineHeight: "1.75" }}>
            <p>Rushing a move leads to unnecessary mistakes, damage and stress.</p>
            <p>Our approach is different. We plan each move methodically, so the day itself is well organised long before it begins. From access and parking right through to how each room is packed and loaded.</p>
            <p>We believe the quality of a move is decided long before the team gets on site. This is why we invest time upfront understanding your property, your inventory and any specific requirements, so that when moving day comes, the crew already knows exactly what to do and in what order. No guesswork, no scrambling, no last-minute decisions made under pressure.</p>
            <p>By the time our crew arrives at your doorstep, the hard thinking is already done. What's left is simply executing the plan. Just a well-run move, exactly as it should be and how we like it.</p>
          </div>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}
            >
              Get In Touch <ArrowRight size={13} />
            </button>
          </Link>
          <div className="mt-6 h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        </div>
      </section>

      {/* ── 12c. LATEST FROM THE BLOG — SLIDER ─────────────────────────── */}
      <BlogSlider />

            {/* ── 13. TEAM PHOTO STRIP ─────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ height: "200px" }}>
        <div className="flex h-full">
          {[TEAM_WORK1, TEAM_EPPING, TEAM_OCTAGON2, TEAM_WORK2, TEAM_CLIENT].map((img, i) => (
            <div key={i} className="flex-1 relative overflow-hidden group">
              <img src={img} alt={`Octagon Removals team in action ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                style={{ backgroundColor: "rgba(15,25,35,0.25)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── 14. FINAL CTA BANNER — "Let's Plan Your Move Together" ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Fleet photo background */}
        <img
          src={HERO_IMG}
          alt="Octagon Removals fleet"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.80) 50%, rgba(15,25,35,0.65) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
              Your Move Starts Here
            </span>
            <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.15 }}>
            Let's Plan Your Move<br />
            <em className="not-italic" style={{ color: GOLD }}>Together.</em>
          </h2>
          <p className="mt-5 text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "DM Sans, sans-serif", lineHeight: 1.7 }}>
            Imagine sitting in your new home, relaxing on your favourite sofa, a big smile on your face.
            That feeling is what we work for. Fixed price, no hidden charges, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/get-quote">
              <button className="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:scale-105"
                style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                Get Free Quote
              </button>
            </Link>
            <a href="tel:02085218000">
              <button className="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:bg-white hover:text-black"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
                <Phone size={14} className="inline mr-2" />
                0208 521 8000
              </button>
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>
            We respond within 1 hour · Mon–Fri 8am–6pm · Sat 8am–3pm
          </p>
        </div>
      </section>

      {/* ── 15. FOOTER ───────────────────────────────────────────────── */}
      <footer className="py-12 px-8 md:px-14 lg:px-20" style={{ backgroundColor: CHARCOAL }}>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-xs">
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff" }}>
              OCTAGON <span style={{ color: GOLD }}>REMOVALS</span>
            </span>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>
              London's premium removals company. Fixed price or hourly rate, insured up to £50,000 per vehicle. Est. 2015.
            </p>
            <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}>
              Office 56, Millmead Business Centre,<br />
              Millmead Road, South Tottenham,<br />
              London, N17 9QU
            </p>
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}>
              Mon–Fri: 8am–6pm · Sat: 8am–3pm
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
            {[
              { heading: "Services", links: [
                { label: "House Removals", href: "/services/house-removals" },
                { label: "Office Removals", href: "/services/office-relocation" },
                { label: "Packing Service", href: "/services/packing-service" },
                { label: "Storage", href: "/services/storage" },
                { label: "International", href: "/services/international-removals" },
                { label: "Piano Removals", href: "/services/piano-removals" },
              ]},
              { heading: "Locations", links: [
                { label: "Kensington", href: "/kensington" },
                { label: "Chelsea", href: "/chelsea" },
                { label: "Islington", href: "/islington" },
                { label: "Wandsworth", href: "/wandsworth" },
                { label: "Bromley", href: "/bromley" },
                { label: "All Locations →", href: "/locations" },
              ]},
              { heading: "Company", links: [
                { label: "About Us", href: "/about" },
                { label: "Our Story", href: "/about/our-story" },
                { label: "Our Team", href: "/about/team" },
                { label: "Reviews", href: "/reviews" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ]},
              { heading: "Contact", links: [
                { label: "0208 521 8000", href: "tel:02085218000" },
                { label: "info@octagonremovals.co.uk", href: "mailto:info@octagonremovals.co.uk" },
                { label: "Get Free Quote", href: "/get-quote" },
                { label: "Book a Survey", href: "/contact" },
              ]},
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="tracking-widest uppercase mb-3" style={{ color: GOLD }}>{heading}</p>
                {links.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <p className="mb-1.5 cursor-pointer hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 text-xs"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "DM Sans, sans-serif" }}>
          <span>© 2026 Octagon Removals Ltd. Registered in England & Wales.</span>
          <span>Insured up to £50,000 per vehicle · Fixed Price or Hourly Rate · Est. 2015</span>
        </div>
      </footer>
    </div>
  );
}
