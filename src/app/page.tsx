"use client";

import React from "react";
import SectionNavigation from "@/components/shared/SectionNavigation";
import ReadingProgress from "@/components/shared/ReadingProgress";
import AppSidebar from "@/components/shared/AppSidebar";
import ChapterHeaderBanner from "@/components/shared/ChapterHeaderBanner";
import HeroStorySection from "@/components/storytelling/HeroStorySection";
import DanChuSection from "@/components/storytelling/DanChuSection";
import PhapQuyenSection from "@/components/storytelling/PhapQuyenSection";
import TrongSachVungManhSection from "@/components/storytelling/TrongSachVungManhSection";
import XayDungDangSection from "@/components/storytelling/XayDungDangSection";
import XayDungNhaNuocSection from "@/components/storytelling/XayDungNhaNuocSection";
import PhongChongThamNhungSection from "@/components/storytelling/PhongChongThamNhungSection";
import ConclusionSection from "@/components/storytelling/ConclusionSection";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";

export default function Home() {
  const { activeSection } = useSmoothScroll();

  return (
    <main className="relative min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden selection:bg-[#7a1818] selection:text-[#fbf8f0] bg-[#fbf9f4] flex flex-col">
      {/* Sidebar dạng Floating Overlay bên mép trái, chỉ mở khi hover chuột */}
      <AppSidebar />

      {/* Top Header Navigation & Sổ tay nghiên cứu */}
      <SectionNavigation />
      <ReadingProgress />

      {/* Vùng nội dung chính trải rộng 100% tự nhiên không bị sidebar chèn ép */}
      <div className="w-full min-w-0 flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Chapter 4 Hero Banner ở trên cùng chuyển đổi theo chủ đề */}
        <div className="w-full flex-shrink-0">
          <ChapterHeaderBanner />
        </div>

        {/* Khung nội dung Section: Trên desktop co giãn nằm gọn trong khung nhìn không cần cuộn trang */}
        <article className="w-full min-w-0 flex-1 min-h-0 flex flex-col overflow-y-auto lg:overflow-hidden pt-0 pb-0">
          {activeSection === "hero" && <HeroStorySection />}
          {activeSection === "dan-chu" && <DanChuSection />}
          {activeSection === "phap-quyen" && <PhapQuyenSection />}
          {activeSection === "trong-sach-vung-manh" && <TrongSachVungManhSection />}
          {activeSection === "xay-dung-dang" && <XayDungDangSection />}
          {activeSection === "xay-dung-nha-nuoc" && <XayDungNhaNuocSection />}
          {activeSection === "phong-chong-tham-nhung" && <PhongChongThamNhungSection />}
          {activeSection === "ket-luan" && <ConclusionSection />}
        </article>
      </div>
    </main>
  );
}
