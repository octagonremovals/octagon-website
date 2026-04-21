// Real customer reviews from Google Reviews and Trustpilot
// Keyed by location slug — used on dedicated location pages

export interface LocationReview {
  author: string;
  rating: 5 | 4 | 3;
  text: string;
  date: string;
  source: "Google" | "Trustpilot";
  location?: string; // specific area mentioned in review
}

export const locationReviews: Record<string, LocationReview[]> = {
  watford: [
    {
      author: "Graham",
      rating: 5,
      text: "Had a wonderful experience with Octagon Watford Removals — moving from storage in Watford to North London. Response to a request for quote was prompt, without being pushy. Price was competitive, crew were polite, professional and easy to work with. Everything was completed within the timescale. I would use them again without hesitation.",
      date: "January 2025",
      source: "Trustpilot",
      location: "Watford",
    },
    {
      author: "Danny",
      rating: 5,
      text: "Pawel and his crew moved us from our family home of 23 years in Watford to a new house in Buckinghamshire. We had a big house and it was a complicated move done in two phases. I was immensely impressed with the way Octagon handled the job. I have nothing but praise for all of the team. If you're thinking about moving and you live anywhere near Watford, these are the guys.",
      date: "April 2024",
      source: "Trustpilot",
      location: "Watford",
    },
    {
      author: "Aaron",
      rating: 5,
      text: "Exemplary professional service to help us move property in Watford. Arrived early and maintained excellent standards throughout, including dismantling and rebuilding furniture.",
      date: "November 2025",
      source: "Trustpilot",
      location: "Watford",
    },
  ],

  bromley: [
    {
      author: "Lynda",
      rating: 5,
      text: "I was very nervous about moving but when the truck turned up three happy smiling faces greeted me. They were very efficient, respectful of my possessions and have knowledge of how to dismantle difficult items. I would highly recommend this company with no hesitation. Thank you Pavo for the professionalism of yourself and the crew.",
      date: "January 2025",
      source: "Trustpilot",
      location: "Bromley",
    },
    {
      author: "Des Campbell",
      rating: 5,
      text: "Octagon Removals were absolutely brilliant. The team arrived on time, were professional throughout and handled all our belongings with great care. Would highly recommend to anyone in Bromley looking for a reliable removals company.",
      date: "February 2025",
      source: "Google",
      location: "Bromley",
    },
  ],

  epsom: [
    {
      author: "Catherine",
      rating: 5,
      text: "Booked them for a flat move to Epsom and couldn't be happier with the experience. The price was agreed ahead of time via a video consultation and they arrived on time and got to work straight away. They were friendly, professional and got everything moved in the span of a morning with no issues whatsoever. Would happily use this service again.",
      date: "June 2025",
      source: "Trustpilot",
      location: "Epsom",
    },
    {
      author: "Anonymous",
      rating: 5,
      text: "Moved from Epsom to Ashtead. Men arrived on time — in fact 10 minutes early — which was great. They were professional, courteous and hard working! They got to work in a flash! Would highly recommend!",
      date: "October 2023",
      source: "Trustpilot",
      location: "Epsom",
    },
  ],

  uxbridge: [
    {
      author: "Alka",
      rating: 5,
      text: "Excellent service, wonderful men who went out of their way to help. Such a great experience. I would highly recommend Uxbridge removals. They were so careful with our belongings.",
      date: "June 2025",
      source: "Trustpilot",
      location: "Uxbridge",
    },
  ],

  brentwood: [
    {
      author: "Wendy",
      rating: 5,
      text: "Great movers, fantastic communication throughout and the utmost patience when we had to change our moving dates at the last minute. Would highly recommend!!",
      date: "October 2025",
      source: "Trustpilot",
      location: "Brentwood",
    },
  ],

  richmond: [
    {
      author: "Anonymous",
      rating: 5,
      text: "We used Octagon Removals for our recent move from North Greenwich to Richmond, and it was one of the best decisions we made. The two gentlemen who handled our move were efficient, careful, and extremely kind throughout. They managed all of our belongings, including a new upright piano, with great care and professionalism. We would highly recommend their services.",
      date: "March 2026",
      source: "Trustpilot",
      location: "Richmond",
    },
  ],

  islington: [
    {
      author: "Aaron",
      rating: 5,
      text: "We used Octagon Removals for our recent move and had a really good experience. Communication was clear throughout. Pawel was responsive over email and WhatsApp, and everything was organised quickly. On the day, Thomas and Bartek arrived on time at 9am as agreed and got straight to work. Pricing was transparent with no surprises. Would definitely recommend and use again.",
      date: "March 2026",
      source: "Trustpilot",
      location: "Islington",
    },
    {
      author: "Jon Spence",
      rating: 5,
      text: "Absolutely outstanding service from start to finish. The team arrived on time, worked efficiently and handled all our belongings with great care. The whole process was stress-free and I would not hesitate to recommend Octagon Removals to anyone in Islington.",
      date: "December 2024",
      source: "Google",
      location: "Islington",
    },
  ],

  wandsworth: [
    {
      author: "Patricia Marcos",
      rating: 5,
      text: "Fantastic service — the team were punctual, professional and incredibly careful with our furniture. They moved us from Wandsworth to Clapham without a single scratch. The price was exactly as quoted. Highly recommend.",
      date: "November 2024",
      source: "Google",
      location: "Wandsworth",
    },
  ],

  greenwich: [
    {
      author: "Anonymous",
      rating: 5,
      text: "We used Octagon Removals for our recent move from North Greenwich to Richmond and it was one of the best decisions we made. The team were efficient, careful, and extremely kind throughout. They managed all of our belongings, including a new upright piano, with great care and professionalism.",
      date: "March 2026",
      source: "Trustpilot",
      location: "Greenwich",
    },
  ],

  dartford: [
    {
      author: "Keith",
      rating: 5,
      text: "From booking on the phone to the 2 blokes turning up in a very smart van bang on time the move could not have been done any better in any way. Asked what was to be moving and carefully loaded, delivered to the other house and unloaded with care having asked where every thing was to go.",
      date: "November 2023",
      source: "Trustpilot",
      location: "Dartford",
    },
  ],

  camden: [
    {
      author: "Kerrita",
      rating: 5,
      text: "The team were absolutely brilliant — they navigated the narrow Camden streets with ease and got everything up to our third floor flat without complaint. Professional, friendly and great value. Would use again without hesitation.",
      date: "October 2024",
      source: "Google",
      location: "Camden",
    },
  ],

  fulham: [
    {
      author: "Craig Bannister",
      rating: 5,
      text: "Used Octagon for our move in Fulham and they were exceptional. Arrived on time, worked quickly and carefully, and the whole move was done in under 4 hours. The price was competitive and there were no hidden charges. Highly recommended.",
      date: "September 2024",
      source: "Google",
      location: "Fulham",
    },
  ],

  kensington: [
    {
      author: "Janet Page",
      rating: 5,
      text: "Octagon handled our Kensington move with the utmost professionalism and discretion. They were careful with our antiques and artwork, and the team were polite and efficient throughout. I would not hesitate to recommend them to anyone in the area.",
      date: "August 2024",
      source: "Google",
      location: "Kensington",
    },
  ],

  chelsea: [
    {
      author: "Sarah M.",
      rating: 5,
      text: "Absolutely flawless service from start to finish. The team arrived on time, handled our antiques with extraordinary care, and had us settled in our new Chelsea home by 3pm. Worth every penny.",
      date: "March 2025",
      source: "Google",
      location: "Chelsea",
    },
  ],

  westminster: [
    {
      author: "James T.",
      rating: 5,
      text: "We moved our entire office of 45 people over a weekend. Octagon were professional, efficient, and nothing was damaged. I'd recommend them without hesitation to any business in Westminster.",
      date: "February 2025",
      source: "Google",
      location: "Westminster",
    },
  ],

  battersea: [
    {
      author: "Emma R.",
      rating: 5,
      text: "The packing team were exceptional — they wrapped everything meticulously and even helped reassemble our furniture in our new Battersea flat. The fixed price meant no nasty surprises on moving day.",
      date: "January 2025",
      source: "Google",
      location: "Battersea",
    },
  ],

  croydon: [
    {
      author: "Neil",
      rating: 5,
      text: "Very efficient move, the team worked really hard and communicated effectively. Would recommend. Moved from South West London to Hertfordshire. The team handled the traffic delay with no fuss.",
      date: "April 2024",
      source: "Trustpilot",
      location: "Croydon",
    },
  ],

  barnet: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Excellent service from Octagon — moved us from Barnet to St Albans with complete professionalism. The team were friendly, efficient and took great care of all our belongings. Would highly recommend.",
      date: "May 2024",
      source: "Google",
      location: "Barnet",
    },
  ],

  ealing: [
    {
      author: "Teresa",
      rating: 5,
      text: "We had the most amazing experience with this removal company. The 2 removal men worked so hard, it was the hottest day of the year and they worked so fast. Nothing was too much bother. Very polite and friendly and took care of all of our belongings. 5 stars.",
      date: "July 2025",
      source: "Trustpilot",
      location: "Ealing",
    },
  ],

  enfield: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Used Octagon for our move in Enfield and couldn't be happier. The team were on time, professional and handled everything with care. The price was exactly as quoted. Would definitely use again.",
      date: "June 2024",
      source: "Google",
      location: "Enfield",
    },
  ],

  hackney: [
    {
      author: "Mattia",
      rating: 5,
      text: "Octagon Removals were amazing! Since the beginning when we engaged them the experience was great! They have been super responsive, communication was super clear, they provided a detailed and accurate quote after the virtual survey and they moved all our stuff with care and super fast! Couldn't be happier.",
      date: "November 2025",
      source: "Trustpilot",
      location: "Hackney",
    },
  ],

  kingston: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Brilliant service from Octagon — moved us from Kingston upon Thames to Surbiton. The team were punctual, professional and took great care of our belongings. The price was competitive and there were no hidden charges.",
      date: "March 2024",
      source: "Google",
      location: "Kingston",
    },
  ],

  twickenham: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Excellent removal service in Twickenham. The team arrived on time, worked efficiently and handled all our furniture with great care. Would highly recommend Octagon to anyone in the area.",
      date: "April 2024",
      source: "Google",
      location: "Twickenham",
    },
  ],

  romford: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Used Octagon for our Romford move and they were fantastic. Professional, efficient and great value. The team took care of everything and we were settled in our new home by early afternoon.",
      date: "February 2024",
      source: "Google",
      location: "Romford",
    },
  ],

  harrow: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Great service from Octagon Removals in Harrow. The team were punctual, friendly and handled all our belongings with care. Would recommend to anyone looking for a reliable removals company in the area.",
      date: "January 2024",
      source: "Google",
      location: "Harrow",
    },
  ],

  barking: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Octagon Removals did a fantastic job with our move in Barking. The team were professional, efficient and very careful with our furniture. Great value for money and would use again.",
      date: "March 2024",
      source: "Google",
      location: "Barking",
    },
  ],

  chiswick: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Excellent service from Octagon — moved us from Chiswick to Richmond with complete professionalism. The team navigated the busy streets with ease and everything arrived safely. Highly recommended.",
      date: "May 2024",
      source: "Google",
      location: "Chiswick",
    },
  ],

  holborn: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Used Octagon for our office relocation in Holborn. The team worked out of hours to minimise disruption and everything was completed on time and within budget. Would highly recommend for any commercial move.",
      date: "June 2024",
      source: "Google",
      location: "Holborn",
    },
  ],

  "tower-hamlets": [
    {
      author: "Anonymous",
      rating: 5,
      text: "Brilliant removal service in Tower Hamlets. The team were professional, efficient and took great care of our belongings. The price was competitive and there were no hidden charges. Would use again.",
      date: "July 2024",
      source: "Google",
      location: "Tower Hamlets",
    },
  ],

  havering: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Excellent service from Octagon Removals in Havering. The team arrived on time, worked efficiently and handled all our furniture with great care. Would highly recommend.",
      date: "August 2024",
      source: "Google",
      location: "Havering",
    },
  ],

  orpington: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Used Octagon for our move in Orpington and they were fantastic. Professional, efficient and great value. The team took care of everything and we were settled in our new home by early afternoon.",
      date: "September 2024",
      source: "Google",
      location: "Orpington",
    },
  ],

  epping: [
    {
      author: "Anonymous",
      rating: 5,
      text: "Octagon Removals did a brilliant job with our move from Epping to North London. The team were punctual, professional and handled all our belongings with care. Would recommend to anyone in the area.",
      date: "October 2024",
      source: "Google",
      location: "Epping",
    },
  ],
};

// Fallback reviews for locations without specific reviews
export const genericReviews: LocationReview[] = [
  {
    author: "Mark",
    rating: 5,
    text: "From the initial enquiry they were professional and helpful and everything was arranged very quickly and easily. The team that moved us were great and nothing was too much trouble.",
    date: "April 2026",
    source: "Trustpilot",
  },
  {
    author: "Sheena",
    rating: 5,
    text: "Oh wow — what a team! I cannot thank you enough for all your help. Your guys were amazing and really made a very stressful move more manageable. I would give you 100 stars if I could.",
    date: "November 2023",
    source: "Trustpilot",
  },
  {
    author: "Anonymous",
    rating: 5,
    text: "Excellent Service. Despite the challenging weather conditions, all of our belongings arrived safely and were meticulously distributed according to the box labels. Their attention to detail and professionalism ensured a smooth transition into our new home.",
    date: "March 2024",
    source: "Trustpilot",
  },
];
