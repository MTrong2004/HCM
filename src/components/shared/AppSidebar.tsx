"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  BookOpen,
  ChevronDown,
  Target,
  Award,
  Users,
  Scale,
  ShieldCheck,
  Flag,
  Landmark,
  ShieldAlert,
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
  const [isHovered, setIsHovered] = useState(false);
  const asideRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const onEnter = () => {
      setIsHovered(true);
    };
    trigger.addEventListener("mouseenter", onEnter);
    trigger.addEventListener("pointerenter", onEnter);
    trigger.addEventListener("mouseover", onEnter);
    return () => {
      trigger.removeEventListener("mouseenter", onEnter);
      trigger.removeEventListener("pointerenter", onEnter);
      trigger.removeEventListener("mouseover", onEnter);
    };
  }, []);

  useEffect(() => {
    if (!isHovered) return;
    const panel = panelRef.current || document.getElementById("editorial-toc-drawer");
    if (!panel) return;
    const onLeave = () => setIsHovered(false);
    panel.addEventListener("mouseleave", onLeave);
    panel.addEventListener("pointerleave", onLeave);
    return () => {
      panel.removeEventListener("mouseleave", onLeave);
      panel.removeEventListener("pointerleave", onLeave);
    };
  }, [isHovered]);

  const handleNavigate = (id: string) => {
    playSubtleClick();
    scrollTo(id, -56, true);
    if (onItemClick) {
      onItemClick();
    }
  };

  const navTree = [
    {
      groupTitle: "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      items: [
        {
          id: "dan-chu",
          code: "4.2.1",
          title: "Nhà nước dân chủ",
          icon: Users,
        },
        {
          id: "phap-quyen",
          code: "4.2.2",
          title: "Nhà nước pháp quyền",
          icon: Scale,
        },
        {
          id: "trong-sach-vung-manh",
          code: "4.2.3",
          title: "Nhà nước trong sạch, vững mạnh",
          icon: ShieldCheck,
        },
      ],
    },
    {
      groupTitle: "4.3. Vận dụng tư tưởng Hồ Chí Minh",
      items: [
        {
          id: "xay-dung-dang",
          code: "4.3.1",
          title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
          icon: Flag,
        },
        {
          id: "xay-dung-nha-nuoc",
          code: "4.3.2",
          title: "Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo",
          icon: Landmark,
        },
        {
          id: "phong-chong-tham-nhung",
          code: "4.3.3",
          title: "Phòng, chống tham nhũng, lãng phí, quan liêu",
          icon: ShieldAlert,
        },
      ],
    },
  ];

  return (
    <>
      {/* Vùng kích hoạt mở Sidebar khi chuột di vào mép trái (Hover Trigger Zone) */}
      <div
        ref={triggerRef}
        data-testid="left-hover-trigger"
        onMouseEnter={() => setIsHovered(true)}
        onPointerEnter={() => setIsHovered(true)}
        className="fixed inset-y-0 left-0 w-3.5 sm:w-4.5 z-40 cursor-pointer pointer-events-auto hover:bg-[#d4af37]/20 transition-colors"
        title="Rê chuột để mở mục lục chương trình học"
        aria-hidden="true"
      />

      {/* Nút chỉ báo mỏng nhẹ sát mép trái giúp người dùng nhận biết có thể mở Sidebar */}
      {!isHovered && (
        <div
          onClick={() => setIsHovered(true)}
          onMouseEnter={() => setIsHovered(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center py-3.5 px-1 rounded-r-md bg-[#5c1313]/90 text-[#ffd700] border-y border-r border-[#d4af37]/50 shadow-md cursor-pointer hover:bg-[#7a1818] hover:px-1.5 transition-all select-none"
          title="Mở mục lục chương 4"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-serif font-black">★</span>
            <div className="w-2.5 h-[1px] bg-[#ffd700]/50" />
            <span className="text-[9px] font-mono font-bold writing-mode-vertical">
              MỤC LỤC
            </span>
          </div>
        </div>
      )}

      {/* Backdrop mờ khi Sidebar mở để người dùng bấm ra ngoài là đóng ngay */}
      {isHovered && (
        <div
          onClick={() => setIsHovered(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar dạng Floating Drawer Overlay chỉ trượt ra khi hover */}
      <aside
        ref={asideRef}
        id="academic-app-sidebar"
        aria-label="Thanh điều hướng học thuật"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed inset-y-0 left-0 z-50 flex flex-col justify-between overflow-x-hidden select-none bg-gradient-to-b from-[#5c1313] via-[#4a0e0e] to-[#340808] text-paper-light border-r border-[#782323] transition-transform duration-300 ease-in-out custom-scrollbar w-64 sm:w-72 shadow-[12px_0_40px_rgba(0,0,0,0.85)] ${
          isHovered
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none"
        } ${className}`}
      >
        <div
          ref={panelRef}
          id="editorial-toc-drawer"
          onMouseLeave={() => setIsHovered(false)}
          className="w-full h-full flex flex-col justify-between overflow-y-auto custom-scrollbar"
        >
          {/* Header Chân dung Bác & Thương hiệu */}
          <div className="px-3.5 py-3 border-b border-[#732121]/60 bg-[#420c0c]/50 text-center relative z-10 flex-shrink-0">
            <div className="flex justify-center mb-1.5">
              <div className="relative p-0.5 rounded-full bg-gradient-to-b from-[#d4af37]/30 to-transparent shadow-inner">
                <HoChiMinhEmblem className="w-12 h-12 drop-shadow-sm" />
              </div>
            </div>
            <h1 className="font-serif text-xs font-bold tracking-wider text-[#f5e6b8] uppercase leading-tight drop-shadow-xs">
              TƯ TƯỞNG HỒ CHÍ MINH
            </h1>
            <p className="font-serif italic text-[10px] text-[#e8d29b]/80 mt-0.5 leading-snug">
              Giá trị dẫn đường cho tương lai
            </p>
          </div>

          {/* Menu Điều Hướng Chi Tiết Cây Cấu Trúc */}
          <div className="flex-1 px-2.5 py-2.5 space-y-2.5 overflow-y-auto text-xs relative z-10 custom-scrollbar">
            {/* Quick Links */}
            <div className="space-y-0.5">
              <button
                onClick={() => handleNavigate("hero")}
                className={`w-full min-h-[34px] flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-colors font-sans ${
                  activeSection === "hero"
                    ? "bg-[#f5e6b8] text-[#4a0808] font-bold shadow-xs border border-[#d4af37]"
                    : "text-[#e8dac3] hover:bg-[#2a0505] hover:text-[#ffd700]"
                }`}
              >
                <Home className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium text-[11.5px]">Trang chủ</span>
              </button>

              <button
                onClick={() => handleNavigate("hero")}
                className="w-full min-h-[34px] flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left text-[#e8dac3] hover:bg-[#2a0505] hover:text-[#ffd700] transition-colors font-sans"
              >
                <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium text-[11.5px]">Giới thiệu môn học</span>
              </button>
            </div>

            {/* Cụm Chương 4 */}
            <div className="pt-2 border-t border-[#6b1d1d]/60">
              <div className="flex items-start gap-1.5 px-1 py-0.5 text-[#f3dfa7] font-serif font-bold text-[11px] uppercase tracking-wide">
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-[#d4af37] flex-shrink-0" />
                <span className="leading-snug">
                  Chương 4: Đảng & Nhà nước
                </span>
              </div>

              <div className="mt-1.5 ml-1 pl-1.5 border-l border-[#782323] space-y-3">
                {navTree.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1">
                    <div className="text-[10px] font-sans font-semibold text-[#e0c99a] px-1 leading-snug line-clamp-2">
                      {group.groupTitle}
                    </div>

                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const isActive = activeSection === item.id;
                        const ItemIcon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`w-full min-h-[30px] flex items-center justify-between gap-1.5 px-2 py-1 rounded-md text-left transition-all ${
                              isActive
                                ? "bg-[#f5e6b8] text-[#4a0808] font-bold shadow-xs border border-[#d4af37]"
                                : "text-[#e8dac3] hover:bg-[#2a0505] hover:text-[#ffd700] font-medium"
                            }`}
                            title={`${item.code} ${item.title}`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              {isActive ? (
                                <Target className="w-3 h-3 text-[#8b1e1e] flex-shrink-0 animate-pulse" />
                              ) : (
                                <ItemIcon className="w-3 h-3 text-[#d4af37]/70 flex-shrink-0" />
                              )}
                              <span className="truncate text-[11px]">
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
                <div className="pt-0.5">
                  <button
                    onClick={() => handleNavigate("ket-luan")}
                    className={`w-full min-h-[32px] flex items-center gap-1.5 px-2 py-1 rounded-md text-left transition-all ${
                      activeSection === "ket-luan"
                        ? "bg-[#f5e6b8] text-[#4a0808] font-bold shadow-xs border border-[#d4af37]"
                        : "text-[#e8dac3] hover:bg-[#2a0505] hover:text-[#ffd700] font-medium"
                    }`}
                  >
                    <Award className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                    <span className="truncate text-[11px]">5.0 Kết luận & Nguồn tư liệu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Chân Trang Trích Dẫn Thơ Bác & Hoa Sen */}
          <div className="px-3 py-2 border-t border-[#732121]/60 bg-[#350707]/70 relative overflow-hidden z-10 flex-shrink-0">
            <div className="relative z-10">
              <blockquote className="font-serif italic text-[10px] leading-snug text-[#f3e5c0] text-center">
                “Dân ta phải biết sử ta
                <br />
                Cho tường gốc tích nước nhà Việt Nam”
              </blockquote>
              <p className="text-right text-[9px] font-serif text-[#d4af37] font-semibold mt-0.5 mr-1">
                — Hồ Chí Minh —
              </p>
            </div>

            {/* Họa tiết hoa sen chìm góc chân trang */}
            <div className="absolute -bottom-3 -right-3 pointer-events-none text-[#d4af37]">
              <LotusWatermark className="w-16 h-16 opacity-10" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
