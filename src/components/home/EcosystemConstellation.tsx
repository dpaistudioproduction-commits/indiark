"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Globe2, Film, Tv, Music, Radio, Plane, Compass } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  description: string;
  marketPotential: string;
}

const NODES: EcosystemNode[] = [
  {
    id: "films",
    name: "FILMS",
    category: "Theatrical & Direct-to-Digital",
    description: "Commercial feature films, regional blockbusters, festival titles, and cross-border co-productions seeking SVOD premieres and syndication.",
    marketPotential: "Worldwide OTT, TVOD, Satellite & Dubbing",
  },
  {
    id: "web-series",
    name: "WEB SERIES",
    category: "Episodic & Limited Series",
    description: "High-concept investigative thrillers, crime series, anthologies, and multi-season originals packaged for tier-1 streaming networks.",
    marketPotential: "Multi-territory Originals & Commissioning",
  },
  {
    id: "ott",
    name: "OTT PLATFORMS",
    category: "Digital Streamers",
    description: "Direct engagement with major national, regional, and diaspora-focused streaming platforms acquiring finished libraries and exclusive windows.",
    marketPotential: "Direct Licensing & Platform Premieres",
  },
  {
    id: "television",
    name: "TELEVISION",
    category: "Linear & Satellite Broadcast",
    description: "Linear satellite television broadcast monetization across major national and regional channel networks with customized windowing.",
    marketPotential: "Satellite Rights & Terrestrial Syndication",
  },
  {
    id: "music",
    name: "MUSIC & AUDIO",
    category: "Soundtracks & Independent Albums",
    description: "Monetization of film OSTs, background scores, and independent music through digital streaming DSPs, sync licensing, and caller tunes.",
    marketPotential: "Global Streaming DSPs & Sync Licensing",
  },
  {
    id: "digital",
    name: "DIGITAL CONTENT",
    category: "Short-Format & Micro-Dramas",
    description: "Episodic web entertainment, FAST channel packages, and premium short-format intellectual properties with high engagement metrics.",
    marketPotential: "FAST Channels, YouTube MCN & Social AVOD",
  },
  {
    id: "regional",
    name: "REGIONAL CONTENT",
    category: "Vernacular Excellence",
    description: "Tamil, Telugu, Malayalam, Kannada, Hindi and regional Indian content packaged for national cross-over appeal and dubbed exploitation.",
    marketPotential: "Pan-India Release & Dubbed Exploitation",
  },
  {
    id: "in-flight",
    name: "IN-FLIGHT ENTERTAINMENT",
    category: "Aviation & Maritime",
    description: "Curated airline entertainment packages licensed to global carriers serving international transit passengers across premier routes.",
    marketPotential: "Global Airline Fleet Licences",
  },
  {
    id: "international",
    name: "INTERNATIONAL RIGHTS",
    category: "Cross-Border Markets",
    description: "North America, Europe, Middle East, Southeast Asia and diaspora theatrical/digital rights licensing with certified localized subtitles.",
    marketPotential: "Diaspora Streaming & Foreign Territory Sales",
  }
];

export default function EcosystemConstellation() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode>(NODES[0]);

  return (
    <section className="py-24 bg-[#0B0E14] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>MARKET CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            THE CONTENT <span className="font-extrabold text-[#F5DE88]">ECOSYSTEM</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            All entertainment formats and monetization corridors revolve around the central connector node: <strong className="text-[#F5DE88] font-bold">INDIARK</strong>.
          </p>
        </div>

        {/* Interactive Constellation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#141820] border border-white/[0.08] p-6 sm:p-10 shadow-2xl overflow-hidden">
              
              {/* Central Indiark Node */}
              <div className="flex flex-col items-center justify-center mb-8">
                <div className="relative p-6 rounded-2xl bg-[#181D26] border-2 border-[#F5DE88] shadow-2xl shadow-[#F5DE88]/10 flex flex-col items-center justify-center max-w-xs text-center">
                  <div className="w-3 h-3 rounded-full bg-[#00A896] mb-2 pulse-node" />
                  <span className="text-xl font-black tracking-[0.2em] text-[#F8F9FA]">
                    INDIARK
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#F5DE88] uppercase font-bold">
                    CENTRAL CONNECTOR HUB
                  </span>
                </div>
              </div>

              {/* Satellite Category Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                {NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#1E2430] border-[#F5DE88] text-[#F8F9FA] shadow-lg shadow-black/60"
                          : "bg-[#181D26]/80 border-white/[0.06] text-[#94A3B8] hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[11px] font-mono font-bold tracking-wider ${
                          isSelected ? "text-[#F5DE88]" : "text-[#F8F9FA]"
                        }`}>
                          {node.name}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />}
                      </div>
                      <span className="text-[10px] text-[#64748B] truncate block">
                        {node.category}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 text-center text-xs text-[#64748B] font-mono">
                Click any sector node to explore commercial monetization corridors
              </div>
            </div>
          </div>

          {/* Right: Selected Node Deep Dive */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-[#141820] border border-white/[0.08] shadow-2xl flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[#F5DE88]">
                    ECOSYSTEM NODE
                  </span>
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
                    {selectedNode.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-[#F8F9FA] mb-2">
                  {selectedNode.name}
                </h3>
                
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {selectedNode.description}
                </p>

                <div className="p-4 rounded-2xl bg-[#181D26] border border-white/[0.06] mb-6">
                  <div className="text-[10px] font-mono text-[#F5DE88] tracking-wider uppercase font-bold mb-1">
                    PRIMARY MONETIZATION CORRIDOR
                  </div>
                  <div className="text-xs font-semibold text-[#CBD5E1]">
                    {selectedNode.marketPotential}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <Link
                  href="/submit-content"
                  className="px-5 py-2.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1 shadow-md shadow-[#F5DE88]/20"
                >
                  <span>Submit {selectedNode.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/for-platforms"
                  className="text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                >
                  Buyer Catalog Request
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
