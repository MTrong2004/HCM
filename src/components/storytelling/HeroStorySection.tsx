/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ChevronDown, BookOpen, ArrowUpRight } from "lucide-react";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { getAssetPath } from "@/lib/assets";

export default function HeroStorySection() {
  const { hero } = PRESENTATION_CONTENT;
  const { scrollTo } = useSmoothScroll();

  const scrollToNext = () => {
    playSubtleClick();
    scrollTo("dan-chu");
  };

  const scrollToPhapQuyen = () => {
    playSubtleClick();
    scrollTo("phap-quyen");
  };

  return (
    <section
      id="hero"
      data-section-id="hero"
      className="relative min-h-[calc(100vh-3.5rem)] scroll-mt-20 pt-20 pb-10 px-3 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-[#fbf9f4] border-b border-[#e2d8c6] overflow-hidden text-left"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* ========================================================= */}
        {/* 1. HERO BANNER THEO ĐÚNG THIẾT KẾ MẪU (DESIGNER_71)      */}
        {/* ========================================================= */}
        <EditorialReveal delay={0}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7a1414] via-[#5c0e0e] to-[#360707] text-paper-light p-6 sm:p-8 lg:p-10 shadow-xl border border-[#912525]">
            {/* Ngôi sao vàng chìm góc banner */}
            <div
              className="absolute -right-10 -bottom-10 select-none pointer-events-none text-[#d4af37]/10 text-[240px] font-black leading-none"
              aria-hidden="true"
            >
              ★
            </div>

            <div className="relative z-10 space-y-4">
              {/* Badge Chương 4 */}
              <div className="inline-block px-3 py-1 bg-white text-[#7a1414] font-mono font-bold text-xs rounded-full shadow-xs uppercase tracking-wider">
                CHƯƠNG 4
              </div>

              {/* Tiêu đề chính Chương 4 */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#fff8ea] tracking-tight leading-[1.15] max-w-4xl uppercase drop-shadow-sm">
                TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG CỘNG SẢN VIỆT NAM VÀ NHÀ NƯỚC CỦA DÂN,
                DO DÂN VÀ VÌ DÂN
              </h1>

              {/* Ảnh tư liệu lịch sử lồng ghép phong cách di sản */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-3 items-center">
                {/* Ảnh Bác Hồ soạn thảo văn kiện */}
                <div className="md:col-span-4 relative rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-md">
                  <img
                    src={getAssetPath("/images/soan-thao-hien-phap-1946.webp")}
                    alt="Chủ tịch Hồ Chí Minh làm việc tại Bắc Bộ Phủ năm 1946"
                    className="w-full h-36 sm:h-44 object-cover filter sepia-[0.15] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-[10.5px] font-serif text-[#f3e5c0] leading-tight">
                    Chủ tịch Hồ Chí Minh soạn thảo Hiến pháp năm 1946
                  </div>
                </div>

                {/* Ảnh Quốc hội và Chính phủ liên hiệp đầu tiên */}
                <div className="md:col-span-4 relative rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-md">
                  <img
                    src={getAssetPath("/images/nha-nuoc-phap-quyen-hero.webp")}
                    alt="Quốc hội khóa I nước Việt Nam Dân chủ Cộng hòa"
                    className="w-full h-36 sm:h-44 object-cover filter sepia-[0.15] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-[10.5px] font-serif text-[#f3e5c0] leading-tight">
                    Quốc hội khóa I xác lập nền pháp quyền dân tộc
                  </div>
                </div>

                {/* Khung trích dẫn tuyên ngôn */}
                <div className="md:col-span-4 bg-black/35 backdrop-blur-xs border border-[#d4af37]/30 rounded-lg p-4 space-y-2 flex flex-col justify-between h-full">
                  <blockquote className="font-serif italic text-xs sm:text-sm text-[#f6ebd0] leading-relaxed">
                    “Hiến pháp phải phù hợp với nguyện vọng của nhân dân, vì
                    nhân dân, và do nhân dân.”
                  </blockquote>
                  <div className="text-right font-serif font-bold text-xs text-[#d4af37]">
                    — Hồ Chí Minh —
                  </div>
                </div>
              </div>
            </div>
          </div>
        </EditorialReveal>

        {/* ========================================================= */}
        {/* 2. KHỐI LUẬN ĐIỂM BA TRỤ CỘT HIẾN ĐỊNH & HÀNH ĐỘNG        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Cột trái: Tuyên ngôn khai phóng & Nút thao tác (7 cột) */}
          <EditorialReveal delay={80} className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="p-5 sm:p-6 bg-[#fbf8f0] border border-[#e5dac8] rounded-xl shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Triết lý Lập quốc: Lấy Dân làm Gốc
                </h3>
              </div>
              <blockquote className="font-serif text-sm sm:text-base text-ink italic leading-relaxed">
                “{hero.quote}”
              </blockquote>
              <div className="pt-2 border-t border-[#eee2cf] flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-[#7a1818]">
                  — {hero.author} —
                </span>
                <span className="font-mono text-accent-dark">
                  {hero.sourceContext}
                </span>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToNext}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7a1818] text-paper-light font-sans font-semibold text-xs sm:text-sm shadow-xs hover:bg-[#621313] transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <span>Khám phá: 4.2.1 Nhà nước dân chủ</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToPhapQuyen}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#ede4d4] text-ink font-sans font-semibold text-xs sm:text-sm border border-[#cfc3ad] hover:bg-[#e2d6c3] hover:text-[#7a1818] transition-colors shadow-xs"
              >
                <span>Xem: 4.2.2 Nhà nước pháp quyền</span>
                <ArrowUpRight className="w-4 h-4 text-[#7a1818]" />
              </button>
            </div>
          </EditorialReveal>

          {/* Cột phải: 3 Trụ cột Hiến định (5 cột) */}
          <EditorialReveal delay={160} className="lg:col-span-5">
            <div className="p-5 bg-[#f4ece0] border border-[#dfd3c0] rounded-xl shadow-xs space-y-3.5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#dfd3bf] pb-2">
                  <span className="font-mono text-[11px] font-bold tracking-widest text-[#7a1818] uppercase">
                    BA TRỤ CỘT HIẾN ĐỊNH
                  </span>
                  <span className="font-serif text-xs font-bold text-ink">
                    HIẾN PHÁP 1946
                  </span>
                </div>

                <div className="divide-y divide-[#dfd3bf] text-xs">
                  <div className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      I. Quyền lực thuộc về Nhân dân
                    </span>
                    <p className="text-ink-muted">
                      Xác lập quyền bầu cử phổ thông đầu phiếu; quyền làm chủ tối
                      cao thuộc về toàn thể nhân dân Việt Nam.
                    </p>
                  </div>

                  <div className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      II. Pháp quyền & Độc lập Tư pháp
                    </span>
                    <p className="text-ink-muted">
                      Nhà nước vận hành trên nền tảng Hiến pháp; tòa án xét xử
                      độc lập, chỉ tuân theo pháp luật.
                    </p>
                  </div>

                  <div className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      III. Chính phủ Công bộc Liêm chính
                    </span>
                    <p className="text-ink-muted">
                      Cán bộ là người đầy tớ trung thành của nhân dân; kiên quyết
                      chống giặc nội xâm, tham ô, lãng phí.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dfd3bf] text-[11px] font-mono text-accent-dark">
                BẢO VẬT QUỐC GIA • LƯU TRỮ QUỐC GIA III
              </div>
            </div>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
}
