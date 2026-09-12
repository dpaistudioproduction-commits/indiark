"use client";

import React from "react";
import { CHANNEL_PARTNERS } from "@/lib/data";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function PartnersSection() {
  return (
    <section className="py-20 bg-[#FAF6F5] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={4} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#781D2A] pulse-node" />
            <span>ALLIED NETWORK</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141115] tracking-tight">
            CHANNEL &amp; BUSINESS <span className="text-[#781D2A]">PARTNERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNEL_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#EAE0DD] hover:border-[#00A896]/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F8F5] border border-[#00A896]/30 flex items-center justify-center">
                    <span className="font-serif font-bold text-[#00A896] text-base">
                      {partner.name[0]}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-md bg-[#E6F8F5] text-[#00A896]">
                    {partner.type}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">
                  {partner.name}
                </h3>

                <p className="text-xs text-[#5C5056] leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EAE0DD] text-[10px] font-mono text-[#7E7077]">
                Official Business Associate
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
