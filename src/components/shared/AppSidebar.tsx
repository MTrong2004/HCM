"use client";

import React from "react";
import {
  Home,
  BookOpen,
  ChevronDown,
  Target,
  Circle,
  Award,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { HoChiMinhEmblem, LotusWatermark } from "./HeritageIcons";
import { playSubtleClick } from "@/lib/sound-effects";

interface AppSidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export default function AppSidebar({ onItemClick, className = "" }: AppSidebarProps) {
  const { activeSection, scrollTo } = useSmoothScroll();

  const handleNavigate = (id: string) => {
    playSubtleClick();
    scrollTo(id, -72, true);
    if (onItemClick) {
      onItemClick();
    }
  };

  const navTree = [
    {
      groupTitle: "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân",
      items: [
        {
          id: "dan-chu",
          code: "4.2.1",
          title: "Nhà nước dân chủ",
        },
        {
          id: "phap-quyen",
          code: "4.2.2",
          title: "Nhà nước pháp quyền",
        },
        {
          id: "trong-sach-vung-manh",
          code: "4.2.3",
          title: "Nhà nước trong sạch, vững mạnh",
        },
      ],
    },
    {
      groupTitle: "4.3. Vận dụng xây dựng Đảng và Nhà nước",
      items: [
        {
          id: "xay-dung-dang",
          code: "4.3.1",
          title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
        },
        {
          id: "xay-dung-nha-nuoc",
          code: "4.3.2",
          title: "Xây dựng Nhà nước",
        },
        {
          id: "phong-chong-tham-nhung",
          code: "4.3.3",
          title: "Phòng, chống tham nhũng",
        },
      ],
    },
  ];

  return (
    <aside
      className={`bg-gradient-to-b from-[#5c1313] via-[#4a0e0e] to-[#340808] text-paper-light border-r border-[#782323] shadow-2xl flex flex-col justify-between overflow-y-auto select-none relative ${className}`}
      aria-label="Cây điều hướng chương trình học Tư tưởng Hồ Chí Minh"
    >
      {/* 1. Header Nhận diện Thương hiệu & Chân dung Bác Hồ */}
      <div className="p-5 border-b border-[#732121]/60 bg-[#420c0c]/40 text-center relative z-10">
        <div className="flex justify-center mb-3">
          <div className="relative p-1 rounded-full bg-gradient-to-b from-[#d4af37]/30 to-transparent shadow-inner">
            <HoChiMinhEmblem className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" />
          </div>
        </div>
        <h1 className="font-serif text-sm sm:text-base font-bold tracking-wider text-[#f5e6b8] uppercase leading-tight drop-shadow-xs">
          TƯ TƯỞNG HỒ CHÍ MINH
        </h1>
        <p className="font-serif italic text-[11px] text-[#e8d29b]/85 mt-1 leading-normal">
          Giá trị dẫn đường cho hiện tại và tương lai
        </p>
      </div>

      {/* 2. Menu Điều Hướng Cây Cấu Trúc (Course Navigation Tree) */}
      <div className="flex-1 px-3 py-4 space-y-4 overflow-y-auto text-xs relative z-10">
        {/* Quick Links */}
        <div className="space-y-1">
          <button
            onClick={() => handleNavigate("hero")}
            className={`w-full min-h-[44px] flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors font-sans ${
              activeSection === "hero"
                ? "bg-[#fcfaf4] text-[#6b1414] font-bold shadow-sm"
                : "text-paper-light/85 hover:bg-white/10 hover:text-paper-light"
            }`}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium text-xs">Trang chủ</span>
          </button>

          <button
            onClick={() => handleNavigate("hero")}
            className="w-full min-h-[44px] flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-paper-light/85 hover:bg-white/10 hover:text-paper-light transition-colors font-sans"
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium text-xs">Giới thiệu môn học</span>
          </button>
        </div>

        {/* Cụm Chương 4 */}
        <div className="pt-2 border-t border-[#6b1d1d]/60">
          <div className="flex items-start gap-1.5 px-2 py-1 text-[#f3dfa7] font-serif font-bold text-xs uppercase tracking-wide">
            <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-[#d4af37] flex-shrink-0" />
            <span className="leading-snug">
              Chương 4: Tư tưởng Hồ Chí Minh về Đảng và Nhà nước
            </span>
          </div>

          <div className="mt-2 ml-2 pl-2 border-l border-[#782323] space-y-4">
            {navTree.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1.5">
                <div className="text-[10.5px] font-sans font-semibold text-[#e0c99a] px-2 leading-relaxed">
                  {group.groupTitle}
                </div>

                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full min-h-[44px] flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-left transition-all ${
                          isActive
                            ? "bg-[#fdfaf5] text-[#6b1414] font-bold shadow-md ring-1 ring-black/10"
                            : "text-paper-light/80 hover:bg-white/10 hover:text-paper-light font-medium"
                        }`}
                        title={`${item.code} ${item.title}`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {isActive ? (
                            <Target className="w-3.5 h-3.5 text-[#8a1a1a] flex-shrink-0 animate-pulse" />
                          ) : (
                            <Circle className="w-2 h-2 text-[#d4af37]/60 flex-shrink-0" />
                          )}
                          <span className="truncate text-xs">
                            <strong className="mr-1">{item.code}</strong>
                            {item.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Mục Kết luận */}
            <div className="pt-1">
              <button
                onClick={() => handleNavigate("ket-luan")}
                className={`w-full min-h-[44px] flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all ${
                  activeSection === "ket-luan"
                    ? "bg-[#fdfaf5] text-[#6b1414] font-bold shadow-md"
                    : "text-paper-light/80 hover:bg-white/10 hover:text-paper-light font-medium"
                }`}
              >
                <Award className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                <span className="truncate text-xs">5.0 Kết luận & Tham khảo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Chân Trang Trích Dẫn Thơ Bác & Hoa Sen */}
      <div className="p-4 border-t border-[#732121]/60 bg-[#350707]/60 relative overflow-hidden z-10">
        <div className="relative z-10">
          <blockquote className="font-serif italic text-[11px] leading-relaxed text-[#f3e5c0] text-center">
            “Dân ta phải biết sử ta
            <br />
            Cho tường gốc tích nước nhà Việt Nam”
          </blockquote>
          <p className="text-right text-[10px] font-serif text-[#d4af37] font-semibold mt-1 mr-2">
            — Hồ Chí Minh —
          </p>
        </div>

        {/* Họa tiết hoa sen chìm góc chân trang */}
        <div className="absolute -bottom-4 -right-4 pointer-events-none text-[#d4af37]">
          <LotusWatermark className="w-24 h-24 opacity-15" />
        </div>
      </div>
    </aside>
  );
}
