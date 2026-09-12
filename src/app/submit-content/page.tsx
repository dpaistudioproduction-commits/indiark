import React from "react";
import type { Metadata } from "next";
import MultiStepSubmissionForm from "@/components/submit/MultiStepSubmissionForm";
import { ShieldCheck, FileCheck, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "Submit Content & Pitch Projects | Indiark Entertainments",
  description: "You Create. We Help Find The Right Opportunities. Submit your feature film, web series, or content catalogue for institutional media rights representation and OTT pitching.",
};

export default function SubmitContentPage() {
  return (
    <div className="pt-32 pb-24 bg-[#090B0D] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>PRODUCER &amp; CREATOR PORTAL</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            SUBMIT YOUR <span className="font-extrabold text-[#F5DE88]">CONTENT</span>
          </h1>

          <div className="text-sm sm:text-base font-semibold tracking-wider text-[#F5DE88] uppercase mb-4">
            YOU CREATE. WE HELP FIND THE RIGHT OPPORTUNITIES.
          </div>

          <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl mx-auto">
            Producers, production houses, independent filmmakers, and content creators are invited to submit completed titles, works in post-production, or intellectual properties for confidential commercial evaluation and representation.
          </p>
        </div>

        {/* Security & Confidentiality Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs">
          <div className="p-4 rounded-2xl bg-[#141820] border border-white/[0.08] flex items-center gap-3 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-[#F5DE88] shrink-0" />
            <div>
              <span className="font-bold text-[#F8F9FA] block">Protected IP</span>
              <span className="text-[#94A3B8] text-[11px]">Strict NDA &amp; confidentiality</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#141820] border border-white/[0.08] flex items-center gap-3 shadow-lg">
            <FileCheck className="w-5 h-5 text-[#F5DE88] shrink-0" />
            <div>
              <span className="font-bold text-[#F8F9FA] block">Direct Acquisitions</span>
              <span className="text-[#94A3B8] text-[11px]">Direct reach to platform heads</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#141820] border border-white/[0.08] flex items-center gap-3 shadow-lg">
            <Lock className="w-5 h-5 text-[#F5DE88] shrink-0" />
            <div>
              <span className="font-bold text-[#F8F9FA] block">Encrypted Storage</span>
              <span className="text-[#94A3B8] text-[11px]">Secure submissions vault</span>
            </div>
          </div>
        </div>

        {/* The Multi-Step Wizard Form */}
        <MultiStepSubmissionForm />

      </div>
    </div>
  );
}
