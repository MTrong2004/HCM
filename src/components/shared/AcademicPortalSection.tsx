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
    subtabDirection,
    setSubtabDirection,
    stepNext,
    stepPrev,
    scrollTo,
    setIsBannerCollapsed,
  } = useSmoothScroll();

  // Trạng thái bật/tắt tóm lược luận điểm (mặc định đóng để tiết kiệm tối đa diện tích màn hình)
  const [showSummary, setShowSummary] = useState<boolean>(false);

  // Trạng thái hiển thị panel điều hướng ở đáy: chỉ hiện khi lướt xuống cuối trang
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const contentScrollRef = useRef<HTMLDivElement | null>(null);
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);

  // Xác định tab hiện tại từ context (ưu tiên) hoặc fallback về tab đầu
  const activeTabId = activeSubtabMap[id] || tabs[0]?.id || "";
  const rawIndex = tabs.findIndex((t) => t.id === activeTabId);
  const activeTabIdx = rawIndex >= 0 ? rawIndex : 0;
  const activeTab = tabs[activeTabIdx] || tabs[0];
  const activeSectionIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === id);

  const checkIsAtBottom = useCallback(() => {
    // 1. Kiểm tra cuộn toàn trang (window scroll)
    if (typeof window !== "undefined") {
      const doc = document.documentElement;
      const isDocOverflowing = doc.scrollHeight > window.innerHeight + 60;
      if (!isDocOverflowing) {
        setIsAtBottom(true);
        return;
      }
      const atWinBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - 96;
      if (atWinBottom) {
        setIsAtBottom(true);
        return;
      }
    }

    // 2. Kiểm tra container nếu có cuộn nội bộ
    const el = contentScrollRef.current;
    if (el) {
      const isOverflowing = el.scrollHeight > el.clientHeight + 20;
      if (!isOverflowing) {
        setIsAtBottom(true);
        return;
      }
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 64;
      if (atBottom) {
        setIsAtBottom(true);
        return;
      }
    }

    setIsAtBottom(false);
  }, []);

  // Cuộn lên đầu và tính toán lại overflow mỗi khi đổi tab
  useEffect(() => {
    const el = contentScrollRef.current;
    if (el) {
      el.scrollTop = 0;
    }
    const timer = setTimeout(() => {
      checkIsAtBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTabId, checkIsAtBottom]);

  // Observer theo dõi khi người dùng lướt tới cuối trang
  useEffect(() => {
    const sentinel = bottomSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAtBottom(true);
        } else {
          if (typeof window !== "undefined") {
            const doc = document.documentElement;
            if (doc.scrollHeight > window.innerHeight + 60) {
              setIsAtBottom(false);
            }
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [activeTabId]);

  // Lắng nghe scroll trên window
  useEffect(() => {
    const handleWinScroll = () => {
      checkIsAtBottom();
      if (window.scrollY > 35) {
        setIsBannerCollapsed(true);
      } else if (window.scrollY < 12) {
        setIsBannerCollapsed(false);
      }
    };
    window.addEventListener("scroll", handleWinScroll, { passive: true });
    const rafId = requestAnimationFrame(() => {
      checkIsAtBottom();
    });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleWinScroll);
    };
  }, [checkIsAtBottom, setIsBannerCollapsed]);

  const handleTabChange = useCallback(
    (tabId: string) => {
      playSubtleClick();
      const currIdx = tabs.findIndex((t) => t.id === activeTab.id);
      const targetIdx = tabs.findIndex((t) => t.id === tabId);
      setSubtabDirection(targetIdx >= currIdx ? 1 : -1);
      setActiveSubtab(id, tabId);
      if (typeof window !== "undefined" && window.scrollY > 150) {
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    },
    [activeTab.id, id, setActiveSubtab, setSubtabDirection, tabs]
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
                    title="Đóng tóm lược"
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
          <EditorialReveal delay={80} className="flex-shrink-0 sticky top-[86px] sm:top-[94px] z-20">
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
                title={showSummary ? "Đóng tóm lược luận điểm" : "Xem tóm lược luận điểm cốt lõi của mục này"}
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
            data-lenis-prevent
            className="w-full bg-[#fbf9f4] border-x border-b border-[#e2d7c5] rounded-b-lg p-3 sm:p-5 shadow-2xs relative"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: subtabDirection > 0 ? 12 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: subtabDirection > 0 ? -12 : 12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="w-full pb-16"
              >
                {activeTab?.content}
              </motion.div>
            </AnimatePresence>

            {/* Phần mở rộng nếu có */}
            {children && <div className="space-y-2 pt-0.5 pb-16">{children}</div>}

            {/* Điểm neo (sentinel) ở cuối trang để nhận diện khi lướt xuống đáy */}
            <div
              ref={bottomSentinelRef}
              className="h-4 w-full pointer-events-none opacity-0"
              aria-hidden="true"
            />
          </div>

          {/* 2. Dải Phân Trang Chân Trang (Floating Bottom Stepper Dock) - Tự động trượt lên khi lướt xuống cuối trang */}
          <div
            className={`fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-4xl min-h-[44px] px-3 sm:px-4 py-1.5 bg-[#fbf9f4]/95 backdrop-blur-md border border-[#e2d7c5] rounded-xl flex items-center justify-between text-xs font-sans transition-all duration-300 ease-out shadow-lg ${
              isAtBottom
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            {/* Nút Lùi (Cột Trái) */}
            <div className="flex-1 flex justify-start z-10 pr-2 min-w-0">
              {hasPrev && (
                <button
                  data-testid="stepper-prev-btn"
                  onClick={stepPrev}
                  className="max-w-[180px] sm:max-w-[260px] truncate px-2.5 py-1 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-all flex items-center gap-1.5 font-medium text-[11px] shadow-2xs group cursor-pointer"
                  title={prevLabel}
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#7a1818] flex-shrink-0 transition-transform group-hover:-translate-x-0.5" />
                  <span className="truncate">{prevLabel}</span>
                </button>
              )}
            </div>

            {/* Dải Chấm Tròn Tiến Trình 8 Mốc */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
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
            </div>

            {/* Nút Tiến (Cột Phải) */}
            <div className="flex-1 flex justify-end z-10 pl-2 min-w-0">
              {hasNext && (
                <button
                  data-testid="stepper-next-btn"
                  onClick={stepNext}
                  className="max-w-[180px] sm:max-w-[260px] truncate px-2.5 py-1 rounded-md border border-[#cfc4b0] bg-[#f5efe2] hover:bg-[#eae0cf] hover:text-[#7a1818] transition-all flex items-center justify-end gap-1.5 font-medium text-[11px] shadow-2xs group ml-auto cursor-pointer"
                  title={nextLabel}
                >
                  <span className="truncate">{nextLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7a1818] flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
