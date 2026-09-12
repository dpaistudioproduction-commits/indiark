"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import IndiarkLogo from "./IndiarkLogo";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "WHO WE ARE", href: "/who-we-are" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  { name: "OUR WORK", href: "/our-work" },
  { name: "WHY INDIARK", href: "/#why-indiark" },
  { name: "FOR PLATFORMS", href: "/for-platforms" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "py-3 bg-[#090B0D]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/80"
          : "py-5 bg-transparent border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Authentic Brand Logo */}
        <Link href="/" className="group focus:outline-none flex items-center shrink-0">
          <IndiarkLogo className="h-9 sm:h-10" />
        </Link>

        {/* Desktop Navigation Links - Floating Pill Style */}
        <nav className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141820]/90 border border-white/[0.08] backdrop-blur-xl shadow-inner text-[11px] font-semibold tracking-wider text-[#94A3B8]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                  isActive
                    ? "bg-white/[0.12] text-[#F5DE88] font-bold shadow-xs"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Call-To-Action Cluster */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/for-platforms"
            className="text-[11px] font-semibold tracking-wider text-[#CBD5E1] hover:text-[#F5DE88] px-3.5 py-2 rounded-full hover:bg-white/[0.05] transition-all"
          >
            FOR BUYERS
          </Link>
          <Link
            href="/submit-content"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] active:scale-[0.98] transition-all shadow-lg shadow-[#F5DE88]/20 hover:shadow-[#F5DE88]/30"
          >
            <span>SUBMIT CONTENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-[#F8F9FA] hover:bg-white/[0.08] rounded-full focus:outline-none focus:ring-1 focus:ring-[#F5DE88] transition-colors"
          aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5DE88]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] bg-[#0E1217]/98 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-wider text-[#CBD5E1] hover:text-[#F5DE88] py-2.5 px-3 rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
              <Link
                href="/for-platforms"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-[#F8F9FA] hover:border-[#F5DE88] hover:text-[#F5DE88] transition-all bg-white/[0.03]"
              >
                FOR PLATFORMS &amp; BUYERS
              </Link>
              <Link
                href="/submit-content"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F5DE88] text-[#090B0D] hover:bg-[#FACC15] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F5DE88]/20"
              >
                <span>SUBMIT CONTENT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
