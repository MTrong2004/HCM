"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Volume2,
  VolumeX,
  Presentation,
  BookOpen,
  Type,
  Keyboard,
  Check,
} from "lucide-react";
import {
  toggleSound,
  isSoundMuted,
  playSubtleClick,
} from "@/lib/sound-effects";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPresentation: () => void;
  onOpenBook3D: () => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  onOpenPresentation,
  onOpenBook3D,
}: SettingsModalProps) {
  const [soundOn, setSoundOn] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSoundOn(!isSoundMuted());
      const savedFontSize = localStorage.getItem("hcm_font_size") as
        | "normal"
        | "large"
        | "xlarge"
        | null;
      if (savedFontSize) {
        setFontSize(savedFontSize);
      }
    }
  }, [isOpen]);

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

  const handleToggleSound = () => {
    const newSoundState = toggleSound();
    setSoundOn(newSoundState);
    if (newSoundState) {
      playSubtleClick();
    }
  };

  const handleSetFontSize = (size: "normal" | "large" | "xlarge") => {
    playSubtleClick();
    setFontSize(size);
    if (typeof window !== "undefined") {
      localStorage.setItem("hcm_font_size", size);
      if (size === "large") {
        document.documentElement.style.fontSize = "17px";
      } else if (size === "xlarge") {
        document.documentElement.style.fontSize = "18.5px";
      } else {
        document.documentElement.style.fontSize = "16px";
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg flex flex-col bg-[#fdfaf3] text-[#1a1a1a] rounded-xl border-2 border-[#c5a059] shadow-2xl overflow-hidden"
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
                id="settings-modal-title"
                className="font-serif font-bold text-base text-[#ffd700] tracking-wide"
              >
                CÀI ĐẶT TRẢI NGHIỆM
              </h3>
              <p className="font-sans text-xs text-[#fbf8f0]/80">
                Tùy chỉnh âm thanh, cỡ chữ và các chế độ xem chuyên sâu
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
            aria-label="Đóng bảng cài đặt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nội dung cài đặt */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[75vh]">
          {/* 1. Âm thanh tương tác */}
          <div className="p-3.5 rounded-lg border border-[#e5d5be] bg-[#f8f1e2] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#7a1818] text-[#ffd700] flex items-center justify-center flex-shrink-0 shadow-xs">
                {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#4a0d0d]">
                  Âm thanh hiệu ứng UI
                </h4>
                <p className="text-xs text-[#6b5847]">
                  Tiếng lật trang sách, tiếng click nhẹ và chuông trắc nghiệm
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleSound}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                soundOn ? "bg-[#7a1818]" : "bg-[#c5b5a2]"
              }`}
              role="switch"
              aria-checked={soundOn}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  soundOn ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* 2. Cỡ chữ hiển thị */}
          <div className="p-3.5 rounded-lg border border-[#e5d5be] bg-[#f8f1e2] space-y-2">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#7a1818]" />
              <h4 className="font-serif font-bold text-sm text-[#4a0d0d]">
                Kích thước chữ đọc bài
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleSetFontSize("normal")}
                className={`py-2 px-3 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  fontSize === "normal"
                    ? "bg-[#7a1818] text-white border-[#7a1818] shadow-xs"
                    : "bg-[#fbf9f4] text-[#4a3225] border-[#d8c7b0] hover:bg-[#ede3d1]"
                }`}
              >
                {fontSize === "normal" && <Check className="w-3.5 h-3.5" />}
                Chuẩn (100%)
              </button>

              <button
                type="button"
                onClick={() => handleSetFontSize("large")}
                className={`py-2 px-3 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  fontSize === "large"
                    ? "bg-[#7a1818] text-white border-[#7a1818] shadow-xs"
                    : "bg-[#fbf9f4] text-[#4a3225] border-[#d8c7b0] hover:bg-[#ede3d1]"
                }`}
              >
                {fontSize === "large" && <Check className="w-3.5 h-3.5" />}
                Lớn (110%)
              </button>

              <button
                type="button"
                onClick={() => handleSetFontSize("xlarge")}
                className={`py-2 px-3 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  fontSize === "xlarge"
                    ? "bg-[#7a1818] text-white border-[#7a1818] shadow-xs"
                    : "bg-[#fbf9f4] text-[#4a3225] border-[#d8c7b0] hover:bg-[#ede3d1]"
                }`}
              >
                {fontSize === "xlarge" && <Check className="w-3.5 h-3.5" />}
                Rất lớn (120%)
              </button>
            </div>
          </div>

          {/* 3. Tiện ích nâng cao */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#6b5847]">
              Các chế độ xem đặc biệt
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  playSubtleClick();
                  onClose();
                  onOpenPresentation();
                }}
                className="p-3 rounded-lg border border-[#e5d5be] bg-[#fbf9f4] hover:bg-[#eddcc6] flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#7a1818]/15 text-[#7a1818] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7a1818] group-hover:text-white transition-colors">
                  <Presentation className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif font-bold text-xs text-[#2d1b11]">
                    Chế độ Thuyết trình
                  </div>
                  <div className="text-[10.5px] text-[#6b5847]">
                    Chiếu slide toàn màn hình
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  playSubtleClick();
                  onClose();
                  onOpenBook3D();
                }}
                className="p-3 rounded-lg border border-[#e5d5be] bg-[#fbf9f4] hover:bg-[#eddcc6] flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#7a1818]/15 text-[#7a1818] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7a1818] group-hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif font-bold text-xs text-[#2d1b11]">
                    Sách 3D Hiến pháp 1946
                  </div>
                  <div className="text-[10.5px] text-[#6b5847]">
                    Lật trang tư liệu lập hiến
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* 4. Hướng dẫn phím tắt */}
          <div className="p-3 rounded-lg bg-[#efe7d8] border border-[#d8c7b0] text-xs text-[#5c4a3d] space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-[#4a0d0d]">
              <Keyboard className="w-3.5 h-3.5" />
              <span>Phím tắt thao tác nhanh</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              <div>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ccc] font-mono font-bold text-[10px]">
                  Ctrl + K
                </kbd>{" "}
                Tìm kiếm tài liệu
              </div>
              <div>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ccc] font-mono font-bold text-[10px]">
                  Ctrl + B
                </kbd>{" "}
                Mở sổ tay ghi chú
              </div>
              <div>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ccc] font-mono font-bold text-[10px]">
                  Esc
                </kbd>{" "}
                Đóng các bảng pop-up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
