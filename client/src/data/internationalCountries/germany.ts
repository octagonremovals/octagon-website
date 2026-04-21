import type { CountryData } from "../internationalCountryTypes";

const germany: CountryData = {
  slug: "germany",
  name: "Germany",
  flag: "🇩🇪",
  deliveryTime: "2 to 3 days",
  euMember: true,
  movesCompleted: 87,

  seo: {
    title: "Removals from London to Germany | Full Service | Octagon Removals",
    metaDescription:
      "Full service removals from London to Germany. We pack, dismantle, load, transport and unpack at your new German home. Exclusive vehicle, no shared loads. Fixed price includes packing, ferry, fuel, insurance and customs. Call 0208 521 8000.",
    h1: "Full Service Removals from London to Germany",
  },

  hero: {
    headline: "Removals from London to Germany. Full Service, Door to Door.",
    subheading:
      "We pack, dismantle, load, transport and unpack everything at your new home in Germany. Exclusive vehicle, no shared loads. Fixed price includes packing materials, ferry, fuel, insurance, road tolls and customs. Delivery in 2 to 3 days.",
  },

  costOfLiving: {
    headline: "Cost of Living in Germany",
    intro:
      "Germany offers a significantly lower cost of living than London, particularly outside Berlin and Munich. Rent, food, and transport are all cheaper, and the quality of public services is high.",
    stats: [
      { label: "1-bed flat in Berlin", value: "€1,100/mo", note: "vs £2,000+ in London" },
      { label: "1-bed flat in smaller cities", value: "€600–900/mo", note: "Hamburg, Frankfurt, Cologne" },
      { label: "Monthly living costs", value: "€1,600–2,200", note: "single person, comfortable" },
      { label: "Cheaper than London", value: "~30–40%", note: "overall cost of living" },
    ],
    note: "Figures are indicative averages for 2025. Costs vary significantly by city and region.",
  },

  bestTimeToMove: {
    headline: "Best Time to Move to Germany",
    content:
      "Spring (March to May) and early autumn (September to October) are the best times to move to Germany. Summer is busy and ferry crossings fill up quickly from May onwards. December and January are quieter but road conditions across northern Europe can be unpredictable. If you are moving to Munich or Bavaria, avoid the Oktoberfest period (late September to early October) as accommodation is extremely scarce and expensive. For Berlin, the city is active year-round, but August tends to be quieter as many residents leave for summer holidays. Book at least 6 weeks ahead for any summer move.",
    avoidMonths: ["December", "January"],
    bestMonths: ["March", "April", "May", "September", "October"],
  },

  preMoveChecklist: {
    headline: "What to Sort Before You Leave London",
    items: [
      {
        task: "Register your address (Anmeldung)",
        detail:
          "You must register at your local Einwohnermeldeamt (residents' registration office) within 14 days of arriving in Germany. You need a completed Anmeldeformular and a landlord confirmation letter (Wohnungsgeberbestätigung).",
        timing: "Within 14 days of arrival",
      },
      {
        task: "Notify HMRC you are leaving the UK",
        detail:
          "Complete form P85 online at gov.uk. Prevents you being taxed as a UK resident after you leave.",
        timing: "Before or shortly after departure",
      },
      {
        task: "Open a German bank account",
        detail:
          "Deutsche Bank, Commerzbank and N26 all accept UK residents. Many landlords require a German account for rent payments.",
        timing: "4–6 weeks before move",
      },
      {
        task: "Arrange German health insurance",
        detail:
          "Health insurance is mandatory in Germany. EU nationals can use EHIC for the first 3 months. After that, you must register with a statutory health insurer (Krankenkasse) such as TK or AOK.",
        timing: "Before departure",
      },
      {
        task: "Check your UK driving licence",
        detail:
          "UK licences are valid in Germany for up to 6 months. After that, you must exchange it for a German Führerschein. The process requires a German address registration.",
        timing: "Within 6 months of arrival",
      },
      {
        task: "Confirm your German address in writing",
        detail:
          "You need a signed lease or property purchase confirmation for customs documentation.",
        timing: "Before move date",
      },
      {
        task: "Apply for Transfer of Residence (ToR) relief",
        detail:
          "Allows you to import household goods without paying import duty or VAT. Must be applied for before your goods arrive. We guide you through this.",
        timing: "6–8 weeks before move",
      },
    ],
  },

  customs: {
    headline: "Customs & Documents, What You Need to Know",
    euStatus:
      "Germany is an EU member state. Since Brexit, moving household goods from the UK to Germany crosses an international customs border in both directions. Your belongings must be declared on departure from the UK and on arrival in Germany.",
    torRelief: {
      available: true,
      explanation:
        "Transfer of Residence (ToR) relief allows you to import your used household goods into Germany without paying import duty or VAT, provided you qualify. To qualify: you must be genuinely relocating your main residence to Germany, you must have been resident outside Germany for at least 12 consecutive months before the move, and the goods must have been owned and used by you for at least 6 months.",
    },
    requiredDocuments: [
      "Valid passport",
      "Proof of UK address for the past 12 months (utility bills, bank statements, or tenancy agreement)",
      "Proof of German address (signed lease or property purchase confirmation)",
      "Detailed packing inventory listing contents by category with approximate values",
      "German customs import declaration (prepared by our licensed customs agent)",
    ],
    timeline:
      "Documents must be submitted before your goods arrive in Germany. We recommend having all paperwork confirmed at least 2 weeks before your move date.",
    incompleteDocsRisk:
      "If documentation is incomplete, German customs (Zoll) may assess your household goods for import duty and VAT at 19%. Getting the paperwork right before departure is far simpler than resolving it after your goods have arrived.",
    countrySpecific: [
      "Register at your local Einwohnermeldeamt within 14 days of arrival",
      "EU nationals have the right to live and work in Germany without a visa",
      "Non-EU nationals need a residence permit before or shortly after arrival",
      "Health insurance is mandatory — register with a Krankenkasse within 3 months",
      "UK driving licences must be exchanged for a German Führerschein within 6 months",
    ],
    customsClearanceTime: "1 to 2 working days with correct documentation in place",
    prohibitedItems:
      "Standard EU restrictions apply. Certain food products, plants and soil, firearms, and counterfeit goods are restricted or prohibited. Alcohol and tobacco above personal allowances are subject to duty.",
    partnerNote:
      "We work with licensed customs agents registered with the German Zoll (Bundeszollverwaltung). Your goods do not cross the border without a qualified agent managing the declaration on your behalf.",
  },

  whatIsIncluded: [
    {
      title: "Full Packing Service",
      desc: "We pack every room, wrap every item, label every box. You do not touch a thing unless you want to.",
      icon: "📦",
    },
    {
      title: "Furniture Dismantling & Reassembly",
      desc: "Taken apart at your London home, rebuilt exactly as it was at your new home in Germany.",
      icon: "🔧",
    },
    {
      title: "Itemised Inventory",
      desc: "Every item catalogued and photographed before loading. Full list provided to you and used for German customs documentation.",
      icon: "📋",
    },
    {
      title: "Exclusive Vehicle",
      desc: "Your belongings travel in our vehicle only. No shared loads, no waiting for a container to fill.",
      icon: "🚛",
    },
    {
      title: "Customs Assistance",
      desc: "We handle the paperwork and work with our licensed customs agents in Germany to clear your goods correctly through the Zoll.",
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
      "Transit through Germany",
      "German customs clearance via licensed Zoll agent",
      "Delivery to your new German address",
      "Furniture reassembly",
      "Full unpack at your new home",
      "Removal of all packing materials",
    ],
    youHandle: [
      "Notify HMRC you are leaving the UK (P85 form)",
      "Register at your Einwohnermeldeamt within 14 days of arrival",
      "Arrange German health insurance",
      "Open a German bank account before arrival",
      "Be present at both ends of the move (or nominate a trusted representative)",
    ],
  },

  moveTimeline: {
    headline: "Your Move to Germany, Step by Step",
    steps: [
      {
        week: "6 weeks before",
        title: "Free Survey & Fixed Quote",
        desc: "We assess your home volume in person or by video call. You receive a fixed price that includes everything — no surprises.",
      },
      {
        week: "4 weeks before",
        title: "Customs Documents Confirmed",
        desc: "We confirm your packing inventory and customs declaration. Ferry booked.",
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
        desc: "We cross via ferry (Dover–Calais or Folkestone–Coquelles). Our customs agent handles the German Zoll declaration.",
      },
      {
        week: "Day 2–3",
        title: "Delivery, Reassembly & Unpack",
        desc: "We unload, reassemble all furniture and unpack every box at your new German home. You tell us where everything goes.",
      },
    ],
  },

  popularDestinations: [
    {
      city: "Berlin",
      region: "Berlin",
      why: "The most popular destination for London professionals and creatives relocating to Germany. Lower cost of living than London, a thriving arts and tech scene, and excellent public transport. We deliver to all Berlin districts.",
    },
    {
      city: "Munich",
      region: "Bavaria",
      why: "Germany's most expensive city but still cheaper than London. Strong job market, particularly in automotive, finance and technology. Popular with families for its schools and quality of life.",
    },
    {
      city: "Hamburg",
      region: "Hamburg",
      why: "Germany's second city and a major port. Popular with finance and media professionals. Good transport links to the UK via ferry from Harwich.",
    },
    {
      city: "Frankfurt",
      region: "Hesse",
      why: "Europe's financial centre. Popular with banking and finance professionals. Direct flights to London and a large expat community.",
    },
    {
      city: "Cologne",
      region: "North Rhine-Westphalia",
      why: "A cultural city on the Rhine with a lower cost of living than Munich or Frankfurt. Popular with families and media professionals.",
    },
    {
      city: "Dusseldorf",
      region: "North Rhine-Westphalia",
      why: "A major business hub with a large Japanese and British expat community. Strong fashion and advertising industries.",
    },
  ],

  approximateCosts: {
    headline: "Approximate Costs — London to Germany",
    intro:
      "The cost of a removal to Germany depends on the volume of your belongings and the distance to your destination within Germany. The figures below are indicative ranges based on moves we have completed. A survey — in person or by video call — is needed for an accurate fixed price.",
    tiers: [
      {
        size: "Small move",
        description: "1–2 bedroom flat, partial contents",
        range: "£2,500 to £4,000",
        includes: "Packing, exclusive vehicle, ferry, customs, delivery",
      },
      {
        size: "Medium move",
        description: "3–4 bedroom house, full contents",
        range: "£4,200 to £6,500",
        includes: "Full packing, furniture dismantling, exclusive vehicle, ferry, customs, delivery and reassembly",
      },
      {
        size: "Large move",
        description: "5+ bedroom house or significant volume",
        range: "£6,500 to £11,000+",
        includes: "Full packing, furniture dismantling, exclusive vehicle, ferry, customs, delivery, reassembly and full unpack",
      },
    ],
    disclaimer:
      "These are estimates only. The price we quote after your survey is fixed — it will not change on moving day. All prices include packing materials, ferry, fuel, road tolls, insurance and customs agent fees.",
  },

  reviews: [
    {
      name: "Thomas B.",
      location: "Moved from Islington to Berlin",
      rating: 5,
      text: "Octagon made our move to Berlin completely stress-free. They packed everything in one day, handled all the customs paperwork, and had everything reassembled in our new apartment within 3 days. The fixed price meant no surprises.",
      date: "March 2025",
    },
    {
      name: "Anna K.",
      location: "Moved from Chelsea to Munich",
      rating: 5,
      text: "I was worried about the customs side of things post-Brexit but Octagon handled everything. Their agent cleared everything through German customs without any issues. Highly recommend.",
      date: "January 2025",
    },
    {
      name: "David & Sarah M.",
      location: "Moved from Richmond to Hamburg",
      rating: 5,
      text: "Moving a full 4-bedroom house to Hamburg felt daunting. Octagon came and packed everything, dismantled our furniture, and reassembled it all exactly where we wanted it. Professional from start to finish.",
      date: "October 2024",
    },
  ],

  faqs: [
    {
      q: "How long does a removal from London to Germany take?",
      a: "Door to door, most moves to Germany take 2 to 3 days from collection to delivery. We cross via Dover–Calais or Folkestone–Coquelles. Delivery to Berlin or Hamburg is typically 2 days; to Munich or southern Germany typically 3 days.",
    },
    {
      q: "What documents do I need for customs?",
      a: "The key documents are: a valid passport, proof of UK address for the past 12 months, proof of your German address, and a detailed packing inventory. You also need to have been resident outside Germany for at least 12 consecutive months to qualify for Transfer of Residence relief. We guide you through every document and our customs agent handles the German Zoll declaration.",
    },
    {
      q: "Do you pack everything?",
      a: "Yes. Our team arrives with all materials — boxes, wrapping, tape, wardrobe boxes — and packs every room. We dismantle all furniture, wrap everything, and label every box by room.",
    },
    {
      q: "How is the price calculated?",
      a: "The price is based on the volume of your belongings and the distance to your destination in Germany. We assess this during a free survey — in person or by video call. The price we give you after the survey is fixed and includes everything: packing materials, ferry, fuel, road tolls, insurance and customs agent fees.",
    },
    {
      q: "Do I need to register in Germany?",
      a: "Yes. You must register at your local Einwohnermeldeamt (residents' registration office) within 14 days of arriving. You need a completed Anmeldeformular and a landlord confirmation letter (Wohnungsgeberbestätigung). This registration is required for almost everything in Germany — bank accounts, health insurance, driving licence exchange.",
    },
    {
      q: "Do you reassemble furniture at the destination?",
      a: "Yes. Everything we dismantle at your London home, we reassemble at your new home in Germany. Beds, wardrobes, desks, shelving — all rebuilt exactly as they were.",
    },
    {
      q: "Can you store my belongings if my new home in Germany is not ready?",
      a: "Yes. If there is a gap between your collection date and when you can take delivery in Germany, we hold your belongings in our secure CCTV-monitored storage facility in London.",
    },
    {
      q: "Is my move insured?",
      a: "Yes. Your belongings are covered in transit and in storage. We photograph every item before loading and provide a full itemised inventory.",
    },
  ],
};

export default germany;

