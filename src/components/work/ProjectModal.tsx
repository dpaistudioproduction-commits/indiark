"use client";

import React from "react";
import { Project } from "@/lib/types";
import { X, ShieldCheck, Film, Calendar, Globe, Tag, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#E8D8D3] rounded-3xl shadow-2xl text-[#141115]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAF6F5] hover:bg-[#F5ECE8] text-[#5C5056] hover:text-[#141115] border border-[#E8D8D3] transition-colors"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Poster Column (Span 5) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden border border-[#E8D8D3] shadow-lg bg-[#141115]">
              <img
                src={project.posterUrl}
                alt={`${project.title} official poster`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Column (Span 7) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/20 text-[10px] font-mono tracking-widest uppercase font-bold shadow-xs">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#FAF6F5] text-[#5C5056] border border-[#EAE0DD] text-[10px] font-mono tracking-wider uppercase">
                  {project.projectType}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#F4FBE8] text-[#65A30D] border border-[#84CC16]/30 text-[10px] font-mono tracking-wider uppercase font-semibold">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141115] mb-2">
                {project.title}
              </h2>
              {project.tagline && (
                <p className="text-xs font-mono font-bold tracking-wider text-[#781D2A] uppercase mb-4">
                  {project.tagline}
                </p>
              )}

              {/* Synopsis */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono tracking-wider text-[#7A6C72] uppercase font-bold mb-1">
                  Synopsis
                </h4>
                <p className="text-sm text-[#4A3F45] leading-relaxed">
                  {project.synopsis || project.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FAF6F5] border border-[#EAE0DD] mb-6 text-xs">
                <div>
                  <span className="text-[#7A6C72] block text-[10px] uppercase font-mono">Language</span>
                  <span className="font-semibold text-[#141115]">{project.language}</span>
                </div>
                <div>
                  <span className="text-[#7A6C72] block text-[10px] uppercase font-mono">Genre</span>
                  <span className="font-semibold text-[#141115]">{project.genre}</span>
                </div>
                <div>
                  <span className="text-[#7A6C72] block text-[10px] uppercase font-mono">Production Year</span>
                  <span className="font-semibold text-[#141115]">{project.year}</span>
                </div>
                <div>
                  <span className="text-[#7A6C72] block text-[10px] uppercase font-mono">Territories</span>
                  <span className="font-semibold text-[#781D2A]">Pan-India &amp; Global</span>
                </div>
              </div>

              {/* Representation Scope Box */}
              <div className="p-4 rounded-2xl bg-[#FDE8E9]/80 border border-[#781D2A]/20 mb-6">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#781D2A] uppercase font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#781D2A]" />
                  <span>INDIARK REPRESENTATION ROLE</span>
                </div>
                <div className="text-xs font-bold text-[#141115]">
                  {project.indiarkRole}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#EAE0DD]">
              <Link
                href="/for-platforms"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#781D2A] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#5C121E] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#781D2A]/20"
              >
                <span>REQUEST BUYER SCREENER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/submit-content"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#E8D8D3] hover:border-[#781D2A] text-[#5C5056] hover:text-[#781D2A] text-xs font-mono font-bold tracking-widest uppercase transition-colors text-center bg-[#FAF6F5]"
              >
                SUBMIT SIMILAR TITLE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
