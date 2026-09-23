"use client";

import React from "react";
import SectionNavigation from "@/components/shared/SectionNavigation";
import ReadingProgress from "@/components/shared/ReadingProgress";
import AppSidebar from "@/components/shared/AppSidebar";
import ChapterHeaderBanner from "@/components/shared/ChapterHeaderBanner";
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
    <main className="relative min-h-screen selection:bg-[#7a1818] selection:text-[#fbf8f0] bg-[#fbf9f4]">
      {/* Permanent Academic Left Sidebar on Desktop */}
      <AppSidebar />

      {/* Top Header Navigation & Mobile Drawer */}
      <SectionNavigation />
      <ReadingProgress />

      {/* Main Content Area offset by Sidebar on desktop */}
      <div className="md:pl-60 lg:pl-64 w-full min-w-0 transition-all duration-300">
        <article className="w-full min-w-0 overflow-x-hidden pt-11 sm:pt-12 pb-6">
          {/* Chapter 4 Hero Banner ở trên cùng theo đúng Designer_71 */}
          <div className="w-full">
            <ChapterHeaderBanner />
          </div>

          {/* Render Active Section tương ứng theo kiến trúc Courseware/Digital Textbook */}
          {activeSection === "hero" && <PhapQuyenSection />}
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
