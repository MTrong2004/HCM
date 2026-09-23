---
name: threejs-storytelling
description: "Guidelines and architecture for integrating Three.js / WebGL scenes in Next.js 15 scroll-storytelling applications with strict performance, lazy-loading, and poster fallbacks."
---

# Three.js Storytelling Skill

This skill governs the integration of 3D WebGL scenes into the digital magazine scroll storytelling presentation.

## Core Directives

1. **Isolation & Dynamic Import**:
   - WebGL components MUST use dynamic import with `ssr: false`:
     ```tsx
     const ConstitutionHeroScene = dynamic(
       () => import("@/components/three/ConstitutionHeroScene"),
       { ssr: false, loading: () => <PosterFallback /> }
     );
     ```
   - Never access browser globals (`window`, `document`, WebGL context) inside Server Components or during SSR.

2. **Single Active Canvas Rule**:
   - Only ONE WebGL Canvas is allowed to render actively in the viewport at any given time.
   - Use `IntersectionObserver` via `useInViewport` to pause rendering (`frameloop="demand"` or stopping `requestAnimationFrame`) when a scene leaves the viewport.

3. **Fallback & Device Capability**:
   - Detect low-power devices, battery saver mode, or missing WebGL contexts using `useDeviceCapability`.
   - On low-end mobile devices or unsupported browsers, seamlessly display a high-resolution SVG or WebP poster fallback without throwing errors or breaking the scroll flow.

4. **Resource Management**:
   - Explicitly dispose of geometries, materials, and textures when scenes unmount (`geometry.dispose()`, `material.dispose()`).
   - Keep models minimalist and procedural where possible, or compress GLTF/GLB models with Draco / Meshopt under 2–4 MB.
   - Texture resolutions must not exceed 2048px on desktop and 1024px on mobile.

5. **Scroll Integration**:
   - 3D camera and object motions should be driven by GSAP ScrollTrigger values or smooth lerping, never blocking native touch or wheel scrolling.
   - Respect `prefers-reduced-motion`: freeze camera sweeps and present static, dignified compositions.
