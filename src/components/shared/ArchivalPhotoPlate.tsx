/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Maximize2, X, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { playSubtleClick } from "@/lib/sound-effects";

export interface ArchivalPhotoPlateProps {
  src: string;
  alt: string;
  caption: string;
  source?: string;
  year?: string | number;
  badgeText?: string;
  aspectRatio?: "16/9" | "4/3" | "3/2" | "1/1" | "auto";
  objectPosition?: string;
  className?: string;
  compact?: boolean;
  allowZoom?: boolean;
}

export default function ArchivalPhotoPlate({
  src,
  alt,
  caption,
  source = "Bảo tàng Lịch sử Quốc gia",
  year,
  badgeText,
  aspectRatio = "16/9",
  objectPosition = "object-center",
  className = "",
  compact = false,
  allowZoom = true,
}: ArchivalPhotoPlateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedSrc = getAssetPath(src);

  // Xử lý phím Escape để đóng Lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleOpen = () => {
    if (!allowZoom) return;
    playSubtleClick();
    setIsOpen(true);
  };

  const handleClose = () => {
    playSubtleClick();
    setIsOpen(false);
  };

  const ratioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
    "auto": "",
  }[aspectRatio];

  return (
    <>
      <figure
        className={`group relative rounded-lg border border-[#dfd3bf] bg-[#fbf9f4] p-1.5 sm:p-2 shadow-2xs hover:shadow-xs hover:border-[#b58319]/70 transition-all duration-300 flex flex-col justify-between ${
          compact ? "space-y-1.5" : "space-y-2"
        } ${className}`}
      >
        {/* Khung ảnh chính với lớp phủ nghệ thuật di sản */}
        <div
          onClick={handleOpen}
          className={`relative w-full overflow-hidden rounded bg-[#1c140e] ${ratioClass} ${
            allowZoom ? "cursor-zoom-in" : ""
          }`}
        >
          <img
            src={resolvedSrc}
            alt={alt}
            className={`w-full h-full object-cover ${objectPosition} filter sepia-[0.06] contrast-[1.03] transition-all duration-500 group-hover:scale-105 group-hover:sepia-0`}
            loading="lazy"
          />

          {/* Lớp phủ chuyển sắc nhẹ ở góc dưới để bảo đảm tương phản */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Nhãn Huy hiệu Di sản / Năm lịch sử ở góc trên */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5 pointer-events-none">
            {(year || badgeText) && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#7a1818]/90 text-[#fff8ea] text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs border border-[#ffd700]/30">
                <Sparkles className="w-2.5 h-2.5 text-[#ffd700]" />
                {badgeText || `NĂM ${year}`}
              </span>
            )}
          </div>

          {/* Nút phóng to ở góc trên bên phải khi hover */}
          {allowZoom && (
            <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#fff8ea] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs shadow-xs">
              <Maximize2 className="w-3.5 h-3.5 text-[#ffd700]" />
            </div>
          )}

          {/* Nhãn gợi ý bấm xem ở chân ảnh khi hover */}
          {allowZoom && (
            <div className="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-[#ffd700] bg-black/75 px-1.5 py-0.5 rounded backdrop-blur-xs pointer-events-none">
              Phóng to tư liệu
            </div>
          )}
        </div>

        {/* Khối Chú thích học thuật */}
        <figcaption className="space-y-0.5 px-0.5 text-left">
          <p
            className={`font-serif text-ink leading-snug font-medium ${
              compact ? "text-[11px] sm:text-xs line-clamp-2" : "text-xs sm:text-[13px]"
            }`}
          >
            {caption}
          </p>
          {source && (
            <div className="flex items-center justify-between text-[10px] sm:text-[10.5px] text-ink-muted font-sans pt-0.5 border-t border-[#ebdcc9]/70">
              <span className="truncate max-w-[85%] italic">
                Nguồn: {source}
              </span>
              {year && !badgeText && (
                <span className="font-mono text-[#7a1818] font-semibold shrink-0">
                  {year}
                </span>
              )}
            </div>
          )}
        </figcaption>
      </figure>

      {/* LIGHTBOX MODAL TOÀN MÀN HÌNH KHI BẤM PHÓNG TO */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#fbf9f4] rounded-xl border border-[#d4af37]/60 shadow-2xl overflow-hidden flex flex-col gold-foil-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#f4ebe1] border-b border-[#dfd2be]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <span className="font-mono text-xs font-bold text-[#7a1818] uppercase tracking-wider">
                  TƯ LIỆU HÌNH ẢNH LỊCH SỬ {year ? `• NĂM ${year}` : ""}
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-lg text-ink-muted hover:text-[#7a1818] hover:bg-[#ebd8c2] transition-colors cursor-pointer"
                aria-label="Đóng xem ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Vùng hiển thị ảnh phóng to */}
            <div className="relative flex-1 min-h-[300px] max-h-[68vh] bg-[#140e0b] flex items-center justify-center overflow-hidden p-2">
              <img
                src={resolvedSrc}
                alt={alt}
                className="max-h-full max-w-full object-contain filter contrast-[1.03]"
              />
            </div>

            {/* Footer chú thích chi tiết và nguồn xuất xứ */}
            <div className="p-3.5 sm:p-4 bg-[#fbf8f0] border-t border-[#dfd2be] space-y-1">
              <h4 className="font-serif font-bold text-sm sm:text-base text-ink leading-snug">
                {caption}
              </h4>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted font-sans pt-1">
                <span>
                  <strong>Nguồn lưu trữ:</strong> {source}
                </span>
                <span className="font-mono text-[11px] text-[#7a1818] bg-[#7a1818]/10 px-2 py-0.5 rounded border border-[#7a1818]/20 font-semibold">
                  Tư liệu gốc phục vụ nghiên cứu & giảng dạy
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
