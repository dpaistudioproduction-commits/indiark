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
      badgeColor: "bg-[#00A896] text-white border-[#00A896]",
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
      badgeColor: "bg-[#1B998B] text-white border-[#1B998B]",
      dotColor: "bg-[#1B998B]",
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
      badgeColor: "bg-[#00A896] text-white border-[#00A896]",
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
    <section className="py-24 bg-[#FAF6F5] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>THE BUSINESS IDEA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-4">
            GREAT CONTENT NEEDS THE <span className="text-[#781D2A]">RIGHT CONNECTION</span>.
          </h2>
          <p className="text-[#4A3F45] text-sm sm:text-base leading-relaxed">
            Content creation and media distribution require distinct skill sets. Indiark Entertainments operates as the commercial catalyst bridging creative vision with institutional buyers.
          </p>
        </div>

        {/* 5-Step Flow Vector Strip */}
        <div className="mb-14 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE0DD] shadow-xs flex flex-wrap items-center justify-around gap-2 text-center text-[11px] font-mono font-bold text-[#141115]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#781D2A]" />
            CONTENT OWNER
          </span>
          <span className="text-[#781D2A] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#781D2A] text-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            INDIARK
          </span>
          <span className="text-[#781D2A] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#781D2A]" />
            RIGHT PLATFORM
          </span>
          <span className="text-[#781D2A] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#781D2A]" />
            RIGHT MARKET
          </span>
          <span className="text-[#781D2A] font-bold text-base">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20 shadow-2xs">
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
                    ? "bg-[#FFFFFF] border-2 border-[#781D2A] shadow-xl shadow-[#781D2A]/10 -translate-y-1"
                    : "bg-[#FFFFFF] border border-[#EAE0DD] hover:border-[#781D2A]/50 shadow-md"
                } ${isSelected ? "ring-2 ring-[#781D2A]/30" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Small Blush/Maroon Box Heading */}
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1.5 rounded-lg shadow-2xs ${
                      isIndiark
                        ? "bg-[#781D2A] text-white"
                        : "bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20"
                    }`}>
                      {node.role}
                    </span>
                    <span className="text-xs font-mono text-[#781D2A] font-bold px-2 py-0.5 rounded bg-[#FDE8E9]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141115] mb-1">
                    {node.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#781D2A] mb-4">
                    {node.subtitle}
                  </div>

                  <p className="text-sm text-[#4A3F45] leading-relaxed mb-6">
                    {node.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {node.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#FAF6F5] text-[#4A3F45] border border-[#E8D8D3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={node.actionHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#781D2A] hover:bg-[#5C121E] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md shadow-[#781D2A]/20"
                  >
                    <span>{node.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {isSelected && (
                  <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#781D2A] rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Business Equation Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE0DD] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#781D2A]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#141115]">Commercial Integrity &amp; Pure Advocacy</div>
              <div className="text-xs text-[#5C5056]">Indiark does not claim ownership of rights—we champion content creators to achieve the highest possible market valuation.</div>
            </div>
          </div>
          <Link
            href="/who-we-are"
            className="shrink-0 text-xs font-mono font-bold tracking-widest uppercase px-6 py-3 rounded-xl bg-[#781D2A] hover:bg-[#5C121E] text-white transition-all shadow-md shadow-[#781D2A]/20"
          >
            DISCOVER OUR STORY
          </Link>
        </div>

      </div>
    </section>
  );
}
