"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Film, Globe2, Layers, Sparkles } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#FAF6F5] via-[#F8EFEA] to-[#FAF6F5]">
      {/* Signature Brand Dot Motif with Teal, Green, Lime, Maroon accents */}
      <BrandDotMotif count={9} />

      {/* Subtle background atmospheric gradient & pattern */}
      <div className="absolute inset-0 bg-blush-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[480px] bg-gradient-to-b from-[#781D2A]/6 via-[#00A896]/4 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Editorial Content (Span 7) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8D8D3] bg-[#FFFFFF]/90 backdrop-blur-md text-[10px] font-mono font-bold tracking-[0.22em] text-[#781D2A] uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>MEDIA RIGHTS • CONTENT REPRESENTATION • ENTERTAINMENT BUSINESS</span>
            </div>

            {/* Master Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141115] leading-[1.12] mb-6">
              CONNECTING GREAT CONTENT WITH THE{" "}
              <span className="text-[#781D2A] block sm:inline">
                RIGHT OPPORTUNITIES
              </span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#4A3F45] font-normal leading-relaxed mb-8 max-w-2xl">
              Indiark Entertainments is a media rights representation and entertainment business agency helping producers, production houses, filmmakers and independent artists connect their content with the right platforms, buyers and markets.
            </p>

            {/* Business Areas Category Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {[
                { name: "MEDIA RIGHTS", dot: "bg-[#781D2A]" },
                { name: "CONTENT REPRESENTATION", dot: "bg-[#00A896]" },
                { name: "OTT", dot: "bg-[#84CC16]" },
                { name: "DIGITAL", dot: "bg-[#1B998B]" },
                { name: "MUSIC", dot: "bg-[#781D2A]" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider bg-[#FFFFFF] text-[#141115] border border-[#EAE0DD] shadow-2xs hover:border-[#00A896]/50 transition-colors"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                  <span>{item.name}</span>
                </span>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/submit-content"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-xs font-mono font-bold tracking-[0.14em] uppercase bg-[#781D2A] hover:bg-[#5C121E] text-white active:scale-[0.98] transition-all shadow-lg shadow-[#781D2A]/20"
              >
                <span>PITCH YOUR CONTENT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              
              <Link
                href="/what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-mono font-semibold tracking-[0.14em] uppercase border border-[#D8C7C3] bg-[#FFFFFF] text-[#141115] hover:border-[#781D2A] hover:text-[#781D2A] transition-all shadow-xs"
              >
                <span>EXPLORE OUR SERVICES</span>
              </Link>
            </div>

            {/* Subtle Brand Statement */}
            <div className="mt-8 pt-4 flex items-center gap-4 text-[11px] font-mono tracking-widest text-[#7E7077] uppercase">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
                INDIAN STORIES
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                GLOBAL OPPORTUNITIES
              </span>
            </div>

          </div>

          {/* Right / Editorial Media Composition (Span 5, 2D/2.5D Layered Presentation) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#FFFFFF] border border-[#EAE0DD] p-6 sm:p-8 shadow-2xl space-y-5">
              
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between border-b border-[#EAE0DD] pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FDE8E9] border border-[#781D2A]/20 text-[#781D2A] text-[10px] font-mono font-bold tracking-widest uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                  <span>THE VALUE CORRIDOR</span>
                </div>
                <span className="text-[10px] font-mono text-[#8C7D84]">
                  REPRESENTATION ENGINE
                </span>
              </div>

              {/* 3 Steps Corridor */}
              <div className="space-y-3">
                {/* 01: Content Origin */}
                <div className="p-4 rounded-2xl bg-[#FAF6F5] border border-[#EAE0DD] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FDE8E9] border border-[#781D2A]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Film className="w-4 h-4 text-[#781D2A]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#141115]">Content Creators &amp; Studios</span>
                      <span className="text-[9px] font-mono text-[#00A896] font-bold">01 INTAKE</span>
                    </div>
                    <p className="text-[11px] text-[#5C5056] leading-relaxed">
                      Feature films, series &amp; sound masters undergoing evaluation.
                    </p>
                  </div>
                </div>

                {/* 02: Indiark Hub */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAF6F5] via-[#FFFFFF] to-[#F8EFEA] border-2 border-[#781D2A]/40 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-[#781D2A] text-white text-[8px] font-mono font-bold tracking-widest uppercase rounded-bl-lg">
                    CENTRAL CONNECTOR
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#781D2A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#781D2A]">Indiark Entertainments</span>
                      <span className="text-[9px] font-mono text-[#781D2A] font-bold">02 STRUCTURING</span>
                    </div>
                    <p className="text-[11px] text-[#3A2F34] leading-relaxed font-medium">
                      Rights auditing, commercial packaging &amp; institutional pitching.
                    </p>
                  </div>
                </div>

                {/* 03: Global Buyers */}
                <div className="p-4 rounded-2xl bg-[#FAF6F5] border border-[#EAE0DD] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F8F5] border border-[#00A896]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4 text-[#00A896]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#141115]">OTT, TV &amp; Global Buyers</span>
                      <span className="text-[9px] font-mono text-[#84CC16] font-bold">03 CLOSURE</span>
                    </div>
                    <p className="text-[11px] text-[#5C5056] leading-relaxed">
                      Executed commercial licensing across domestic and global markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote / Subtext */}
              <div className="pt-3 border-t border-[#EAE0DD] flex items-center justify-between text-[10px] font-mono text-[#7E7077]">
                <span className="font-semibold text-[#141115]">CONTENT MOVES PEOPLE</span>
                <span className="text-[#00A896] font-bold">GLOBAL REACH</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
