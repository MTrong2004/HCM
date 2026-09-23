---
name: gsap-scroll-storytelling
description: "Guidelines and architecture for coordinating GSAP ScrollTrigger and Lenis smooth scrolling in Next.js 15, ensuring zero memory leaks and reduced-motion accessibility."
---

# GSAP Scroll Storytelling Skill

This skill governs the integration of GSAP ScrollTrigger and Lenis smooth scroll within React 19 / Next.js 15.

## Core Directives

1. **Unified RequestAnimationFrame (RAF)**:
   - Synchronize Lenis and GSAP ScrollTrigger through a single unified ticker:
     ```ts
     lenis.on('scroll', ScrollTrigger.update);
     gsap.ticker.add((time) => {
       lenis.raf(time * 1000);
     });
     gsap.ticker.lagSmoothing(0);
     ```
   - Never create disconnected or duplicate `requestAnimationFrame` loops that cause scroll stutter.

2. **React Lifecycle & Cleanup**:
   - Always wrap GSAP ScrollTrigger instances inside `gsap.context()` inside `useLayoutEffect` (or a client-side safe effect hook):
     ```tsx
     useLayoutEffect(() => {
       const ctx = gsap.context(() => {
         // Create ScrollTriggers, timelines, animations
       }, containerRef);
       return () => ctx.revert(); // Complete cleanup prevents memory leaks & duplicate triggers
     }, []);
     ```

3. **Separation from Framer Motion**:
   - Do NOT control the same CSS properties on the same DOM element with both GSAP and Framer Motion.
   - Use GSAP ScrollTrigger for scroll-pinned reveals, parallax layers, and 3D camera scrub.
   - Use Framer Motion for pure interactive UI states (buttons, dropdowns, modal entrances, hover gestures).

4. **Reduced Motion & Mobile Adaptations**:
   - Check `useReducedMotion()`. If enabled:
     - Discard scroll scrubbing, pinning, and parallax.
     - Present all content statically in clean, legible reading order.
   - On mobile screens (< 768px), disable lengthy pinning that disrupts natural mobile touch scrolling.
