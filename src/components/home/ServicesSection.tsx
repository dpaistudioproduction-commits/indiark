"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CORE_SERVICES } from "@/lib/data";
import { Tv, ShieldCheck, Layers, Music, Smartphone, Clapperboard, ArrowUpRight, Check } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

const ICON_MAP: Record<string, React.ReactNode> = {
  Tv2: <Tv className="w-5 h-5 text-[#781D2A]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#781D2A]" />,
  Layers: <Layers className="w-5 h-5 text-[#781D2A]" />,
  Music: <Music className="w-5 h-5 text-[#781D2A]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#781D2A]" />,
  Clapperboard: <Clapperboard className="w-5 h-5 text-[#781D2A]" />
};

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="what-we-do" className="py-24 bg-[#FAF6F5] relative overflow-hidden">
      <BrandDotMotif count={7} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#E8D8D3] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight">
              SIX STRATEGIC <span className="text-[#781D2A]">PILLARS</span>
            </h2>
          </div>
          <p className="text-[#4A3F45] text-sm max-w-md">
            Specialized representation spanning digital premieres, international rights syndication, music monetization, and production alignment.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setExpandedId(service.id)}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isExpanded
                    ? "bg-[#FFFFFF] border-[#781D2A]/50 shadow-xl shadow-[#781D2A]/8 -translate-y-1"
                    : "bg-[#FFFFFF] border-[#EAE0DD] hover:border-[#781D2A]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FDE8E9] border border-[#781D2A]/20 flex items-center justify-center shadow-xs">
                      {ICON_MAP[service.icon] || <Layers className="w-5 h-5 text-[#781D2A]" />}
                    </div>
                    <span className="font-mono text-2xl font-bold text-[#D8C7C3]">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#141115] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-[11px] font-mono font-bold tracking-wider uppercase mb-3 text-[#781D2A]">
                    {service.subtitle}
                  </div>

                  <p className="text-sm text-[#4A3F45] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#EAE0DD] mb-6">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#5C5056]">
                        <Check className="w-3.5 h-3.5 text-[#781D2A] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/submit-content"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#4A3F45] hover:text-[#781D2A] uppercase transition-colors"
                  >
                    <span>PITCH FOR THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8D8D3] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-[#141115]">Have a complete film, catalogue, or series ready for market evaluation?</div>
            <div className="text-xs text-[#5C5056]">Our representation team assesses viability with zero upfront evaluation fee.</div>
          </div>
          <Link
            href="/submit-content"
            className="shrink-0 px-6 py-3 rounded-lg bg-[#781D2A] hover:bg-[#5C121E] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md shadow-[#781D2A]/20"
          >
            SUBMIT PROJECT
          </Link>
        </div>

      </div>
    </section>
  );
}
