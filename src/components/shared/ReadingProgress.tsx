"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";

export default function ReadingProgress() {
  const { scrollProgress, scrollTo } = useSmoothScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    playSubtleClick();
    scrollTo("phap-quyen", -56, true);
  };

  return (
    <>
      {/* Top Reading Progress Bar (Fixed below header or top border) */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#e2d8c6]"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Tiến độ đọc toàn văn tác phẩm"
      >
        <div
          className="h-full bg-[#7a1414] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll-to-Top Button (Strictly hidden on mobile below sm to avoid blocking text) */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-30 p-2.5 rounded-full bg-[#7a1414] text-[#fbf8f0] shadow-lg hover:bg-[#5e1010] transition-colors duration-200 border border-[#d4af37]/40 animate-in fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-paper-light"
          title="Lên đầu trang"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
