import type { CountryData } from "../internationalCountryTypes";

const spain: CountryData = {
  slug: "spain",
  name: "Spain",
  flag: "🇪🇸",
  deliveryTime: "3 to 5 days",
  euMember: true,
  movesCompleted: 142,

  seo: {
    title: "Removals from London to Spain | Full Service | Octagon Removals",
    metaDescription:
      "Full service removals from London to Spain. We pack, dismantle, load, transport and unpack at your new Spanish home. Exclusive vehicle, no shared loads. Fixed price includes packing, ferry, fuel, insurance and customs. Call 0208 521 8000.",
    h1: "Full Service Removals from London to Spain",
  },

  hero: {
    headline: "Removals from London to Spain. Full Service, Door to Door.",
    subheading:
      "We pack, dismantle, load, transport and unpack everything at your new home in Spain. Exclusive vehicle, no shared loads. Fixed price includes packing materials, ferry, fuel, insurance, road tolls and customs. Delivery in 3 to 5 days.",
  },

  costOfLiving: {
    headline: "Cost of Living in Spain",
    intro:
      "Spain is substantially cheaper than London for everyday living. Rent, food, dining out, and transport all come in well below London prices — even in Madrid and Barcelona.",
    stats: [
      { label: "1-bed flat in Madrid", value: "€1,000/mo", note: "vs £2,000+ in London" },
      { label: "1-bed flat on the coast", value: "€500–800/mo", note: "Valencia, Alicante, Malaga" },
      { label: "Monthly living costs", value: "€1,400–2,000", note: "single person, comfortable" },
      { label: "Cheaper than London", value: "~35–45%", note: "overall cost of living" },
    ],
    note: "Figures are indicative averages for 2025. Costs vary significantly by region.",
  },

  bestTimeToMove: {
    headline: "Best Time to Move to Spain",
    content:
      "Spring (March to May) and autumn (September to November) are the best times to move to Spain. Summer is extremely hot in the interior and along the southern coast, and August in particular sees many Spanish businesses close for the month. Ferry crossings and road routes through France are busiest in July and August. If you are moving to the Costa del Sol, Costa Blanca or the Balearic Islands, avoid July and August entirely — accommodation is scarce and expensive. For Madrid or Barcelona, the city is active year-round, but the heat in summer can make moving day physically demanding. Book at least 6 to 8 weeks ahead for any summer move.",
    avoidMonths: ["July", "August"],
    bestMonths: ["March", "April", "May", "September", "October", "November"],
  },

  preMoveChecklist: {
    headline: "What to Sort Before You Leave London",
    items: [
      {
        task: "Apply for your NIE (Número de Identificación de Extranjero)",
        detail:
          "Your NIE is your Spanish tax identification number. You need it for almost everything in Spain — opening a bank account, signing a lease, buying a car, registering with a doctor. Apply at the Spanish consulate in London before you leave, or at a Comisaría de Policía in Spain after arrival.",
        timing: "As early as possible — before departure if you can",
      },
      {
        task: "Register on the Padrón Municipal",
        detail:
          "Register at your local Ayuntamiento (town hall) within 3 months of arrival. The Padrón certificate is required for many official processes, including healthcare registration and school enrolment.",
        timing: "Within 3 months of arrival",
      },
      {
        task: "Notify HMRC you are leaving the UK",
        detail:
          "Complete form P85 online at gov.uk. Prevents you being taxed as a UK resident after you leave.",
        timing: "Before or shortly after departure",
      },
      {
        task: "Open a Spanish bank account",
        detail:
          "Banco Santander, BBVA and CaixaBank all accept UK residents. You will need your NIE and a Spanish address. Many landlords require a Spanish account for rent payments.",
        timing: "4–6 weeks before move (or shortly after arrival)",
      },
      {
        task: "Arrange Spanish health insurance",
        detail:
          "UK nationals living in Spain need either private health insurance or to register with the Spanish public health system (Sistema Nacional de Salud). Registration requires Padrón registration and a valid NIE.",
        timing: "Before departure or within first month",
      },
      {
        task: "Check your UK driving licence",
        detail:
          "UK licences are valid in Spain for up to 2 years from the date of establishing residency. After that, you must exchange it for a Spanish driving licence.",
        timing: "Within 2 years of arrival",
      },
      {
        task: "Confirm your Spanish address in writing",
        detail:
          "You need a signed lease or property purchase confirmation for customs documentation.",
        timing: "Before move date",
      },
    ],
  },

  customs: {
    headline: "Customs & Documents, What You Need to Know",
    euStatus:
      "Spain is an EU member state. Since Brexit, moving household goods from the UK to Spain crosses an international customs border in both directions. Your belongings must be declared on departure from the UK and on arrival in Spain.",
    torRelief: {
      available: true,
      explanation:
        "Transfer of Residence (ToR) relief allows you to import your used household goods into Spain without paying import duty or VAT, provided you qualify. To qualify: you must be genuinely relocating your main residence to Spain, you must have been resident outside Spain for at least 12 consecutive months before the move, and the goods must have been owned and used by you for at least 6 months.",
    },
    requiredDocuments: [
      "Valid passport",
      "Proof of UK address for the past 12 months (utility bills, bank statements, or tenancy agreement)",
      "Proof of Spanish address (signed lease or property purchase confirmation)",
      "NIE number (if already obtained)",
      "Detailed packing inventory listing contents by category with approximate values",
      "Spanish customs import declaration (prepared by our licensed customs agent)",
    ],
    timeline:
      "Documents must be submitted before your goods arrive in Spain. We recommend having all paperwork confirmed at least 2 weeks before your move date.",
    incompleteDocsRisk:
      "If documentation is incomplete, Spanish customs (Agencia Tributaria) may assess your household goods for import duty and VAT at 21%. Getting the paperwork right before departure is far simpler than resolving it after your goods have arrived.",
    countrySpecific: [
      "Apply for your NIE as early as possible — you need it for almost everything",
      "Register on the Padrón Municipal within 3 months of arrival",
      "EU nationals have the right to live and work in Spain without a visa",
      "Non-EU nationals need a visa or residence permit before entering Spain to live",
      "UK driving licences are valid for 2 years before exchange is required",
    ],
    customsClearanceTime: "1 to 3 working days with correct documentation in place",
    prohibitedItems:
      "Standard EU restrictions apply. Certain food products, plants and soil, firearms, and counterfeit goods are restricted or prohibited. Alcohol and tobacco above personal allowances are subject to duty.",
    partnerNote:
      "We work with licensed customs agents registered with the Spanish Agencia Tributaria. Your goods do not cross the border without a qualified agent managing the declaration on your behalf.",
  },

  whatIsIncluded: [
    {
      title: "Full Packing Service",
      desc: "We pack every room, wrap every item, label every box. You do not touch a thing unless you want to.",
      icon: "📦",
    },
    {
      title: "Furniture Dismantling & Reassembly",
      desc: "Taken apart at your London home, rebuilt exactly as it was at your new home in Spain.",
      icon: "🔧",
    },
    {
      title: "Itemised Inventory",
      desc: "Every item catalogued and photographed before loading. Full list provided to you and used for Spanish customs documentation.",
      icon: "📋",
    },
    {
      title: "Exclusive Vehicle",
      desc: "Your belongings travel in our vehicle only. No shared loads, no waiting for a container to fill.",
      icon: "🚛",
    },
    {
      title: "Customs Assistance",
      desc: "We handle the paperwork and work with our licensed customs agents in Spain to clear your goods correctly through the Agencia Tributaria.",
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
      "Transit through France and Spain",
      "Spanish customs clearance via licensed Agencia Tributaria agent",
      "Delivery to your new Spanish address",
      "Furniture reassembly",
      "Full unpack at your new home",
      "Removal of all packing materials",
    ],
    youHandle: [
      "Apply for your NIE number (we can advise on the process)",
      "Notify HMRC you are leaving the UK (P85 form)",
      "Register on the Padrón Municipal within 3 months of arrival",
      "Arrange Spanish health insurance",
      "Open a Spanish bank account",
      "Be present at both ends of the move (or nominate a trusted representative)",
    ],
  },

  moveTimeline: {
    headline: "Your Move to Spain, Step by Step",
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
        title: "Channel Crossing & Transit",
        desc: "We cross via ferry and transit through France. Our customs agent prepares the Spanish import declaration.",
      },
      {
        week: "Day 3–5",
        title: "Delivery, Reassembly & Unpack",
        desc: "We unload, reassemble all furniture and unpack every box at your new Spanish home. You tell us where everything goes.",
      },
    ],
  },

  popularDestinations: [
    {
      city: "Madrid",
      region: "Community of Madrid",
      why: "Spain's capital and the most popular destination for London professionals. Lower cost of living than London, excellent food and culture, and a large British expat community.",
    },
    {
      city: "Barcelona",
      region: "Catalonia",
      why: "A favourite for creatives, tech workers and families. Mediterranean climate, world-class architecture, and a strong international community.",
    },
    {
      city: "Valencia",
      region: "Valencia",
      why: "Increasingly popular with Londoners seeking a slower pace. Lower cost of living than Madrid or Barcelona, excellent beaches, and a growing expat community.",
    },
    {
      city: "Malaga",
      region: "Andalusia",
      why: "The gateway to the Costa del Sol. Popular with retirees and remote workers. Warm climate, good infrastructure, and a large British community.",
    },
    {
      city: "Alicante",
      region: "Valencia",
      why: "One of the most popular destinations for British expats. Affordable property, excellent beaches, and a well-established British community.",
    },
    {
      city: "Seville",
      region: "Andalusia",
      why: "A beautiful historic city with a lower cost of living than Madrid or Barcelona. Popular with families and those seeking a more traditional Spanish lifestyle.",
    },
    {
      city: "Mallorca",
      region: "Balearic Islands",
      why: "Popular with high-net-worth individuals and families. Palma has a thriving international community and excellent schools.",
    },
    {
      city: "Marbella",
      region: "Andalusia",
      why: "The most prestigious address on the Costa del Sol. Popular with wealthy Londoners seeking a luxury lifestyle in the sun.",
    },
  ],

  approximateCosts: {
    headline: "Approximate Costs — London to Spain",
    intro:
      "The cost of a removal to Spain depends on the volume of your belongings and the distance to your destination within Spain. The figures below are indicative ranges based on moves we have completed. A survey — in person or by video call — is needed for an accurate fixed price.",
    tiers: [
      {
        size: "Small move",
        description: "1–2 bedroom flat, partial contents",
        range: "£2,800 to £4,500",
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
      name: "Richard & Helen T.",
      location: "Moved from Fulham to Madrid",
      rating: 5,
      text: "We moved a full 4-bedroom house from Fulham to Madrid. Octagon packed everything in one day, handled all the customs paperwork, and had everything reassembled in our new home within 4 days. Nothing was damaged. Highly recommend.",
      date: "February 2025",
    },
    {
      name: "Claire M.",
      location: "Moved from Kensington to Barcelona",
      rating: 5,
      text: "I was nervous about the customs side of things post-Brexit but Octagon handled everything. They told me exactly what documents I needed and their agent cleared everything through Spanish customs without a hitch.",
      date: "November 2024",
    },
    {
      name: "James & Lucy P.",
      location: "Moved from Richmond to Malaga",
      rating: 5,
      text: "Moving to the Costa del Sol with a full house of furniture felt daunting. Octagon came and packed everything, dismantled our wardrobes and beds, and reassembled everything exactly where we wanted it. The fixed price meant no surprises.",
      date: "September 2024",
    },
  ],

  faqs: [
    {
      q: "How long does a removal from London to Spain take?",
      a: "Door to door, most moves to Spain take 3 to 5 days from collection to delivery. We cross via Dover–Calais or Folkestone–Coquelles and transit through France. Delivery to Madrid or Barcelona is typically 3 to 4 days; to the south of Spain (Malaga, Alicante) typically 4 to 5 days.",
    },
    {
      q: "What documents do I need for customs?",
      a: "The key documents are: a valid passport, proof of UK address for the past 12 months, proof of your Spanish address, and a detailed packing inventory. Your NIE number is also required if you have already obtained it. We guide you through every document and our customs agent handles the Spanish Agencia Tributaria declaration.",
    },
    {
      q: "Do I need a NIE number?",
      a: "Yes. Your NIE (Número de Identificación de Extranjero) is your Spanish tax identification number. You need it for almost everything in Spain — opening a bank account, signing a lease, buying a car. You can apply at the Spanish consulate in London before you leave, or at a Comisaría de Policía in Spain after arrival. We can advise on the process.",
    },
    {
      q: "Do you pack everything?",
      a: "Yes. Our team arrives with all materials — boxes, wrapping, tape, wardrobe boxes — and packs every room. We dismantle all furniture, wrap everything, and label every box by room.",
    },
    {
      q: "How is the price calculated?",
      a: "The price is based on the volume of your belongings and the distance to your destination in Spain. We assess this during a free survey — in person or by video call. The price we give you after the survey is fixed and includes everything: packing materials, ferry, fuel, road tolls, insurance and customs agent fees.",
    },
    {
      q: "Do you reassemble furniture at the destination?",
      a: "Yes. Everything we dismantle at your London home, we reassemble at your new home in Spain. Beds, wardrobes, desks, shelving — all rebuilt exactly as they were.",
    },
    {
      q: "Can you store my belongings if my new home in Spain is not ready?",
      a: "Yes. If there is a gap between your collection date and when you can take delivery in Spain, we hold your belongings in our secure CCTV-monitored storage facility in London.",
    },
    {
      q: "Is my move insured?",
      a: "Yes. Your belongings are covered in transit and in storage. We photograph every item before loading and provide a full itemised inventory.",
    },
  ],
};

export default spain;

