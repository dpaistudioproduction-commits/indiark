"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Building2, Layers, Globe } from "lucide-react";

interface BuyerFormData {
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  mobile: string;
  website: string;
  countryTerritory: string;
  contentType: string;
  languages: string;
  genre: string;
  numberOfTitles: string;
  rightsRequired: string;
  territory: string;
  duration: string;
  timeline: string;
  detailedRequirement: string;
  additionalInformation: string;
}

const INITIAL_BUYER_FORM: BuyerFormData = {
  companyName: "",
  contactPerson: "",
  designation: "",
  email: "",
  mobile: "",
  website: "",
  countryTerritory: "",
  contentType: "Movies",
  languages: "Tamil, Telugu, Malayalam, Hindi",
  genre: "Commercial Thriller, Drama, Action",
  numberOfTitles: "1-5 Titles",
  rightsRequired: "OTT / SVOD / Pay TVOD",
  territory: "Worldwide / Regional / Global Diaspora",
  duration: "Feature Length (90-140 mins)",
  timeline: "Immediate / Q3-Q4 Acquisitions",
  detailedRequirement: "",
  additionalInformation: "",
};

export default function BuyerRequirementForm() {
  const [formData, setFormData] = useState<BuyerFormData>(INITIAL_BUYER_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) newErrors.companyName = "Company or Platform name is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid corporate email is required";
    if (!formData.detailedRequirement.trim() || formData.detailedRequirement.length < 15) {
      newErrors.detailedRequirement = "Please provide detailed requirement parameters (min 15 chars)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/buyer-requirements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setServerError(err.message || "Failed to submit requirement. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-[#FFFFFF] border border-[#E8D8D3] text-center shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#FDE8E9] border border-[#C82333]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#C82333]" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-[#141115] mb-3">
          Requirement Received
        </h2>
        <p className="text-base text-[#4A3F45] max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you. Our acquisitions and representation team will review your mandate and contact you if there is a relevant catalogue or upcoming title matching your criteria.
        </p>
        <button
          onClick={() => {
            setFormData(INITIAL_BUYER_FORM);
            setIsSuccess(false);
          }}
          className="px-6 py-3 rounded-lg bg-[#C82333] hover:bg-[#8B1524] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md shadow-[#C82333]/20"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-xl p-6 sm:p-10 space-y-8"
    >
      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Section 1: Company & Contact Details */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-4 h-4 text-[#C82333]" />
          <h3 className="font-serif text-lg font-bold text-[#141115] uppercase tracking-wider">
            1. Platform &amp; Organization Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Company / Platform Name <span className="text-[#C82333]">*</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. AuraStream Digital / Channel Network"
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
                errors.companyName ? "border-red-500" : "border-[#EAE0DD]"
              }`}
            />
            {errors.companyName && <p className="text-red-500 text-[11px] mt-1">{errors.companyName}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Contact Person <span className="text-[#C82333]">*</span>
            </label>
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              placeholder="e.g. David Henderson"
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
                errors.contactPerson ? "border-red-500" : "border-[#EAE0DD]"
              }`}
            />
            {errors.contactPerson && <p className="text-red-500 text-[11px] mt-1">{errors.contactPerson}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Designation
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              placeholder="e.g. VP Acquisitions / Head of Content"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Official Email <span className="text-[#C82333]">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="acquisitions@platform.com"
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
                errors.email ? "border-red-500" : "border-[#EAE0DD]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Mobile / Office Phone
            </label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="+971 50 123 4567"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Platform Website / Corporate Domain
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="https://yourplatform.com"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Requirement Parameters */}
      <div className="pt-6 border-t border-[#EAE0DD]">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-[#C82333]" />
          <h3 className="font-serif text-lg font-bold text-[#141115] uppercase tracking-wider">
            2. Acquisition Mandate &amp; Content Criteria
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Content Type <span className="text-[#C82333]">*</span>
            </label>
            <select
              value={formData.contentType}
              onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            >
              <option value="Movies">Commercial Movies / Feature Films</option>
              <option value="Web Series">Web Series &amp; Originals</option>
              <option value="Regional Content">Regional Vernacular Content</option>
              <option value="Dubbed Content">Dubbed Content Packages</option>
              <option value="Music">Music &amp; Soundtracks</option>
              <option value="Content Catalogues">Library &amp; Catalogues</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Languages Desired
            </label>
            <input
              type="text"
              value={formData.languages}
              onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
              placeholder="e.g. Tamil, Telugu, Hindi, Malayalam"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Rights Model Required
            </label>
            <input
              type="text"
              value={formData.rightsRequired}
              onChange={(e) => setFormData({ ...formData, rightsRequired: e.target.value })}
              placeholder="e.g. SVOD Exclusive, TVOD, Satellite, In-Flight"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Territory / Geographic Scope
            </label>
            <input
              type="text"
              value={formData.territory}
              onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
              placeholder="e.g. MENA, Southeast Asia, Worldwide, North America"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
              Detailed Requirement &amp; Curatorial Notes <span className="text-[#C82333]">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.detailedRequirement}
              onChange={(e) => setFormData({ ...formData, detailedRequirement: e.target.value })}
              placeholder="Detail your programming mandate, technical delivery requirements (e.g. 4K HDR, Dolby Atmos), target audience, and windowing preferences..."
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
                errors.detailedRequirement ? "border-red-500" : "border-[#EAE0DD]"
              }`}
            />
            {errors.detailedRequirement && (
              <p className="text-red-500 text-[11px] mt-1">{errors.detailedRequirement}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 border-t border-[#EAE0DD] flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C82333] hover:bg-[#8B1524] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-xl shadow-[#C82333]/20 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Mandate...</span>
          ) : (
            <>
              <span>SUBMIT BUYER REQUIREMENT</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

    </form>
  );
}
