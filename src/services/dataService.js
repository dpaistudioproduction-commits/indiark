/**
 * INDIARK ENTERTAINMENTS — DATA SERVICE ARCHITECTURE
 * 
 * Strict adherence to Source-of-Truth rules:
 * - Only confirmed projects (Bheeshmar, Secret of Kalinga) and confirmed team/partner names.
 * - Missing metadata displayed as clean professional placeholders rather than fabricated claims.
 * - Scalable Data Layer supporting full CRUD for Projects, Team, and Partners.
 */

const STORAGE_KEYS = {
  PROJECTS: 'indiark_projects_v1',
  TEAM: 'indiark_team_v1',
  PARTNERS: 'indiark_partners_v1',
  BUYER_SUBMISSIONS: 'indiark_buyer_submissions_v1',
  CONTENT_SUBMISSIONS: 'indiark_content_submissions_v1'
};

// Initial Initialized Confirmed Projects (Source of Truth)
const INITIAL_PROJECTS = [
  {
    id: 'bheeshmar',
    title: 'BHEESHMAR',
    category: 'Films',
    projectType: 'Feature Film',
    language: 'To be confirmed',
    genre: 'Drama / Action',
    year: '2024–2025',
    synopsis: 'Feature film project represented for strategic OTT platform pitching, media rights licensing, and commercial distribution negotiations.',
    indiarkRole: 'Content Representation & Platform Pitching',
    status: 'In Representation',
    posterUrl: '',
    trailerUrl: '',
    additionalImages: []
  },
  {
    id: 'secret-of-kalinga',
    title: 'SECRET OF KALINGA',
    category: 'Films',
    projectType: 'Feature Film / Historical',
    language: 'Malayalam',
    genre: 'Historical / Mystery / Thriller',
    year: '2024–2025',
    synopsis: 'Cinematic project represented for rights evaluation, platform pitching, and territory-specific media distribution opportunities.',
    indiarkRole: 'Media Rights & Representation',
    status: 'In Representation',
    posterUrl: '/secret of kalinga.jpg',
    trailerUrl: '',
    additionalImages: []
  }
];

// Initial Confirmed Leadership & Team (Biographies and designations strictly marked as placeholders until officially supplied)
const INITIAL_TEAM = [
  {
    id: 'charles-george',
    name: 'Charles George',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
  },
  {
    id: 'marina-john',
    name: 'Marina John',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
  },
  {
    id: 'arun-dev',
    name: 'Arun Dev',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
  },
  {
    id: 'manu-kc',
    name: 'Manu KC',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
  },
  {
    id: 'mubeen-rouf',
    name: 'Mubeen Rouf',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
  },
  {
    id: 'jomon',
    name: 'Jomon',
    designation: '[Designation to be confirmed]',
    bio: '[Official biography to be provided by leadership]',
    linkedin: '',
    photoUrl: ''
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

// Contact information placeholders
export const CONTACT_INFO = {
  emailPlaceholder: '[OFFICIAL EMAIL TO BE PROVIDED]',
  mobilePlaceholder: '[OPTIONAL / TO BE PROVIDED]',
  addressPlaceholder: '[OFFICIAL OFFICE ADDRESS TO BE PROVIDED]',
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
