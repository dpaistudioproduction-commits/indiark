"use client";

import React from "react";
import { LEADERSHIP_TEAM } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-[#090B0D] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>GOVERNANCE &amp; DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            LEADERSHIP &amp; <span className="font-extrabold text-[#F5DE88]">TEAM</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            The executive foundation guiding Indiark's media rights representation, strategic acquisitions, and industry alliances.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={member.name}
              className="group p-5 rounded-3xl bg-[#141820] border border-white/[0.08] hover:border-[#F5DE88]/40 transition-all duration-300 text-center flex flex-col items-center justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-full flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#181D26] border border-white/10 group-hover:border-[#F5DE88] flex items-center justify-center mb-4 transition-colors">
                  <span className="font-bold text-xl sm:text-2xl text-[#F8F9FA] group-hover:text-[#F5DE88] transition-colors">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#F8F9FA] mb-1">
                  {member.name}
                </h3>

                <div className="text-[9px] font-mono font-semibold tracking-wider text-[#F5DE88] uppercase">
                  Indiark Core Team
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] w-full text-[10px] text-[#64748B] font-mono">
                Member 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#64748B] font-mono">
          Executive designations and credentials managed under corporate governance.
        </div>

      </div>
    </section>
  );
}
