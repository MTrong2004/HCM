"use client";

import React, { useState } from "react";
import StorySection from "@/components/shared/StorySection";
import PullQuote from "@/components/shared/PullQuote";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { ASSET_MANIFEST } from "@/content/asset-manifest";
import { BookOpen, Database, ChevronDown } from "lucide-react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function ConclusionSection() {
  const { conclusion } = PRESENTATION_CONTENT;
  const [showManifest, setShowManifest] = useState(false);
  const [showSources, setShowSources] = useState(true);

  const academicSources = [
    {
      title: "Hồ Chí Minh Toàn tập (15 tập)",
      publisher: "NXB Chính trị quốc gia Sự thật, Hà Nội",
      year: "2011",
      note: "Nguồn văn kiện gốc và các bài nói, bài viết của Chủ tịch Hồ Chí Minh.",
    },
    {
      title: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học không chuyên lý luận chính trị)",
      publisher: "Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật",
      year: "2021",
      note: "Khung chương trình chuẩn và hệ thống hóa các luận điểm cốt lõi.",
    },
    {
      title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946",
      publisher: "Quốc hội khóa I thông qua",
      year: "1946",
      note: "Bản Hiến pháp đầu tiên đặt nền móng cho Nhà nước dân chủ kiểu mới.",
    },
    {
      title: "Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam năm 2013",
      publisher: "Quốc hội khóa XIII thông qua",
      year: "2013",
      note: "Kế thừa và phát triển tư tưởng Hồ Chí Minh về quyền làm chủ của nhân dân.",
    },
    {
      title: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII",
      publisher: "Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật",
      year: "2021",
      note: "Định hướng tiếp tục hoàn thiện Nhà nước pháp quyền XHCN trong giai đoạn mới.",
    },
  ];

  return (
    <StorySection id="ket-luan" theme="light">
      <div className="space-y-12">
        {/* Header */}
        <EditorialReveal>
          <header className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold tracking-widest text-accent-dark uppercase">
              TỔNG KẾT & SUY NGẪM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
              {conclusion.title}
            </h2>
            {conclusion.subtitle && (
              <p className="font-serif text-lg sm:text-xl text-ink-muted italic">
                {conclusion.subtitle}
              </p>
            )}
            <div className="w-24 h-0.5 bg-accent/40 mx-auto mt-4" />
          </header>
        </EditorialReveal>

        {/* 5 Core Theses */}
        <EditorialReveal delay={80} className="space-y-3.5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
            Năm Luận Điểm Cốt Lõi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {conclusion.summaryBullets.map((point: string, idx: number) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-lg border border-accent/25 bg-paper-light/90 flex gap-3.5 items-start ${
                  idx === conclusion.summaryBullets.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <span className="font-serif font-bold text-2xl text-accent-dark leading-none pt-0.5">
                  0{idx + 1}
                </span>
                <p className="font-sans text-[15px] sm:text-base text-ink leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </EditorialReveal>

        {/* Final Quote */}
        {conclusion.finalQuote && (
          <PullQuote
            quote={conclusion.finalQuote.text}
            author={conclusion.finalQuote.author}
            context={conclusion.finalQuote.context}
            theme="light"
          />
        )}

        {/* Academic References / Bibliography */}
        <div className="border border-accent/30 rounded-lg p-5 sm:p-7 bg-paper-light/80 space-y-4">
          <button
            onClick={() => setShowSources(!showSources)}
            className="w-full flex items-center justify-between text-left group min-h-[44px]"
            aria-expanded={showSources}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="font-serif text-lg sm:text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                Tài Liệu Tham Khảo & Căn Cứ Học Thuật
              </h4>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-accent-dark">
              <span>{showSources ? "Thu gọn" : "Xem chi tiết"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showSources ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {showSources && (
            <div className="pt-3 border-t border-accent/20">
              <ul className="space-y-3.5 divide-y divide-accent/15">
                {academicSources.map((source, idx) => (
                  <li key={idx} className="pt-3 first:pt-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif font-bold text-accent-dark text-xs">
                        [{idx + 1}]
                      </span>
                      <div>
                        <span className="font-serif font-bold text-ink text-sm sm:text-base">
                          {source.title}
                        </span>
                        <div className="font-sans text-xs sm:text-sm text-ink-muted mt-0.5">
                          {source.publisher} ({source.year})
                        </div>
                        <div className="font-sans text-xs text-ink/75 italic mt-0.5">
                          {source.note}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Digital Asset Manifest */}
        <div className="border border-accent/25 rounded-lg p-5 bg-paper/60 space-y-3">
          <button
            onClick={() => setShowManifest(!showManifest)}
            className="w-full flex items-center justify-between text-left group min-h-[44px]"
            aria-expanded={showManifest}
          >
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-accent-dark" />
              <span className="font-mono text-xs font-bold text-accent-dark uppercase tracking-wider">
                Danh mục tư liệu số (Asset Manifest)
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-ink-muted">
              <span>{showManifest ? "Đóng" : "Mở bảng kiểm"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showManifest ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {showManifest && (
            <div className="pt-3 border-t border-accent/15">
              <div className="text-xs text-ink-muted mb-2 font-sans">
                Tổng cộng {ASSET_MANIFEST.length} tệp tư liệu được quản lý:
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-accent/30 text-accent-dark font-mono uppercase text-[11px]">
                      <th className="py-2 px-2.5">Tên File / ID</th>
                      <th className="py-2 px-2.5">Phần sử dụng</th>
                      <th className="py-2 px-2.5">Loại</th>
                      <th className="py-2 px-2.5">Tỷ lệ</th>
                      <th className="py-2 px-2.5">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/15">
                    {ASSET_MANIFEST.map((item) => (
                      <tr key={item.id} className="hover:bg-paper-dark/20">
                        <td className="py-2 px-2.5 font-mono text-primary">
                          {item.filename}
                        </td>
                        <td className="py-2 px-2.5 text-ink-muted">
                          {item.section}
                        </td>
                        <td className="py-2 px-2.5 font-mono text-accent-dark">
                          {item.type}
                        </td>
                        <td className="py-2 px-2.5 font-mono text-ink-muted">
                          {item.aspectRatio}
                        </td>
                        <td className="py-2 px-2.5">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                              item.status === "ready"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {item.status === "ready" ? "Sẵn sàng" : "Placeholder"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer Credit */}
        <footer className="text-center pt-8 border-t border-accent/25 text-xs text-ink-muted space-y-1">
          <p className="font-serif font-bold text-sm text-primary">
            CÔNG TRÌNH THUYẾT TRÌNH TƯ TƯỞNG HỒ CHÍ MINH
          </p>
          <p className="font-sans">
            Đề tài: Nhà nước của dân, do dân và vì dân • Chuyển thể định dạng Digital Magazine & Scroll Storytelling
          </p>
          <p className="font-mono text-[11px] text-accent-dark">
            Next.js 16 • GSAP ScrollTrigger • Lenis • Tailwind CSS
          </p>
        </footer>
      </div>
    </StorySection>
  );
}
