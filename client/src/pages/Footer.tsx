/*
 * FOOTER - Octagon Removals
 * Design: Deep charcoal (#0A1520) background, gold accents, DM Sans.
 * Gold top border gradient. Four columns: brand, services, locations, contact.
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Star } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/octagon-logo_ad6e76c6.webp";

const locationLinks = [
  { label: "Bromley", href: "/locations/bromley" },
  { label: "Epsom", href: "/locations/epsom" },
  { label: "Islington", href: "/locations/islington" },
  { label: "Croydon", href: "/locations/croydon" },
  { label: "Watford", href: "/locations/watford" },
  { label: "Romford", href: "/locations/romford" },
  { label: "Greenwich", href: "/locations/greenwich" },
  { label: "Brentwood", href: "/locations/brentwood" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1520" }}>
      {/* Gold shimmer top border */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #B8960C 30%, #D4AF37 50%, #B8960C 70%, transparent 100%)",
        }}
      />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Octagon Removals"
              className="h-9 w-auto object-contain mb-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
            >
              London's premium removals company. Fixed-price house, office and
              international moves across London and the M25.
            </p>
            <div className="flex items-center gap-1.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-[#B8960C] text-[#B8960C]" />
              ))}
              <span
                className="text-xs font-semibold ml-1"
                style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
              >
                4.9 / 5 Trustpilot
              </span>
            </div>
            <p className="text-xs" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              171 verified reviews · 323 Google reviews
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "London Removals", href: "/services/london-removals" },
                { label: "Office Relocation", href: "/services/office-relocation" },
                { label: "Packing / Unpacking", href: "/services/packing-unpacking" },
                { label: "Storage", href: "/services/storage" },
                { label: "Piano Moving", href: "/services/piano-moving" },
                { label: "International Removals", href: "/services/international-removals" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="text-sm transition-colors"
                      style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#B8960C")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#8A9BB0")
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About Us */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
            >
              About Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Our Story", href: "/about/our-story" },
                { label: "Our Core Values", href: "/about/core-values" },
                { label: "Our Mission", href: "/about/mission" },
                { label: "Our Team", href: "/about/team" },
                { label: "Blog", href: "/blog" },
                { label: "Portfolio", href: "/portfolio" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="text-sm transition-colors"
                      style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#B8960C")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#8A9BB0")
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
            >
              Locations
            </h4>
            <ul className="flex flex-col gap-2.5">
              {locationLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="text-sm transition-colors"
                      style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#B8960C")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#8A9BB0")
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li>
                <a
                  href="tel:02085218000"
                  className="flex items-start gap-3 text-sm group"
                  style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                >
                  <Phone
                    size={15}
                    className="mt-0.5 shrink-0 group-hover:text-[#B8960C] transition-colors"
                  />
                  <div>
                    <div
                      className="font-semibold group-hover:text-[#B8960C] transition-colors"
                      style={{ color: "#c8d0db" }}
                    >
                      0208 521 8000
                    </div>
                    <div className="text-xs mt-0.5">Mon–Fri 8am–6pm, Sat 8am–3pm</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@octagonremovals.co.uk"
                  className="flex items-start gap-3 text-sm group"
                  style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                >
                  <Mail
                    size={15}
                    className="mt-0.5 shrink-0 group-hover:text-[#B8960C] transition-colors"
                  />
                  <div>
                    <div
                      className="font-semibold group-hover:text-[#B8960C] transition-colors"
                      style={{ color: "#c8d0db" }}
                    >
                      info@octagonremovals.co.uk
                    </div>
                    <div className="text-xs mt-0.5">Reply within 1 hour</div>
                  </div>
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <div>
                    <div style={{ color: "#c8d0db" }}>London & M25</div>
                    <div className="text-xs mt-0.5">All boroughs covered</div>
                  </div>
                </div>
              </li>
            </ul>
            <Link href="/get-quote">
              <span className="btn-gold text-xs px-5 py-3 block text-center">
                Get Free Quote
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-5" style={{ borderColor: "rgba(184,150,12,0.15)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
          >
            © {new Date().getFullYear()} Octagon Removals Ltd. All rights reserved.
            Registered in England & Wales.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs transition-colors"
              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#B8960C")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#5a6a7a")
              }
            >
              Privacy Policy
            </Link>
            <span style={{ color: "#3a4a5a" }}>|</span>
            <span
              className="text-xs cursor-pointer transition-colors"
              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#B8960C")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#5a6a7a")
              }
            >
              Terms &amp; Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

