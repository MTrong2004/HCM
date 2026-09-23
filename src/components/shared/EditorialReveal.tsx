"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Global single IntersectionObserver instance for maximum performance (0 layout thrash)
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, () => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target;
            const cb = observerCallbacks.get(target);
            if (cb) {
              cb();
              observerCallbacks.delete(target);
              sharedObserver?.unobserve(target);
            }
          }
        }
      },
      {
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
      }
    );
  }
  return sharedObserver;
}

export function registerRevealElement(el: HTMLElement, onIntersect: () => void): () => void {
  const obs = getSharedObserver();
  if (!obs) {
    onIntersect();
    return () => {};
  }
  observerCallbacks.set(el, onIntersect);
  obs.observe(el);
  return () => {
    observerCallbacks.delete(el);
    obs.unobserve(el);
  };
}

export interface EditorialRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: 0 | 80 | 160 | 240;
  className?: string;
  as?: React.ElementType;
}

export default function EditorialReveal({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
  ...rest
}: EditorialRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isReduced = useReducedMotion();
  const [revealed, setRevealed] = useState(() => isReduced);

  useEffect(() => {
    if (isReduced) {
      return;
    }
    const node = ref.current;
    if (!node) {
      return;
    }

    // Fast-path: nếu phần tử đã nằm trong viewport ngay lúc mount, lập tức kích hoạt revealed
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > -60) {
      const timer = setTimeout(() => setRevealed(true), 0);
      return () => clearTimeout(timer);
    }

    return registerRevealElement(node, () => {
      setRevealed(true);
    });
  }, [isReduced]);

  const state = isReduced || revealed ? "revealed" : "pending";

  return (
    <Component
      ref={ref}
      className={`editorial-reveal ${className}`}
      data-reveal-state={state}
      data-reveal-delay={delay ? String(delay) : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
