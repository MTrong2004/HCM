import React from "react";
import SectionNavigation from "@/components/shared/SectionNavigation";
import ReadingProgress from "@/components/shared/ReadingProgress";
import AppSidebar from "@/components/shared/AppSidebar";
import HeroStorySection from "@/components/storytelling/HeroStorySection";
import DanChuSection from "@/components/storytelling/DanChuSection";
import PhapQuyenSection from "@/components/storytelling/PhapQuyenSection";
import TrongSachVungManhSection from "@/components/storytelling/TrongSachVungManhSection";
import XayDungDangSection from "@/components/storytelling/XayDungDangSection";
import XayDungNhaNuocSection from "@/components/storytelling/XayDungNhaNuocSection";
import PhongChongThamNhungSection from "@/components/storytelling/PhongChongThamNhungSection";
import ConclusionSection from "@/components/storytelling/ConclusionSection";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#7a1818] selection:text-[#fbf8f0] bg-[#fbf9f4]">
      {/* Permanent Academic Left Sidebar on Desktop (lg:flex) */}
      <AppSidebar />

      {/* Top Header Navigation & Mobile Drawer */}
      <SectionNavigation />
      <ReadingProgress />

      {/* Main Content Area offset by Sidebar on desktop */}
      <div className="lg:pl-80 w-full min-w-0 transition-all duration-300">
        <article className="w-full min-w-0 overflow-x-hidden">
          {/* Opening Hero */}
          <HeroStorySection />

          {/* 4.2.1. Nhà nước dân chủ */}
          <DanChuSection />

          {/* 4.2.2. Nhà nước pháp quyền */}
          <PhapQuyenSection />

          {/* 4.2.3. Nhà nước trong sạch, vững mạnh */}
          <TrongSachVungManhSection />

          {/* 4.3.1. Xây dựng Đảng thật sự trong sạch, vững mạnh */}
          <XayDungDangSection />

          {/* 4.3.2. Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo */}
          <XayDungNhaNuocSection />

          {/* 4.3.3. Phòng, chống tham nhũng */}
          <PhongChongThamNhungSection />

          {/* Kết luận & Danh mục tài liệu tham khảo */}
          <ConclusionSection />
        </article>
      </div>
    </main>
  );
}
