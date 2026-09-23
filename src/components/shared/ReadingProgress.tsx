"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";

export default function ReadingProgress() {
  const { scrollTo } = useSmoothScroll();
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
