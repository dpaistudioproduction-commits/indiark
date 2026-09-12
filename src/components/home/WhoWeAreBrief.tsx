import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function WhoWeAreBrief() {
  return (
    <section id="who-we-are" className="py-24 bg-[#FAF6F5] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Credibility Visual (Span 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-[#FFFFFF] border border-[#EAE0DD] shadow-xl shadow-[#781D2A]/5">
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-[#781D2A] flex items-center justify-center text-white font-bold shadow-md shadow-[#781D2A]/30">
                <Award className="w-5 h-5" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                <span>INDUSTRY CREDIBILITY</span>
              </div>

              <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-[#781D2A] leading-none tracking-tight mb-4">
                20+
              </div>

              <div className="text-xl sm:text-2xl font-serif font-bold text-[#141115] tracking-wide uppercase mb-4">
                YEARS OF COMBINED MEDIA EXPERIENCE
              </div>

              <p className="text-sm text-[#4A3F45] leading-relaxed border-t border-[#EAE0DD] pt-4">
                Built on deep industry relationships spanning national television broadcasters, top-tier OTT streamers, theatrical networks, and international content syndicators.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] leading-tight">
              MEDIA EXPERIENCE. BUSINESS UNDERSTANDING.{" "}
              <span className="text-[#781D2A]">INDUSTRY CONNECTIONS.</span>
            </h2>

            <p className="text-base text-[#4A3F45] leading-relaxed">
              Indiark Entertainments is backed by seasoned professionals with more than 20 years of combined operational experience across television, film, OTT, digital media and the entertainment business.
            </p>

            <p className="text-sm text-[#5C5056] leading-relaxed">
              We operate not as creative spectators, but as dedicated commercial facilitators who understand the financial realities of filmmaking, the complex legal nuances of copyright exploitation, and the exact acquisition criteria demanded by corporate media buyers.
            </p>

            {/* Media Sectors Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["TELEVISION", "FILM", "OTT", "DIGITAL MEDIA", "ENTERTAINMENT BUSINESS"].map((s, idx) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-[#FFFFFF] border border-[#EAE0DD] text-[#141115]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE0DD] shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#141115] uppercase tracking-wider">Rights Integrity</div>
                  <div className="text-[11px] text-[#5C5056]">Strict legal diligence protecting title ownership.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE0DD] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#781D2A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#141115] uppercase tracking-wider">Direct Buyer Access</div>
                  <div className="text-[11px] text-[#5C5056]">Direct pitches to decision-makers, not gatekeepers.</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#781D2A] hover:text-[#5C121E] uppercase transition-colors"
              >
                <span>LEARN MORE ABOUT OUR LEADERSHIP &amp; NETWORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
