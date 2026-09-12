"use client";

import React, { useEffect, useState } from "react";

interface BrandDotMotifProps {
  className?: string;
  count?: number;
}

export default function BrandDotMotif({ className = "", count = 9 }: BrandDotMotifProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Luminous subtle dots aligned to dark luxury media interface: Pale Yellow, Cyan, Emerald
  const DOTS = [
    { top: "12%", left: "8%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-40", color: "bg-[#F5DE88]" }, // Warm Pale Yellow
    { top: "20%", left: "91%", size: "w-3 h-3", anim: "brand-dot-b", opacity: "opacity-30", color: "bg-[#06B6D4]" }, // Soft Cyan
    { top: "36%", left: "5%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-35", color: "bg-[#10B981]" }, // Emerald
    { top: "62%", left: "94%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-30", color: "bg-[#F5DE88]" }, // Warm Pale Yellow
    { top: "74%", left: "11%", size: "w-3 h-3", anim: "brand-dot-b", opacity: "opacity-25", color: "bg-[#06B6D4]" }, // Soft Cyan
    { top: "16%", left: "78%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-30", color: "bg-[#F5DE88]" }, // Warm Pale Yellow
    { top: "82%", left: "86%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-35", color: "bg-[#10B981]" }, // Emerald
    { top: "46%", left: "96%", size: "w-1.5 h-1.5", anim: "brand-dot-b", opacity: "opacity-25", color: "bg-[#F5DE88]" }, // Warm Pale Yellow
    { top: "88%", left: "18%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-30", color: "bg-[#06B6D4]" }, // Soft Cyan
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
      {/* Very subtle connection guideline arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 120 180 Q 300 100 500 150 T 980 120"
          fill="none"
          stroke="#F5DE88"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
        <path
          d="M 200 680 Q 550 720 900 640"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="0.75"
          strokeDasharray="3 5"
        />
      </svg>

      {/* Floating Brand Dots */}
      {DOTS.slice(0, count).map((dot, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full shadow-xs ${dot.size} ${dot.color} ${dot.opacity} ${dot.anim}`}
          style={{
            top: dot.top,
            left: dot.left,
            transform: `translateY(${scrollY * (0.02 * ((idx % 3) + 1))}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
