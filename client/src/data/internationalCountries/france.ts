import type { CountryData } from "../internationalCountryTypes";

const france: CountryData = {
  slug: "france",
  name: "France",
  flag: "🇫🇷",
  deliveryTime: "2 to 4 days",
  euMember: true,
  movesCompleted: 155,

  seo: {
    title: "Removals from London to France | Full Service | Octagon Removals",
    metaDescription:
      "Full service removals from London to France. We pack, dismantle, load, transport and unpack at your new French home. Exclusive vehicle, no shared loads. Fixed price includes packing, ferry, fuel, insurance and customs. Call 0208 521 8000.",
    h1: "Full Service Removals from London to France",
  },

  hero: {
    headline: "Removals from London to France. Full Service, Door to Door.",
    subheading:
      "We pack, dismantle, load, transport and unpack everything at your new home in France. Exclusive vehicle, no shared loads. Fixed price includes packing materials, ferry, fuel, insurance, road tolls and customs. Delivery in 2 to 4 days.",
  },

  costOfLiving: {
    headline: "Cost of Living in France",
    intro:
      "France is consistently cheaper than London for day-to-day living. Rent, food, and transport all come in below London prices — particularly outside Paris.",
    stats: [
      { label: "1-bed flat in Paris", value: "€1,200/mo", note: "vs £2,000+ in London" },
      { label: "1-bed flat outside Paris", value: "€600–800/mo", note: "Lyon, Bordeaux, Toulouse" },
      { label: "Monthly living costs", value: "€1,800–2,500", note: "single person, comfortable" },
      { label: "Cheaper than London", value: "~25–35%", note: "overall cost of living" },
    ],
    note: "Figures are indicative averages for 2025. Costs vary significantly by region.",
  },

  bestTimeToMove: {
    headline: "Best Time to Move to France",
    content:
      "Avoid August if at all possible. France effectively shuts down in August, businesses close, ferry demand spikes, and traffic on the autoroutes is at its worst. September and October are ideal: the summer rush is over, the weather is still good, and ferry crossings are easier to book. December and January are quiet but Channel crossings can be disrupted by weather. If you are moving to the south of France, spring (March to May) is the most practical window before the summer tourist season drives up accommodation costs. Book at least 6 to 8 weeks ahead for summer moves regardless of month. Ferry capacity and vehicle availability fill up quickly from May onwards.",
    avoidMonths: ["August"],
    bestMonths: ["September", "October", "March", "April", "May"],
  },

  preMoveChecklist: {
    headline: "What to Sort Before You Leave London",
    items: [
      {
        task: "Apply for your attestation de changement de résidence",
        detail:
          "Required for duty-free customs clearance. Confirms you have been resident outside France for 12 or more months. We guide you through this.",
        timing: "6–8 weeks before move",
      },
      {
        task: "Notify HMRC you are leaving the UK",
        detail:
          "Complete form P85 online at gov.uk. Prevents you being taxed as a UK resident after you leave. Takes about 10 minutes.",
        timing: "Before or shortly after departure",
      },
      {
        task: "Open a French bank account",
        detail:
          "Many landlords and utility companies require a French account. BNP Paribas, Société Générale and Crédit Agricole all accept UK residents pre-arrival.",
        timing: "4–6 weeks before move",
      },
      {
        task: "Register your children's school",
        detail:
          "French state schools are free but require registration with the local mairie. Places in popular areas fill quickly.",
        timing: "As early as possible",
      },
      {
        task: "Arrange French health insurance",
        detail:
          "EU nationals can apply for the PUMA scheme after 3 months of residency. Private cover is recommended for the first 3 months.",
        timing: "Before departure",
      },
      {
        task: "Check your UK driving licence",
        detail:
          "UK licences are valid in France but must be exchanged for a French permis de conduire within 12 months of establishing residency.",
        timing: "After arrival",
      },
      {
        task: "Confirm your French address in writing",
        detail:
          "You will need a signed lease or property purchase confirmation for customs documentation. A letter from a host (attestation d'hébergement) is accepted if staying with someone initially.",
        timing: "Before move date",
      },
    ],
  },

  customs: {
    headline: "Customs & Documents, What You Need to Know",
    euStatus:
      "France is an EU member state. Since Brexit, moving household goods from the UK to France crosses an international customs border in both directions. Your belongings must be declared on departure from the UK and on arrival in France.",
    torRelief: {
      available: true,
      explanation:
        "Transfer of Residence (ToR) relief allows you to import your used household goods into France without paying import duty or VAT, provided you qualify. To qualify: you must be genuinely relocating your main residence to France, you must have been resident outside France for at least 12 consecutive months before the move, and the goods must have been owned and used by you for at least 6 months. The relief is not automatic — it must be applied for and supported with documentation before your goods arrive.",
    },
    requiredDocuments: [
      "Valid passport",
      "Proof of UK address for the past 12 months (utility bills, bank statements, or tenancy agreement)",
      "Proof of French address (signed lease, property purchase confirmation, or attestation d'hébergement)",
      "Attestation de changement de résidence — a signed declaration confirming the move is a genuine permanent relocation",
      "Detailed packing inventory listing contents by category with approximate values",
      "French customs import declaration (prepared by our licensed customs agent)",
    ],
    timeline:
      "Documents must be submitted before your goods arrive in France. We recommend having all paperwork confirmed at least 2 weeks before your move date. The attestation de changement de résidence should be prepared 4 to 6 weeks in advance.",
    incompleteDocsRisk:
      "If documentation is incomplete or the 12-month residency requirement cannot be demonstrated, French customs (the Douanes) may assess your household goods for import duty and VAT at 20%. This can amount to a significant sum on a full household. Getting the paperwork right before departure is far simpler than resolving it after your goods have arrived.",
    countrySpecific: [
      "Register at your local Mairie (town hall) within 3 months of arrival",
      "EU nationals have the right to live and work in France without a visa",
      "Non-EU nationals need a long-stay visa (type D) before entering France to live",
      "Apply for the PUMA health scheme after 3 months of residency",
      "UK driving licences must be exchanged for a French permis within 12 months",
    ],
    customsClearanceTime: "1 to 3 working days with correct documentation in place",
    prohibitedItems:
      "Standard EU restrictions apply. Certain food products (particularly meat and dairy), plants and soil, firearms, and counterfeit goods are restricted or prohibited. Alcohol and tobacco above personal allowances are subject to duty.",
    partnerNote:
      "We work with licensed customs agents registered with the French Douanes (Direction générale des douanes et droits indirects). Your goods do not cross the border without a qualified agent managing the declaration on your behalf.",
  },

  whatIsIncluded: [
    {
      title: "Full Packing Service",
      desc: "We pack every room, wrap every item, label every box. You do not touch a thing unless you want to.",
      icon: "📦",
    },
    {
      title: "Furniture Dismantling & Reassembly",
      desc: "Taken apart at your London home, rebuilt exactly as it was at your new home in France.",
      icon: "🔧",
    },
    {
      title: "Itemised Inventory",
      desc: "Every item catalogued and photographed before loading. Full list provided to you and used for French customs documentation.",
      icon: "📋",
    },
    {
      title: "Exclusive Vehicle",
      desc: "Your belongings travel in our vehicle only. No shared loads, no waiting for a container to fill.",
      icon: "🚛",
    },
    {
      title: "Customs Assistance",
      desc: "We handle the paperwork and work with our licensed customs agents in France to clear your goods correctly through the Douanes.",
      icon: "📄",
    },
    {
      title: "Dedicated Consultant",
      desc: "One person manages your move from first call to final delivery. Available throughout the journey.",
      icon: "👤",
    },
    {
      title: "Fixed Price — Everything Included",
      desc: "Packing materials, ferry, fuel, insurance, road tolls and customs agent fees. Nothing added later.",
      icon: "✅",
    },
    {
      title: "Secure Storage",
      desc: "If there is a gap between collection and delivery, your belongings are held in our CCTV-monitored storage facility in London.",
      icon: "🔒",
    },
  ],

  responsibilitySplit: {
    headline: "What We Handle vs. What You Handle",
    octagonHandles: [
      "Full packing of every room",
      "All packing materials (boxes, wrap, tape, wardrobe boxes)",
      "Furniture dismantling at your London home",
      "Itemised inventory and photographic evidence",
      "Loading into our exclusive vehicle",
      "UK export customs declaration",
      "Ferry booking and Channel crossing",
      "Transit through France",
      "French customs clearance via licensed Douanes agent",
      "Delivery to your new French address",
      "Furniture reassembly",
      "Full unpack at your new home",
      "Removal of all packing materials",
    ],
    youHandle: [
      "Notify HMRC you are leaving the UK (P85 form — takes 10 minutes online)",
      "Obtain your attestation de changement de résidence (we guide you through this)",
      "Arrange your French bank account before arrival",
      "Sort French health insurance for the first 3 months",
      "Register at your local Mairie within 3 months of arrival",
      "Be present at both ends of the move (or nominate a trusted representative)",
    ],
  },

  moveTimeline: {
    headline: "Your Move to France, Step by Step",
    steps: [
      {
        week: "6 weeks before",
        title: "Free Survey & Fixed Quote",
        desc: "We assess your home volume in person or by video call. You receive a fixed price that includes everything — no surprises.",
      },
      {
        week: "4 weeks before",
        title: "Customs Documents Confirmed",
        desc: "We confirm your attestation de changement de résidence, packing inventory and customs declaration. Ferry booked.",
      },
      {
        week: "1 day before move",
        title: "We Pack Your Home",
        desc: "Our team arrives with all materials. We pack every room, wrap every item, dismantle all furniture. You do not lift a thing.",
      },
      {
        week: "Move day",
        title: "Loading & Departure",
        desc: "Everything loaded into our exclusive vehicle, documented and photographed. Your dedicated consultant confirms departure.",
      },
      {
        week: "Day 1–2",
        title: "Channel Crossing & Customs",
        desc: "We cross via ferry (Dover–Calais or Folkestone–Coquelles). Our customs agent handles the French Douanes declaration.",
      },
      {
        week: "Day 2–4",
        title: "Delivery, Reassembly & Unpack",
        desc: "We unload, reassemble all furniture and unpack every box at your new French home. You tell us where everything goes.",
      },
    ],
  },

  popularDestinations: [
    {
      city: "Paris",
      region: "Île-de-France",
      why: "The most popular destination for London professionals relocating to France. We deliver to all Paris arrondissements, including the 16th, 8th and 7th. Typically a 2-day door-to-door service.",
    },
    {
      city: "Lyon",
      region: "Auvergne-Rhône-Alpes",
      why: "France's second city and a favourite for families leaving London. Lower cost of living than Paris, excellent schools, and a 2-hour TGV from Paris. The 6th arrondissement is particularly popular with British expats.",
    },
    {
      city: "Bordeaux",
      region: "Nouvelle-Aquitaine",
      why: "Increasingly popular with Londoners seeking a slower pace without sacrificing culture. Direct flights to London, a thriving food scene, and property prices well below Paris.",
    },
    {
      city: "Nice",
      region: "Provence-Alpes-Côte d'Azur",
      why: "The gateway to the French Riviera. Popular with retirees and remote workers. Warm climate, proximity to Monaco, and a large existing British community.",
    },
    {
      city: "Toulouse",
      region: "Occitanie",
      why: "A university city with a young population and growing tech sector. Cheaper than Bordeaux and Lyon, with a strong quality of life and direct flights to London.",
    },
    {
      city: "Dordogne",
      region: "Nouvelle-Aquitaine",
      why: "The most popular rural destination for British families. Rolling countryside, affordable farmhouses, and a well-established expat community. We have delivered to the Dordogne many times.",
    },
    {
      city: "Normandy",
      region: "Normandie",
      why: "Close to the Channel ports and popular with families wanting easy access back to the UK. Property is affordable and the ferry crossing from Portsmouth or Poole is straightforward.",
    },
    {
      city: "Montpellier",
      region: "Occitanie",
      why: "A fast-growing city with a Mediterranean climate, strong university, and lower costs than Nice or Marseille. Popular with younger families and remote workers.",
    },
  ],

  approximateCosts: {
    headline: "Approximate Costs — London to France",
    intro:
      "The cost of a removal to France depends on the volume of your belongings and the distance to your destination within France. The figures below are indicative ranges based on moves we have completed. A survey — in person or by video call — is needed for an accurate fixed price.",
    tiers: [
      {
        size: "Small move",
        description: "1–2 bedroom flat, partial contents",
        range: "£2,800 to £4,200",
        includes: "Packing, exclusive vehicle, ferry, customs, delivery",
      },
      {
        size: "Medium move",
        description: "3–4 bedroom house, full contents",
        range: "£4,500 to £7,500",
        includes: "Full packing, furniture dismantling, exclusive vehicle, ferry, customs, delivery and reassembly",
      },
      {
        size: "Large move",
        description: "5+ bedroom house or significant volume",
        range: "£7,500 to £14,000+",
        includes: "Full packing, furniture dismantling, exclusive vehicle, ferry, customs, delivery, reassembly and full unpack",
      },
    ],
    disclaimer:
      "These are estimates only. The price we quote after your survey is fixed — it will not change on moving day. All prices include packing materials, ferry, fuel, road tolls, insurance and customs agent fees.",
  },

  reviews: [
    {
      name: "Caroline H.",
      location: "Moved from Kensington to Paris 16th",
      rating: 5,
      text: "We moved a 4-bedroom house from Kensington to Paris. The team packed everything in one day, handled all the customs paperwork, and had everything reassembled in our new apartment within 3 days. Nothing was damaged. The price was exactly what we were quoted.",
      date: "February 2025",
    },
    {
      name: "James F.",
      location: "Moved from Canary Wharf to Lyon",
      rating: 5,
      text: "I was nervous about the customs side of things post-Brexit but Octagon handled everything. They told me exactly what documents I needed, when to get them, and their agent cleared everything through French customs without a hitch. Highly recommend.",
      date: "November 2024",
    },
    {
      name: "Sophie & Mark T.",
      location: "Moved from Richmond to the Dordogne",
      rating: 5,
      text: "Moving to rural France with a full house of furniture felt daunting. Octagon came and packed everything, dismantled our wardrobes and beds, and reassembled everything exactly where we wanted it in our new farmhouse. The fixed price meant no surprises.",
      date: "September 2024",
    },
  ],

  faqs: [
    {
      q: "How long does a removal from London to France take?",
      a: "Door to door, most moves to France take 2 to 4 days from collection to delivery. We cross via Dover–Calais or Folkestone–Coquelles. Delivery to Paris is typically 2 days; to the south of France (Nice, Toulouse, Bordeaux) typically 3 to 4 days.",
    },
    {
      q: "What documents do I need for customs?",
      a: "The key documents are: a valid passport, proof of UK address for the past 12 months, proof of your French address, and an attestation de changement de résidence confirming the move is a genuine permanent relocation. You also need to have been resident outside France for at least 12 consecutive months. We guide you through every document and our customs agent handles the French Douanes declaration.",
    },
    {
      q: "Do you pack everything?",
      a: "Yes. Our team arrives with all materials — boxes, wrapping, tape, wardrobe boxes — and packs every room. We dismantle all furniture, wrap everything, and label every box by room. You do not need to pack a single thing unless you want to.",
    },
    {
      q: "How is the price calculated?",
      a: "The price is based on the volume of your belongings and the distance to your destination in France. We assess this during a free survey — in person or by video call. The price we give you after the survey is fixed and includes everything: packing materials, ferry, fuel, road tolls, insurance and customs agent fees.",
    },
    {
      q: "What happens at customs?",
      a: "We handle the UK export declaration before departure. At the French border, our licensed customs agent submits the import declaration to the Douanes and processes your Transfer of Residence relief application. You do not need to be present at the border. Your dedicated consultant keeps you updated throughout.",
    },
    {
      q: "Do you pack fragile and high-value items differently?",
      a: "Yes. Artwork, mirrors, antiques, glassware and fragile items are individually wrapped in specialist materials and packed into reinforced boxes. For very high-value items such as art or antiques we can build bespoke wooden crates on site. Everything is photographed before packing and included in the itemised inventory.",
    },
    {
      q: "Do you reassemble furniture at the destination?",
      a: "Yes. Everything we dismantle at your London home, we reassemble at your new home in France. Beds, wardrobes, desks, shelving — all rebuilt exactly as they were. You tell us where each piece goes.",
    },
    {
      q: "Can you store my belongings if my new home in France is not ready?",
      a: "Yes. If there is a gap between your collection date and when you can take delivery in France, we hold your belongings in our secure CCTV-monitored storage facility in London. No additional handling — your goods stay in the same packaging until delivery.",
    },
    {
      q: "Is my move insured?",
      a: "Yes. Your belongings are covered in transit and in storage. We photograph every item before loading and provide a full itemised inventory. In the unlikely event of damage, there is a clear photographic record of the condition of every item before it left your London home.",
    },
    {
      q: "Do I need to be present during the move?",
      a: "We ask that you or a trusted representative is present at both ends of the move — at your London home when we pack and load, and at your French address when we deliver and unpack. If that is not possible, we can discuss alternative arrangements.",
    },
    {
      q: "What if my French property is not ready on the agreed date?",
      a: "It happens. Property completions slip, chains break, renovations overrun. If your French address is not ready, we hold your belongings in our secure storage facility in London at no penalty. When you are ready, we deliver. No pressure, no extra handling fees.",
    },
  ],
};

export default france;

