import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import BrandDotMotif from "@/components/brand/BrandDotMotif";

interface LegalPageProps {
  params: Promise<{ slug: string }>;
}

const LEGAL_DOCS: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
  "content-submission-policy": {
    title: "Content Submission & Evaluation Policy",
    subtitle: "Guidelines regarding unsolicited materials, rights custody, and confidential evaluation.",
    content: (
      <div className="space-y-6 text-[#4A3F45] text-sm leading-relaxed">
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">1. Scope of Submission</h3>
          <p>
            Indiark Entertainments receives content submissions, screenplays, rough cuts, finished masters, and intellectual properties solely for commercial evaluation, rights audit, and prospective representation.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">2. Warranty of Authority</h3>
          <p>
            By submitting any material through this platform or via authorized email, the applicant warrants that they hold legitimate intellectual property rights or express written authority from the legal owner to submit the work for representation.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">3. Confidentiality &amp; Non-Disclosure</h3>
          <p>
            Indiark treats all submitted synopsis, screener links, and business parameters as confidential business intelligence. Materials will only be presented to third-party platforms with the applicant&apos;s explicit commercial alignment.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">4. Legal Review Notice</h3>
          <p className="p-4 rounded-2xl bg-[#FAF6F5] border border-[#EAE0DD] text-xs text-[#5C5056]">
            Note: All formal representation agreements and deal closure documents are subject to bespoke bilateral legal contracts executed between Indiark Entertainments and the rights holder.
          </p>
        </section>
      </div>
    ),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How Indiark Entertainments collects, protects, and handles applicant and partner data.",
    content: (
      <div className="space-y-6 text-[#4A3F45] text-sm leading-relaxed">
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">1. Information Collection</h3>
          <p>
            We collect contact details, company information, project metadata, and transmission logs submitted via our forms strictly for business communication and representation evaluation.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">2. Data Security &amp; Access Controls</h3>
          <p>
            Applicant materials and private buyer mandates are stored within protected environments with encrypted access controls. We do not sell or lease business data to commercial third parties.
          </p>
        </section>
      </div>
    ),
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    subtitle: "General website terms of service and commercial interaction framework.",
    content: (
      <div className="space-y-6 text-[#4A3F45] text-sm leading-relaxed">
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">1. Acceptance of Terms</h3>
          <p>
            Access to and use of this website constitutes acceptance of these terms and conditions. The website is intended for professional B2B entertainment trade interaction.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">2. Intellectual Property</h3>
          <p>
            All brand trademarks, trade names, and curated presentation elements remain the exclusive property of Indiark Entertainments or their respective rights owners.
          </p>
        </section>
      </div>
    ),
  },
  "copyright-disclaimer": {
    title: "Copyright & Disclaimer",
    subtitle: "Third-party intellectual property notices and representations.",
    content: (
      <div className="space-y-6 text-[#4A3F45] text-sm leading-relaxed">
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">1. Project Trademarks &amp; Artwork</h3>
          <p>
            All posters, synopses, and project materials displayed in the representation catalog are the copyright of their respective producers and studios, utilized under authorized representation mandate.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-lg font-bold text-[#141115] mb-2">2. Commercial Disclaimer</h3>
          <p>
            Indiark Entertainments does not own or operate OTT streaming platforms directly. Indiark acts strictly as an intermediary representation agency facilitating commercial licensing and distribution agreements.
          </p>
        </section>
      </div>
    ),
  },
};

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#FAF6F5] min-h-screen relative overflow-hidden">
      <BrandDotMotif count={8} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#C82333] uppercase mb-8 hover:text-[#8B1524] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] p-8 sm:p-12 shadow-xl">
          <div className="border-b border-[#EAE0DD] pb-6 mb-8">
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#141115] mb-2">
              {doc.title}
            </h1>
            <p className="text-xs text-[#C82333] tracking-wider font-mono uppercase font-semibold">
              {doc.subtitle}
            </p>
          </div>

          <div>{doc.content}</div>

          <div className="mt-12 pt-6 border-t border-[#EAE0DD] text-[11px] text-[#7A6C72] font-mono flex items-center justify-between">
            <span>INDIARK ENTERTAINMENTS LEGAL AFFAIRS</span>
            <span>LAST UPDATED: 2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}
