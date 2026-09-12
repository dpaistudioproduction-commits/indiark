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
    <div className="pt-32 pb-24 bg-[#FAF6F5] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>PRODUCER &amp; CREATOR PORTAL</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            SUBMIT YOUR <span className="text-[#781D2A]">CONTENT</span>
          </h1>

          <div className="text-sm sm:text-base font-bold tracking-wider text-[#781D2A] uppercase mb-4">
            YOU CREATE. WE HELP FIND THE RIGHT OPPORTUNITIES.
          </div>

          <p className="text-[#5C5056] text-sm leading-relaxed max-w-2xl mx-auto">
            Producers, production houses, independent filmmakers, and content creators are invited to submit completed titles, works in post-production, or intellectual properties for confidential commercial evaluation and representation.
          </p>
        </div>

        {/* Security & Confidentiality Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs">
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8D8D3] flex items-center gap-3 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#C82333] shrink-0" />
            <div>
              <span className="font-bold text-[#141115] block">Protected IP</span>
              <span className="text-[#7A6C72] text-[11px]">Strict NDA &amp; confidentiality</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8D8D3] flex items-center gap-3 shadow-sm">
            <FileCheck className="w-5 h-5 text-[#C82333] shrink-0" />
            <div>
              <span className="font-bold text-[#141115] block">Direct Acquisitions</span>
              <span className="text-[#7A6C72] text-[11px]">Direct reach to platform heads</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8D8D3] flex items-center gap-3 shadow-sm">
            <Lock className="w-5 h-5 text-[#C82333] shrink-0" />
            <div>
              <span className="font-bold text-[#141115] block">Encrypted Storage</span>
              <span className="text-[#7A6C72] text-[11px]">Secure submissions vault</span>
            </div>
          </div>
        </div>

        {/* The Multi-Step Wizard Form */}
        <MultiStepSubmissionForm />

      </div>
    </div>
  );
}
