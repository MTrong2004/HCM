"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "./SmoothScrollProvider";
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
    setSubtabDirection,
    stepNext,
    stepPrev,
    scrollTo,
    isBannerCollapsed,
  } = useSmoothScroll();

  // Trạng thái bật/tắt tóm lược luận điểm (mặc định luôn hiển thị)
  const [showSummary, setShowSummary] = useState<boolean>(true);
  const contentScrollRef = useRef<HTMLDivElement | null>(null);

  // Quản lý tab hiện tại độc lập và đồng bộ với context mà không bị vòng lặp reset
  const [activeTabId, setActiveTabId] = useState<string>(
    activeSubtabMap[id] || tabs[0]?.id || ""
  );
  const prevContextTabIdRef = useRef(activeSubtabMap[id]);

  useEffect(() => {
    if (activeSubtabMap[id] && activeSubtabMap[id] !== prevContextTabIdRef.current) {
      prevContextTabIdRef.current = activeSubtabMap[id];
      setActiveTabId(activeSubtabMap[id]);
    }
  }, [activeSubtabMap, id]);

  const rawIndex = tabs.findIndex((t) => t.id === activeTabId);
  const activeTabIdx = rawIndex >= 0 ? rawIndex : 0;
  const activeTab = tabs[activeTabIdx] || tabs[0];
  const activeSectionIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === id);

  // Cuộn lên đầu mỗi khi đổi tab
  useEffect(() => {
    const el = contentScrollRef.current;
    if (el) {
      el.scrollTop = 0;
    }
  }, [activeTabId]);

  const handleTabChange = useCallback(
    (tabId: string) => {
      playSubtleClick();
      const currIdx = tabs.findIndex((t) => t.id === activeTabId);
      const targetIdx = tabs.findIndex((t) => t.id === tabId);
      setSubtabDirection(targetIdx >= currIdx ? 1 : -1);
      prevContextTabIdRef.current = tabId;
      setActiveTabId(tabId);
      setActiveSubtab(id, tabId);
      if (typeof window !== "undefined" && window.scrollY > 150) {
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    },
    [activeTabId, id, setActiveSubtab, setSubtabDirection, tabs]
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
  const rawPrevText =
    activeTabIdx > 0
      ? tabs[activeTabIdx - 1].label
      : prevSection?.label || "";
  const cleanPrevText = rawPrevText.replace(/^[←\s]+|[→\s]+$/g, "").trim();

  const hasNext = activeTabIdx < tabs.length - 1 || Boolean(nextSection);
  const rawNextText =
    activeTabIdx < tabs.length - 1
      ? tabs[activeTabIdx + 1].label
      : nextSection?.label || "";
  const cleanNextText = rawNextText.replace(/^[←\s]+|[→\s]+$/g, "").trim();

  return (
    <section
      id={id}
      data-section-id={id}
      className="w-full flex-1 flex flex-col bg-[#fbf9f4] text-ink"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 py-2 flex flex-col flex-1 justify-between gap-3">
        {/* BANNER TÓM LƯỢC LUẬN ĐIỂM CỐT LÕI (Mặc định ẩn, chỉ trượt xuống nhẹ nhàng khi bấm nút "Luận điểm") */}
        <AnimatePresence>
          {showSummary && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden flex-shrink-0"
            >
              <div className="bg-gradient-to-r from-[#fbf8f0] via-[#f7efe1] to-[#f4e8d4] border border-[#d8c8a8] rounded-xl p-3 sm:p-4 shadow-sm relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10.5px] rounded shadow-2xs">
                        {code}
                      </span>
                      <h4 className="font-serif font-bold text-xs uppercase text-[#7a1818] tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8b1e1e]" />
                        <span>TƯ TƯỞNG CỐT LÕI & LUẬN ĐIỂM (GIÁO TRÌNH BỘ GD&ĐT)</span>
                      </h4>
                    </div>

                    <p className="font-sans text-xs sm:text-[13px] text-ink leading-relaxed font-medium">
                      {summary}
                    </p>

                    {quote && (
                      <p className="font-serif italic text-xs text-ink-muted pt-1.5 border-t border-[#dfcfb9]">
                        &ldquo;{quote}&rdquo; — <span className="font-medium text-[#7a1818]">{quoteAuthor}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      playSubtleClick();
                      setShowSummary(false);
                    }}
                    className="p-1 sm:p-1.5 rounded-md text-ink-muted hover:text-[#7a1818] hover:bg-[#eadfcd] transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Đóng tóm lược"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. Hệ Thống Tabs Chuyển Đổi Tiểu Mục Liền Khối & Khung Nội Dung */}
        <div className="flex flex-col flex-1 relative">
          <EditorialReveal
            delay={80}
            className={`flex-shrink-0 sticky z-20 transition-[top] duration-300 ${
              isBannerCollapsed
                ? "top-[38px] sm:top-[42px]"
                : "top-[145px] sm:top-[160px] md:top-[175px] lg:top-[190px] xl:top-[200px]"
            }`}
          >
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
                    className={`relative min-h-[32px] sm:min-h-[36px] h-[36px] py-1 px-1.5 sm:px-3 text-center flex-1 min-w-0 font-sans text-[11px] sm:text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus:outline-none border-r border-[#d8cfbe] last:border-r-0 cursor-pointer ${
                      isActive
                        ? "bg-[#6b1212] text-white shadow-2xs active-tab"
                        : "bg-[#eae4d7] text-[#3d372e] hover:bg-[#ded7c8]"
                    }`}
                  >
                    <span className="truncate tracking-tight">{tab.label}</span>
                    {/* Mũi tên tam giác nhỏ chĩa xuống tab active */}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#6b1212]" />
                    )}
                  </button>
                );
              })}

              {/* Nút bật/tắt Tóm lược Luận điểm cốt lõi nhỏ gọn ở góc phải của Tab Bar */}
              <button
                type="button"
                onClick={() => {
                  playSubtleClick();
                  setShowSummary((prev) => !prev);
                }}
                className={`px-2 sm:px-3 py-1 text-[11px] font-sans font-semibold flex items-center gap-1.5 transition-all cursor-pointer border-l border-[#d8cfbe] flex-shrink-0 ${
                  showSummary
                    ? "bg-[#7a1818] text-[#ffd700]"
                    : "bg-[#e5dbc9] text-[#6b1212] hover:bg-[#dbd0bd]"
                }`}
                aria-label="Xem tóm lược luận điểm cốt lõi"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#b58319]" />
                <span className="hidden sm:inline">
                  {showSummary ? "Đóng tóm lược" : "Luận điểm cốt lõi"}
                </span>
              </button>
            </div>
          </EditorialReveal>

          {/* Khung Hiển Thị Chi Tiết Nội Dung Tiểu Mục Đang Chọn: Trải rộng tự nhiên, cuộn mượt cùng toàn trang */}
          <div
            ref={contentScrollRef}
            className="w-full min-h-[300px] sm:min-h-[340px] bg-[#fbf9f4] border-x border-b border-[#e2d7c5] rounded-b-lg p-3 sm:p-5 shadow-2xs relative flex flex-col justify-between"
          >
            <div
              key={activeTab.id}
              className="w-full pb-4 transition-opacity duration-200"
            >
              {activeTab?.content}
            </div>

            {/* Phần mở rộng nếu có */}
            {children && <div className="space-y-3 pt-1 pb-4">{children}</div>}

            {/* 2. Dải Phân Trang & Điều Hướng Chân Trang (Refined End-of-Page Footer Stepper) */}
            <footer
              aria-label="Điều hướng chân trang"
              className="w-full mt-8 pt-5 border-t border-[#dfd5c4] flex items-center justify-between gap-3 text-xs font-sans relative"
            >
              {/* Nút Lùi (Cột Trái) */}
              <div className="flex-1 flex justify-start min-w-0">
                {hasPrev ? (
                  <button
                    type="button"
                    data-testid="stepper-prev-btn"
                    onClick={stepPrev}
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#cfc3ad] bg-[#fdfcf9] hover:bg-[#f3ece0] hover:border-[#7a1818] transition-all duration-200 shadow-2xs cursor-pointer"
                    aria-label={`Mục trước: ${cleanPrevText}`}
                  >
                    <span className="p-1 rounded-md bg-[#eee7d8] text-[#7a1818] group-hover:bg-[#7a1818] group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                    </span>
                    <span className="text-xs font-serif font-bold text-ink group-hover:text-[#7a1818]">
                      Trước
                    </span>
                  </button>
                ) : (
                  <div className="w-16" />
                )}
              </div>

              {/* Dải Chấm Tròn Tiến Trình 8 Mốc */}
              <div className="flex flex-col items-center gap-1 my-1 md:my-0 flex-shrink-0">
                <div
                  data-testid="pagination-dots-container"
                  className="flex items-center gap-2 py-1.5 px-3.5 bg-[#f0ebd9]/90 rounded-full border border-[#ded4bf] shadow-2xs"
                >
                  {CANONICAL_SECTIONS.map((sec, idx) => {
                    const isCurrent = idx === activeSectionIdx;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => handleNavigate(sec.id)}
                        aria-label={`${sec.number !== "0" ? sec.number + " " : ""}${sec.shortTitle}`}
                        className={`transition-all rounded-full cursor-pointer ${
                          isCurrent
                            ? "w-2.5 h-2.5 bg-[#7a1818] ring-2 ring-[#7a1818]/30 shadow-2xs"
                            : "w-1.5 h-1.5 bg-[#bdae99] hover:bg-[#7a1818]/70"
                        }`}
                      />
                    );
                  })}
                </div>
                <span className="text-[10px] font-mono text-[#8c7e6c] tracking-tight">
                  {activeSectionIdx >= 0 ? `${activeSectionIdx + 1} / ${CANONICAL_SECTIONS.length}` : ""}
                </span>
              </div>

              {/* Nút Tiến (Cột Phải) */}
              <div className="flex-1 flex justify-end min-w-0">
                {hasNext && (
                  <button
                    type="button"
                    data-testid="stepper-next-btn"
                    onClick={stepNext}
                    className="group flex items-center justify-end gap-2 px-3 py-1.5 rounded-lg border border-[#cfc3ad] bg-[#fdfcf9] hover:bg-[#f3ece0] hover:border-[#7a1818] transition-all duration-200 shadow-2xs cursor-pointer ml-auto"
                    aria-label={`Mục tiếp theo: ${cleanNextText}`}
                  >
                    <span className="text-xs font-serif font-bold text-ink group-hover:text-[#7a1818]">
                      Tiếp
                    </span>
                    <span className="p-1 rounded-md bg-[#eee7d8] text-[#7a1818] group-hover:bg-[#7a1818] group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </button>
                )}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
