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

  // Curated, brand-aligned dot motif: Predominantly soft red/blush/maroon with subtle teal/lime sparks
  const DOTS = [
    { top: "14%", left: "9%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-80", color: "bg-[#781D2A]" }, // Deep Maroon
    { top: "22%", left: "89%", size: "w-3 h-3", anim: "brand-dot-b", opacity: "opacity-60", color: "bg-[#E84A5F]" }, // Soft Rose/Blush
    { top: "38%", left: "6%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-75", color: "bg-[#00A896]" }, // Teal Spark
    { top: "64%", left: "93%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-70", color: "bg-[#781D2A]" }, // Maroon
    { top: "76%", left: "12%", size: "w-3.5 h-3.5", anim: "brand-dot-b", opacity: "opacity-60", color: "bg-[#E84A5F]" }, // Soft Rose/Blush
    { top: "18%", left: "76%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-65", color: "bg-[#84CC16]" }, // Lime Spark
    { top: "84%", left: "84%", size: "w-2.5 h-2.5", anim: "brand-dot-a", opacity: "opacity-75", color: "bg-[#781D2A]" }, // Maroon
    { top: "48%", left: "95%", size: "w-1.5 h-1.5", anim: "brand-dot-b", opacity: "opacity-60", color: "bg-[#E84A5F]" }, // Soft Rose/Blush
    { top: "90%", left: "20%", size: "w-2 h-2", anim: "brand-dot-c", opacity: "opacity-70", color: "bg-[#00A896]" }, // Teal Spark
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
      {/* Very subtle connection guideline arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 120 180 Q 300 100 500 150 T 980 120"
          fill="none"
          stroke="#781D2A"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
        <path
          d="M 200 680 Q 550 720 900 640"
          fill="none"
          stroke="#00A896"
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
            transform: `translateY(${scrollY * (0.03 * ((idx % 3) + 1))}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
