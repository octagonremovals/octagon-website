import SEOHead from "@/components/SEOHead";
/*
 * MOVING COST CALCULATOR — Octagon Removals
 * Interactive price estimator: property size, rooms, services, distance → instant estimate range.
 * Ends with a CTA to get a real fixed-price quote.
 */
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Building2, Package, Wrench, Sparkles, Trash2,
  Warehouse, Globe, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle2, Info, ArrowRight, Calculator
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Pricing logic ──────────────────────────────────────────────────────────
const BASE_PRICES: Record<string, number> = {
  studio: 280,
  "1bed": 380,
  "2bed": 520,
  "3bed": 680,
  "4bed": 850,
  "5bed+": 1100,
  office_small: 450,
  office_medium: 750,
  office_large: 1200,
};

const DISTANCE_MULTIPLIERS: Record<string, number> = {
  local: 1.0,      // within 5 miles
  short: 1.15,     // 5–15 miles
  medium: 1.3,     // 15–30 miles
  long: 1.5,       // 30–60 miles
  national: 1.9,   // 60+ miles
};

const SERVICE_COSTS: Record<string, number> = {
  packing: 120,
  unpacking: 80,
  dismantling: 60,
  cleaning: 150,
  storage: 90,
  disposal: 75,
  piano: 200,
};

const FLOOR_COSTS: Record<string, number> = {
  ground: 0,
  first: 40,
  second: 80,
  third: 120,
  "4plus": 180,
  lift: 20,
};

// ── Types ──────────────────────────────────────────────────────────────────
type Step = "property" | "distance" | "services" | "result";

const PROPERTY_OPTIONS = [
  { id: "studio", label: "Studio / Bedsit", icon: Home, desc: "1 room, minimal furniture" },
  { id: "1bed", label: "1 Bedroom", icon: Home, desc: "Living room + bedroom" },
  { id: "2bed", label: "2 Bedrooms", icon: Home, desc: "2 bedrooms + living areas" },
  { id: "3bed", label: "3 Bedrooms", icon: Home, desc: "3 bedrooms + living areas" },
  { id: "4bed", label: "4 Bedrooms", icon: Home, desc: "4 bedrooms + multiple rooms" },
  { id: "5bed+", label: "5+ Bedrooms", icon: Home, desc: "Large family home" },
  { id: "office_small", label: "Small Office", icon: Building2, desc: "Up to 10 workstations" },
  { id: "office_medium", label: "Medium Office", icon: Building2, desc: "10–30 workstations" },
  { id: "office_large", label: "Large Office", icon: Building2, desc: "30+ workstations" },
];

const DISTANCE_OPTIONS = [
  { id: "local", label: "Local (within 5 miles)", desc: "Same borough or nearby" },
  { id: "short", label: "Short (5–15 miles)", desc: "Across London" },
  { id: "medium", label: "Medium (15–30 miles)", desc: "London to M25 area" },
  { id: "long", label: "Long (30–60 miles)", desc: "M25 to Home Counties" },
  { id: "national", label: "National (60+ miles)", desc: "UK-wide move" },
];

const FLOOR_OPTIONS = [
  { id: "ground", label: "Ground Floor" },
  { id: "first", label: "1st Floor" },
  { id: "second", label: "2nd Floor" },
  { id: "third", label: "3rd Floor" },
  { id: "4plus", label: "4th Floor+" },
  { id: "lift", label: "Any Floor (with lift)" },
];

const EXTRA_SERVICES = [
  { id: "packing", label: "Professional Packing", icon: Package, desc: "Full packing service by our team" },
  { id: "unpacking", label: "Unpacking Service", icon: Package, desc: "We unpack and organise at destination" },
  { id: "dismantling", label: "Furniture Dismantling & Reassembly", icon: Wrench, desc: "Beds, wardrobes, flat-pack" },
  { id: "cleaning", label: "Pre/Post Cleaning", icon: Sparkles, desc: "Professional end-of-tenancy clean" },
  { id: "disposal", label: "Disposal Service", icon: Trash2, desc: "Removal of unwanted items" },
  { id: "storage", label: "Storage (per week)", icon: Warehouse, desc: "Secure storage facility" },
  { id: "piano", label: "Piano Moving", icon: Music2, desc: "Specialist piano handling" },
];

function Music2({ size, style }: { size: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={style}>
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  );
}

// ── Step indicator ─────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  const steps: { id: Step; label: string }[] = [
    { id: "property", label: "Property" },
    { id: "distance", label: "Distance" },
    { id: "services", label: "Services" },
    { id: "result", label: "Estimate" },
  ];
  const idx = steps.findIndex((s) => s.id === current);
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
              style={{
                backgroundColor: i <= idx ? "#B8960C" : "#e8e4dc",
                color: i <= idx ? "#fff" : "#8A9BB0",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {i < idx ? <CheckCircle2 size={16} /> : i + 1}
            </div>
            <span className="text-xs mt-1 font-semibold"
              style={{ color: i <= idx ? "#B8960C" : "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-12 h-0.5 mx-1 mb-5 transition-all"
              style={{ backgroundColor: i < idx ? "#B8960C" : "#e8e4dc" }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function CostCalculator() {
  const [step, setStep] = useState<Step>("property");
  const [propertyType, setPropertyType] = useState<string>("");
  const [floor, setFloor] = useState<string>("ground");
  const [distance, setDistance] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (id: string) =>
    setServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  const estimate = useMemo(() => {
    if (!propertyType || !distance) return null;
    const base = BASE_PRICES[propertyType] ?? 0;
    const distMult = DISTANCE_MULTIPLIERS[distance] ?? 1;
    const floorCost = FLOOR_COSTS[floor] ?? 0;
    const servicesCost = services.reduce((acc, s) => acc + (SERVICE_COSTS[s] ?? 0), 0);
    const total = (base * distMult) + floorCost + servicesCost;
    const low = Math.round(total * 0.9 / 10) * 10;
    const high = Math.round(total * 1.15 / 10) * 10;
    return { low, high, base: Math.round(base * distMult) };
  }, [propertyType, floor, distance, services]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#0F1923" }}>
          <div className="container text-center">
            <div className="flex items-center gap-2 justify-center mb-6 text-xs"
              style={{ color: "rgba(245,243,239,0.45)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>Cost Calculator</span>
            </div>
            <span className="eyebrow block mb-4">Free Estimate Tool</span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              Moving Cost Calculator
            </h1>
            <p className="text-lg max-w-xl mx-auto"
              style={{ color: "rgba(245,243,239,0.65)", fontFamily: "DM Sans, sans-serif" }}>
              Get an instant estimate in under 60 seconds. No personal details required.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 lg:py-16">
          <div className="container max-w-3xl">
            <div className="p-8 lg:p-12" style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>

              <StepIndicator current={step} />

              <AnimatePresence mode="wait">

                {/* STEP 1: Property */}
                {step === "property" && (
                  <motion.div key="property"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-semibold mb-2"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                      What type of property are you moving from?
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      Select the option that best describes your current home or office.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                      {PROPERTY_OPTIONS.map((opt) => (
                        <button key={opt.id} onClick={() => setPropertyType(opt.id)}
                          className="text-left p-4 transition-all duration-200"
                          style={{
                            border: `2px solid ${propertyType === opt.id ? "#B8960C" : "#e8e4dc"}`,
                            backgroundColor: propertyType === opt.id ? "rgba(184,150,12,0.06)" : "#fff",
                          }}>
                          <opt.icon size={18} className="mb-2"
                            style={{ color: propertyType === opt.id ? "#B8960C" : "#8A9BB0" }} />
                          <div className="font-semibold text-sm mb-0.5"
                            style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>{opt.label}</div>
                          <div className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>{opt.desc}</div>
                        </button>
                      ))}
                    </div>

                    {/* Floor selector */}
                    <div className="mb-8">
                      <label className="block text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                        Which floor are you on?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {FLOOR_OPTIONS.map((f) => (
                          <button key={f.id} onClick={() => setFloor(f.id)}
                            className="px-4 py-2 text-sm font-semibold transition-all"
                            style={{
                              border: `2px solid ${floor === f.id ? "#B8960C" : "#e8e4dc"}`,
                              backgroundColor: floor === f.id ? "rgba(184,150,12,0.06)" : "#fff",
                              color: floor === f.id ? "#B8960C" : "#5a6a7a",
                              fontFamily: "DM Sans, sans-serif",
                            }}>
                            {f.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => setStep("distance")}
                      disabled={!propertyType}
                      className="btn-gold w-full py-4"
                      style={{ opacity: !propertyType ? 0.4 : 1 }}>
                      Continue → Distance
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Distance */}
                {step === "distance" && (
                  <motion.div key="distance"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-semibold mb-2"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                      How far are you moving?
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      Approximate distance between your current and new address.
                    </p>
                    <div className="flex flex-col gap-3 mb-8">
                      {DISTANCE_OPTIONS.map((opt) => (
                        <button key={opt.id} onClick={() => setDistance(opt.id)}
                          className="flex items-center justify-between p-4 text-left transition-all"
                          style={{
                            border: `2px solid ${distance === opt.id ? "#B8960C" : "#e8e4dc"}`,
                            backgroundColor: distance === opt.id ? "rgba(184,150,12,0.06)" : "#fff",
                          }}>
                          <div>
                            <div className="font-semibold text-sm"
                              style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>{opt.label}</div>
                            <div className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>{opt.desc}</div>
                          </div>
                          {distance === opt.id && <CheckCircle2 size={18} style={{ color: "#B8960C" }} />}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep("property")}
                        className="flex-1 py-4 font-semibold text-sm transition-all"
                        style={{ border: "2px solid #e8e4dc", color: "#5a6a7a", fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff" }}>
                        ← Back
                      </button>
                      <button onClick={() => setStep("services")}
                        disabled={!distance}
                        className="flex-[3] btn-gold py-4"
                        style={{ opacity: !distance ? 0.4 : 1 }}>
                        Continue → Extra Services
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Services */}
                {step === "services" && (
                  <motion.div key="services"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-semibold mb-2"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                      Do you need any extra services?
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      Optional — select any additional services you'd like included.
                    </p>
                    <div className="flex flex-col gap-3 mb-8">
                      {EXTRA_SERVICES.map((svc) => {
                        const selected = services.includes(svc.id);
                        return (
                          <button key={svc.id} onClick={() => toggleService(svc.id)}
                            className="flex items-center gap-4 p-4 text-left transition-all"
                            style={{
                              border: `2px solid ${selected ? "#B8960C" : "#e8e4dc"}`,
                              backgroundColor: selected ? "rgba(184,150,12,0.06)" : "#fff",
                            }}>
                            <svc.icon size={18} style={{ color: selected ? "#B8960C" : "#8A9BB0", flexShrink: 0 }} />
                            <div className="flex-1">
                              <div className="font-semibold text-sm"
                                style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>{svc.label}</div>
                              <div className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>{svc.desc}</div>
                            </div>
                            <div className="text-sm font-bold"
                              style={{ color: selected ? "#B8960C" : "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                              +£{SERVICE_COSTS[svc.id]}
                            </div>
                            {selected && <CheckCircle2 size={16} style={{ color: "#B8960C", flexShrink: 0 }} />}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep("distance")}
                        className="flex-1 py-4 font-semibold text-sm transition-all"
                        style={{ border: "2px solid #e8e4dc", color: "#5a6a7a", fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff" }}>
                        ← Back
                      </button>
                      <button onClick={() => setStep("result")}
                        className="flex-[3] btn-gold py-4">
                        See My Estimate →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Result */}
                {step === "result" && estimate && (
                  <motion.div key="result"
                    initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}>
                    <div className="text-center mb-8">
                      <Calculator size={40} className="mx-auto mb-4" style={{ color: "#B8960C" }} />
                      <h2 className="text-2xl font-semibold mb-1"
                        style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                        Your Estimated Cost
                      </h2>
                      <p className="text-sm" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                        Based on your selections — actual fixed price may vary
                      </p>
                    </div>

                    {/* Price range */}
                    <div className="text-center py-10 mb-6"
                      style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.3)" }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>Estimated Price Range</div>
                      <div className="text-6xl lg:text-7xl font-semibold mb-2"
                        style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                        £{estimate.low.toLocaleString()} – £{estimate.high.toLocaleString()}
                      </div>
                      <div className="text-sm" style={{ color: "rgba(245,243,239,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                        VAT included · Fixed price · No hidden charges
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="mb-6 p-5" style={{ backgroundColor: "#F5F3EF", border: "1px solid #e8e4dc" }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>Estimate Breakdown</div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}>
                          <span style={{ color: "#5a6a7a" }}>
                            {PROPERTY_OPTIONS.find(p => p.id === propertyType)?.label} move ({DISTANCE_OPTIONS.find(d => d.id === distance)?.label})
                          </span>
                          <span className="font-semibold" style={{ color: "#0F1923" }}>£{estimate.base}</span>
                        </div>
                        {floor !== "ground" && (
                          <div className="flex justify-between text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            <span style={{ color: "#5a6a7a" }}>Floor surcharge ({FLOOR_OPTIONS.find(f => f.id === floor)?.label})</span>
                            <span className="font-semibold" style={{ color: "#0F1923" }}>+£{FLOOR_COSTS[floor]}</span>
                          </div>
                        )}
                        {services.map((s) => (
                          <div key={s} className="flex justify-between text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            <span style={{ color: "#5a6a7a" }}>{EXTRA_SERVICES.find(e => e.id === s)?.label}</span>
                            <span className="font-semibold" style={{ color: "#0F1923" }}>+£{SERVICE_COSTS[s]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="flex items-start gap-2 mb-6 p-3"
                      style={{ backgroundColor: "rgba(184,150,12,0.06)", border: "1px solid rgba(184,150,12,0.2)" }}>
                      <Info size={14} className="mt-0.5 shrink-0" style={{ color: "#B8960C" }} />
                      <p className="text-xs" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                        This is a guide estimate only. Your actual fixed price will be confirmed after a free survey. Octagon Removals provides fixed-price quotes with no hidden charges.
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/get-quote" className="flex-1">
                        <span className="btn-gold w-full py-4 text-sm text-center block cursor-pointer">
                          Get My Fixed-Price Quote →
                        </span>
                      </Link>
                      <a href="tel:02085218000" className="flex-1">
                        <span className="w-full py-4 text-sm text-center block font-semibold transition-all"
                          style={{ border: "2px solid #0F1923", color: "#0F1923", fontFamily: "DM Sans, sans-serif", backgroundColor: "#fff" }}>
                          Call 0208 521 8000
                        </span>
                      </a>
                    </div>

                    <button onClick={() => { setStep("property"); setPropertyType(""); setDistance(""); setServices([]); setFloor("ground"); }}
                      className="w-full mt-3 text-sm py-2 transition-colors"
                      style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                      ← Start Over
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Trust bar below calculator */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "Fixed Price", label: "No hidden charges" },
                { value: "1 Hour", label: "Quote response time" },
                { value: "4.9★", label: "Trustpilot rating" },
              ].map((item) => (
                <div key={item.label} className="text-center py-5"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                  <div className="text-xl font-semibold mb-1"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}>{item.value}</div>
                  <div className="text-xs" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
