"use client";

import React, { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  FileEdit,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { getAssetPath } from "@/lib/assets";
import { playSubtleClick } from "@/lib/sound-effects";

interface AppSidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export default function AppSidebar({ onItemClick, className = "" }: AppSidebarProps) {
  const { activeSection, scrollTo, isTOCDrawerOpen, setIsTOCDrawerOpen } = useSmoothScroll();
  // Toast thông báo tương tác nhanh gọn, không chiếm dụng màn hình
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleNavigate = (id: string) => {
    playSubtleClick();
    scrollTo(id, -56, true);
    if (onItemClick) {
      onItemClick();
    }
  };

  // Tính phần trăm tiến độ học tập
  const allSectionIds = [
    "hero",
    "dan-chu",
    "phap-quyen",
    "trong-sach-vung-manh",
    "xay-dung-dang",
    "xay-dung-nha-nuoc",
    "phong-chong-tham-nhung",
    "ket-luan",
  ];
  const currentStepIdx = allSectionIds.indexOf(activeSection);
  const currentStep = currentStepIdx >= 0 ? currentStepIdx + 1 : 1;
  const progressPercent = Math.round((currentStep / allSectionIds.length) * 100);

  const isHomeActive = activeSection === "hero";
  const isChapterActive = activeSection !== "hero";

  return (
    <>
      {/* NÚT MỞ NHANH KHI SIDEBAR ĐANG BỊ ẨN HOÀN TOÀN */}
      {!isTOCDrawerOpen && (
        <button
          type="button"
          onClick={() => {
            playSubtleClick();
            setIsTOCDrawerOpen(true);
          }}
          title="Mở thanh điều hướng mục lục"
          aria-label="Mở thanh điều hướng"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#7a1818] hover:bg-[#8f1e1e] text-[#ffd700] border-r-2 border-y-2 border-[#d4af37] px-2 py-3 rounded-r-xl shadow-lg flex flex-col items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest writing-mode-vertical uppercase">
            MỤC LỤC
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#ffd700]" />
        </button>
      )}

      {/* 1. KHỐI SIDEBAR THU GỌN 152px THEO ĐÚNG 100% HÌNH MẪU CỦA NGƯỜI DÙNG */}
      <aside
        id="hcm-heritage-sidebar"
        data-testid="academic-app-sidebar"
        aria-label="Thanh điều hướng di sản"
        className={`fixed top-0 bottom-0 left-0 z-40 w-[152px] select-none transition-transform duration-300 ease-out flex flex-col justify-start overflow-hidden bg-[#f9f5ec] rounded-tr-3xl rounded-br-3xl shadow-[5px_0_30px_rgba(0,0,0,0.22)] border-r border-[#d4af37]/35 ${
          isTOCDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } ${className}`}
      >
        {/* NÚT THU GỌN GẮN Ở MÉP PHẢI SIDEBAR */}
        <button
          type="button"
          onClick={() => {
            playSubtleClick();
            setIsTOCDrawerOpen(false);
          }}
          title="Thu gọn thanh điều hướng sang trái"
          aria-label="Thu gọn thanh điều hướng"
          className="absolute right-1 top-2 z-30 w-5 h-5 rounded-full bg-[#4a0d0d]/80 hover:bg-[#7a1818] text-[#ffd700] flex items-center justify-center cursor-pointer transition-colors shadow-xs"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* 1. HEADER CỘT ĐỎ VỚI HÌNH BÁC HỒ & TƯ TƯỞNG HỒ CHÍ MINH (THEO CHUẨN MẪU) */}
        <div
          onClick={() => handleNavigate("hero")}
          title="Bấm để về đầu trang: Tư tưởng Hồ Chí Minh"
          className="relative w-full h-[150px] cursor-pointer flex-shrink-0 group overflow-hidden"
        >
          <img
            src={getAssetPath("/images/sidebar-top-2x.png")}
            alt="Tư tưởng Hồ Chí Minh"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
          />
        </div>

        {/* 2. MENU ĐIỀU HƯỚNG CHÍNH & MỤC LỤC BÀI HỌC (THEO ĐÚNG MOCKUP) */}
        <div className="flex-shrink-0 flex flex-col px-1.5 pt-1 pb-0 space-y-0.5">
          {/* Mục: Trang chủ */}
          <button
            type="button"
            onClick={() => handleNavigate("hero")}
            className={`relative w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left transition-all cursor-pointer ${
              isHomeActive
                ? "bg-[#eddcc6] text-[#5c1313] font-bold shadow-2xs"
                : "text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium"
            }`}
          >
            {/* Thanh vạch đỏ mép trái khi Active */}
            {isHomeActive && (
              <span className="absolute left-0 top-1 bottom-1 w-1 rounded-r bg-[#7a1818]" />
            )}
            <Home className={`w-3.5 h-3.5 flex-shrink-0 ${isHomeActive ? "text-[#7a1818]" : "text-[#5c3a28]"}`} />
            <span className="text-[11px] truncate">Trang chủ</span>
          </button>

          {/* Mục: Chương học (Bấm để cuộn mượt ngay đến bài học Chương 4) */}
          <button
            type="button"
            onClick={() => handleNavigate("dan-chu")}
            className={`relative w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left transition-all cursor-pointer ${
              isChapterActive
                ? "bg-[#eddcc6] text-[#5c1313] font-bold shadow-2xs"
                : "text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium"
            }`}
          >
            {isChapterActive && (
              <span className="absolute left-0 top-1 bottom-1 w-1 rounded-r bg-[#7a1818]" />
            )}
            <BookOpen className={`w-3.5 h-3.5 flex-shrink-0 ${isChapterActive ? "text-[#7a1818]" : "text-[#5c3a28]"}`} />
            <span className="text-[11px] truncate">Chương học</span>
          </button>

          {/* Mục: Tài liệu */}
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              window.dispatchEvent(new CustomEvent("toggle-study-notebook"));
            }}
            className="w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#5c3a28] flex-shrink-0" />
            <span className="text-[11px] truncate">Tài liệu</span>
          </button>

          {/* Mục: Kiểm tra */}
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              handleNavigate("ket-luan");
              showToast("Đã chuyển đến phần Ôn tập & Trắc nghiệm kiến thức!");
            }}
            className="w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium transition-all cursor-pointer"
          >
            <FileEdit className="w-3.5 h-3.5 text-[#5c3a28] flex-shrink-0" />
            <span className="text-[11px] truncate">Kiểm tra</span>
          </button>

          {/* Mục: Tiến độ học tập */}
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              showToast(`Tiến độ nghiên cứu Chương 4: ${progressPercent}% (${currentStep}/8 phần)`);
            }}
            className="w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium transition-all cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#5c3a28] flex-shrink-0" />
            <span className="text-[11px] truncate">Tiến độ ({progressPercent}%)</span>
          </button>

          {/* Mục: Cài đặt */}
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              showToast("Âm thanh hiệu ứng đã được tắt theo yêu cầu.");
            }}
            className="w-full h-[29px] px-2 rounded-lg flex items-center gap-2 text-left text-[#4a3225] hover:bg-[#ede5d5] hover:text-[#7a1818] font-medium transition-all cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5 text-[#5c3a28] flex-shrink-0" />
            <span className="text-[11px] truncate">Cài đặt</span>
          </button>

          {/* DẢI TIÊU ĐỀ: MỤC LỤC */}
          <div className="pt-1.5 pb-0.5 px-2 flex items-center gap-2">
            <span className="font-serif font-bold text-[9px] uppercase tracking-wider text-[#6a1515]">
              MỤC LỤC
            </span>
            <div className="flex-1 h-[1px] bg-[#d5c3a6]" />
          </div>

          {/* STEPPER CÁC CHƯƠNG THEO MOCKUP */}
          <div className="relative pl-3.5 pr-1 py-0.5 space-y-1.5">
            {/* Đường gióng dọc nối các nút tròn */}
            <div className="absolute left-[20px] top-1.5 bottom-2 w-[1.5px] bg-[#c5a059]/70" />

            {/* Ch. 1: Hoàn thành */}
            <div
              onClick={() => showToast("Chương 1: Cơ sở, quá trình hình thành Tư tưởng Hồ Chí Minh")}
              className="relative flex items-center gap-2 cursor-pointer group"
              title="Chương 1"
            >
              <div className="w-3 h-3 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-2xs group-hover:scale-110 transition-transform">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="text-[10px] font-medium text-[#6b5847] group-hover:text-[#7a1818]">Ch. 1</span>
            </div>

            {/* Ch. 2: Hoàn thành */}
            <div
              onClick={() => showToast("Chương 2: Tư tưởng Hồ Chí Minh về độc lập dân tộc & CNXH")}
              className="relative flex items-center gap-2 cursor-pointer group"
              title="Chương 2"
            >
              <div className="w-3 h-3 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-2xs group-hover:scale-110 transition-transform">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="text-[10px] font-medium text-[#6b5847] group-hover:text-[#7a1818]">Ch. 2</span>
            </div>

            {/* Ch. 3: Hoàn thành */}
            <div
              onClick={() => showToast("Chương 3: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam")}
              className="relative flex items-center gap-2 cursor-pointer group"
              title="Chương 3"
            >
              <div className="w-3 h-3 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-2xs group-hover:scale-110 transition-transform">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="text-[10px] font-medium text-[#6b5847] group-hover:text-[#7a1818]">Ch. 3</span>
            </div>

            {/* Ch. 4: ĐANG HỌC (ACTIVE CHAPTER THEO CHUẨN TRANG WEB) */}
            <div
              onClick={() => handleNavigate("dan-chu")}
              className="relative flex items-center gap-2 cursor-pointer group"
              title="Chương 4: Nhà nước của dân, do dân, vì dân (Bấm để cuộn đến bài học)"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#7a1818] ring-3 ring-[#7a1818]/25 flex items-center justify-center flex-shrink-0 z-10 shadow-2xs group-hover:scale-110 transition-transform animate-pulse" />
              <span className="text-[10.5px] font-bold text-[#7a1818] group-hover:underline">Ch. 4</span>
              <span className="text-[8px] px-1 py-0.2 rounded bg-[#7a1818]/15 text-[#7a1818] font-bold font-mono">Đang học</span>
            </div>

            {/* Ch. 5: Chưa học */}
            <div
              onClick={() => showToast("Chương 5: Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc")}
              className="relative flex items-center gap-2 cursor-pointer group"
              title="Chương 5"
            >
              <div className="w-3 h-3 rounded-full border-2 border-[#b5a593] bg-[#f9f5ec] flex items-center justify-center flex-shrink-0 z-10 group-hover:border-[#7a1818] transition-colors" />
              <span className="text-[10px] font-medium text-[#7a6b58] group-hover:text-[#7a1818]">Ch. 5</span>
            </div>
          </div>
        </div>

        {/* 3. HOA SEN NGHỆ THUẬT & DẢI LỤA ĐỎ Ở ĐÁY: TỰ ĐỘNG LẤP ĐẦY CHIỀU DÀI DƯỚI STEPPER (KHÔNG KHOẢNG TRỐNG THỪA) */}
        <div className="relative w-full flex-1 min-h-[140px] pointer-events-none overflow-hidden mt-1">
          <img
            src={getAssetPath("/images/sidebar-bottom-2x.png")}
            alt="Hoa sen và trống đồng"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </aside>

      {/* TOAST THÔNG BÁO NHẸ NHÀNG, KHÔNG CHE KHUẤT NỘI DUNG */}
      {toastMessage && (
        <div className="fixed bottom-4 left-[165px] z-50 px-3 py-1.5 rounded-lg bg-[#330707] text-[#ffd700] border border-[#d4af37]/60 text-xs font-serif shadow-xl animate-in fade-in duration-200">
          {toastMessage}
        </div>
      )}
    </>
  );
}
