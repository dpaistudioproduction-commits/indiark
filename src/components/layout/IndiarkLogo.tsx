"use client";

import React from "react";

interface IndiarkLogoProps {
  className?: string;
  showText?: boolean;
}

export default function IndiarkLogo({ className = "h-10", showText = false }: IndiarkLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/indiark-logo.png"
        alt="Indiark Entertainments Logo"
        className="h-full w-auto object-contain max-h-[72px] drop-shadow-xs"
      />
    </div>
  );
}
