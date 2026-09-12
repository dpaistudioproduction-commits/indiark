"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { INITIAL_PROJECTS } from "@/lib/data";
import ProjectModal from "../work/ProjectModal";
import ProjectCard3D from "../three/ProjectCard3D";
import { ArrowUpRight, Filter, Eye, ShieldCheck, Film } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

const FILTERS = ["ALL", "FILMS", "WEB SERIES", "DIGITAL", "MUSIC", "PRODUCTION", "OTHER"] as const;

interface SelectedWorkProps {
  initialProjects?: Project[];
}

export default function SelectedWork({ initialProjects = INITIAL_PROJECTS }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = initialProjects.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="our-work" className="py-24 bg-[#FAF6F5] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-[#E8D8D3] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>REPRESENTATION CATALOGUE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight">
              SELECTED <span className="text-[#781D2A]">WORK</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                  activeFilter === f
                    ? "bg-[#781D2A] text-white font-bold shadow-md shadow-[#781D2A]/20"
                    : "bg-[#FFFFFF] text-[#5C5056] border border-[#E8D8D3] hover:border-[#D8C7C3] hover:text-[#141115]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-sm">
            <Film className="w-10 h-10 text-[#8C7D84] mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#141115] mb-2">
              SELECTED PROJECTS COMING SOON
            </h3>
            <p className="text-sm text-[#5C5056] max-w-md mx-auto mb-6">
              New verified titles under representation are currently undergoing commercial and legal onboarding.
            </p>
            <Link
              href="/submit-content"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#781D2A] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#5C121E] transition-all shadow-md shadow-[#781D2A]/20"
            >
              <span>SUBMIT YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#781D2A] hover:text-[#5C121E] uppercase transition-colors"
          >
            <span>VIEW COMPLETE WORK &amp; CATALOGUE ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
