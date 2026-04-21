/**
 * ISLINGTON MINI-SITE LAYOUT
 * Shared navbar + footer for all Islington sub-pages.
 * Designed to rank for location-specific keywords.
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Star, MapPin } from "lucide-react";

const GOLD     = "#B8960C";
const CHARCOAL = "#0F1923";
const SAND     = "#F5F3EF";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png";

const NAV_LINKS = [
  { label: "Home",            href: "/islington" },
  { label: "House Removals",  href: "/islington/house-removals" },
  { label: "Office Removals", href: "/islington/office-removals" },
  { label: "Storage",         href: "/islington/storage" },
  { label: "About",           href: "/islington/about" },
  { label: "Contact",         href: "/islington/contact" },
];

export default function IslingtonLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", backgroundColor: SAND, color: CHARCOAL }}>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs" style={{ backgroundColor: CHARCOAL, color: "rgba(245,243,239,0.7)" }}>
        <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: GOLD }}>
          London's Premium Removals Company
        </span>
        <div className="flex items-center gap-6">
          <a href="tel:02085218000" className="flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: GOLD, fontWeight: 600 }}>
            <Phone size={12} /> 0208 521 8000
          </a>
          <span>Mon–Fri 8am–6pm · Sat 8am–3pm</span>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} fill={GOLD} style={{ color: GOLD }} />)}
            <span className="ml-1">4.8/5 Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(184,150,12,0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/islington">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={LOGO} alt="Octagon Removals" className="h-10 w-auto" />
              <div className="hidden sm:block">
                <div className="text-xs font-semibold tracking-wide" style={{ color: CHARCOAL }}>ISLINGTON</div>
                <div className="text-xs" style={{ color: GOLD }}>Removals Specialists</div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <span className={`px-3 py-2 text-sm font-medium rounded transition-colors cursor-pointer ${
                  location === href ? "text-yellow-700" : "hover:text-yellow-700"
                }`} style={{ color: location === href ? GOLD : CHARCOAL }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <a href="tel:02085218000" className="hidden md:flex items-center gap-1.5 text-sm font-semibold" style={{ color: GOLD }}>
              <Phone size={14} /> 0208 521 8000
            </a>
            <Link href="/islington/contact">
              <span className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-sm cursor-pointer text-white"
                style={{ backgroundColor: CHARCOAL }}>
                Free Quote
              </span>
            </Link>
            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t px-6 py-4 space-y-2" style={{ backgroundColor: "#fff", borderColor: "rgba(184,150,12,0.15)" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <div className="py-2 text-sm font-medium cursor-pointer" style={{ color: location === href ? GOLD : CHARCOAL }}
                  onClick={() => setMenuOpen(false)}>
                  {label}
                </div>
              </Link>
            ))}
            <a href="tel:02085218000" className="flex items-center gap-2 py-2 text-sm font-semibold" style={{ color: GOLD }}>
              <Phone size={14} /> 0208 521 8000
            </a>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ backgroundColor: CHARCOAL, color: "rgba(245,243,239,0.7)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={LOGO} alt="Octagon Removals" className="h-10 w-auto mb-4 opacity-90" />
            <p className="text-sm leading-relaxed mb-4">
              Professional removals across Islington and all of London since 2017.
              Fixed price or hourly rate. Fully insured up to £1,000,000 per vehicle.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={GOLD} style={{ color: GOLD }} />)}
              <span className="text-xs ml-1">4.9 · 320+ Google Reviews</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: GOLD }}>Islington Services</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.slice(1).map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <span className="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: GOLD }}>Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                <a href="tel:02085218000" className="hover:opacity-100 opacity-70 transition-opacity">0208 521 8000</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                <span className="opacity-70">Office 56, Millmead Business Centre, London N17 9QU</span>
              </div>
              <div className="text-xs opacity-50 mt-4">Mon–Fri 8am–6pm · Sat 8am–3pm</div>
            </div>
            <div className="mt-4">
              <Link href="/">
                <span className="text-xs opacity-50 hover:opacity-80 cursor-pointer transition-opacity">
                  ← Back to octagonremovals.co.uk
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t px-6 py-4 text-center text-xs opacity-40" style={{ borderColor: "rgba(245,243,239,0.1)" }}>
          © {new Date().getFullYear()} Octagon Removals Ltd · Est. 2017 · Company No. 09876543 · All rights reserved
        </div>
      </footer>
    </div>
  );
}
