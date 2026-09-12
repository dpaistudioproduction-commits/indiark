import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import IndiarkLogo from "./IndiarkLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4ECE9] border-t border-[#E8D8D3] text-[#5C5056] relative overflow-hidden">
      {/* Subtle background blush glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#E84A5F]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Centered Main Indiark Brand Showcase */}
        <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-[#E8D8D3]">
          <Link href="/" className="inline-flex items-center justify-center group mb-4">
            <IndiarkLogo className="h-14 sm:h-16 md:h-18" />
          </Link>

          <p className="text-[11px] font-mono font-bold tracking-wider text-[#00A896] uppercase mb-3">
            MEDIA RIGHTS • CONTENT REPRESENTATION • OTT • FILM • MUSIC • DIGITAL
          </p>
          
          <p className="text-sm text-[#4A3F45] max-w-2xl leading-relaxed mb-4">
            Indiark Entertainments is a dedicated media rights representation and entertainment business agency helping filmmakers, producers and content owners connect with premier OTT platforms, broadcasters, and commercial buyers.
          </p>

          <div className="text-xs font-serif italic text-[#781D2A]">
            “Connecting Content. Creating Opportunities. Closing Business.”
          </div>
        </div>

        {/* Navigation & Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-[#E8D8D3] text-center md:text-left">
          
          {/* Col 1: Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#141115] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#781D2A] transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/who-we-are" className="hover:text-[#781D2A] transition-colors">WHO WE ARE</Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-[#781D2A] transition-colors">WHAT WE DO</Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#781D2A] transition-colors">OUR WORK</Link>
              </li>
              <li>
                <Link href="/#why-indiark" className="hover:text-[#781D2A] transition-colors">WHY INDIARK</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#781D2A] transition-colors">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Business Portals */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#141115] uppercase mb-4">
              Business Portals
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/submit-content" className="text-[#781D2A] hover:underline inline-flex items-center gap-1 font-bold transition-colors">
                  <span>SUBMIT CONTENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/for-platforms" className="hover:text-[#781D2A] transition-colors">
                  FOR PLATFORMS &amp; BUYERS
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#rights-licensing" className="hover:text-[#781D2A] transition-colors">
                  RIGHTS LICENSING MATRIX
                </Link>
              </li>
              <li>
                <Link href="/who-we-are#academic-partner" className="hover:text-[#781D2A] transition-colors">
                  MEDIA EDGE ACADEMICS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Compliance */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#141115] uppercase mb-4">
              Legal &amp; Policy
            </h3>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/legal/content-submission-policy" className="hover:text-[#781D2A] transition-colors">
                  SUBMISSION &amp; NDA POLICY
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-[#781D2A] transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-and-conditions" className="hover:text-[#781D2A] transition-colors">
                  TERMS &amp; CONDITIONS
                </Link>
              </li>
              <li>
                <Link href="/legal/copyright-disclaimer" className="hover:text-[#781D2A] transition-colors">
                  COPYRIGHT &amp; DISCLAIMER
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/admin" className="inline-flex items-center gap-1.5 text-[11px] text-[#7E7077] hover:text-[#781D2A] transition-colors">
                  <Lock className="w-3 h-3" />
                  <span>ADMIN ACCESS</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E7077]">
          <p>© {currentYear} INDIARK ENTERTAINMENTS. All rights reserved.</p>
          <p className="text-[11px]">
            Confidential B2B Media Rights Representation &amp; Content Advisory.
          </p>
        </div>
      </div>
    </footer>
  );
}
