"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface KineticNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * KineticNumber - Bộ đếm số cơ học lịch sử
 * Hiển thị số liệu với hiệu ứng lăn số cơ học mượt mà khi cuộn tới,
 * tự động tắt chuyển động (hiển thị ngay) khi kích hoạt reduced motion.
 */
export default function KineticNumber({
  value,
  duration = 1100,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: KineticNumberProps) {
  const isReduced = useReducedMotion();
  const [animatedValue, setAnimatedValue] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isReduced) return;

    const node = elementRef.current;
    if (!node) return;

    let rafId: number | null = null;
    let startTime: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          observer.disconnect();
          setHasStarted(true);

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease Out Cubic: 1 - (1 - t)^3
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeOutProgress * value;

            setAnimatedValue(current);

            if (progress < 1) {
              rafId = requestAnimationFrame(step);
            } else {
              setAnimatedValue(value);
            }
          };

          rafId = requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration, isReduced]);

  const currentValue = isReduced || !hasStarted ? (isReduced ? value : 0) : animatedValue;

  const formatted =
    decimals > 0
      ? currentValue.toFixed(decimals)
      : Math.round(currentValue).toString();

  return (
    <span ref={elementRef} className={`inline-block font-mono tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
