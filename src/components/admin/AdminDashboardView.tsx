"use client";

import React, { useState } from "react";
import { Project, ContentSubmission, BuyerRequirement, ContactEnquiry } from "@/lib/types";
import { 
  Film, 
  Layers, 
  Users, 
  Mail, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  Clock, 
  Search, 
  Eye, 
  LogOut, 
  ShieldCheck, 
  Building2, 
  FileText,
  X
} from "lucide-react";
import { useRouter } from "next/navigation";

interface AdminDashboardViewProps {
  initialProjects: Project[];
  initialSubmissions: ContentSubmission[];
  initialBuyerRequirements: BuyerRequirement[];
  initialContactEnquiries: ContactEnquiry[];
}

export default function AdminDashboardView({
  initialProjects,
  initialSubmissions,
  initialBuyerRequirements,
  initialContactEnquiries,
}: AdminDashboardViewProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"submissions" | "buyers" | "projects" | "enquiries">("submissions");
  
  // Data states
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [submissions, setSubmissions] = useState<ContentSubmission[]>(initialSubmissions);
  const [buyers, setBuyers] = useState<BuyerRequirement[]>(initialBuyerRequirements);
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>(initialContactEnquiries);

  // Search & Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Inspection modals
  const [inspectSubmission, setInspectSubmission] = useState<ContentSubmission | null>(null);
  const [inspectBuyer, setInspectBuyer] = useState<BuyerRequirement | null>(null);
  const [inspectEnquiry, setInspectEnquiry] = useState<ContactEnquiry | null>(null);

  // Project CMS Modal state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    tagline: "",
    description: "",
    synopsis: "",
    category: "FILMS" as Project["category"],
    projectType: "Feature Film",
    language: "Tamil",
    genre: "Action / Drama",
    year: "2024",
    indiarkRole: "Exclusive Global OTT & Media Rights Representation",
    posterUrl: "/images/projects/bheeshmar.svg",
    status: "Featured" as Project["status"],
    published: true,
  });

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  // Status updates
  const handleSubmissionStatusChange = async (id: string, newStatus: ContentSubmission["status"]) => {
    const res = await fetch("/api/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
      );
      if (inspectSubmission && inspectSubmission.id === id) {
        setInspectSubmission({ ...inspectSubmission, status: newStatus });
      }
    }
  };

  const handleBuyerStatusChange = async (id: string, newStatus: BuyerRequirement["status"]) => {
    const res = await fetch("/api/buyer-requirements", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setBuyers((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
      if (inspectBuyer && inspectBuyer.id === id) {
        setInspectBuyer({ ...inspectBuyer, status: newStatus });
      }
    }
  };

  const handleEnquiryStatusChange = async (id: string, newStatus: ContactEnquiry["status"]) => {
    const res = await fetch("/api/contact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
      );
      if (inspectEnquiry && inspectEnquiry.id === id) {
        setInspectEnquiry({ ...inspectEnquiry, status: newStatus });
      }
    }
  };

  // Project CRUD
  const handleOpenCreateProject = () => {
    setEditingProject(null);
    setProjectForm({
      title: "",
      tagline: "",
      description: "",
      synopsis: "",
      category: "FILMS",
      projectType: "Feature Film",
      language: "Tamil",
      genre: "Action / Drama",
      year: "2024",
      indiarkRole: "Exclusive Global OTT & Media Rights Representation",
      posterUrl: "/images/projects/bheeshmar.svg",
      status: "Featured",
      published: true,
    });
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (proj: Project) => {
    setEditingProject(proj);
    setProjectForm({
      title: proj.title,
      tagline: proj.tagline || "",
      description: proj.description,
      synopsis: proj.synopsis || proj.description,
      category: proj.category,
      projectType: proj.projectType,
      language: proj.language,
      genre: proj.genre,
      year: String(proj.year),
      indiarkRole: proj.indiarkRole,
      posterUrl: proj.posterUrl,
      status: proj.status,
      published: proj.published,
    });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      const res = await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingProject.id, ...projectForm }),
      });
      if (res.ok) {
        const data = await res.json();
        setProjects((prev) =>
          prev.map((p) => (p.id === editingProject.id ? data.project : p))
        );
        setIsProjectModalOpen(false);
      }
    } else {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectForm),
      });
      if (res.ok) {
        const data = await res.json();
        setProjects((prev) => [data.project, ...prev]);
        setIsProjectModalOpen(false);
      }
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const res = await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-200">
      
      {/* Top Admin Navigation Bar */}
      <header className="bg-[#0A0E17] border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-gold to-brand-amber p-[1px]">
            <div className="w-full h-full bg-[#07090E] rounded flex items-center justify-center font-serif font-black text-brand-gold text-sm">
              I
            </div>
          </div>
          <div>
            <span className="font-serif font-bold text-sm tracking-widest text-white block">
              INDIARK MANAGEMENT CONSOLE
            </span>
            <span className="text-[9px] font-mono tracking-wider text-brand-gold uppercase">
              Confidential Business Intelligence
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:text-red-400 text-xs font-semibold text-slate-400 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div
            onClick={() => setActiveTab("submissions")}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              activeTab === "submissions"
                ? "bg-[#111724] border-brand-gold/60 shadow-lg shadow-brand-gold/5"
                : "bg-[#0B0E17] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-bold">
                SUBMISSIONS
              </span>
              <FileText className="w-4 h-4 text-brand-gold" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">
              {submissions.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {submissions.filter((s) => s.status === "NEW").length} awaiting review
            </div>
          </div>

          <div
            onClick={() => setActiveTab("buyers")}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              activeTab === "buyers"
                ? "bg-[#111724] border-sky-500/60 shadow-lg shadow-sky-500/5"
                : "bg-[#0B0E17] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-bold">
                BUYER RFQs
              </span>
              <Building2 className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">
              {buyers.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {buyers.filter((b) => b.status === "NEW").length} new platform mandates
            </div>
          </div>

          <div
            onClick={() => setActiveTab("projects")}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              activeTab === "projects"
                ? "bg-[#111724] border-brand-gold/60 shadow-lg shadow-brand-gold/5"
                : "bg-[#0B0E17] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                PROJECT CATALOGUE
              </span>
              <Film className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">
              {projects.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {projects.filter((p) => p.published).length} titles published online
            </div>
          </div>

          <div
            onClick={() => setActiveTab("enquiries")}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              activeTab === "enquiries"
                ? "bg-[#111724] border-purple-500/60 shadow-lg shadow-purple-500/5"
                : "bg-[#0B0E17] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">
                INQUIRIES
              </span>
              <Mail className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">
              {enquiries.length}
            </div>
            <div className="text-[11px] text-slate-400">
              {enquiries.filter((e) => e.status === "NEW").length} new messages
            </div>
          </div>
        </div>

        {/* Tab Navigation & Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {[
              { id: "submissions", label: "Content Submissions", count: submissions.length },
              { id: "buyers", label: "Buyer Requirements", count: buyers.length },
              { id: "projects", label: "Projects CMS", count: projects.length },
              { id: "enquiries", label: "Contact Desk", count: enquiries.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSearchTerm("");
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-gold text-black shadow-md shadow-brand-gold/20"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {activeTab === "projects" && (
            <button
              onClick={handleOpenCreateProject}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-gradient-to-r from-brand-gold to-brand-amber text-black text-xs font-bold tracking-wider uppercase hover:brightness-110 shadow-md shadow-brand-gold/20 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Title</span>
            </button>
          )}
        </div>

        {/* TAB 1: Content Submissions */}
        {activeTab === "submissions" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#0B0E17] p-3 rounded-xl border border-slate-800">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search submissions by title, producer, email, language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none text-xs text-white focus:outline-none w-full"
              />
            </div>

            {submissions.filter(
              (s) =>
                s.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.email.toLowerCase().includes(searchTerm.toLowerCase())
            ).length > 0 ? (
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#0A0D15]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-[#0F1420] text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Project Title</th>
                        <th className="py-3 px-4">Applicant / Producer</th>
                        <th className="py-3 px-4">Format &amp; Language</th>
                        <th className="py-3 px-4">Territory Scope</th>
                        <th className="py-3 px-4">Pipeline Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {submissions
                        .filter(
                          (s) =>
                            s.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            s.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            s.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-3.5 px-4 font-bold text-white">
                              {sub.projectName}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-slate-200">{sub.applicantName}</div>
                              <div className="text-[10px] text-slate-400">{sub.email}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div>{sub.contentType}</div>
                              <div className="text-[10px] text-slate-400">{sub.language}</div>
                            </td>
                            <td className="py-3.5 px-4 text-[11px] text-slate-300">
                              {sub.territory}
                            </td>
                            <td className="py-3.5 px-4">
                              <select
                                value={sub.status}
                                onChange={(e) =>
                                  handleSubmissionStatusChange(sub.id, e.target.value as any)
                                }
                                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase border bg-slate-900 ${
                                  sub.status === "NEW"
                                    ? "text-amber-400 border-amber-500/40"
                                    : sub.status === "UNDER REVIEW"
                                    ? "text-sky-400 border-sky-500/40"
                                    : sub.status === "CONTACTED"
                                    ? "text-emerald-400 border-emerald-500/40"
                                    : "text-slate-400 border-slate-700"
                                }`}
                              >
                                <option value="NEW">NEW</option>
                                <option value="UNDER REVIEW">UNDER REVIEW</option>
                                <option value="CONTACTED">CONTACTED</option>
                                <option value="CLOSED">CLOSED</option>
                              </select>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => setInspectSubmission(sub)}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-brand-gold hover:text-black text-[11px] font-semibold text-slate-300 transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Inspect</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 rounded-xl bg-[#0B0E17] border border-slate-800 text-slate-500 text-xs">
                No content submissions found matching your search.
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Buyer Requirements */}
        {activeTab === "buyers" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#0B0E17] p-3 rounded-xl border border-slate-800">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search platform requirements by company, contact person, genre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none text-xs text-white focus:outline-none w-full"
              />
            </div>

            {buyers.filter(
              (b) =>
                b.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.email.toLowerCase().includes(searchTerm.toLowerCase())
            ).length > 0 ? (
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#0A0D15]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-[#0F1420] text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Platform / Company</th>
                        <th className="py-3 px-4">Contact Person</th>
                        <th className="py-3 px-4">Content Desired</th>
                        <th className="py-3 px-4">Territory</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {buyers
                        .filter(
                          (b) =>
                            b.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            b.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            b.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((req) => (
                          <tr key={req.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-3.5 px-4 font-bold text-white">
                              {req.companyName}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-slate-200">{req.contactPerson}</div>
                              <div className="text-[10px] text-slate-400">{req.email}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div>{req.contentType}</div>
                              <div className="text-[10px] text-slate-400">{req.languages}</div>
                            </td>
                            <td className="py-3.5 px-4 text-[11px] text-slate-300">
                              {req.territory || "Worldwide"}
                            </td>
                            <td className="py-3.5 px-4">
                              <select
                                value={req.status}
                                onChange={(e) =>
                                  handleBuyerStatusChange(req.id, e.target.value as any)
                                }
                                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase border bg-slate-900 ${
                                  req.status === "NEW"
                                    ? "text-amber-400 border-amber-500/40"
                                    : req.status === "UNDER REVIEW"
                                    ? "text-sky-400 border-sky-500/40"
                                    : req.status === "CONTACTED"
                                    ? "text-emerald-400 border-emerald-500/40"
                                    : "text-slate-400 border-slate-700"
                                }`}
                              >
                                <option value="NEW">NEW</option>
                                <option value="UNDER REVIEW">UNDER REVIEW</option>
                                <option value="CONTACTED">CONTACTED</option>
                                <option value="CLOSED">CLOSED</option>
                              </select>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => setInspectBuyer(req)}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-brand-gold hover:text-black text-[11px] font-semibold text-slate-300 transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Inspect</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 rounded-xl bg-[#0B0E17] border border-slate-800 text-slate-500 text-xs">
                No buyer requirements found matching your search.
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Projects CMS */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-xl bg-[#0D111A] border border-slate-800 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                    <img
                      src={proj.posterUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-brand-gold font-bold">
                        {proj.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        proj.published ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-red-950 text-red-400 border border-red-800"
                      }`}>
                        {proj.published ? "PUBLISHED" : "DRAFT"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-1">
                        {proj.title}
                      </h3>
                      <div className="text-xs text-brand-gold font-mono uppercase mb-2">
                        {proj.projectType} • {proj.year}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => handleOpenEditProject(proj)}
                        className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-brand-gold font-semibold transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Contact Inquiries */}
        {activeTab === "enquiries" && (
          <div className="space-y-4">
            {enquiries.length > 0 ? (
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#0A0D15]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-[#0F1420] text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Contact Name</th>
                        <th className="py-3 px-4">Company</th>
                        <th className="py-3 px-4">Enquiry Type</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {enquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-white">
                            <div>{enq.name}</div>
                            <div className="text-[10px] text-slate-400">{enq.email}</div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {enq.company || "N/A"}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-[11px] text-brand-gold">
                            {enq.enquiryType}
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) =>
                                handleEnquiryStatusChange(enq.id, e.target.value as any)
                              }
                              className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase border bg-slate-900 text-slate-300 border-slate-700"
                            >
                              <option value="NEW">NEW</option>
                              <option value="CONTACTED">CONTACTED</option>
                              <option value="CLOSED">CLOSED</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setInspectEnquiry(enq)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-brand-gold hover:text-black text-[11px] font-semibold text-slate-300 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 rounded-xl bg-[#0B0E17] border border-slate-800 text-slate-500 text-xs">
                No contact enquiries received yet.
              </div>
            )}
          </div>
        )}

      </div>

      {/* INSPECT SUBMISSION MODAL */}
      {inspectSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0E17] border border-brand-gold/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-bold">
                  SUBMISSION DOSSIER
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {inspectSubmission.projectName}
                </h3>
              </div>
              <button
                onClick={() => setInspectSubmission(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div><span className="text-slate-500 block">Producer:</span> {inspectSubmission.applicantName}</div>
                <div><span className="text-slate-500 block">Company:</span> {inspectSubmission.companyName || "Independent"}</div>
                <div><span className="text-slate-500 block">Email:</span> {inspectSubmission.email}</div>
                <div><span className="text-slate-500 block">Mobile:</span> {inspectSubmission.mobile}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-slate-500 font-bold uppercase font-mono">Creative Metadata:</div>
                <div className="text-slate-300">
                  <span className="text-white font-semibold">Format:</span> {inspectSubmission.contentType} • <span className="text-white font-semibold">Language:</span> {inspectSubmission.language} • <span className="text-white font-semibold">Genre:</span> {inspectSubmission.genre || "N/A"}
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Synopsis:</span>
                  <p className="text-slate-300 leading-relaxed">{inspectSubmission.synopsis}</p>
                </div>
                {inspectSubmission.trailerLink && (
                  <div>
                    <span className="text-slate-500 block">Screener Link:</span>
                    <a
                      href={inspectSubmission.trailerLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-gold hover:underline font-mono"
                    >
                      {inspectSubmission.trailerLink}
                    </a>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-500 font-bold uppercase font-mono mb-2">Available Rights:</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.entries(inspectSubmission.rights)
                    .filter(([k, v]) => v === true && k !== "otherRights")
                    .map(([k]) => (
                      <span key={k} className="px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold text-[10px] font-mono">
                        {k.replace("Rights", "").toUpperCase()}
                      </span>
                    ))}
                </div>
                <div className="text-slate-400">
                  <span className="text-white font-semibold">Territory:</span> {inspectSubmission.territory}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INSPECT BUYER MODAL */}
      {inspectBuyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0E17] border border-sky-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-bold">
                  BUYER REQUIREMENT DOSSIER
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {inspectBuyer.companyName}
                </h3>
              </div>
              <button
                onClick={() => setInspectBuyer(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div><span className="text-slate-500 block">Contact:</span> {inspectBuyer.contactPerson}</div>
                <div><span className="text-slate-500 block">Designation:</span> {inspectBuyer.designation || "N/A"}</div>
                <div><span className="text-slate-500 block">Email:</span> {inspectBuyer.email}</div>
                <div><span className="text-slate-500 block">Territory:</span> {inspectBuyer.territory || "N/A"}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-slate-500 font-bold uppercase font-mono block">Detailed Mandate:</span>
                <p className="leading-relaxed">{inspectBuyer.detailedRequirement}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INSPECT ENQUIRY MODAL */}
      {inspectEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0E17] border border-purple-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">
                  ENQUIRY MESSAGE
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {inspectEnquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setInspectEnquiry(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div><span className="text-slate-500 block">Email:</span> {inspectEnquiry.email}</div>
                <div><span className="text-slate-500 block">Company:</span> {inspectEnquiry.company || "N/A"}</div>
                <div><span className="text-slate-500 block">Phone:</span> {inspectEnquiry.mobile || "N/A"}</div>
                <div><span className="text-slate-500 block">Type:</span> {inspectEnquiry.enquiryType}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-bold uppercase font-mono block">Message:</span>
                <p className="leading-relaxed">{inspectEnquiry.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT CMS CREATE / EDIT MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <form
            onSubmit={handleSaveProject}
            className="bg-[#0A0E17] border border-brand-gold/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                {editingProject ? "Edit Project" : "Add New Representation Title"}
              </h3>
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Category</label>
                <select
                  value={projectForm.category}
                  onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                >
                  <option value="FILMS">FILMS</option>
                  <option value="WEB SERIES">WEB SERIES</option>
                  <option value="DIGITAL">DIGITAL</option>
                  <option value="MUSIC">MUSIC</option>
                  <option value="PRODUCTION">PRODUCTION</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Format</label>
                <input
                  type="text"
                  value={projectForm.projectType}
                  onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                  placeholder="e.g. Feature Film"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Language</label>
                <input
                  type="text"
                  value={projectForm.language}
                  onChange={(e) => setProjectForm({ ...projectForm, language: e.target.value })}
                  placeholder="e.g. Tamil / Telugu Dub"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Genre</label>
                <input
                  type="text"
                  value={projectForm.genre}
                  onChange={(e) => setProjectForm({ ...projectForm, genre: e.target.value })}
                  placeholder="e.g. Action / Thriller"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono uppercase mb-1">Production Year</label>
                <input
                  type="text"
                  value={projectForm.year}
                  onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                  placeholder="2024"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-300 font-mono uppercase mb-1">Indiark Representation Scope *</label>
                <input
                  type="text"
                  required
                  value={projectForm.indiarkRole}
                  onChange={(e) => setProjectForm({ ...projectForm, indiarkRole: e.target.value })}
                  placeholder="e.g. Exclusive Global OTT & Media Rights Representation"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-300 font-mono uppercase mb-1">Description / Logline *</label>
                <textarea
                  rows={3}
                  required
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
                />
              </div>

              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={projectForm.published}
                  onChange={(e) => setProjectForm({ ...projectForm, published: e.target.checked })}
                  className="w-4 h-4 accent-brand-gold"
                />
                <label htmlFor="published" className="text-xs font-semibold text-slate-300">
                  Publish to Public Work Portfolio
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="px-4 py-2 rounded border border-slate-700 text-slate-400 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded bg-brand-gold text-black text-xs font-bold uppercase tracking-wider hover:brightness-110"
              >
                Save Project
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
