"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { HeritageSeal } from "./HeritageIcons";
import { playSubtleClick } from "@/lib/sound-effects";
import { CANONICAL_SECTIONS } from "@/content/canonical-sections";

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  content: React.ReactNode;
}

export interface AcademicPortalSectionProps {
  id: string;
  code: string;
  title: string;
  parentPath: string;
  quote: string;
  quoteAuthor?: string;
  summary: string;
  tabs: TabItem[];
  prevSection?: { id: string; label: string };
  nextSection?: { id: string; label: string };
  children?: React.ReactNode;
}

export default function AcademicPortalSection({
  id,
  code,
  title,
  quote,
  quoteAuthor = "Hồ Chí Minh",
  summary,
  tabs,
  prevSection,
  nextSection,
  children,
}: AcademicPortalSectionProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || "");
  const { scrollTo } = useSmoothScroll();

  const handleNavigate = (targetId: string) => {
    playSubtleClick();
    scrollTo(targetId, -56, true);
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeSectionIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === id);

  return (
    <section
      id={id}
      data-section-id={id}
      className="scroll-mt-14 w-full bg-[#fbf9f4] text-ink"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 pt-1.5 space-y-2">
        {/* 1. Khối Nhập Môn 2 Cột (Opening Dual Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-stretch">
          {/* Cột Trái: Tiêu Đề Bài Học + Danh ngôn trích dẫn của Bác & Con dấu đỏ */}
          <div className="md:col-span-6 bg-[#fcfaf5] border border-[#e8dfcf] rounded-lg p-2.5 sm:p-3 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-[#7a1818] text-white font-mono font-bold text-xs rounded shadow-xs">
                  {code}
                </span>
                <h2 className="font-serif text-base sm:text-lg font-black text-[#420a0d] tracking-tight uppercase leading-tight">
                  {title}
                </h2>
              </div>
              <blockquote className="font-serif italic text-xs text-ink leading-snug font-medium mt-1">
                “{quote}”
              </blockquote>
            </div>

            <div className="mt-2 pt-1 border-t border-[#eee5d8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xs text-[#731717]">
                  — {quoteAuthor} —
                </span>
                {/* Chữ ký mô phỏng nét bút mực đỏ của Bác Hồ theo đúng Designer_71 */}
                <svg className="w-14 h-5 text-[#8b1515] opacity-85" viewBox="0 0 100 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 8,20 C 14,8 18,6 22,22 C 25,12 28,10 32,20 C 37,17 42,15 47,21 C 51,14 56,12 60,19 C 65,17 70,14 75,17 C 80,12 85,9 92,20" />
                  <path d="M 6,24 C 30,26 65,25 96,22" strokeWidth="1.25" />
                </svg>
              </div>
              <HeritageSeal text="DÂN VI BẢN" className="w-6 h-6" />
            </div>
          </div>

          {/* Cột Phải: Tóm Lược Tư Tưởng Cốt Lõi (3 Trụ Cột) */}
          <div className="md:col-span-6 bg-[#f3ece0] border border-[#dfd3c0] rounded-lg p-2.5 sm:p-3 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5 text-[#731717] font-serif font-bold text-[10.5px] uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#731717]" />
                <span>Tư tưởng cốt lõi & Luận điểm</span>
              </div>
              <p className="font-sans text-[11px] sm:text-[11.5px] text-ink-muted leading-relaxed">
                {summary}
              </p>
            </div>

            <div className="mt-1.5 pt-1 border-t border-[#e2d5bf] text-[9px] font-mono text-accent-dark/80 tracking-wider uppercase">
              GIÁO TRÌNH BỘ GD&ĐT • TƯ TƯỞNG HỒ CHÍ MINH
            </div>
          </div>
        </div>

        {/* 3. Hệ Thống Tabs Chuyển Đổi Tiểu Mục Liền Khối (a, b, c) */}
        <div className="pt-0.5">
          <div className="flex w-full rounded-t-lg overflow-hidden border-b-2 border-[#7a1818] bg-[#eae4d7]">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSubtleClick();
                    setActiveTabId(tab.id);
                  }}
                  className={`relative min-h-[36px] py-1.5 px-2.5 sm:px-3 text-center flex-1 font-sans text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus:outline-none border-r border-[#d8cfbe] last:border-r-0 ${
                    isActive
                      ? "bg-[#6b1212] text-white shadow-xs"
                      : "bg-[#eae4d7] text-[#3d372e] hover:bg-[#ded7c8]"
                  }`}
                >
                  <span className="truncate">{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[9.5px] px-1.5 py-0.2 rounded font-mono hidden sm:inline ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-black/10 text-ink-muted"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                  {/* Mũi tên tam giác nhỏ chĩa xuống tab active */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#6b1212]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Khung Hiển Thị Chi Tiết Nội Dung Tiểu Mục Đang Chọn */}
          <div className="bg-[#fbf9f4] border-x border-b border-[#e2d7c5] rounded-b-lg p-3 sm:p-4 shadow-xs">
            {activeTab?.content}
          </div>
        </div>

        {/* Phần mở rộng nếu có */}
        {children && <div className="space-y-4 pt-1">{children}</div>}

        {/* 4. Dải Phân Trang Chân Trang (Bottom Stepper) đúng Designer_71 */}
        <div className="pt-2 pb-4 border-t border-[#e2d7c5] flex items-center justify-between text-xs font-sans">
          {/* Nút Lùi */}
          {prevSection ? (
            <button
              onClick={() => handleNavigate(prevSection.id)}
              className="px-3 py-1.5 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-colors flex items-center gap-1.5 font-medium text-[11px]"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#7a1818]" />
              <span>{prevSection.label}</span>
            </button>
          ) : (
            <div />
          )}

          {/* Dải Chấm Tròn Tiến Trình 9 Mốc */}
          <div className="flex items-center gap-1.5 py-1 px-3 bg-[#ede6d8] rounded-full border border-[#ded5c4]">
            {CANONICAL_SECTIONS.map((sec, idx) => {
              const isCurrent = idx === activeSectionIdx;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate(sec.id)}
                  title={sec.shortTitle}
                  aria-label={sec.shortTitle}
                  className={`transition-all rounded-full ${
                    isCurrent
                      ? "w-3 h-3 bg-[#7a1818] ring-2 ring-[#7a1818]/30 shadow-xs"
                      : "w-1.5 h-1.5 bg-[#b5a995] hover:bg-[#7a1818]/70"
                  }`}
                />
              );
            })}
          </div>

          {/* Nút Tiến */}
          {nextSection ? (
            <button
              onClick={() => handleNavigate(nextSection.id)}
              className="px-3 py-1.5 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-colors flex items-center gap-1.5 font-medium text-[11px]"
            >
              <span>{nextSection.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7a1818]" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
