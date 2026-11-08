export interface FilmProject {
  id: string;
  title: string;
  bengaliTitle?: string;
  tagline: string;
  year: number;
  genre: string;
  director: string;
  manager?: string;
  leadCast: string[];
  releaseDate: string;
  synopsis: string;
  posterImage: string;
  stillImages: string[];
  slideImage: string;
  trailerUrl?: string;
  status: 'Released' | 'Upcoming' | 'In Production';
  specs: {
    aspectRatio: string;
    camera: string;
    sound: string;
    runtime?: string;
  };
  role: string;
}

export interface EcosystemBrand {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  deliverables: string[];
  metrics: string;
  logoText: string;
  color: string;
  slideImage?: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  nickname?: string;
  industry: string;
  role: string;
  knownFor: string;
  image: string;
  category: 'Actor' | 'Director' | 'TV Personality' | 'Model';
  achievements: string[];
}

export interface ClientPartner {
  id: string;
  name: string;
  sector: string;
  tagline?: string;
  logoBg?: string;
}

export interface CaseStudyData {
  clientName: string;
  industry: string;
  challenge: string;
  strategy: string;
  period: string;
  beforeStats: {
    views: string;
    viewers: string;
    interactions: string;
    linkClicks: string;
    visits: string;
    followers: string;
  };
  afterStats: {
    views: string;
    viewers: string;
    interactions: string;
    linkClicks: string;
    visits: string;
    followers: string;
  };
  growthRate: {
    views: string;
    viewers: string;
    linkClicks: string;
    interactions: string;
  };
  foodStills: string[];
  slideImage: string;
}

export type PageTab = 'showreel' | 'films' | 'ecosystem' | 'talent' | 'events' | 'growth' | 'contact';
