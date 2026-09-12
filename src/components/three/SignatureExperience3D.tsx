"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowRight, Sparkles, CheckCircle2, Tv, Film, Radio, Globe2, Music } from "lucide-react";
import Link from "next/link";
import BrandDotMotif from "../brand/BrandDotMotif";

export default function SignatureExperience3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);

  const STAGES = [
    {
      num: "01",
      tag: "CONTENT ENTERS",
      title: "Intellectual Property Ingestion",
      desc: "Raw feature master, screenplay or series IP enters the Indiark valuation environment for rights auditing.",
      opportunity: "Film / Series Master Audit",
      icon: <Film className="w-4 h-4 text-[#C82333]" />
    },
    {
      num: "02",
      tag: "CONNECTION HAPPENS",
      title: "Strategic Packaging & Rights Matrix",
      desc: "Commercial pitch decks and windowing strategies are formulated and routed directly to platform decision makers.",
      opportunity: "OTT & Linear Broadcast Pitching",
      icon: <Tv className="w-4 h-4 text-[#C82333]" />
    },
    {
      num: "03",
      tag: "OPPORTUNITY EMERGES",
      title: "Multi-Territory Deal Closure",
      desc: "SVOD premieres, satellite broadcast, in-flight packages, and international remake/dub rights reach monetization.",
      opportunity: "Worldwide Commercial Licences",
      icon: <Globe2 className="w-4 h-4 text-[#C82333]" />
    }
  ];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xc82333, 2.5, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b1524, 2, 15);
    light2.position.set(-5, -4, 4);
    scene.add(light2);

    // 3D Media Disc / Hologram Reel
    const discGroup = new THREE.Group();
    scene.add(discGroup);

    // Outer Torus Ring with Warm Crimson/Rose Material
    const discRimGeo = new THREE.TorusGeometry(2.5, 0.05, 16, 64);
    const discRimMat = new THREE.MeshStandardMaterial({
      color: 0xc82333,
      emissive: 0x8b1524,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
    });
    const discRim = new THREE.Mesh(discRimGeo, discRimMat);
    discGroup.add(discRim);

    // Inner Concentric Spoke Rings
    const innerRimGeo = new THREE.TorusGeometry(1.6, 0.03, 16, 48);
    const innerRimMat = new THREE.MeshStandardMaterial({
      color: 0x5c5056,
      metalness: 0.6,
      roughness: 0.3,
    });
    const innerRim = new THREE.Mesh(innerRimGeo, innerRimMat);
    discGroup.add(innerRim);

    // 6 Spokes
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const spokeGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.5);
      const spokeMat = new THREE.MeshStandardMaterial({ color: 0x3a3136, metalness: 0.7 });
      const spoke = new THREE.Mesh(spokeGeo, spokeMat);
      spoke.position.set(Math.cos(angle) * 1.25, Math.sin(angle) * 1.25, 0);
      spoke.rotation.z = angle + Math.PI / 2;
      discGroup.add(spoke);
    }

    // Center Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x141115,
      emissive: 0xc82333,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    discGroup.add(core);

    // Dynamic Connection Particle Beam with Rose/Crimson Tone
    const beamCount = 40;
    const beamGeo = new THREE.BufferGeometry();
    const beamPositions = new Float32Array(beamCount * 3);
    for (let i = 0; i < beamCount; i++) {
      beamPositions[i * 3] = (Math.random() - 0.5) * 5;
      beamPositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      beamPositions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    beamGeo.setAttribute("position", new THREE.BufferAttribute(beamPositions, 3));
    const beamMat = new THREE.PointsMaterial({
      color: 0xc82333,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
    });
    const beamSystem = new THREE.Points(beamGeo, beamMat);
    discGroup.add(beamSystem);

    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      discGroup.rotation.z = elapsedTime * 0.25;
      discGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.25 + 0.2;
      discGroup.rotation.y = Math.cos(elapsedTime * 0.2) * 0.2;

      beamSystem.rotation.z = -elapsedTime * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-24 bg-[#F5ECE8] border-y border-[#E8D8D3] relative overflow-hidden">
      <BrandDotMotif count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[10px] font-mono tracking-[0.25em] text-[#781D2A] uppercase font-bold mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] pulse-node" />
            <span>THE SIGNATURE CORRIDOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-3">
            CONTENT ENTERS. <span className="text-[#781D2A]">OPPORTUNITY EMERGES.</span>
          </h2>
          <p className="text-[#5C5056] text-sm max-w-2xl mx-auto">
            From creative intellectual property to executed commercial licence across domestic &amp; global buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive 3D Holographic Media Disc (Span 6) */}
          <div className="lg:col-span-6 relative aspect-square max-h-[480px] w-full rounded-3xl bg-[#FAF6F5] border border-[#E8D8D3] overflow-hidden flex items-center justify-center shadow-lg">
            <div ref={containerRef} className="absolute inset-0 w-full h-full" />
            
            {/* Center Monogram Overlay */}
            <div className="relative z-10 pointer-events-none text-center">
              <span className="font-serif font-black text-2xl sm:text-3xl tracking-[0.2em] text-[#141115] block drop-shadow-sm">
                INDIARK
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-[#781D2A] uppercase font-bold">
                COMMERCIAL CATALYST
              </span>
            </div>
          </div>

          {/* Right Column: 3-Stage Narrative Breakdown (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            {STAGES.map((stg, index) => {
              const isSelected = activeStage === index;
              return (
                <div
                  key={stg.num}
                  onClick={() => setActiveStage(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#FFFFFF] border-[#781D2A] shadow-xl shadow-[#781D2A]/10 -translate-y-0.5"
                      : "bg-[#FFFFFF] border-[#E8D8D3] hover:border-[#D8C7C3]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-lg ${
                        isSelected ? "bg-[#FDE8E9] text-[#781D2A] border border-[#781D2A]/30 shadow-2xs" : "bg-[#FAF6F5] text-[#7A6C72]"
                      }`}>
                        {stg.tag}
                      </span>
                      <span className="text-xs font-mono text-[#8C7D84]">STAGE {stg.num}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#141115] mb-1">
                      {stg.title}
                    </h3>

                    <p className="text-xs text-[#5C5056] leading-relaxed mb-4">
                      {stg.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#EAE0DD] text-xs">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#781D2A]">
                      {stg.icon}
                      <span className="font-semibold">{stg.opportunity}</span>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-bold text-[#781D2A] uppercase flex items-center gap-1">
                        Active Stage
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/submit-content"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#C82333] hover:text-[#8B1524] uppercase transition-colors"
              >
                <span>COMMENCE EVALUATION PROCESS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
