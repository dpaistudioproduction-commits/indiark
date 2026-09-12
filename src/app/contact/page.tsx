import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Building, ShieldCheck } from "lucide-react";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

export const metadata: Metadata = {
  title: "Contact & Commercial Enquiries | Indiark Entertainments",
  description: "Let's talk content. Connect with Indiark Entertainments for content representation, OTT pitching, and entertainment business inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#090B0D] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold tracking-[0.25em] text-[#F5DE88] uppercase mb-4">
            COMMERCIAL DESK
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-[#F8F9FA] tracking-tight mb-4">
            LET&apos;S TALK <span className="font-extrabold text-[#F5DE88]">CONTENT.</span>
          </h1>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you are a producer, production house, filmmaker, independent artist, OTT platform, broadcaster, distributor or content buyer, let&apos;s discuss the opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141820] border border-white/[0.08] space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#F5DE88] uppercase font-bold block mb-1">
                  INDIARK HEADQUARTERS &amp; DESK
                </span>
                <h3 className="text-xl font-bold text-[#F8F9FA]">
                  Corporate Advisory &amp; Operations
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#CBD5E1]">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#181D26] border border-white/10">
                  <Mail className="w-4 h-4 text-[#F5DE88] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block uppercase">Official Representation Desk</span>
                    <span className="font-semibold text-[#F8F9FA]">enquiry@indiarkentertainments.com</span>
                    <span className="block text-[10px] text-[#64748B] mt-0.5">(Official communications channel)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#181D26] border border-white/10">
                  <Building className="w-4 h-4 text-[#F5DE88] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block uppercase">Operations Base</span>
                    <span className="font-semibold text-[#F8F9FA]">India (Chennai • Kochi • Mumbai Media Hubs)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#181D26] border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#F5DE88] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block uppercase">Submission Confidentiality</span>
                    <span className="text-[#94A3B8]">All screenplay synopses and screener materials handled under strict non-disclosure protocol.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link box */}
            <div className="p-6 rounded-2xl bg-[#141820] border border-white/[0.08] text-xs space-y-2 shadow-sm">
              <span className="font-bold text-[#F8F9FA] block">Looking for dedicated fast-tracks?</span>
              <p className="text-[#94A3B8]">
                To pitch a completed film title with rights breakdown, please use the{" "}
                <a href="/submit-content" className="text-[#F5DE88] hover:underline font-semibold">
                  Content Submission Wizard
                </a>.
              </p>
            </div>
          </div>

          {/* Right Contact Form Column (Span 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
