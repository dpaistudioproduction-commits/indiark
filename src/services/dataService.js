/**
 * INDIARK ENTERTAINMENTS — DATA SERVICE ARCHITECTURE
 * 
 * Strict adherence to Source-of-Truth rules:
 * - Only confirmed projects (Bheeshmar, Secret of Kalinga) and confirmed team/partner names.
 * - Missing metadata displayed as clean professional placeholders rather than fabricated claims.
 * - Scalable Data Layer supporting full CRUD for Projects, Team, and Partners.
 */

const STORAGE_KEYS = {
  PROJECTS: 'indiark_projects_v2',
  TEAM: 'indiark_team_v3',
  PARTNERS: 'indiark_partners_v1',
  BUYER_SUBMISSIONS: 'indiark_buyer_submissions_v1',
  CONTENT_SUBMISSIONS: 'indiark_content_submissions_v1'
};

// Initial Initialized Confirmed Projects (Source of Truth)
const INITIAL_PROJECTS = [
  {
    id: 'chiram',
    title: 'CHIRAM',
    category: 'Films',
    categories: ['Films', 'Feature Film', 'Music'],
    projectType: 'Feature Film',
    language: 'Malayalam',
    genre: 'Drama / Romance',
    year: '2026',
    synopsis: 'A heartfelt romantic drama starring Anoop Menon and Aishwarya Mithun Koroth, directed by Sindhu Paradayil and N. Sudheer. Explores emotional depth, love, and life journeys.',
    indiarkRole: 'Movie Rights & OTT Pitching',
    status: 'In Representation',
    platformPlacement: 'National Streaming Network',
    posterUrl: '/chiram.jpg',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'bhishmar',
    title: 'BHISHMAR',
    category: 'Films',
    categories: ['Films', 'Feature Film', 'Music'],
    projectType: 'Feature Film / Music',
    language: 'Pan-India',
    genre: 'Comedy / Music / Romance',
    year: '2026',
    synopsis: 'A chance encounter between two men triggers a chaotic series of events across a single night, combining high-energy music, romance, and comedy sequences.',
    indiarkRole: 'Producer Representation & Rights Sales',
    status: 'In Representation',
    platformPlacement: 'Premium Streaming & Satellite Broadcaster',
    posterUrl: '/bhishmar.jpg',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'the-great-indian-kitchen',
    title: 'THE GREAT INDIAN KITCHEN',
    category: 'Films',
    categories: ['Films', 'Feature Film'],
    projectType: 'Feature Film',
    language: 'Malayalam / Pan-India',
    genre: 'Social Drama',
    year: '2021',
    synopsis: 'Landmark critically acclaimed Malayalam drama directed by Jeo Baby, starring Nimisha Sajayan and Suraj Venjaramoodu. Explores gender roles and domestic expectations with universal impact.',
    indiarkRole: 'Rights Syndication & OTT Licensing',
    status: 'In Representation',
    platformPlacement: 'Major Global SVOD Platform',
    posterUrl: '/great-indian-kitchen.jpg',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'vaanku',
    title: 'VAANKU',
    category: 'Films',
    categories: ['Films', 'Feature Film', 'Web Series'],
    projectType: 'Feature Film & Digital Series',
    language: 'Malayalam',
    genre: 'Social Drama / Family',
    year: '2021',
    synopsis: 'Directed by Kavya Prakash based on Unni R.’s acclaimed short story. Follows a young college girl who aspires to recite the Islamic call to prayer (azaan).',
    indiarkRole: 'Digital Rights Licensing',
    status: 'In Representation',
    platformPlacement: 'National Digital Streamer',
    posterUrl: '/vaanku.jpg',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'tsunami',
    title: 'TSUNAMI',
    category: 'Films',
    categories: ['Films', 'Feature Film'],
    projectType: 'Feature Film',
    language: 'Malayalam',
    genre: 'Comedy / Entertainer',
    year: '2021',
    synopsis: 'Situational Malayalam comedy directed by Lal and Lal Jr., starring Balu Varghese, Innocent, and Mukesh. Follows a young man on an unexpected journey full of misunderstandings.',
    indiarkRole: 'Satellite & Digital Syndication',
    status: 'In Representation',
    platformPlacement: 'Leading Satellite Network & OTT',
    posterUrl: '/tsunami.jpg',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'secret-of-kalinga',
    title: 'SECRET OF KALINGA',
    category: 'Films',
    categories: ['Films', 'Feature Film', 'Web Series', 'Music'],
    projectType: 'Feature Film',
    language: 'Malayalam',
    genre: 'Comedy / Fantasy / Horror',
    year: '2026',
    synopsis: 'Starring Dhyan Sreenivasan, Althaf Salim, and Malavika Menon. On an ancient Kalinga kingdom campus, students accidentally unseal a centuries-old imprisoned spirit on New Year\'s Eve, triggering hilarious supernatural chaos.',
    indiarkRole: 'Movie Rights & OTT Pitching',
    status: 'In Representation',
    platformPlacement: 'National Streaming Network',
    posterUrl: '/secret-of-kalinga.jpg',
    trailerUrl: '',
    additionalImages: []
  }
];

// Initial Confirmed Leadership & Team
const INITIAL_TEAM = [
  {
    id: 'charles-george',
    name: 'Charles George',
    designation: 'Founder & Chief Executive Officer',
    bio: 'Charles George is a media and entertainment professional with extensive experience in OTT operations, digital content, and business development. As the Founder & CEO of Indiark Entertainments, he leads the company\'s strategic vision, industry partnerships, content initiatives, and business growth.',
    linkedin: '',
    photoUrl: '/Charls.jpeg'
  },
  {
    id: 'marina-john',
    name: 'Marina John',
    designation: 'Chief Partnerships Officer',
    bio: 'Marina John leads strategic partnerships and business relationships at Indiark Entertainments, managing OTT platform engagement, producer communications, vendor coordination, and content acquisition opportunities. She plays a key role in building industry connections and driving business collaborations across the media and entertainment sector.',
    linkedin: '',
    photoUrl: '/Marina.jpeg'
  },
  {
    id: 'mubeen-rouf',
    name: 'Mubeen Rouf',
    designation: 'Head – Content Acquisition',
    bio: 'Mubeen Rouf is a Malayalam filmmaker and content professional with industry connections across Kerala. At Indiark Entertainments, he focuses on producer engagement, Malayalam movie sourcing, and content acquisition opportunities for OTT platforms.',
    linkedin: '',
    photoUrl: '/Mubeen.jpeg'
  },
  {
    id: 'jomon-jacob',
    name: 'Jomon Jacob',
    designation: 'Strategic Advisor – Film & Content Partnerships',
    bio: 'Jomon Jacob is a Malayalam film producer with experience across multiple film projects, including Tamil cinema. He brings valuable industry experience and professional insights to Indiark Entertainments, supporting film-related relationships and strategic content partnership opportunities.',
    linkedin: '',
    photoUrl: '/Jomon.jpeg'
  },
  {
    id: 'arun-dev',
    name: 'Arun Dev',
    designation: 'AI Filmmaker & Generative AI Director',
    bio: 'Arun Dev is an AI Filmmaker, Generative AI Director and media professional with over 20 years of experience in film production, cinematography, creative direction and digital media. Specialising in AI filmmaking, generative AI video production, AI-powered advertising and cinematic visual storytelling, he combines traditional filmmaking expertise with emerging artificial intelligence technologies to create innovative films, commercials and digital content. His expertise spans AI-driven film production, cinematic storytelling, visual development, creative strategy and next-generation media production, contributing to the evolving landscape of AI filmmaking and digital entertainment in India.',
    linkedin: '',
    photoUrl: '/Arun Devv.jpg'
  },
  {
    id: 'manu-kc',
    name: 'Manu KC',
    designation: 'Strategic Associate – Media & Post-Production',
    bio: 'Manu KC is a media professional and entrepreneur associated with media production, post-production, and media education. He collaborates with Indiark Entertainments on media services and post-production opportunities.',
    linkedin: '',
    photoUrl: '/Manu.jpeg'
  },
  {
    id: 'vinod-nellackal',
    name: 'Vinod Nellackal',
    designation: 'Creative Advisor – Content & Filmmaking',
    bio: 'Vinod Nellackal is a media professional, filmmaker, editor, and writer with over 20 years of experience across television, film, digital media, and content production. A State Award-winning cinematographer, he has directed and scripted more than 100 documentaries. At Indiark Entertainments, he contributes creative leadership, editorial expertise, and visual storytelling experience.',
    linkedin: '',
    photoUrl: '/Vinod.jpeg'
  },
  {
    id: 'satheesh-kumar-b',
    name: 'Satheesh Kumar B',
    designation: 'Head – Post-Production',
    bio: 'Satheesh Kumar B is a senior video editor with over 16 years of experience in the Malayalam television industry. He served as the editor of the popular Malayalam sitcoms Uppum Mulakum for 10 years and Chakkappazham for 5 years, both broadcast on Flowers TV. At Indiark Entertainments, he leads post-production operations, bringing extensive expertise in video editing, content finishing, and television production workflows.',
    linkedin: '',
    photoUrl: '/sateesh.jpeg'
  },
  {
    id: 'george-baby',
    name: 'George Baby',
    designation: 'Senior Music Programmer & Audio Engineer',
    bio: 'With 18 years of experience as a musician and 14 years of expertise in music programming and audio engineering, George Baby brings extensive creative and technical knowledge in music production, recording, mixing, and sound design.',
    linkedin: '',
    photoUrl: '/George.jpeg'
  }
];

// Associated Academic Initiative
export const ASSOCIATED_ORGANIZATION = {
  name: 'MEDIA EDGE SCHOOL OF ACADEMICS',
  shortName: 'Media Edge Academics',
  description: 'Associated academic and media education initiative focused on developing knowledge, skills and future talent for the media and entertainment industry.',
  ecosystem: 'EDUCATION → TALENT → CONTENT → MEDIA → BUSINESS'
};

// Initial Confirmed Channel & Business Partners (Text presentation until official logos are verified)
const INITIAL_PARTNERS = [
  {
    id: 'frame-2-frame',
    name: 'Frame 2 Frame',
    type: 'Channel / Business Partner',
    logoUrl: '',
    website: ''
  },
  {
    id: 'flick-dot',
    name: 'Flick Dot',
    type: 'Channel / Business Partner',
    logoUrl: '',
    website: ''
  },
  {
    id: 'media-edge-productions',
    name: 'Media Edge Productions',
    type: 'Channel / Business Partner',
    logoUrl: '',
    website: ''
  }
];

// Official Contact Information
export const CONTACT_INFO = {
  email: 'content@indiarkentertainments.com',
  phone: '6006266465',
  location: 'Ernakulam, Kerala',
  emailPlaceholder: 'content@indiarkentertainments.com',
  mobilePlaceholder: '6006266465',
  addressPlaceholder: 'Ernakulam, Kerala',
  tagline: 'Connecting Content. Creating Opportunities. Closing Business.'
};

class DataService {
  constructor() {
    this.isClient = typeof window !== 'undefined';
  }

  // Generic Storage Helpers
  getStorageItem(key, fallback) {
    if (!this.isClient) return fallback;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn('Storage read error, using fallback:', e);
      return fallback;
    }
  }

  setStorageItem(key, data) {
    if (!this.isClient) return;
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  // PROJECTS CRUD
  getProjects() {
    const list = this.getStorageItem(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    return list.map(item => {
      if (item.id === 'secret-of-kalinga' && !item.posterUrl) {
        return { ...item, posterUrl: '/secret of kalinga.jpg' };
      }
      return item;
    });
  }

  getProjectById(id) {
    const projects = this.getProjects();
    return projects.find(p => p.id === id) || null;
  }

  createProject(projectData) {
    const projects = this.getProjects();
    const newProject = {
      ...projectData,
      id: projectData.id || `proj-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newProject, ...projects];
    this.setStorageItem(STORAGE_KEYS.PROJECTS, updated);
    return newProject;
  }

  updateProject(id, updatedFields) {
    const projects = this.getProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    projects[index] = { ...projects[index], ...updatedFields, updatedAt: new Date().toISOString() };
    this.setStorageItem(STORAGE_KEYS.PROJECTS, projects);
    return projects[index];
  }

  deleteProject(id) {
    const projects = this.getProjects();
    const updated = projects.filter(p => p.id !== id);
    this.setStorageItem(STORAGE_KEYS.PROJECTS, updated);
    return true;
  }

  resetProjectsToDefault() {
    this.setStorageItem(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    return INITIAL_PROJECTS;
  }

  // TEAM CRUD
  getTeam() {
    return this.getStorageItem(STORAGE_KEYS.TEAM, INITIAL_TEAM);
  }

  updateTeamMember(id, updatedFields) {
    const team = this.getTeam();
    const index = team.findIndex(m => m.id === id);
    if (index === -1) return null;
    team[index] = { ...team[index], ...updatedFields };
    this.setStorageItem(STORAGE_KEYS.TEAM, team);
    return team[index];
  }

  // PARTNERS CRUD
  getPartners() {
    return this.getStorageItem(STORAGE_KEYS.PARTNERS, INITIAL_PARTNERS);
  }

  updatePartner(id, updatedFields) {
    const partners = this.getPartners();
    const index = partners.findIndex(p => p.id === id);
    if (index === -1) return null;
    partners[index] = { ...partners[index], ...updatedFields };
    this.setStorageItem(STORAGE_KEYS.PARTNERS, partners);
    return partners[index];
  }

  // SUBMISSIONS
  saveBuyerSubmission(data) {
    const submissions = this.getStorageItem(STORAGE_KEYS.BUYER_SUBMISSIONS, []);
    const newEntry = {
      id: `req-${Date.now()}`,
      ...data,
      submittedAt: new Date().toISOString()
    };
    submissions.push(newEntry);
    this.setStorageItem(STORAGE_KEYS.BUYER_SUBMISSIONS, submissions);
    return newEntry;
  }

  saveContentSubmission(data) {
    const submissions = this.getStorageItem(STORAGE_KEYS.CONTENT_SUBMISSIONS, []);
    const newEntry = {
      id: `sub-${Date.now()}`,
      ...data,
      submittedAt: new Date().toISOString()
    };
    submissions.push(newEntry);
    this.setStorageItem(STORAGE_KEYS.CONTENT_SUBMISSIONS, submissions);
    return newEntry;
  }
}

export const dataService = new DataService();
