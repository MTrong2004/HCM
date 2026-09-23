"use client";

import React, { useState, useEffect } from "react";

import PresentationModeModal from "./PresentationModeModal";
import SearchCommandModal from "./SearchCommandModal";
import CitationToolModal from "./CitationToolModal";
import StudyNotebookDrawer from "./StudyNotebookDrawer";
import {
  playSubtleClick,
  playSwoosh,
} from "@/lib/sound-effects";

export default function SectionNavigation() {
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [citationOpen, setCitationOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearchModal = () => {
      setSearchOpen(true);
    };

    window.addEventListener("open-search-modal", handleOpenSearchModal);

    return () => {
      window.removeEventListener("open-search-modal", handleOpenSearchModal);
    };
  }, []);

  return (
    <>
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

