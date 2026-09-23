/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

interface ChapterHeaderBannerProps {
  currentSectionCode?: string;
  currentSectionTitle?: string;
  parentPath?: string;
}

export default function ChapterHeaderBanner({
  currentSectionCode = "4.2.2",
  currentSectionTitle = "Nhà nước pháp quyền",
  parentPath = "4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
}: ChapterHeaderBannerProps) {
  return (
    <div className="relative w-full h-[155px] sm:h-[165px] overflow-hidden bg-gradient-to-r from-[#450707] via-[#611010] to-[#260404] text-paper-light border-b border-[#e2d7c5] shadow-xs select-none">
      {/* 1. NỀN CỜ ĐỎ SAO VÀNG VỚI NẾP GẤP VẢI LỤA TỰ NHIÊN (BÊN TRÁI) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Nếp lụa 3D gợn sóng mềm mại */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top_left,rgba(255,215,0,0.4)_0%,transparent_65%)]" />
        <div className="absolute -left-10 -top-10 w-60 h-60 bg-radial from-[#d4af37]/25 via-transparent to-transparent rounded-full blur-2xl" />
        {/* Ngôi sao vàng năm cánh tỏa sáng mờ ảo góc trên bên trái */}
        <div className="absolute top-1.5 left-5 text-[#ffd700]/30 text-5xl font-serif select-none pointer-events-none blur-[0.5px]">
          ★
        </div>
      </div>

      {/* 2. TÒA NHÀ QUỐC HỘI LỊCH SỬ KHÓA I (BÊN PHẢI) HÒA SẮC SEPIA CỔ ĐIỂN */}
      <div className="absolute inset-y-0 right-0 w-[46%] sm:w-[48%] lg:w-[50%] pointer-events-none overflow-hidden select-none z-0">
        <img
          src={getAssetPath("/images/nha-nuoc-phap-quyen-hero.webp")}
          alt="Tòa nhà Quốc hội khóa I lịch sử"
          className="w-full h-full object-cover object-top filter sepia-[0.25] contrast-[1.08] brightness-[0.88] opacity-75 [mask-image:linear-gradient(to_left,black_60%,transparent_100%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* 3. CHÂN DUNG BÁC HỒ LÀM VIỆC - CUTOUT SILHOUETTE CHÌM TỰ NHIÊN Ở TRUNG TÂM (KHÔNG ĐÓNG KHUNG HỘP CỨNG) */}
      <div className="absolute inset-y-0 left-[26%] sm:left-[30%] lg:left-[33%] w-[260px] sm:w-[300px] lg:w-[340px] pointer-events-none select-none z-10">
        <img
          src={getAssetPath("/images/soan-thao-hien-phap-1946.webp")}
          alt="Chủ tịch Hồ Chí Minh làm việc tại Bắc Bộ Phủ năm 1946"
          className="w-full h-full object-cover object-center filter sepia-[0.12] contrast-[1.12] brightness-[0.98] [mask-image:radial-gradient(ellipse_60%_75%_at_50%_45%,black_45%,transparent_90%)]"
        />
      </div>

      {/* 4. LỚP NỘI DUNG CHỮ TRÊN BANNER */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start">
          {/* Cụm thông tin chương bên trái */}
          <div className="md:col-span-6 lg:col-span-5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#fdf9f0] text-[#5c0d0d] font-mono font-bold text-[10px] rounded shadow-xs uppercase tracking-wider border border-[#d4af37]/50">
              CHƯƠNG 4
            </div>
            <h1 className="font-serif text-base sm:text-lg lg:text-xl font-black text-[#fff9ec] tracking-tight leading-tight uppercase drop-shadow-sm">
              TƯ TƯỞNG HỒ CHÍ MINH
            </h1>
            <p className="font-sans text-[10px] sm:text-[11px] font-bold text-[#f5dfa8] tracking-wide uppercase leading-snug drop-shadow-xs max-w-md">
              VỀ ĐẢNG CỘNG SẢN VIỆT NAM VÀ NHÀ NƯỚC CỦA DÂN, DO DÂN VÀ VÌ DÂN
            </p>
          </div>

          {/* Khoảng trống trung tâm cho chân dung Bác Hồ */}
          <div className="hidden md:block md:col-span-2" />

          {/* Khối trích dẫn góc trên bên phải (Tòa nhà Quốc hội) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-end text-right pt-0.5">
            <div className="max-w-[270px] sm:max-w-[310px] text-right">
              <blockquote className="font-serif italic text-xs sm:text-[12.5px] text-[#fff6e2] leading-snug drop-shadow-sm font-medium">
                “Hiến pháp phải phù hợp với nguyện vọng của nhân dân, vì nhân dân, và do nhân dân.”
              </blockquote>
              <div className="font-serif font-bold text-[10.5px] sm:text-[11px] text-[#e8c86b] mt-0.5 tracking-wide drop-shadow-xs">
                ― Hồ Chí Minh ―
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ĐƯỜNG CONG ĐỒ HỌA CHUYỂN TIẾP CHÂN BANNER (SIGNATURE SWEEPING CURVE & BREADCRUMB TAB) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto h-12 sm:h-14">
        {/* SVG Đường cong lượn mềm vát lên góc phải kèm viền vàng óng chuẩn xác 100% theo Designer_71 */}
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient id="goldCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c5a059" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e5c365" stopOpacity="0.95" />
            </linearGradient>
            <filter id="curveShadow" x="-5%" y="-10%" width="110%" height="130%">
              <feDropShadow dx="0" dy="-1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Vùng mảng nền màu kem #fbf9f4 ăn khớp hoàn hảo với nền trang */}
          <path
            d="M 0,22 
               L 520,22 
               C 548,22 568,34 595,44 
               C 630,53 740,56 840,51 
               C 940,43 1060,24 1200,6 
               L 1200,60 
               L 0,60 Z"
            fill="#fbf9f4"
            filter="url(#curveShadow)"
          />

          {/* Đường viền vàng đồng uốn lượn mềm mại dọc theo mép cong */}
          <path
            d="M 0,22 
               L 520,22 
               C 548,22 568,34 595,44 
               C 630,53 740,56 840,51 
               C 940,43 1060,24 1200,6"
            fill="none"
            stroke="url(#goldCurveStroke)"
            strokeWidth="1.75"
          />
        </svg>

        {/* Nội dung thanh Breadcrumb nằm lồng bên trong tab cong bên trái */}
        <div className="absolute bottom-1.5 left-4 sm:left-6 flex items-center gap-1.5 text-[11px] font-sans text-ink-muted">
          <span className="inline-flex items-center gap-1 text-[#6b1212] font-semibold hover:underline cursor-pointer">
            <Home className="w-3.5 h-3.5 text-[#8c1d1d]" />
            <span>Trang chủ</span>
          </span>
          <ChevronRight className="w-3 h-3 text-[#bba895]" />
          <span className="hover:text-ink cursor-pointer">Chương 4</span>
          <ChevronRight className="w-3 h-3 text-[#bba895]" />
          <span className="hidden sm:inline hover:text-ink cursor-pointer truncate max-w-[240px]">
            {parentPath}
          </span>
          <span className="sm:hidden text-ink-muted">...</span>
          <ChevronRight className="w-3 h-3 text-[#bba895]" />
          <span className="text-[#7a1818] font-bold">
            {currentSectionCode} {currentSectionTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
