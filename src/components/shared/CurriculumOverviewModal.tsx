"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { playSubtleClick } from "@/lib/sound-effects";

interface ChapterCurriculum {
  number: number;
  title: string;
  tagline: string;
  keyPoints: string[];
  isCurrentInteractive: boolean;
}

const CURRICULUM_DATA: ChapterCurriculum[] = [
  {
    number: 1,
    title: "Cơ sở, quá trình hình thành và phát triển Tư tưởng Hồ Chí Minh",
    tagline: "Cội nguồn thực tiễn, tinh hoa văn hóa & các thời kỳ phát triển tư tưởng",
    keyPoints: [
      "Bối cảnh lịch sử Việt Nam cuối thế kỷ XIX đầu thế kỷ XX và phong trào yêu nước tiền bối.",
      "Cơ sở lý luận: Giá trị truyền thống dân tộc, tinh hoa văn hóa phương Đông - phương Tây và Chủ nghĩa Mác - Lênin.",
      "Năm thời kỳ phát triển: từ hình thành tư tưởng cứu nước đến hoàn thiện lý luận cách mạng Việt Nam.",
    ],
    isCurrentInteractive: false,
  },
  {
    number: 2,
    title: "Tư tưởng Hồ Chí Minh về Độc lập dân tộc và Chủ nghĩa xã hội",
    tagline: "Mục tiêu cốt lõi: Độc lập gắn liền tự do, ấm no, hạnh phúc cho toàn dân",
    keyPoints: [
      "Độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm của mọi quốc gia dân tộc.",
      "Cách mạng giải phóng dân tộc phải đi theo con đường cách mạng vô sản và có thể giành thắng lợi trước chính quốc.",
      "Mục tiêu, động lực và các bước đi tất yếu xây dựng chủ nghĩa xã hội ở Việt Nam thời kỳ quá độ.",
    ],
    isCurrentInteractive: false,
  },
  {
    number: 3,
    title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
    tagline: "Hạt nhân lãnh đạo, nhân tố quyết định mọi thắng lợi của cách mạng",
    keyPoints: [
      "Quy luật ra đời đặc thù: Kết hợp Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước.",
      "Bản chất giai cấp công nhân gắn bó máu thịt với lợi ích của nhân dân lao động và dân tộc Việt Nam.",
      "Hệ thống nguyên tắc tổ chức và sinh hoạt Đảng: Tập trung dân chủ, tự phê bình và phê bình, kỷ luật nghiêm minh.",
    ],
    isCurrentInteractive: false,
  },
  {
    number: 4,
    title: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
    tagline: "Chuyên đề trọng tâm số hóa: Bản chất dân chủ, thần linh pháp quyền & liêm chính kiến tạo",
    keyPoints: [
      "Bản chất Nhà nước dân chủ: Nhân dân là chủ thể tối cao, cán bộ là công bộc phụng sự Tổ quốc.",
      "Nhà nước pháp quyền nhân nghĩa: Thượng tôn hiến pháp và pháp luật, kết hợp nhuần nhuyễn Đức trị và Pháp trị.",
      "Kiểm soát quyền lực, phòng chống giặc nội xâm (tham ô, lãng phí, quan liêu) và xây dựng bộ máy tinh gọn, hiệu lực.",
    ],
    isCurrentInteractive: true,
  },
  {
    number: 5,
    title: "Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    tagline: "Đoàn kết là sức mạnh vô địch, cội nguồn thành công của cách mạng",
    keyPoints: [
      "Đại đoàn kết dân tộc là đường lối chiến lược sống còn, không phải sách lược tạm thời.",
      "Nền tảng khối đại đoàn kết: Liên minh giữa giai cấp công nhân với nông dân và đội ngũ trí thức.",
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, nêu cao tinh thần độc lập tự chủ và đoàn kết quốc tế.",
    ],
    isCurrentInteractive: false,
  },
  {
    number: 6,
    title: "Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức, Con người",
    tagline: "Văn hóa soi đường cho quốc dân đi, chuẩn mực Cần - Kiệm - Liêm - Chính",
    keyPoints: [
      "Văn hóa là nền tảng tinh thần của xã hội, soi đường dẫn lối cho sự nghiệp kháng chiến và kiến quốc.",
      "Bốn đức tính căn bản của người cách mạng: Cần, Kiệm, Liêm, Chính, Chí công vô tư.",
      "Chiến lược 'trồng người': Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
    ],
    isCurrentInteractive: false,
  },
];

interface CurriculumOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChapter?: number;
  onStartChapter4: () => void;
}

export default function CurriculumOverviewModal({
  isOpen,
  onClose,
  initialChapter = 4,
  onStartChapter4,
}: CurriculumOverviewModalProps) {
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(initialChapter);
  const [prevInitialChapter, setPrevInitialChapter] = useState(initialChapter);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen && (!prevIsOpen || initialChapter !== prevInitialChapter)) {
    setPrevIsOpen(isOpen);
    setPrevInitialChapter(initialChapter);
    setSelectedChapterNum(initialChapter);
  } else if (!isOpen && prevIsOpen) {
    setPrevIsOpen(false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentChapter =
    CURRICULUM_DATA.find((c) => c.number === selectedChapterNum) || CURRICULUM_DATA[3];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="curriculum-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#fdfaf3] text-[#1a1a1a] rounded-xl border-2 border-[#c5a059] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#4a0d0d] text-[#fbf8f0] border-b border-[#c5a059]/40 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#7a1818] border border-[#d4af37]/60 flex items-center justify-center text-[#ffd700] text-sm font-bold shadow-xs">
              ★
            </span>
            <div>
              <h3
                id="curriculum-modal-title"
                className="font-serif font-bold text-base text-[#ffd700] tracking-wide"
              >
                KHUNG GIÁO TRÌNH TƯ TƯỞNG HỒ CHÍ MINH
              </h3>
              <p className="font-sans text-xs text-[#fbf8f0]/80">
                Chương trình chuẩn Bộ Giáo dục & Đào tạo (Toàn khóa 6 chương)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playSubtleClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#ffd700] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Đóng đề cương giáo trình (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab chọn nhanh 6 chương */}
        <div className="flex overflow-x-auto bg-[#f4ebe0] border-b border-[#e2d5c2] p-2 gap-1.5 no-scrollbar flex-shrink-0">
          {CURRICULUM_DATA.map((ch) => {
            const isSelected = ch.number === selectedChapterNum;
            return (
              <button
                key={ch.number}
                type="button"
                onClick={() => {
                  playSubtleClick();
                  setSelectedChapterNum(ch.number);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-serif font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#7a1818] text-[#ffd700] shadow-xs scale-102"
                    : ch.isCurrentInteractive
                    ? "bg-[#eddcc6] text-[#7a1818] hover:bg-[#e4d1b7]"
                    : "bg-[#fbf9f4] text-[#5c4a3d] hover:bg-[#ede5d6]"
                }`}
              >
                <span>Ch. {ch.number}</span>
                {ch.isCurrentInteractive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a1818] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Chi tiết nội dung chương được chọn */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#7a1818]/15 text-[#7a1818]">
                CHƯƠNG {currentChapter.number}
              </span>
              {currentChapter.isCurrentInteractive && (
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Đang mở chuyên đề số hóa tương tác
                </span>
              )}
            </div>

            <h4 className="font-serif font-bold text-lg sm:text-xl text-[#4a0d0d] leading-snug">
              {currentChapter.title}
            </h4>

            <p className="font-sans text-xs sm:text-sm text-[#6b5847] italic">
              {currentChapter.tagline}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#f8f1e2] border border-[#e5d5be] space-y-2.5">
            <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-[#7a1818]">
              Nội dung & Luận điểm trọng yếu
            </h5>

            <div className="space-y-2">
              {currentChapter.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2d1b11]">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059] text-white font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ghi chú về nền tảng số hóa Chương 4 */}
          <div className="p-4 rounded-lg bg-[#efe5d4] border-l-4 border-[#7a1818] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="font-serif font-bold text-xs sm:text-sm text-[#4a0d0d]">
                {currentChapter.isCurrentInteractive
                  ? "Bạn đang ở trong Chuyên đề số hóa Chương 4"
                  : "Chuyên khảo số hóa hiện tại tập trung chuyên sâu vào Chương 4"}
              </div>
              <p className="text-xs text-[#6b5847]">
                Hệ thống tương tác đa phương tiện, trích dẫn văn kiện gốc và dữ liệu học thuật chuẩn mực.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                playSubtleClick();
                onClose();
                onStartChapter4();
              }}
              className="px-4 py-2 rounded-lg bg-[#7a1818] hover:bg-[#8f1e1e] text-[#ffd700] text-xs font-serif font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer flex-shrink-0"
            >
              <span>Vào học Chương 4</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
