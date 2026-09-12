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
    <section id="our-work" className="py-24 bg-[#090B0D] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
              <span>REPRESENTATION CATALOGUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] tracking-tight">
              SELECTED <span className="font-extrabold text-[#F5DE88]">WORK</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === f
                    ? "bg-[#F5DE88] text-[#090B0D] font-bold shadow-lg shadow-[#F5DE88]/20"
                    : "bg-[#141820] text-[#94A3B8] border border-white/[0.08] hover:border-white/20 hover:text-white"
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
          <div className="text-center py-20 px-4 rounded-3xl bg-[#141820] border border-white/[0.08] shadow-2xl">
            <Film className="w-10 h-10 text-[#64748B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#F8F9FA] mb-2">
              SELECTED PROJECTS COMING SOON
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
              New verified titles under representation are currently undergoing commercial and legal onboarding.
            </p>
            <Link
              href="/submit-content"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5DE88] text-[#090B0D] text-xs font-bold tracking-wider uppercase hover:bg-[#FACC15] transition-all shadow-lg shadow-[#F5DE88]/20"
            >
              <span>SUBMIT YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F5DE88] hover:text-[#FCEEAC] uppercase transition-colors"
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
