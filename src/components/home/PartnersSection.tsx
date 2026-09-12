"use client";

import React from "react";
import { CHANNEL_PARTNERS } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function PartnersSection() {
  return (
    <section className="py-20 bg-[#0B0E14] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={4} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5DE88] pulse-node" />
            <span>ALLIED NETWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-[#F8F9FA] tracking-tight">
            CHANNEL &amp; BUSINESS <span className="font-extrabold text-[#F5DE88]">PARTNERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNEL_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-3xl bg-[#141820] border border-white/[0.08] hover:border-[#00A896]/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-[#00A896] text-base">
                      {partner.name[0]}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[#00A896] border border-[#00A896]/20">
                    {partner.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8F9FA] mb-2">
                  {partner.name}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.08] text-[10px] font-mono text-[#64748B]">
                Official Business Associate
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
