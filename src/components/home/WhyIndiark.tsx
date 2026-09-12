"use client";

import React from "react";
import { PROOF_POINTS } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

const PROOF_COLORS = [
  { text: "text-[#F5DE88]", bg: "bg-white/[0.06]", border: "border-[#F5DE88]/30" },
  { text: "text-[#00A896]", bg: "bg-white/[0.06]", border: "border-[#00A896]/30" },
  { text: "text-[#10B981]", bg: "bg-white/[0.06]", border: "border-[#10B981]/30" },
  { text: "text-[#84CC16]", bg: "bg-white/[0.06]", border: "border-[#84CC16]/40" },
  { text: "text-[#F5DE88]", bg: "bg-white/[0.06]", border: "border-[#F5DE88]/30" },
  { text: "text-[#06B6D4]", bg: "bg-white/[0.06]", border: "border-[#06B6D4]/30" },
];

export default function WhyIndiark() {
  return (
    <section id="why-indiark" className="py-24 bg-[#0B0E14] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>WHY INDIARK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            EXPERIENCE THAT CREATES <span className="font-extrabold text-[#F5DE88]">CONNECTIONS</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Why leading independent producers, regional filmmakers, and commercial content buyers rely on Indiark's representation.
          </p>
        </div>

        {/* 6 Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_POINTS.map((item, index) => {
            const color = PROOF_COLORS[index] || PROOF_COLORS[0];
            return (
              <div
                key={item.title}
                className="group p-8 rounded-3xl bg-[#141820] border border-white/[0.08] hover:border-[#F5DE88]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-black/80 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#F8F9FA] group-hover:text-[#F5DE88] transition-colors tracking-tight">
                      {item.number}
                    </span>
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase ${color.text}`}>
                      {item.suffix}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64748B]">
                    ADVANTAGE 0{index + 1}
                  </span>
                  <span className="w-6 h-[1.5px] bg-white/20 group-hover:w-12 group-hover:bg-[#F5DE88] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
