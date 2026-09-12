"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroUniverse3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Soft, Cinematic B2B Azure)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 30);
    pointLight1.position.set(6, 6, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0ea5e9, 2, 25);
    pointLight2.position.set(-6, -4, 6);
    scene.add(pointLight2);

    // 4. Central INDIARK 3D Hub (Rotating Glass Prism & Outer Ring)
    const hubGroup = new THREE.Group();
    scene.add(hubGroup);

    // Outer Ring
    const torusGeo = new THREE.TorusGeometry(3.6, 0.04, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(torusGeo, torusMat);
    hubGroup.add(ring1);

    // Secondary Inner Orbit Ring
    const torusGeo2 = new THREE.TorusGeometry(2.4, 0.03, 16, 80);
    const torusMat2 = new THREE.MeshStandardMaterial({
      color: 0xbae6fd,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(torusGeo2, torusMat2);
    ring2.rotation.x = Math.PI / 3;
    hubGroup.add(ring2);

    // Center Core Media Diamond/Prism
    const octaGeo = new THREE.OctahedronGeometry(1.2, 0);
    const octaMat = new THREE.MeshPhysicalMaterial({
      color: 0x07101e,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.8,
      transmission: 0.6,
      ior: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    const centerCore = new THREE.Mesh(octaGeo, octaMat);
    hubGroup.add(centerCore);

    // 5. Floating 3D Content Elements
    const elementsGroup = new THREE.Group();
    scene.add(elementsGroup);

    // Floating 3D Film Reel
    const reelGroup = new THREE.Group();
    const reelCylinderGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.15, 32);
    const reelMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const reelMesh = new THREE.Mesh(reelCylinderGeo, reelMat);
    reelMesh.rotation.x = Math.PI / 2;
    reelGroup.add(reelMesh);

    // Film reel inner rim
    const innerRimGeo = new THREE.TorusGeometry(0.7, 0.03, 16, 32);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 });
    const innerRim = new THREE.Mesh(innerRimGeo, rimMat);
    reelGroup.add(innerRim);

    reelGroup.position.set(-6, 2.5, 0);
    elementsGroup.add(reelGroup);

    // Floating 3D Film Frame Panels (Aspect Ratio Cards)
    const cardGeo = new THREE.BoxGeometry(1.6, 1.0, 0.05);
    const cardMat = new THREE.MeshStandardMaterial({
      color: 0x0c1322,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.2,
      roughness: 0.3,
      metalness: 0.7,
    });
    const framePanel1 = new THREE.Mesh(cardGeo, cardMat);
    framePanel1.position.set(6.2, 2.2, 1);
    framePanel1.rotation.set(0.2, -0.4, 0.1);
    elementsGroup.add(framePanel1);

    const framePanel2 = new THREE.Mesh(cardGeo, cardMat);
    framePanel2.position.set(-5.5, -3.2, 0.5);
    framePanel2.rotation.set(-0.2, 0.3, -0.15);
    elementsGroup.add(framePanel2);

    // Floating 3D Media Sphere / Digital Wave
    const sphereGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x111c30,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const digitalSphere = new THREE.Mesh(sphereGeo, sphereMat);
    digitalSphere.position.set(5.8, -3, -1);
    elementsGroup.add(digitalSphere);

    // 6. Subtle Particle Stream along Connection Vectors
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 6.5;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      particleSpeeds[i] = 0.005 + Math.random() * 0.015;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 7. Mouse Parallax Interactivity
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 1.5;
      targetMouseY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Scroll-Driven Camera and Rotation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Hub slow cinematic rotation
      hubGroup.rotation.y = elapsedTime * 0.2 + currentMouseX * 0.5;
      hubGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 - currentMouseY * 0.3;
      centerCore.rotation.y = elapsedTime * 0.4;
      centerCore.rotation.z = elapsedTime * 0.2;

      // Floating items subtle drift
      reelGroup.rotation.z = elapsedTime * 0.3;
      reelGroup.position.y = 2.5 + Math.sin(elapsedTime * 0.6) * 0.2;

      framePanel1.rotation.y = -0.4 + Math.sin(elapsedTime * 0.5) * 0.15;
      framePanel1.position.y = 2.2 + Math.cos(elapsedTime * 0.7) * 0.2;

      framePanel2.rotation.x = -0.2 + Math.cos(elapsedTime * 0.4) * 0.15;
      framePanel2.position.y = -3.2 + Math.sin(elapsedTime * 0.6) * 0.2;

      digitalSphere.rotation.x = elapsedTime * 0.3;
      digitalSphere.rotation.y = elapsedTime * 0.2;
      digitalSphere.position.y = -3 + Math.sin(elapsedTime * 0.5) * 0.25;

      // Particle slow orbit
      particleSystem.rotation.y = elapsedTime * 0.06;

      // Scroll camera reaction (gentle zoom in & tilt)
      const scrollProgress = Math.min(scrollY / 800, 1);
      camera.position.z = 18 - scrollProgress * 3;
      camera.position.y = -scrollProgress * 1.5 - currentMouseY * 1.2;
      camera.position.x = currentMouseX * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (hasReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
