"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeSceneShell from "./ThreeSceneShell";

export default function ConstitutionHeroScene() {
  const fallbackPoster = (
    <div className="w-full h-full bg-gradient-to-b from-[#1E1715] to-[#0D0B0A] flex flex-col items-center justify-center p-8 text-center text-paper-light">
      <div className="w-24 h-24 mb-4 rounded-full border-2 border-accent/40 bg-accent/10 flex items-center justify-center">
        <span className="font-serif text-3xl text-accent font-black">★</span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-accent-light font-bold mb-2">
        HIẾN PHÁP NĂM 1946
      </h3>
      <p className="font-sans text-sm text-paper-dark max-w-md">
        Nền tảng pháp lý đầu tiên khẳng định: Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam.
      </p>
    </div>
  );

  return (
    <ThreeSceneShell
      id="scene-constitution"
      title="TRIỂN LÃM 3D: BẢN HIẾN PHÁP 1946"
      fallbackPoster={fallbackPoster}
      aspectRatio="aspect-[16/9] md:aspect-[21/9]"
    >
      {(isInView) => <CanvasComponent isInView={isInView} />}
    </ThreeSceneShell>
  );
}

function CanvasComponent({ isInView }: { isInView: boolean }) {
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
    scene.background = new THREE.Color(0x120f0e);
    scene.fog = new THREE.FogExp2(0x120f0e, 0.05);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 6.2);
    camera.lookAt(0, 0.2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for objects
    const deskGroup = new THREE.Group();
    scene.add(deskGroup);

    // Desk Surface
    const deskGeo = new THREE.BoxGeometry(10, 0.2, 7);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x221a16,
      roughness: 0.65,
      metalness: 0.15,
    });
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.y = -0.1;
    deskMesh.receiveShadow = true;
    deskGroup.add(deskMesh);

    // Book Cover Texture (Procedural Canvas)
    const bookCanvas = document.createElement("canvas");
    bookCanvas.width = 512;
    bookCanvas.height = 512;
    const ctx = bookCanvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#8B1E1E";
      ctx.fillRect(0, 0, 512, 512);

      // Gold border
      ctx.strokeStyle = "#C6A15B";
      ctx.lineWidth = 12;
      ctx.strokeRect(24, 24, 464, 464);

      // Star
      ctx.fillStyle = "#C6A15B";
      ctx.font = "bold 56px serif";
      ctx.textAlign = "center";
      ctx.fillText("★", 256, 170);

      // Title
      ctx.font = "bold 32px serif";
      ctx.fillText("HIẾN PHÁP", 256, 230);
      ctx.font = "bold 26px serif";
      ctx.fillText("NƯỚC VIỆT NAM", 256, 280);
      ctx.font = "24px serif";
      ctx.fillText("DÂN CHỦ CỘNG HÒA", 256, 330);
      ctx.font = "bold 28px sans-serif";
      ctx.fillText("1946", 256, 400);
    }
    const bookTexture = new THREE.CanvasTexture(bookCanvas);

    // Book Mesh (Cover + Pages)
    const bookGeo = new THREE.BoxGeometry(2.3, 0.35, 3.2);
    const bookMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xe6d8be, roughness: 0.9 }), // Right (pages)
      new THREE.MeshStandardMaterial({ color: 0x8b1e1e, roughness: 0.4 }), // Left (spine)
      new THREE.MeshStandardMaterial({ map: bookTexture, roughness: 0.4, metalness: 0.2 }), // Top (cover)
      new THREE.MeshStandardMaterial({ color: 0x8b1e1e, roughness: 0.5 }), // Bottom
      new THREE.MeshStandardMaterial({ color: 0xe6d8be, roughness: 0.9 }), // Front (pages)
      new THREE.MeshStandardMaterial({ color: 0xe6d8be, roughness: 0.9 }), // Back (pages)
    ];
    const bookMesh = new THREE.Mesh(bookGeo, bookMaterials);
    bookMesh.position.set(-0.6, 0.18, 0);
    bookMesh.rotation.y = 0.15;
    bookMesh.castShadow = true;
    bookMesh.receiveShadow = true;
    deskGroup.add(bookMesh);

    // Fountain Pen (Golden Brass)
    const penGroup = new THREE.Group();
    const penBodyGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.1, 16);
    const penMat = new THREE.MeshStandardMaterial({
      color: 0xc6a15b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const penMesh = new THREE.Mesh(penBodyGeo, penMat);
    penMesh.rotation.z = Math.PI / 2;
    penMesh.castShadow = true;
    penGroup.add(penMesh);

    penGroup.position.set(1.5, 0.05, 0.4);
    penGroup.rotation.y = -0.4;
    deskGroup.add(penGroup);

    // Wax Seal Stamp
    const stampGroup = new THREE.Group();
    const handleGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.8, 16);
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.5 });
    const handleMesh = new THREE.Mesh(handleGeo, handleMat);
    handleMesh.position.y = 0.4;
    handleMesh.castShadow = true;
    stampGroup.add(handleMesh);

    const stampBaseGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.12, 20);
    const stampBaseMat = new THREE.MeshStandardMaterial({ color: 0x8b1e1e, roughness: 0.3, metalness: 0.4 });
    const stampBaseMesh = new THREE.Mesh(stampBaseGeo, stampBaseMat);
    stampBaseMesh.position.y = 0.06;
    stampBaseMesh.castShadow = true;
    stampGroup.add(stampBaseMesh);

    stampGroup.position.set(1.4, 0.02, -1.2);
    deskGroup.add(stampGroup);

    // Lighting (Warm Historical Museum Atmosphere)
    const ambientLight = new THREE.AmbientLight(0xffecd2, 0.6);
    scene.add(ambientLight);

    const warmSpot = new THREE.SpotLight(0xffd59e, 3.5, 12, Math.PI / 4, 0.5, 1);
    warmSpot.position.set(1.5, 5, 2.5);
    warmSpot.target = bookMesh;
    warmSpot.castShadow = true;
    warmSpot.shadow.mapSize.width = 1024;
    warmSpot.shadow.mapSize.height = 1024;
    scene.add(warmSpot);

    const fillLight = new THREE.PointLight(0xa54336, 1.2, 8);
    fillLight.position.set(-3, 2, -1);
    scene.add(fillLight);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Scroll parallax / Subtle movement
    let targetRotY = 0.15;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetRotY = 0.15 + (scrollY * 0.0003);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Render Loop
    const clock = new THREE.Clock();
    const animate = () => {
      if (!isInViewRef.current) {
        isRunningRef.current = false;
        return;
      }

      const time = clock.getElapsedTime();

      // Subtle breath motion
      bookMesh.rotation.y += (targetRotY - bookMesh.rotation.y) * 0.05;
      camera.position.x = Math.sin(time * 0.3) * 0.15;
      camera.position.y = 3.8 + Math.cos(time * 0.25) * 0.08;
      camera.lookAt(0, 0.2, 0);

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animateRef.current = animate;
    if (isInViewRef.current) {
      isRunningRef.current = true;
      animFrameId.current = requestAnimationFrame(animate);
    }

    // Cleanup on unmount
    return () => {
      isRunningRef.current = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      deskGeo.dispose();
      deskMat.dispose();
      bookGeo.dispose();
      bookMaterials.forEach((m) => m.dispose());
      bookTexture.dispose();
      penBodyGeo.dispose();
      penMat.dispose();
      handleGeo.dispose();
      handleMat.dispose();
      stampBaseGeo.dispose();
      stampBaseMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
