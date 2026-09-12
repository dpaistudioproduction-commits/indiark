"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOW_WE_WORK_STEPS } from "@/lib/data";
import { CheckCircle, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function HowWeWorkJourney() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="how-we-work" className="py-24 bg-[#FAF6F5] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>THE METHODOLOGY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            HOW WE <span className="text-[#781D2A]">WORK</span>
          </h2>
          <p className="text-[#5C5056] text-sm sm:text-base leading-relaxed">
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
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#781D2A] shadow-lg shadow-[#781D2A]/10 -translate-y-0.5"
                      : isPast
                      ? "bg-[#FAF6F5] border-[#E8D8D3] text-[#4A3F45]"
                      : "bg-[#FFFFFF] border-[#EAE0DD] text-[#7A6C72] hover:border-[#D8C7C3]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shrink-0 ${
                        isActive
                          ? "bg-[#781D2A] text-white shadow-md shadow-[#781D2A]/30"
                          : isPast
                          ? "bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/30"
                          : "bg-[#F5ECE8] text-[#8C7D84]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#781D2A] uppercase font-bold block">
                        STAGE {step.number}
                      </span>
                      <span className={`text-sm font-bold tracking-wide transition-colors ${
                        isActive ? "text-[#141115]" : isPast ? "text-[#3A3136]" : "text-[#7A6C72]"
                      }`}>
                        {step.stage}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? "text-[#781D2A] translate-x-1" : "text-[#B8A8AF]"
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
                <div className="relative rounded-2xl p-8 sm:p-10 bg-[#FFFFFF] border border-[#E8D8D3] shadow-xl min-h-[380px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#EAE0DD] pb-6 mb-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono font-bold tracking-widest text-[#781D2A] uppercase shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
                        <span>STAGE {current.number} OF 06</span>
                      </div>
                      <span className="text-xs font-mono text-[#7A6C72]">
                        {Math.round(((activeStage + 1) / 6) * 100)}% PIPELINE PROGRESS
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141115] mb-2">
                      {current.title}
                    </h3>
                    <div className="text-xs font-mono tracking-widest text-[#781D2A] uppercase mb-6 font-bold">
                      PRIMARY OBJECTIVE: {current.stage}
                    </div>

                    <p className="text-base text-[#4A3F45] leading-relaxed mb-8">
                      {current.description}
                    </p>
                  </div>

                  {/* Stage Progress Navigation */}
                  <div className="pt-6 border-t border-[#EAE0DD] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {HOW_WE_WORK_STEPS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStage(i)}
                          aria-label={`Jump to stage ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === activeStage
                              ? "w-8 bg-[#781D2A]"
                              : i < activeStage
                              ? "w-4 bg-[#781D2A]/40"
                              : "w-3 bg-[#E8D8D3]"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {activeStage > 0 && (
                        <button
                          onClick={() => setActiveStage(activeStage - 1)}
                          className="px-3 py-1.5 rounded text-xs font-mono font-semibold text-[#5C5056] hover:text-[#141115] transition-colors"
                        >
                          Previous
                        </button>
                      )}
                      {activeStage < 5 ? (
                        <button
                          onClick={() => setActiveStage(activeStage + 1)}
                          className="px-4 py-2 rounded-lg bg-[#781D2A] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#5C121E] transition-all flex items-center gap-1 shadow-md shadow-[#781D2A]/20"
                        >
                          <span>Next Stage</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link
                          href="/submit-content"
                          className="px-4 py-2 rounded-lg bg-[#781D2A] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#5C121E] transition-all flex items-center gap-1 shadow-md shadow-[#781D2A]/20"
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

            <div className="mt-8 text-center p-4 rounded-xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-sm">
              <span className="font-serif text-sm tracking-[0.25em] font-bold text-[#00A896] uppercase">
                FROM CONTENT TO CLOSURE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
