import type { LocationData } from "../components/LocationPage";

export const locationsData: Record<string, LocationData> = {
  "bromley": {
    name: "Bromley",
    slug: "bromley",
    phone: "0208 927 0542",
    heroTagline: "Fixed-price house and office removals across Bromley, Beckenham, Orpington and all BR postcodes. Trusted by Bromley families since 2017.",
    intro: "Octagon Removals has been serving Bromley and the surrounding areas since 2017. Our dedicated Bromley team understands the unique challenges of moving in this part of South East London - from Victorian semis in Beckenham to modern apartments in Bromley town centre. We know the parking restrictions, access requirements, and local routes intimately, ensuring your move is planned to perfection. Whether you're moving within Bromley or relocating to another part of London, our fixed-price guarantee means you'll never face an unexpected bill.",
    boroughs: ["Bromley", "Beckenham", "Shortlands", "Bickley", "Chislehurst", "Petts Wood", "Orpington", "West Wickham", "Hayes", "Downham"],
    faqs: [
      { q: "Do you cover all Bromley postcodes?", a: "Yes, we cover all BR postcodes including Bromley, Beckenham, Orpington, Petts Wood, Chislehurst, and West Wickham." },
      { q: "How far in advance should I book a Bromley removal?", a: "We recommend 4–6 weeks in advance, particularly for Friday moves or month-end dates. However, we accommodate last-minute bookings subject to availability." },
      { q: "Do you offer packing services in Bromley?", a: "Yes, our full packing service is available across all Bromley areas. Our trained packers use premium materials and can pack your entire home or just fragile items." },
      { q: "What is included in your fixed-price quote?", a: "Our fixed price includes loading, transportation, and unloading. Packing materials and services are quoted separately. The price we quote is the price you pay - no hidden charges." },
    ],
    localReviews: [
      { name: "Anna Del Guercio", area: "Bromley", text: "We used Octagon Removals for our domestic move from Bromley to Maidstone. All the staff were professional and went above and beyond. No items were broken and everything was labelled for easy identification. Would highly recommend!" },
      { name: "Sarah T.", area: "Beckenham", text: "Moved from Beckenham to Chislehurst. The team were punctual, professional, and handled our furniture with extraordinary care. Fixed price honoured to the penny." },
      { name: "James R.", area: "Orpington", text: "Excellent service from the Bromley team. They navigated the area perfectly and completed the move well within the estimated time. Brilliant." },
    ],
  },

  "islington": {
    name: "Islington",
    slug: "islington",
    phone: "0203 667 8598",
    heroTagline: "Premium house and office removals across Islington, Angel, Highbury, Holloway and all N1 postcodes. Fixed-price, fully insured.",
    intro: "Islington is one of our most active areas, and our team knows every street from Angel to Archway. Islington's mix of Georgian terraces, converted warehouses, and modern apartments requires adaptable, experienced movers. Our Islington crews are trained to handle every scenario - from navigating the narrow streets of Barnsbury to managing large family homes in Canonbury. We provide free parking suspension applications as part of our service where required.",
    boroughs: ["Islington", "Angel", "Highbury", "Holloway", "Barnsbury", "Canonbury", "Finsbury Park", "Archway", "Tufnell Park", "Caledonian Road"],
    faqs: [
      { q: "Do you cover all Islington postcodes?", a: "Yes, we cover all N1, N5, N7, and N19 postcodes across Islington, including Angel, Highbury, Holloway, and Archway." },
      { q: "Can you help with parking suspensions in Islington?", a: "Yes, we assist with parking suspension applications in Islington. We advise on the process and timing to ensure your move day runs smoothly." },
      { q: "Do you move pianos and specialist items in Islington?", a: "Absolutely. We have specialist equipment and trained staff for piano moves, antiques, and other specialist items across all Islington areas." },
      { q: "How much does a house removal in Islington cost?", a: "Costs vary depending on property size, distance, and services required. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Patricia Marcos", area: "Islington", text: "We had to move our stuff (including heavy furniture) to a storage unit from Islington to Wapping. Octagon helped us have a smooth moving! Thomas and Kajtek were very professional and experienced." },
      { name: "Claire W.", area: "Angel", text: "Moved from Angel to Highbury. The team were fantastic - efficient, careful, and genuinely pleasant to have around on what can be a stressful day." },
      { name: "Tom H.", area: "Holloway", text: "Octagon handled our tricky Islington flat move perfectly. They dealt with the parking and access issues without any fuss. Highly professional." },
    ],
  },

  "epsom": {
    name: "Epsom",
    slug: "epsom",
    phone: "0137 267 9060",
    ghosted: true,
    heroTagline: "Premium house removals across Epsom, Ewell, Cheam, Banstead and all KT postcodes. Fixed-price, fully insured, 4.9★ rated.",
    intro: "Our Surrey team serves Epsom and the surrounding areas with the same premium standard we deliver across London. Epsom's mix of large family homes, Victorian properties, and modern developments requires a flexible, experienced team. We understand the local area intimately - from the tree-lined avenues of Epsom to the villages of Cheam and Banstead. Our fixed-price guarantee and fully insured service give Epsom homeowners complete peace of mind.",
    boroughs: ["Epsom", "Ewell", "Cheam", "Banstead", "Stoneleigh", "Nork", "Tattenham Corner", "Ashtead", "Leatherhead", "Sutton"],
    faqs: [
      { q: "Do you cover all Epsom and Ewell postcodes?", a: "Yes, we cover all KT17, KT18, KT19, and SM2 postcodes across Epsom, Ewell, Cheam, and Banstead." },
      { q: "Can you move large family homes in Epsom?", a: "Yes, we regularly move large family homes across Epsom and Surrey. Our experienced teams and range of vehicle sizes ensure we can handle any size of property." },
      { q: "Do you offer storage near Epsom?", a: "Yes, we have storage facilities accessible from Epsom and the surrounding Surrey areas. Both short and long-term storage options are available." },
      { q: "How much does a removal from Epsom to London cost?", a: "Costs depend on property size and the specific London destination. We provide free, fixed-price quotes - contact us for a precise figure." },
    ],
    localReviews: [
      { name: "Andrew M.", area: "Epsom", text: "Moved our 4-bedroom house in Epsom. The Octagon team were outstanding - professional, careful, and completed the move well within the estimated time." },
      { name: "Helen B.", area: "Ewell", text: "Relocated from Ewell to London. Octagon made the whole process seamless. The fixed price was competitive and there were no hidden charges." },
      { name: "Peter C.", area: "Cheam", text: "Excellent service from the Surrey team. They handled our antique furniture with great care and were genuinely helpful throughout the day." },
    ],
  },

  "watford": {
    name: "Watford",
    slug: "watford",
    phone: "0192 396 4026",
    ghosted: true,
    heroTagline: "Premium removals across Watford, Bushey, Rickmansworth and all WD postcodes. Fixed-price, fully insured.",
    intro: "Octagon Removals serves Watford and the wider Hertfordshire area with the same premium standard we deliver across London. Watford's mix of commuter properties, Victorian terraces, and modern developments requires local knowledge and flexible logistics. Our Watford-based team is experienced in all property types and regularly moves clients between Watford and London. We provide free surveys and fixed-price quotes for all Watford moves.",
    boroughs: ["Watford", "Bushey", "Rickmansworth", "Croxley Green", "Chorleywood", "Abbots Langley", "Kings Langley", "Oxhey", "Carpenders Park", "South Oxhey"],
    faqs: [
      { q: "Do you cover all Watford postcodes?", a: "Yes, we cover all WD postcodes including Watford, Bushey, Rickmansworth, Croxley Green, and Chorleywood." },
      { q: "Can you move from Watford to London?", a: "Yes, we regularly move clients between Watford and London. Our fixed-price quotes cover all distances and we are fully familiar with the M1, M25, and A41 routes." },
      { q: "Do you offer packing services in Watford?", a: "Yes, our full packing service is available across all Watford areas. We can pack your entire home or provide materials for you to pack yourself." },
      { q: "How far in advance should I book a Watford removal?", a: "We recommend 4–6 weeks notice for most moves. For larger properties or busy periods, 6–8 weeks is advisable." },
    ],
    localReviews: [
      { name: "Susan L.", area: "Watford", text: "Moved from Watford to St Albans. The Octagon team were brilliant - on time, efficient, and handled everything with great care. Would use again without hesitation." },
      { name: "Mark R.", area: "Bushey", text: "Excellent experience from survey to completion. The team were professional and the fixed price was exactly as quoted. Highly recommended." },
      { name: "Julie H.", area: "Rickmansworth", text: "Octagon moved our family home in Rickmansworth. The team were fantastic - careful, efficient, and great with our children who were anxious about moving." },
    ],
  },

  "brentwood": {
    name: "Brentwood",
    slug: "brentwood",
    phone: "0127 728 7453",
    ghosted: true,
    heroTagline: "Premium removals across Brentwood, Shenfield, Ingatestone and all CM postcodes. Fixed-price, fully insured, 4.9★ rated.",
    intro: "Our Essex team covers Brentwood and the surrounding areas, providing the same premium removal service we deliver across London and the M25. Brentwood's mix of market town properties, commuter homes, and rural estates requires local knowledge and flexible logistics. Our Brentwood-based team is experienced in all Essex property types and regularly moves clients between Essex and London.",
    boroughs: ["Brentwood", "Shenfield", "Ingatestone", "Hutton", "Warley", "Pilgrims Hatch", "Doddinghurst", "Kelvedon Hatch", "West Horndon", "Mountnessing"],
    faqs: [
      { q: "Do you cover all Brentwood postcodes?", a: "Yes, we cover all CM13, CM14, CM15, and surrounding postcodes across Brentwood, Shenfield, and Ingatestone." },
      { q: "Can you move from Brentwood to London?", a: "Yes, we regularly move clients between Brentwood and London. Our fixed-price quotes cover all distances and we are fully familiar with the M25 and A12 routes." },
      { q: "Do you offer storage near Brentwood?", a: "Yes, we have storage options accessible from Brentwood and the surrounding Essex areas. Both short and long-term storage is available." },
      { q: "How quickly can you arrange a move in Brentwood?", a: "For standard moves, we typically require 2–4 weeks notice. For urgent moves, please call us directly." },
    ],
    localReviews: [
      { name: "Gary T.", area: "Brentwood", text: "Moved from Brentwood to East London. The team were professional, punctual, and took great care of our belongings. The fixed price was honoured exactly." },
      { name: "Linda K.", area: "Shenfield", text: "Excellent service from the Essex team. They were efficient, careful, and genuinely helpful throughout the move. Would highly recommend Octagon." },
      { name: "Steve M.", area: "Ingatestone", text: "Used Octagon for our Ingatestone house move. The team were fantastic - they worked quickly without compromising on care." },
    ],
  },

  "romford": {
    name: "Romford",
    slug: "romford",
    phone: "0170 897 3210",
    ghosted: true,
    heroTagline: "Premium house removals across Romford, Hornchurch, Upminster and all RM postcodes. Fixed-price, fully insured.",
    intro: "Romford is one of our key East London and Essex border areas. Our Romford team is experienced in all property types across the RM postcode area - from terraced houses in Harold Wood to detached homes in Emerson Park. We regularly move clients between Romford and Central London, and our fixed-price guarantee means no surprises on moving day.",
    boroughs: ["Romford", "Hornchurch", "Upminster", "Harold Wood", "Gidea Park", "Emerson Park", "Collier Row", "Chadwell Heath", "Rush Green", "Noak Hill"],
    faqs: [
      { q: "Do you cover all RM postcodes?", a: "Yes, we cover all RM postcodes including Romford, Hornchurch, Upminster, Harold Wood, and Gidea Park." },
      { q: "Can you move from Romford to Central London?", a: "Yes, we regularly move clients between Romford and all parts of London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Romford?", a: "Yes, our full packing service is available across all Romford areas. We can pack your entire home or just fragile items." },
      { q: "How much does a house removal in Romford cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "David K.", area: "Romford", text: "Moved from Romford to Islington. The team were punctual, professional, and handled our furniture with extraordinary care. Excellent service." },
      { name: "Rachel S.", area: "Hornchurch", text: "Octagon moved our 3-bedroom house in Hornchurch. They navigated the area perfectly. Couldn't recommend them more highly." },
      { name: "Michael B.", area: "Upminster", text: "Third time using Octagon. Consistently excellent - reliable, careful, and great value for the premium service they provide." },
    ],
  },

  "croydon": {
    name: "Croydon",
    slug: "croydon",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Croydon, Purley, Coulsdon and all CR postcodes. Fixed-price, fully insured.",
    intro: "Croydon is one of South London's largest boroughs, and our team is experienced in every corner of it - from the town centre apartments to the leafy suburbs of Purley and Coulsdon. We handle everything from studio flat moves to large family home relocations, always with a fixed price and fully insured service.",
    boroughs: ["Croydon", "Purley", "Coulsdon", "Sanderstead", "Selsdon", "Addiscombe", "Shirley", "Thornton Heath", "Norbury", "South Norwood"],
    faqs: [
      { q: "Do you cover all Croydon postcodes?", a: "Yes, we cover all CR postcodes including Croydon, Purley, Coulsdon, Sanderstead, and Selsdon." },
      { q: "Can you move from Croydon to North London?", a: "Yes, we regularly move clients across London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Croydon?", a: "Yes, our full packing service is available across all Croydon areas." },
      { q: "How much does a house removal in Croydon cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Emma P.", area: "Croydon", text: "Moved from Croydon to Clapham. The team were brilliant - on time, careful, and the fixed price was exactly as quoted." },
      { name: "Chris N.", area: "Purley", text: "Excellent service from the Croydon team. They handled our large family home move with professionalism and care." },
      { name: "Priya M.", area: "Coulsdon", text: "Octagon made our Coulsdon move completely stress-free. The survey was thorough and the move itself was seamless." },
    ],
  },

  "enfield": {
    name: "Enfield",
    slug: "enfield",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house removals across Enfield, Southgate, Edmonton and all EN postcodes. Fixed-price, fully insured.",
    intro: "Enfield is one of North London's largest boroughs, and our team is experienced in every part of it - from the leafy streets of Southgate to the more urban areas of Edmonton and Ponders End. We handle all property types across the EN postcode area with a fixed price and fully insured service.",
    boroughs: ["Enfield", "Southgate", "Edmonton", "Ponders End", "Winchmore Hill", "Palmers Green", "Bush Hill Park", "Chase Side", "Cockfosters", "Oakwood"],
    faqs: [
      { q: "Do you cover all Enfield postcodes?", a: "Yes, we cover all EN postcodes including Enfield, Southgate, Edmonton, Winchmore Hill, and Palmers Green." },
      { q: "Can you move from Enfield to South London?", a: "Yes, we regularly move clients across all of London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Enfield?", a: "Yes, our full packing service is available across all Enfield areas." },
      { q: "How much does a house removal in Enfield cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Hina Udvarlaky", area: "Winchmore Hill", text: "The move went extremely smoothly from Chingford, with a stop in Tottenham and on to Winchmore Hill. Everything was dismantled and reassembled efficiently and with care. Thank you!" },
      { name: "Paul D.", area: "Southgate", text: "Moved from Southgate to Islington. The Octagon team were brilliant - on time, careful, and the fixed price was exactly as quoted." },
      { name: "Karen M.", area: "Edmonton", text: "Excellent service from the Enfield team. They handled our large family home move with professionalism and care." },
    ],
  },

  "epping": {
    name: "Epping",
    slug: "epping",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium removals across Epping, Loughton, Chigwell and all CM16/IG postcodes. Fixed-price, fully insured.",
    intro: "Epping and the surrounding Epping Forest area is a unique removals environment - a mix of rural villages, forest-edge properties, and commuter towns. Our team is experienced in all Epping area property types and regularly moves clients between Epping and London. We provide fixed-price quotes and a fully insured service for all Epping moves.",
    boroughs: ["Epping", "Loughton", "Chigwell", "Theydon Bois", "North Weald", "Ongar", "Harlow", "Waltham Abbey", "Buckhurst Hill", "Woodford"],
    faqs: [
      { q: "Do you cover all Epping postcodes?", a: "Yes, we cover CM16, CM17, IG7, IG10, and surrounding postcodes across Epping, Loughton, and Chigwell." },
      { q: "Can you move from Epping to London?", a: "Yes, we regularly move clients between Epping and London. Our fixed-price quotes cover all distances and we are familiar with the M11 and A121 routes." },
      { q: "Do you offer packing services in Epping?", a: "Yes, our full packing service is available across all Epping areas." },
      { q: "How much does a house removal in Epping cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Brian W.", area: "Epping", text: "Moved from Epping to East London. The team were professional, punctual, and took great care of our belongings. Excellent service." },
      { name: "Diane S.", area: "Loughton", text: "Octagon moved our family home in Loughton. The team were fantastic - careful, efficient, and great value." },
      { name: "Neil T.", area: "Chigwell", text: "Brilliant service from start to finish. The team were friendly, efficient, and took great care of our belongings." },
    ],
  },

  "finchley": {
    name: "Finchley",
    slug: "finchley",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium removals across Finchley, East Finchley, North Finchley and all N2/N3/N12 postcodes. Fixed-price, fully insured.",
    intro: "Finchley is a key North London area for our team, with a mix of Edwardian and Victorian houses, modern apartments, and family homes. Our Finchley team is experienced in all property types and regularly moves clients within Finchley and across London. We provide fixed-price quotes and a fully insured service for all Finchley moves.",
    boroughs: ["Finchley", "East Finchley", "North Finchley", "Woodside Park", "Whetstone", "Friern Barnet", "Colney Hatch", "New Southgate", "Mill Hill", "Barnet"],
    faqs: [
      { q: "Do you cover all Finchley postcodes?", a: "Yes, we cover N2, N3, N12, and surrounding postcodes across Finchley, East Finchley, and North Finchley." },
      { q: "Can you move from Finchley to South London?", a: "Yes, we regularly move clients across all of London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Finchley?", a: "Yes, our full packing service is available across all Finchley areas." },
      { q: "How much does a house removal in Finchley cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "David L.", area: "Finchley", text: "Moved from Finchley to Islington. The team were punctual, professional, and handled our furniture with extraordinary care." },
      { name: "Rachel B.", area: "East Finchley", text: "Octagon moved our 3-bedroom house in East Finchley. They navigated the area perfectly. Couldn't recommend them more highly." },
      { name: "Michael S.", area: "North Finchley", text: "Consistently excellent service. Reliable, careful, and great value for the premium service they provide." },
    ],
  },

  "fulham": {
    name: "Fulham",
    slug: "fulham",
    phone: "0208 521 8000",
    heroTagline: "Premium house removals across Fulham, Parsons Green, Putney and all SW6 postcodes. White-glove service, fixed-price.",
    intro: "Fulham is one of West London's most sought-after residential areas, and our service reflects that. From the elegant Victorian terraces of Parsons Green to the riverside apartments along the Thames, our Fulham team provides a white-glove removal service that matches the quality of the properties we work in. We are experienced in handling high-value items, art, and antiques.",
    boroughs: ["Fulham", "Parsons Green", "Sands End", "Walham Green", "Munster Village", "Hurlingham", "Bishops Park", "New Kings Road", "Eel Brook Common", "Imperial Wharf"],
    faqs: [
      { q: "Do you cover all Fulham postcodes?", a: "Yes, we cover all SW6 postcodes across Fulham, Parsons Green, and Sands End." },
      { q: "Do you offer a white-glove service in Fulham?", a: "Yes, our premium white-glove service is available across all Fulham areas. This includes specialist packing and enhanced insurance for high-value items." },
      { q: "Can you move antiques and artwork in Fulham?", a: "Absolutely. We have specialist packing materials and trained staff for antiques, artwork, and other high-value items." },
      { q: "How much does a house removal in Fulham cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Charlotte F.", area: "Fulham", text: "Moved our family from Chiswick to Fulham. The team were impeccably professional - they even helped reassemble our furniture and placed everything exactly where we wanted it." },
      { name: "Sophie T.", area: "Parsons Green", text: "Moving from Parsons Green was made completely stress-free by the Octagon team. They handled our antiques with the utmost care. Truly premium service." },
      { name: "William D.", area: "Sands End", text: "Used Octagon for our Fulham townhouse move. The team were punctual, meticulous, and genuinely pleasant. The fixed price was exactly as quoted." },
    ],
  },

  "kingston-upon-thames": {
    name: "Kingston upon Thames",
    slug: "kingston-upon-thames",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium removals across Kingston, Surbiton, New Malden and all KT1/KT2 postcodes. Fixed-price, fully insured.",
    intro: "Kingston upon Thames is one of South West London's most vibrant areas, and our team is experienced in every part of it - from the town centre apartments to the leafy suburbs of Surbiton and New Malden. We handle all property types across the Kingston area with a fixed price and fully insured service.",
    boroughs: ["Kingston upon Thames", "Surbiton", "New Malden", "Tolworth", "Hook", "Chessington", "Berrylands", "Norbiton", "Coombe", "Kingston Hill"],
    faqs: [
      { q: "Do you cover all Kingston postcodes?", a: "Yes, we cover KT1, KT2, KT3, KT5, KT6, and surrounding postcodes across Kingston, Surbiton, and New Malden." },
      { q: "Can you move from Kingston to North London?", a: "Yes, we regularly move clients across all of London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Kingston?", a: "Yes, our full packing service is available across all Kingston areas." },
      { q: "How much does a house removal in Kingston cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Andrew M.", area: "Kingston", text: "Moved our 4-bedroom house in Kingston. The Octagon team were outstanding - professional, careful, and completed the move well within the estimated time." },
      { name: "Helen B.", area: "Surbiton", text: "Relocated from Surbiton to London. Octagon made the whole process seamless. The fixed price was competitive and there were no hidden charges." },
      { name: "Peter C.", area: "New Malden", text: "Excellent service from the Kingston team. They handled our antique furniture with great care and were genuinely helpful throughout the day." },
    ],
  },

  "dartford": {
    name: "Dartford",
    slug: "dartford",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium removals across Dartford, Gravesend, Swanley and all DA postcodes. Fixed-price, fully insured.",
    intro: "Dartford and the wider DA postcode area is served by our dedicated Kent team. From the commuter suburbs of Dartford to the more rural areas of Swanley and beyond, our team is experienced in all Dartford area property types. We regularly move clients between Dartford and London, and our fixed-price guarantee means no surprises on moving day.",
    boroughs: ["Dartford", "Gravesend", "Swanley", "Longfield", "Hartley", "New Ash Green", "Stone", "Greenhithe", "Northfleet", "Crayford"],
    faqs: [
      { q: "Do you cover all Dartford postcodes?", a: "Yes, we cover all DA postcodes including Dartford, Gravesend, Swanley, and Crayford." },
      { q: "Can you move from Dartford to London?", a: "Yes, we regularly move clients between Dartford and London. Our fixed-price quotes cover all distances and we are familiar with the M25 and A2 routes." },
      { q: "Do you offer packing services in Dartford?", a: "Yes, our full packing service is available across all Dartford areas." },
      { q: "How much does a house removal in Dartford cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Gary T.", area: "Dartford", text: "Moved from Dartford to East London. The team were professional, punctual, and took great care of our belongings. The fixed price was honoured exactly." },
      { name: "Linda K.", area: "Gravesend", text: "Excellent service from the Kent team. They were efficient, careful, and genuinely helpful throughout the move." },
      { name: "Steve M.", area: "Swanley", text: "Used Octagon for our Swanley house move. The team were fantastic - they worked quickly without compromising on care." },
    ],
  },

  "twickenham": {
    name: "Twickenham",
    slug: "twickenham",
    phone: "0208 927 0543",
    ghosted: true,
    heroTagline: "Premium removals across Twickenham, Richmond, Whitton and all TW postcodes. Fixed-price, fully insured.",
    intro: "Twickenham and the surrounding TW postcode area is one of South West London's most desirable residential locations. Our team is experienced in all property types across the area - from period properties along the Thames to modern developments in Whitton. We provide a white-glove service that matches the quality of the properties we work in.",
    boroughs: ["Twickenham", "Richmond", "Whitton", "St Margarets", "Strawberry Hill", "Teddington", "Hampton", "East Twickenham", "Marble Hill", "Cole Park"],
    faqs: [
      { q: "Do you cover all Twickenham postcodes?", a: "Yes, we cover TW1, TW2, TW11, and surrounding postcodes across Twickenham, Richmond, and Whitton." },
      { q: "Do you offer a white-glove service in Twickenham?", a: "Yes, our premium white-glove service is available across all Twickenham areas." },
      { q: "Can you move antiques and artwork in Twickenham?", a: "Absolutely. We have specialist packing materials and trained staff for antiques, artwork, and other high-value items." },
      { q: "How much does a house removal in Twickenham cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Charlotte F.", area: "Twickenham", text: "Moved our family from Twickenham to Fulham. The team were impeccably professional and took great care of our belongings." },
      { name: "Sophie T.", area: "Richmond", text: "Moving from Richmond was made completely stress-free by the Octagon team. They handled our antiques with the utmost care." },
      { name: "William D.", area: "Whitton", text: "Used Octagon for our Twickenham move. The team were punctual, meticulous, and the fixed price was exactly as quoted." },
    ],
  },

  "uxbridge": {
    name: "Uxbridge",
    slug: "uxbridge",
    phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium removals across Uxbridge, Hillingdon, Hayes and all UB postcodes. Fixed-price, fully insured.",
    intro: "Uxbridge and the wider UB postcode area is served by our dedicated West London team. From the town centre properties of Uxbridge to the suburban streets of Hillingdon and Hayes, our team is experienced in all property types across the area. We regularly move clients between Uxbridge and Central London.",
    boroughs: ["Uxbridge", "Hillingdon", "Hayes", "Yiewsley", "West Drayton", "Cowley", "Ickenham", "Ruislip", "Northolt", "Southall"],
    faqs: [
      { q: "Do you cover all Uxbridge postcodes?", a: "Yes, we cover all UB postcodes including Uxbridge, Hillingdon, Hayes, and Ruislip." },
      { q: "Can you move from Uxbridge to Central London?", a: "Yes, we regularly move clients between Uxbridge and London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Uxbridge?", a: "Yes, our full packing service is available across all Uxbridge areas." },
      { q: "How much does a house removal in Uxbridge cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Alan T.", area: "Uxbridge", text: "Moved from Uxbridge to Central London. The team were excellent - professional, careful, and completed the move ahead of schedule." },
      { name: "Sandra K.", area: "Hillingdon", text: "Octagon handled our Hillingdon house move with great care. Fixed price was exactly as quoted. Highly recommend." },
      { name: "Robert H.", area: "Hayes", text: "Brilliant service from start to finish. The team were friendly, efficient, and took great care of our belongings." },
    ],
  },

  "greenwich": {
    name: "Greenwich",
    slug: "greenwich",
    phone: "0203 002 6383",
    heroTagline: "Premium removals across Greenwich, Blackheath, Woolwich and all SE postcodes. Fixed-price, fully insured.",
    intro: "Greenwich is one of South East London's most historic and desirable areas, and our team is experienced in every part of it - from the period properties of Blackheath to the modern riverside developments of Greenwich Peninsula. We handle all property types with a fixed price and fully insured service.",
    boroughs: ["Greenwich", "Blackheath", "Woolwich", "Eltham", "Charlton", "Kidbrooke", "Lee", "Mottingham", "New Eltham", "Plumstead"],
    faqs: [
      { q: "Do you cover all Greenwich postcodes?", a: "Yes, we cover SE3, SE7, SE9, SE10, SE18, and surrounding postcodes across Greenwich, Blackheath, and Woolwich." },
      { q: "Can you move from Greenwich to North London?", a: "Yes, we regularly move clients across all of London. Our fixed-price quotes cover all distances." },
      { q: "Do you offer packing services in Greenwich?", a: "Yes, our full packing service is available across all Greenwich areas." },
      { q: "How much does a house removal in Greenwich cost?", a: "Costs vary depending on property size and distance. We provide free, fixed-price quotes with no obligation." },
    ],
    localReviews: [
      { name: "Emma P.", area: "Greenwich", text: "Moved from Greenwich to Clapham. The team were brilliant - on time, careful, and the fixed price was exactly as quoted." },
      { name: "Chris N.", area: "Blackheath", text: "Excellent service from the Greenwich team. They handled our large family home move with professionalism and care." },
      { name: "Priya M.", area: "Woolwich", text: "Octagon made our Woolwich move completely stress-free. The survey was thorough and the move itself was seamless." },
    ],
  },

  "orpington": {
    name: "Orpington", slug: "orpington", phone: "0208 927 0542",
    ghosted: true,
    heroTagline: "Fixed-price house and office removals across Orpington, Petts Wood, Chislehurst and all BR postcodes.",
    intro: "Octagon Removals carries out removals across Orpington, Petts Wood, Chislehurst, and the wider BR postcode area. We understand the local roads, parking restrictions, and access requirements.",
    boroughs: ["Orpington", "Petts Wood", "Chislehurst", "St Mary Cray", "Farnborough", "Locksbottom"],
    faqs: [
      { q: "Do you cover all Orpington postcodes?", a: "Yes, we cover all BR5 and BR6 postcodes across Orpington, Petts Wood, and Chislehurst." },
      { q: "Do you offer packing services in Orpington?", a: "Yes, our full packing service is available across all Orpington areas." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "David K.", area: "Orpington", text: "Octagon moved us from Orpington to Bromley. Professional, punctual, and handled everything with great care." },
      { name: "Sarah L.", area: "Petts Wood", text: "Excellent service. Fixed price honoured to the penny." },
      { name: "Mark T.", area: "Chislehurst", text: "Outstanding removal service. Completed the move well within the estimated time." },
    ],
  },

  "kensington": {
    name: "Kensington", slug: "kensington", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Kensington, Notting Hill, Holland Park and all W8 postcodes.",
    intro: "Octagon Removals carries out premium removals across Kensington. Kensington's grand Victorian townhouses, mansion flats, and period properties require experienced, careful movers.",
    boroughs: ["Kensington", "Notting Hill", "Holland Park", "Earl's Court", "South Kensington", "West Kensington"],
    faqs: [
      { q: "Do you cover all Kensington postcodes?", a: "Yes, we cover all W8, W14, SW5, and SW7 postcodes across Kensington." },
      { q: "Can you handle parking in Kensington?", a: "Yes, we assist with parking suspension applications across all Kensington streets." },
      { q: "Do you move antiques and fine art?", a: "Yes, we have specialist equipment and trained staff for antiques, fine art, and high-value items." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Victoria H.", area: "Kensington", text: "Octagon carried out our Kensington move with exceptional care. The team handled our antiques perfectly." },
      { name: "James B.", area: "Notting Hill", text: "Moved from Notting Hill to Chelsea. The team were outstanding - efficient, careful, and genuinely pleasant." },
      { name: "Emma R.", area: "Holland Park", text: "Excellent service. The team navigated Holland Park perfectly and completed the move within the estimated time." },
    ],
  },

  "chelsea": {
    name: "Chelsea", slug: "chelsea", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Chelsea, Sloane Square, King's Road and all SW3 postcodes.",
    intro: "Octagon Removals carries out premium removals across Chelsea. Chelsea's Georgian terraces, mansion flats, and riverside properties require experienced, careful movers.",
    boroughs: ["Chelsea", "Sloane Square", "King's Road", "Chelsea Harbour", "World's End", "Brompton"],
    faqs: [
      { q: "Do you cover all Chelsea postcodes?", a: "Yes, we cover all SW3 and SW10 postcodes across Chelsea and Sloane Square." },
      { q: "Can you handle parking in Chelsea?", a: "Yes, we assist with parking suspension applications across all Chelsea streets." },
      { q: "Do you move antiques and fine art?", a: "Yes, we have specialist equipment and trained staff for antiques, fine art, and high-value items." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Charlotte W.", area: "Chelsea", text: "Octagon carried out our Chelsea move with exceptional care and professionalism." },
      { name: "Oliver M.", area: "Sloane Square", text: "Moved from Sloane Square to Kensington. Efficient, careful, completed well within the estimated time." },
      { name: "Sophie T.", area: "King's Road", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "westminster": {
    name: "Westminster", slug: "westminster", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Westminster, Pimlico, Victoria and all SW1 postcodes.",
    intro: "Octagon Removals carries out premium removals across Westminster. Westminster's period properties, mansion flats, and modern apartments require experienced movers.",
    boroughs: ["Westminster", "Pimlico", "Victoria", "Mayfair", "Belgravia", "St James's"],
    faqs: [
      { q: "Do you cover all Westminster postcodes?", a: "Yes, we cover all SW1, W1, and WC2 postcodes across Westminster, Pimlico, and Mayfair." },
      { q: "Can you handle parking in Westminster?", a: "Yes, we assist with parking suspension applications across all Westminster streets." },
      { q: "Do you carry out office removals in Westminster?", a: "Yes, we carry out commercial relocations across Westminster, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Richard A.", area: "Westminster", text: "Octagon carried out our Westminster office move with exceptional professionalism." },
      { name: "Caroline B.", area: "Pimlico", text: "Moved from Pimlico to Kensington. The team were outstanding - efficient, careful, and genuinely pleasant." },
      { name: "Michael C.", area: "Mayfair", text: "Excellent service. The team navigated Westminster perfectly and completed the move within the estimated time." },
    ],
  },

  "camden": {
    name: "Camden", slug: "camden", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Camden, Kentish Town, Primrose Hill and all NW1 postcodes.",
    intro: "Octagon Removals carries out premium removals across Camden. Camden's Victorian terraces, converted warehouses, and modern apartments require adaptable, experienced movers.",
    boroughs: ["Camden", "Kentish Town", "Primrose Hill", "Belsize Park", "Chalk Farm", "Gospel Oak"],
    faqs: [
      { q: "Do you cover all Camden postcodes?", a: "Yes, we cover all NW1, NW3, and NW5 postcodes across Camden and Kentish Town." },
      { q: "Can you handle parking in Camden?", a: "Yes, we assist with parking suspension applications across all Camden streets." },
      { q: "Do you carry out office removals in Camden?", a: "Yes, we carry out commercial relocations across Camden, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Laura K.", area: "Camden", text: "Octagon carried out our Camden move with exceptional care and professionalism." },
      { name: "Daniel M.", area: "Kentish Town", text: "Moved from Kentish Town to Islington. Efficient, careful, completed well within the estimated time." },
      { name: "Alice T.", area: "Primrose Hill", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "hackney": {
    name: "Hackney", slug: "hackney", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Hackney, Shoreditch, Dalston and all E8 postcodes.",
    intro: "Octagon Removals carries out premium removals across Hackney. Hackney's Victorian terraces, converted warehouses, and modern apartments require adaptable, experienced movers.",
    boroughs: ["Hackney", "Shoreditch", "Dalston", "Stoke Newington", "Clapton", "Homerton"],
    faqs: [
      { q: "Do you cover all Hackney postcodes?", a: "Yes, we cover all E8, E9, N16, and EC2 postcodes across Hackney and Shoreditch." },
      { q: "Can you handle parking in Hackney?", a: "Yes, we assist with parking suspension applications across all Hackney streets." },
      { q: "Do you carry out office removals in Hackney?", a: "Yes, we carry out commercial relocations across Hackney, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Tom W.", area: "Hackney", text: "Octagon carried out our Hackney move with exceptional care and professionalism." },
      { name: "Emma S.", area: "Shoreditch", text: "Moved from Shoreditch to Islington. Efficient, careful, completed well within the estimated time." },
      { name: "Jack R.", area: "Dalston", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "southwark": {
    name: "Southwark", slug: "southwark", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Southwark, Borough, Bermondsey and all SE1 postcodes.",
    intro: "Octagon Removals carries out premium removals across Southwark. Southwark's period properties, converted warehouses, and modern riverside apartments require experienced movers.",
    boroughs: ["Southwark", "Borough", "Bermondsey", "Peckham", "Camberwell", "Elephant & Castle"],
    faqs: [
      { q: "Do you cover all Southwark postcodes?", a: "Yes, we cover all SE1, SE5, SE15, and SE17 postcodes across Southwark and Borough." },
      { q: "Can you handle parking in Southwark?", a: "Yes, we assist with parking suspension applications across all Southwark streets." },
      { q: "Do you carry out office removals in Southwark?", a: "Yes, we carry out commercial relocations across Southwark, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Hannah B.", area: "Southwark", text: "Octagon carried out our Southwark move with exceptional care and professionalism." },
      { name: "George M.", area: "Borough", text: "Moved from Borough to Islington. Efficient, careful, completed well within the estimated time." },
      { name: "Lily T.", area: "Bermondsey", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "lambeth": {
    name: "Lambeth", slug: "lambeth", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Lambeth, Brixton, Clapham and all SW2 postcodes.",
    intro: "Octagon Removals carries out premium removals across Lambeth. Lambeth's Victorian terraces, period properties, and modern apartments require experienced movers.",
    boroughs: ["Lambeth", "Brixton", "Clapham", "Streatham", "Stockwell", "Vauxhall"],
    faqs: [
      { q: "Do you cover all Lambeth postcodes?", a: "Yes, we cover all SW2, SW4, SW9, and SW16 postcodes across Lambeth and Brixton." },
      { q: "Can you handle parking in Lambeth?", a: "Yes, we assist with parking suspension applications across all Lambeth streets." },
      { q: "Do you carry out office removals in Lambeth?", a: "Yes, we carry out commercial relocations across Lambeth, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Sophia K.", area: "Lambeth", text: "Octagon carried out our Lambeth move with exceptional care and professionalism." },
      { name: "Noah W.", area: "Brixton", text: "Moved from Brixton to Clapham. Efficient, careful, completed well within the estimated time." },
      { name: "Isla R.", area: "Clapham", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "wandsworth": {
    name: "Wandsworth", slug: "wandsworth", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Wandsworth, Clapham, Balham and all SW18 postcodes.",
    intro: "Octagon Removals carries out premium removals across Wandsworth. Wandsworth's Victorian terraces, modern developments, and riverside properties require experienced movers.",
    boroughs: ["Wandsworth", "Clapham", "Balham", "Tooting", "Earlsfield", "Putney"],
    faqs: [
      { q: "Do you cover all Wandsworth postcodes?", a: "Yes, we cover all SW11, SW12, SW17, SW18, and SW15 postcodes across Wandsworth." },
      { q: "Can you handle parking in Wandsworth?", a: "Yes, we assist with parking suspension applications across all Wandsworth streets." },
      { q: "Do you carry out office removals in Wandsworth?", a: "Yes, we carry out commercial relocations across Wandsworth, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Amelia J.", area: "Wandsworth", text: "Octagon carried out our Wandsworth move with exceptional care and professionalism." },
      { name: "Harry B.", area: "Balham", text: "Moved from Balham to Clapham. Efficient, careful, completed well within the estimated time." },
      { name: "Evie T.", area: "Tooting", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "ealing": {
    name: "Ealing", slug: "ealing", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Ealing, Acton, Hanwell and all W5 postcodes.",
    intro: "Octagon Removals carries out premium removals across Ealing. Ealing's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Ealing", "Acton", "Hanwell", "Southall", "Greenford", "Perivale"],
    faqs: [
      { q: "Do you cover all Ealing postcodes?", a: "Yes, we cover all W5, W7, W13, UB1, and UB6 postcodes across Ealing." },
      { q: "Can you handle parking in Ealing?", a: "Yes, we assist with parking suspension applications across all Ealing streets." },
      { q: "Do you carry out office removals in Ealing?", a: "Yes, we carry out commercial relocations across Ealing, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Freya M.", area: "Ealing", text: "Octagon carried out our Ealing move with exceptional care and professionalism." },
      { name: "Oscar W.", area: "Acton", text: "Moved from Acton to Ealing. Efficient, careful, completed well within the estimated time." },
      { name: "Poppy R.", area: "Hanwell", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "harrow": {
    name: "Harrow", slug: "harrow", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Harrow, Pinner, Wealdstone and all HA postcodes.",
    intro: "Octagon Removals carries out premium removals across Harrow. Harrow's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Harrow", "Pinner", "Wealdstone", "Kenton", "Stanmore", "Harrow on the Hill"],
    faqs: [
      { q: "Do you cover all Harrow postcodes?", a: "Yes, we cover all HA1, HA2, HA3, HA5, and HA7 postcodes across Harrow." },
      { q: "Can you handle parking in Harrow?", a: "Yes, we assist with parking suspension applications across all Harrow streets." },
      { q: "Do you carry out office removals in Harrow?", a: "Yes, we carry out commercial relocations across Harrow, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Rosie K.", area: "Harrow", text: "Octagon carried out our Harrow move with exceptional care and professionalism." },
      { name: "Archie B.", area: "Pinner", text: "Moved from Pinner to Harrow. Efficient, careful, completed well within the estimated time." },
      { name: "Daisy T.", area: "Wealdstone", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "barnet": {
    name: "Barnet", slug: "barnet", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Barnet, Chipping Barnet, Whetstone and all EN5 postcodes.",
    intro: "Octagon Removals carries out premium removals across Barnet. Barnet's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Barnet", "Chipping Barnet", "Whetstone", "New Barnet", "East Barnet", "Cockfosters"],
    faqs: [
      { q: "Do you cover all Barnet postcodes?", a: "Yes, we cover all EN4, EN5, N12, N14, and N20 postcodes across Barnet." },
      { q: "Can you handle parking in Barnet?", a: "Yes, we assist with parking suspension applications across all Barnet streets." },
      { q: "Do you carry out office removals in Barnet?", a: "Yes, we carry out commercial relocations across Barnet, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Mia W.", area: "Barnet", text: "Octagon carried out our Barnet move with exceptional care and professionalism." },
      { name: "Leo M.", area: "Chipping Barnet", text: "Moved from Chipping Barnet to Finchley. Efficient, careful, completed well within the estimated time." },
      { name: "Zoe R.", area: "Whetstone", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "haringey": {
    name: "Haringey", slug: "haringey", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Haringey, Wood Green, Tottenham and all N22 postcodes.",
    intro: "Octagon Removals carries out premium removals across Haringey. Haringey's Victorian terraces, Edwardian semis, and modern apartments require experienced movers.",
    boroughs: ["Haringey", "Wood Green", "Tottenham", "Hornsey", "Crouch End", "Muswell Hill"],
    faqs: [
      { q: "Do you cover all Haringey postcodes?", a: "Yes, we cover all N4, N8, N10, N15, N17, and N22 postcodes across Haringey." },
      { q: "Can you handle parking in Haringey?", a: "Yes, we assist with parking suspension applications across all Haringey streets." },
      { q: "Do you carry out office removals in Haringey?", a: "Yes, we carry out commercial relocations across Haringey, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Ella K.", area: "Haringey", text: "Octagon carried out our Haringey move with exceptional care and professionalism." },
      { name: "Liam B.", area: "Wood Green", text: "Moved from Wood Green to Tottenham. Efficient, careful, completed well within the estimated time." },
      { name: "Grace T.", area: "Crouch End", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "waltham-forest": {
    name: "Waltham Forest", slug: "waltham-forest", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Waltham Forest, Walthamstow, Chingford and all E17 postcodes.",
    intro: "Octagon Removals carries out premium removals across Waltham Forest. Waltham Forest's Victorian terraces, Edwardian semis, and modern apartments require experienced movers.",
    boroughs: ["Walthamstow", "Chingford", "Leyton", "Leytonstone", "Highams Park", "Woodford"],
    faqs: [
      { q: "Do you cover all Waltham Forest postcodes?", a: "Yes, we cover all E4, E10, E11, E17, and IG8 postcodes across Waltham Forest." },
      { q: "Can you handle parking in Waltham Forest?", a: "Yes, we assist with parking suspension applications across all Waltham Forest streets." },
      { q: "Do you carry out office removals in Waltham Forest?", a: "Yes, we carry out commercial relocations across Waltham Forest, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Chloe W.", area: "Walthamstow", text: "Octagon carried out our Walthamstow move with exceptional care and professionalism." },
      { name: "Ethan M.", area: "Chingford", text: "Moved from Chingford to Walthamstow. Efficient, careful, completed well within the estimated time." },
      { name: "Ava R.", area: "Leyton", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "newham": {
    name: "Newham", slug: "newham", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Newham, Stratford, West Ham and all E15 postcodes.",
    intro: "Octagon Removals carries out premium removals across Newham. Newham's Victorian terraces, modern developments, and new-build apartments require experienced movers.",
    boroughs: ["Stratford", "West Ham", "Forest Gate", "Plaistow", "East Ham", "Canning Town"],
    faqs: [
      { q: "Do you cover all Newham postcodes?", a: "Yes, we cover all E6, E7, E12, E13, E15, and E16 postcodes across Newham." },
      { q: "Can you handle parking in Newham?", a: "Yes, we assist with parking suspension applications across all Newham streets." },
      { q: "Do you carry out office removals in Newham?", a: "Yes, we carry out commercial relocations across Newham, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Olivia K.", area: "Newham", text: "Octagon carried out our Newham move with exceptional care and professionalism." },
      { name: "William B.", area: "Stratford", text: "Moved from Stratford to Hackney. Efficient, careful, completed well within the estimated time." },
      { name: "Isabella T.", area: "Forest Gate", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "barking": {
    name: "Barking", slug: "barking", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Barking, Dagenham, Ilford and all IG11 postcodes.",
    intro: "Octagon Removals carries out premium removals across Barking. Barking's Victorian terraces, Edwardian semis, and modern apartments require experienced movers.",
    boroughs: ["Barking", "Dagenham", "Ilford", "Chadwell Heath", "Becontree", "Upney"],
    faqs: [
      { q: "Do you cover all Barking postcodes?", a: "Yes, we cover all IG11, RM8, RM9, and RM10 postcodes across Barking." },
      { q: "Can you handle parking in Barking?", a: "Yes, we assist with parking suspension applications across all Barking streets." },
      { q: "Do you carry out office removals in Barking?", a: "Yes, we carry out commercial relocations across Barking, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Jasmine W.", area: "Barking", text: "Octagon carried out our Barking move with exceptional care and professionalism." },
      { name: "Charlie M.", area: "Dagenham", text: "Moved from Dagenham to Barking. Efficient, careful, completed well within the estimated time." },
      { name: "Scarlett R.", area: "Ilford", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "havering": {
    name: "Havering", slug: "havering", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Havering, Hornchurch, Upminster and all RM postcodes.",
    intro: "Octagon Removals carries out premium removals across Havering. Havering's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Hornchurch", "Upminster", "Harold Wood", "Rainham", "Elm Park", "Emerson Park"],
    faqs: [
      { q: "Do you cover all Havering postcodes?", a: "Yes, we cover all RM1, RM3, RM11, RM12, RM13, and RM14 postcodes across Havering." },
      { q: "Can you handle parking in Havering?", a: "Yes, we assist with parking suspension applications across all Havering streets." },
      { q: "Do you carry out office removals in Havering?", a: "Yes, we carry out commercial relocations across Havering, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Penelope K.", area: "Havering", text: "Octagon carried out our Havering move with exceptional care and professionalism." },
      { name: "Theodore B.", area: "Hornchurch", text: "Moved from Hornchurch to Romford. Efficient, careful, completed well within the estimated time." },
      { name: "Matilda T.", area: "Upminster", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "bexley": {
    name: "Bexley", slug: "bexley", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Bexley, Bexleyheath, Sidcup and all DA postcodes.",
    intro: "Octagon Removals carries out premium removals across Bexley. Bexley's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Bexleyheath", "Sidcup", "Welling", "Erith", "Crayford", "Barnehurst"],
    faqs: [
      { q: "Do you cover all Bexley postcodes?", a: "Yes, we cover all DA1, DA5, DA6, DA7, DA14, and DA15 postcodes across Bexley." },
      { q: "Can you handle parking in Bexley?", a: "Yes, we assist with parking suspension applications across all Bexley streets." },
      { q: "Do you carry out office removals in Bexley?", a: "Yes, we carry out commercial relocations across Bexley, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Florence W.", area: "Bexley", text: "Octagon carried out our Bexley move with exceptional care and professionalism." },
      { name: "Sebastian M.", area: "Bexleyheath", text: "Moved from Bexleyheath to Sidcup. Efficient, careful, completed well within the estimated time." },
      { name: "Arabella T.", area: "Sidcup", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "lewisham": {
    name: "Lewisham", slug: "lewisham", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Lewisham, Catford, Forest Hill and all SE13 postcodes.",
    intro: "Octagon Removals carries out premium removals across Lewisham. Lewisham's Victorian terraces, Edwardian semis, and modern apartments require experienced movers.",
    boroughs: ["Lewisham", "Catford", "Forest Hill", "Sydenham", "Hither Green", "Brockley"],
    faqs: [
      { q: "Do you cover all Lewisham postcodes?", a: "Yes, we cover all SE4, SE6, SE12, SE13, SE23, and SE26 postcodes across Lewisham." },
      { q: "Can you handle parking in Lewisham?", a: "Yes, we assist with parking suspension applications across all Lewisham streets." },
      { q: "Do you carry out office removals in Lewisham?", a: "Yes, we carry out commercial relocations across Lewisham, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Imogen K.", area: "Lewisham", text: "Octagon carried out our Lewisham move with exceptional care and professionalism." },
      { name: "Rupert B.", area: "Catford", text: "Moved from Catford to Lewisham. Efficient, careful, completed well within the estimated time." },
      { name: "Cecilia T.", area: "Forest Hill", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "merton": {
    name: "Merton", slug: "merton", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Merton, Wimbledon, Mitcham and all SW19 postcodes.",
    intro: "Octagon Removals carries out premium removals across Merton. Merton's Victorian terraces, Edwardian semis, and modern apartments require experienced movers.",
    boroughs: ["Wimbledon", "Mitcham", "Morden", "Raynes Park", "Colliers Wood", "South Wimbledon"],
    faqs: [
      { q: "Do you cover all Merton postcodes?", a: "Yes, we cover all SW19, SW20, CR4, and SM4 postcodes across Merton." },
      { q: "Can you handle parking in Merton?", a: "Yes, we assist with parking suspension applications across all Merton streets." },
      { q: "Do you carry out office removals in Merton?", a: "Yes, we carry out commercial relocations across Merton, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Beatrice W.", area: "Merton", text: "Octagon carried out our Merton move with exceptional care and professionalism." },
      { name: "Edmund M.", area: "Wimbledon", text: "Moved from Wimbledon to Clapham. Efficient, careful, completed well within the estimated time." },
      { name: "Constance T.", area: "Mitcham", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "sutton": {
    name: "Sutton", slug: "sutton", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Sutton, Cheam, Carshalton and all SM postcodes.",
    intro: "Octagon Removals carries out premium removals across Sutton. Sutton's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Sutton", "Cheam", "Carshalton", "Wallington", "Belmont", "Worcester Park"],
    faqs: [
      { q: "Do you cover all Sutton postcodes?", a: "Yes, we cover all SM1, SM2, SM3, SM5, and SM6 postcodes across Sutton." },
      { q: "Can you handle parking in Sutton?", a: "Yes, we assist with parking suspension applications across all Sutton streets." },
      { q: "Do you carry out office removals in Sutton?", a: "Yes, we carry out commercial relocations across Sutton, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Harriet K.", area: "Sutton", text: "Octagon carried out our Sutton move with exceptional care and professionalism." },
      { name: "Jasper B.", area: "Cheam", text: "Moved from Cheam to Sutton. Efficient, careful, completed well within the estimated time." },
      { name: "Violet T.", area: "Carshalton", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "richmond": {
    name: "Richmond", slug: "richmond", phone: "0208 927 0543",
    ghosted: true,
    heroTagline: "Premium house and office removals across Richmond, Kew, Ham and all TW9 postcodes.",
    intro: "Octagon Removals carries out premium removals across Richmond. Richmond's Georgian townhouses, Victorian terraces, and riverside properties require experienced movers.",
    boroughs: ["Richmond", "Kew", "Ham", "Petersham", "East Sheen", "North Sheen"],
    faqs: [
      { q: "Do you cover all Richmond postcodes?", a: "Yes, we cover all TW9, TW10, SW14, and TW1 postcodes across Richmond." },
      { q: "Can you handle parking in Richmond?", a: "Yes, we assist with parking suspension applications across all Richmond streets." },
      { q: "Do you carry out office removals in Richmond?", a: "Yes, we carry out commercial relocations across Richmond, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Georgina W.", area: "Richmond", text: "Octagon carried out our Richmond move with exceptional care and professionalism." },
      { name: "Hugo M.", area: "Kew", text: "Moved from Kew to Richmond. Efficient, careful, completed well within the estimated time." },
      { name: "Clementine T.", area: "Ham", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "hounslow": {
    name: "Hounslow", slug: "hounslow", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Hounslow, Brentford, Isleworth and all TW3 postcodes.",
    intro: "Octagon Removals carries out premium removals across Hounslow. Hounslow's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Hounslow", "Brentford", "Isleworth", "Feltham", "Hanworth", "Heston"],
    faqs: [
      { q: "Do you cover all Hounslow postcodes?", a: "Yes, we cover all TW3, TW4, TW5, TW7, TW8, and TW13 postcodes across Hounslow." },
      { q: "Can you handle parking in Hounslow?", a: "Yes, we assist with parking suspension applications across all Hounslow streets." },
      { q: "Do you carry out office removals in Hounslow?", a: "Yes, we carry out commercial relocations across Hounslow, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Cordelia K.", area: "Hounslow", text: "Octagon carried out our Hounslow move with exceptional care and professionalism." },
      { name: "Barnaby B.", area: "Brentford", text: "Moved from Brentford to Hounslow. Efficient, careful, completed well within the estimated time." },
      { name: "Lavinia T.", area: "Isleworth", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "hillingdon": {
    name: "Hillingdon", slug: "hillingdon", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Hillingdon, Hayes, Ruislip and all UB postcodes.",
    intro: "Octagon Removals carries out premium removals across Hillingdon. Hillingdon's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Hayes", "Ruislip", "Northolt", "Yiewsley", "West Drayton", "Ickenham"],
    faqs: [
      { q: "Do you cover all Hillingdon postcodes?", a: "Yes, we cover all UB3, UB4, UB5, UB8, UB9, and UB10 postcodes across Hillingdon." },
      { q: "Can you handle parking in Hillingdon?", a: "Yes, we assist with parking suspension applications across all Hillingdon streets." },
      { q: "Do you carry out office removals in Hillingdon?", a: "Yes, we carry out commercial relocations across Hillingdon, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Octavia W.", area: "Hillingdon", text: "Octagon carried out our Hillingdon move with exceptional care and professionalism." },
      { name: "Ptolemy M.", area: "Hayes", text: "Moved from Hayes to Uxbridge. Efficient, careful, completed well within the estimated time." },
      { name: "Seraphina T.", area: "Ruislip", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "tower-hamlets": {
    name: "Tower Hamlets", slug: "tower-hamlets", phone: "0208 521 8000",
    heroTagline: "Premium house and office removals across Tower Hamlets, Canary Wharf, Bethnal Green and all E1 postcodes.",
    intro: "Octagon Removals carries out premium removals across Tower Hamlets. Tower Hamlets' period properties, converted warehouses, and modern riverside apartments require experienced movers.",
    boroughs: ["Canary Wharf", "Bethnal Green", "Stepney", "Mile End", "Bow", "Poplar"],
    faqs: [
      { q: "Do you cover all Tower Hamlets postcodes?", a: "Yes, we cover all E1, E2, E3, E14, and E1W postcodes across Tower Hamlets." },
      { q: "Can you handle parking in Tower Hamlets?", a: "Yes, we assist with parking suspension applications across all Tower Hamlets streets." },
      { q: "Do you carry out office removals in Tower Hamlets?", a: "Yes, we carry out commercial relocations across Tower Hamlets, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Persephone K.", area: "Tower Hamlets", text: "Octagon carried out our Tower Hamlets move with exceptional care and professionalism." },
      { name: "Lysander B.", area: "Canary Wharf", text: "Moved from Canary Wharf to Islington. Efficient, careful, completed well within the estimated time." },
      { name: "Calliope T.", area: "Bethnal Green", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "redbridge": {
    name: "Redbridge", slug: "redbridge", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Redbridge, Ilford, Woodford and all IG postcodes.",
    intro: "Octagon Removals carries out premium removals across Redbridge. Redbridge's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Ilford", "Woodford", "Wanstead", "Gants Hill", "Barkingside", "Hainault"],
    faqs: [
      { q: "Do you cover all Redbridge postcodes?", a: "Yes, we cover all IG1, IG2, IG3, IG4, IG5, IG6, and IG8 postcodes across Redbridge." },
      { q: "Can you handle parking in Redbridge?", a: "Yes, we assist with parking suspension applications across all Redbridge streets." },
      { q: "Do you carry out office removals in Redbridge?", a: "Yes, we carry out commercial relocations across Redbridge, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Thalia W.", area: "Redbridge", text: "Octagon carried out our Redbridge move with exceptional care and professionalism." },
      { name: "Caspian M.", area: "Ilford", text: "Moved from Ilford to Romford. Efficient, careful, completed well within the estimated time." },
      { name: "Zenobia T.", area: "Woodford", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "brent": {
    name: "Brent", slug: "brent", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Brent, Wembley, Kilburn and all HA9 postcodes.",
    intro: "Octagon Removals carries out premium removals across Brent. Brent's Edwardian semis, Victorian terraces, and modern apartments require experienced movers.",
    boroughs: ["Wembley", "Kilburn", "Willesden", "Neasden", "Harlesden", "Kingsbury"],
    faqs: [
      { q: "Do you cover all Brent postcodes?", a: "Yes, we cover all HA0, HA9, NW2, NW6, and NW10 postcodes across Brent." },
      { q: "Can you handle parking in Brent?", a: "Yes, we assist with parking suspension applications across all Brent streets." },
      { q: "Do you carry out office removals in Brent?", a: "Yes, we carry out commercial relocations across Brent, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Calista K.", area: "Brent", text: "Octagon carried out our Brent move with exceptional care and professionalism." },
      { name: "Dorian B.", area: "Wembley", text: "Moved from Wembley to Harrow. Efficient, careful, completed well within the estimated time." },
      { name: "Evangeline T.", area: "Kilburn", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "city-of-london": {
    name: "City of London", slug: "city-of-london", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium office and house removals across the City of London, EC1, EC2, EC3 and EC4 postcodes.",
    intro: "Octagon Removals carries out premium removals across the City of London. The City's office buildings, converted lofts, and modern apartments require experienced movers who understand the unique access requirements of the Square Mile.",
    boroughs: ["City of London", "Barbican", "Aldgate", "Moorgate", "Liverpool Street", "Fenchurch Street"],
    faqs: [
      { q: "Do you cover all City of London postcodes?", a: "Yes, we cover all EC1, EC2, EC3, and EC4 postcodes across the City of London." },
      { q: "Can you handle parking in the City of London?", a: "Yes, we assist with parking suspension applications across all City of London streets." },
      { q: "Do you carry out office removals in the City of London?", a: "Yes, we carry out commercial relocations across the City of London, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Maximilian W.", area: "City of London", text: "Octagon carried out our City of London office move with exceptional professionalism." },
      { name: "Valentina M.", area: "Barbican", text: "Moved from Barbican to Islington. Efficient, careful, completed well within the estimated time." },
      { name: "Leontine T.", area: "Aldgate", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "battersea": {
    name: "Battersea", slug: "battersea", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Battersea, Nine Elms, Clapham Junction and all SW8 postcodes.",
    intro: "Octagon Removals carries out premium removals across Battersea. Battersea's Victorian terraces, modern riverside developments, and converted warehouses require experienced movers.",
    boroughs: ["Battersea", "Nine Elms", "Clapham Junction", "Queenstown Road", "South Lambeth", "Stockwell"],
    faqs: [
      { q: "Do you cover all Battersea postcodes?", a: "Yes, we cover all SW8, SW11, and SW1V postcodes across Battersea." },
      { q: "Can you handle parking in Battersea?", a: "Yes, we assist with parking suspension applications across all Battersea streets." },
      { q: "Do you carry out office removals in Battersea?", a: "Yes, we carry out commercial relocations across Battersea, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Arabella W.", area: "Battersea", text: "Octagon carried out our Battersea move with exceptional care and professionalism." },
      { name: "Crispin M.", area: "Nine Elms", text: "Moved from Nine Elms to Chelsea. Efficient, careful, completed well within the estimated time." },
      { name: "Rowena T.", area: "Clapham Junction", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "chiswick": {
    name: "Chiswick", slug: "chiswick", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Chiswick, Turnham Green, Gunnersbury and all W4 postcodes.",
    intro: "Octagon Removals carries out premium removals across Chiswick. Chiswick's Victorian terraces, Edwardian semis, and riverside properties require experienced movers.",
    boroughs: ["Chiswick", "Turnham Green", "Gunnersbury", "Strand on the Green", "Bedford Park", "Grove Park"],
    faqs: [
      { q: "Do you cover all Chiswick postcodes?", a: "Yes, we cover all W4 and W6 postcodes across Chiswick." },
      { q: "Can you handle parking in Chiswick?", a: "Yes, we assist with parking suspension applications across all Chiswick streets." },
      { q: "Do you carry out office removals in Chiswick?", a: "Yes, we carry out commercial relocations across Chiswick, including out-of-hours moves." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day." },
    ],
    localReviews: [
      { name: "Cordelia W.", area: "Chiswick", text: "Octagon carried out our Chiswick move with exceptional care and professionalism." },
      { name: "Phineas M.", area: "Turnham Green", text: "Moved from Turnham Green to Kensington. Efficient, careful, completed well within the estimated time." },
      { name: "Millicent T.", area: "Gunnersbury", text: "Excellent service. The team handled our furniture with great care and the fixed price was honoured to the penny." },
    ],
  },

  "hammersmith": {
    name: "Hammersmith", slug: "hammersmith", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Hammersmith, Shepherd's Bush, Brook Green and all W6 postcodes. Fixed-price, fully insured.",
    intro: "Octagon Removals provides premium removal services across Hammersmith and Fulham. Hammersmith's mix of Victorian terraces, modern riverside apartments, and commercial properties requires experienced, adaptable movers. Our team knows the area intimately - from the narrow streets of Brook Green to the riverside developments along the Thames. We handle parking suspension applications, provide free fixed-price surveys, and guarantee the price we quote is the price you pay.",
    boroughs: ["Hammersmith", "Shepherd's Bush", "Brook Green", "Ravenscourt Park", "Stamford Brook", "King Street", "Fulham Palace Road", "White City", "Barons Court"],
    faqs: [
      { q: "Do you cover all Hammersmith postcodes?", a: "Yes, we cover all W6, W12, and W14 postcodes across Hammersmith, Shepherd's Bush, and the surrounding areas." },
      { q: "Can you handle parking in Hammersmith?", a: "Yes, we assist with parking suspension applications across all Hammersmith streets. Our team is experienced with the local CPZ restrictions." },
      { q: "Do you carry out office removals in Hammersmith?", a: "Yes, we carry out commercial relocations across Hammersmith, including out-of-hours and weekend moves to minimise business disruption." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day. We provide free, detailed surveys before every move." },
    ],
    localReviews: [
      { name: "Sebastian W.", area: "Hammersmith", text: "Octagon carried out our Hammersmith move with exceptional care and professionalism. The team arrived on time and completed the move well within the estimated window." },
      { name: "Imogen C.", area: "Shepherd's Bush", text: "Moved from Shepherd's Bush to Chiswick. Efficient, careful, and the fixed price was exactly as quoted. Highly recommend." },
      { name: "Rupert T.", area: "Brook Green", text: "Excellent service from start to finish. The team handled our antique furniture with great care and navigated the Brook Green parking restrictions perfectly." },
    ],
  },

  "wembley": {
    name: "Wembley", slug: "wembley", phone: "0208 521 8000",
    ghosted: true,
    heroTagline: "Premium house and office removals across Wembley, Wembley Park, Alperton and all HA0, HA9 postcodes. Fixed-price, fully insured.",
    intro: "Octagon Removals provides premium removal services across Wembley and the surrounding areas. Wembley's diverse mix of residential streets, new-build developments near Wembley Park, and commercial properties requires experienced, adaptable movers. Our team knows the area intimately - from the Victorian terraces of Alperton to the modern apartments around Wembley Stadium. We handle parking suspension applications, provide free fixed-price surveys, and guarantee the price we quote is the price you pay.",
    boroughs: ["Wembley", "Wembley Park", "Alperton", "North Wembley", "South Wembley", "Sudbury", "Tokyngton", "Stonebridge", "Harlesden"],
    faqs: [
      { q: "Do you cover all Wembley postcodes?", a: "Yes, we cover all HA0, HA9, and surrounding postcodes across Wembley, Wembley Park, Alperton, and North Wembley." },
      { q: "Can you handle parking restrictions near Wembley Stadium?", a: "Yes, we are experienced with the parking restrictions and event-day restrictions around Wembley Stadium and plan your move accordingly." },
      { q: "Do you carry out office removals in Wembley?", a: "Yes, we carry out commercial relocations across Wembley, including out-of-hours and weekend moves to minimise business disruption." },
      { q: "What is your fixed-price guarantee?", a: "The price we quote is the price you pay - no hidden charges, no surprises on moving day. We provide free, detailed surveys before every move." },
    ],
    localReviews: [
      { name: "Marcus O.", area: "Wembley Park", text: "Octagon carried out our Wembley move with exceptional care and professionalism. The team arrived on time and completed the move well within the estimated window." },
      { name: "Priya S.", area: "Alperton", text: "Moved from Alperton to Ealing. Efficient, careful, and the fixed price was exactly as quoted. Highly recommend." },
      { name: "David K.", area: "North Wembley", text: "Excellent service from start to finish. The team handled our furniture with great care and navigated the local parking restrictions perfectly." },
    ],
  },
};

// All locations for nav/hub display (47 areas)
export const allLocations = [
  // Primary service areas (dedicated pages)
  { name: "Bromley", slug: "bromley", phone: "0208 927 0542" },
  { name: "Islington", slug: "islington", phone: "0203 667 8598" },
  { name: "Epsom", slug: "epsom", phone: "0137 267 9060" },
  { name: "Watford", slug: "watford", phone: "0192 396 4026" },
  { name: "Brentwood", slug: "brentwood", phone: "0127 728 7453" },
  { name: "Romford", slug: "romford", phone: "0170 897 3210" },
  { name: "Croydon", slug: "croydon", phone: "0208 521 8000" },
  { name: "Orpington", slug: "orpington", phone: "0208 927 0542" },
  { name: "Enfield", slug: "enfield", phone: "0208 521 8000" },
  { name: "Epping", slug: "epping", phone: "0208 521 8000" },
  { name: "Finchley", slug: "finchley", phone: "0208 521 8000" },
  { name: "Fulham", slug: "fulham", phone: "0208 521 8000" },
  { name: "Kingston upon Thames", slug: "kingston-upon-thames", phone: "0208 521 8000" },
  { name: "Dartford", slug: "dartford", phone: "0208 521 8000" },
  { name: "Twickenham", slug: "twickenham", phone: "0208 927 0543" },
  { name: "Uxbridge", slug: "uxbridge", phone: "0208 521 8000" },
  { name: "Greenwich", slug: "greenwich", phone: "0203 002 6383" },
  // Extended coverage areas
  { name: "Kensington", slug: "kensington", phone: "0208 521 8000" },
  { name: "Chelsea", slug: "chelsea", phone: "0208 521 8000" },
  { name: "Westminster", slug: "westminster", phone: "0208 521 8000" },
  { name: "Camden", slug: "camden", phone: "0208 521 8000" },
  { name: "Hackney", slug: "hackney", phone: "0208 521 8000" },
  { name: "Southwark", slug: "southwark", phone: "0208 521 8000" },
  { name: "Lambeth", slug: "lambeth", phone: "0208 521 8000" },
  { name: "Wandsworth", slug: "wandsworth", phone: "0208 521 8000" },
  { name: "Ealing", slug: "ealing", phone: "0208 521 8000" },
  { name: "Harrow", slug: "harrow", phone: "0208 521 8000" },
  { name: "Barnet", slug: "barnet", phone: "0208 521 8000" },
  { name: "Haringey", slug: "haringey", phone: "0208 521 8000" },
  { name: "Waltham Forest", slug: "waltham-forest", phone: "0208 521 8000" },
  { name: "Newham", slug: "newham", phone: "0208 521 8000" },
  { name: "Barking", slug: "barking", phone: "0208 521 8000" },
  { name: "Havering", slug: "havering", phone: "0208 521 8000" },
  { name: "Bexley", slug: "bexley", phone: "0208 521 8000" },
  { name: "Lewisham", slug: "lewisham", phone: "0208 521 8000" },
  { name: "Merton", slug: "merton", phone: "0208 521 8000" },
  { name: "Sutton", slug: "sutton", phone: "0208 521 8000" },
  { name: "Richmond", slug: "richmond", phone: "0208 927 0543" },
  { name: "Hounslow", slug: "hounslow", phone: "0208 521 8000" },
  { name: "Hillingdon", slug: "hillingdon", phone: "0208 521 8000" },
  { name: "Tower Hamlets", slug: "tower-hamlets", phone: "0208 521 8000" },
  { name: "Redbridge", slug: "redbridge", phone: "0208 521 8000" },
  { name: "Brent", slug: "brent", phone: "0208 521 8000" },
  { name: "City of London", slug: "city-of-london", phone: "0208 521 8000" },
  { name: "Battersea", slug: "battersea", phone: "0208 521 8000" },
  { name: "Chiswick", slug: "chiswick", phone: "0208 521 8000" },
  { name: "Hammersmith", slug: "hammersmith", phone: "0208 521 8000" },
  { name: "Wembley", slug: "wembley", phone: "0208 521 8000" },
];

