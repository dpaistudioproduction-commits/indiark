import fs from "fs";
import path from "path";
import { Project, ContentSubmission, BuyerRequirement, ContactEnquiry } from "./types";
import { INITIAL_PROJECTS } from "./data";

interface DatabaseSchema {
  projects: Project[];
  submissions: ContentSubmission[];
  buyerRequirements: BuyerRequirement[];
  contactEnquiries: ContactEnquiry[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");

function ensureDbExists(): DatabaseSchema {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const initialData: DatabaseSchema = {
      projects: INITIAL_PROJECTS,
      submissions: [
        {
          id: "sub_sample_1",
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          status: "UNDER REVIEW",
          applicantName: "Rajan Narayanan",
          companyName: "Southern Waves Cine Craft",
          designation: "Managing Producer",
          email: "rajan@southernwaves.example",
          mobile: "+91 98401 23456",
          city: "Chennai",
          country: "India",
          projectName: "THE DELTA CORRIDOR",
          contentType: "Feature Film",
          language: "Tamil / Telugu Dub",
          genre: "Political Thriller / Neo-Noir",
          duration: "138 mins",
          yearOfProduction: "2024",
          productionStatus: "Post-Production Complete",
          synopsis: "An investigative journalist uncovers high-level coastal infrastructure corruption in a gripping procedural thriller.",
          director: "K. Sundaram",
          producer: "Southern Waves Cine Craft",
          cast: "Vikram Prabhu, Shweta Menon, Kishore",
          trailerLink: "https://vimeo.com/sample-screener-delta",
          rights: {
            ottRights: true,
            digitalRights: true,
            satelliteRights: true,
            musicRights: false,
            inFlightRights: true,
            dubRights: true,
            remakeRights: false,
            internationalRights: true,
            otherRights: "Direct-to-digital premiere preferred"
          },
          territory: "Worldwide / India Excl Satellite",
          authorizationSigned: true,
        }
      ],
      buyerRequirements: [
        {
          id: "req_sample_1",
          createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
          status: "NEW",
          companyName: "AuraStream International (MENA & SEA)",
          contactPerson: "David Henderson",
          designation: "VP Content Acquisitions",
          email: "d.henderson@aurastream.example",
          mobile: "+971 50 123 4567",
          website: "https://aurastream.example",
          countryTerritory: "UAE / Middle East & Southeast Asia",
          contentType: "Movies / Web Series",
          languages: "Tamil, Telugu, Malayalam, Hindi (with English subtitles)",
          genre: "Crime Thriller, Action, High-Concept Drama",
          numberOfTitles: "8-12 Titles per quarter",
          rightsRequired: "SVOD / TVOD / Multi-territory Streaming",
          territory: "MENA, Singapore, Malaysia, GCC",
          timeline: "Q3 - Q4 2024 Acquisitions",
          detailedRequirement: "Actively seeking fresh, critically acclaimed South Indian commercial films and high-production value investigative web series with completed master delivery (4K HDR, 5.1/Dolby Atmos).",
          additionalInformation: "Looking for 24-month exclusive SVOD window with direct distributor representation."
        }
      ],
      contactEnquiries: [
        {
          id: "enq_sample_1",
          createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
          status: "NEW",
          name: "Suresh Menon",
          company: "Menon Motion Pictures",
          designation: "Executive Producer",
          email: "suresh@menonfilms.example",
          mobile: "+91 98840 98765",
          enquiryType: "PRODUCER_PITCH",
          message: "We have two Malayalam crime-drama features completing post-production next month and are looking for exclusive OTT representation with premier national platforms."
        }
      ]
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), "utf-8");
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading db.json, returning defaults", err);
    return {
      projects: INITIAL_PROJECTS,
      submissions: [],
      buyerRequirements: [],
      contactEnquiries: []
    };
  }
}

function saveDb(data: DatabaseSchema): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export const db = {
  // Projects
  getProjects: (): Project[] => {
    const data = ensureDbExists();
    return data.projects || [];
  },
  getProjectById: (id: string): Project | undefined => {
    const data = ensureDbExists();
    return data.projects.find((p) => p.id === id);
  },
  createProject: (project: Omit<Project, "id" | "createdAt">): Project => {
    const data = ensureDbExists();
    const newProject: Project = {
      ...project,
      id: "proj_" + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString()
    };
    data.projects.unshift(newProject);
    saveDb(data);
    return newProject;
  },
  updateProject: (id: string, updates: Partial<Project>): Project | null => {
    const data = ensureDbExists();
    const idx = data.projects.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    data.projects[idx] = { ...data.projects[idx], ...updates };
    saveDb(data);
    return data.projects[idx];
  },
  deleteProject: (id: string): boolean => {
    const data = ensureDbExists();
    const initialLen = data.projects.length;
    data.projects = data.projects.filter((p) => p.id !== id);
    if (data.projects.length !== initialLen) {
      saveDb(data);
      return true;
    }
    return false;
  },

  // Submissions
  getSubmissions: (): ContentSubmission[] => {
    const data = ensureDbExists();
    return data.submissions || [];
  },
  createSubmission: (sub: Omit<ContentSubmission, "id" | "createdAt" | "status">): ContentSubmission => {
    const data = ensureDbExists();
    const newSub: ContentSubmission = {
      ...sub,
      id: "sub_" + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: "NEW"
    };
    data.submissions.unshift(newSub);
    saveDb(data);
    return newSub;
  },
  updateSubmissionStatus: (id: string, status: ContentSubmission["status"]): ContentSubmission | null => {
    const data = ensureDbExists();
    const sub = data.submissions.find((s) => s.id === id);
    if (!sub) return null;
    sub.status = status;
    saveDb(data);
    return sub;
  },

  // Buyer Requirements
  getBuyerRequirements: (): BuyerRequirement[] => {
    const data = ensureDbExists();
    return data.buyerRequirements || [];
  },
  createBuyerRequirement: (req: Omit<BuyerRequirement, "id" | "createdAt" | "status">): BuyerRequirement => {
    const data = ensureDbExists();
    const newReq: BuyerRequirement = {
      ...req,
      id: "req_" + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: "NEW"
    };
    data.buyerRequirements.unshift(newReq);
    saveDb(data);
    return newReq;
  },
  updateBuyerRequirementStatus: (id: string, status: BuyerRequirement["status"]): BuyerRequirement | null => {
    const data = ensureDbExists();
    const req = data.buyerRequirements.find((r) => r.id === id);
    if (!req) return null;
    req.status = status;
    saveDb(data);
    return req;
  },

  // Contact Enquiries
  getContactEnquiries: (): ContactEnquiry[] => {
    const data = ensureDbExists();
    return data.contactEnquiries || [];
  },
  createContactEnquiry: (enq: Omit<ContactEnquiry, "id" | "createdAt" | "status">): ContactEnquiry => {
    const data = ensureDbExists();
    const newEnq: ContactEnquiry = {
      ...enq,
      id: "enq_" + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: "NEW"
    };
    data.contactEnquiries.unshift(newEnq);
    saveDb(data);
    return newEnq;
  },
  updateContactStatus: (id: string, status: ContactEnquiry["status"]): ContactEnquiry | null => {
    const data = ensureDbExists();
    const enq = data.contactEnquiries.find((e) => e.id === id);
    if (!enq) return null;
    enq.status = status;
    saveDb(data);
    return enq;
  }
};
