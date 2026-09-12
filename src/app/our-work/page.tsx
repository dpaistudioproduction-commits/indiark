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
    <div className="pt-32 pb-24 bg-[#090B0D] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>REPRESENTATION PORTFOLIO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            OUR <span className="font-extrabold text-[#F5DE88]">WORK</span>
          </h1>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Indiark Entertainments is entrusted by producers and rights holders to represent select commercial projects across premier domestic and global distribution platforms.
          </p>
        </div>

        {/* Selected Work Grid & Modal */}
        <SelectedWork initialProjects={projects} />

        {/* Bottom Producer Pitch Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#141820] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-[#F8F9FA] mb-2">
              Have a Project Seeking Commercial Representation?
            </h3>
            <p className="text-xs text-[#94A3B8] max-w-xl">
              We evaluate complete masters, rough cuts, and packaged screenplays for exclusive OTT, satellite, and international distribution pipelines.
            </p>
          </div>
          <Link
            href="/submit-content"
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-[#F5DE88]/20"
          >
            <span>SUBMIT YOUR CONTENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
