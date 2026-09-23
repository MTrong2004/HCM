"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { CANONICAL_SECTIONS } from "@/content/canonical-sections";
import { playSubtleClick } from "@/lib/sound-effects";

export default function ReadingProgress() {
  const { scrollProgress, activeSection, scrollTo } = useSmoothScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRailClick = (id: string) => {
    playSubtleClick();
    scrollTo(id, -72, true);
  };

  const handleScrollToTop = () => {
    playSubtleClick();
    scrollTo("hero", 0, true);
  };

  return (
    <>
      {/* Top Reading Progress Bar (Fixed below header or top border) */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-paper-dark/40"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Tiến độ đọc toàn văn tác phẩm"
      >
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Compact Chapter Rail (Editorial Floating Rail) */}
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2 pointer-events-auto"
        aria-label="Điều hướng 8 chương di sản"
      >
        <div className="bg-paper/90 px-1.5 py-2 border-y border-accent/35 flex flex-col items-center gap-2">
          {/* Progress Percentage Badge */}
          <div
            className="text-[10px] font-mono font-bold text-accent-dark tracking-wider text-center px-1 pb-1 border-b border-accent/25"
            title={`Đã hoàn thành ${Math.round(scrollProgress)}% nội dung`}
          >
            {Math.round(scrollProgress)}%
          </div>

          {/* 8 Canonical Chapter Markers */}
          {CANONICAL_SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleRailClick(sec.id)}
                className="group relative flex items-center justify-end gap-2.5 p-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                aria-label={`Chuyển tới chương: ${sec.shortTitle}`}
                title={`${sec.number}: ${sec.fullTitle}`}
              >
                {/* Refined Tooltip on Hover */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-8 whitespace-nowrap px-2.5 py-1 rounded-md bg-dark-bg text-paper-light text-xs font-sans shadow-lg border border-accent/40 z-50">
                  <span className="text-accent-light font-mono font-bold mr-1.5">
                    {sec.number}
                  </span>
                  <span className="font-medium">{sec.shortTitle}</span>
                </span>

                {/* Dot / Pill Indicator */}
                <span
                  className={`block transition-all duration-300 ${
                    isActive
                      ? "w-3 h-7 bg-primary rounded-full shadow-sm ring-2 ring-primary/30"
                      : "w-2.5 h-2.5 bg-accent/60 rounded-full group-hover:bg-primary group-hover:ring-2 group-hover:ring-primary/40"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Floating Scroll-to-Top Button (Strictly hidden on mobile below sm to avoid blocking text) */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-30 p-2.5 rounded-full bg-primary text-paper-light shadow-lg hover:bg-primary-dark transition-colors duration-200 border border-accent/40 animate-in fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-paper-light"
          title="Lên đầu trang"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
