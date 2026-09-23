/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { getAssetPath } from "@/lib/assets";

export default function HeritageJuridicalPlate() {
  return (
    <EditorialReveal className="relative w-full my-10 rounded-lg bg-dark-surface/90 border border-accent/35 p-5 sm:p-8 shadow-sm text-paper-light overflow-hidden">
      {/* Traditional Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-accent/60 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-accent/60 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-accent/60 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-accent/60 pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-accent/25">
        <div className="space-y-2.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs text-accent-light uppercase tracking-widest font-bold">
              CẤU TRÚC PHÁP CHẾ DI SẢN
            </span>
            <span className="text-accent-dark/60">•</span>
            <span className="font-mono text-[10px] sm:text-xs text-paper-dark/70">
              YÊU SÁCH 1919 → HIẾN PHÁP 1946
            </span>
          </div>

          <div className="flex items-start sm:items-center gap-3">
            <div className="flex flex-col items-center justify-center py-1.5 px-1 bg-accent/25 text-accent-light rounded font-serif text-[10px] font-bold tracking-widest uppercase border border-accent/40 shadow-sm leading-tight flex-shrink-0">
              <span>KỶ</span>
              <span>CƯƠNG</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-accent-light tracking-tight">
              Tam Tầng Pháp Quyền Hồ Chí Minh
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-paper-dark/85 leading-relaxed">
            Sự kết hợp biện chứng giữa tính tối thượng của luật pháp phương Tây với tinh thần nhân nghĩa, khoan dung và tình người sâu sắc của văn hóa phương Đông.
          </p>
        </div>

        {/* Master Historic Verse Box */}
        <div className="max-w-md p-3.5 rounded bg-black/40 border border-accent/25">
          <blockquote className="font-serif italic text-xs sm:text-sm text-paper-light leading-relaxed">
            “Bảy xin hiến pháp ban hành,
            <br />
            Trăm điều phải có thần linh pháp quyền.”
          </blockquote>
          <div className="mt-1.5 text-right font-mono text-[11px] text-accent-light">
            — Nguyễn Ái Quốc (Việt Nam yêu cầu ca, 1919)
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
        {/* Tier 1 */}
        <div className="p-4 sm:p-5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-3.5">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-accent/15 pb-2">
              <span className="font-serif font-black text-2xl text-accent-light">
                I
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Nền tảng
              </span>
            </div>

            {/* Archival Historical Image */}
            <div className="relative overflow-hidden rounded border border-accent/25 bg-black/50">
              <img
                src={getAssetPath("/images/nha-nuoc-phap-quyen-hero.webp")}
                alt="Chính phủ lâm thời ra mắt Quốc hội khóa I năm 1946"
                className="w-full h-28 object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-mono text-white/90">
                Quốc hội khóa I ra mắt (2/3/1946)
              </span>
            </div>

            <h4 className="font-serif font-bold text-base text-paper-light">
              Nhà Nước Hợp Hiến & Hợp Pháp
            </h4>
            <p className="font-sans text-xs sm:text-[13px] text-paper-dark/85 leading-relaxed">
              Xây dựng nền tảng pháp lý vững chắc ngay từ những ngày đầu lập quốc thông qua Tổng tuyển cử ngày 6/1/1946 và Quốc hội khóa I thông qua Hiến pháp 1946.
            </p>
          </div>
          <ul className="space-y-1.5 pt-2.5 border-t border-accent/15 text-xs text-paper-dark/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Chính phủ do toàn dân trực tiếp bầu ra</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Không cho phép bất kỳ ai đứng ngoài pháp luật</span>
            </li>
          </ul>
        </div>

        {/* Tier 2 */}
        <div className="p-4 sm:p-5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-3.5">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-accent/15 pb-2">
              <span className="font-serif font-black text-2xl text-accent-light">
                II
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Thực thi
              </span>
            </div>

            <h4 className="font-serif font-bold text-base text-paper-light pt-2">
              Thượng Tôn Hiến Pháp & Pháp Luật
            </h4>
            <p className="font-sans text-xs sm:text-[13px] text-paper-dark/85 leading-relaxed">
              Đưa pháp luật vào đời sống thực tế; pháp luật giữ vai trò tối cao, điều chỉnh mọi quan hệ xã hội, bảo vệ công lý và lợi ích chính đáng của quần chúng.
            </p>
          </div>
          <ul className="space-y-1.5 pt-2.5 border-t border-accent/15 text-xs text-paper-dark/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Bảo đảm tính nghiêm minh, xử lý bình đẳng</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Cán bộ gương mẫu tuân thủ pháp luật</span>
            </li>
          </ul>
        </div>

        {/* Tier 3 */}
        <div className="p-4 sm:p-5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-3.5">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-accent/15 pb-2">
              <span className="font-serif font-black text-2xl text-accent-light">
                III
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Đỉnh cao nhân văn
              </span>
            </div>

            <h4 className="font-serif font-bold text-base text-paper-light pt-2">
              Pháp Quyền Nhân Nghĩa & Khoan Dung
            </h4>
            <p className="font-sans text-xs sm:text-[13px] text-paper-dark/85 leading-relaxed">
              Pháp luật vì con người, hướng thiện và khoan dung. Kết hợp chặt chẽ giữa tính nghiêm minh của luật định với tình người, đạo đức truyền thống dân tộc.
            </p>
          </div>
          <ul className="space-y-1.5 pt-2.5 border-t border-accent/15 text-xs text-paper-dark/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Trừng phạt để giáo dục và cảm hóa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-0.5">◆</span>
              <span>Tôn trọng tuyệt đối quyền con người</span>
            </li>
          </ul>
        </div>
      </div>
    </EditorialReveal>
  );
}
