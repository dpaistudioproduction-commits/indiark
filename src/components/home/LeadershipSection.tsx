"use client";

import React from "react";
import { LEADERSHIP_TEAM } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-[#FAF6F5] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>GOVERNANCE &amp; DIRECTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            LEADERSHIP &amp; <span className="text-[#781D2A]">TEAM</span>
          </h2>
          <p className="text-[#4A3F45] text-sm sm:text-base leading-relaxed">
            The executive foundation guiding Indiark's media rights representation, strategic acquisitions, and industry alliances.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={member.name}
              className="group p-5 rounded-3xl bg-[#FFFFFF] border border-[#EAE0DD] hover:border-[#781D2A]/50 transition-all duration-300 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md"
            >
              <div className="w-full flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF6F5] border border-[#E8D8D3] group-hover:border-[#781D2A] flex items-center justify-center mb-4 transition-colors">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#141115] group-hover:text-[#781D2A] transition-colors">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <h3 className="font-serif text-sm sm:text-base font-bold text-[#141115] mb-1">
                  {member.name}
                </h3>

                <div className="text-[9px] font-mono font-bold tracking-wider text-[#781D2A] uppercase">
                  Indiark Core Team
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE0DD] w-full text-[10px] text-[#7E7077] font-mono">
                Member 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#7E7077] font-mono">
          Executive designations and credentials managed under corporate governance.
        </div>

      </div>
    </section>
  );
}
