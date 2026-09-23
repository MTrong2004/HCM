"use client";

import React, { useCallback } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { HeritageSeal } from "./HeritageIcons";
import { playSubtleClick } from "@/lib/sound-effects";
import { CANONICAL_SECTIONS } from "@/content/canonical-sections";
import EditorialReveal from "./EditorialReveal";

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
  const {
    activeSubtabMap,
    setActiveSubtab,
    subtabDirection,
    stepNext,
    stepPrev,
    scrollTo,
  } = useSmoothScroll();

  // Xác định tab hiện tại từ context (ưu tiên) hoặc fallback về tab đầu
  const activeTabId = activeSubtabMap[id] || tabs[0]?.id || "";
  const rawIndex = tabs.findIndex((t) => t.id === activeTabId);
  const activeTabIdx = rawIndex >= 0 ? rawIndex : 0;
  const activeTab = tabs[activeTabIdx] || tabs[0];
  const activeSectionIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === id);

  const handleTabChange = useCallback(
    (tabId: string) => {
      playSubtleClick();
      setActiveSubtab(id, tabId);
    },
    [id, setActiveSubtab]
  );

  const handleNavigate = useCallback(
    (targetId: string) => {
      playSubtleClick();
      scrollTo(targetId, -56, true);
    },
    [scrollTo]
  );

  // Nhãn thông minh cho các nút điều hướng
  const hasPrev = activeTabIdx > 0 || Boolean(prevSection);
  const prevLabel =
    activeTabIdx > 0
      ? `Lùi: ${tabs[activeTabIdx - 1].label}`
      : prevSection?.label || "";

  const hasNext = activeTabIdx < tabs.length - 1 || Boolean(nextSection);
  const nextLabel =
    activeTabIdx < tabs.length - 1
      ? `Tiếp: ${tabs[activeTabIdx + 1].label}`
      : nextSection?.label || "";

  return (
    <section
      id={id}
      data-section-id={id}
      className="w-full flex-1 min-h-0 flex flex-col bg-[#fbf9f4] text-ink overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 py-1.5 flex flex-col flex-1 min-h-0 justify-between gap-1.5">
        {/* 1. Khối Nhập Môn 2 Cột (Opening Dual Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-stretch flex-shrink-0">
          {/* Cột Trái: Tiêu Đề Bài Học + Danh ngôn trích dẫn của Bác & Con dấu đỏ */}
          <EditorialReveal className="md:col-span-6 bg-[#fcfaf5] border border-[#e8dfcf] rounded-lg p-2 sm:py-1.5 sm:px-2.5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="px-1.5 py-0.2 bg-[#7a1818] text-white font-mono font-bold text-[10.5px] rounded shadow-2xs">
                  {code}
                </span>
                <h2 className="font-serif text-xs sm:text-[13px] font-bold text-[#420a0d] tracking-tight uppercase leading-tight truncate">
                  {title}
                </h2>
              </div>
              <EditorialReveal delay={40}>
                <blockquote className="font-serif italic text-[10.5px] sm:text-[11px] text-ink leading-snug font-medium line-clamp-2">
                  “{quote}”
                </blockquote>
              </EditorialReveal>
            </div>

            <div className="mt-1 pt-0.5 border-t border-[#eee5d8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-[10.5px] text-[#731717]">
                  — {quoteAuthor} —
                </span>
                {/* Chữ ký mô phỏng nét bút mực đỏ của Bác Hồ */}
                <svg
                  className="w-12 h-3.5 text-[#8b1515] opacity-85"
                  viewBox="0 0 100 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 8,20 C 14,8 18,6 22,22 C 25,12 28,10 32,20 C 37,17 42,15 47,21 C 51,14 56,12 60,19 C 65,17 70,14 75,17 C 80,12 85,9 92,20" />
                  <path d="M 6,24 C 30,26 65,25 96,22" strokeWidth="1.25" />
                </svg>
              </div>
              <HeritageSeal text="DÂN VI BẢN" className="w-5 h-5" />
            </div>
          </EditorialReveal>

          {/* Cột Phải: Tóm Lược Tư Tưởng Cốt Lõi */}
          <EditorialReveal delay={80} className="md:col-span-6 bg-[#f3ece0] border border-[#dfd3c0] rounded-lg p-2 sm:py-1.5 sm:px-2.5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5 text-[#731717] font-serif font-bold text-[10px] uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 text-[#731717]" />
                <span>Tư tưởng cốt lõi & Luận điểm</span>
              </div>
              <p className="font-sans text-[10.5px] sm:text-[11px] text-ink-muted leading-snug line-clamp-2">
                {summary}
              </p>
            </div>

            <div className="mt-1 pt-0.5 border-t border-[#e2d5bf] text-[8.5px] font-mono text-accent-dark/80 tracking-wider uppercase">
              GIÁO TRÌNH BỘ GD&ĐT • TƯ TƯỞNG HỒ CHÍ MINH
            </div>
          </EditorialReveal>
        </div>

        {/* 2. Hệ Thống Tabs Chuyển Đổi Tiểu Mục Liền Khối & Khung Nội Dung */}
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <EditorialReveal delay={120} className="flex-shrink-0">
            <div
              className="flex w-full rounded-t-lg overflow-hidden border-b-2 border-[#7a1818] bg-[#eae4d7]"
              role="tablist"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    data-active={isActive ? "true" : "false"}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative min-h-[30px] sm:min-h-[32px] h-[32px] py-1 px-1 sm:px-2.5 text-center flex-1 min-w-0 font-sans text-[11px] sm:text-xs font-semibold transition-colors flex items-center justify-center gap-1 focus:outline-none border-r border-[#d8cfbe] last:border-r-0 cursor-pointer ${
                      isActive
                        ? "bg-[#6b1212] text-white shadow-2xs active-tab"
                        : "bg-[#eae4d7] text-[#3d372e] hover:bg-[#ded7c8]"
                    }`}
                  >
                    <span className="truncate">{tab.label}</span>
                    {tab.badge && (
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded font-mono hidden sm:inline ${
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
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#6b1212]" />
                    )}
                  </button>
                );
              })}
            </div>
          </EditorialReveal>

          {/* Khung Hiển Thị Chi Tiết Nội Dung Tiểu Mục Đang Chọn (có scroll nội bộ nếu vượt khung) */}
          <EditorialReveal delay={160} className="flex-1 min-h-0 overflow-y-auto custom-scrollbar bg-[#fbf9f4] border-x border-b border-[#e2d7c5] rounded-b-lg p-2.5 sm:p-3 shadow-2xs">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: subtabDirection > 0 ? 12 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: subtabDirection > 0 ? -12 : 12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="w-full"
              >
                {activeTab?.content}
              </motion.div>
            </AnimatePresence>
          </EditorialReveal>
        </div>

        {/* Phần mở rộng nếu có */}
        {children && <div className="space-y-2 pt-0.5 flex-shrink-0">{children}</div>}

        {/* 3. Dải Phân Trang Chân Trang (Inline Bottom Stepper) Luôn Nằm Gọn Ở Đáy Viewport */}
        <EditorialReveal delay={200} className="relative min-h-[38px] h-[38px] pt-1 pb-0 border-t border-[#e2d7c5] flex items-center justify-between text-xs font-sans flex-shrink-0">
          {/* Nút Lùi (Cột Trái) */}
          <div className="flex-1 flex justify-start z-10 pr-2 min-w-0">
            {hasPrev && (
              <EditorialReveal delay={220}>
                <button
                  data-testid="stepper-prev-btn"
                  onClick={stepPrev}
                  className="max-w-[180px] sm:max-w-[260px] truncate px-2.5 py-1 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-all flex items-center gap-1.5 font-medium text-[11px] shadow-2xs group cursor-pointer"
                  title={prevLabel}
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#7a1818] flex-shrink-0 transition-transform group-hover:-translate-x-0.5" />
                  <span className="truncate">{prevLabel}</span>
                </button>
              </EditorialReveal>
            )}
          </div>

          {/* Dải Chấm Tròn Tiến Trình 8 Mốc */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <EditorialReveal delay={240}>
              <div
                data-testid="pagination-dots-container"
                className="flex items-center gap-1.5 py-1 px-3 bg-[#ede6d8] rounded-full border border-[#ded5c4] shadow-xs"
              >
                {CANONICAL_SECTIONS.map((sec, idx) => {
                  const isCurrent = idx === activeSectionIdx;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavigate(sec.id)}
                      title={`${sec.number !== "0" ? sec.number + " " : ""}${sec.shortTitle}`}
                      aria-label={`${sec.number !== "0" ? sec.number + " " : ""}${sec.shortTitle}`}
                      className={`transition-all rounded-full cursor-pointer ${
                        isCurrent
                          ? "w-3 h-3 bg-[#7a1818] ring-2 ring-[#7a1818]/30 shadow-xs"
                          : "w-1.5 h-1.5 bg-[#b5a995] hover:bg-[#7a1818]/70"
                      }`}
                    />
                  );
                })}
              </div>
            </EditorialReveal>
          </div>

          {/* Nút Tiến (Cột Phải) */}
          <div className="flex-1 flex justify-end z-10 pl-2 min-w-0">
            {hasNext && (
              <EditorialReveal delay={260}>
                <button
                  data-testid="stepper-next-btn"
                  onClick={stepNext}
                  className="max-w-[180px] sm:max-w-[260px] truncate px-2.5 py-1 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-all flex items-center justify-end gap-1.5 font-medium text-[11px] shadow-2xs group ml-auto cursor-pointer"
                  title={nextLabel}
                >
                  <span className="truncate">{nextLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7a1818] flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              </EditorialReveal>
            )}
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
}
