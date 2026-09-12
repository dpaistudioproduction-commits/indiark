import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import IndiarkLogo from "./IndiarkLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0E14] border-t border-white/[0.08] text-[#94A3B8] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-radial-glow blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Centered Main Indiark Brand Showcase */}
        <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-white/[0.08]">
          <Link href="/" className="inline-flex items-center justify-center group mb-4">
            <IndiarkLogo className="h-14 sm:h-16 md:h-18" />
          </Link>

          <p className="text-[11px] font-mono font-bold tracking-wider text-[#00A896] uppercase mb-3">
            MEDIA RIGHTS • CONTENT REPRESENTATION • OTT • FILM • MUSIC • DIGITAL
          </p>
          
          <p className="text-sm text-[#94A3B8] max-w-2xl leading-relaxed mb-4">
            Indiark Entertainments is a dedicated media rights representation and entertainment business agency helping filmmakers, producers and content owners connect with premier OTT platforms, broadcasters, and commercial buyers.
          </p>

          <div className="text-xs italic text-[#F5DE88]">
            “Connecting Content. Creating Opportunities. Closing Business.”
          </div>
        </div>

        {/* Navigation & Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-white/[0.08] text-center md:text-left">
          
          {/* Col 1: Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F8F9FA] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#F5DE88] transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/who-we-are" className="hover:text-[#F5DE88] transition-colors">WHO WE ARE</Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-[#F5DE88] transition-colors">WHAT WE DO</Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#F5DE88] transition-colors">OUR WORK</Link>
              </li>
              <li>
                <Link href="/#why-indiark" className="hover:text-[#F5DE88] transition-colors">WHY INDIARK</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5DE88] transition-colors">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Business Portals */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F8F9FA] uppercase mb-4">
              Business Portals
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/submit-content" className="text-[#F5DE88] hover:underline inline-flex items-center gap-1 font-bold transition-colors">
                  <span>SUBMIT CONTENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/for-platforms" className="hover:text-[#F5DE88] transition-colors">
                  FOR PLATFORMS &amp; BUYERS
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#rights-licensing" className="hover:text-[#F5DE88] transition-colors">
                  RIGHTS LICENSING MATRIX
                </Link>
              </li>
              <li>
                <Link href="/who-we-are#academic-partner" className="hover:text-[#F5DE88] transition-colors">
                  MEDIA EDGE ACADEMICS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Compliance */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F8F9FA] uppercase mb-4">
              Legal &amp; Policy
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/legal/content-submission-policy" className="hover:text-[#F5DE88] transition-colors">
                  SUBMISSION &amp; NDA POLICY
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-[#F5DE88] transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-and-conditions" className="hover:text-[#F5DE88] transition-colors">
                  TERMS &amp; CONDITIONS
                </Link>
              </li>
              <li>
                <Link href="/legal/copyright-disclaimer" className="hover:text-[#F5DE88] transition-colors">
                  COPYRIGHT &amp; DISCLAIMER
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/admin" className="inline-flex items-center gap-1.5 text-[11px] text-[#64748B] hover:text-[#F5DE88] transition-colors">
                  <Lock className="w-3 h-3" />
                  <span>ADMIN ACCESS</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© {currentYear} INDIARK ENTERTAINMENTS. All rights reserved.</p>
          <p className="text-[11px]">
            Confidential B2B Media Rights Representation &amp; Content Advisory.
          </p>
        </div>
      </div>
    </footer>
  );
}
