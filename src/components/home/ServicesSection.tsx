"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CORE_SERVICES } from "@/lib/data";
import { Tv, ShieldCheck, Layers, Music, Smartphone, Clapperboard, ArrowUpRight, Check } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

const ICON_MAP: Record<string, React.ReactNode> = {
  Tv2: <Tv className="w-5 h-5 text-[#F5DE88]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#F5DE88]" />,
  Layers: <Layers className="w-5 h-5 text-[#F5DE88]" />,
  Music: <Music className="w-5 h-5 text-[#F5DE88]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#F5DE88]" />,
  Clapperboard: <Clapperboard className="w-5 h-5 text-[#F5DE88]" />
};

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="what-we-do" className="py-24 bg-[#090B0D] relative overflow-hidden">
      <BrandDotMotif count={7} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight">
              SIX STRATEGIC <span className="font-extrabold text-[#F5DE88]">PILLARS</span>
            </h2>
          </div>
          <p className="text-[#94A3B8] text-sm max-w-md">
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
                    ? "bg-[#181D26] border-[#F5DE88]/40 shadow-2xl shadow-black/80 -translate-y-1"
                    : "bg-[#141820] border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center shadow-inner">
                      {ICON_MAP[service.icon] || <Layers className="w-5 h-5 text-[#F5DE88]" />}
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/20">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-[11px] font-mono font-semibold tracking-wider uppercase mb-3 text-[#F5DE88]">
                    {service.subtitle}
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/[0.08] mb-6">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <Check className="w-3.5 h-3.5 text-[#F5DE88] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/submit-content"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#94A3B8] hover:text-[#F5DE88] uppercase transition-colors"
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
        <div className="mt-14 p-8 rounded-3xl bg-[#141820] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <div className="text-base font-bold text-[#F8F9FA]">Have a complete film, catalogue, or series ready for market evaluation?</div>
            <div className="text-xs text-[#94A3B8] mt-1">Our representation team assesses viability with zero upfront evaluation fee.</div>
          </div>
          <Link
            href="/submit-content"
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#F5DE88]/20"
          >
            SUBMIT PROJECT
          </Link>
        </div>

      </div>
    </section>
  );
}
