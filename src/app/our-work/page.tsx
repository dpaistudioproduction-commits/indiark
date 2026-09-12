import React from "react";
import type { Metadata } from "next";
import SelectedWork from "@/components/home/SelectedWork";
import { db } from "@/lib/db";
import { Film, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "Selected Work & Representation Catalogue | Indiark Entertainments",
  description: "Explore titles under representation by Indiark Entertainments, featuring commercial feature films, regional blockbusters, and digital originals.",
};

export default function OurWorkPage() {
  const projects = db.getProjects().filter((p) => p.published);

  return (
    <div className="pt-32 pb-24 bg-[#FAF6F5] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>REPRESENTATION PORTFOLIO</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            OUR <span className="text-[#781D2A]">WORK</span>
          </h1>

          <p className="text-[#5C5056] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Indiark Entertainments is entrusted by producers and rights holders to represent select commercial projects across premier domestic and global distribution platforms.
          </p>
        </div>

        {/* Selected Work Grid & Modal */}
        <SelectedWork initialProjects={projects} />

        {/* Bottom Producer Pitch Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#141115] mb-2">
              Have a Project Seeking Commercial Representation?
            </h3>
            <p className="text-xs text-[#5C5056] max-w-xl">
              We evaluate complete masters, rough cuts, and packaged screenplays for exclusive OTT, satellite, and international distribution pipelines.
            </p>
          </div>
          <Link
            href="/submit-content"
            className="shrink-0 px-6 py-3 rounded-lg bg-[#781D2A] hover:bg-[#5C121E] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2 shadow-md shadow-[#781D2A]/20"
          >
            <span>SUBMIT YOUR CONTENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
