"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeSceneShell from "./ThreeSceneShell";

export default function PowerControlNetworkScene() {
  const fallbackPoster = (
    <div className="w-full h-full bg-gradient-to-b from-[#161211] to-[#0A0807] flex flex-col items-center justify-center p-8 text-center text-paper-light">
      <div className="w-20 h-20 mb-3 rounded-full border border-primary/50 bg-primary/20 flex items-center justify-center">
        <span className="font-serif text-2xl text-accent-light font-bold">DÂN</span>
      </div>
      <h3 className="font-serif text-2xl text-accent-light font-bold mb-1">
        MẠNG KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC
      </h3>
      <p className="font-sans text-xs sm:text-sm text-paper-dark max-w-sm">
        Quyền lực xuất phát từ Nhân dân và được kiểm soát chặt chẽ bởi Đảng, Nhà nước và toàn thể nhân dân.
      </p>
    </div>
  );

  return (
    <ThreeSceneShell
      id="scene-power-network"
      title="TRIỂN LÃM 3D: HỆ THỐNG KIỂM SOÁT QUYỀN LỰC"
      fallbackPoster={fallbackPoster}
      aspectRatio="aspect-[16/9] md:aspect-[21/9]"
    >
      {(isInView) => <NetworkCanvas isInView={isInView} />}
    </ThreeSceneShell>
  );
}

function NetworkCanvas({ isInView }: { isInView: boolean }) {
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

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0c0b);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Center Node: NHÂN DÂN (People)
    const centerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0x8b1e1e,
      emissive: 0x8b1e1e,
      emissiveIntensity: 0.4,
      metalness: 0.3,
      roughness: 0.4,
    });
    const centerNode = new THREE.Mesh(centerGeo, centerMat);
    networkGroup.add(centerNode);

    // Orbiting Satellites (Party, State, Law, Inspection)
    const satelliteNodes = [
      { name: "Đảng", pos: new THREE.Vector3(-2.6, 1.4, 0), color: 0xc6a15b },
      { name: "Nhà nước", pos: new THREE.Vector3(2.6, 1.4, 0), color: 0xc6a15b },
      { name: "Pháp luật", pos: new THREE.Vector3(-2.2, -1.6, 0), color: 0xdec285 },
      { name: "Kiểm tra / Giám sát", pos: new THREE.Vector3(2.2, -1.6, 0), color: 0xdec285 },
      { name: "Cử tri / Đại biểu", pos: new THREE.Vector3(0, 2.3, -0.5), color: 0xdec285 },
    ];

    const satGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const satMeshes: THREE.Mesh[] = [];
    const satMaterials: THREE.MeshStandardMaterial[] = [];
    const lineGeometries: THREE.BufferGeometry[] = [];
    const lineMaterials: THREE.LineBasicMaterial[] = [];

    satelliteNodes.forEach((node) => {
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.3,
        metalness: 0.4,
        roughness: 0.3,
      });
      satMaterials.push(mat);
      const mesh = new THREE.Mesh(satGeo, mat);
      mesh.position.copy(node.pos);
      networkGroup.add(mesh);
      satMeshes.push(mesh);

      // Connecting line from Center to Satellite
      const points = [new THREE.Vector3(0, 0, 0), node.pos];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      lineGeometries.push(lineGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xc6a15b,
        transparent: true,
        opacity: 0.5,
      });
      lineMaterials.push(lineMat);
      const line = new THREE.Line(lineGeo, lineMat);
      networkGroup.add(line);
    });

    // Connecting lines between satellites (Checks & balances)
    for (let i = 0; i < satelliteNodes.length; i++) {
      const nextIdx = (i + 1) % satelliteNodes.length;
      const points = [satelliteNodes[i].pos, satelliteNodes[nextIdx].pos];
      const ringLineGeo = new THREE.BufferGeometry().setFromPoints(points);
      lineGeometries.push(ringLineGeo);
      const ringLineMat = new THREE.LineBasicMaterial({
        color: 0x8b1e1e,
        transparent: true,
        opacity: 0.3,
      });
      lineMaterials.push(ringLineMat);
      const ringLine = new THREE.Line(ringLineGeo, ringLineMat);
      networkGroup.add(ringLine);
    }

    // Floating pulse particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc6a15b,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffd59e, 2, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Render loop
    const clock = new THREE.Clock();
    const animate = () => {
      if (!isInViewRef.current) {
        isRunningRef.current = false;
        return;
      }

      const time = clock.getElapsedTime();

      // Gentle rotation & floating
      networkGroup.rotation.y = time * 0.15;
      networkGroup.rotation.x = Math.sin(time * 0.2) * 0.08;

      // Pulse center
      const pulse = 1 + Math.sin(time * 2) * 0.05;
      centerNode.scale.set(pulse, pulse, pulse);

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
      window.removeEventListener("resize", handleResize);

      centerGeo.dispose();
      centerMat.dispose();
      satGeo.dispose();
      satMaterials.forEach((m) => m.dispose());
      lineGeometries.forEach((g) => g.dispose());
      lineMaterials.forEach((m) => m.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
