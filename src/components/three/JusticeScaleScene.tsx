"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeSceneShell from "./ThreeSceneShell";

export default function JusticeScaleScene() {
  const fallbackPoster = (
    <div className="w-full h-full bg-gradient-to-b from-[#181312] to-[#0E0B0A] flex flex-col items-center justify-center p-8 text-center text-paper-light">
      <div className="w-20 h-20 mb-3 rounded-full border border-accent/40 bg-accent/15 flex items-center justify-center">
        <span className="font-serif text-3xl text-accent font-bold">⚖</span>
      </div>
      <h3 className="font-serif text-2xl text-accent-light font-bold mb-1">
        CÁN CÂN CÔNG LÝ: PHÁP QUYỀN NHÂN NGHĨA
      </h3>
      <p className="font-sans text-xs sm:text-sm text-paper-dark max-w-sm">
        Sự kết hợp giữa tính nghiêm minh của luật pháp và tinh thần nhân đạo cao cả vì con người.
      </p>
    </div>
  );

  return (
    <ThreeSceneShell
      id="scene-justice-scale"
      title="TRIỂN LÃM 3D: CÁN CÂN CÔNG LÝ"
      fallbackPoster={fallbackPoster}
      aspectRatio="aspect-[16/9] md:aspect-[21/9]"
    >
      {(isInView) => <ScaleCanvas isInView={isInView} />}
    </ThreeSceneShell>
  );
}

function ScaleCanvas({ isInView }: { isInView: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);
  const isInViewRef = useRef(isInView);
  const isRunningRef = useRef(false);
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    isInViewRef.current = isInView;
    if (isInView && !isRunningRef.current) {
      isRunningRef.current = true;
      animFrameId.current = requestAnimationFrame(animateRef.current);
    }
  }, [isInView]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x13100f);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.2, 5.5);
    camera.lookAt(0, 0.3, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc6a15b,
      metalness: 0.85,
      roughness: 0.28,
    });
    const darkWoodMat = new THREE.MeshStandardMaterial({
      color: 0x2b1e17,
      roughness: 0.6,
    });

    const scaleRoot = new THREE.Group();
    scene.add(scaleRoot);

    // Base Pedestal
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.25, 32);
    const baseMesh = new THREE.Mesh(baseGeo, darkWoodMat);
    baseMesh.position.y = -1.2;
    baseMesh.receiveShadow = true;
    scaleRoot.add(baseMesh);

    // Central Pillar
    const pillarGeo = new THREE.CylinderGeometry(0.08, 0.14, 2.6, 24);
    const pillarMesh = new THREE.Mesh(pillarGeo, goldMat);
    pillarMesh.position.y = 0.1;
    pillarMesh.castShadow = true;
    scaleRoot.add(pillarMesh);

    // Pillar Crown Finial
    const finialGeo = new THREE.SphereGeometry(0.16, 24, 24);
    const finialMesh = new THREE.Mesh(finialGeo, goldMat);
    finialMesh.position.y = 1.45;
    scaleRoot.add(finialMesh);

    // Beam Group (Rotates according to scroll progress)
    const beamGroup = new THREE.Group();
    beamGroup.position.y = 1.35;
    scaleRoot.add(beamGroup);

    // Horizontal Beam
    const beamGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.4, 16);
    const beamMesh = new THREE.Mesh(beamGeo, goldMat);
    beamMesh.rotation.z = Math.PI / 2;
    beamMesh.castShadow = true;
    beamGroup.add(beamMesh);

    // Left Pan Group
    const leftPanGroup = new THREE.Group();
    leftPanGroup.position.x = -1.6;
    beamGroup.add(leftPanGroup);

    // Strings
    const stringGeo = new THREE.CylinderGeometry(0.008, 0.008, 1.2, 8);
    const leftString1 = new THREE.Mesh(stringGeo, goldMat);
    leftString1.position.set(-0.2, -0.6, 0);
    leftString1.rotation.z = 0.15;
    leftPanGroup.add(leftString1);

    const leftString2 = new THREE.Mesh(stringGeo, goldMat);
    leftString2.position.set(0.2, -0.6, 0);
    leftString2.rotation.z = -0.15;
    leftPanGroup.add(leftString2);

    // Left Dish
    const dishGeo = new THREE.CylinderGeometry(0.55, 0.2, 0.1, 24);
    const leftDish = new THREE.Mesh(dishGeo, goldMat);
    leftDish.position.y = -1.2;
    leftDish.castShadow = true;
    leftPanGroup.add(leftDish);

    // Right Pan Group
    const rightPanGroup = new THREE.Group();
    rightPanGroup.position.x = 1.6;
    beamGroup.add(rightPanGroup);

    const rightString1 = new THREE.Mesh(stringGeo, goldMat);
    rightString1.position.set(-0.2, -0.6, 0);
    rightString1.rotation.z = 0.15;
    rightPanGroup.add(rightString1);

    const rightString2 = new THREE.Mesh(stringGeo, goldMat);
    rightString2.position.set(0.2, -0.6, 0);
    rightString2.rotation.z = -0.15;
    rightPanGroup.add(rightString2);

    const rightDish = new THREE.Mesh(dishGeo, goldMat);
    rightDish.position.y = -1.2;
    rightDish.castShadow = true;
    rightPanGroup.add(rightDish);

    // Initial tilt angle (unbalanced -> balance)
    beamGroup.rotation.z = 0.18;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff2e0, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.SpotLight(0xffd59e, 3.5, 12, Math.PI / 4, 0.4);
    keyLight.position.set(2, 4.5, 3.5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xa54336, 1.5, 8);
    rimLight.position.set(-3, 1, -2);
    scene.add(rimLight);

    // Scroll progress handler
    const handleScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Fraction of section passing the viewport [0..1]
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      // Progress from 0.18 (tilted) to 0.0 (perfect balance)
      const targetTilt = (1 - Math.min(1, progress * 1.5)) * 0.22;
      beamGroup.rotation.z = targetTilt;

      // Compensate dish rotation so they stay level
      leftPanGroup.rotation.z = -targetTilt;
      rightPanGroup.rotation.z = -targetTilt;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Render loop
    const clock = new THREE.Clock();
    const animate = () => {
      if (!isInViewRef.current) {
        isRunningRef.current = false;
        return;
      }

      const time = clock.getElapsedTime();
      scaleRoot.rotation.y = Math.sin(time * 0.4) * 0.08;

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animateRef.current = animate;
    if (isInViewRef.current) {
      isRunningRef.current = true;
      animFrameId.current = requestAnimationFrame(animate);
    }

    // Resize
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
      isRunningRef.current = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      baseGeo.dispose();
      pillarGeo.dispose();
      finialGeo.dispose();
      beamGeo.dispose();
      stringGeo.dispose();
      dishGeo.dispose();
      goldMat.dispose();
      darkWoodMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
