"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Search,
  Presentation,
  BookMarked,
  Volume2,
  VolumeX,
  ArrowRight,
  BookmarkCheck,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import PresentationModeModal from "./PresentationModeModal";
import SearchCommandModal from "./SearchCommandModal";
import CitationToolModal from "./CitationToolModal";
import {
  CANONICAL_SECTIONS,
  getSectionById,
} from "@/content/canonical-sections";
import {
  playSubtleClick,
  playSwoosh,
  toggleSound,
  isSoundMuted,
  initSoundPreference,
} from "@/lib/sound-effects";

export default function SectionNavigation() {
  const {
    activeSection,
    scrollTo,
    isTOCDrawerOpen,
    setIsTOCDrawerOpen,
    toggleTOCDrawer,
  } = useSmoothScroll();

  const [presentationOpen, setPresentationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [citationOpen, setCitationOpen] = useState(false);
  const [soundMuted, setSoundMuted] = useState(() => {
    initSoundPreference();
    return isSoundMuted();
  });
  const tocDrawerRef = useRef<HTMLElement | null>(null);
  const tocTriggerRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const activeSectionData =
    getSectionById(activeSection) || CANONICAL_SECTIONS[0];

  useEffect(() => {
    if (!isTOCDrawerOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const drawer = tocDrawerRef.current;
    const fallbackTrigger = tocTriggerRef.current;
    const focusableSelector =
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = drawer
      ? Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelector))
      : [];
    focusable[0]?.focus();

    const handleDrawerKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDrawerKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDrawerKeyDown);
      const focusTarget = previousFocusRef.current || fallbackTrigger;
      window.requestAnimationFrame(() => focusTarget?.focus());
    };
  }, [isTOCDrawerOpen]);

  const handleNavClick = (id: string) => {
    playSubtleClick();
    scrollTo(id, -56, true);
    setIsTOCDrawerOpen(false);
  };

  const handleSoundToggle = () => {
    const enabled = toggleSound();
    setSoundMuted(!enabled);
    if (enabled) playSubtleClick();
  };

  return (
    <>
      {/* Top Header Bar theo phong cách thiết kế mẫu Designer_71 */}
      <header className="fixed top-0 left-0 right-0 md:left-60 lg:left-64 z-40 h-11 sm:h-12 bg-[#3a0808]/95 backdrop-blur-md border-b border-[#5e1414] text-[#fbf8f0] transition-all duration-300">
        <div className="w-full px-4 sm:px-6 h-full flex items-center justify-between gap-3">
          {/* Cột trái: Mobile Brand (chỉ hiện mobile) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick("hero")}
              className="md:hidden min-h-[38px] flex items-center gap-1.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg group flex-shrink-0"
              aria-label="Về phần mở đầu tác phẩm"
            >
              <div className="w-6 h-6 rounded bg-[#7a1818] border border-[#d4af37]/40 text-[#fbf8f0] flex items-center justify-center font-serif font-black text-xs shadow-xs">
                ★
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[11px] font-bold text-[#fbf8f0] tracking-wide">
                  TƯ TƯỞNG HỒ CHÍ MINH
                </span>
                <span className="font-mono text-[9px] text-[#d4af37]">
                  {activeSectionData.number !== "0"
                    ? `${activeSectionData.number} ${activeSectionData.shortTitle}`
                    : activeSectionData.shortTitle}
                </span>
              </div>
            </button>
          </div>

          {/* Cột giữa: Khẩu hiệu trung tâm theo đúng Designer_71 */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-serif tracking-wider">
            <button
              onClick={() => handleNavClick("phap-quyen")}
              className="py-0.5 px-1 border-b-[1.5px] border-[#d4af37] text-[#fff8ea] font-bold uppercase transition-colors focus:outline-none"
            >
              HỌC TỪ BÁC
            </button>
            <button
              onClick={() => handleNavClick("dan-chu")}
              className="py-0.5 px-1 text-[#fff8ea]/75 hover:text-white uppercase transition-colors focus:outline-none"
            >
              SỐNG VÌ DÂN
            </button>
            <button
              onClick={() => handleNavClick("xay-dung-dang")}
              className="py-0.5 px-1 text-[#fff8ea]/75 hover:text-white uppercase transition-colors focus:outline-none"
            >
              HÀNH ĐỘNG VÌ TƯƠNG LAI
            </button>
          </div>

          {/* Cột phải: Tìm kiếm & Nút Menu Drawer theo đúng Designer_71 */}
          <div className="flex items-center gap-2">
            {/* Search Input Button dạng viên thuốc (Pill shape) */}
            <button
              onClick={() => {
                playSubtleClick();
                setSearchOpen(true);
              }}
              className="h-7 sm:h-8 px-2.5 py-1 rounded-full bg-black/35 border border-[#d4af37]/35 text-[11px] font-sans text-[#fbf8f0]/85 hover:text-white hover:border-[#d4af37] hover:bg-black/50 transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              title="Tìm kiếm nội dung (Ctrl+K)"
              aria-label="Tìm kiếm nội dung"
            >
              <Search className="w-3 h-3 text-[#d4af37]" />
              <span className="text-[11px]">Tìm kiếm...</span>
              <span className="hidden lg:inline text-[9px] bg-white/10 px-1 py-0.2 rounded border border-white/15">
                ⌘K
              </span>
            </button>

            {/* Nút Hamburger Menu mở Drawer điều hướng */}
            <button
              ref={tocTriggerRef}
              onClick={toggleTOCDrawer}
              aria-expanded={isTOCDrawerOpen}
              aria-controls="editorial-toc-drawer"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md border border-[#d4af37]/40 bg-[#7a1818] text-[#fbf8f0] hover:bg-[#8e1d1d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] shadow-xs transition-colors"
              aria-label={
                isTOCDrawerOpen ? "Đóng mục lục tác phẩm" : "Mở mục lục tác phẩm"
              }
              title="Mục lục & Tiện ích"
            >
              {isTOCDrawerOpen ? (
                <X className="w-3.5 h-3.5 text-[#d4af37]" />
              ) : (
                <Menu className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Mục lục (Di động & Máy tính bảng) */}
      {isTOCDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsTOCDrawerOpen(false)}
          role="presentation"
        >
          <aside
            ref={tocDrawerRef}
            id="editorial-toc-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mục lục ấn phẩm biên tập di sản"
            className="w-full max-w-[390px] sm:max-w-md bg-[#3b0909] text-paper-light border-l border-[#5e1414] shadow-2xl h-full flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Drawer */}
            <div className="p-4 sm:p-5 border-b border-[#5e1414] bg-[#2e0606]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#7a1818] border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center font-serif font-black text-sm shadow-xs">
                    ★
                  </div>
                  <div>
                    <h2 className="font-serif text-sm font-bold text-[#fff8ea] tracking-wide leading-none">
                      MỤC LỤC CHƯƠNG 4
                    </h2>
                    <p className="font-sans text-[10px] text-[#d4af37] tracking-widest uppercase mt-0.5">
                      TƯ TƯỞNG HỒ CHÍ MINH
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsTOCDrawerOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                  aria-label="Đóng mục lục"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions inside Drawer */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15">
                <button
                  onClick={() => {
                    setIsTOCDrawerOpen(false);
                    playSwoosh();
                    setPresentationOpen(true);
                  }}
                  className="min-h-[40px] px-2 py-1.5 rounded-lg bg-[#7a1818] border border-[#d4af37]/40 text-xs font-mono font-bold text-[#fff8ea] hover:bg-[#8e1d1d] transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <Presentation className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Trình chiếu</span>
                </button>

                <button
                  onClick={() => {
                    setIsTOCDrawerOpen(false);
                    playSubtleClick();
                    setCitationOpen(true);
                  }}
                  className="min-h-[40px] px-2 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-mono text-[#fbf8f0] hover:bg-white/20 transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <BookMarked className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Trích dẫn</span>
                </button>

                <button
                  onClick={handleSoundToggle}
                  className="min-h-[40px] px-2 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-mono text-[#fbf8f0] hover:bg-white/20 transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  {soundMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Bật âm</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Tắt âm</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Danh sách các Section chuẩn */}
            <div className="flex-1 p-3 sm:p-4 space-y-2 overflow-y-auto">
              <div className="px-2 py-1 text-[11px] font-mono uppercase text-[#d4af37] tracking-wider flex items-center gap-1.5">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>8 CHƯƠNG TOÀN VĂN HỌC THUẬT</span>
              </div>

              {CANONICAL_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    className={`w-full min-h-[44px] text-left p-3 rounded-xl border transition-all flex items-start gap-3 group ${
                      isActive
                        ? "bg-primary text-paper-light border-primary shadow-md"
                        : "bg-white/5 text-[#fbf8f0] border-white/10 hover:bg-white/10 hover:border-white/25"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                        isActive
                          ? "bg-paper-light text-primary"
                          : "bg-black/30 text-[#d4af37] group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      {sec.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-serif font-bold text-sm leading-snug text-wrap break-words ${
                          isActive ? "text-paper-light" : "text-[#fbf8f0]"
                        }`}
                      >
                        {sec.fullTitle}
                      </div>
                      <div
                        className={`text-xs font-sans mt-1 leading-relaxed text-wrap break-words ${
                          isActive
                            ? "text-paper-light/90"
                            : "text-[#fbf8f0]/70 group-hover:text-white"
                        }`}
                      >
                        {sec.subtitle}
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 mt-1 transition-transform ${
                        isActive
                          ? "text-paper-light translate-x-0.5"
                          : "text-white/40 group-hover:text-[#d4af37] group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Footer Drawer */}
            <div className="p-3 sm:p-4 border-t border-[#5e1414] bg-[#2e0606] text-center">
              <p className="font-serif text-xs text-[#d4af37] font-bold">
                LƯU TRỮ LỊCH SỬ QUỐC GIA III
              </p>
              <p className="font-sans text-[10px] text-white/70 tracking-wide mt-0.5">
                Bảo vật Quốc gia • Tôn vinh Hiến pháp 1946
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Modals */}
      <PresentationModeModal
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
      <SearchCommandModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <CitationToolModal
        isOpen={citationOpen}
        onClose={() => setCitationOpen(false)}
      />
    </>
  );
}
