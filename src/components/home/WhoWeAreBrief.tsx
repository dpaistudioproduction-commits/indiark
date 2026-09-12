import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function WhoWeAreBrief() {
  return (
    <section id="who-we-are" className="py-24 bg-[#0B0E14] border-y border-white/[0.08] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Credibility Visual (Span 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-[#141820] border border-white/[0.08] shadow-2xl">
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-[#F5DE88] flex items-center justify-center text-[#090B0D] font-bold shadow-lg shadow-[#F5DE88]/20">
                <Award className="w-5 h-5" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
                <span>INDUSTRY CREDIBILITY</span>
              </div>

              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#F5DE88] leading-none tracking-tight mb-4">
                20+
              </div>

              <div className="text-xl sm:text-2xl font-bold text-[#F8F9FA] tracking-wide uppercase mb-4">
                YEARS OF COMBINED MEDIA EXPERIENCE
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.08] pt-4">
                Built on deep industry relationships spanning national television broadcasters, top-tier OTT streamers, theatrical networks, and international content syndicators.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#F5DE88] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F9FA] leading-tight">
              MEDIA EXPERIENCE. BUSINESS UNDERSTANDING.{" "}
              <span className="font-extrabold text-[#F5DE88]">INDUSTRY CONNECTIONS.</span>
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              Indiark Entertainments is backed by seasoned professionals with more than 20 years of combined operational experience across television, film, OTT, digital media and the entertainment business.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              We operate not as creative spectators, but as dedicated commercial facilitators who understand the financial realities of filmmaking, the complex legal nuances of copyright exploitation, and the exact acquisition criteria demanded by corporate media buyers.
            </p>

            {/* Media Sectors Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["TELEVISION", "FILM", "OTT", "DIGITAL MEDIA", "ENTERTAINMENT BUSINESS"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-[#141820] border border-white/[0.08] text-[#CBD5E1]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#141820] border border-white/[0.08] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#F8F9FA] uppercase tracking-wider">Rights Integrity</div>
                  <div className="text-[11px] text-[#94A3B8]">Strict legal diligence protecting title ownership.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#141820] border border-white/[0.08] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#F5DE88] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#F8F9FA] uppercase tracking-wider">Direct Buyer Access</div>
                  <div className="text-[11px] text-[#94A3B8]">Direct pitches to decision-makers, not gatekeepers.</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F5DE88] hover:text-[#FCEEAC] uppercase transition-colors"
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
