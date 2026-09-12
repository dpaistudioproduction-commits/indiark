export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  synopsis?: string;
  category: "FILMS" | "WEB SERIES" | "DIGITAL" | "MUSIC" | "PRODUCTION" | "OTHER";
  projectType: string; // e.g. Feature Film, Docuseries, Web Series
  language: string;
  genre: string;
  year: number | string;
  indiarkRole: string; // e.g. "Exclusive Global OTT & Media Rights Representation", "Content Representation & Pitching"
  posterUrl: string;
  backdropUrl?: string;
  trailerUrl?: string;
  status: "Featured" | "In Representation" | "Completed";
  published: boolean;
  createdAt: string;
}

export interface ContentSubmission {
  id: string;
  createdAt: string;
  status: "NEW" | "UNDER REVIEW" | "CONTACTED" | "CLOSED";
  // Applicant
  applicantName: string;
  companyName?: string;
  designation?: string;
  email: string;
  mobile: string;
  city?: string;
  country?: string;
  website?: string;
  // Project Details
  projectName: string;
  contentType: string;
  language: string;
  genre?: string;
  duration?: string;
  yearOfProduction?: string;
  productionStatus?: string;
  synopsis: string;
  director?: string;
  producer?: string;
  cast?: string;
  trailerLink?: string;
  posterFilename?: string;
  additionalLinks?: string;
  // Rights Available
  rights: {
    ottRights: boolean;
    digitalRights: boolean;
    satelliteRights: boolean;
    musicRights: boolean;
    inFlightRights: boolean;
    dubRights: boolean;
    remakeRights: boolean;
    internationalRights: boolean;
    otherRights?: string;
  };
  territory: string;
  authorizationSigned: boolean;
  authorizationFilename?: string;
}

export interface BuyerRequirement {
  id: string;
  createdAt: string;
  status: "NEW" | "UNDER REVIEW" | "CONTACTED" | "CLOSED";
  // Company
  companyName: string;
  contactPerson: string;
  designation?: string;
  email: string;
  mobile?: string;
  website?: string;
  countryTerritory?: string;
  // Requirement
  contentType: string; // Movies, Web Series, Regional, Dubbed, Music, Catalogues
  languages?: string;
  genre?: string;
  numberOfTitles?: string;
  rightsRequired?: string;
  territory?: string;
  duration?: string;
  timeline?: string;
  detailedRequirement: string;
  additionalInformation?: string;
}

export interface ContactEnquiry {
  id: string;
  createdAt: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  name: string;
  company?: string;
  designation?: string;
  email: string;
  mobile?: string;
  enquiryType: "PRODUCER_PITCH" | "BUYER_REQUIREMENT" | "BUSINESS_PARTNERSHIP" | "MEDIA_EDGE_ACADEMY" | "GENERAL";
  message: string;
}
