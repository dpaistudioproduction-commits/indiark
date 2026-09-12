"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, ArrowUpRight, BookOpen, Users, Film, Briefcase } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function AssociatedOrg() {
  const ECOSYSTEM_STEPS = [
    { title: "EDUCATION", icon: <GraduationCap className="w-4 h-4 text-[#781D2A]" /> },
    { title: "TALENT", icon: <Users className="w-4 h-4 text-[#00A896]" /> },
    { title: "CONTENT", icon: <Film className="w-4 h-4 text-[#1B998B]" /> },
    { title: "MEDIA", icon: <BookOpen className="w-4 h-4 text-[#84CC16]" /> },
    { title: "BUSINESS", icon: <Briefcase className="w-4 h-4 text-[#781D2A]" /> }
  ];

  return (
    <section className="py-24 bg-[#FAF6F5] relative overflow-hidden">
      <BrandDotMotif count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#FFFFFF] border border-[#EAE0DD] shadow-xl shadow-[#781D2A]/5">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-widest text-[#781D2A] uppercase font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                <span>ASSOCIATED ACADEMIC INITIATIVE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141115] leading-tight">
                MEDIA EDGE <span className="text-[#781D2A]">SCHOOL OF ACADEMICS</span>
              </h2>

              <p className="text-base text-[#4A3F45] leading-relaxed">
                An associated academic and media education initiative focused on developing foundational knowledge, advanced production skills, and industry-ready talent for the next generation of Indian media and entertainment.
              </p>

              {/* Education to Business Pipeline Visualization */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-[#7E7077] uppercase font-bold tracking-wider mb-3">
                  TALENT-TO-COMMERCE ECOSYSTEM PIPELINE:
                </div>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {ECOSYSTEM_STEPS.map((step, idx) => (
                    <React.Fragment key={step.title}>
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF6F5] border border-[#E8D8D3] text-xs font-mono font-bold tracking-wider text-[#141115]">
                        {step.icon}
                        <span>{step.title}</span>
                      </div>
                      {idx < ECOSYSTEM_STEPS.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#00A896] shrink-0 hidden sm:block" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#FAF6F5] border border-[#E8D8D3] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#141115]">
                  Academic Synergies &amp; Media Training
                </h4>
                <p className="text-xs text-[#5C5056] leading-relaxed">
                  Bridging classroom theoretical knowledge with practical film sets, post-production pipelines, and commercial distribution realities.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#781D2A] hover:text-[#5C121E] transition-colors"
                  >
                    <span>ACADEMIC ALLIANCES &amp; ENQUIRIES</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
