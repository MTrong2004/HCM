/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const posStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  const resolvedSrc = getAssetPath(src);

  const handleClose = useCallback(() => {
    playSubtleClick();
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    isDraggingRef.current = false;
    hasMovedRef.current = false;
  }, []);

  // Xử lý phím ESC: thoát ngay lập tức
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  // Khóa cuộn trang khi mở Lightbox
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  // Lăn chuột để phóng to / thu nhỏ mượt mà & chặn cuộn trang web
  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const zoomStep = e.deltaY < 0 ? 0.35 : -0.35;
      setScale((prev) => {
        const next = Math.min(Math.max(Number((prev + zoomStep).toFixed(2)), 1), 4);
        if (next === 1) {
          setPosition({ x: 0, y: 0 });
        }
        return next;
      });
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [isOpen]);

  const handleOpen = () => {
    if (!allowZoom) return;
    playSubtleClick();
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    isDraggingRef.current = false;
    hasMovedRef.current = false;
    setIsOpen(true);
  };

  // Nhấp vào ảnh: nếu không kéo rê thì chuyển đổi giữa 100% và 220%
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMovedRef.current) {
      hasMovedRef.current = false;
      return;
    }
    playSubtleClick();
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.2);
    }
  };

  // Nhấp ra ngoài vùng ảnh: tự động thoát chế độ phóng to ngay lập tức
  const handleBackdropClick = () => {
    if (hasMovedRef.current) {
      hasMovedRef.current = false;
      return;
    }
    playSubtleClick();
    handleClose();
  };

  // Bắt đầu kéo rê di chuyển bằng Pointer Capture (hoạt động hoàn hảo trên mọi thiết bị)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    posStartRef.current = { x: position.x, y: position.y };
    setIsDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || scale <= 1) return;
    e.preventDefault();
    e.stopPropagation();
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.hypot(dx, dy) > 4) {
      hasMovedRef.current = true;
    }
    // Giới hạn biên độ kéo để ảnh không bị trượt mất khỏi màn hình
    const maxPanX = (window.innerWidth * (scale - 0.7)) / 2;
    const maxPanY = (window.innerHeight * (scale - 0.7)) / 2;
    const nextX = Math.max(-maxPanX, Math.min(maxPanX, posStartRef.current.x + dx));
    const nextY = Math.max(-maxPanY, Math.min(maxPanY, posStartRef.current.y + dy));
    setPosition({ x: nextX, y: nextY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
      isDraggingRef.current = false;
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const ratioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
    auto: "",
  }[aspectRatio];

  return (
    <>
      {/* THẺ HÌNH ẢNH TRÊN TRANG (ACADEMIC ARCHIVAL CARD) */}
      <figure
        className={`group relative rounded-lg border border-[#dfd3bf] bg-[#fbf9f4] p-1.5 sm:p-2 shadow-2xs hover:shadow-xs hover:border-[#b58319]/70 transition-all duration-300 flex flex-col justify-between ${
          compact ? "space-y-1.5" : "space-y-2"
        } ${className}`}
      >
        <div
          onClick={handleOpen}
          className={`relative w-full overflow-hidden rounded bg-[#1c140e] ${ratioClass} ${
            allowZoom ? "cursor-zoom-in" : ""
          }`}
        >
          <img
            src={resolvedSrc}
            alt={alt}
            className={`w-full h-full object-cover ${objectPosition} filter sepia-[0.05] contrast-[1.03] transition-transform duration-500 group-hover:scale-105 group-hover:sepia-0`}
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Huy hiệu năm / tư liệu */}
          {(year || badgeText) && (
            <div className="absolute top-2 left-2 flex items-center pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-[#7a1818]/90 text-[#fff8ea] text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs border border-[#ffd700]/30 shadow-xs">
                {badgeText || `NĂM ${year}`}
              </span>
            </div>
          )}

          {/* Nhãn gợi ý khi hover */}
          {allowZoom && (
            <div className="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-zinc-200 bg-black/75 px-1.5 py-0.5 rounded backdrop-blur-xs pointer-events-none">
              Phóng to tư liệu
            </div>
          )}
        </div>

        {/* Chú thích học thuật */}
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

      {/* CHẾ ĐỘ PHÓNG TO: 100% KHÔNG CHỮ, KHÔNG ICON - CHỈ CÓ BỨC ẢNH LỊCH SỬ TRÀN MÀN HÌNH */}
      {isOpen && (
        <div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-hidden cursor-zoom-out"
          onClick={handleBackdropClick}
        >
          {/* Vùng ảnh chính phóng to cực đại, hỗ trợ nắm kéo và lăn chuột zoom */}
          <div
            className={`relative flex items-center justify-center select-none ${
              isDragging ? "transition-none" : "transition-transform duration-200 ease-out"
            }`}
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
              transformOrigin: "center center",
              touchAction: "none",
            }}
            onClick={handleImageClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <img
              src={resolvedSrc}
              alt={alt}
              draggable={false}
              className={`max-w-[96vw] max-h-[94vh] w-auto h-auto object-contain rounded shadow-[0_0_80px_rgba(0,0,0,0.95)] filter contrast-[1.03] select-none ${
                scale > 1
                  ? isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                  : "cursor-zoom-in"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
