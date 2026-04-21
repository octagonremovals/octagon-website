export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  deliveryTime: string;
  euMember: boolean;
  movesCompleted: number;

  seo: {
    title: string;
    metaDescription: string;
    h1: string;
  };

  hero: {
    headline: string;
    subheading: string;
  };

  costOfLiving: {
    headline: string;
    intro: string;
    stats: Array<{
      label: string;
      value: string;
      note: string;
    }>;
    note: string;
  };

  bestTimeToMove: {
    headline: string;
    content: string;
    avoidMonths: string[];
    bestMonths: string[];
  };

  preMoveChecklist: {
    headline: string;
    items: Array<{
      task: string;
      detail: string;
      timing: string;
    }>;
  };

  customs: {
    headline: string;
    euStatus: string;
    torRelief: {
      available: boolean;
      explanation: string;
    };
    requiredDocuments: string[];
    timeline: string;
    incompleteDocsRisk: string;
    countrySpecific: string[];
    customsClearanceTime: string;
    prohibitedItems: string;
    partnerNote: string;
  };

  whatIsIncluded: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;

  responsibilitySplit: {
    headline: string;
    octagonHandles: string[];
    youHandle: string[];
  };

  moveTimeline: {
    headline: string;
    steps: Array<{
      week: string;
      title: string;
      desc: string;
    }>;
  };

  popularDestinations: Array<{
    city: string;
    region: string;
    why: string;
  }>;

  approximateCosts: {
    headline: string;
    intro: string;
    tiers: Array<{
      size: string;
      description: string;
      range: string;
      includes: string;
    }>;
    disclaimer: string;
  };

  reviews: Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
  }>;

  faqs: Array<{
    q: string;
    a: string;
  }>;
}

