"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Film, Globe2, Layers, Sparkles } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#090B0D]">
      {/* Signature Brand Dot Motif */}
      <BrandDotMotif count={9} />

      {/* Subtle background atmospheric gradient & grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] bg-radial-glow blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left / Editorial Content (Span 7) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#141820]/80 backdrop-blur-md text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>MEDIA RIGHTS • CONTENT REPRESENTATION • ENTERTAINMENT BUSINESS</span>
            </div>

            {/* Master Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F8F9FA] leading-[1.12] mb-6">
              CONNECTING GREAT CONTENT WITH THE{" "}
              <span className="font-extrabold text-[#F5DE88] block sm:inline">
                RIGHT OPPORTUNITIES
              </span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-normal leading-relaxed mb-8 max-w-2xl">
              Indiark Entertainments is a media rights representation and entertainment business agency helping producers, production houses, filmmakers and independent artists connect their content with the right platforms, buyers and markets.
            </p>

            {/* Business Areas Category Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {[
                { name: "MEDIA RIGHTS", dot: "bg-[#F5DE88]" },
                { name: "CONTENT REPRESENTATION", dot: "bg-[#00A896]" },
                { name: "OTT", dot: "bg-[#84CC16]" },
                { name: "DIGITAL", dot: "bg-[#06B6D4]" },
                { name: "MUSIC", dot: "bg-[#F5DE88]" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider bg-[#141820] text-[#CBD5E1] border border-white/[0.08] hover:border-[#F5DE88]/40 transition-colors"
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
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] active:scale-[0.98] transition-all shadow-xl shadow-[#F5DE88]/20 hover:shadow-[#F5DE88]/30"
              >
                <span>PITCH YOUR CONTENT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              
              <Link
                href="/what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase border border-white/20 bg-white/[0.03] text-[#F8F9FA] hover:bg-white/[0.08] hover:border-white/40 transition-all shadow-sm"
              >
                <span>EXPLORE OUR SERVICES</span>
              </Link>
            </div>

            {/* Subtle Brand Statement */}
            <div className="mt-8 pt-4 flex items-center gap-4 text-[11px] font-mono tracking-widest text-[#64748B] uppercase">
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

          {/* Right / Editorial Media Composition (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#12161F]/90 border border-white/[0.08] p-6 sm:p-8 shadow-2xl space-y-5 backdrop-blur-md">
              
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#F5DE88] text-[10px] font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                  <span>THE VALUE CORRIDOR</span>
                </div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                  REPRESENTATION ENGINE
                </span>
              </div>

              {/* 3 Steps Corridor */}
              <div className="space-y-3">
                {/* 01: Content Origin */}
                <div className="p-4 rounded-2xl bg-[#181D26] border border-white/[0.06] flex items-start gap-3.5 hover:border-white/15 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Film className="w-4 h-4 text-[#F5DE88]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-semibold text-[#F8F9FA]">Content Creators &amp; Studios</span>
                      <span className="text-[9px] font-mono text-[#00A896] font-bold">01 INTAKE</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      Feature films, series &amp; sound masters undergoing evaluation.
                    </p>
                  </div>
                </div>

                {/* 02: Indiark Hub */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1E2430] to-[#141820] border-2 border-[#F5DE88]/40 shadow-lg flex items-start gap-3.5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-[#F5DE88] text-[#090B0D] text-[8px] font-mono font-bold tracking-widest uppercase rounded-bl-lg">
                    CENTRAL CONNECTOR
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#F5DE88] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Layers className="w-4 h-4 text-[#090B0D]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#F5DE88]">Indiark Entertainments</span>
                      <span className="text-[9px] font-mono text-[#F5DE88] font-bold">02 STRUCTURING</span>
                    </div>
                    <p className="text-[11px] text-[#CBD5E1] leading-relaxed font-medium">
                      Rights auditing, commercial packaging &amp; institutional pitching.
                    </p>
                  </div>
                </div>

                {/* 03: Global Buyers */}
                <div className="p-4 rounded-2xl bg-[#181D26] border border-white/[0.06] flex items-start gap-3.5 hover:border-white/15 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4 text-[#00A896]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-semibold text-[#F8F9FA]">OTT, TV &amp; Global Buyers</span>
                      <span className="text-[9px] font-mono text-[#84CC16] font-bold">03 CLOSURE</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      Executed commercial licensing across domestic and global markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote / Subtext */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                <span className="font-semibold text-[#94A3B8]">CONTENT MOVES PEOPLE</span>
                <span className="text-[#00A896] font-bold">GLOBAL REACH</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
