"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function BusinessBridge() {
  const [activeNode, setActiveNode] = useState<number>(1);

  const NODES = [
    {
      id: 0,
      role: "CONTENT OWNER",
      badgeColor: "bg-white/[0.08] text-[#F8F9FA] border-white/15",
      dotColor: "bg-[#00A896]",
      title: "Content Owners",
      subtitle: "Producers, Filmmakers & Artists",
      description: "Film producers, production houses, and independent artists holding high-potential intellectual properties, completed masters, or works in post-production.",
      tags: ["Feature Films", "Web Series", "Music Catalogues", "Documentaries"],
      actionLabel: "Submit Content",
      actionHref: "/submit-content"
    },
    {
      id: 1,
      role: "THE STRATEGIC CONNECTOR",
      badgeColor: "bg-[#F5DE88] text-[#090B0D] border-[#F5DE88]",
      dotColor: "bg-[#F5DE88]",
      title: "Indiark Entertainments",
      subtitle: "Media Rights & Entertainment Business Agency",
      description: "We act as the specialized commercial bridge: auditing rights, packaging commercial pitch decks, negotiating optimal license terms, and securing deal closures.",
      tags: ["Rights Audit", "OTT Pitching", "Valuation", "Deal Negotiation"],
      actionLabel: "Explore How We Work",
      actionHref: "#how-we-work"
    },
    {
      id: 2,
      role: "RIGHT PLATFORM & OPPORTUNITY",
      badgeColor: "bg-white/[0.08] text-[#F8F9FA] border-white/15",
      dotColor: "bg-[#00A896]",
      title: "Platforms, Buyers & Markets",
      subtitle: "OTTs, Broadcasters & Distributors",
      description: "Leading digital streaming services, satellite television channels, airline in-flight buyers, and international theatrical/dubbing distribution networks.",
      tags: ["National OTTs", "Satellite TV", "In-Flight (IFE)", "International Buyers"],
      actionLabel: "Buyer Requirements",
      actionHref: "/for-platforms"
    }
  ];

  return (
    <section className="py-24 bg-[#090B0D] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>THE BUSINESS IDEA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            GREAT CONTENT NEEDS THE <span className="font-extrabold text-[#F5DE88]">RIGHT CONNECTION</span>.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Content creation and media distribution require distinct skill sets. Indiark Entertainments operates as the commercial catalyst bridging creative vision with institutional buyers.
          </p>
        </div>

        {/* 5-Step Flow Vector Strip */}
        <div className="mb-14 p-4 rounded-2xl bg-[#141820] border border-white/[0.08] shadow-lg flex flex-wrap items-center justify-around gap-2 text-center text-[11px] font-mono font-bold text-[#F8F9FA]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] text-[#CBD5E1] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5DE88]" />
            CONTENT OWNER
          </span>
          <span className="text-[#F5DE88] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5DE88] text-[#090B0D] shadow-md shadow-[#F5DE88]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            INDIARK
          </span>
          <span className="text-[#F5DE88] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] text-[#CBD5E1] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5DE88]" />
            RIGHT PLATFORM
          </span>
          <span className="text-[#F5DE88] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] text-[#CBD5E1] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5DE88]" />
            RIGHT MARKET
          </span>
          <span className="text-[#F5DE88] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] text-[#CBD5E1] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            RIGHT OPPORTUNITY
          </span>
        </div>

        {/* 3 Interactive Route Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {NODES.map((node, index) => {
            const isIndiark = index === 1;
            const isSelected = activeNode === index;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(index)}
                className={`relative rounded-3xl p-7 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isIndiark
                    ? "bg-[#181D26] border-2 border-[#F5DE88] shadow-2xl shadow-black/80 -translate-y-1"
                    : "bg-[#141820] border border-white/[0.08] hover:border-white/20 shadow-lg"
                } ${isSelected ? "ring-2 ring-[#F5DE88]/30" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full ${
                      isIndiark
                        ? "bg-[#F5DE88] text-[#090B0D] font-bold"
                        : "bg-white/[0.06] text-[#CBD5E1] border border-white/10"
                    }`}>
                      {node.role}
                    </span>
                    <span className="text-xs font-mono text-[#F5DE88] font-bold px-2 py-0.5 rounded bg-white/[0.06]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8F9FA] mb-1">
                    {node.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#F5DE88] mb-4">
                    {node.subtitle}
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {node.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {node.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#CBD5E1] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={node.actionHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#F5DE88]/20"
                  >
                    <span>{node.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {isSelected && (
                  <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#F5DE88] rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Business Equation Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#141820] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#F5DE88]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F8F9FA]">Commercial Integrity &amp; Pure Advocacy</div>
              <div className="text-xs text-[#94A3B8]">Indiark does not claim ownership of rights—we champion content creators to achieve the highest possible market valuation.</div>
            </div>
          </div>
          <Link
            href="/who-we-are"
            className="shrink-0 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 transition-all shadow-sm"
          >
            DISCOVER OUR STORY
          </Link>
        </div>

      </div>
    </section>
  );
}
