"use client";

import React from "react";
import { ChevronDown, BookOpen, ArrowUpRight } from "lucide-react";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";
import EditorialReveal from "@/components/shared/EditorialReveal";

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
      className="relative scroll-mt-20 pt-4 pb-10 px-3 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-[#e2d8c6] overflow-hidden text-left"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* ========================================================= */}
        {/* KHỐI LUẬN ĐIỂM BA TRỤ CỘT HIẾN ĐỊNH & HÀNH ĐỘNG           */}
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
                  <EditorialReveal delay={80} className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      I. Quyền lực thuộc về Nhân dân
                    </span>
                    <p className="text-ink-muted">
                      Xác lập quyền bầu cử phổ thông đầu phiếu; quyền làm chủ tối
                      cao thuộc về toàn thể nhân dân Việt Nam.
                    </p>
                  </EditorialReveal>

                  <EditorialReveal delay={160} className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      II. Pháp quyền & Độc lập Tư pháp
                    </span>
                    <p className="text-ink-muted">
                      Nhà nước vận hành trên nền tảng Hiến pháp; tòa án xét xử
                      độc lập, chỉ tuân theo pháp luật.
                    </p>
                  </EditorialReveal>

                  <EditorialReveal delay={240} className="py-2.5">
                    <span className="font-bold text-[#7a1818] block mb-0.5">
                      III. Chính phủ Công bộc Liêm chính
                    </span>
                    <p className="text-ink-muted">
                      Cán bộ là người đầy tớ trung thành của nhân dân; kiên quyết
                      chống giặc nội xâm, tham ô, lãng phí.
                    </p>
                  </EditorialReveal>
                </div>
              </div>

              <EditorialReveal delay={240} className="pt-2 border-t border-[#dfd3bf] text-[11px] font-mono text-accent-dark">
                BẢO VẬT QUỐC GIA • LƯU TRỮ QUỐC GIA III
              </EditorialReveal>
            </div>
          </EditorialReveal>
        </div>

        {/* Khối thẻ tóm lược 3 mốc lịch sử cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <EditorialReveal delay={80} className="p-4 bg-white/80 border border-[#dfd3c0] rounded-lg shadow-xs space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-[#7a1818] uppercase tracking-wider block">
              MỐC 01 • NĂM 1919
            </span>
            <h4 className="font-serif font-bold text-xs text-ink">Yêu sách Vécxây</h4>
            <p className="text-[11px] text-ink-muted leading-relaxed">
              Yêu sách của nhân dân An Nam đòi cải cách pháp lý và hủy bỏ tòa án đặc biệt.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={160} className="p-4 bg-white/80 border border-[#dfd3c0] rounded-lg shadow-xs space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-[#7a1818] uppercase tracking-wider block">
              MỐC 02 • NĂM 1945
            </span>
            <h4 className="font-serif font-bold text-xs text-ink">Tuyên ngôn Độc lập</h4>
            <p className="text-[11px] text-ink-muted leading-relaxed">
              Khai sinh nước Việt Nam Dân chủ Cộng hòa, thiết lập chính thể dân chủ đầu tiên.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={240} className="p-4 bg-white/80 border border-[#dfd3c0] rounded-lg shadow-xs space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-[#7a1818] uppercase tracking-wider block">
              MỐC 03 • NĂM 1946
            </span>
            <h4 className="font-serif font-bold text-xs text-ink">Hiến pháp Lập quốc</h4>
            <p className="text-[11px] text-ink-muted leading-relaxed">
              Bản hiến pháp đầu tiên khẳng định chủ quyền tối cao thuộc về toàn thể nhân dân.
            </p>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
}
