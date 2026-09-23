"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  BookMarked,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import PresentationModeModal from "./PresentationModeModal";
import SearchCommandModal from "./SearchCommandModal";
import CitationToolModal from "./CitationToolModal";
import StudyNotebookDrawer from "./StudyNotebookDrawer";
import {
  CANONICAL_SECTIONS,
  getSectionById,
} from "@/content/canonical-sections";
import {
  playSubtleClick,
  playSwoosh,
} from "@/lib/sound-effects";

export default function SectionNavigation() {
  const {
    activeSection,
    scrollTo,
    isStudyNotebookOpen,
    toggleStudyNotebook,
  } = useSmoothScroll();

  const [presentationOpen, setPresentationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [citationOpen, setCitationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Khi cuộn qua banner (> 140px), hiển thị thanh navigation dính (sticky)
      setIsScrolled(window.scrollY > 140);
    };

    const handleOpenSearchModal = () => {
      setSearchOpen(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("open-search-modal", handleOpenSearchModal);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-search-modal", handleOpenSearchModal);
    };
  }, []);

  const activeSectionData =
    getSectionById(activeSection) || CANONICAL_SECTIONS[0];

  const handleNavClick = (id: string) => {
    playSubtleClick();
    scrollTo(id, -56, true);
  };

  return (
    <>
      {/* Top Header Bar thông minh: chỉ trượt xuống khi cuộn khỏi banner, giúp giao diện trên cùng sạch đẹp 100% khớp mockup */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-11 sm:h-12 bg-[#3a0808]/95 backdrop-blur-md border-b border-[#5e1414] text-[#fbf8f0] transition-all duration-300 transform ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
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

          {/* Cột phải: Tìm kiếm & Nút Mở Sổ tay Nghiên cứu */}
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
                Ctrl+K
              </span>
            </button>

            {/* Nút Mở Sổ tay Nghiên cứu & Tiện ích Học tập thay thế drawer mục lục cũ */}
            <button
              data-testid="notebook-trigger"
              onClick={() => {
                playSubtleClick();
                toggleStudyNotebook();
              }}
              aria-expanded={isStudyNotebookOpen}
              aria-controls="study-notebook-drawer"
              className={`h-7 sm:h-8 px-2.5 rounded-md border text-[11px] font-sans font-semibold transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] shadow-xs ${
                isStudyNotebookOpen
                  ? "border-[#ffd700] bg-[#8e1d1d] text-[#fff8ea] ring-1 ring-[#ffd700]"
                  : "border-[#d4af37]/40 bg-[#7a1818] text-[#fbf8f0] hover:bg-[#8e1d1d] hover:border-[#ffd700]"
              }`}
              aria-label={
                isStudyNotebookOpen ? "Đóng sổ tay nghiên cứu" : "Mở sổ tay nghiên cứu"
              }
              title="Sổ tay Nghiên cứu & Tiện ích Học tập (Ctrl+B)"
            >
              <BookMarked className="w-3.5 h-3.5 text-[#ffd700]" />
              <span className="hidden sm:inline">Sổ tay</span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Sổ Tay Nghiên Cứu & Tiện Ích Học Tập Toàn Diện */}
      <StudyNotebookDrawer
        onOpenPresentation={() => {
          playSwoosh();
          setPresentationOpen(true);
        }}
        onOpenCitation={() => {
          playSubtleClick();
          setCitationOpen(true);
        }}
      />

      {/* Modals tiện ích chuyên sâu */}
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
