export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  questions: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "domestic",
    title: "House Removals",
    subtitle: "Everything you need to know about moving home across London and the UK",
    icon: "🏠",
    questions: [
      {
        question: "How much does a house removal in London typically cost?",
        answer: "Every move is unique, so we provide fixed-price quotes based on a free pre-move survey. The cost depends on the volume of items, distance, access at both properties, and any additional services such as packing or storage. We never add hidden charges - the price we quote is the price you pay."
      },
      {
        question: "How far in advance should I book my removal?",
        answer: "We recommend booking at least 2–4 weeks ahead, especially during peak periods (summer months, end of month, school holidays). However, we understand that exchange dates can change at short notice, so we always try to accommodate last-minute bookings where possible."
      },
      {
        question: "What is included in your removal quote?",
        answer: "Our quotes include the removal team, the vehicle, transit insurance, furniture blankets and straps, and placement of items in your new home. Packing, storage, and specialist item handling can be added. Everything is itemised so you know exactly what you are paying for."
      },
      {
        question: "Do you offer a packing service?",
        answer: "Yes. Our professional packing team uses premium double-walled boxes, acid-free tissue paper, and specialist wrapping for fragile items. We can pack your entire home, or just the delicate items - whatever suits you. We also supply self-pack kits if you prefer to do it yourself."
      },
      {
        question: "Are my belongings insured during the move?",
        answer: "Every move includes our standard goods-in-transit cover. We also offer comprehensive insurance for higher-value items, antiques, and artwork. Our public liability insurance covers up to £1 million. We recommend discussing your specific needs during the survey."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 48 hours' notice for cancellations or date changes at no charge. Cancellations within 48 hours may incur a fee to cover crew and vehicle allocation. We understand that property chains can be unpredictable, so we always try to be flexible."
      },
      {
        question: "Will your team disassemble and reassemble my furniture?",
        answer: "Absolutely. Our crews are trained to disassemble beds, wardrobes, dining tables, and other flat-pack or modular furniture. We reassemble everything at your new property and ensure it is placed exactly where you want it. Specialist items like fitted wardrobes may require a carpenter."
      },
      {
        question: "Can you move items up or down stairs?",
        answer: "Yes. We handle moves involving multiple flights of stairs regularly. If there is no lift, we use specialist equipment including stair-climbing trolleys. We ask that you mention any access challenges during the survey so we can plan accordingly."
      },
      {
        question: "What access does your removal vehicle need?",
        answer: "We need enough space for our vehicle to park safely near the property entrance. Please let us know about any height restrictions, narrow lanes, or controlled parking zones. We can arrange parking suspensions with the local council if needed - just let us know in advance."
      },
      {
        question: "Do you disconnect and reconnect appliances?",
        answer: "Our team can disconnect and reconnect most appliances including washing machines, dishwashers, and fridges. We do not handle gas appliances - a Gas Safe registered engineer is required for those. We can recommend trusted tradespeople if needed."
      },
      {
        question: "What happens if something is damaged during the move?",
        answer: "We take photographic evidence of every item before and after the move. In the rare event of damage, our claims process is straightforward - report it within 7 days, and we handle it directly. Our comprehensive insurance means you are fully protected."
      },
      {
        question: "Do you provide packing materials?",
        answer: "Yes. We supply premium boxes in various sizes, wardrobe cartons, bubble wrap, packing paper, tape, and mattress covers. Materials can be delivered in advance or brought on moving day. We also collect and recycle used materials after your move."
      },
      {
        question: "Can I pack my own boxes?",
        answer: "Of course. Many clients prefer to pack personal items themselves. We recommend using sturdy double-walled boxes and filling gaps with paper to prevent movement. Please note that our liability for owner-packed boxes is limited, so we suggest our packing service for fragile or valuable items."
      },
      {
        question: "Are there items you cannot move?",
        answer: "We cannot transport hazardous materials, flammable liquids, gas cylinders, firearms, perishable food, or live animals. We also recommend that you carry jewellery, cash, passports, and important documents with you personally. Your move coordinator will provide a full list."
      },
      {
        question: "Do you offer same-day or emergency moves?",
        answer: "We do our best to accommodate urgent requests, subject to crew and vehicle availability. Same-day moves within London are often possible. Contact us as early in the day as you can, and we will see what we can arrange."
      },
      {
        question: "What is a pre-move survey and why do I need one?",
        answer: "A pre-move survey is a free visit (or video call) where we assess the volume of your belongings, note any access issues, and discuss your requirements. This allows us to provide an accurate fixed-price quote and plan the move properly. It typically takes 20–30 minutes."
      },
      {
        question: "How long does a typical house move take?",
        answer: "A one-bedroom flat usually takes 3–4 hours. A three-bedroom house typically takes a full day. Larger properties or moves involving packing may take 1–2 days. We will give you a realistic timeline during the survey so there are no surprises."
      },
      {
        question: "Do you offer weekend or evening moves?",
        answer: "Yes. We operate seven days a week, including bank holidays. Weekend and evening moves are popular with clients who cannot take time off work. Saturday moves book up quickly, so we recommend reserving your date early."
      },
      {
        question: "Who arranges the parking permit for the removal van?",
        answer: "Parking suspensions are the client's responsibility, but we guide you through the process. Most London councils require 5–10 working days' notice. We provide the vehicle dimensions and can submit the application on your behalf if you prefer."
      },
      {
        question: "Can you move a piano?",
        answer: "Yes - piano removals are one of our specialities. We have moved grand pianos, upright pianos, and even a baby grand across water. Our team uses specialist piano trolleys, straps, and padding. Every piano move is individually risk-assessed."
      },
      {
        question: "Do you offer part-load or shared-van services?",
        answer: "Yes. If you are moving a small number of items or a single room, a part-load service can be more cost-effective. We consolidate shipments heading in the same direction, passing the savings on to you."
      },
      {
        question: "What size van will you use for my move?",
        answer: "We match the vehicle to the job. Our fleet ranges from transit vans for studio flats to 18-tonne lorries for large family homes. The survey determines the right vehicle - we never send a van that is too small or charge you for space you do not need."
      },
      {
        question: "Can you move garden furniture, sheds, or hot tubs?",
        answer: "We can move garden furniture, barbecues, and most outdoor items. Sheds and hot tubs require disassembly and specialist handling - let us know during the survey and we will include it in the plan. Some items may need a crane or hiab."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfer, debit and credit cards, and company purchase orders for corporate clients. Payment is typically due on the day of the move or upon completion. We do not require full payment upfront - just a small deposit to secure your date."
      },
      {
        question: "Do you offer end-of-tenancy cleaning?",
        answer: "Yes. We offer professional deep cleaning at your old property to help you get your deposit back, and a pre-move clean at your new home so you move into a spotless space. Cleaning can be booked alongside your removal for a bundled rate."
      }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Relocations",
    subtitle: "Office moves, business relocations, and corporate moving solutions",
    icon: "🏢",
    questions: [
      {
        question: "Can you move our office over a weekend to minimise disruption?",
        answer: "Absolutely. The majority of our commercial moves take place over weekends or bank holidays to ensure zero business downtime. We plan every detail in advance so your team can walk into a fully operational office on Monday morning."
      },
      {
        question: "How do you handle IT equipment and servers?",
        answer: "We work with your IT team or managed service provider to safely disconnect, transport, and reconnect all technology. Servers, switches, and sensitive equipment are moved in anti-static, shock-absorbing cases. We can also coordinate with cabling contractors for the new site."
      },
      {
        question: "Do you supply crates for office moves?",
        answer: "Yes. We deliver reusable plastic crates to your office before the move. Each employee receives enough crates for their desk contents, clearly labelled with their name and new desk location. We collect the empty crates after you have unpacked."
      },
      {
        question: "Can you relocate multiple offices across different locations?",
        answer: "Yes. We have managed multi-site relocations involving offices across London and the UK. A dedicated project manager coordinates all locations, ensuring synchronised timelines and consistent service quality at every site."
      },
      {
        question: "Do you offer project management for large relocations?",
        answer: "Every commercial move includes a dedicated move coordinator. For larger projects, we provide a full project management service including floor plan mapping, phased move schedules, risk assessments, and post-move snagging."
      },
      {
        question: "How do you handle confidential documents and data?",
        answer: "We follow strict chain-of-custody protocols. Confidential files are moved in sealed, tamper-evident crates. We can also arrange secure document shredding for items you no longer need. All our staff are vetted and trained in data handling."
      },
      {
        question: "Can you move heavy items like safes and fire cabinets?",
        answer: "Yes. We have specialist equipment including hydraulic trolleys, stair climbers, and tail-lift vehicles for heavy items. Safes, fireproof cabinets, and industrial equipment are moved by our trained heavy-lift team with full risk assessment."
      },
      {
        question: "Do you offer temporary storage during an office move?",
        answer: "Yes. If there is a gap between vacating your old office and occupying the new one, we provide secure commercial storage. Items are inventoried, stored in our facility, and delivered to your new premises when you are ready."
      },
      {
        question: "Can you work outside normal business hours?",
        answer: "We operate 24/7 for commercial clients. Night moves, early morning starts, and phased relocations over multiple evenings are all possible. We work around your business schedule, not the other way around."
      },
      {
        question: "How do you minimise business downtime during a move?",
        answer: "Through meticulous planning. We create a detailed move plan weeks in advance, pre-label every item and destination, and deploy enough crew to complete the move within the agreed window. Most office moves achieve full operational status within 24 hours."
      },
      {
        question: "Do you handle furniture installation at the new office?",
        answer: "Yes. We assemble desks, pedestals, meeting tables, and shelving at your new location. If you are purchasing new furniture, we can coordinate delivery and installation alongside the move to save time."
      },
      {
        question: "What about moving laboratory or medical equipment?",
        answer: "We have experience moving sensitive laboratory, dental, and medical equipment. Each item is individually risk-assessed, and we use custom crating where necessary. We can coordinate with equipment manufacturers for decommissioning and recommissioning."
      },
      {
        question: "Do you offer employee relocation support?",
        answer: "Yes. For businesses relocating staff, we offer individual home moves at corporate rates. We handle everything from packing to unpacking, allowing your employees to focus on their work rather than the logistics of moving."
      },
      {
        question: "What insurance do you carry for commercial moves?",
        answer: "We carry comprehensive goods-in-transit insurance, public liability insurance up to £1 million, and employer's liability cover. Additional cover can be arranged for high-value equipment. Certificates are available on request."
      },
      {
        question: "How do you manage access in high-rise buildings?",
        answer: "We liaise with building management to book goods lifts, loading bays, and access times. We understand the protocols of London's major commercial buildings and can navigate security requirements, time-restricted access, and shared loading facilities."
      },
      {
        question: "Do you coordinate with building management?",
        answer: "Yes. We handle all communications with building managers, landlords, and facilities teams at both the origin and destination. This includes booking lifts, arranging floor protection, and complying with any building-specific move regulations."
      },
      {
        question: "Can you move retail stock and shop fittings?",
        answer: "Yes. We move retail stock, display units, shelving, signage, and point-of-sale equipment. We can also handle stock transfers between locations and coordinate with your visual merchandising team for setup at the new site."
      },
      {
        question: "What about moves involving listed or heritage buildings?",
        answer: "We have experience working in listed buildings across London. We use floor protection, door frame guards, and specialist lifting techniques to ensure no damage to the fabric of the building. We comply with all conservation requirements."
      },
      {
        question: "Do you offer ongoing porterage services?",
        answer: "Yes. Beyond one-off moves, we provide regular porterage for businesses that need ongoing support - internal office rearrangements, furniture deliveries, archive management, and ad-hoc heavy lifting."
      },
      {
        question: "How do you handle parking in central London for office moves?",
        answer: "We arrange parking suspensions with the relevant council, coordinate with traffic management if needed, and use smaller vehicles for narrow streets. For large moves in the City or West End, we may stage vehicles and shuttle loads."
      },
      {
        question: "Will we have a dedicated move coordinator?",
        answer: "Every commercial client is assigned a dedicated move coordinator who is your single point of contact from survey to completion. They manage the timeline, communicate with all stakeholders, and are on-site during the move."
      },
      {
        question: "What is the typical timeline for planning an office move?",
        answer: "We recommend starting the process 6–8 weeks before the move date. This allows time for the survey, planning, crate delivery, and staff communication. For larger moves or multi-floor relocations, 3–6 months is advisable."
      },
      {
        question: "Do you offer post-move support?",
        answer: "Yes. After the move, we remain available for furniture adjustments, additional deliveries, and removal of packing waste. We also conduct a post-move review to ensure everything meets your expectations."
      },
      {
        question: "Can you handle phased or rolling office moves?",
        answer: "Yes. Phased moves - where departments relocate in stages - are common for larger businesses. We create a detailed phase plan, ensuring each stage is completed before the next begins, with minimal impact on ongoing operations."
      },
      {
        question: "Do you offer furniture disposal and recycling for old office equipment?",
        answer: "Yes. We can remove and responsibly dispose of unwanted furniture, electronics, and office equipment. We partner with recycling facilities and charities to ensure items are reused or recycled wherever possible, and provide waste transfer documentation."
      }
    ]
  },
  {
    id: "storage",
    title: "Storage Solutions",
    subtitle: "Secure, flexible storage for homes and businesses across London",
    icon: "📦",
    questions: [
      {
        question: "What types of storage do you offer?",
        answer: "We offer containerised storage (your items are packed into secure wooden containers in our warehouse), self-storage units (you have direct access to your own lockable room), and document/archive storage for businesses. All options are available short or long term."
      },
      {
        question: "How much does storage cost?",
        answer: "Storage costs depend on the volume of items and the duration. Our containerised storage starts from competitive weekly rates. We provide a clear quote after assessing your requirements - no hidden fees, no surprise price increases."
      },
      {
        question: "Is my property insured while in storage?",
        answer: "We offer storage insurance as part of our service. You can choose cover based on the value of your stored items. We recommend insuring for the full replacement value. Your own home contents insurance may also extend to items in storage - check with your provider."
      },
      {
        question: "Is there a minimum storage period?",
        answer: "Our minimum storage period is one week. There are no long-term commitments - you can extend or end your storage with just 7 days' notice. We understand that moving timelines can change, so we keep things flexible."
      },
      {
        question: "Can I access my items while they are in storage?",
        answer: "Yes. We offer access by appointment for containerised storage, typically with 24–48 hours' notice. Self-storage units can be accessed during facility opening hours. We can also retrieve specific items and deliver them to you."
      },
      {
        question: "How do I know what size storage I need?",
        answer: "During the survey, we assess the volume of items going into storage and recommend the right amount of space. As a rough guide, a one-bedroom flat typically needs 50–75 cubic feet, while a three-bedroom house needs 200–350 cubic feet."
      },
      {
        question: "Is your storage facility climate-controlled?",
        answer: "Our warehouse maintains stable temperature and humidity levels suitable for household goods, furniture, and most commercial items. For items requiring specific conditions (artwork, wine, musical instruments), we can discuss specialist storage options."
      },
      {
        question: "Do I have to pay VAT on storage?",
        answer: "Self-storage is generally exempt from VAT. Containerised storage and managed storage services are subject to VAT at the standard rate. We will make the VAT position clear in your quote so there are no surprises."
      },
      {
        question: "Can you collect my items and take them to storage?",
        answer: "Yes. We offer a full collection service - our team will come to your property, carefully load your items, and transport them to our storage facility. This can be combined with a removal or booked as a standalone service."
      },
      {
        question: "What items cannot be stored?",
        answer: "We cannot store hazardous materials, flammable liquids, perishable food, live animals, firearms, or illegal substances. Aerosols, paints, and gas cylinders are also prohibited. Your storage coordinator will provide a full list of restricted items."
      },
      {
        question: "How secure is your storage facility?",
        answer: "Our facility features 24-hour CCTV, intruder alarms, fire detection systems, and controlled access. Only authorised personnel can enter the warehouse. Your items are stored in individually sealed containers or locked units."
      },
      {
        question: "Do you offer business and document storage?",
        answer: "Yes. We provide commercial storage for office furniture, equipment, stock, and archives. Our document storage service includes indexed box storage with retrieval and delivery. We comply with data protection requirements for sensitive records."
      },
      {
        question: "Can I store a vehicle?",
        answer: "We can arrange vehicle storage for cars, motorcycles, and small commercial vehicles. Vehicles must be drained of fuel to safe levels and have valid documentation. Contact us for availability and rates."
      },
      {
        question: "What if I need to extend my storage period?",
        answer: "Simply let us know. There is no penalty for extending - your rate stays the same, and billing continues on the same cycle. We just ask for notice if you plan to remove items so we can arrange access."
      },
      {
        question: "Do you offer short-term storage between moves?",
        answer: "This is one of our most popular services. If your move-out and move-in dates do not align, we store your belongings safely in between. Many clients store for just a few days or weeks while their new property is prepared."
      },
      {
        question: "How should I prepare my items for storage?",
        answer: "Clean and dry all items before storage. Disassemble flat-pack furniture where possible. Use our packing materials to protect fragile items. Empty and defrost fridges and freezers at least 24 hours before. We provide a full preparation checklist."
      },
      {
        question: "Can you pack my items specifically for storage?",
        answer: "Yes. Our team can professionally pack your belongings for optimal storage protection. We use acid-free paper for delicate items, furniture covers, and moisture-absorbing materials where needed. Storage packing is slightly different from transit packing and we know the difference."
      },
      {
        question: "What are your storage facility opening hours?",
        answer: "Our facility is staffed Monday to Friday, 8am–6pm, and Saturday 9am–2pm. Access appointments can be arranged within these hours. For urgent access outside these times, please contact your storage coordinator."
      },
      {
        question: "Do you offer student storage?",
        answer: "Yes. We offer affordable student storage during holidays and between terms. We can collect from your university accommodation and deliver back when you return. Popular with students at London universities who do not want to ship everything home."
      },
      {
        question: "Can I store items while my home is being renovated?",
        answer: "Absolutely - this is a very common request. We collect your furniture and belongings, store them safely while the work is done, and deliver everything back when your home is ready. It protects your items from dust, paint, and accidental damage."
      },
      {
        question: "What payment methods do you accept for storage?",
        answer: "We accept bank transfer, direct debit (for ongoing storage), and debit/credit cards. Business clients can set up invoiced accounts. We bill monthly in advance, with clear statements showing exactly what you are paying for."
      },
      {
        question: "Do you offer container storage?",
        answer: "Yes. Our containerised storage uses purpose-built wooden containers that are loaded at your property, sealed, and stored in our secure warehouse. This means your items are handled only once, reducing the risk of damage."
      },
      {
        question: "How quickly can I get my items out of storage?",
        answer: "For containerised storage, we typically need 48 hours' notice to arrange delivery. Self-storage units can be accessed the same day during opening hours. For urgent requests, we do our best to accommodate - just call us."
      },
      {
        question: "Will you deliver my stored items back to me?",
        answer: "Yes. We offer a full redelivery service - our team will bring your items to your new address and place them wherever you direct. This can be booked as a standalone delivery or combined with a full removal service."
      },
      {
        question: "Do you provide an inventory of stored items?",
        answer: "Yes. We create a detailed inventory when your items enter storage, listing every box and piece of furniture. You receive a copy for your records. This makes it easy to request specific items or plan your collection."
      }
    ]
  },
  {
    id: "international",
    title: "International Removals",
    subtitle: "Moving overseas from the UK - customs, shipping, and everything in between",
    icon: "🌍",
    questions: [
      {
        question: "How long does an international removal take?",
        answer: "European road freight typically takes 3–7 working days. Sea freight to destinations like the USA, Australia, or the Middle East takes 4–12 weeks depending on the route. Air freight is the fastest option at 3–7 days but is more expensive. We provide a clear timeline for your specific destination."
      },
      {
        question: "What customs paperwork is required?",
        answer: "You will need a detailed packing inventory, proof of identity, and a customs declaration form. Requirements vary by destination - some countries require proof of residency, work permits, or specific import licences. We prepare all documentation and guide you through the process."
      },
      {
        question: "Can I take my car overseas?",
        answer: "Yes. We arrange vehicle shipping via roll-on/roll-off (RoRo) ferries or enclosed container transport. You will need the V5C logbook, proof of insurance, and any destination-specific import documents. We handle the logistics from collection to delivery at your new address."
      },
      {
        question: "Do you offer door-to-door international service?",
        answer: "Yes. Our international service covers everything from packing at your UK home to delivery and unpacking at your overseas destination. We manage customs clearance, port handling, and local delivery - you do not need to arrange anything at the other end."
      },
      {
        question: "What about customs duties and taxes?",
        answer: "Most countries allow duty-free import of personal household goods if you are relocating permanently. Conditions vary - some require you to have owned items for 6+ months, others restrict certain categories. We advise on the specific rules for your destination."
      },
      {
        question: "Do you pack items for international moves?",
        answer: "Yes, and we strongly recommend it. International shipments face more handling than domestic moves, so professional export-grade packing is essential. We use reinforced cartons, custom crating for fragile items, and comply with ISPM-15 timber treatment regulations."
      },
      {
        question: "What items cannot be shipped internationally?",
        answer: "Prohibited items vary by country but commonly include hazardous materials, firearms, certain foods, plants, animal products, and counterfeit goods. Some countries restrict alcohol, medicines, and electronics. We provide a destination-specific prohibited items list."
      },
      {
        question: "Do you offer both air freight and sea freight?",
        answer: "Yes. Sea freight is the most cost-effective for full household moves. Air freight is ideal for urgent shipments or smaller volumes. We also offer a combination - sending essentials by air and the bulk by sea - so you have what you need immediately."
      },
      {
        question: "How is my shipment tracked during transit?",
        answer: "We provide tracking updates at every stage - collection, port departure, in-transit, port arrival, customs clearance, and final delivery. Your move coordinator keeps you informed throughout, and you can contact us anytime for a status update."
      },
      {
        question: "What insurance is available for international moves?",
        answer: "We offer comprehensive marine insurance covering loss, damage, and total loss during transit. Cover is available on a replacement value or market value basis. We strongly recommend full cover for international shipments given the extended transit and handling involved."
      },
      {
        question: "Do you handle pet relocation?",
        answer: "We work with specialist pet relocation partners to arrange safe transport for your animals. This includes veterinary checks, microchipping, vaccinations, DEFRA export health certificates, and IATA-compliant travel crates. Requirements vary significantly by destination."
      },
      {
        question: "What has changed for moves to the EU after Brexit?",
        answer: "Since Brexit, moves to EU countries require customs declarations, and some personal effects may be subject to duties if you do not meet the transfer of residence exemption. We handle all the additional paperwork and ensure your shipment clears customs smoothly."
      },
      {
        question: "How do you handle fragile or valuable items for international shipping?",
        answer: "High-value and fragile items receive custom crating - wooden cases built to the exact dimensions of the item, with foam lining and shock absorption. Artwork, antiques, and musical instruments are individually assessed and packed by our specialist team."
      },
      {
        question: "Do you offer part-load or shared container shipping?",
        answer: "Yes. If you do not have enough to fill a full container, groupage (shared container) is a cost-effective alternative. Your items share space with other shipments heading to the same destination. They are securely separated and inventoried."
      },
      {
        question: "What international destinations do you cover?",
        answer: "We move to every continent. Our most popular routes include France, Spain, Germany, the USA, Canada, Australia, New Zealand, UAE, and South Africa. We have trusted partners in over 150 countries, ensuring quality service at the destination."
      },
      {
        question: "Can I store items in the UK before my international move?",
        answer: "Yes. Many clients store belongings while they finalise overseas arrangements. We can hold your items in our secure facility and ship them when you are ready. There is no rush - store for as long as you need."
      },
      {
        question: "How should I prepare for an international move?",
        answer: "Start planning 8–12 weeks ahead. Declutter thoroughly - international shipping is charged by volume, so only take what you truly need. Gather important documents, notify relevant authorities of your move, and book your survey with us as early as possible."
      },
      {
        question: "What about electrical appliances and voltage differences?",
        answer: "Many countries use different voltages and plug types. Some appliances (especially those with motors or heating elements) may not work abroad even with an adapter. We recommend checking compatibility before shipping large appliances - it may be more economical to buy new locally."
      },
      {
        question: "Do you offer unpacking and setup at the destination?",
        answer: "Yes. Our destination partners can unpack your boxes, place furniture, remove all packing materials, and help you settle in. This service is especially valuable when you arrive in a new country and want to feel at home quickly."
      },
      {
        question: "How far in advance should I book an international removal?",
        answer: "We recommend 8–12 weeks for sea freight and 2–4 weeks for air freight. This allows time for the survey, packing, documentation, and shipping schedules. Peak seasons (summer, Christmas) may require earlier booking."
      },
      {
        question: "Can I ship plants internationally?",
        answer: "Most countries have strict phytosanitary regulations that make shipping live plants very difficult or impossible. Some countries require inspection certificates, quarantine periods, or outright prohibit plant imports. We recommend checking destination rules before planning to ship plants."
      },
      {
        question: "Do you assist with visa or immigration paperwork?",
        answer: "We do not provide immigration advice, but we can connect you with trusted immigration consultants and relocation specialists. We focus on what we do best - getting your belongings there safely - while our partners handle the administrative side."
      },
      {
        question: "What is a T1 transit document?",
        answer: "A T1 document is a customs transit declaration used when goods pass through EU countries en route to a non-EU destination (or vice versa). It ensures goods are not subject to duties in transit countries. We handle all T1 documentation as part of our service."
      },
      {
        question: "What is groupage and how does it work?",
        answer: "Groupage means sharing a shipping container with other customers' goods heading to the same destination. Your items are securely loaded, separated, and inventoried. It is significantly cheaper than a full container and ideal for smaller shipments or single-room moves."
      },
      {
        question: "What about quarantine regulations at the destination?",
        answer: "Countries like Australia and New Zealand have strict biosecurity rules. Wooden items, outdoor furniture, and sporting equipment may need fumigation or heat treatment. We ensure all items comply with destination quarantine requirements before shipping."
      }
    ]
  }
];

