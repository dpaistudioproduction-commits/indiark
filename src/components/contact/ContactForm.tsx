"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  company: string;
  designation: string;
  email: string;
  mobile: string;
  enquiryType: "PRODUCER_PITCH" | "BUYER_REQUIREMENT" | "BUSINESS_PARTNERSHIP" | "MEDIA_EDGE_ACADEMY" | "GENERAL";
  message: string;
}

const INITIAL_CONTACT_FORM: ContactFormData = {
  name: "",
  company: "",
  designation: "",
  email: "",
  mobile: "",
  enquiryType: "PRODUCER_PITCH",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email address is required";
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = "Please provide your message (min 10 characters)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setServerError(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] text-center shadow-2xl animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-[#FDE8E9] border border-[#C82333]/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-[#C82333]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#141115] mb-2">
          Enquiry Sent Successfully
        </h3>
        <p className="text-sm text-[#4A3F45] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out. An Indiark team representative will review your message and respond shortly.
        </p>
        <button
          onClick={() => {
            setFormData(INITIAL_CONTACT_FORM);
            setIsSuccess(false);
          }}
          className="px-5 py-2.5 rounded-lg bg-[#C82333] hover:bg-[#8B1524] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md shadow-[#C82333]/20"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-xl space-y-6"
    >
      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Your Name <span className="text-[#C82333]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Varma"
            className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
              errors.name ? "border-red-500" : "border-[#EAE0DD]"
            }`}
          />
          {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Email Address <span className="text-[#C82333]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.com"
            className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
              errors.email ? "border-red-500" : "border-[#EAE0DD]"
            }`}
          />
          {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Company / Studio Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Cine Production House"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Mobile Number
          </label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="+91 98400 12345"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Enquiry Type <span className="text-[#C82333]">*</span>
          </label>
          <select
            value={formData.enquiryType}
            onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
          >
            <option value="PRODUCER_PITCH">Producer / Content Representation Pitch</option>
            <option value="BUYER_REQUIREMENT">OTT / Broadcaster / Buyer Requirement</option>
            <option value="BUSINESS_PARTNERSHIP">Channel / Strategic Business Partnership</option>
            <option value="MEDIA_EDGE_ACADEMY">Media Edge School of Academics Inquiries</option>
            <option value="GENERAL">General Corporate Enquiry</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
            Message / Specific Opportunity Details <span className="text-[#C82333]">*</span>
          </label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share details regarding your content, mandate, or business proposal..."
            className={`w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors ${
              errors.message ? "border-red-500" : "border-[#EAE0DD]"
            }`}
          />
          {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-[#EAE0DD]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C82333] hover:bg-[#8B1524] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-xl shadow-[#C82333]/20 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>SEND ENQUIRY</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

    </form>
  );
}
