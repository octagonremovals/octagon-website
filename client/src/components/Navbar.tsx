/*
 * NAVBAR — Octagon Removals
 * Layout matching octagonremovals.co.uk reference:
 *   - Dark top bar (#0F1923): tagline left | phone+hours centre | Trustpilot right
 *   - Light main navbar (#F5F3EF off-white): logo left | nav links centre | phone+CTA right
 * Dropdowns: dark panel with gold accents.
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, MessageCircle, Star } from "lucide-react";
import { COMPANY, NAV } from "@/data/siteData";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/octagon-logo_ad6e76c6.webp";

// Shimmer keyframes injected once
const SHIMMER_STYLE = `
@keyframes logoShimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.logo-shimmer {
  background: linear-gradient(
    90deg,
    #0F1923 0%,
    #0F1923 35%,
    #ffffff 50%,
    #0F1923 65%,
    #0F1923 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: logoShimmer 3.5s linear infinite;
}
`;

// Colours
const DARK = "#0F1923";
const GOLD = "#B8960C";
const LIGHT_BG = "#F5F3EF";
const DARK_TEXT = "#1a2530";
const MID_TEXT = "#4a5568";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileLoc, setMobileLoc] = useState(false);
  const [location] = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
    setLocOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (locRef.current && !locRef.current.contains(e.target as Node)) setLocOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    color: active ? GOLD : MID_TEXT,
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.8125rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  });

  const dropdownBase: React.CSSProperties = {
    backgroundColor: DARK,
    border: `1px solid rgba(184,150,12,0.3)`,
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.15)]" : ""}`}
      >
        {/* ── TOP BAR (dark) ── */}
        <div
          className="hidden lg:flex items-center justify-between px-8 xl:px-12 py-2 text-xs"
          style={{ backgroundColor: DARK, color: "rgba(200,208,219,0.85)", fontFamily: "DM Sans, sans-serif" }}
        >
          {/* Left: tagline */}
          <span style={{ letterSpacing: "0.03em" }}>
            London's Premium Removals Company
          </span>

          {/* Right: phone | hours | Trustpilot */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 transition-colors hover:text-[#B8960C]"
              style={{ color: GOLD, fontWeight: 600 }}
            >
              <Phone size={11} />
              {COMPANY.phoneDisplay}
            </a>
            <span style={{ color: "rgba(184,150,12,0.35)" }}>|</span>
            <span>Mon–Fri 8am–6pm · Sat 8am–3pm</span>
            <span style={{ color: "rgba(184,150,12,0.35)" }}>|</span>
            <span className="flex items-center gap-1" style={{ color: GOLD, fontWeight: 600 }}>
              <Star size={11} fill={GOLD} />
              4.9/5 Trustpilot
            </span>
          </div>
        </div>

        {/* ── MAIN NAV (light) ── */}
        <nav
          className="flex items-center justify-between px-6 lg:px-8 xl:px-12 h-16 lg:h-[68px] border-b"
          style={{
            backgroundColor: LIGHT_BG,
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <style>{SHIMMER_STYLE}</style>
          <Link href="/">
            <div className="flex flex-col items-start cursor-pointer select-none">
              <img
                src={LOGO_URL}
                alt="Octagon Removals"
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0 min-w-0 overflow-hidden">

            {/* SERVICES dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); setLocOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 transition-colors hover:text-[#B8960C]"
                style={{...navLinkStyle(location.startsWith("/services")), fontSize: "0.75rem"}}
              >
                Services
                <ChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 py-4 w-[580px]" style={dropdownBase}>
                  <div className="grid grid-cols-3 gap-0">
                    {/* Commercial */}
                    <div className="px-5">
                      <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                        Commercial
                      </div>
                      {NAV.services.commercial.map(item => (
                        <Link key={item.href} href={item.href}>
                          <div className="py-1.5 text-sm cursor-pointer hover:text-[#B8960C] transition-colors leading-snug"
                            style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Residential */}
                    <div className="px-5" style={{ borderLeft: "1px solid rgba(184,150,12,0.15)" }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                        Residential
                      </div>
                      {NAV.services.residential.map(item => (
                        <Link key={item.href} href={item.href}>
                          <div className="py-1.5 text-sm cursor-pointer hover:text-[#B8960C] transition-colors leading-snug"
                            style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Specialised */}
                    <div className="px-5" style={{ borderLeft: "1px solid rgba(184,150,12,0.15)" }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}>
                        Specialised
                      </div>
                      {NAV.services.specialised.map(item => (
                        <Link key={item.href} href={item.href}>
                          <div className="py-1.5 text-sm cursor-pointer hover:text-[#B8960C] transition-colors leading-snug"
                            style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 mx-5 border-t" style={{ borderColor: "rgba(184,150,12,0.2)" }}>
                    <Link href="/services">
                      <span className="text-xs font-bold tracking-widest uppercase hover:underline cursor-pointer" style={{ color: GOLD }}>
                        View All Services →
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT dropdown */}
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); setLocOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 transition-colors hover:text-[#B8960C]"
                style={{...navLinkStyle(location.startsWith("/about")), fontSize: "0.75rem"}}
              >
                About
                <ChevronDown size={12} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 py-2 w-52" style={dropdownBase}>
                  {NAV.about.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="px-5 py-2.5 text-sm cursor-pointer hover:text-[#B8960C] hover:bg-white/5 transition-colors"
                        style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* LOCATIONS dropdown */}
            <div ref={locRef} className="relative">
              <button
                onClick={() => { setLocOpen(!locOpen); setServicesOpen(false); setAboutOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 transition-colors hover:text-[#B8960C]"
                style={{...navLinkStyle(location.startsWith("/locations")), fontSize: "0.75rem"}}
              >
                Locations
                <ChevronDown size={12} className={`transition-transform duration-200 ${locOpen ? "rotate-180" : ""}`} />
              </button>
              {locOpen && (
                <div className="absolute top-full left-0 mt-1 py-3 w-72" style={dropdownBase}>
                  <div className="grid grid-cols-2 gap-0 px-2">
                    {NAV.locations.map(item => (
                      <Link key={item.href} href={item.href}>
                        <div className="px-3 py-1.5 text-sm cursor-pointer hover:text-[#B8960C] hover:bg-white/5 transition-colors"
                          style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 mx-4 border-t" style={{ borderColor: "rgba(184,150,12,0.2)" }}>
                    <Link href="/locations">
                      <span className="text-xs font-bold tracking-widest uppercase hover:underline cursor-pointer" style={{ color: GOLD }}>
                        View All Locations →
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* BLOG */}
            <Link href="/blog">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/blog")}>
                Blog
              </span>
            </Link>

            {/* PORTFOLIO */}
            <Link href="/portfolio">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/portfolio")}>
                Portfolio
              </span>
            </Link>

            {/* COST CALCULATOR */}
            <Link href="/calculator">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/calculator")}>
                Calculator
              </span>
            </Link>

            {/* FAQ */}
            <Link href="/faq">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/faq")}>
                FAQ
              </span>
            </Link>

            {/* STORAGE */}
            <Link href="/storage">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/storage")}>
                Storage
              </span>
            </Link>

            {/* CONTACT */}
            <Link href="/contact">
              <span className="px-3 py-2 transition-colors hover:text-[#B8960C] cursor-pointer"
                style={navLinkStyle(location === "/contact")}>
                Contact
              </span>
            </Link>
          </div>

          {/* Desktop right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#B8960C]"
              style={{ color: GOLD, fontFamily: "DM Sans, sans-serif" }}
            >
              <Phone size={13} />
              {COMPANY.phoneDisplay}
            </a>
            <Link href="/get-quote">
              <span
                className="px-4 py-2.5 text-xs font-bold tracking-widest uppercase cursor-pointer transition-all hover:brightness-110 whitespace-nowrap shrink-0"
                style={{ backgroundColor: DARK_TEXT, color: "#F5F3EF", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.06em" }}
              >
                FREE QUOTE
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: DARK_TEXT }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 pb-28 overflow-y-auto"
          style={{ backgroundColor: DARK }}
        >
          <div className="px-6 py-4 space-y-0">

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="w-full flex items-center justify-between py-4 border-b text-left"
                style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}
              >
                Our Services
                <ChevronDown size={16} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} style={{ color: GOLD }} />
              </button>
              {mobileServices && (
                <div className="pl-4 pb-3 pt-2">
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GOLD }}>Commercial</div>
                  {NAV.services.commercial.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="py-1.5 text-sm" style={{ color: "#8A9BB0" }}>{item.label}</div>
                    </Link>
                  ))}
                  <div className="text-xs font-bold tracking-widest uppercase mb-2 mt-3" style={{ color: GOLD }}>Residential</div>
                  {NAV.services.residential.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="py-1.5 text-sm" style={{ color: "#8A9BB0" }}>{item.label}</div>
                    </Link>
                  ))}
                  <div className="text-xs font-bold tracking-widest uppercase mb-2 mt-3" style={{ color: GOLD }}>Specialised</div>
                  {NAV.services.specialised.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="py-1.5 text-sm" style={{ color: "#8A9BB0" }}>{item.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <div>
              <button
                onClick={() => setMobileAbout(!mobileAbout)}
                className="w-full flex items-center justify-between py-4 border-b text-left"
                style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}
              >
                About Us
                <ChevronDown size={16} className={`transition-transform ${mobileAbout ? "rotate-180" : ""}`} style={{ color: GOLD }} />
              </button>
              {mobileAbout && (
                <div className="pl-4 pb-3 pt-2">
                  {NAV.about.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="py-1.5 text-sm" style={{ color: "#8A9BB0" }}>{item.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations */}
            <div>
              <button
                onClick={() => setMobileLoc(!mobileLoc)}
                className="w-full flex items-center justify-between py-4 border-b text-left"
                style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}
              >
                Locations
                <ChevronDown size={16} className={`transition-transform ${mobileLoc ? "rotate-180" : ""}`} style={{ color: GOLD }} />
              </button>
              {mobileLoc && (
                <div className="pl-4 pb-3 pt-2 grid grid-cols-2 gap-1">
                  {NAV.locations.map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="py-1.5 text-sm" style={{ color: "#8A9BB0" }}>{item.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                Blog
              </div>
            </Link>

            <Link href="/portfolio">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                Portfolio
              </div>
            </Link>

            <Link href="/calculator">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                Cost Calculator
              </div>
            </Link>

            <Link href="/faq">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                FAQ
              </div>
            </Link>

            <Link href="/storage">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                Storage
              </div>
            </Link>

            <Link href="/contact">
              <div className="py-4 border-b" style={{ color: "#e8e0d0", borderColor: "rgba(184,150,12,0.15)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600 }}>
                Contact Us
              </div>
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-6 flex flex-col gap-3">
              <Link href="/get-quote">
                <div
                  className="flex items-center justify-center py-4 text-sm font-bold tracking-widest uppercase w-full"
                  style={{ backgroundColor: GOLD, color: DARK, fontFamily: "DM Sans, sans-serif" }}
                >
                  FREE QUOTE
                </div>
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 py-4 text-sm font-semibold border"
                style={{ color: "#F5F3EF", borderColor: "rgba(184,150,12,0.4)", fontFamily: "DM Sans, sans-serif" }}
              >
                <Phone size={14} style={{ color: GOLD }} />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-sm font-semibold"
                style={{ backgroundColor: "#25D366", color: "#fff", fontFamily: "DM Sans, sans-serif" }}
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sticky bottom bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t"
        style={{ backgroundColor: DARK, borderColor: "rgba(184,150,12,0.3)" }}
      >
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold border-r"
          style={{ color: GOLD, borderColor: "rgba(184,150,12,0.3)", fontFamily: "DM Sans, sans-serif" }}
        >
          <Phone size={15} />
          Call Now
        </a>
        <Link href="/get-quote" className="flex-1">
          <span
            className="flex items-center justify-center py-4 text-sm font-bold tracking-wider uppercase w-full"
            style={{ backgroundColor: GOLD, color: DARK, fontFamily: "DM Sans, sans-serif" }}
          >
            Free Quote
          </span>
        </Link>
      </div>

      {/* Spacer for fixed header (top bar 32px + nav 68px = 100px on desktop) */}
      <div className="h-16 lg:h-[100px]" />
    </>
  );
}
