/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";

interface SectionBannerInfo {
  code: string;
  title: string;
  parentPath: string;
  image: string;
  quote: string;
  badge: string;
}

const SECTION_BANNER_MAP: Record<string, SectionBannerInfo> = {
  hero: {
    code: "0.0",
    title: "Mở đầu — Lập hiến & Dân chủ 1946",
    parentPath: "Kỷ niệm 80 năm Hiến pháp 1946",
    image: "/images/soan-thao-hien-phap-1946.webp",
    quote:
      "Nước Việt Nam là một nước dân chủ cộng hòa. Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam.",
    badge: "MỞ ĐẦU",
  },
  "dan-chu": {
    code: "4.2.1",
    title: "Nhà nước dân chủ",
    parentPath: "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
    image: "/images/nha-nuoc-dan-chu-hero.webp",
    quote:
      "Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân... Quyền hành và lực lượng đều ở nơi dân.",
    badge: "CHƯƠNG 4",
  },
  "phap-quyen": {
    code: "4.2.2",
    title: "Nhà nước pháp quyền",
    parentPath: "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
    image: "/images/nha-nuoc-phap-quyen-hero.webp",
    quote:
      "Hiến pháp phải phù hợp với nguyện vọng của nhân dân, vì nhân dân, và do nhân dân.",
    badge: "CHƯƠNG 4",
  },
  "trong-sach-vung-manh": {
    code: "4.2.3",
    title: "Nhà nước trong sạch, vững mạnh",
    parentPath: "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
    image: "/images/nha-nuoc-trong-sach-vung-manh-hero.webp",
    quote:
      "Muốn kiểm soát cho tốt, phải có hai điều: một là kiểm soát phải có hệ thống, hai là người đi kiểm soát phải là những người rất có uy tín.",
    badge: "CHƯƠNG 4",
  },
  "xay-dung-dang": {
    code: "4.3.1",
    title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
    parentPath: "4.3. Vận dụng tư tưởng Hồ Chí Minh",
    image: "/images/xay-dung-dang-hero.webp",
    quote:
      "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư.",
    badge: "CHƯƠNG 4",
  },
  "xay-dung-nha-nuoc": {
    code: "4.3.2",
    title: "Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo",
    parentPath: "4.3. Vận dụng tư tưởng Hồ Chí Minh",
    image: "/images/xay-dung-nha-nuoc-hero.webp",
    quote:
      "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.",
    badge: "CHƯƠNG 4",
  },
  "phong-chong-tham-nhung": {
    code: "4.3.3",
    title: "Phòng, chống tham nhũng, lãng phí, quan liêu",
    parentPath: "4.3. Vận dụng tư tưởng Hồ Chí Minh",
    image: "/images/can-bo-phuc-vu-nhan-dan.webp",
    quote:
      "Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ... là thứ 'giặc nội xâm'.",
    badge: "CHƯƠNG 4",
  },
  "ket-luan": {
    code: "5.0",
    title: "Tổng kết & Nguồn tư liệu lưu trữ",
    parentPath: "Di sản trường tồn của Chủ tịch Hồ Chí Minh",
    image: "/images/soan-thao-hien-phap-1946.webp",
    quote:
      "Dân ta phải biết sử ta, Cho tường gốc tích nước nhà Việt Nam.",
    badge: "TỔNG KẾT",
  },
};

interface ChapterHeaderBannerProps {
  currentSectionCode?: string;
  currentSectionTitle?: string;
  parentPath?: string;
}

export default function ChapterHeaderBanner({
  currentSectionCode,
  currentSectionTitle,
  parentPath,
}: ChapterHeaderBannerProps) {
  const { activeSection, scrollTo } = useSmoothScroll();

  const data = SECTION_BANNER_MAP[activeSection] || SECTION_BANNER_MAP["phap-quyen"];
  const displayCode = currentSectionCode || data.code;
  const displayTitle = currentSectionTitle || data.title;
  const displayParentPath = parentPath || data.parentPath;

  const handleNavClick = (targetId: string) => {
    playSubtleClick();
    scrollTo(targetId, -56, true);
  };

  return (
    <div className="relative w-full h-[125px] sm:h-[135px] lg:h-[142px] overflow-hidden bg-[#e8decb] text-paper-light border-b border-[#e2d7c5] shadow-xs select-none">
      {/* 1. HÌNH ẢNH NỀN BANNER NGHỆ THUẬT (CỜ ĐỎ SAO VÀNG + BÁC HỒ + TÒA NHÀ QUỐC HỘI) */}
      <img
        src={getAssetPath("/images/chapter-banner-bg.png")}
        alt="Tư tưởng Hồ Chí Minh về Đảng và Nhà nước của dân, do dân, vì dân"
        className="w-full h-full object-cover object-center absolute inset-0 pointer-events-none select-none z-0"
      />

      {/* 2. LỚP NỘI DUNG CHỮ TRÊN BANNER */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pt-2 sm:pt-2.5 flex flex-col justify-between h-full pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start">
          {/* Cụm thông tin chương bên trái (Nằm trên nền cờ đỏ) */}
          <div className="md:col-span-5 lg:col-span-5 space-y-0.5 pointer-events-auto">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#fdf9f0] text-[#5c0d0d] font-mono font-bold text-[9.5px] rounded shadow-xs uppercase tracking-wider border border-[#d4af37]/50">
              {data.badge}
            </div>
            <h1 className="font-serif text-sm sm:text-base lg:text-lg font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              TƯ TƯỞNG HỒ CHÍ MINH
            </h1>
            <p className="font-sans text-[9.5px] sm:text-[10px] font-bold text-[#fff7e6] tracking-wide uppercase leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-md">
              VỀ ĐẢNG CỘNG SẢN VIỆT NAM VÀ NHÀ NƯỚC CỦA DÂN, DO DÂN VÀ VÌ DÂN
            </p>
          </div>

          {/* Khoảng trống trung tâm để lộ rõ hình Bác Hồ làm việc */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3" />

          {/* Khối trích dẫn danh ngôn Bác ở khoảng sáng trước Tòa nhà Quốc hội */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-end text-right pt-0.5 pointer-events-auto">
            <div
              key={activeSection}
              className="max-w-[270px] sm:max-w-[320px] text-right animate-in fade-in duration-300"
            >
              <blockquote className="font-serif italic text-[11px] sm:text-[11.5px] lg:text-[12px] text-[#5e1212] leading-snug font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] line-clamp-2">
                “{data.quote}”
              </blockquote>
              <div className="font-serif font-bold text-[10px] sm:text-[10.5px] text-[#7a1818] mt-0.5 tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
                ― Hồ Chí Minh ―
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ĐƯỜNG CONG ĐỒ HỌA CHUYỂN TIẾP CHÂN BANNER & BREADCRUMB TAB (THEO CHUẨN MOCKUP) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto h-9 sm:h-10">
        {/* SVG Đường cong lượn mềm: Tab phẳng bên trái, chuyển bậc mềm, lượn dốc xuống bên phải theo mockup */}
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient id="goldCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#c5a059" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#d4af37" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e5c365" stopOpacity="0.9" />
            </linearGradient>
            <filter id="curveShadow" x="-5%" y="-10%" width="110%" height="130%">
              <feDropShadow dx="0" dy="-1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Vùng mảng nền màu kem #fbf9f4 ăn khớp hoàn hảo với nền trang */}
          <path
            d="M 0,18 
               L 660,18 
               C 695,18 725,28 760,28 
               L 1000,28 
               C 1065,28 1135,44 1200,60 
               L 1200,60 
               L 0,60 Z"
            fill="#fbf9f4"
            filter="url(#curveShadow)"
          />

          {/* Đường viền vàng đồng uốn lượn mềm mại dọc theo mép cong */}
          <path
            d="M 0,18 
               L 660,18 
               C 695,18 725,28 760,28 
               L 1000,28 
               C 1065,28 1135,44 1200,60"
            fill="none"
            stroke="url(#goldCurveStroke)"
            strokeWidth="1.75"
          />
        </svg>

        {/* Nội dung thanh Breadcrumb nằm lồng bên trong tab cong bên trái */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-4 sm:left-6 flex items-center gap-1.5 text-[11px] font-sans text-ink-muted max-w-[95%] overflow-hidden">
          <button
            onClick={() => handleNavClick("hero")}
            className="inline-flex items-center gap-1 text-[#6b1212] font-semibold hover:underline cursor-pointer focus:outline-none flex-shrink-0"
          >
            <Home className="w-3.5 h-3.5 text-[#8c1d1d]" />
            <span>Trang chủ</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#bba895] flex-shrink-0" />
          <button
            onClick={() => handleNavClick("dan-chu")}
            className="hover:text-ink cursor-pointer focus:outline-none flex-shrink-0 font-medium"
          >
            Chương 4
          </button>
          <ChevronRight className="w-3 h-3 text-[#bba895] flex-shrink-0" />
          <span className="hidden sm:inline hover:text-ink cursor-default truncate max-w-xs md:max-w-md lg:max-w-xl">
            {displayParentPath}
          </span>
          <span className="sm:hidden text-ink-muted">...</span>
          <ChevronRight className="w-3 h-3 text-[#bba895] flex-shrink-0" />
          <span className="text-[#7a1818] font-bold truncate">
            {displayCode} {displayTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
