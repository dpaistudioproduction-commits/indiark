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
      
      // Check if scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Determine visibility based on scroll direction
      if (currentScrollY < 10) {
        // At the very top, always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down past threshold -> hide
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile drawer when scrolling down
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up / back -> reveal
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
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#FAF6F5]/92 backdrop-blur-xl border-b border-[#E8D8D3] py-3 shadow-md shadow-[#8B1524]/5"
          : "bg-transparent py-4 border-b border-[#E8D8D3]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Authentic Brand Logo */}
        <Link href="/" className="group focus:outline-none flex items-center">
          <IndiarkLogo className="h-10 sm:h-11" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 px-5 py-1.5 rounded-full bg-[#FFFFFF]/90 border border-[#E8D8D3] shadow-xs text-[11px] font-bold font-mono tracking-[0.14em] text-[#4A3F45]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 hover:text-[#781D2A] relative py-1 px-1.5 ${
                  isActive ? "text-[#781D2A] font-bold" : "text-[#4A3F45]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#781D2A] rounded-full shadow-xs" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Call-To-Action Cluster */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/for-platforms"
            className="text-[11px] font-mono font-bold tracking-wider text-[#4A3F45] hover:text-[#781D2A] px-3 py-2 transition-colors"
          >
            FOR BUYERS
          </Link>
          <Link
            href="/submit-content"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-mono font-bold tracking-[0.12em] uppercase bg-[#781D2A] hover:bg-[#5C121E] text-white active:scale-[0.98] transition-all shadow-md shadow-[#781D2A]/20"
          >
            <span>SUBMIT CONTENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#141115] hover:bg-[#F4ECE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781D2A]"
          aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#781D2A]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#FAF6F5]/98 border-b border-[#E8D8D3] backdrop-blur-2xl px-6 py-6 transition-all animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono font-bold tracking-wider text-[#141115] hover:text-[#781D2A] py-2.5 border-b border-[#E8D8D3]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/for-platforms"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-xs font-mono font-bold tracking-widest uppercase border border-[#D8C7C3] text-[#141115] hover:border-[#781D2A] hover:text-[#781D2A] transition-colors"
              >
                FOR PLATFORMS &amp; BUYERS
              </Link>
              <Link
                href="/submit-content"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-xs font-mono font-bold tracking-widest uppercase bg-[#781D2A] text-white hover:bg-[#5C121E] transition-all flex items-center justify-center gap-2"
              >
                <span>SUBMIT CONTENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
