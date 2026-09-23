/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Sparkles, Bookmark, ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";
import { playSubtleClick } from "@/lib/sound-effects";
import { getAssetPath } from "@/lib/assets";

export default function HeritageHeroComposition() {
  const { scrollTo } = useSmoothScroll();

  return (
    <div className="relative w-full max-w-[366px] sm:max-w-6xl sm:mx-auto rounded-2xl bg-gradient-to-b from-[#FAF6ED] via-[#F4EDE0] to-[#EAE0CD] border-2 border-accent/40 p-4 sm:p-10 md:p-14 shadow-2xl overflow-hidden text-left">
      {/* Antique Seal / Watermark Background Numerals */}
      <div
        className="absolute -top-10 right-0 sm:-right-6 select-none pointer-events-none font-serif font-black text-[100px] sm:text-[180px] md:text-[240px] text-accent/10 leading-none tracking-tighter overflow-hidden"
        aria-hidden="true"
      >
        1946
      </div>

      {/* Traditional Corner Accents (Fine Brass Line Art) */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60 pointer-events-none" />

      {/* Inner Decorative Framing Line */}
      <div className="absolute inset-2 border border-accent/20 rounded-xl pointer-events-none" />

      {/* Main Editorial Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Historical Focus & Master Quote (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-w-full">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] sm:text-xs font-bold tracking-normal sm:tracking-widest uppercase shadow-sm max-w-full text-wrap break-words">
              <Sparkles className="w-3.5 h-3.5 text-accent-dark flex-shrink-0" />
              ẤN PHẨM BIÊN TẬP DI SẢN
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent-dark font-mono text-[10px] sm:text-xs font-semibold tracking-normal sm:tracking-wider max-w-full text-wrap break-words">
              KỶ NIỆM 80 NĂM HIẾN PHÁP ĐẦU TIÊN
            </span>
          </div>

          {/* Master Headline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {/* Slender Vertical Seal Tag (Lạc khoản / Đề từ di sản) */}
              <div className="hidden sm:flex flex-col items-center justify-center py-2 px-1.5 bg-primary text-paper-light rounded font-serif text-[11px] font-bold tracking-widest uppercase border border-accent/50 shadow-sm leading-tight">
                <span>DÂN</span>
                <span>VI</span>
                <span>BẢN</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-[1.15] break-words">
                Bản Tuyên Ngôn Pháp Quyền Đầu Tiên
              </h2>
            </div>
            <p className="font-serif text-base sm:text-xl text-accent-dark italic font-normal break-words">
              Đặt nền móng Lập hiến Dân chủ & Pháp quyền Nhân nghĩa Việt Nam
            </p>
          </div>

          {/* Master Historic Quote Box */}
          <div className="relative pl-5 sm:pl-6 py-2 border-l-4 border-primary bg-paper-light/70 rounded-r-xl p-4 sm:p-5 border-t border-r border-b border-accent/25 shadow-sm">
            <span className="absolute -top-3 left-4 text-4xl font-serif text-accent leading-none select-none">
              “
            </span>
            <blockquote className="font-serif text-sm sm:text-lg text-ink font-medium leading-relaxed italic break-words">
              Nước Việt Nam là một nước Dân chủ Cộng hòa. Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam, không phân biệt nòi giống, gái trai, giàu nghèo, giai cấp, tôn giáo.
            </blockquote>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-1.5 text-xs sm:text-sm font-sans text-ink-muted">
              <span className="font-serif font-bold text-primary not-italic">
                — Điều 1, Hiến pháp nước Việt Nam Dân chủ Cộng hòa
              </span>
              <span className="font-mono text-accent-dark font-semibold">
                9/11/1946
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                playSubtleClick();
                scrollTo("dan-chu");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-paper-light font-serif font-bold text-sm shadow hover:bg-primary-dark transition-all border border-accent/40"
            >
              <span>Xem Phân Tích Chuyên Sâu</span>
              <ArrowUpRight className="w-4 h-4 text-accent-light" />
            </button>
            <button
              onClick={() => {
                playSubtleClick();
                scrollTo("phap-quyen");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper-light text-ink font-serif font-semibold text-sm border border-accent/40 hover:border-primary hover:bg-white transition-all shadow-sm"
            >
              <Bookmark className="w-4 h-4 text-accent-dark" />
              <span>Chương Pháp Quyền Nhân Nghĩa</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3 Constitutional Pillars Bento Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Archival Historic Photo of 1946 Constitution Document */}
          <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-black/40 shadow-sm group/photo">
            <img
              src={getAssetPath("/images/soan-thao-hien-phap-1946.webp")}
              alt="Bản gốc Hiến pháp năm 1946 lưu trữ quốc gia"
              className="w-full h-36 sm:h-44 object-cover object-center filter sepia-[0.08] contrast-[1.05] group-hover/photo:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-2.5 sm:left-3 sm:right-3 flex flex-wrap items-center justify-between gap-1 text-xs pointer-events-none">
              <span className="font-serif font-bold text-[11px] sm:text-xs text-accent-light drop-shadow">
                Bản gốc Hiến pháp 1946
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-white/90 bg-black/60 px-1.5 py-0.5 rounded border border-white/20">
                Lưu trữ Quốc gia III
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-paper-light/90 border border-accent/40 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-accent/20 pb-2">
              <span className="font-mono text-xs font-bold tracking-wider text-accent-dark uppercase">
                BA TRỤ CỘT HIẾN ĐỊNH
              </span>
              <span className="font-serif text-xs font-bold text-primary">
                KHOÁ I • NĂM 1946
              </span>
            </div>

            {/* Pillar 01 */}
            <div className="group flex items-start gap-3.5 p-3 rounded-lg border border-accent/20 bg-white/70 hover:border-accent hover:bg-white transition-all">
              <span className="font-serif text-2xl font-black text-accent-dark/80 group-hover:text-primary transition-colors leading-none pt-0.5">
                01
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm text-primary group-hover:text-primary-dark">
                  Chính thể Dân chủ Thuộc về Nhân dân
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mt-0.5">
                  Xác lập quyền bầu cử phổ thông đầu phiếu, quyền làm chủ tối cao, quyền bãi miễn đại biểu không xứng đáng.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="group flex items-start gap-3.5 p-3 rounded-lg border border-accent/20 bg-white/70 hover:border-accent hover:bg-white transition-all">
              <span className="font-serif text-2xl font-black text-accent-dark/80 group-hover:text-primary transition-colors leading-none pt-0.5">
                02
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm text-primary group-hover:text-primary-dark">
                  Thần linh Pháp quyền & Độc lập Tư pháp
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mt-0.5">
                  Bộ máy vận hành trên nền tảng Hiến pháp; Thẩm phán độc lập khi xét xử, chỉ tuân theo pháp luật (Điều 69).
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="group flex items-start gap-3.5 p-3 rounded-lg border border-accent/20 bg-white/70 hover:border-accent hover:bg-white transition-all">
              <span className="font-serif text-2xl font-black text-accent-dark/80 group-hover:text-primary transition-colors leading-none pt-0.5">
                03
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm text-primary group-hover:text-primary-dark">
                  Chính phủ Công bộc & Liêm chính Tuyệt đối
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mt-0.5">
                  Quan chức không phải là phụ mẫu chi dân mà là người đày tớ trung thành, tận tụy gánh việc chung cho dân tộc.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Historical Archival Annotation */}
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between text-xs font-mono text-ink-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              VĂN KIỆN LẬP HIẾN GỐC ĐƯỢC BẢO QUẢN
            </span>
            <span className="font-bold text-primary">LƯU TRỮ QUỐC GIA III</span>
          </div>
        </div>
      </div>
    </div>
  );
}