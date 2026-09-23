"use client";

import React, { useState } from "react";
import {
  Home,
  ChevronRight,
  Quote as QuoteIcon,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
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
  parentPath,
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
    scrollTo(targetId, -72, true);
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeSectionIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === id);

  return (
    <section
      id={id}
      data-section-id={id}
      className="scroll-mt-20 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 border-b border-[#e5dcce] bg-[#fbf9f4] text-ink"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* 1. Breadcrumbs Trail */}
        <nav
          aria-label="Breadcrumbs"
          className="flex flex-wrap items-center gap-1.5 text-xs font-sans text-ink-muted"
        >
          <button
            onClick={() => handleNavigate("hero")}
            className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none"
          >
            <Home className="w-3.5 h-3.5 text-primary" />
            <span>Trang chủ</span>
          </button>
          <ChevronRight className="w-3 h-3 text-accent-dark/50 flex-shrink-0" />
          <span>Chương 4</span>
          <ChevronRight className="w-3 h-3 text-accent-dark/50 flex-shrink-0" />
          <span className="hidden md:inline truncate max-w-[280px]">
            {parentPath}
          </span>
          <ChevronRight className="hidden md:inline w-3 h-3 text-accent-dark/50 flex-shrink-0" />
          <span className="text-primary font-bold">
            {code} {title}
          </span>
        </nav>

        {/* 2. Tiêu Đề Bài Học (Section Header) */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#6e1515] text-paper-light font-mono font-bold text-xs sm:text-sm rounded-full shadow-xs">
            {code}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-ink tracking-tight uppercase">
            {title}
          </h2>
        </div>

        {/* 3. Khối Nhập Môn 2 Cột (Opening Dual Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Cột Trái: Danh ngôn trích dẫn của Bác & Con dấu đỏ */}
          <div className="md:col-span-6 bg-[#fbf8f0] border border-[#e8dfcf] rounded-xl p-5 sm:p-6 relative shadow-xs flex flex-col justify-between">
            <div>
              <QuoteIcon className="w-8 h-8 text-[#8a1c1c]/25 mb-2" />
              <blockquote className="font-serif italic text-sm sm:text-base text-ink font-medium leading-relaxed">
                “{quote}”
              </blockquote>
            </div>

            <div className="mt-4 pt-3 border-t border-[#eee5d8] flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-[#731717]">
                — {quoteAuthor} —
              </span>
              <HeritageSeal text="DÂN VI BẢN" className="w-9 h-9" />
            </div>
          </div>

          {/* Cột Phải: Tóm Lược Tư Tưởng Cốt Lõi */}
          <div className="md:col-span-6 bg-[#f4ece0] border border-[#dfd3c0] rounded-xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#731717] font-serif font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#731717]" />
                <span>Tư tưởng cốt lõi & Luận điểm</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                {summary}
              </p>
            </div>

            <div className="mt-4 text-[11px] font-mono text-accent-dark/80 tracking-wider uppercase pt-2 border-t border-[#e2d5bf]">
              GIÁO TRÌNH BỘ GD&ĐT • TƯ TƯỞNG HỒ CHÍ MINH
            </div>
          </div>
        </div>

        {/* 4. Hệ Thống Tabs Chuyển Đổi Tiểu Mục (a, b, c) */}
        <div className="pt-2">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e2d7c5] pb-px">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSubtleClick();
                    setActiveTabId(tab.id);
                  }}
                  className={`relative min-h-[44px] px-4 py-2 rounded-t-lg font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 focus:outline-none ${
                    isActive
                      ? "bg-[#7a1818] text-paper-light shadow-sm"
                      : "bg-[#eae3d5] text-ink hover:bg-[#ded4c3] hover:text-primary"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? "bg-white/20 text-paper-light"
                          : "bg-black/10 text-ink-muted"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                  {/* Mũi tên nhỏ chỉ xuống kết nối tab với card */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#7a1818]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Khung Hiển Thị Chi Tiết Nội Dung Tiểu Mục Đang Chọn */}
          <div className="mt-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-xl p-5 sm:p-7 shadow-xs">
            {activeTab?.content}
          </div>
        </div>

        {/* Thêm các nội dung chuyên sâu khác (nếu có: infographics, diagram) */}
        {children && <div className="space-y-6 pt-2">{children}</div>}

        {/* 5. Thanh Điều Hướng Cuối Trang (Bottom Stepper) */}
        <div className="pt-6 border-t border-[#e2d7c5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          {/* Nút Lùi */}
          {prevSection ? (
            <button
              onClick={() => handleNavigate(prevSection.id)}
              className="min-h-[44px] w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-[#7a1818]" />
              <span>{prevSection.label}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* Dải Chấm Tròn Tiến Trình (Dot Stepper) */}
          <div className="flex items-center gap-1.5 py-1 px-3 bg-[#ede6d8] rounded-full">
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
                      ? "w-4 h-4 bg-[#7a1818] ring-2 ring-[#7a1818]/30 shadow-xs"
                      : "w-2.5 h-2.5 bg-[#b5a995] hover:bg-[#7a1818]/70"
                  }`}
                />
              );
            })}
          </div>

          {/* Nút Tiến */}
          {nextSection ? (
            <button
              onClick={() => handleNavigate(nextSection.id)}
              className="min-h-[44px] w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <span>{nextSection.label}</span>
              <ArrowRight className="w-4 h-4 text-[#7a1818]" />
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>
    </section>
  );
}
