"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import IndiarkLogo from "../layout/IndiarkLogo";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function FinalCta() {
  return (
    <section className="py-28 bg-[#090B0D] relative overflow-hidden text-center">
      <BrandDotMotif count={6} />

      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-radial-glow blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-dark-grid opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Brand Logo */}
        <div className="flex justify-center mb-6">
          <IndiarkLogo className="h-14 sm:h-16 md:h-20" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
          <span>FROM CREATIVE VISION TO COMMERCIAL REALITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F8F9FA] tracking-tight leading-[1.15] mb-6">
          HAVE GREAT CONTENT? <br className="hidden sm:inline" />
          <span className="font-extrabold text-[#F5DE88]">LET&apos;S FIND THE RIGHT OPPORTUNITY.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Connect with Indiark Entertainments today. Protect your intellectual property, expand your market valuation, and access qualified domestic &amp; global buyers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/submit-content"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-[0.14em] uppercase bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] active:scale-[0.98] transition-all shadow-xl shadow-[#F5DE88]/20"
          >
            <span>SUBMIT CONTENT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-[0.14em] uppercase border border-white/20 bg-white/[0.03] text-[#F8F9FA] hover:bg-white/[0.08] hover:border-white/40 transition-all shadow-sm"
          >
            <span>CONTACT INDIARK</span>
            <Send className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
