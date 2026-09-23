"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, ChevronRight, BookOpen, Clock } from "lucide-react";
import { CANONICAL_SECTIONS } from "@/content/canonical-sections";
import { playSubtleClick } from "@/lib/sound-effects";

interface LearningProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function LearningProgressModal({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}: LearningProgressModalProps) {
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

  const sectionIds = CANONICAL_SECTIONS.map((s) => s.id);
  const currentIdx = sectionIds.indexOf(activeSection);
  const completedCount = currentIdx >= 0 ? currentIdx + 1 : 1;
  const progressPercent = Math.round((completedCount / CANONICAL_SECTIONS.length) * 100);

  const handleSelectSection = (id: string) => {
    playSubtleClick();
    onNavigate(id);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="progress-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#fdfaf3] text-[#1a1a1a] rounded-xl border-2 border-[#c5a059] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#4a0d0d] text-[#fbf8f0] border-b border-[#c5a059]/40 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#7a1818] border border-[#d4af37]/60 flex items-center justify-center text-[#ffd700] text-sm font-bold shadow-xs">
              ★
            </span>
            <div>
              <h3
                id="progress-modal-title"
                className="font-serif font-bold text-base text-[#ffd700] tracking-wide"
              >
                LỘ TRÌNH & TIẾN ĐỘ NGHIÊN CỨU
              </h3>
              <p className="font-sans text-xs text-[#fbf8f0]/80">
                Chương 4: Tư tưởng Hồ Chí Minh về Đảng và Nhà nước
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
            aria-label="Đóng bảng tiến độ (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tổng quan phần trăm tiến độ */}
        <div className="p-4 sm:p-5 bg-[#f6eee0] border-b border-[#e5d5be] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-[#7a1818]">
                Mức độ hoàn thành bài học
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#7a1818]/15 text-[#7a1818]">
                {completedCount} / {CANONICAL_SECTIONS.length} phần
              </span>
            </div>
            <span className="font-mono font-bold text-lg text-[#7a1818]">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-[#e3d3be] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8b1e1e] to-[#d4af37] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Danh sách các phần bài học */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
          {CANONICAL_SECTIONS.map((section, idx) => {
            const isCompleted = idx < currentIdx;
            const isCurrent = idx === currentIdx;

            return (
              <div
                key={section.id}
                onClick={() => handleSelectSection(section.id)}
                className={`p-3 sm:p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                  isCurrent
                    ? "bg-[#eddcc6] border-[#7a1818] shadow-xs ring-1 ring-[#7a1818]/40"
                    : isCompleted
                    ? "bg-[#faf5eb] border-[#e2d4c0] hover:bg-[#f3ebd9]"
                    : "bg-[#fbf9f4] border-[#e8ded0] opacity-80 hover:opacity-100 hover:bg-[#f6efe2]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Trạng thái icon */}
                  <div className="mt-0.5 flex-shrink-0">
                    {isCompleted ? (
                      <div className="w-5 h-5 rounded-full bg-[#c5a059] text-white flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : isCurrent ? (
                      <div className="w-5 h-5 rounded-full bg-[#7a1818] ring-4 ring-[#7a1818]/20 flex items-center justify-center shadow-xs animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-[#b5a593] flex items-center justify-center">
                        <span className="text-[10px] font-mono font-bold text-[#8c7866]">
                          {idx + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Thông tin phần học */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#7a1818]">
                        {section.number !== "0" ? `Mục ${section.number}` : "Mở đầu"}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#2d1b11] group-hover:text-[#7a1818] transition-colors">
                        {section.shortTitle}
                      </h4>
                      {isCurrent && (
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#7a1818] text-white">
                          Đang học
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5c4a3d] line-clamp-1 mt-0.5">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#7a1818] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span className="text-[11px] font-medium hidden sm:inline">Học ngay</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
