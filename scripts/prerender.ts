import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist/public");
const SITE_URL = "https://octagonremovals.co.uk";

interface RouteMeta {
  route: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

const ROUTES: RouteMeta[] = [
  {
    route: "/services",
    title: "Removal Services London — House, Office & International | Octagon Removals",
    description:
      "Browse all 11 removal services: house moves, office relocations, packing, storage, piano moving, international removals and more. Fixed price. Free survey.",
  },
  {
    route: "/about",
    title: "About Octagon Removals — London's Premium Removals Company",
    description:
      "Established in 2015, Octagon Removals has completed 10,000+ moves across London and the M25. Fully insured, DBS-checked team. 4.9★ Trustpilot rating.",
  },
  {
    route: "/contact",
    title: "Contact Octagon Removals — Get in Touch Today",
    description:
      "Call 0208 521 8000 or email info@octagonremovals.co.uk. Free survey available. South Tottenham office, serving all of London and the M25.",
  },
  {
    route: "/storage",
    title: "Storage Solutions London — Secure Short & Long-Term Storage | Octagon Removals",
    description:
      "Safe, affordable storage in London. CCTV-monitored, flexible terms, full collection and delivery service. Residential and commercial storage available.",
  },
  {
    route: "/faq",
    title: "FAQ — Octagon Removals London | 100 Questions Answered",
    description:
      "Comprehensive FAQ covering house removals, commercial relocations, storage solutions, and international moves. 100 questions answered by London's trusted removals company.",
  },
  {
    route: "/blog",
    title: "Removals Blog | Moving Tips, Guides & Advice | Octagon Removals",
    description:
      "Expert moving advice from London's premium removals company. Packing guides, area guides, cost breakdowns, and practical tips to make your move stress-free.",
    ogDescription:
      "Expert moving advice from London's premium removals company. Packing guides, area guides and practical tips.",
  },
  {
    route: "/calculator",
    title: "Moving Cost Calculator — Free Instant Estimate | Octagon Removals",
    description:
      "Get an instant estimate for your London removal. Interactive calculator covering property size, rooms, packing, storage and distance. No obligation.",
  },
  {
    route: "/locations",
    title: "Removals by Location — All London Areas | Octagon Removals",
    description:
      "Octagon Removals serves all London boroughs including Bromley, Islington, Croydon, Enfield, Fulham, Kingston upon Thames, Greenwich, Dartford and more.",
  },
  {
    route: "/quote",
    title: "Get a Free Removals Quote — Octagon Removals London",
    description:
      "Get your free, fixed-price removals quote in minutes. Fill in our quick form and receive a response within 1 hour during business hours. No obligation.",
  },
];

function injectMeta(html: string, meta: RouteMeta): string {
  const { route, title, description, ogTitle, ogDescription } = meta;
  const canonical = `${SITE_URL}${route}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${description}"`
  );

  out = out.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`
  );

  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${resolvedOgTitle}"`
  );

  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${resolvedOgDescription}"`
  );

  out = out.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonical}"`
  );

  return out;
}

function main() {
  const templatePath = path.join(DIST_DIR, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(
      `[prerender] index.html not found at ${templatePath}. Run vite build first.`
    );
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  console.log(`[prerender] Template loaded from ${templatePath}`);

  for (const routeMeta of ROUTES) {
    const html = injectMeta(template, routeMeta);
    const routeDir = path.join(DIST_DIR, routeMeta.route);
    fs.mkdirSync(routeDir, { recursive: true });
    const outPath = path.join(routeDir, "index.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log(`[prerender] ✓ ${routeMeta.route}`);
  }

  console.log(`[prerender] Done — ${ROUTES.length} routes pre-rendered.`);
}

main();
