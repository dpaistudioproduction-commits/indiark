"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function BusinessSplit() {
  return (
    <section className="py-24 bg-[#090B0D] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Left: For Content Owners */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#141820] border border-[#F5DE88]/40 shadow-2xl shadow-black/80 flex flex-col justify-between group hover:border-[#F5DE88]/70 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-wider text-[#F5DE88] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5DE88]" />
                <span>FOR PRODUCERS &amp; CREATORS</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-light text-[#F8F9FA] mb-3">
                HAVE <span className="font-extrabold text-[#F5DE88]">CONTENT?</span>
              </h3>

              <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#F5DE88] uppercase mb-4">
                You Create. We Help Find The Right Opportunities.
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                Whether you have a completed feature film, an episodic web series, a regional catalogue, or a music master, submit your project for structured commercial evaluation and institutional representation.
              </p>

              <ul className="space-y-3 mb-8 text-xs text-[#CBD5E1]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5DE88] shrink-0" />
                  <span>Structured multi-step submission wizard</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span>Granular rights breakdown &amp; territory protection</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Official Authorization Letter protocol</span>
                </li>
              </ul>
            </div>

            <Link
              href="/submit-content"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs font-bold tracking-[0.14em] uppercase bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] active:scale-[0.99] transition-all shadow-xl shadow-[#F5DE88]/20"
            >
              <span>SUBMIT YOUR CONTENT →</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Card Right: For Platforms & Buyers */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#141820] border border-white/[0.08] shadow-2xl shadow-black/80 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-wider text-[#F5DE88] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                <span>FOR OTTs, BROADCASTERS &amp; BUYERS</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-light text-[#F8F9FA] mb-3">
                LOOKING FOR <span className="font-extrabold text-[#F8F9FA]">CONTENT?</span>
              </h3>

              <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#CBD5E1] uppercase mb-4">
                Tell Us What Content You Need.
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                Indiark works as a direct curation and connection point for streaming platforms, linear broadcasters, airline fleets, and theatrical/dubbing buyers seeking verified Indian entertainment titles.
              </p>

              <ul className="space-y-3 mb-8 text-xs text-[#CBD5E1]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5DE88] shrink-0" />
                  <span>Targeted language, genre, and duration sourcing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span>Audited chain of title and clean rights documentation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Bespoke single-title or volume catalogue packages</span>
                </li>
              </ul>
            </div>

            <Link
              href="/for-platforms"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs font-bold tracking-[0.14em] uppercase bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 active:scale-[0.99] transition-all shadow-lg shadow-black/40"
            >
              <span>TELL US YOUR REQUIREMENTS →</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
