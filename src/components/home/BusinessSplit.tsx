"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function BusinessSplit() {
  return (
    <section className="py-24 bg-[#FAF6F5] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Left: For Content Owners */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#FFFFFF] border-2 border-[#781D2A] shadow-xl shadow-[#781D2A]/5 flex flex-col justify-between group hover:border-[#5C121E] transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-widest text-[#781D2A] uppercase font-bold mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#781D2A]" />
                <span>FOR PRODUCERS &amp; CREATORS</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141115] mb-3">
                HAVE CONTENT?
              </h3>

              <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#781D2A] uppercase mb-4">
                You Create. We Help Find The Right Opportunities.
              </div>

              <p className="text-sm text-[#4A3F45] leading-relaxed mb-8">
                Whether you have a completed feature film, an episodic web series, a regional catalogue, or a music master, submit your project for structured commercial evaluation and institutional representation.
              </p>

              <ul className="space-y-2.5 mb-8 text-xs text-[#5C5056] font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781D2A] shrink-0" />
                  <span>Structured multi-step submission wizard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span>Granular rights breakdown &amp; territory protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Official Authorization Letter protocol</span>
                </li>
              </ul>
            </div>

            <Link
              href="/submit-content"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-xs font-mono font-bold tracking-[0.14em] uppercase bg-[#781D2A] hover:bg-[#5C121E] text-white active:scale-[0.99] transition-all shadow-lg shadow-[#781D2A]/20"
            >
              <span>SUBMIT YOUR CONTENT →</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Card Right: For Platforms & Buyers */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#FFFFFF] border border-[#EAE0DD] shadow-xl shadow-black/5 flex flex-col justify-between group hover:border-[#D8C7C3] transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-widest text-[#781D2A] uppercase font-bold mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                <span>FOR OTTs, BROADCASTERS &amp; BUYERS</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141115] mb-3">
                LOOKING FOR CONTENT?
              </h3>

              <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#781D2A] uppercase mb-4">
                Tell Us What Content You Need.
              </div>

              <p className="text-sm text-[#4A3F45] leading-relaxed mb-8">
                Indiark works as a direct curation and connection point for streaming platforms, linear broadcasters, airline fleets, and theatrical/dubbing buyers seeking verified Indian entertainment titles.
              </p>

              <ul className="space-y-2.5 mb-8 text-xs text-[#5C5056] font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781D2A] shrink-0" />
                  <span>Targeted language, genre, and duration sourcing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span>Audited chain of title and clean rights documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Bespoke single-title or volume catalogue packages</span>
                </li>
              </ul>
            </div>

            <Link
              href="/for-platforms"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-xs font-mono font-bold tracking-[0.14em] uppercase bg-[#781D2A] hover:bg-[#5C121E] text-white active:scale-[0.99] transition-all shadow-lg shadow-[#781D2A]/20"
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
