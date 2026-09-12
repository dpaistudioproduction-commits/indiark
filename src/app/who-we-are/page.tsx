import React from "react";
import type { Metadata } from "next";
import LeadershipSection from "@/components/home/LeadershipSection";
import AssociatedOrg from "@/components/home/AssociatedOrg";
import PartnersSection from "@/components/home/PartnersSection";
import WhyIndiark from "@/components/home/WhyIndiark";
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "Who We Are & Leadership | Indiark Entertainments",
  description: "Backed by professionals with 20+ years of combined experience across television, film, OTT, digital media and entertainment business.",
};

export default function WhoWeArePage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF6F5] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>AGENCY BACKGROUND &amp; DNA</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            WHO WE <span className="text-[#781D2A]">ARE</span>
          </h1>

          <p className="text-[#5C5056] text-base leading-relaxed max-w-2xl mx-auto">
            Indiark Entertainments is an entertainment business and media rights representation agency. We connect creators with institutional buyers across television, OTT, digital media, and global rights corridors.
          </p>
        </div>

        {/* 20+ Years Feature Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#EAE0DD] pb-8 lg:pb-0 lg:pr-8">
              <div className="font-serif text-7xl font-black text-[#781D2A] leading-none mb-2">
                20+
              </div>
              <div className="text-lg font-serif font-bold text-[#141115] uppercase tracking-wider mb-2">
                Years of Media Experience
              </div>
              <p className="text-xs text-[#5C5056]">
                Combined operational track record spanning Indian film industries, broadcast networks &amp; streaming giants.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141115]">
                Media Experience. Business Understanding. Industry Connections.
              </h2>
              <p className="text-sm text-[#4A3F45] leading-relaxed">
                The modern entertainment ecosystem is fast-moving and complex. While creative storytelling drives audiences, commercial structuring determines survival. Indiark was formed to give content owners institutional-level advocacy without surrendering their core intellectual property.
              </p>
              <p className="text-sm text-[#5C5056] leading-relaxed">
                We work directly with acquisition heads, commissioning editors, linear channel executives, and international territory buyers to deliver verified, high-value deals.
              </p>
            </div>
          </div>
        </div>

        {/* Why Indiark Proof Points */}
        <WhyIndiark />

        {/* Leadership Section */}
        <LeadershipSection />

        {/* Associated Organization */}
        <div id="academic-partner">
          <AssociatedOrg />
        </div>

        {/* Channel Partners */}
        <PartnersSection />

      </div>
    </div>
  );
}
