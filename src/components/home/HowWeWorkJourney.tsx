"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOW_WE_WORK_STEPS } from "@/lib/data";
import { CheckCircle, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function HowWeWorkJourney() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="how-we-work" className="py-24 bg-[#090B0D] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>THE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            HOW WE <span className="font-extrabold text-[#F5DE88]">WORK</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            A structured, transparent six-stage representation pipeline engineered to maximize commercial value from initial audit to final deal closure.
          </p>
        </div>

        {/* 6-Stage Interactive Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Steps (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            {HOW_WE_WORK_STEPS.map((step, idx) => {
              const isActive = activeStage === idx;
              const isPast = idx < activeStage;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-[#181D26] border-[#F5DE88] shadow-xl shadow-black/80 -translate-y-0.5"
                      : isPast
                      ? "bg-[#141820]/80 border-white/[0.06] text-[#CBD5E1]"
                      : "bg-[#141820]/50 border-white/[0.04] text-[#64748B] hover:border-white/15 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shrink-0 ${
                        isActive
                          ? "bg-[#F5DE88] text-[#090B0D] shadow-md shadow-[#F5DE88]/30"
                          : isPast
                          ? "bg-white/[0.08] text-[#F5DE88] border border-white/15"
                          : "bg-white/[0.04] text-[#64748B]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#F5DE88] uppercase font-bold block">
                        STAGE {step.number}
                      </span>
                      <span className={`text-sm font-semibold tracking-wide transition-colors ${
                        isActive ? "text-[#F8F9FA]" : isPast ? "text-[#CBD5E1]" : "text-[#64748B]"
                      }`}>
                        {step.stage}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? "text-[#F5DE88] translate-x-1" : "text-[#64748B]"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Spotlight Stage Detail (Span 7) */}
          <div className="lg:col-span-7">
            {(() => {
              const current = HOW_WE_WORK_STEPS[activeStage];
              return (
                <div className="relative rounded-3xl p-8 sm:p-10 bg-[#141820] border border-white/[0.08] shadow-2xl min-h-[380px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-widest text-[#F5DE88] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
                        <span>STAGE {current.number} OF 06</span>
                      </div>
                      <span className="text-xs font-mono text-[#64748B]">
                        {Math.round(((activeStage + 1) / 6) * 100)}% PIPELINE PROGRESS
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F9FA] mb-2">
                      {current.title}
                    </h3>
                    <div className="text-xs font-mono tracking-widest text-[#F5DE88] uppercase mb-6 font-bold">
                      PRIMARY OBJECTIVE: {current.stage}
                    </div>

                    <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
                      {current.description}
                    </p>
                  </div>

                  {/* Stage Progress Navigation */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {HOW_WE_WORK_STEPS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStage(i)}
                          aria-label={`Jump to stage ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === activeStage
                              ? "w-8 bg-[#F5DE88]"
                              : i < activeStage
                              ? "w-4 bg-[#F5DE88]/40"
                              : "w-3 bg-white/15"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {activeStage > 0 && (
                        <button
                          onClick={() => setActiveStage(activeStage - 1)}
                          className="px-4 py-2 rounded-full text-xs font-semibold text-[#94A3B8] hover:text-white hover:bg-white/[0.05] transition-colors"
                        >
                          Previous
                        </button>
                      )}
                      {activeStage < 5 ? (
                        <button
                          onClick={() => setActiveStage(activeStage + 1)}
                          className="px-5 py-2.5 rounded-full bg-[#F5DE88] text-[#090B0D] text-xs font-bold tracking-wider uppercase hover:bg-[#FACC15] transition-all flex items-center gap-1.5 shadow-md shadow-[#F5DE88]/20"
                        >
                          <span>Next Stage</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link
                          href="/submit-content"
                          className="px-5 py-2.5 rounded-full bg-[#F5DE88] text-[#090B0D] text-xs font-bold tracking-wider uppercase hover:bg-[#FACC15] transition-all flex items-center gap-1.5 shadow-md shadow-[#F5DE88]/20"
                        >
                          <span>Submit Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="mt-8 text-center p-4 rounded-2xl bg-[#141820] border border-white/[0.08] shadow-sm">
              <span className="text-xs tracking-[0.25em] font-bold text-[#00A896] uppercase">
                FROM CONTENT TO CLOSURE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
