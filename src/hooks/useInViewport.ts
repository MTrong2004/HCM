"use client";

import { useState, useEffect, RefObject } from "react";

interface UseInViewportOptions {
  threshold?: number | number[];
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useInViewport(
  elementRef: RefObject<HTMLElement | null>,
  options: UseInViewportOptions = {}
): boolean {
  const { threshold = 0.05, rootMargin = "100px 0px 100px 0px", freezeOnceVisible = false } = options;
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInViewport(isVisible);
        if (isVisible && freezeOnceVisible) {
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, freezeOnceVisible]);

  return isInViewport;
}
