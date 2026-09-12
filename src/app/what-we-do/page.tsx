import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/home/ServicesSection";
import HowWeWorkJourney from "@/components/home/HowWeWorkJourney";
import EcosystemConstellation from "@/components/home/EcosystemConstellation";
import { ArrowUpRight, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "What We Do & Media Services | Indiark Entertainments",
  description: "Explore our six strategic pillars: OTT Pitching, Content Representation, Media Rights Licensing, Music Business, Digital Entertainment, and Video Production.",
};

export default function WhatWeDoPage() {
  return (
    <div className="pt-32 pb-24 bg-[#090B0D] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>CORE CAPABILITIES &amp; ADVISORY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            WHAT WE <span className="font-extrabold text-[#F5DE88]">DO</span>
          </h1>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Indiark operates across six focused service pillars designed to monetize, position, and protect intellectual property at every stage of the entertainment lifecycle.
          </p>
        </div>

        {/* 6 Services Section */}
        <ServicesSection />

        {/* Rights Licensing Deep Dive Matrix */}
        <div id="rights-licensing" className="my-20 p-8 sm:p-12 rounded-3xl bg-[#141820] border border-white/[0.08] shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-semibold tracking-widest uppercase inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#F5DE88] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
              <span>COMPREHENSIVE RIGHTS EXPLOITATION</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F9FA] mb-3">
              The 360° Media Rights Matrix
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              We dissect and monetize intellectual property across distinct windows and geographic territories to ensure zero cannibalization and maximum aggregate revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/[0.06]">
              <h4 className="font-bold text-[#F8F9FA] uppercase tracking-wider mb-2">Primary Digital Window</h4>
              <p className="text-[#94A3B8] leading-relaxed">Exclusive SVOD/TVOD premieres on leading national &amp; international OTT streamers.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/[0.06]">
              <h4 className="font-bold text-[#F8F9FA] uppercase tracking-wider mb-2">Linear &amp; Satellite TV</h4>
              <p className="text-[#94A3B8] leading-relaxed">Terrestrial &amp; satellite broadcasting across regional and Hindi-language television networks.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/[0.06]">
              <h4 className="font-bold text-[#F8F9FA] uppercase tracking-wider mb-2">Ancillary &amp; In-Flight (IFE)</h4>
              <p className="text-[#94A3B8] leading-relaxed">Licensing to global commercial airlines, maritime fleets, and closed-circuit hospitality networks.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181D26] border border-white/[0.06]">
              <h4 className="font-bold text-[#F8F9FA] uppercase tracking-wider mb-2">Derivative &amp; Dubbing</h4>
              <p className="text-[#94A3B8] leading-relaxed">Regional and foreign language dubbing rights, remake rights, and book/format adaptation deals.</p>
            </div>
          </div>
        </div>

        {/* How We Work Journey */}
        <HowWeWorkJourney />

        {/* Ecosystem Constellation */}
        <EcosystemConstellation />

      </div>
    </div>
  );
}
