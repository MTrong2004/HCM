/* eslint-disable @next/next/no-img-element */
"use client";

import { Home, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
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
    title: "Ứng dụng AI & Tổng kết",
    parentPath: "Di sản trường tồn của Chủ tịch Hồ Chí Minh",
    image: "/images/soan-thao-hien-phap-1946.webp",
    quote:
      "Dân ta phải biết sử ta, Cho tường gốc tích nước nhà Việt Nam.",
    badge: "ỨNG DỤNG AI",
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
  const { activeSection, scrollTo, isBannerCollapsed, toggleBannerCollapsed } = useSmoothScroll();

  const data = SECTION_BANNER_MAP[activeSection] || SECTION_BANNER_MAP["phap-quyen"];
  const displayCode = currentSectionCode || data.code;
  const displayTitle = currentSectionTitle || data.title;
  const displayParentPath = parentPath || data.parentPath;

  const handleNavClick = (targetId: string) => {
    playSubtleClick();
    scrollTo(targetId, -56, true);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#240404] text-paper-light border-b border-[#e2d7c5] shadow-xs select-none transition-[height] duration-300 ease-in-out ${
        isBannerCollapsed
          ? "h-[38px] sm:h-[42px]"
          : "h-[145px] sm:h-[160px] md:h-[175px] lg:h-[190px] xl:h-[200px]"
      }`}
    >
      {/* 1. HÌNH ẢNH NỀN BANNER NGHỆ THUẬT (ĐỒNG BỘ HOÀN HẢO VỚI BẢN VẼ GỐC DESIGNER 77) */}
      <img
        src={getAssetPath("/images/banner-designer-77.png")}
        alt="Tư tưởng Hồ Chí Minh về Đảng và Nhà nước của dân, do dân, vì dân"
        className={`w-full h-full object-cover object-center absolute inset-0 pointer-events-none select-none z-0 transition-all duration-300 ease-in-out ${
          isBannerCollapsed ? "opacity-15 blur-[0.5px] scale-105" : "opacity-100 scale-100"
        }`}
      />

      {/* Lớp phủ chuyển sắc di sản khi ở chế độ thu gọn */}
      <div
        className={`absolute inset-0 z-5 transition-opacity duration-300 pointer-events-none ${
          isBannerCollapsed
            ? "bg-gradient-to-r from-[#fcfbf7] via-[#f7f2e6]/95 to-[#fcfbf7] opacity-100"
            : "opacity-0"
        }`}
      />

      {/* 2. LỚP ĐƯỆM KHÔNG GIAN BANNER - Chữ và danh ngôn đã được tích hợp sẵn trong hình ảnh nghệ thuật */}
      <div className="relative z-10 w-full h-full pointer-events-none" />

      {/* 3. ĐƯỜNG CONG ĐỒ HỌA CHUYỂN TIẾP CHÂN BANNER (LỚP MẢNG NỀN TAB THEO MẪU IMAGE 911598) - ẨN KHI THU GỌN */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 pointer-events-none transition-opacity duration-300 ${
          isBannerCollapsed ? "opacity-0" : "opacity-100 h-11 sm:h-12"
        }`}
      >
        {/* SVG Đường cong lượn mềm: Mảng nền kem đầy đủ chiều cao bên trái, lượn sóng chữ S xuống thanh hạ thấp bên phải */}
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient id="goldCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
              <stop offset="35%" stopColor="#c5a059" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#d4af37" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e5c365" stopOpacity="0.85" />
            </linearGradient>
            <filter id="plaqueShadow" x="-2%" y="-30%" width="104%" height="160%">
              <feDropShadow dx="0" dy="-1.5" stdDeviation="2" floodColor="#000" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Lớp mảng nền màu kem #fbf9f4 theo phong cách thẻ tab uốn lượn cao cấp (image_911598) */}
          <path
            d="M 0,2 
               L 780,2 
               C 830,2 845,28 895,28 
               L 1200,28 
               L 1200,48 
               L 0,48 Z"
            fill="#fbf9f4"
            filter="url(#plaqueShadow)"
          />

          {/* Đường viền vàng ánh kim uốn lượn mềm mại trên đỉnh mảng nền */}
          <path
            d="M 0,2 
               L 780,2 
               C 830,2 845,28 895,28 
               L 1200,28"
            fill="none"
            stroke="url(#goldCurveStroke)"
            strokeWidth="1.75"
          />
        </svg>
      </div>

      {/* Đường viền vàng ánh kim siêu mảnh ở chân banner khi thu gọn */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#d4af37]/30 via-[#c5a059]/80 to-[#d4af37]/30 z-30 pointer-events-none transition-opacity duration-300 ${
          isBannerCollapsed ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 4. DẢI BREADCRUMB & NÚT ĐIỀU KHIỂN THU GỌN / MỞ RỘNG BANNER */}
      <div
        className={`absolute left-0 right-0 z-30 pointer-events-auto flex items-center justify-between px-3 sm:px-6 md:px-8 transition-all duration-300 ${
          isBannerCollapsed ? "inset-0 h-full" : "bottom-0 h-11 sm:h-12"
        }`}
      >
        {/* Nội dung thanh Breadcrumb theo chuẩn nhận diện di sản */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[12.5px] font-sans min-w-0 max-w-[calc(100%-120px)] sm:max-w-[72%] lg:max-w-[78%] overflow-hidden pt-0.5">
          <button
            onClick={() => handleNavClick("hero")}
            className="inline-flex items-center gap-1.5 text-[#7a1818] font-semibold hover:underline cursor-pointer focus:outline-none flex-shrink-0"
            aria-label="Về đầu trang"
          >
            <Home className="w-3.5 h-3.5 text-[#8c1d1d] flex-shrink-0" />
            <span className="hidden sm:inline">Trang chủ</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-[#a89785] flex-shrink-0" />
          
          <button
            onClick={() => handleNavClick("dan-chu")}
            className="text-[#2b2421] hover:text-[#7a1818] cursor-pointer focus:outline-none flex-shrink-0 font-medium transition-colors"
          >
            Chương 4
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-[#a89785] flex-shrink-0" />
          
          <span className="hidden md:inline text-[#2b2421]/90 cursor-default truncate max-w-xs lg:max-w-md xl:max-w-lg font-normal">
            {displayParentPath}
          </span>
          <span className="md:hidden text-ink-muted">...</span>
          
          <ChevronRight className="w-3.5 h-3.5 text-[#a89785] flex-shrink-0" />
          
          <span className="text-[#7a1818] font-bold truncate tracking-tight">
            {displayCode} {displayTitle}
          </span>
        </div>

        {/* Nhóm điều khiển: Thu gọn / mở rộng banner */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">

          {/* Nút bấm chuyển đổi thu gọn / mở rộng banner thủ công (Chế độ đọc tập trung) */}
          <button
            onClick={() => {
              playSubtleClick();
              toggleBannerCollapsed();
            }}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 rounded-md text-[11px] font-sans font-medium text-[#7a1818] bg-[#fbf9f4]/90 hover:bg-[#ede3d1] border border-[#d4af37]/50 shadow-2xs transition-all cursor-pointer flex-shrink-0 group"
            aria-label={isBannerCollapsed ? "Mở rộng ảnh bìa" : "Thu gọn ảnh bìa"}
          >
            {isBannerCollapsed ? (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-[#7a1818] transition-transform group-hover:translate-y-0.5" />
                <span className="hidden sm:inline">Mở ảnh bìa</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[#7a1818] transition-transform group-hover:-translate-y-0.5" />
                <span className="hidden sm:inline">Thu gọn ảnh</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
