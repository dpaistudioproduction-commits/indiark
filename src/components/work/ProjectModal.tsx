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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141820] border border-white/[0.08] rounded-3xl shadow-2xl text-[#F8F9FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#94A3B8] hover:text-white border border-white/10 transition-colors"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Poster Column (Span 5) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090B0D]">
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
                <span className="px-3 py-1 rounded-full bg-white/[0.06] text-[#F5DE88] border border-white/10 text-[10px] font-semibold tracking-widest uppercase shadow-xs">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[#CBD5E1] border border-white/[0.08] text-[10px] font-mono tracking-wider uppercase">
                  {project.projectType}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono tracking-wider uppercase font-semibold">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F8F9FA] mb-2">
                {project.title}
              </h2>
              {project.tagline && (
                <p className="text-xs font-mono font-semibold tracking-wider text-[#F5DE88] uppercase mb-4">
                  {project.tagline}
                </p>
              )}

              {/* Synopsis */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono tracking-wider text-[#64748B] uppercase font-bold mb-1">
                  Synopsis
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.synopsis || project.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#181D26] border border-white/[0.06] mb-6 text-xs">
                <div>
                  <span className="text-[#64748B] block text-[10px] uppercase font-mono">Language</span>
                  <span className="font-semibold text-[#F8F9FA]">{project.language}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[10px] uppercase font-mono">Genre</span>
                  <span className="font-semibold text-[#F8F9FA]">{project.genre}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[10px] uppercase font-mono">Production Year</span>
                  <span className="font-semibold text-[#F8F9FA]">{project.year}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[10px] uppercase font-mono">Territories</span>
                  <span className="font-semibold text-[#F5DE88]">Pan-India &amp; Global</span>
                </div>
              </div>

              {/* Representation Scope Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#181D26] to-[#1E2430] border border-[#F5DE88]/30 mb-6">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#F5DE88] uppercase font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#F5DE88]" />
                  <span>INDIARK REPRESENTATION ROLE</span>
                </div>
                <div className="text-xs font-semibold text-[#CBD5E1]">
                  {project.indiarkRole}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.08]">
              <Link
                href="/for-platforms"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#F5DE88]/20"
              >
                <span>REQUEST BUYER SCREENER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/submit-content"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white hover:text-[#F5DE88] text-xs font-semibold tracking-wider uppercase transition-colors text-center bg-white/[0.03]"
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
