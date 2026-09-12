"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Upload, AlertCircle, FileText, Sparkles } from "lucide-react";

interface FormData {
  // Step 1: Applicant
  applicantName: string;
  companyName: string;
  designation: string;
  email: string;
  mobile: string;
  city: string;
  country: string;
  website: string;
  // Step 2: Project
  projectName: string;
  contentType: string;
  language: string;
  genre: string;
  duration: string;
  yearOfProduction: string;
  productionStatus: string;
  synopsis: string;
  director: string;
  producer: string;
  cast: string;
  trailerLink: string;
  additionalLinks: string;
  // Step 3: Rights
  rights: {
    ottRights: boolean;
    digitalRights: boolean;
    satelliteRights: boolean;
    musicRights: boolean;
    inFlightRights: boolean;
    dubRights: boolean;
    remakeRights: boolean;
    internationalRights: boolean;
    otherRights: string;
  };
  territory: string;
  // Step 4: Authorization
  authorizationSigned: boolean;
  authorizationFilename: string;
}

const INITIAL_FORM: FormData = {
  applicantName: "",
  companyName: "",
  designation: "",
  email: "",
  mobile: "",
  city: "",
  country: "India",
  website: "",
  projectName: "",
  contentType: "Feature Film",
  language: "",
  genre: "",
  duration: "",
  yearOfProduction: "2024",
  productionStatus: "Completed",
  synopsis: "",
  director: "",
  producer: "",
  cast: "",
  trailerLink: "",
  additionalLinks: "",
  rights: {
    ottRights: true,
    digitalRights: true,
    satelliteRights: true,
    musicRights: true,
    inFlightRights: true,
    dubRights: true,
    remakeRights: true,
    internationalRights: true,
    otherRights: "",
  },
  territory: "Worldwide / India & International",
  authorizationSigned: false,
  authorizationFilename: "",
};

export default function MultiStepSubmissionForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.applicantName.trim()) newErrors.applicantName = "Applicant name is required";
      if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email address is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Contact phone number is required";
    }

    if (currentStep === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = "Project name is required";
      if (!formData.contentType.trim()) newErrors.contentType = "Content type is required";
      if (!formData.language.trim()) newErrors.language = "Language(s) are required";
      if (!formData.synopsis.trim() || formData.synopsis.length < 20) {
        newErrors.synopsis = "Please provide a detailed synopsis (minimum 20 characters)";
      }
    }

    if (currentStep === 3) {
      if (!formData.territory.trim()) newErrors.territory = "Available territory must be specified";
    }

    if (currentStep === 4) {
      if (!formData.authorizationSigned) {
        newErrors.authorizationSigned = "You must confirm authorization authority before proceeding";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Submission failed. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setServerError(err.message || "Something went wrong. Please check your submission and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-[#141820] border border-white/[0.08] text-center shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-[#F5DE88]/40 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#F5DE88]" />
        </div>
        <h2 className="text-3xl font-bold text-[#F8F9FA] mb-3">
          Content Submission Received
        </h2>
        <p className="text-base text-[#94A3F8] max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you. Your title <strong className="text-[#F5DE88]">&ldquo;{formData.projectName}&rdquo;</strong> has been securely logged into Indiark&apos;s evaluation queue.
        </p>
        <div className="p-5 rounded-2xl bg-[#181D26] border border-white/[0.06] max-w-lg mx-auto text-xs text-[#CBD5E1] mb-8 text-left space-y-2">
          <div className="text-[#F8F9FA] font-bold">What happens next:</div>
          <div>1. Our acquisitions team performs a confidential rights &amp; commercial viability audit.</div>
          <div>2. We will contact you at <span className="text-[#F5DE88] font-semibold">{formData.email}</span> within 3-5 business days.</div>
        </div>
        <button
          onClick={() => {
            setFormData(INITIAL_FORM);
            setIsSuccess(false);
            setStep(1);
          }}
          className="px-6 py-3 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#F5DE88]/20"
        >
          Submit Another Title
        </button>
      </div>
    );
  }

  const STEPS_NAV = [
    { num: 1, title: "Applicant" },
    { num: 2, title: "Project" },
    { num: 3, title: "Rights" },
    { num: 4, title: "Authorization" },
    { num: 5, title: "Review" },
  ];

  return (
    <div className="rounded-3xl bg-[#141820] border border-white/[0.08] shadow-2xl p-6 sm:p-10">
      
      {/* Progress Bar & Step Indicators */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          {STEPS_NAV.map((s) => (
            <div key={s.num} className="flex flex-col items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  step === s.num
                    ? "bg-[#F5DE88] text-[#090B0D] shadow-lg shadow-[#F5DE88]/30"
                    : step > s.num
                    ? "bg-white/[0.08] text-[#F5DE88] border border-white/15"
                    : "bg-white/[0.04] text-[#64748B]"
                }`}
              >
                {step > s.num ? "✓" : s.num}
              </div>
              <span className={`text-[10px] uppercase font-mono tracking-wider mt-1 hidden sm:block ${
                step === s.num ? "text-[#F5DE88] font-bold" : "text-[#64748B]"
              }`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden border border-white/[0.06]">
          <div
            className="bg-[#F5DE88] h-full transition-all duration-300"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* STEP 1: Applicant Details */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
              Step 1: Applicant &amp; Entity Information
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Provide contact details of the primary producer, rights holder, or authorized representative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Full Name <span className="text-[#F5DE88]">*</span>
              </label>
              <input
                type="text"
                value={formData.applicantName}
                onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                placeholder="e.g. Ramesh Varma"
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.applicantName ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.applicantName && <p className="text-red-400 text-[11px] mt-1">{errors.applicantName}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Company / Production House
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. CineCraft Studios LLP"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Designation
              </label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Producer / Director / Rights Holder"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Email Address <span className="text-[#F5DE88]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="producer@studio.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.email ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Mobile / WhatsApp <span className="text-[#F5DE88]">*</span>
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98400 12345"
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.mobile ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.mobile && <p className="text-red-400 text-[11px] mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                City / Country
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Chennai, India"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Project Details */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
              Step 2: Project &amp; Content Details
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Provide specific creative and metadata parameters of the title being submitted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Project Title <span className="text-[#F5DE88]">*</span>
              </label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                placeholder="e.g. CHRONICLES OF VENUR"
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.projectName ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.projectName && <p className="text-red-400 text-[11px] mt-1">{errors.projectName}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Content Type <span className="text-[#F5DE88]">*</span>
              </label>
              <select
                value={formData.contentType}
                onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              >
                <option value="Feature Film">Feature Film</option>
                <option value="Web Series / Episodic">Web Series / Episodic</option>
                <option value="Documentary / Docuseries">Documentary / Docuseries</option>
                <option value="Music Album / Video">Music Album / Video</option>
                <option value="Short Film / Micro-Drama">Short Film / Micro-Drama</option>
                <option value="Content Catalogue">Content Catalogue</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Primary Language(s) <span className="text-[#F5DE88]">*</span>
              </label>
              <input
                type="text"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                placeholder="e.g. Tamil, Telugu, Malayalam, Hindi"
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.language ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.language && <p className="text-red-400 text-[11px] mt-1">{errors.language}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Genre
              </label>
              <input
                type="text"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                placeholder="e.g. Crime Thriller / Action / Drama"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Production Status
              </label>
              <select
                value={formData.productionStatus}
                onChange={(e) => setFormData({ ...formData, productionStatus: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              >
                <option value="Completed / Ready for Delivery">Completed / Ready for Delivery</option>
                <option value="Post-Production (Rough Cut Ready)">Post-Production (Rough Cut Ready)</option>
                <option value="In Production (Shooting)">In Production (Shooting)</option>
                <option value="Pre-Production / Scripted">Pre-Production / Scripted</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Duration &amp; Year
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g. 128 mins"
                  className="w-full px-3 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88]"
                />
                <input
                  type="text"
                  value={formData.yearOfProduction}
                  onChange={(e) => setFormData({ ...formData, yearOfProduction: e.target.value })}
                  placeholder="2024"
                  className="w-full px-3 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88]"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Synopsis / Logline <span className="text-[#F5DE88]">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.synopsis}
                onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                placeholder="Provide a clear, engaging summary of the core plot, central conflict, and thematic hook..."
                className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                  errors.synopsis ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.synopsis && <p className="text-red-400 text-[11px] mt-1">{errors.synopsis}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Screener / Trailer Link (Vimeo / YouTube / Drive)
              </label>
              <input
                type="url"
                value={formData.trailerLink}
                onChange={(e) => setFormData({ ...formData, trailerLink: e.target.value })}
                placeholder="https://vimeo.com/your-screener (Include password if protected)"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Rights Information */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
              Step 3: Available Rights Matrix
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Select which commercial exploitation rights are unencumbered and available for representation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { key: "ottRights", label: "OTT / SVOD / TVOD" },
              { key: "digitalRights", label: "Digital Streaming" },
              { key: "satelliteRights", label: "Satellite TV / Linear" },
              { key: "musicRights", label: "Music & Audio OST" },
              { key: "inFlightRights", label: "In-Flight (IFE)" },
              { key: "dubRights", label: "Dubbing Rights" },
              { key: "remakeRights", label: "Remake Rights" },
              { key: "internationalRights", label: "International Rights" },
            ].map((item) => {
              const checked = (formData.rights as any)[item.key];
              return (
                <label
                  key={item.key}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    checked
                      ? "bg-white/[0.08] border-[#F5DE88] text-[#F8F9FA]"
                      : "bg-[#181D26] border-white/10 text-[#94A3B8] hover:border-white/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rights: { ...formData.rights, [item.key]: e.target.checked },
                      })
                    }
                    className="w-4 h-4 accent-[#F5DE88] rounded"
                  />
                  <span className="text-xs font-semibold">{item.label}</span>
                </label>
              );
            })}
          </div>

          <div className="pt-4">
            <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
              Available Territory Scope <span className="text-[#F5DE88]">*</span>
            </label>
            <input
              type="text"
              value={formData.territory}
              onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
              placeholder="e.g. Worldwide, India Only, Worldwide Excl. India Satellite"
              className={`w-full px-4 py-3 rounded-xl bg-[#181D26] border text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors ${
                errors.territory ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.territory && <p className="text-red-400 text-[11px] mt-1">{errors.territory}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
              Other Rights / Specific Restrictions
            </label>
            <input
              type="text"
              value={formData.rights.otherRights}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rights: { ...formData.rights, otherRights: e.target.value },
                })
              }
              placeholder="e.g. Theatrical released in Tamil Nadu; Satellite sold to regional network"
              className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
            />
          </div>
        </div>
      )}

      {/* STEP 4: Authorization Letter */}
      {step === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
              Step 4: Submission Authorization Protocol
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Download the official Content Submission &amp; Evaluation Authorization letter or proceed with electronic confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Download Template Box */}
            <div className="p-6 rounded-2xl bg-[#181D26] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-[#F5DE88]/30 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[#F5DE88]" />
                </div>
                <h4 className="text-base font-bold text-[#F8F9FA] mb-1">
                  Authorization Template
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Official standard document granting Indiark Entertainments non-exclusive authority to evaluate and pitch material.
                </p>
              </div>

              <a
                href="/docs/INDIARK_CONTENT_SUBMISSION_AUTHORIZATION.txt"
                download="INDIARK_AUTHORIZATION_LETTER.txt"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/15 hover:border-[#F5DE88] text-[#F8F9FA] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Download className="w-4 h-4 text-[#F5DE88]" />
                <span>DOWNLOAD AUTHORIZATION TEMPLATE</span>
              </a>
            </div>

            {/* Signed Document Upload Simulation */}
            <div className="p-6 rounded-2xl bg-[#181D26] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <Upload className="w-5 h-5 text-[#94A3B8]" />
                </div>
                <h4 className="text-base font-bold text-[#F8F9FA] mb-1">
                  Upload Signed Letter (Optional)
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Attach PDF or signed scan (Max 15MB). You may also submit via email after initial discussion.
                </p>
              </div>

              <div>
                <input
                  type="file"
                  id="auth-upload"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({
                        ...formData,
                        authorizationFilename: e.target.files[0].name,
                      });
                    }
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="auth-upload"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full border border-dashed border-[#F5DE88]/40 bg-white/[0.03] hover:border-[#F5DE88] text-[#F8F9FA] text-xs font-semibold uppercase transition-colors"
                >
                  <Upload className="w-4 h-4 text-[#F5DE88]" />
                  <span>
                    {formData.authorizationFilename
                      ? formData.authorizationFilename
                      : "SELECT SIGNED PDF / DOCUMENT"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Mandatory Confirmation Checkbox */}
          <div className="pt-4 border-t border-white/[0.08]">
            <label
              className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                formData.authorizationSigned
                  ? "bg-white/[0.08] border-[#F5DE88]"
                  : "bg-[#181D26] border-white/10 hover:border-white/20"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.authorizationSigned}
                onChange={(e) =>
                  setFormData({ ...formData, authorizationSigned: e.target.checked })
                }
                className="w-5 h-5 accent-[#F5DE88] rounded mt-0.5 shrink-0"
              />
              <span className="text-xs text-[#CBD5E1] leading-relaxed">
                I confirm that I have the legitimate authority to submit this content and that all information provided is accurate. I authorize Indiark Entertainments to evaluate the submitted material for potential business and content representation opportunities.
              </span>
            </label>
            {errors.authorizationSigned && (
              <p className="text-red-400 text-xs mt-2">{errors.authorizationSigned}</p>
            )}
          </div>
        </div>
      )}

      {/* STEP 5: Review & Submit */}
      {step === 5 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
              Step 5: Review &amp; Secure Submission
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Please verify all details before submitting to Indiark Entertainments acquisitions queue.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Applicant Summary */}
            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/10">
              <div className="text-[10px] font-mono text-[#F5DE88] tracking-widest uppercase font-bold mb-2">
                APPLICANT INFORMATION
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[#CBD5E1]">
                <div><span className="text-[#64748B] block">Name:</span> {formData.applicantName}</div>
                <div><span className="text-[#64748B] block">Company:</span> {formData.companyName || "N/A"}</div>
                <div><span className="text-[#64748B] block">Designation:</span> {formData.designation || "N/A"}</div>
                <div><span className="text-[#64748B] block">Email:</span> {formData.email}</div>
                <div><span className="text-[#64748B] block">Mobile:</span> {formData.mobile}</div>
                <div><span className="text-[#64748B] block">Location:</span> {formData.city || "India"}</div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/10">
              <div className="text-[10px] font-mono text-[#F5DE88] tracking-widest uppercase font-bold mb-2">
                PROJECT SPECIFICATION
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[#CBD5E1] mb-3">
                <div><span className="text-[#64748B] block">Title:</span> <strong className="text-[#F8F9FA]">{formData.projectName}</strong></div>
                <div><span className="text-[#64748B] block">Format:</span> {formData.contentType}</div>
                <div><span className="text-[#64748B] block">Language:</span> {formData.language}</div>
                <div><span className="text-[#64748B] block">Status:</span> {formData.productionStatus}</div>
              </div>
              <div className="pt-2 border-t border-white/[0.08]">
                <span className="text-[#64748B] block mb-1">Synopsis:</span>
                <p className="text-[#CBD5E1] line-clamp-3">{formData.synopsis}</p>
              </div>
            </div>

            {/* Rights Summary */}
            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/10">
              <div className="text-[10px] font-mono text-[#F5DE88] tracking-widest uppercase font-bold mb-2">
                RIGHTS &amp; TERRITORIES
              </div>
              <div className="text-[#CBD5E1] mb-2">
                <span className="text-[#64748B]">Territory Scope:</span> {formData.territory}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {Object.entries(formData.rights)
                  .filter(([k, v]) => v === true && k !== "otherRights")
                  .map(([k]) => (
                    <span
                      key={k}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-[#F5DE88] border border-[#F5DE88]/30 text-[10px] font-mono uppercase font-bold"
                    >
                      {k.replace("Rights", "").toUpperCase()}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[#CBD5E1] hover:text-white hover:border-white/40 text-xs font-bold tracking-wider uppercase transition-colors bg-white/[0.03]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#F5DE88]/20"
          >
            <span>Proceed to Step {step + 1}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-xl shadow-[#F5DE88]/20 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting Material...</span>
            ) : (
              <>
                <span>CONFIRM &amp; SUBMIT MATERIAL</span>
                <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>

    </div>
  );
}
