/*
 * SEO HEAD — Octagon Removals
 * Injects page-specific <title>, <meta description>, Open Graph tags,
 * and JSON-LD Schema markup into the document head.
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "service";
  image?: string;
  // For location pages
  locationName?: string;
  locationPhone?: string;
  // For service pages
  serviceName?: string;
}

const SITE_NAME = "Octagon Removals";
const DEFAULT_TITLE = "Octagon Removals | London's Premium Removals Company";
const DEFAULT_DESC =
  "Fixed-price house, office and international removals across London and the M25. 4.9★ Trustpilot rating, 10,000+ moves completed. Get a free quote today.";
const DEFAULT_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";
const SITE_URL = "https://octagonremovals.co.uk";
const PHONE = "02085218000";
const PHONE_DISPLAY = "0208 521 8000";
const EMAIL = "info@octagonremovals.co.uk";
const ADDRESS = {
  streetAddress: "Office 56, Millmead Business Centre, Millmead Road",
  addressLocality: "South Tottenham",
  addressRegion: "London",
  postalCode: "N17 9QU",
  addressCountry: "GB",
};

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object) {
  let el = document.querySelector(`script[data-schema="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-schema", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonical,
  image,
  locationName,
  locationPhone,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const desc = description ?? DEFAULT_DESC;
  const img = image ?? DEFAULT_IMAGE;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Standard meta
    setMeta("description", desc);
    setMeta("robots", "index, follow");
    setMeta("author", SITE_NAME);

    // Open Graph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", desc, true);
    setMeta("og:image", img, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:locale", "en_GB", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", img);

    // Canonical
    setLink("canonical", url);

    // ── JSON-LD: LocalBusiness / MovingCompany ──────────────────────────
    const businessSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "MovingCompany"],
      name: locationName ? `Octagon Removals — ${locationName}` : SITE_NAME,
      description: desc,
      url: url,
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png",
      image: img,
      telephone: locationPhone ?? PHONE_DISPLAY,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        ...ADDRESS,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "20:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "171",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: [
        "London", "Bromley", "Epsom", "Watford", "Brentwood", "Romford",
        "Greenwich", "Islington", "Croydon", "Orpington", "Enfield",
        "Finchley", "Fulham", "Kingston upon Thames", "Dartford",
        "Twickenham", "Uxbridge",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Removal Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Removals" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing Service" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Removals" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Piano Moving" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storage Solutions" } },
        ],
      },
      sameAs: [
        "https://www.trustpilot.com/review/octagonremovals.co.uk",
        "https://www.facebook.com/octagonremovals",
      ],
    };

    setJsonLd("local-business", businessSchema);

    // ── JSON-LD: BreadcrumbList ─────────────────────────────────────────
    if (canonical && canonical !== "/") {
      const parts = canonical.split("/").filter(Boolean);
      const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          ...parts.map((part, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            item: `${SITE_URL}/${parts.slice(0, i + 1).join("/")}`,
          })),
        ],
      };
      setJsonLd("breadcrumbs", breadcrumbs);
    }

    return () => {
      // Cleanup is optional — meta tags persist for the session
    };
  }, [fullTitle, desc, img, url, locationName, locationPhone, canonical]);

  return null;
}
