"use client";

import React, { useState, useRef } from "react";
import { Project } from "@/lib/types";
import { Eye } from "lucide-react";

interface ProjectCard3DProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard3D({ project, onSelect }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E8D8D3] hover:border-[#C82333]/50 shadow-xl hover:shadow-2xl hover:shadow-[#8B1524]/10 cursor-pointer flex flex-col justify-between transition-all duration-300"
    >
      {/* Specular Glare Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(200, 35, 51, ${glarePos.opacity}) 0%, transparent 60%)`,
        }}
      />

      {/* Visual Poster Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#141115]">
        <img
          src={project.posterUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-md bg-[#FAF6F5]/90 backdrop-blur-md text-[#781D2A] border border-[#781D2A]/20 text-[10px] font-mono font-bold tracking-widest uppercase shadow-sm">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase font-semibold">
            {project.year}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#781D2A] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-xl">
            <Eye className="w-4 h-4" />
            <span>Inspect Project Details</span>
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#141115] group-hover:text-[#781D2A] transition-colors mb-1">
            {project.title}
          </h3>
          <div className="text-xs font-mono font-bold text-[#781D2A] tracking-wider uppercase mb-3">
            {project.projectType} • {project.language}
          </div>

          <p className="text-sm text-[#4A3F45] leading-relaxed line-clamp-2 mb-6">
            {project.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#EAE0DD]">
          <div className="text-[10px] font-mono text-[#7A6C72] uppercase font-bold mb-1">
            Indiark Representation Scope:
          </div>
          <div className="text-xs font-semibold text-[#141115]">
            {project.indiarkRole}
          </div>
        </div>
      </div>
    </div>
  );
}
