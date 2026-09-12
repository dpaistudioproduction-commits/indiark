"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, ArrowUpRight, BookOpen, Users, Film, Briefcase } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function AssociatedOrg() {
  const ECOSYSTEM_STEPS = [
    { title: "EDUCATION", icon: <GraduationCap className="w-4 h-4 text-[#F5DE88]" /> },
    { title: "TALENT", icon: <Users className="w-4 h-4 text-[#00A896]" /> },
    { title: "CONTENT", icon: <Film className="w-4 h-4 text-[#06B6D4]" /> },
    { title: "MEDIA", icon: <BookOpen className="w-4 h-4 text-[#84CC16]" /> },
    { title: "BUSINESS", icon: <Briefcase className="w-4 h-4 text-[#F5DE88]" /> }
  ];

  return (
    <section className="py-24 bg-[#090B0D] relative overflow-hidden">
      <BrandDotMotif count={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#141820] border border-white/[0.08] shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-wider text-[#F5DE88] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                <span>ASSOCIATED ACADEMIC INITIATIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-light text-[#F8F9FA] leading-tight">
                MEDIA EDGE <span className="font-extrabold text-[#F5DE88]">SCHOOL OF ACADEMICS</span>
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                An associated academic and media education initiative focused on developing foundational knowledge, advanced production skills, and industry-ready talent for the next generation of Indian media and entertainment.
              </p>

              {/* Education to Business Pipeline Visualization */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-[#64748B] uppercase font-bold tracking-wider mb-3">
                  TALENT-TO-COMMERCE ECOSYSTEM PIPELINE:
                </div>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {ECOSYSTEM_STEPS.map((step, idx) => (
                    <React.Fragment key={step.title}>
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#181D26] border border-white/[0.08] text-xs font-semibold tracking-wider text-[#F8F9FA]">
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
              <div className="p-6 rounded-2xl bg-[#181D26] border border-white/[0.08] space-y-4">
                <h4 className="text-lg font-bold text-[#F8F9FA]">
                  Academic Synergies &amp; Media Training
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Bridging classroom theoretical knowledge with practical film sets, post-production pipelines, and commercial distribution realities.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#F5DE88] hover:text-[#FCEEAC] transition-colors"
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
