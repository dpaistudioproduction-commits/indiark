import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

const ECOSYSTEM_NODES = [
  { id: 'films', label: 'Feature Films', desc: 'Theatrical, digital & broadcast rights representation for feature cinema.' },
  { id: 'web-series', label: 'Web Series & Originals', desc: 'Episodic content positioning for leading OTT platforms and streaming services.' },
  { id: 'ott', label: 'OTT Platforms', desc: 'Direct pitching and commercial discussions with global and domestic SVOD/AVOD platforms.' },
  { id: 'television', label: 'Television & Satellite', desc: 'Broadcast licensing, satellite rights, and linear channel distribution.' },
  { id: 'music', label: 'Music & Audio Rights', desc: 'Catalogue monetization, sync licensing, and digital audio streaming representation.' },
  { id: 'digital', label: 'Digital Entertainment', desc: 'YouTube, social video networks, and emerging legitimate creator ecosystems.' },
  { id: 'inflight', label: 'In-Flight Entertainment', desc: 'Global airline content licensing and non-theatrical transport rights.' },
  { id: 'international', label: 'International Rights', desc: 'Cross-border licensing, dubbed versions, and global territory distribution.' },
  { id: 'regional', label: 'Regional Content', desc: 'Connecting vibrant multilingual Indian regional stories with wider platforms.' }
];

export const ContentEcosystem3D = ({ onSelectCategory }) => {
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(ECOSYSTEM_NODES[0]);
  const [isWebGlSupported, setIsWebGlSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Three.js Scene Setup
    let scene, camera, renderer, animationFrameId;
    let nodeObjects = [];
    let lineGroup;
    let centerMesh, repMesh;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth;
      const height = container.clientHeight || 450;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 24;
      camera.position.y = 2;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Central Node: CONTENT (Teal Glow)
      const centerGeo = new THREE.SphereGeometry(1.4, 32, 32);
      const centerMat = new THREE.MeshBasicMaterial({ color: 0x009DA5, wireframe: true });
      centerMesh = new THREE.Mesh(centerGeo, centerMat);
      scene.add(centerMesh);

      // Inner Orbit: REPRESENTATION (Lime Ring)
      const ringGeo = new THREE.RingGeometry(3.5, 3.7, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x94C820, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
      repMesh = new THREE.Mesh(ringGeo, ringMat);
      repMesh.rotation.x = Math.PI / 2.5;
      scene.add(repMesh);

      // Outer Nodes in Orbit
      const orbitRadius = 8.5;
      lineGroup = new THREE.Group();
      scene.add(lineGroup);

      ECOSYSTEM_NODES.forEach((node, i) => {
        const angle = (i / ECOSYSTEM_NODES.length) * Math.PI * 2;
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * (orbitRadius * 0.45);
        const z = Math.sin(angle) * 3;

        // Satellite Node Mesh
        const nodeGeo = new THREE.SphereGeometry(0.55, 16, 16);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x009DA5 : 0x94C820,
          transparent: true,
          opacity: 0.85
        });
        const mesh = new THREE.Mesh(nodeGeo, nodeMat);
        mesh.position.set(x, y, z);
        mesh.userData = { index: i, angle, radius: orbitRadius, baseSpeed: 0.003 };
        scene.add(mesh);
        nodeObjects.push(mesh);

        // Connection Line to Center
        const lineMat = new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? 0x009DA5 : 0x94C820,
          transparent: true,
          opacity: 0.25
        });
        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeo, lineMat);
        lineGroup.add(line);
      });

      // Animation Loop
      let clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          centerMesh.rotation.y += 0.008;
          centerMesh.rotation.x += 0.004;
          repMesh.rotation.z += 0.005;

          nodeObjects.forEach((node, i) => {
            const angle = node.userData.angle + (elapsedTime * 0.15);
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * (orbitRadius * 0.45);
            const z = Math.sin(angle) * 3;
            node.position.set(x, y, z);

            // Update line
            const line = lineGroup.children[i];
            if (line) {
              const posAttr = line.geometry.attributes.position;
              posAttr.setXYZ(1, x, y, z);
              posAttr.needsUpdate = true;
            }
          });
        }

        renderer.render(scene, camera);
      };

      animate();

      // Resize Handler
      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight || 450;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };

    } catch (e) {
      console.warn('WebGL Initialization skipped or failed, using 2D fallback:', e);
      setIsWebGlSupported(false);
    }
  }, []);

  return (
    <div className="card-dark" style={{ border: '1px solid rgba(0, 157, 165, 0.3)', padding: 0, overflow: 'hidden' }}>
      
      {/* Visual Header */}
      <div
        style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border-dark)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          backgroundColor: 'rgba(7, 13, 20, 0.6)'
        }}
      >
        <div>
          <div className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>
            Interactive Network
          </div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>
            The Content & Rights Ecosystem
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--brand-teal)' }}></span>
          <span>Content & Rights</span>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--brand-lime)', marginLeft: '0.5rem' }}></span>
          <span>Platforms & Markets</span>
        </div>
      </div>

      {/* Interactive Main Area */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1.4fr) minmax(280px, 1fr)',
          minHeight: '440px'
        }}
        className="ecosystem-layout"
      >
        {/* Left 3D Viewport */}
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(11, 19, 31, 0.5)'
          }}
        >
          {/* Overlay diagram labels */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              padding: '0.6rem 1rem',
              backgroundColor: 'rgba(7, 13, 20, 0.85)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-dark)',
              fontSize: '0.75rem',
              color: 'var(--text-light-muted)',
              pointerEvents: 'none'
            }}
          >
            <div style={{ color: 'var(--brand-teal-light)', fontWeight: 700 }}>STRUCTURE</div>
            <div>CONTENT &rarr; REPRESENTATION &rarr; MARKET &rarr; CLOSURE</div>
          </div>
        </div>

        {/* Right Interactive Node Inspector */}
        <div
          style={{
            padding: '1.75rem',
            backgroundColor: 'rgba(7, 13, 20, 0.9)',
            borderLeft: '1px solid var(--border-dark)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-lime)', fontWeight: 700, marginBottom: '0.5rem' }}>
              Explore Rights Streams
            </div>
            
            {/* Quick Node Selector Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {ECOSYSTEM_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{
                      background: isSelected ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-light-secondary)',
                      border: isSelected ? '1px solid var(--brand-teal-light)' : '1px solid var(--border-dark)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {node.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details */}
            <div
              style={{
                padding: '1.25rem',
                backgroundColor: 'rgba(0, 157, 165, 0.06)',
                border: '1px solid rgba(0, 157, 165, 0.2)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <h4 style={{ color: '#FFFFFF', marginBottom: '0.4rem', fontSize: '1.1rem' }}>
                {selectedNode.label}
              </h4>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                {selectedNode.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--brand-teal-light)' }}>
                <CheckCircle2 size={15} />
                <span>Commercial positioning & deal support</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-dark)' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-light-muted)', lineHeight: '1.4' }}>
              Indiark bridges creator catalogues with institutional platforms to unlock monetized distribution.
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .ecosystem-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
