import React from "react";
import type { Metadata } from "next";
import BuyerRequirementForm from "@/components/platforms/BuyerRequirementForm";
import { Tv, ShieldCheck, Film, Globe2, Layers, CheckCircle } from "lucide-react";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "For OTT Platforms & Content Buyers | Indiark Entertainments",
  description: "Looking for Indian content? Indiark works as a business connection point for OTT platforms, broadcasters, distributors and legitimate content buyers.",
};

export default function ForPlatformsPage() {
  const CATEGORIES = [
    { title: "MOVIES", desc: "Feature-length theatrical & direct-to-digital films across commercial genres." },
    { title: "WEB SERIES", desc: "Episodic originals, crime thrillers, anthologies, and multi-part dramas." },
    { title: "REGIONAL CONTENT", desc: "Tamil, Telugu, Malayalam, Kannada, and North Indian vernacular masterworks." },
    { title: "DUBBED CONTENT", desc: "Multi-lingual pan-India and international dubbed language packages." },
    { title: "MUSIC CATALOGUES", desc: "Soundtracks, score sync licensing, and digital audio libraries." },
    { title: "CONTENT CATALOGUES", desc: "Curated multi-title libraries for immediate platform syndication." },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FAF6F5] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>B2B BUYER &amp; PLATFORM NETWORK</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            LOOKING FOR <span className="text-[#781D2A]">CONTENT?</span>
          </h1>

          <p className="text-[#5C5056] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Indiark Entertainments serves as an institutional representation and connection point for OTT platforms, satellite broadcasters, airline IFE curators, and global distributors seeking vetted Indian entertainment properties.
          </p>
        </div>

        {/* Content Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8D8D3] hover:border-[#C82333]/40 shadow-sm transition-all"
            >
              <h3 className="font-serif text-sm font-bold text-[#141115] mb-1 tracking-wider">
                {cat.title}
              </h3>
              <p className="text-xs text-[#5C5056] leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Requirement Form */}
        <BuyerRequirementForm />

      </div>
    </div>
  );
}
