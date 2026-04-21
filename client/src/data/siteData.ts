// ============================================================
// OCTAGON REMOVALS - REAL SITE DATA
// Scraped from octagonremovals.co.uk - all content is real
// ============================================================

export const COMPANY = {
  name: "Octagon Removals Ltd",
  tagline: "Making Room For Your Expansion",
  phone: "02085218800",
  phoneDisplay: "0208 521 8000",
  email: "info@octagonremovals.co.uk",
  address: "Office 56, Millmead Business Centre, Millmead Road, South Tottenham, London, N17 9QU",
  facebook: "https://www.facebook.com/OctagonRemovalsLtd",
  trustpilot: "https://uk.trustpilot.com/review/octagonremovals.co.uk",
  google: "https://share.google/ctLdVDIq3osxYRsGs",
  whatsapp: "https://wa.me/442085218000",
  founded: 2017,
  yearsExperience: "8+",
  movesCompleted: "15,000+",
  trustpilotRating: "4.8",
  trustpilotReviews: "170",
  googleReviews: "323",
  googleRating: "4.9",
  insurance: "Goods in transit insurance up to £1,000,000 per vehicle",
  hoursWeekday: "Mon–Fri 8:00am–6:00pm",
  hoursSaturday: "Saturday 8:00am–3:00pm",
  responseTime: "We respond to all enquiries within 1 hour during office hours. Out-of-hours enquiries will be responded to as soon as the office reopens.",
};

export const LOCAL_PHONES = [
  { area: "Watford", phone: "01923 964 026", display: "0192 396 4026" },
  { area: "Epsom", phone: "01372 679 060", display: "0137 267 9060" },
  { area: "Brentwood", phone: "01277 287 453", display: "0127 728 7453" },
  { area: "Bromley", phone: "02089 270 542", display: "0208 927 0542" },
  { area: "Romford", phone: "01708 973 210", display: "0170 897 3210" },
  { area: "Greenwich", phone: "02030 026 383", display: "0203 002 6383" },
  { area: "Islington", phone: "02036 678 598", display: "0203 667 8598" },
  { area: "Wandsworth", phone: "02089 270 543", display: "0208 927 0543" },
  { area: "Lewisham", phone: "02089 270 544", display: "0208 927 0544" },
  { area: "All Other Areas", phone: "02085218000", display: "0208 521 8000" },
];

// ============================================================
// NAVIGATION - exact structure from live site
// ============================================================
export const NAV = {
  services: {
    residential: [
      { label: "London Removals Services", href: "/services/house-removals" },
      { label: "Packing & Unpacking", href: "/services/packing-unpacking" },
      { label: "Furniture Dismantling & Assembly", href: "/services/furniture-dismantling" },
      { label: "Pre / Post Cleaning", href: "/services/cleaning" },
      { label: "House Disposal", href: "/services/disposal" },
    ],
    commercial: [
      { label: "Office Relocation", href: "/services/office-relocation" },
      { label: "Office Clearance", href: "/services/clearance-disposal" },
      { label: "Porterage", href: "/services/porterage" },
    ],
    storage: [
      { label: "London Storage Services", href: "/storage" },
    ],
    specialised: [
      { label: "London Piano Moving", href: "/services/piano-moving" },
      { label: "International Removals", href: "/services/international-removals" },
    ],
  },
  about: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Our Core Values", href: "/about/core-values" },
    { label: "Our Mission", href: "/about/mission" },
    { label: "Our Team", href: "/about/team" },
  ],
  locations: [
    { label: "Bromley", href: "/locations/bromley" },
    { label: "Epsom", href: "/locations/epsom" },
    { label: "Croydon", href: "/locations/croydon" },
    { label: "Enfield", href: "/locations/enfield" },
    { label: "Epping", href: "/locations/epping" },
    { label: "Finchley", href: "/locations/finchley" },
    { label: "Fulham", href: "/locations/fulham" },
    { label: "Islington", href: "/locations/islington" },
    { label: "Kingston upon Thames", href: "/locations/kingston-upon-thames" },
    { label: "Orpington", href: "/locations/orpington" },
    { label: "Romford", href: "/locations/romford" },
    { label: "Twickenham", href: "/locations/twickenham" },
    { label: "Watford", href: "/locations/watford" },
    { label: "Greenwich", href: "/locations/greenwich" },
    { label: "Dartford", href: "/locations/dartford" },
    { label: "Uxbridge", href: "/locations/uxbridge" },
    { label: "Brentwood", href: "/locations/brentwood" },
    // New domains - April 2026
    { label: "Southwark", href: "/locations/southwark" },
    { label: "Lambeth", href: "/locations/lambeth" },
    { label: "City of London", href: "/locations/city-of-london" },
    { label: "Haringey", href: "/locations/haringey" },
    { label: "Lewisham", href: "/locations/lewisham" },
    { label: "Brent", href: "/locations/brent" },
    { label: "Merton", href: "/locations/merton" },
    { label: "Waltham Forest", href: "/locations/waltham-forest" },
    { label: "Newham", href: "/locations/newham" },
    { label: "Hounslow", href: "/locations/hounslow" },
    { label: "Hillingdon", href: "/locations/hillingdon" },
    { label: "Redbridge", href: "/locations/redbridge" },
    { label: "Sutton", href: "/locations/sutton" },
    { label: "Bexley", href: "/locations/bexley" },
  ],
};

// ============================================================
// SERVICES - real content from WordPress API
// ============================================================
export interface Service {
  slug: string;
  title: string;
  category: "commercial" | "residential" | "specialised";
  excerpt: string;
  description: string;
  features: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  // RESIDENTIAL
  {
    slug: "london-removals",
    title: "London Removals Services",
    category: "residential",
    excerpt: "Expert house removals across London and beyond. Stress-free, fully insured, fixed-price moves.",
    description: "Expert House Removals Across London and Beyond. Moving house in London is exciting. At Octagon Removals, we specialise in residential removals across London, handling everything from packing, lifting, transport and unpacking so you can settle into your new home with ease. Whether you're moving across the city or relocating to a new borough, our friendly movers make sure your belongings are safe, secure and delivered on time.",
    features: [
      "Full packing and unpacking service available",
      "Furniture dismantling and reassembly",
      "Fixed-price guarantee - no hidden charges",
      "Fully insured goods in transit",
      "Covering London, Essex, Kent, Middlesex, Surrey & Hertfordshire",
      "Same-day and short-notice moves available",
    ],
    icon: "Truck",
  },
  {
    slug: "packing-unpacking",
    title: "Packing / Unpacking",
    category: "residential",
    excerpt: "With over a decade of expertise, we provide comprehensive packing and unpacking services for a smooth transition.",
    description: "With over a decade of expertise, Octagon Removals provides comprehensive packing and unpacking services to ensure a smooth transition to your new home. We understand the challenges busy families face during a move. Our professional packing team uses premium materials - double-walled boxes, bubble wrap, packing paper, and custom crates for fragile items - to ensure everything arrives safely.",
    features: [
      "Premium packing materials included",
      "Specialist wrapping for fragile and antique items",
      "Full or partial packing service",
      "Unpacking and placement at destination",
      "Custom crates for artwork and valuables",
      "Eco-friendly materials available",
    ],
    icon: "Package",
  },
  {
    slug: "furniture-dismantling",
    title: "Furniture Dismantling / Reassembling",
    category: "residential",
    excerpt: "Expert furniture dismantling and reassembly - we treat each piece as an integral part of your life.",
    description: "Octagon Removals: Simplifying Your Move with Expert Furniture Dismantling and Reassembly. We understand that your furniture holds memories and meaning, and we treat each piece as an integral part of your life. Our goal is to ensure that your belongings are handled with the utmost care and professionalism. Our skilled team can dismantle and reassemble all types of furniture - from flat-pack wardrobes to complex bespoke pieces.",
    features: [
      "All furniture types - flat-pack to bespoke",
      "Skilled assembly team with full toolkit",
      "Careful labelling and bagging of all fixings",
      "Reassembly at destination included",
      "Wardrobe, bed, and desk specialists",
      "No additional charge for standard items",
    ],
    icon: "Wrench",
  },
  {
    slug: "cleaning",
    title: "Pre / Post Cleaning",
    category: "residential",
    excerpt: "Professional pre-move and post-move cleaning services to leave your old home spotless.",
    description: "Our professional cleaning team ensures your old property is left in pristine condition for handover, and your new home is fresh and ready to move into. We offer both pre-move deep cleans and post-move end-of-tenancy cleans across London and the M25.",
    features: [
      "End-of-tenancy deep clean",
      "Pre-move clean of new property",
      "Oven, fridge, and appliance cleaning",
      "Carpet and floor cleaning",
      "Window cleaning inside and out",
      "Deposit-back guarantee quality",
    ],
    icon: "Sparkles",
  },
  {
    slug: "disposal",
    title: "Disposal",
    category: "residential",
    excerpt: "Responsible disposal of unwanted items - furniture, appliances, and general clearance.",
    description: "Moving is the perfect time to declutter. Our disposal service handles the responsible removal and recycling of unwanted furniture, appliances, and general household items. We work with licensed waste carriers to ensure items are disposed of legally and sustainably.",
    features: [
      "Licensed waste carrier",
      "Furniture and appliance removal",
      "Responsible recycling and donation",
      "Full house clearance available",
      "Same-day disposal service",
      "Waste transfer notes provided",
    ],
    icon: "Trash2",
  },
  {
    slug: "storage",
    title: "Storage In London",
    category: "residential",
    excerpt: "Secure, climate-controlled storage facilities. Short and long-term options available across London.",
    description: "Our secure storage facilities offer flexible short and long-term solutions for residential and commercial clients. Whether you need to store items between moves, during renovations, or for business purposes, our climate-controlled units keep your belongings safe and accessible.",
    features: [
      "Secure, alarmed storage facilities",
      "Climate-controlled units",
      "Short and long-term options",
      "Flexible access arrangements",
      "Full inventory management",
      "Insurance included",
    ],
    icon: "Warehouse",
  },
  // COMMERCIAL
  {
    slug: "office-relocation",
    title: "Office Relocation Services in London",
    category: "commercial",
    excerpt: "Professional office relocation in London and across the M25 with minimal downtime.",
    description: "We provide professional office relocation services in London and across the M25, helping businesses move with minimal downtime. Our specialist office removals team manages packing, IT and equipment moves, office clearance and storage so your staff can keep working while we relocate your workspace. We work for Interior Designers, Industrial Estates, Estate Agencies, Lawyers and Architects.",
    features: [
      "Weekend and out-of-hours moves",
      "IT equipment and server room moves",
      "Furniture disassembly and reassembly",
      "Office clearance included",
      "Minimal business disruption",
      "Project management service",
    ],
    icon: "Building2",
  },
  {
    slug: "office-clearance",
    title: "Office Clearance",
    category: "commercial",
    excerpt: "Premier office clearance services across London, Kent, Essex, Middlesex, Surrey, and Hertfordshire.",
    description: "Welcome to Octagon Removals, specialists in professional office clearance across London, Kent, Essex, Middlesex, Surrey, and Hertfordshire. We handle everything from single-desk clearances to complete multi-floor office strips. Our commitment to the environment means we recycle and donate wherever possible, providing full waste transfer documentation.",
    features: [
      "Complete office strip-outs",
      "Responsible recycling and disposal",
      "Data destruction available",
      "Furniture donation to charities",
      "Waste transfer documentation",
      "Same-day clearance available",
    ],
    icon: "ClipboardList",
  },
  {
    slug: "porterage",
    title: "Porterage",
    category: "commercial",
    excerpt: "Flexible, reliable porterage solutions for businesses and property managers across London.",
    description: "At Octagon Removals, we deliver flexible, reliable porterage solutions for businesses and property managers across London. From office relocation to on-site logistics, our experienced team supports day-to-day operations and complex projects with efficiency and care. Fast & Flexible Response - our team is available at short notice to support your operational needs.",
    features: [
      "Fast and flexible response",
      "On-site logistics support",
      "Property management services",
      "Hotel and hospitality porterage",
      "Event setup and breakdown",
      "Regular contract arrangements",
    ],
    icon: "Users",
  },
  // SPECIALISED
  {
    slug: "piano-moving",
    title: "London Piano Moving",
    category: "specialised",
    excerpt: "Your piano is not just an instrument - it's a vessel of cherished memories. We are custodians of your musical journey.",
    description: "At Octagon Removals, we recognise that your piano is not just an instrument; it's a vessel of cherished memories and emotions. Serving the heart of London, Essex, Kent, Middlesex, Surrey, and Hertfordshire, we see ourselves as more than movers - we are custodians of your musical journey. Every piano has a story. Our specialist piano moving team uses purpose-built equipment and decades of experience.",
    features: [
      "Upright, grand, and baby grand pianos",
      "Specialist piano moving equipment",
      "Fully insured piano transit",
      "Stair and tight-space specialists",
      "Climate-controlled transport",
      "Tuning referral service available",
    ],
    icon: "Music",
  },
  {
    slug: "international-removals",
    title: "London International Removals",
    category: "specialised",
    excerpt: "We exclusively transport your items in our vehicles - we do not mix your goods with other clients. From London to anywhere in Europe.",
    description: "London International Removals with Octagon Removals: Your Transition Partner. What sets us apart is that we exclusively transport your items in our vehicles. We do not mix your goods with those of other clients. We also do not wait for the container to be fully loaded, which may result in you waiting weeks. Your belongings travel directly to your destination.",
    features: [
      "Exclusive vehicle - no shared loads",
      "Door-to-door international service",
      "Full customs documentation",
      "Comprehensive international insurance",
      "Europe, USA, Canada, Australia",
      "Packing and crating included",
    ],
    icon: "Globe",
  },
];

// ============================================================
// TEAM MEMBERS - real data from WordPress API
// ============================================================
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  skills: { label: string; value: number }[];
}

export const TEAM: TeamMember[] = [
  {
    name: "Pawel Walerczuk",
    role: "Sales & Operations Director",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/pawel_ca012d8c.jpg",
    bio: "Pawel is our 'Frontman'. His unique approach and dedication to understanding our clients' needs are rocket fuel to our company. Pawel loves reading, camping, walking his dog, and being involved in the community.",
    skills: [{ label: "Sales", value: 100 }, { label: "Staff Management", value: 90 }, { label: "Order Tracking", value: 88 }],
  },
  {
    name: "Oliwia Chmielewska",
    role: "Operations Manager",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/oliwia_3e225f35.jpg",
    bio: "Oliwia ensures every move is planned with precision. From the first call to the final details, she makes sure everything runs smoothly, offering guidance and support every step of the way.",
    skills: [{ label: "Sales", value: 80 }, { label: "Staff Management", value: 70 }, { label: "Administration", value: 88 }],
  },
  {
    name: "Nicoll Walerczuk",
    role: "Moving Consultant",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/nicoll_b04bfbb2.jpg",
    bio: "Nicoll is one of our moving consultants who is always on alert to help our clients with their requests. Extremely friendly and dedicated to helping our clients find the right solution.",
    skills: [{ label: "Sales", value: 80 }, { label: "Staff Management", value: 70 }, { label: "Order Tracking", value: 88 }],
  },
  {
    name: "Tomasz Tutka",
    role: "Team Coordinator",
    bio: "Tomasz coordinates team operations and logistics, and is here to troubleshoot any vis major situations to ensure all our bookings are fulfilled to the highest standards. Tomasz is a passionate traveller.",
    skills: [{ label: "Team Coordination", value: 100 }, { label: "Punctuality", value: 99 }, { label: "Troubleshooting", value: 100 }],
  },
  {
    name: "Andrzej Kalinowski",
    role: "Senior Moving Expert",
    bio: "Andrzej is definitely a pearl of our team. He is our most experienced member and his approach and attention to detail provides excellent results for both commercial and residential clients. Andrzej likes fishing.",
    skills: [{ label: "Commercial & Residential", value: 100 }, { label: "Punctuality", value: 100 }, { label: "Work Dedication", value: 100 }],
  },
  {
    name: "Ramunas Rimdeika",
    role: "Driver & Moving Expert",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/ramunas_069f10f0.jpg",
    bio: "Every great moving team needs someone who knows their way around both the road and a toolbox, and that's Ramunas! As a skilled driver and moving expert, he makes sure every job runs on time and on budget.",
    skills: [{ label: "Moving Homes", value: 100 }, { label: "Furniture Dismantling", value: 100 }, { label: "Punctuality", value: 96 }],
  },
  {
    name: "Kajetan Kulacki",
    role: "Residential Moving Expert",
    bio: "Kajetan is our Residential Moving Expert - experienced, friendly, and always performs his work with a smile. He likes to travel, spend time with his family, and take pride in every move he completes.",
    skills: [{ label: "Moving Homes", value: 100 }, { label: "Packing", value: 100 }, { label: "Punctuality", value: 96 }],
  },
  {
    name: "Peter Vynnyk",
    role: "Moving Expert",
    bio: "Peter is a master of precision, efficiency, and expert handling. Whether it's packing delicate items or manoeuvring heavy furniture, he makes every move a smooth operation. Off the clock, he's all about cycling.",
    skills: [{ label: "Residential Moves", value: 100 }, { label: "Packing", value: 100 }, { label: "Punctuality", value: 100 }],
  },
  {
    name: "Bartosz Fronczak",
    role: "Packing & Loading Expert",
    bio: "Bartosz is our Packing and Loading Expert. At Octagon Removals, every successful move starts with careful packing and loading - and that's where Bartek shines. Outside of work, Bartosz's passion for bikes keeps him busy.",
    skills: [{ label: "Residential Moves", value: 100 }, { label: "Packing", value: 100 }, { label: "Punctuality", value: 100 }],
  },
  {
    name: "Lukasz Morzyc",
    role: "Moving Expert",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/lukasz_83c3a705.jpg",
    bio: "With strength, precision, and dedication, Lukasz helps make even the heaviest moves feel light. You'll often find him lifting with perfect form, whether it's boxes or barbells! Outside of work, Lukasz is passionate about fitness.",
    skills: [{ label: "Loading", value: 100 }, { label: "Packing", value: 100 }, { label: "Heavy Lifting", value: 100 }],
  },
  {
    name: "Sam Parrar",
    role: "Moving Expert",
    bio: "With his expertise in handling moves efficiently and carefully, Sam ensures every relocation goes smoothly for our clients. From heavy lifting to precise packing, Sam's dedication is second to none.",
    skills: [{ label: "Loading", value: 100 }, { label: "Packing", value: 100 }, { label: "Heavy Lifting", value: 100 }],
  },
  {
    name: "Ahmed Shariff",
    role: "Moving Expert",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/ahmed_81d42fd8.jpg",
    bio: "Ahmed is the Visionary of Our Team. As one of our moving experts, he ensures every job is handled with precision and care, always bringing a positive attitude. Outside of work, Ahmed is passionate about travelling.",
    skills: [{ label: "Loading", value: 100 }, { label: "Packing", value: 100 }, { label: "Customer Service", value: 100 }],
  },
  {
    name: "Filip Pekala",
    role: "Moving Expert",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/filip_729053c3.jpg",
    bio: "Filip may be one of our younger team members, but his precision, strength, and attention to detail make him a key part of every move. Whether securing fragile items or ensuring a smooth load, Filip delivers.",
    skills: [{ label: "Residential Moves", value: 100 }, { label: "Packing", value: 100 }, { label: "Customer Service", value: 100 }],
  },
];

// ============================================================
// TESTIMONIALS - real reviews from WordPress API
// ============================================================
export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  text: string;
  source: "google" | "trustpilot" | "direct";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kerrita",
    rating: 5,
    text: "Octagon Removals were amazing. I had to reschedule my move on short notice and they were able to accommodate me. I purchased both their packing and moving services and I was very happy with the results and the price. They were quick, organised, careful and professional. They were also a very warm and pleasant crew of 3. I would wholeheartedly recommend Octagon Removals for all your moving needs.",
    source: "trustpilot",
  },
  {
    name: "Graham Head",
    rating: 5,
    text: "Whatever you want to move, you need to look no further than Octagon Removals, who provide an excellent service at very competitive prices.",
    source: "trustpilot",
  },
  {
    name: "Marta K.",
    rating: 5,
    text: "Absolutely brilliant service from start to finish. The team arrived on time, handled everything with extraordinary care, and had us settled in our new home by the afternoon. Worth every penny.",
    source: "google",
    location: "Bromley",
  },
  {
    name: "James T.",
    rating: 5,
    text: "We moved our entire office of 45 people over a weekend. Octagon were professional, efficient, and nothing was damaged. I'd recommend them without hesitation to any business.",
    source: "google",
    location: "Canary Wharf",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "The packing team were exceptional - they wrapped everything meticulously and even helped reassemble our furniture. The fixed price meant no nasty surprises on moving day.",
    source: "trustpilot",
    location: "Richmond",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Used Octagon for our piano move - an incredibly delicate job. They handled it with complete professionalism and the piano arrived in perfect condition. Highly recommended.",
    source: "google",
    location: "Islington",
  },
  {
    name: "Emma R.",
    rating: 5,
    text: "Second time using Octagon Removals and they were just as good as the first time. Punctual, careful, and very friendly. The process was very smooth and they really went above and beyond.",
    source: "trustpilot",
    location: "Epsom",
  },
  {
    name: "Michael B.",
    rating: 5,
    text: "Octagon handled our international move to Germany. They exclusively used their own vehicle - no shared loads - which gave us complete peace of mind. Everything arrived on time and in perfect condition.",
    source: "google",
    location: "Fulham",
  },
];

// ============================================================
// LOCATIONS - all 17 areas with real local phone numbers
// ============================================================
export interface Location {
  slug: string;
  name: string;
  phone: string;
  phoneDisplay: string;
  boroughs: string[];
  heroTitle: string;
  intro: string;
  services: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "bromley",
    name: "Bromley",
    phone: "02089270542",
    phoneDisplay: "0208 927 0542",
    boroughs: ["Bromley", "Beckenham", "Penge", "Shortlands", "Bickley", "Chislehurst"],
    heroTitle: "Removals In Bromley | Octagon Removals – House & Office Moves",
    intro: "Professional house and office removals in Bromley and the surrounding areas. Octagon Removals provides fixed-price, fully insured removal services across Bromley, Beckenham, Penge, and all BR postcodes.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "epsom",
    name: "Epsom",
    phone: "01372679060",
    phoneDisplay: "0137 267 9060",
    boroughs: ["Epsom", "Ewell", "Stoneleigh", "Cheam", "Banstead", "Tadworth"],
    heroTitle: "Removals In Epsom | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company serving Epsom and Surrey. We offer comprehensive house removals, office relocations, packing services, and storage solutions across the KT17-KT19 postcodes.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "International Removals", "Piano Moving"],
  },
  {
    slug: "islington",
    name: "Islington",
    phone: "02036678598",
    phoneDisplay: "0203 667 8598",
    boroughs: ["Islington", "Angel", "Highbury", "Canonbury", "Barnsbury", "Holloway"],
    heroTitle: "Removals In Islington | Octagon Removals – House & Office Moves",
    intro: "Premium removals services in Islington, Angel, Highbury, and across the N1 and N5 postcodes. Octagon Removals is the trusted choice for house and office moves in North London.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "croydon",
    name: "Croydon",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Croydon", "South Croydon", "Purley", "Coulsdon", "Addiscombe", "Thornton Heath"],
    heroTitle: "Removals In Croydon | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Croydon and the surrounding areas. We serve all CR postcodes with fixed-price house removals, office relocations, and packing services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "enfield",
    name: "Enfield",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Enfield", "Edmonton", "Southgate", "Palmers Green", "Winchmore Hill", "Cockfosters"],
    heroTitle: "Removals In Enfield | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Enfield and North London. We cover all EN postcodes with professional house and office removal services, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "epping",
    name: "Epping",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Epping", "Loughton", "Chigwell", "Theydon Bois", "North Weald", "Ongar"],
    heroTitle: "Removals In Epping | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Epping and the Epping Forest district. Octagon Removals provides expert house and office removal services across CM16 and surrounding Essex postcodes.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Warehouse Removals", "Furniture Assembly"],
  },
  {
    slug: "finchley",
    name: "Finchley",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Finchley", "East Finchley", "North Finchley", "Woodside Park", "Whetstone", "Barnet"],
    heroTitle: "Removals In Finchley | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Finchley and North London. We serve N2, N3, N12 and surrounding postcodes with professional house removals, packing, and storage services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "fulham",
    name: "Fulham",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Fulham", "Parsons Green", "Putney", "Hammersmith", "Barons Court", "West Kensington"],
    heroTitle: "Removals In Fulham | Octagon Removals – House & Office Moves",
    intro: "Premium removals in Fulham and West London. Octagon Removals serves SW6 and surrounding postcodes with white-glove house removals, office relocations, and specialist services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Piano Moving", "International Removals"],
  },
  {
    slug: "kingston-upon-thames",
    name: "Kingston upon Thames",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Kingston upon Thames", "Surbiton", "New Malden", "Tolworth", "Hook", "Chessington"],
    heroTitle: "Removals In Kingston upon Thames | Octagon Removals",
    intro: "Professional removals in Kingston upon Thames and Surrey. We cover KT1, KT2, KT5 and surrounding postcodes with expert house and office removal services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "orpington",
    name: "Orpington",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Orpington", "Petts Wood", "St Mary Cray", "Crofton", "Farnborough", "Locksbottom"],
    heroTitle: "Removals In Orpington | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Orpington and South East London. We serve BR5, BR6 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "romford",
    name: "Romford",
    phone: "01708973210",
    phoneDisplay: "0170 897 3210",
    boroughs: ["Romford", "Hornchurch", "Upminster", "Rainham", "Harold Wood", "Gidea Park"],
    heroTitle: "Removals In Romford | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Romford and East London. Octagon Removals serves RM1-RM14 postcodes with professional house removals, packing, storage, and specialist services.",
    services: ["House Removals", "Flat Removals", "Packing Service", "Storage", "Piano Moving", "International Removals"],
  },
  {
    slug: "twickenham",
    name: "Twickenham",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Twickenham", "Whitton", "St Margarets", "Strawberry Hill", "Hampton", "Teddington"],
    heroTitle: "Removals In Twickenham | Octagon Removals – House & Office Moves",
    intro: "Premium removals in Twickenham and Richmond upon Thames. We serve TW1, TW2 and surrounding postcodes with expert house removals, packing, and specialist services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Piano Moving", "International Removals"],
  },
  {
    slug: "watford",
    name: "Watford",
    phone: "01923964026",
    phoneDisplay: "0192 396 4026",
    boroughs: ["Watford", "Bushey", "Oxhey", "Croxley Green", "Rickmansworth", "Chorleywood"],
    heroTitle: "Removals In Watford | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Watford and Hertfordshire. Octagon Removals serves WD17-WD25 and surrounding postcodes with expert house removals, office relocations, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    phone: "02030026383",
    phoneDisplay: "0203 002 6383",
    boroughs: ["Greenwich", "Blackheath", "Woolwich", "Charlton", "Eltham", "Kidbrooke"],
    heroTitle: "Removals In Greenwich | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Greenwich and South East London. We serve SE10, SE3, SE7 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "dartford",
    name: "Dartford",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Dartford", "Swanscombe", "Gravesend", "Northfleet", "Stone", "Greenhithe"],
    heroTitle: "Removals In Dartford | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Dartford and North Kent. Octagon Removals serves DA1-DA4 and surrounding postcodes with professional house removals, packing, and storage services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Uxbridge", "Hillingdon", "Hayes", "Ruislip", "Northolt", "Southall"],
    heroTitle: "Removals In Uxbridge | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Uxbridge and West London. We serve UB8, UB10 and surrounding postcodes with expert house removals, office relocations, and storage solutions.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    phone: "01277287453",
    phoneDisplay: "0127 728 7453",
    boroughs: ["Brentwood", "Shenfield", "Ingatestone", "Billericay", "Hutton", "Pilgrims Hatch"],
    heroTitle: "Removals In Brentwood | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Brentwood and Essex. Octagon Removals serves CM13-CM15 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  // ── NEW DOMAINS (April 2026) ──────────────────────────────
  {
    slug: "southwark",
    name: "Southwark",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Southwark", "Bermondsey", "Peckham", "Camberwell", "Borough", "Elephant & Castle"],
    heroTitle: "Removals In Southwark | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Southwark and South East London. We serve SE1, SE5, SE15, SE17 and surrounding postcodes with professional house removals, office relocations, and packing services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "lambeth",
    name: "Lambeth",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Lambeth", "Brixton", "Clapham", "Stockwell", "Streatham", "Herne Hill"],
    heroTitle: "Removals In Lambeth | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Lambeth and South London. Octagon Removals serves SW2, SW4, SW9, SW16 and surrounding postcodes with expert house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "city-of-london",
    name: "City of London",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["City of London", "EC1", "EC2", "EC3", "EC4", "Barbican"],
    heroTitle: "Removals In City of London | Octagon Removals – Office & Commercial Moves",
    intro: "Specialist commercial and residential removals in the City of London. We serve all EC postcodes with expert office relocations, porterage, and after-hours moves tailored to the Square Mile's strict access requirements.",
    services: ["Office Removals", "Porterage", "Office Clearance", "Furniture Assembly", "Storage", "International Removals"],
  },
  {
    slug: "haringey",
    name: "Haringey",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Haringey", "Tottenham", "Wood Green", "Muswell Hill", "Hornsey", "Crouch End"],
    heroTitle: "Removals In Haringey | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Haringey and North London. We serve N4, N8, N15, N22 and surrounding postcodes with professional house removals, packing, and storage services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "lewisham",
    name: "Lewisham",
    phone: "02089270544",
    phoneDisplay: "0208 927 0544",
    boroughs: ["Lewisham", "Catford", "Forest Hill", "Sydenham", "Deptford", "New Cross"],
    heroTitle: "Removals In Lewisham | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Lewisham and South East London. Octagon Removals serves SE4, SE6, SE13, SE14, SE23 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "brent",
    name: "Brent",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Brent", "Wembley", "Kilburn", "Willesden", "Harlesden", "Neasden"],
    heroTitle: "Removals In Brent | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Brent and North West London. We serve HA9, NW2, NW10 and surrounding postcodes with expert house removals, office relocations, and storage solutions.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "merton",
    name: "Merton",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Merton", "Wimbledon", "Mitcham", "Morden", "Colliers Wood", "Raynes Park"],
    heroTitle: "Removals In Merton | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Merton and South West London. We serve SW19, SW20, CR4 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Piano Moving", "International Removals"],
  },
  {
    slug: "waltham-forest",
    name: "Waltham Forest",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Waltham Forest", "Walthamstow", "Chingford", "Leyton", "Leytonstone", "Highams Park"],
    heroTitle: "Removals In Waltham Forest | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Waltham Forest and East London. Octagon Removals serves E4, E10, E11, E17 and surrounding postcodes with professional house removals, packing, and storage services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "newham",
    name: "Newham",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Newham", "Stratford", "West Ham", "East Ham", "Forest Gate", "Plaistow"],
    heroTitle: "Removals In Newham | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Newham and East London. We serve E6, E7, E13, E15, E16 and surrounding postcodes with expert house removals, office relocations, and storage solutions.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Hounslow", "Brentford", "Feltham", "Isleworth", "Heston", "Cranford"],
    heroTitle: "Removals In Hounslow | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Hounslow and West London. We serve TW3, TW4, TW5, TW7, TW13 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "hillingdon",
    name: "Hillingdon",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Hillingdon", "Hayes", "Ruislip", "Northolt", "Yiewsley", "West Drayton"],
    heroTitle: "Removals In Hillingdon | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Hillingdon and West London. Octagon Removals serves UB3, UB4, UB5, UB7 and surrounding postcodes with professional house removals, office relocations, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "International Removals"],
  },
  {
    slug: "redbridge",
    name: "Redbridge",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Redbridge", "Ilford", "Woodford", "Wanstead", "Barkingside", "Gants Hill"],
    heroTitle: "Removals In Redbridge | Octagon Removals – House & Office Moves",
    intro: "Professional removals in Redbridge and East London. We serve IG1, IG2, IG4, IG6 and surrounding postcodes with expert house removals, packing, and storage services.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Piano Moving"],
  },
  {
    slug: "sutton",
    name: "Sutton",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Sutton", "Cheam", "Carshalton", "Wallington", "Belmont", "Worcester Park"],
    heroTitle: "Removals In Sutton | Octagon Removals – House & Office Moves",
    intro: "Trusted removals company in Sutton and South London. We serve SM1, SM2, SM3, SM5, SM6 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
  {
    slug: "bexley",
    name: "Bexley",
    phone: "02085218000",
    phoneDisplay: "0208 521 8000",
    boroughs: ["Bexley", "Bexleyheath", "Sidcup", "Erith", "Welling", "Crayford"],
    heroTitle: "Removals In Bexley | Octagon Removals – House & Office Moves",
    intro: "Expert removals in Bexley and South East London. Octagon Removals serves DA5, DA6, DA7, DA14, DA15 and surrounding postcodes with professional house removals, packing, and storage.",
    services: ["House Removals", "Office Removals", "Packing Service", "Storage", "Furniture Assembly", "Disposal"],
  },
];


// ============================================================
// COMPANY STORY - real content from Our Story page
// ============================================================
export const COMPANY_STORY = {
  headline: "Artists Of Removals",
  subheadline: "Making Room For Your Expansion",
  paragraphs: [
    "Our story begins with a simple yet profound commitment to surpassing the expectations of our clients, offering an unparalleled collaborative experience that borders on true artistry.",
    "From the moment you entrust us with your relocation, no aspect is left to chance. We approach each endeavour with meticulous care and eagerness to orchestrate the perfect move tailored to your needs.",
    "Today, as a tightly-knit family business rooted in the vibrant tapestry of London, we boast an impressive track record of well over a decade of trading in the industry. Week after week, our experienced team serves many dozens of clients across the nation.",
    "Octagon Removals specialises in domestic and commercial relocations, storage solutions, and the delicate handling of fragile goods. We take pride in tackling the challenges of these realms, leaving a trail of well over a thousand satisfied clients in our wake each year.",
    "It would be remiss not to acknowledge that our humble beginnings and subsequent triumphs owe much to the captivating allure of London. We extend our heartfelt gratitude to this diverse city, as well as to the unwavering dedication of our team and the ever-growing community that entrusts us with their needs.",
    "For as long as we keep setting and reaching new milestones, our mission to 'make room for our clients' expansion' propels us forward, eager for the next chapter to unfold. So our story continues!",
  ],
  coreValues: [
    { title: "Integrity", desc: "We are transparent in everything we do. The price we quote is the price you pay - no hidden charges, ever." },
    { title: "Precision", desc: "Every move is planned meticulously. We treat your belongings as our own, with white-glove care at every stage." },
    { title: "Reliability", desc: "We arrive on time, every time. Our clients trust us because we consistently deliver on our promises." },
    { title: "Community", desc: "As a London family business, we are deeply rooted in the communities we serve across the city and the M25." },
  ],
  mission: "To make room for our clients' expansion - by providing the most professional, stress-free, and fairly priced removal services in London.",
};

