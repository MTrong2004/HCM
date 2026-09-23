"use client";

import React, { useRef } from "react";
import { useInViewport } from "@/hooks/useInViewport";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ThreeSceneShellProps {
  id: string;
  title: string;
  fallbackPoster: React.ReactNode;
  children: (isInView: boolean) => React.ReactNode;
  className?: string;
  aspectRatio?: string;
}

export default function ThreeSceneShell({
  id,
  title,
  fallbackPoster,
  children,
  className = "",
  aspectRatio = "aspect-video md:aspect-[21/9]",
}: ThreeSceneShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport(containerRef, { threshold: 0.1 });
  const { isWebGLAvailable, isLowEnd } = useDeviceCapability();
  const prefersReducedMotion = useReducedMotion();

  // If WebGL is not supported, device is extremely low-end, or user prefers reduced motion, render fallback
  const shouldUseFallback = !isWebGLAvailable || (isLowEnd && prefersReducedMotion);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden border border-accent/40 bg-dark-bg shadow-2xl transition-all ${className}`}
      aria-label={title}
    >
      {shouldUseFallback ? (
        <div className="absolute inset-0 z-10 w-full h-full">
          {fallbackPoster}
        </div>
      ) : (
        <>
          {/* Active 3D canvas only rendered when in viewport to ensure 60fps & save GPU */}
          <div className="absolute inset-0 w-full h-full z-10">
            {children(isInView)}
          </div>

          {/* Fallback visible while loading or when out of viewport */}
          {!isInView && (
            <div className="absolute inset-0 z-0 opacity-70 transition-opacity">
              {fallbackPoster}
            </div>
          )}
        </>
      )}

      {/* Museum Exhibition Tag */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="px-3 py-1 rounded bg-dark-surface/85 backdrop-blur-md border border-accent/30 text-accent-light text-[11px] font-mono tracking-widest uppercase shadow">
          {title}
        </span>
      </div>
    </div>
  );
}
