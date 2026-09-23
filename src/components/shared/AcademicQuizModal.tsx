"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import AcademicQuizSection from "../storytelling/AcademicQuizSection";
import { playSubtleClick } from "@/lib/sound-effects";

interface AcademicQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcademicQuizModal({
  isOpen,
  onClose,
}: AcademicQuizModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fdfaf3] text-[#1a1a1a] rounded-xl border-2 border-[#c5a059] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#4a0d0d] text-[#fbf8f0] border-b border-[#c5a059]/40 flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7a1818] border border-[#d4af37]/60 flex items-center justify-center text-[#ffd700] text-sm font-bold shadow-xs">
              ★
            </span>
            <div>
              <h3
                id="quiz-modal-title"
                className="font-serif font-bold text-sm sm:text-base text-[#ffd700] tracking-wide"
              >
                ÔN TẬP & TRẮC NGHIỆM KIẾN THỨC
              </h3>
              <p className="font-sans text-[10.5px] sm:text-xs text-[#fbf8f0]/80">
                5 Luận điểm cốt lõi về Nhà nước của nhân dân, do nhân dân, vì nhân dân
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#ffd700] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            title="Đóng (Esc)"
            aria-label="Đóng bảng trắc nghiệm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Quiz Body */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4">
          <AcademicQuizSection />
        </div>
      </div>
    </div>
  );
}
