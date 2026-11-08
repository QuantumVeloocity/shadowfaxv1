import { FilmProject, EcosystemBrand, TalentProfile, ClientPartner, CaseStudyData } from '../types/film';

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: 'doctor-bakshi',
    title: 'DOCTOR BAKSHI',
    tagline: 'Vigilante Justice Beyond The Scalpel',
    year: 2023,
    genre: 'Medical Crime-Thriller',
    director: 'Saptaswa Basu',
    manager: 'Dipanjaan Majumder (Saptaswa Basu)',
    leadCast: [
      'Parambrata Chattopadhyay (as Dr. Bakshi)',
      'Subhashree Ganguly (as Mrinalini)',
      'Bonny Sengupta (as Aditya Mukherjee)'
    ],
    releaseDate: 'January 20, 2023',
    synopsis: 'Serving as an explosive spin-off to the 2020 film Pratidwandi, the story follows travel writer Mrinalini, who becomes entangled in a high-profile murder mystery at a secluded luxury resort, leading the vigilante Dr. Bakshi to intervene and ruthlessly expose high-level medical malpractice and institutional corruption.',
    posterImage: '/slides/page_07.jpg',
    stillImages: [
      '/slides/page_05.jpg',
      '/slides/page_06.jpg',
      '/slides/page_07.jpg'
    ],
    slideImage: '/slides/page_07.jpg',
    status: 'Released',
    specs: {
      aspectRatio: '2.39:1 Anamorphic Widescreen',
      camera: 'ARRI Alexa Mini LF / Cooke Anamorphic /i',
      sound: 'Dolby Atmos 7.1 Cinematic Surround',
      runtime: '134 Minutes'
    },
    role: 'Theatrical Production & Associated Release with Roll Camera Action & SMV'
  },
  {
    id: 'jotugriho',
    title: 'JOTUGRIHO',
    bengaliTitle: 'জতুগৃহ',
    tagline: 'Some Secrets Are Buried In The Fog',
    year: 2022,
    genre: 'Psychological Horror-Thriller',
    director: 'Saptaswa Basu',
    manager: 'Dipanjan Majumder (Saptaswa Basu)',
    leadCast: [
      'Bonny Sengupta (as Rehan)',
      'Parambrata Chattopadhyay',
      'Paayel Sarkar',
      'Anshu Bach'
    ],
    releaseDate: 'October 25, 2022',
    synopsis: 'Follows Rehan, an urban executive who takes a management assignment at an isolated hotel shrouded in the chilling mist of a North Bengal hill town. He soon uncovers spine-chilling paranormal occurrences, ancient folklore, and buried local secrets tied to an eccentric reclusive woman and an enigmatic local priest.',
    posterImage: '/slides/page_08.jpg',
    stillImages: [
      '/slides/page_08.jpg',
      '/slides/page_06.jpg',
      '/slides/page_05.jpg'
    ],
    slideImage: '/slides/page_08.jpg',
    status: 'Released',
    specs: {
      aspectRatio: '2.39:1 Cinematic Scope',
      camera: 'RED Monstro 8K VV / Master Primes',
      sound: '5.1 DTS Master Audio',
      runtime: '122 Minutes'
    },
    role: 'Co-Production & Theatrical Campaign in Collaboration with Nexgen Ventures'
  },
  {
    id: 'shubho-bijoya',
    title: 'SHUBHO BIJOYA',
    bengaliTitle: 'শুভ বিজয়া',
    tagline: 'When Ancestral Walls Echo Forgotten Bonds',
    year: 2022,
    genre: 'Family Drama / Emotional Odyssey',
    director: 'Rohan Sen',
    leadCast: [
      'Kaushik Ganguly',
      'Churni Ganguly',
      'Bonny Sengupta',
      'Koushani Mukherjee',
      'Devtanu'
    ],
    releaseDate: 'December 2, 2022',
    synopsis: 'Centered around an estranged, fragmented joint family who reunites in their historic North Kolkata ancestral mansion during the grand festivities of Durga Puja. As festival dhak beats echo, old rivalries, past grievances, emotional distance, and unforeseen medical crises push them to confront what truly binds them together.',
    posterImage: '/slides/page_09.jpg',
    stillImages: [
      '/slides/page_09.jpg',
      '/slides/page_05.jpg',
      '/slides/page_10.jpg'
    ],
    slideImage: '/slides/page_09.jpg',
    status: 'Released',
    specs: {
      aspectRatio: '1.85:1 Academy Flat',
      camera: 'Sony FX9 / Zeiss Supreme Radiance',
      sound: 'Dolby Digital 5.1',
      runtime: '128 Minutes'
    },
    role: 'Personal PR & Celebrity Image Strategy for Bonny Sengupta, Koushani Mukherjee & Devtanu'
  },
  {
    id: 'supermodel-india',
    title: 'SUPERMODEL INDIA',
    tagline: 'Beauty × Brains × Survival in Goa',
    year: 2024,
    genre: 'Reality Show × Elite Fashion Pageant',
    director: 'Creative Direction: Shadowfax & MCA',
    leadCast: [
      'Mr. Thakur Anoop Singh (Celebrity Actor & Host)',
      'India’s Top Handpicked Runway Finalists'
    ],
    releaseDate: 'Coming Soon // Season Premiere',
    synopsis: 'A groundbreaking new-generation reality television format that marries high fashion with intense psychological challenges, physical endurance tests, and cutthroat runway mind games. Filmed along the dramatic shores and luxury estates of Goa, contestants endure rigorous mentorship to battle for the ultimate national crown.',
    posterImage: '/slides/page_16.jpg',
    stillImages: [
      '/slides/page_16.jpg',
      '/slides/page_11.jpg',
      '/slides/page_12.jpg'
    ],
    slideImage: '/slides/page_16.jpg',
    status: 'Upcoming',
    specs: {
      aspectRatio: '16:9 4K HDR Broadcast',
      camera: 'Multi-Cam ARRI & FX6 Rig / Drone Cine',
      sound: 'Broadcast 5.1 Surround',
      runtime: 'Multi-Episode Series'
    },
    role: 'Lead Production House, Celebrity Onboarding & Global Format Licensing'
  }
];

export const ECOSYSTEM_BRANDS: EcosystemBrand[] = [
  {
    id: 'shadowfaxfilms',
    name: 'SHADOWFAXFILMS',
    category: 'Flagship Production & Creative Marketing',
    headline: 'Cinematic Storytelling Crafted To Build Iconic Brands',
    description: 'Our flagship creative powerhouse specializing in brand films, theatrical motion pictures, high-impact TV commercials, high-converting social campaigns, food & hospitality content, corporate branding, photography, videography, and celebrity influencer collaborations.',
    deliverables: [
      'Theatrical Feature Films & Co-Productions',
      'High-Concept Television Commercials (TVCs)',
      'Digital Narrative Series & Brand Documentaries',
      'Food, Beverage & Hospitality Visual Campaigns',
      'Omnichannel Creative Strategy & Direction'
    ],
    metrics: 'Over 12M+ combined digital impressions and 3 theatrical releases',
    logoText: 'SHADOWFAX FILMS',
    color: '#e50914',
    slideImage: '/slides/page_01.jpg'
  },
  {
    id: 'mca-production',
    name: 'MCA PRODUCTION',
    category: 'Live Events, Pageants & Celebrity Management',
    headline: 'The Foundation of Large-Scale Entertainment & Runway Spectacles',
    description: 'The foundation of our creative journey, backed by extensive industry authority in organizing large-scale fashion shows, beauty pageants, entertainment award ceremonies, celebrity guest management, and media productions across major Indian metropolitan cities.',
    deliverables: [
      'Miss Supermodel India & National Beauty Pageants',
      'Multi-City Runway Shows & Fashion Weeks',
      'A-List Celebrity Guest Management & Logistics',
      'Live Stage Production, Lighting & Audio Engineering',
      'VIP Media Coverage & Press Broadcast Coordination'
    ],
    metrics: '50+ Mega runway events executed across Mumbai, Delhi, Kolkata & Goa',
    logoText: 'MCA PRODUCTION EVENT COMPANY',
    color: '#ef4444',
    slideImage: '/slides/page_10.jpg'
  },
  {
    id: 'red24-media',
    name: 'RED24 MEDIA',
    category: 'Performance Digital Growth & Paid Acquisition',
    headline: 'Data-Driven Marketing Engineered For Measurable Lead Velocity',
    description: 'A performance-driven digital marketing agency combining data analytics with creative campaigns. Providing end-to-end social media growth, Meta Ads architecture, Google Ads PPC, full-funnel brand strategy, programmatic SEO, and lead generation machines.',
    deliverables: [
      'Meta (Instagram / Facebook) High-ROAS Ad Campaigns',
      'Google Search & YouTube Performance Marketing',
      'End-to-End Content Strategy & Social Calendar',
      'Technical Search Engine Optimization (SEO)',
      'High-Intent Lead Generation & CRM Integration'
    ],
    metrics: 'Up to +1100% verified engagement surges and sub-market CPL delivery',
    logoText: 'RED 24 MEDIA',
    color: '#dc2626',
    slideImage: '/slides/page_13.jpg'
  },
  {
    id: 'red24-studios',
    name: 'RED24 STUDIOS',
    category: 'Commercial Photography & Multi-Cam Studio',
    headline: 'Ultra-High-Definition Visual Capture & Podcast Spaces',
    description: 'A premium creative studio delivering high-fashion commercial photography, cinema-grade videography, multi-camera podcast production, product packaging photography, model portfolio lookbooks, and corporate media suites.',
    deliverables: [
      'Fashion Editorial & Haute Couture Photography',
      '4K Multi-Microphone Acoustic Podcast Suite',
      'Product & Commercial Commercial Lookbooks',
      'Aspirant Model Portfolios & Actor Audition Reels',
      'Post-Production, Color Grading & Sound Master'
    ],
    metrics: 'Over 500+ commercial shoots and portfolio sessions completed',
    logoText: 'RED 24 STUDIOS',
    color: '#b91c1c',
    slideImage: '/slides/page_13.jpg'
  },
  {
    id: 'shadowfax-agency',
    name: 'SHADOWFAX MODELING & ACTING AGENCY',
    category: 'Talent Management & Artist Representation',
    headline: 'Bridging Emerging Stars With Film Directors & Global Brands',
    description: 'A premier artist management platform connecting professional models, established film actors, top-tier reality influencers, and creative technicians with top commercial brands, OTT web series, runway shows, print ads, and prime film auditions.',
    deliverables: [
      'Exclusive Actor & Model Talent Representation',
      'Casting Direction for Feature Films & TVCs',
      'Influencer Campaign Matching & Contract Negotiation',
      'Runway Model Training, Grooming & Poise Workshops',
      'Media PR, Brand Endorsement & Legal Escrow'
    ],
    metrics: '200+ Active models and television actors in casting roster',
    logoText: 'SHADOWFAX TALENT AGENCY',
    color: '#ff3344',
    slideImage: '/slides/page_15.jpg'
  }
];

export const TALENT_ROSTER: TalentProfile[] = [
  {
    id: 'prince-narula',
    name: 'Prince Narula',
    industry: 'Indian Television & Youth Icon',
    role: 'Celebrity Mentor & Reality King',
    knownFor: 'Winner of MTV Roadies, Splitsvilla, Bigg Boss 9 & Nach Baliye 9',
    image: '/public/slides/page_15.jpg',
    category: 'TV Personality',
    achievements: [
      'Only contestant in Indian reality history to win 4 consecutive major reality titles',
      'Gang leader and youth judge on MTV Roadies',
      'Over 5M+ social media reach with massive youth resonance'
    ]
  },
  {
    id: 'sourav-das',
    name: 'Sourav Das',
    nickname: 'Montu Pilot',
    industry: 'Bengali Cinema & Web Series',
    role: 'Lead Theatrical Actor',
    knownFor: 'Critically acclaimed starring role in Montu Pilot, Rudrabinar Obhishaap & Cinema Box Office Hits',
    image: '/public/slides/page_15.jpg',
    category: 'Actor',
    achievements: [
      'Celebrated for complex, gritty psychological performances in Eastern cinema',
      'Frequent collaborator across television, web OTT, and commercial films'
    ]
  },
  {
    id: 'saptaswa-basu',
    name: 'Director Saptaswa Basu',
    industry: 'Bengali Feature Film Industry',
    role: 'Feature Film Director & Visionary',
    knownFor: 'Director of Doctor Bakshi (2023), Jotugriho (2022), Pratidwandi (2020)',
    image: '/public/slides/page_15.jpg',
    category: 'Director',
    achievements: [
      'Pioneer of new-age thriller and psychological noir cinema in Tollywood',
      'Managed under Dipanjaan Majumder in partnership with Shadowfax Films'
    ]
  },
  {
    id: 'aditi-rajput',
    name: 'Aditi Rajput',
    industry: 'Fashion, Lifestyle & Television',
    role: 'Supermodel & Digital Influencer',
    knownFor: 'Winner of MTV Splitsvilla 13 & Premier Runway Showstopper',
    image: '/public/slides/page_15.jpg',
    category: 'Model',
    achievements: [
      'MTV Splitsvilla 13 Championship title holder',
      'Showstopper for prominent Indian fashion designers and national campaigns'
    ]
  },
  {
    id: 'vyoumesh-koul',
    name: 'Vyoumesh Koul',
    industry: 'Television & Fitness Modeling',
    role: 'Reality Star & Fitness Personality',
    knownFor: 'Key Contestant on MTV Splitsvilla 13 & MTV Roadies',
    image: '/public/slides/page_15.jpg',
    category: 'TV Personality',
    achievements: [
      'High-profile television presence and national commercial endorsements',
      'Runway ambassador for luxury athletic and streetwear labels'
    ]
  },
  {
    id: 'pallabi-yadav',
    name: 'Pallabi Yadav',
    industry: 'Indian Television & Runway',
    role: 'Model & Television Personality',
    knownFor: 'MTV Roadies finalist and prominent ramp model',
    image: '/public/slides/page_15.jpg',
    category: 'Model',
    achievements: [
      'Prominent ramp model across luxury fashion weeks',
      'Endorsed by leading youth apparel brands'
    ]
  },
  {
    id: 'sritama-dey',
    name: 'Actress Sritama Dey',
    industry: 'Bengali Film & OTT Industry',
    role: 'Leading Film Actress',
    knownFor: 'Feature film Shaheber Cutlet and top Bengali entertainment serials',
    image: '/public/slides/page_15.jpg',
    category: 'Actor',
    achievements: [
      'Breakout star in contemporary Bengali cinema',
      'Onboarded talent represented through Shadowfax Films talent network'
    ]
  },
  {
    id: 'thakur-anoop-singh',
    name: 'Thakur Anoop Singh',
    industry: 'Indian Cinema (Bollywood & South) / International Fitness',
    role: 'Star Actor & World Fitness Champion',
    knownFor: 'Dhruva, Singam 3, Commando 2, Mahabharat & Host of Supermodel India',
    image: '/public/slides/page_16.jpg',
    category: 'Actor',
    achievements: [
      'Mr. World Gold Medalist in Men’s Fitness Physique',
      'Headlining actor onboarded for upcoming Goa reality show "Supermodel India"'
    ]
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: 'acropolis', name: 'Acropolis Mall', sector: 'Retail & Commercial Real Estate', tagline: 'A Venture by Merlin Group' },
  { id: 'great-eastern', name: 'Great Eastern', sector: 'Consumer Electronics & Appliances', tagline: 'We Serve You Best' },
  { id: 'bhowmick', name: 'Bhowmick Traders', sector: 'Home Living & Architecture', tagline: 'A Complete Furniture Hub' },
  { id: 'aami-bangali', name: 'Aami Bangali', sector: 'Fine Dining & Hospitality', tagline: 'Authentic Bengali Cuisine' },
  { id: 'disha-arts', name: 'Disha Performing Arts', sector: 'Film & Theatre Education', tagline: 'Acting Academy of Excellence' },
  { id: 'bm-grand', name: 'BM Grand Hotel & Resort', sector: 'Luxury Hospitality & Resorts', tagline: 'Premier Destination Stays' },
  { id: 'glamour-world', name: 'Glamour World', sector: 'Wellness & Cosmetics', tagline: 'Ayurvedic Beauty Care' },
  { id: 'monmohini', name: 'Monmohini', sector: 'Haute Saree & Fashion', tagline: 'Kolkata’s Renowned Saree House' },
  { id: 'melu', name: 'Melu', sector: 'Dairy & Confectionery', tagline: 'Mishti Doi Unlimited' },
  { id: 'mughal-e-raj', name: 'Mughal-e-Raj', sector: 'Heritage Dining', tagline: 'Mehfil-e-Shahi Dawat' },
  { id: 'ms-cooling', name: 'MS Cooling Solution', sector: 'Industrial HVAC & Cooling', tagline: 'Engineering Precision' },
  { id: 'maa-automobile', name: 'Maa Automobile', sector: 'Eco Mobility & Automotive', tagline: 'Steps Towards Greenery' },
  { id: 'chai-melody', name: 'Chai with Melody', sector: 'Café & Lifestyle Culture', tagline: 'Brews & Beats' }
];

export const CASE_STUDY: CaseStudyData = {
  clientName: 'Aami Bangali Restaurant',
  industry: 'Authentic Regional Hospitality & Culinary',
  challenge: 'Low organic online footfall, stagnant Facebook & Instagram link clicks, and high cost-per-lead for catering and dine-in reservations.',
  strategy: 'Shadowfax Films produced 4K cinematic culinary reels highlighting sizzle shots of traditional Bengali delicacies, paired with RED24 Media targeted geo-fencing and hyper-localized Meta Ads optimization.',
  period: '30-Day Campaign Window (May 1 – Jun 2 vs Jun 2 – Jul 2)',
  beforeStats: {
    views: '7.9K',
    viewers: '5.4K',
    interactions: '77',
    linkClicks: '24',
    visits: '235',
    followers: '10'
  },
  afterStats: {
    views: '87.2K',
    viewers: '50.5K',
    interactions: '231',
    linkClicks: '231',
    visits: '439',
    followers: '15'
  },
  growthRate: {
    views: '+1,104%',
    viewers: '+835%',
    linkClicks: '+862%',
    interactions: '+200%'
  },
  foodStills: [
    '/slides/page_17.jpg',
    '/slides/page_04.jpg',
    '/slides/page_14.jpg'
  ],
  slideImage: '/slides/page_17.jpg'
};

export const CORE_METRICS = [
  { label: 'Higher Quality Traffic', value: '11x', sub: 'Targeted visual engagement' },
  { label: 'Lower Cost Per Lead', value: '-48%', sub: 'High conversion ad funnels' },
  { label: 'Return On Ad Spend', value: '4.8x', sub: 'Calculated ROAS ceiling' },
  { label: 'Theatrical Box Office', value: '3 Hits', sub: 'Pratidwandi universe & thrillers' },
  { label: 'Associated Brands', value: '05', sub: 'Single unified roof ecosystem' },
  { label: 'Celebrity Network', value: '200+', sub: 'Bollywood, Tollywood & TV stars' }
];

export const MARQUEE_ITEMS = [
  'SHADOWFAX FILMS',
  'DOCTOR BAKSHI (2023)',
  'JOTUGRIHO (2022)',
  'SHUBHO BIJOYA',
  'SUPERMODEL INDIA IN GOA',
  'MCA PRODUCTION',
  'RED24 MEDIA',
  'RED24 STUDIOS',
  'TALENT MANAGEMENT',
  'CINEMATIC STORYTELLING',
  'KOLKATA · MUMBAI · GOA'
];
