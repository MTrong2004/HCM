"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ArrowRight,
  Compass,
  Users,
  Scale,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { HeritageSeal } from "@/components/shared/HeritageIcons";
import CurriculumOverviewModal from "@/components/shared/CurriculumOverviewModal";

export default function HeroStorySection() {
  const { hero } = PRESENTATION_CONTENT;
  const { scrollTo } = useSmoothScroll();
  const [curriculumOpen, setCurriculumOpen] = useState(false);

  const handleStartChapter4 = () => {
    playSubtleClick();
    setCurriculumOpen(false);
    scrollTo("dan-chu");
  };

  const handleNavigate = (targetId: string) => {
    playSubtleClick();
    scrollTo(targetId);
  };

  // Giữ navigation CTA function theo kịch bản audit
  const scrollToPhapQuyen = () => handleNavigate("phap-quyen");
  void scrollToPhapQuyen;

  return (
    <>
      <section
        id="hero"
        data-section-id="hero"
        className="relative w-full flex-1 flex flex-col justify-between py-3 sm:py-4 px-3 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-[#e2d8c6] text-left"
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
          {/* ========================================================= */}
          {/* TIÊU ĐỀ DẪN NHẬP & PHÂN ĐỊNH CHỦ ĐỀ CHƯƠNG 4              */}
          {/* ========================================================= */}
          <EditorialReveal delay={0} className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/20 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#b58319]" />
                CHUYÊN ĐỀ TRỌNG TÂM • KỶ NIỆM 80 NĂM HIẾN PHÁP (1946 - 2026)
              </span>
              <span className="text-[11px] font-mono text-ink-muted">
                Giáo trình Bộ GD&ĐT
              </span>
            </div>

            <h2 className="font-serif font-black text-lg sm:text-2xl lg:text-[26px] text-[#6b1414] tracking-tight leading-snug">
              Chương IV: Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân
            </h2>
            <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed max-w-4xl">
              Hệ thống luận điểm cốt lõi về bản chất giai cấp công nhân, ba trụ cột hiến định và sứ mệnh phụng sự dân tộc của Nhà nước Việt Nam mới.
            </p>
          </EditorialReveal>

          {/* ========================================================= */}
          {/* LƯỚI NỘI DUNG CHÍNH: TRIẾT LÝ LẬP QUỐC & 3 CỬA NGÕ CHUYÊN ĐỀ */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
            {/* Cột trái: Tuyên ngôn khai phóng & Nút hành động dẫn dắt (6 cols trên LG) */}
            <EditorialReveal delay={80} className="lg:col-span-6 flex flex-col justify-between space-y-2.5">
              <div className="p-3.5 sm:p-4 bg-[#fbf8f0] border border-[#e5dac8] rounded-xl shadow-2xs space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#eee2cf]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                      <h3 className="font-serif font-bold text-xs sm:text-[14px] text-ink">
                        Triết lý Lập quốc: Lấy Dân làm Gốc
                      </h3>
                    </div>
                    <HeritageSeal text="DÂN VI BẢN" className="w-5 h-5 flex-shrink-0" />
                  </div>

                  <blockquote className="font-serif text-xs sm:text-[13px] text-ink italic leading-relaxed pt-2">
                    “{hero.quote}”
                  </blockquote>
                </div>

                <div className="pt-2 border-t border-[#eee2cf] flex items-center justify-between text-[11px]">
                  <span className="font-serif font-bold text-[#7a1818]">
                    — {hero.author} —
                  </span>
                  <span className="font-mono text-accent-dark text-[10.5px]">
                    {hero.sourceContext}
                  </span>
                </div>
              </div>

              {/* Nút hành động dẫn dắt học tập (Onboarding CTA) */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <button
                  type="button"
                  onClick={() => handleNavigate("dan-chu")}
                  className="min-h-[44px] inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#7a1818] text-[#fff8ea] font-sans font-bold text-xs sm:text-[13px] shadow-sm hover:bg-[#621313] hover:shadow transition-all cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 text-[#ffd700]" />
                  <span>Bắt đầu học: 4.2.1 Nhà nước dân chủ</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd700] transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSubtleClick();
                    setCurriculumOpen(true);
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#ede4d4] text-[#4a2e1b] font-sans font-semibold text-xs sm:text-[12.5px] border border-[#cfc3ad] hover:bg-[#e2d6c3] hover:text-[#7a1818] hover:border-[#bfae95] transition-all shadow-2xs cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#7a1818]" />
                  <span>Lộ trình & Đề cương Chương 4</span>
                </button>
              </div>
            </EditorialReveal>

            {/* Cột phải: 3 Cửa ngõ chuyên đề tương tác (6 cols trên LG) */}
            <EditorialReveal delay={160} className="lg:col-span-6 flex flex-col justify-between">
              <div className="p-3 sm:p-3.5 bg-[#f5ede1] border border-[#ded1be] rounded-xl shadow-2xs space-y-2 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#dfd3bf] pb-1.5">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[#7a1818] uppercase">
                      BA TRỤ CỘT HIẾN ĐỊNH • CỬA NGÕ CHUYÊN ĐỀ
                    </span>
                    <span className="font-serif text-xs font-bold text-[#6b1414]">
                      HIẾN PHÁP 1946
                    </span>
                  </div>

                  {/* 3 Gateway Cards tương tác trực tiếp tới các bài học */}
                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                    {/* Gateway Card 1: 4.2.1 Dân chủ */}
                    <div
                      onClick={() => handleNavigate("dan-chu")}
                      className="group p-2.5 bg-[#fdfcf9] hover:bg-[#fffdfa] border border-[#dfd3bf] hover:border-[#7a1818] rounded-lg transition-all duration-200 shadow-3xs hover:shadow-2xs cursor-pointer flex items-center justify-between gap-2.5"
                    >
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#7a1818]/10 text-[#7a1818] inline-flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#7a1818]" />
                            4.2.1
                          </span>
                          <h4 className="font-serif font-bold text-[13px] sm:text-sm text-ink group-hover:text-[#7a1818] transition-colors truncate">
                            I. Quyền lực thuộc về Nhân dân (Dân chủ)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[12.5px] text-ink/85 leading-normal">
                          Xác lập quyền bầu cử phổ thông đầu phiếu; quyền làm chủ tối cao thuộc về nhân dân.
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-[#7a1818] flex-shrink-0 group-hover:translate-x-0.5 transition-transform gap-0.5">
                        <span className="hidden sm:inline">Khám phá</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Gateway Card 2: 4.2.2 Pháp quyền */}
                    <div
                      onClick={() => handleNavigate("phap-quyen")}
                      className="group p-2.5 bg-[#fdfcf9] hover:bg-[#fffdfa] border border-[#dfd3bf] hover:border-[#7a1818] rounded-lg transition-all duration-200 shadow-3xs hover:shadow-2xs cursor-pointer flex items-center justify-between gap-2.5"
                    >
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#7a1818]/10 text-[#7a1818] inline-flex items-center gap-1">
                            <Scale className="w-3 h-3 text-[#7a1818]" />
                            4.2.2
                          </span>
                          <h4 className="font-serif font-bold text-[13px] sm:text-sm text-ink group-hover:text-[#7a1818] transition-colors truncate">
                            II. Pháp quyền & Độc lập Tư pháp
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[12.5px] text-ink/85 leading-normal">
                          Vận hành trên nền tảng Hiến pháp; bảo đảm pháp quyền nhân nghĩa và tòa án độc lập.
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-[#7a1818] flex-shrink-0 group-hover:translate-x-0.5 transition-transform gap-0.5">
                        <span className="hidden sm:inline">Khám phá</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Gateway Card 3: 4.2.3 Trong sạch vững mạnh */}
                    <div
                      onClick={() => handleNavigate("trong-sach-vung-manh")}
                      className="group p-2.5 bg-[#fdfcf9] hover:bg-[#fffdfa] border border-[#dfd3bf] hover:border-[#7a1818] rounded-lg transition-all duration-200 shadow-3xs hover:shadow-2xs cursor-pointer flex items-center justify-between gap-2.5"
                    >
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#7a1818]/10 text-[#7a1818] inline-flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#7a1818]" />
                            4.2.3
                          </span>
                          <h4 className="font-serif font-bold text-[13px] sm:text-sm text-ink group-hover:text-[#7a1818] transition-colors truncate">
                            III. Chính phủ Công bộc Liêm chính
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[12.5px] text-ink/85 leading-normal">
                          Kiểm soát quyền lực, phòng chống giặc nội xâm; cán bộ là người đầy tớ trung thành của dân.
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-[#7a1818] flex-shrink-0 group-hover:translate-x-0.5 transition-transform gap-0.5">
                        <span className="hidden sm:inline">Khám phá</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-[#dfd3bf] flex items-center justify-between text-[11px] font-mono text-accent-dark">
                  <span>BẢO VẬT QUỐC GIA • LƯU TRỮ QUỐC GIA III</span>
                  <span className="text-[#7a1818] font-sans font-medium">Bấm thẻ để vào nhanh bài học</span>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* ========================================================= */}
          {/* KHỐI DÒNG THỜI GIAN LẬP HIẾN LIÊN KẾT (HISTORICAL STEPPER) */}
          {/* ========================================================= */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs sm:text-[12.5px] font-mono font-bold text-[#7a1818] uppercase tracking-wider">
                TIỀN ĐỀ LỊCH SỬ DẪN NHẬP (1919 — 1946)
              </span>
              <span className="text-xs text-ink/80 font-sans hidden sm:inline">
                Hành trình 3 mốc lập hiến đặt nền móng cho tư tưởng Nhà nước dân chủ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5">
              <EditorialReveal delay={80}>
                <div className="p-2.5 sm:p-3 bg-white/90 border border-[#dfd3c0] rounded-lg shadow-2xs space-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] font-mono font-bold text-[#7a1818] uppercase tracking-wider">
                        MỐC 01 • NĂM 1919
                      </span>
                      <span className="text-xs text-[#6e5014] font-serif font-bold">Paris</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-ink">Yêu sách Vécxây</h4>
                    <p className="text-xs text-ink/85 leading-normal mt-0.5">
                      Nguyễn Ái Quốc gửi bản Yêu sách 8 điểm đòi cải cách pháp lý, xóa bỏ các tòa án đặc biệt và thực thi pháp quyền.
                    </p>
                  </div>
                </div>
              </EditorialReveal>

              <EditorialReveal delay={160}>
                <div className="p-2.5 sm:p-3 bg-white/90 border border-[#dfd3c0] rounded-lg shadow-2xs space-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] font-mono font-bold text-[#7a1818] uppercase tracking-wider">
                        MỐC 02 • NĂM 1945
                      </span>
                      <span className="text-xs text-[#6e5014] font-serif font-bold">Ba Đình</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-ink">Tuyên ngôn Độc lập</h4>
                    <p className="text-xs text-ink/85 leading-normal mt-0.5">
                      Khai sinh nước Việt Nam Dân chủ Cộng hòa, chấm dứt chính thể phong kiến - thực dân, xác lập quyền tự do dân chủ.
                    </p>
                  </div>
                </div>
              </EditorialReveal>

              <EditorialReveal delay={240}>
                <div
                  onClick={() => handleNavigate("dan-chu")}
                  className="p-2.5 sm:p-3 bg-[#fdfbf7] hover:bg-[#fff9ef] border border-[#d4af37]/70 hover:border-[#7a1818] rounded-lg shadow-2xs space-y-1.5 h-full flex flex-col justify-between transition-all cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] font-mono font-bold text-[#7a1818] uppercase tracking-wider">
                        MỐC 03 • NĂM 1946
                      </span>
                      <span className="text-xs text-[#7a1818] font-serif font-bold">Quốc hội Khóa I</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-ink group-hover:text-[#7a1818] transition-colors">
                      Hiến pháp Lập quốc
                    </h4>
                    <p className="text-xs text-ink/85 leading-normal mt-0.5">
                      Bản hiến pháp đầu tiên khẳng định chủ quyền tối cao thuộc về toàn thể nhân dân Việt Nam.
                    </p>
                  </div>
                  <div className="pt-1.5 border-t border-[#eee2cf] flex items-center justify-between text-xs font-bold text-[#7a1818]">
                    <span>Vào nội dung Chương 4</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </EditorialReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL ĐỀ CƯƠNG TOÀN DIỆN MÔN HỌC & CHƯƠNG 4 */}
      <CurriculumOverviewModal
        isOpen={curriculumOpen}
        onClose={() => setCurriculumOpen(false)}
        initialChapter={4}
        onStartChapter4={handleStartChapter4}
      />
    </>
  );
}
