"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandDotMotif from "../brand/BrandDotMotif";

interface EcosystemItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  corridor: string;
  position3D: [number, number, number];
}

const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  { id: "films", name: "FILMS", category: "Theatrical & Direct-to-Digital", desc: "Commercial feature films and regional blockbusters seeking SVOD premieres.", corridor: "Worldwide OTT & TVOD Licences", position3D: [-3.2, 2.0, 0] },
  { id: "series", name: "WEB SERIES", category: "Episodic & Limited Series", desc: "High-concept investigative thrillers and anthologies for tier-1 streamers.", corridor: "Multi-territory Originals", position3D: [3.2, 2.0, 0] },
  { id: "ott", name: "OTT PLATFORMS", category: "Digital Streamers", desc: "Direct engagement with major national, regional, and global streaming networks.", corridor: "Direct Platform Acquisitions", position3D: [0, 3.2, 0.5] },
  { id: "tv", name: "TELEVISION", category: "Linear & Satellite", desc: "Linear satellite television broadcast monetization across major networks.", corridor: "Satellite TV Broadcast Rights", position3D: [-4.0, -0.5, -0.5] },
  { id: "music", name: "MUSIC & AUDIO", category: "Soundtracks & DSPs", desc: "Monetization of film OSTs, background scores, and sync licensing.", corridor: "Global Streaming DSPs & Sync", position3D: [4.0, -0.5, -0.5] },
  { id: "digital", name: "DIGITAL CONTENT", category: "Short-Format & Micro", desc: "Episodic web entertainment, FAST channel packages, and syndication.", corridor: "FAST Channels & AVOD", position3D: [-2.5, -2.5, 0.5] },
  { id: "regional", name: "REGIONAL", category: "Vernacular Excellence", desc: "Tamil, Telugu, Malayalam, Kannada & Hindi vernacular masterworks.", corridor: "Pan-India Dubbed Syndication", position3D: [2.5, -2.5, 0.5] },
  { id: "inflight", name: "IN-FLIGHT", category: "Aviation & Maritime", desc: "Curated airline entertainment packages licensed to global carriers.", corridor: "Global Airline Fleet Licences", position3D: [-1.2, 3.8, -1] },
  { id: "intl", name: "INTERNATIONAL", category: "Cross-Border Markets", desc: "North America, MENA, Southeast Asia & diaspora territorial rights.", corridor: "Diaspora Streaming & Foreign Sales", position3D: [1.2, 3.8, -1] }
];

export default function ConnectionNetwork3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<EcosystemItem>(ECOSYSTEM_ITEMS[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc82333, 2.5, 20);
    pointLight.position.set(0, 0, 8);
    scene.add(pointLight);

    // 3D Network Nodes Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Central INDIARK Core
    const centerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0x141115,
      emissive: 0xc82333,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    networkGroup.add(centerMesh);

    // Satellite Spheres & Crimson Vector Lines
    ECOSYSTEM_ITEMS.forEach((item) => {
      const nodeGeo = new THREE.SphereGeometry(0.28, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xc82333,
        emissive: 0x8b1524,
        emissiveIntensity: 0.4,
        metalness: 0.7,
        roughness: 0.3,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(...item.position3D);
      networkGroup.add(nodeMesh);

      // Connection Line to Center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...item.position3D),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xc82333,
        transparent: true,
        opacity: 0.4,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      networkGroup.add(line);
    });

    // Particle field around network
    const pCount = 80;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xc82333,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    const pSystem = new THREE.Points(pGeo, pMat);
    networkGroup.add(pSystem);

    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      networkGroup.rotation.y = elapsedTime * 0.12;
      networkGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.08;

      centerMesh.rotation.y = elapsedTime * 0.3;

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
            <span>CONTENT ECOSYSTEM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141115] tracking-tight mb-3">
            THE CONNECTION <span className="text-[#781D2A]">NETWORK</span>
          </h2>
          <p className="text-[#5C5056] text-sm max-w-2xl mx-auto">
            All entertainment sectors and global rights corridors connect through the central node: <strong className="text-[#781D2A]">INDIARK</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Constellation Viewport (Span 7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#FAF6F5] border border-[#E8D8D3] overflow-hidden shadow-lg min-h-[460px] flex items-center justify-center">
              <div ref={containerRef} className="absolute inset-0 w-full h-full" />
              
              {/* Category Pills Overlay Grid */}
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 z-10 pointer-events-auto">
                {ECOSYSTEM_ITEMS.map((item) => {
                  const isSelected = selectedItem.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`p-2 rounded-lg text-left transition-all text-xs font-mono border backdrop-blur-md ${
                        isSelected
                          ? "bg-[#FFFFFF] border-[#781D2A] text-[#141115] shadow-md shadow-[#781D2A]/10"
                          : "bg-[#FFFFFF]/80 border-[#E8D8D3] text-[#5C5056] hover:text-[#141115]"
                      }`}
                    >
                      <div className="font-bold truncate text-[11px]">{item.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right / Selected Ecosystem Node Card (Span 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-[#FFFFFF] border border-[#E8D8D3] shadow-xl flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1.5 rounded-full bg-[#FDE8E9] border border-[#781D2A]/20 text-[#781D2A] shadow-2xs">
                    NETWORK SECTOR
                  </span>
                  <span className="text-xs font-mono text-[#7A6C72] uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#141115] mb-2">
                  {selectedItem.name}
                </h3>

                <p className="text-sm text-[#4A3F45] leading-relaxed mb-6">
                  {selectedItem.desc}
                </p>

                <div className="p-4 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] mb-6">
                  <div className="text-[10px] font-mono text-[#781D2A] tracking-wider uppercase font-bold mb-1">
                    PRIMARY MONETIZATION CORRIDOR
                  </div>
                  <div className="text-xs font-semibold text-[#141115]">
                    {selectedItem.corridor}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE0DD] flex items-center justify-between gap-4">
                <Link
                  href="/submit-content"
                  className="px-4 py-2.5 rounded-lg bg-[#781D2A] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#5C121E] transition-all flex items-center gap-1 shadow-md shadow-[#781D2A]/20"
                >
                  <span>Submit {selectedItem.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/for-platforms"
                  className="text-xs font-mono font-semibold text-[#5C5056] hover:text-[#781D2A] transition-colors"
                >
                  Buyer Catalog Request
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
