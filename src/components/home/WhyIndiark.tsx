"use client";

import React from "react";
import { PROOF_POINTS } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

const PROOF_COLORS = [
  { text: "text-[#781D2A]", bg: "bg-[#FDE8E9]", border: "border-[#781D2A]/30" },
  { text: "text-[#00A896]", bg: "bg-[#E6F8F5]", border: "border-[#00A896]/30" },
  { text: "text-[#1B998B]", bg: "bg-[#EBF7F5]", border: "border-[#1B998B]/30" },
  { text: "text-[#65A30D]", bg: "bg-[#F4FBE8]", border: "border-[#84CC16]/40" },
  { text: "text-[#781D2A]", bg: "bg-[#FDE8E9]", border: "border-[#781D2A]/30" },
  { text: "text-[#00A896]", bg: "bg-[#E6F8F5]", border: "border-[#00A896]/30" },
];

export default function WhyIndiark() {
  return (
    <section id="why-indiark" className="py-24 bg-[#FAF6F5] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>WHY INDIARK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            EXPERIENCE THAT CREATES <span className="text-[#781D2A]">CONNECTIONS</span>
          </h2>
          <p className="text-[#4A3F45] text-sm sm:text-base leading-relaxed">
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
                className="group p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE0DD] hover:border-[#781D2A]/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-4xl sm:text-5xl font-black text-[#141115] group-hover:text-[#781D2A] transition-colors tracking-tight">
                      {item.number}
                    </span>
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase ${color.text}`}>
                      {item.suffix}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#141115] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A3F45] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE0DD] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#7E7077]">
                    ADVANTAGE 0{index + 1}
                  </span>
                  <span className="w-6 h-[1.5px] bg-[#D8C7C3] group-hover:w-12 group-hover:bg-[#781D2A] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
