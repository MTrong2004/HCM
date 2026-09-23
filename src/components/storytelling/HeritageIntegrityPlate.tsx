/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { getAssetPath } from "@/lib/assets";

export default function HeritageIntegrityPlate() {
  return (
    <EditorialReveal className="relative w-full my-1 rounded-lg bg-dark-surface/90 border border-accent/35 p-3 sm:p-4 shadow-2xs text-paper-light overflow-hidden">
      {/* Traditional Corner Accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-accent/60 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-accent/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-accent/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-accent/60 pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2.5 pb-2.5 border-b border-accent/25">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9.5px] sm:text-[10px] text-accent-light uppercase tracking-widest font-bold">
              ÁP GIẢI TƯ TƯỞNG • BÀI HỌC LỊCH SỬ
            </span>
            <span className="text-accent-dark/60">•</span>
            <span className="font-mono text-[9.5px] sm:text-[10px] text-paper-dark/70">
              VỤ ÁN ĐẠI HÌNH NĂM 1950
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center py-0.5 px-1.5 bg-red-950/70 text-red-200 rounded font-serif text-[9px] font-bold tracking-widest uppercase border border-red-800/60 shadow-2xs leading-tight flex-shrink-0">
              TRỪNG TRỊ
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-accent-light tracking-tight">
              Kỷ Cương Thép & Cuộc Chiến Chống &ldquo;Giặc Nội Xâm&rdquo;
            </h3>
          </div>
          <p className="font-sans text-[11px] sm:text-xs text-paper-dark/85 leading-snug line-clamp-2">
            Hồ Chí Minh khẳng định: Tham ô, lãng phí và bệnh quan liêu là thứ &ldquo;giặc nội xâm&rdquo; nguy hiểm không kém giặc ngoại xâm, làm ruỗng mục ý chí và phá vỡ niềm tin của quần chúng nhân dân.
          </p>
        </div>

        {/* Master Historical Principle */}
        <div className="max-w-md p-2 rounded bg-black/40 border border-accent/25 flex-shrink-0">
          <blockquote className="font-serif italic text-[10.5px] sm:text-[11px] text-paper-light leading-snug line-clamp-2">
            &ldquo;Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa...&rdquo;
          </blockquote>
          <div className="mt-1 text-right font-mono text-[9.5px] text-accent-light">
            — Hồ Chí Minh (Toàn tập, tập 15)
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2.5">
        {/* Column 1: Historical Case 1950 */}
        <div className="p-2.5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between border-b border-accent/15 pb-1">
              <span className="font-serif font-black text-lg text-accent-light">
                I
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-red-400">
                Án điểm 1950
              </span>
            </div>

            {/* Archival Historical Visual Frame */}
            <div className="relative overflow-hidden rounded border border-accent/25 bg-black/50">
              <img
                src={getAssetPath("/images/can-bo-phuc-vu-nhan-dan.webp")}
                alt="Chủ tịch Hồ Chí Minh làm việc cùng cán bộ, chiến sĩ tại chiến khu Việt Bắc"
                className="w-full h-20 object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-white/90">
                Chiến khu Việt Bắc (1950)
              </span>
            </div>

            <h4 className="font-serif font-bold text-xs sm:text-sm text-paper-light">
              Vụ Án Đại Hình Trần Dụ Châu (1950)
            </h4>
            <p className="font-sans text-[10.5px] sm:text-[11px] text-paper-dark/85 leading-snug">
              Cục trưởng Quân nhu biển thủ công quỹ trong kháng chiến. Bác Hồ kiên quyết bác đơn xin ân xá: &ldquo;Với một người mà phải bắn thì đau lòng thật, nhưng không bắn thì làm hại đến cả đoàn quân.&rdquo;
            </p>
          </div>
          <div className="text-[9.5px] font-mono text-paper-dark/60 pt-1 border-t border-accent/15">
            BÀI HỌC VỀ KỶ CƯƠNG THÉP • KHÔNG CÓ VÙNG CẤM
          </div>
        </div>

        {/* Column 2: The Three Internal Diseases */}
        <div className="p-2.5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between border-b border-accent/15 pb-1">
              <span className="font-serif font-black text-lg text-accent-light">
                II
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-accent">
                Nhận diện
              </span>
            </div>

            <h4 className="font-serif font-bold text-xs sm:text-sm text-paper-light">
              Nhận Diện Ba &ldquo;Căn Bệnh Nội Xâm&rdquo;
            </h4>
            <ul className="space-y-1 text-[10.5px] sm:text-[11px] font-sans text-paper-dark/85">
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">◆</span>
                <span>
                  <strong className="text-paper-light">Đặc quyền, đặc lợi:</strong> Tự coi mình là &ldquo;quan cách mạng&rdquo;.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">◆</span>
                <span>
                  <strong className="text-paper-light">Tham ô, lãng phí:</strong> Trộm cắp của công, phung phí mồ hôi nước mắt của đồng bào.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">◆</span>
                <span>
                  <strong className="text-paper-light">Tư túng, chia rẽ:</strong> Kéo bè kéo cánh, đưa người thân quen bất tài vào nắm quyền.
                </span>
              </li>
            </ul>
          </div>
          <div className="text-[9.5px] font-mono text-paper-dark/60 pt-1 border-t border-accent/15">
            GIẢNG GIẢI TRONG TÁC PHẨM • SỬA ĐỔI LỐI LÀM VIỆC (1947)
          </div>
        </div>

        {/* Column 3: Multi-tier Oversight Mechanism */}
        <div className="p-2.5 rounded border border-accent/25 bg-black/30 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between border-b border-accent/15 pb-1">
              <span className="font-serif font-black text-lg text-accent-light">
                III
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-accent">
                Cơ chế
              </span>
            </div>

            <h4 className="font-serif font-bold text-xs sm:text-sm text-paper-light">
              Cơ Chế Kiểm Soát Quyền Lực Toàn Diện
            </h4>
            <div className="space-y-1 text-[10.5px] sm:text-[11px] font-sans text-paper-dark/85">
              <div className="p-1.5 rounded bg-black/40 border border-accent/15">
                <div className="font-bold text-accent-light text-[10px]">
                  Kiểm soát từ Trên xuống:
                </div>
                <div className="text-paper-dark/70">
                  Thanh tra, kiểm tra Đảng, xử lý kỷ luật nghiêm minh không vùng cấm.
                </div>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-accent/15">
                <div className="font-bold text-accent-light text-[10px]">
                  Kiểm soát Ngang:
                </div>
                <div className="text-paper-dark/70">
                  Phân công, phối hợp và chế ước lẫn nhau giữa các cơ quan quyền lực.
                </div>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-accent/15">
                <div className="font-bold text-accent-light text-[10px]">
                  Kiểm soát từ Dưới lên:
                </div>
                <div className="text-paper-dark/70">
                  Nhân dân giám sát, phê bình, thực thi quyền bãi miễn cán bộ hư hỏng.
                </div>
              </div>
            </div>
          </div>
          <div className="text-[9.5px] font-mono text-paper-dark/60 pt-1 border-t border-accent/15">
            DÂN BIẾT • DÂN BÀN • DÂN LÀM • DÂN KIỂM TRA
          </div>
        </div>
      </div>
    </EditorialReveal>
  );
}
