import React from "react";
import Hero from "@/components/home/Hero";
import BusinessBridge from "@/components/home/BusinessBridge";
import SignatureExperience3D from "@/components/three/SignatureExperience3D";
import ServicesSection from "@/components/home/ServicesSection";
import WhoWeAreBrief from "@/components/home/WhoWeAreBrief";
import JourneyPathway3D from "@/components/three/JourneyPathway3D";
import ConnectionNetwork3D from "@/components/three/ConnectionNetwork3D";
import SelectedWork from "@/components/home/SelectedWork";
import WhyIndiark from "@/components/home/WhyIndiark";
import BusinessSplit from "@/components/home/BusinessSplit";
import LeadershipSection from "@/components/home/LeadershipSection";
import AssociatedOrg from "@/components/home/AssociatedOrg";
import PartnersSection from "@/components/home/PartnersSection";
import FinalCta from "@/components/home/FinalCta";
import { db } from "@/lib/db";

export default function HomePage() {
  const projects = db.getProjects().filter((p) => p.published);

  return (
    <div className="w-full">
      {/* 01: Hero with 3D WebGL Content Universe */}
      <Hero />

      {/* 02: Business Idea & Bridge Model */}
      <BusinessBridge />

      {/* 03: 3D Signature Experience (Content Enters → Connection Happens → Opportunity Emerges) */}
      <SignatureExperience3D />

      {/* 04: What We Do (6 Core Pillars) */}
      <ServicesSection />

      {/* 05: Who We Are (20+ Years Credibility Moment) */}
      <WhoWeAreBrief />

      {/* 06: 3D How We Work (6-Stage Procedural Pathway) */}
      <JourneyPathway3D />

      {/* 07: 3D Content Ecosystem (Interactive Constellation Network) */}
      <ConnectionNetwork3D />

      {/* 08: Selected Work Showcase with 3D Perspective Tilt Cards */}
      <SelectedWork initialProjects={projects} />

      {/* 09: Why Indiark (6 Strategic Proof Points) */}
      <WhyIndiark />

      {/* 10: Dual Business Conversion Split */}
      <BusinessSplit />

      {/* 11: Leadership & Governance */}
      <LeadershipSection />

      {/* 12: Associated Organisation (Media Edge School of Academics) */}
      <AssociatedOrg />

      {/* 13: Channel & Business Partners */}
      <PartnersSection />

      {/* 14: Final Conversion CTA */}
      <FinalCta />
    </div>
  );
}
