/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Quote } from "lucide-react";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { playPageTurn, playSubtleClick } from "@/lib/sound-effects";

interface PresentationSlide {
  id: string;
  chapter: string;
  watermark: string;
  sealTag: string;
  title: string;
  subtitle: string;
  image?: string;
  imageCaption?: string;
  highlightQuote?: {
    text: string;
    author: string;
  };
  theses: string[];
  keyTakeaway: string;
}

const SLIDES: PresentationSlide[] = [
  {
    id: "hero",
    chapter: "PHẦN MỞ ĐẦU",
    watermark: "1946",
    sealTag: "LẬP HIẾN",
    title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
    subtitle: "Công trình thuyết trình biên tập di sản học thuật",
    image: "/images/soan-thao-hien-phap-1946.webp",
    imageCaption: "Bản gốc Hiến pháp 1946 (Lưu trữ Quốc gia III)",
    highlightQuote: {
      text: PRESENTATION_CONTENT.hero.quote,
      author: PRESENTATION_CONTENT.hero.author,
    },
    theses: [
      "Nhà nước Việt Nam mới được xây dựng trên nền tảng quyền lực tối cao thuộc về toàn thể nhân dân.",
      "Xác lập chế độ Dân chủ Cộng hòa đầu tiên tại Đông Nam Á thông qua Tổng tuyển cử ngày 6/1/1946.",
      "Hiến pháp năm 1946 là văn bản lập hiến mẫu mực đặt nền móng cho Nhà nước pháp quyền Việt Nam.",
    ],
    keyTakeaway: "Quyền hành và lực lượng đều ở nơi dân — kim chỉ nam cho toàn bộ tiến trình lập quốc.",
  },
  {
    id: "dan-chu",
    chapter: "CHƯƠNG 4.2.1",
    watermark: "DÂN CHỦ",
    sealTag: "DÂN VI BẢN",
    title: "Bản chất Nhà nước Dân chủ",
    subtitle: "Của dân — Do dân — Vì dân trong tư tưởng Hồ Chí Minh",
    image: "/images/nha-nuoc-dan-chu-hero.webp",
    imageCaption: "Toàn dân chuẩn bị Tổng tuyển cử 6/1/1946 tại Hà Nội",
    theses: [
      "CỦA DÂN: Quyền lực nhà nước do nhân dân ủy thác; cán bộ là công bộc, nhân dân có quyền kiểm tra, bãi miễn.",
      "DO DÂN: Nhân dân trực tiếp xây dựng, bầu cử, quản lý bộ máy và tự giác gánh vác nghĩa vụ công dân.",
      "VÌ DÂN: Mọi chính sách và luật pháp đều nhằm mục tiêu ấm no, tự do, hạnh phúc của toàn thể nhân dân.",
      "Bản chất giai cấp công nhân thống nhất hữu cơ với tính nhân dân và tính dân tộc sâu sắc.",
    ],
    keyTakeaway: "Việc gì có lợi cho dân thì hết sức làm. Việc gì có hại cho dân thì hết sức tránh.",
  },
  {
    id: "phap-quyen",
    chapter: "CHƯƠNG 4.2.2",
    watermark: "PHÁP QUYỀN",
    sealTag: "KỶ CƯƠNG",
    title: "Nhà nước Pháp quyền Nhân nghĩa",
    subtitle: "Cấu trúc ba tầng: Hợp hiến — Thượng tôn — Nhân nghĩa",
    image: "/images/nha-nuoc-phap-quyen-hero.webp",
    imageCaption: "Chính phủ lâm thời ra mắt Quốc hội khóa I (2/3/1946)",
    theses: [
      "TẦNG 1: Nhà nước hợp hiến, hợp pháp với Hiến pháp 1946 được Quốc hội khóa I thông qua.",
      "TẦNG 2: Thượng tôn pháp luật, quản lý xã hội bằng luật pháp nghiêm minh, không có vùng cấm.",
      "TẦNG 3: Đỉnh cao 'Pháp quyền nhân nghĩa' — pháp luật vì con người, khoan hồng, cảm hóa và tôn trọng nhân phẩm.",
    ],
    keyTakeaway: "Trăm điều phải có thần linh pháp quyền — kết hợp hài hòa lý trí luật pháp và trái tim nhân đạo.",
  },
  {
    id: "trong-sach",
    chapter: "CHƯƠNG 4.2.3",
    watermark: "1950",
    sealTag: "LIÊM CHÍNH",
    title: "Nhà nước Trong sạch, Vững mạnh",
    subtitle: "Kiểm soát quyền lực & Phòng chống 'Giặc nội xâm'",
    image: "/images/nha-nuoc-trong-sach-vung-manh-hero.webp",
    imageCaption: "Bác Hồ tại chiến dịch 1950 (kỷ cương & liêm chính)",
    theses: [
      "Kiểm soát quyền lực đa tầng: Nhân dân giám sát, tổ chức Đảng tự chỉnh đốn, hệ thống thanh tra nghiêm ngặt.",
      "Nhận diện 3 căn bệnh nguy hại nhất: Tham ô, Lãng phí, Quan liêu.",
      "Hệ giải pháp 5 trụ cột: DÂN (giám sát) - LUẬT (thể chế) - PHẠT (nghiêm minh) - GƯƠNG (nêu gương) - GIÁO DỤC (lương tâm).",
    ],
    keyTakeaway: "Phương châm 'Xây đi đôi với Chống' — phòng ngừa từ sớm, xử lý nghiêm minh, bảo vệ niềm tin của dân.",
  },
  {
    id: "xay-dung-dang",
    chapter: "CHƯƠNG 4.3.1",
    watermark: "ĐẢNG",
    sealTag: "TIÊN PHONG",
    title: "Xây dựng Đảng & Trách nhiệm Thế hệ trẻ",
    subtitle: "Đảng là đạo đức, là văn minh — ngọn đuốc dẫn dắt Nhà nước",
    image: "/images/xay-dung-dang-hero.webp",
    imageCaption: "Chân dung Chủ tịch Hồ Chí Minh năm 1946",
    theses: [
      "Đảng lãnh đạo bằng đường lối khoa học, sự gương mẫu của đảng viên và kiểm tra nghiêm ngặt.",
      "Thực hiện nguyên tắc tập trung dân chủ, tự phê bình và phê bình thường xuyên.",
      "Trách nhiệm sinh viên: Đảng viên trẻ gương mẫu học tập, rèn đức luyện tài, kiên định lý luận.",
    ],
    keyTakeaway: "Đảng phải luôn trong sạch, vững mạnh để xứng đáng là người lãnh đạo, người đầy tớ trung thành.",
  },
  {
    id: "xay-dung-nha-nuoc",
    chapter: "CHƯƠNG 4.3.2",
    watermark: "BỘ MÁY",
    sealTag: "CÔNG BỘC",
    title: "Xây dựng Nhà nước & Ba nhánh Quyền lực",
    subtitle: "Đảng lãnh đạo — Nhà nước quản lý — Nhân dân làm chủ",
    image: "/images/xay-dung-nha-nuoc-hero.webp",
    imageCaption: "Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình (2/9/1945)",
    theses: [
      "Phân công, phối hợp và kiểm soát chặt chẽ giữa Lập pháp (Quốc hội), Hành pháp (Chính phủ), Tư pháp (Tòa án).",
      "Xây dựng đội ngũ cán bộ: 'Cần, Kiệm, Liêm, Chính, Chí công vô tư'.",
      "Đổi mới phương thức lãnh đạo: Đảng không bao biện làm thay chính quyền.",
    ],
    keyTakeaway: "Quyền lực nhà nước là thống nhất, có sự phân công rành mạch và kiểm soát lẫn nhau chặt chẽ.",
  },
  {
    id: "phong-chong-tham-nhung",
    chapter: "CHƯƠNG 4.3.3",
    watermark: "LIÊM CHÍNH",
    sealTag: "CHÍ CÔNG",
    title: "Phòng, chống tham nhũng, lãng phí, quan liêu",
    subtitle: "Nhận diện 'giặc nội xâm' và hệ giải pháp 4 trụ cột: Dân - Luật - Phạt - Gương",
    image: "/images/nha-nuoc-trong-sach-vung-manh-hero.webp",
    imageCaption: "Kỷ cương và phòng chống giặc nội xâm",
    theses: [
      "Nhận diện 3 căn bệnh nguy hại: Tham ô (chiếm đoạt của công), Lãng phí (không hiệu quả), Quan liêu (xa dân, xa thực tế).",
      "DÂN: Phát huy quyền giám sát của nhân dân; dựa vào dân để kiểm tra, thanh lọc bộ máy.",
      "LUẬT: Hoàn thiện pháp luật, cơ chế kiểm tra giám sát, bịt kín kẽ hở chính sách.",
      "PHẠT: Kỷ luật nghiêm minh, không có vùng cấm, không có ngoại lệ.",
      "GƯƠNG: Cán bộ lãnh đạo phải đi đầu nêu gương Cần, Kiệm, Liêm, Chính.",
    ],
    keyTakeaway: "Chặt một cành cây sâu để cứu cả cái cây — bài học muôn đời về kỷ cương và liêm chính.",
  },
  {
    id: "ket-luan",
    chapter: "TỔNG KẾT HỌC THUẬT",
    watermark: "DI SẢN",
    sealTag: "VĨNH CỬU",
    title: "5 Luận điểm Cốt lõi & Giá trị Thời đại",
    subtitle: "Đúc kết từ công trình nghiên cứu và ý nghĩa xây dựng Nhà nước hiện nay",
    image: "/images/can-bo-phuc-vu-nhan-dan.webp",
    imageCaption: "Chủ tịch Hồ Chí Minh gặp gỡ nhân dân và kiều bào năm 1946",
    theses: PRESENTATION_CONTENT.conclusion.summaryBullets,
    keyTakeaway: PRESENTATION_CONTENT.conclusion.finalQuote.text,
  },
];

export default function PresentationModeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playSubtleClick();
        onClose();
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        playPageTurn();
        setCurrentSlide((prev) => Math.min(SLIDES.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        playPageTurn();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleFullscreen = () => {
    playSubtleClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleGoToSlide = (idx: number) => {
    playPageTurn();
    setCurrentSlide(idx);
  };

  const handlePrevSlide = () => {
    playPageTurn();
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    playPageTurn();
    setCurrentSlide((prev) => Math.min(SLIDES.length - 1, prev + 1));
  };

  if (!isOpen) return null;

  const slide = SLIDES[currentSlide];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#120F0E] text-paper-light flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 select-none overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div
        className="absolute top-1/2 right-6 -translate-y-1/2 select-none pointer-events-none font-serif font-black text-[120px] sm:text-[200px] md:text-[280px] text-accent/[0.04] leading-none tracking-tighter"
        aria-hidden="true"
      >
        {slide.watermark}
      </div>

      {/* Traditional Corner Accents (Fine Brass Line Art) */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-accent/30 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded bg-primary text-paper-light flex items-center justify-center font-serif font-black text-sm shadow-sm border border-accent/40">
            ★
          </span>
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-widest block">
              BẢN TRÌNH CHIẾU BIÊN TẬP DI SẢN (EDITORIAL DECK)
            </span>
            <span className="font-serif text-sm text-paper-light font-bold">
              {slide.chapter} • Trang {currentSlide + 1} / {SLIDES.length}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg border border-accent/30 hover:bg-dark-surface text-accent-light transition-colors"
            aria-label="Bật/Tắt toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-accent/30 hover:bg-primary/30 text-paper-light transition-colors"
            aria-label="Thoát chế độ thuyết trình (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-4 sm:py-6 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Slide Text Info (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent-light font-mono text-xs font-bold uppercase tracking-wider">
                {slide.chapter}
              </span>
              {/* Slender Vertical Seal Tag */}
              <span className="px-2 py-0.5 rounded bg-primary/40 border border-accent/40 text-accent-light font-serif text-[11px] font-bold tracking-widest uppercase">
                {slide.sealTag}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-paper-light leading-tight">
              {slide.title}
            </h2>
            <p className="font-serif italic text-base sm:text-xl text-accent-light/90">
              {slide.subtitle}
            </p>

            {/* Quote if present */}
            {slide.highlightQuote && (
              <div className="p-4 rounded-xl bg-[#1C1715] border-l-4 border-primary border-t border-r border-b border-accent/25 my-3">
                <p className="font-serif italic text-sm sm:text-base text-paper-light/90 leading-relaxed">
                  &ldquo;{slide.highlightQuote.text}&rdquo;
                </p>
                <span className="block mt-1 text-right font-serif text-xs text-accent-light font-bold">
                  — {slide.highlightQuote.author}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Historical Archival Image Plate (4 cols) */}
          {slide.image && (
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-xl border-2 border-accent/40 bg-black/60 shadow-xl group">
                <img
                  src={slide.image}
                  alt={slide.imageCaption || slide.title}
                  className="w-full h-44 sm:h-52 object-cover object-center filter sepia-[0.08] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none">
                  <span className="font-serif font-bold text-accent-light drop-shadow">
                    {slide.imageCaption}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Theses Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {slide.theses.map((t, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-[#1E1816] border border-accent/25 flex items-start gap-3 shadow-sm"
            >
              <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-accent/20 border border-accent/40 text-accent-light font-mono text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="font-sans text-xs sm:text-sm text-paper-light/90 leading-relaxed">
                {t}
              </p>
            </div>
          ))}
        </div>

        {/* Key Takeaway Banner */}
        <div className="p-3.5 rounded-xl bg-primary/20 border border-primary/40 flex items-center gap-3">
          <Quote className="w-5 h-5 text-accent-light flex-shrink-0" />
          <p className="font-serif text-xs sm:text-sm font-semibold text-accent-light">
            {slide.keyTakeaway}
          </p>
        </div>
      </div>

      {/* Bottom Navigation Controls & Timeline */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-accent/30 pt-4">
        {/* Slide Progress Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleGoToSlide(idx)}
              className={`transition-all rounded-full ${
                currentSlide === idx
                  ? "w-8 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-accent/30 hover:bg-accent/60"
              }`}
              aria-label={`Trang ${idx + 1}: ${s.chapter}`}
            />
          ))}
        </div>

        {/* Key Shortcuts Hint */}
        <div className="hidden md:flex items-center gap-3 text-xs font-mono text-paper-dark/70">
          <span>Phím mũi tên / Phím cách để chuyển trang</span>
          <span>•</span>
          <span>Phím Esc để thoát</span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs font-mono font-bold transition-all ${
              currentSlide === 0
                ? "border-accent/20 text-paper-dark/40 cursor-not-allowed"
                : "border-accent/40 bg-dark-surface hover:bg-accent/20 text-paper-light"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Trước
          </button>

          <button
            onClick={handleNextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border text-xs font-mono font-bold transition-all ${
              currentSlide === SLIDES.length - 1
                ? "border-accent/20 text-paper-dark/40 cursor-not-allowed"
                : "border-primary bg-primary hover:bg-primary-dark text-paper-light shadow-md"
            }`}
          >
            Sau
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}