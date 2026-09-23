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
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const { activeSection, isTOCDrawerOpen } = useSmoothScroll();
  const isReduced = useReducedMotion();

  return (
    <main className="relative min-h-screen selection:bg-[#7a1818] selection:text-[#fbf8f0] bg-[#fbf9f4] flex flex-col">
      {/* Lớp nền di sản toàn trang Designer 77 với hoa văn sen vàng và chất liệu giấy cổ */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/images/Designer_77_cf8575.png')" }}
      />

      {/* Sidebar dạng Floating Overlay bên mép trái */}
      <AppSidebar />

      {/* Top Header Navigation & Sổ tay nghiên cứu */}
      <SectionNavigation />
      <ReadingProgress />

      {/* Chapter 4 Hero Banner ở trên cùng chuyển đổi theo chủ đề: Tràn viền toàn trang để đồng bộ với góc bo của Sidebar */}
      <div className="w-full flex-shrink-0 sticky top-0 z-30">
        <ChapterHeaderBanner />
      </div>

      {/* Vùng nội dung chính: tự động cách lề trái bằng chiều rộng sidebar trên desktop để không bao giờ bị che khuất chữ */}
      <div
        className={`w-full min-w-0 flex flex-col flex-1 transition-[padding] duration-300 ease-in-out ${
          isTOCDrawerOpen ? "lg:pl-[152px]" : "pl-0"
        }`}
      >
        {/* Khung nội dung Section: Cho phép cuộn trang mượt mà tự nhiên */}
        <article className="w-full min-w-0 flex-1 flex flex-col pt-0 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: isReduced ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isReduced ? 0 : -8 }}
              transition={{ duration: isReduced ? 0.01 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-w-0 flex-1 flex flex-col"
            >
              {activeSection === "hero" && <HeroStorySection />}
              {activeSection === "dan-chu" && <DanChuSection />}
              {activeSection === "phap-quyen" && <PhapQuyenSection />}
              {activeSection === "trong-sach-vung-manh" && <TrongSachVungManhSection />}
              {activeSection === "xay-dung-dang" && <XayDungDangSection />}
              {activeSection === "xay-dung-nha-nuoc" && <XayDungNhaNuocSection />}
              {activeSection === "phong-chong-tham-nhung" && <PhongChongThamNhungSection />}
              {activeSection === "ket-luan" && <ConclusionSection />}
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </main>
  );
}
