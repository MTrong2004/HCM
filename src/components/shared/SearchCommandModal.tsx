"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";

interface SearchItem {
  id: string;
  category: "Chương mục" | "Chuyên đề" | "Trích dẫn" | "Infographic";
  title: string;
  desc: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: "hero",
    category: "Chuyên đề",
    title: "Hiến pháp năm 1946",
    desc: "Mở đầu ấn phẩm với tư liệu Hiến pháp năm 1946 và ba trụ cột hiến định.",
  },
  {
    id: "dan-chu",
    category: "Chương mục",
    title: "4.2.1 Nhà nước dân chủ",
    desc: "Bản chất giai cấp, quyền làm chủ của nhân dân: Của dân, Do dân, Vì dân.",
  },
  {
    id: "dan-chu",
    category: "Infographic",
    title: "Infographic: Của dân – Do dân – Vì dân",
    desc: "Ba trụ cột nền tảng khẳng định quyền lực nhà nước thuộc về toàn thể nhân dân.",
  },
  {
    id: "phap-quyen",
    category: "Chương mục",
    title: "4.2.2 Nhà nước pháp quyền",
    desc: "Nhà nước hợp hiến, hợp pháp, thượng tôn pháp luật và pháp quyền nhân nghĩa.",
  },
  {
    id: "phap-quyen",
    category: "Chuyên đề",
    title: "Pháp quyền nhân nghĩa",
    desc: "Sự nghiêm minh của pháp luật gắn với lòng nhân ái và quyền con người.",
  },
  {
    id: "phap-quyen",
    category: "Infographic",
    title: "Infographic: Mô hình Ba tầng Pháp quyền",
    desc: "Hợp hiến, Hợp pháp -> Thượng tôn Pháp luật -> Pháp quyền Nhân nghĩa.",
  },
  {
    id: "trong-sach-vung-manh",
    category: "Chương mục",
    title: "4.2.3 Nhà nước trong sạch, vững mạnh",
    desc: "Kiểm soát quyền lực, nhận diện 3 căn bệnh tiêu cực: Tham ô, Lãng phí, Quan liêu.",
  },
  {
    id: "trong-sach-vung-manh",
    category: "Chuyên đề",
    title: "Kiểm soát quyền lực",
    desc: "Cơ chế kiểm soát quyền lực với Nhân dân là chủ thể tối cao.",
  },
  {
    id: "xay-dung-dang",
    category: "Chương mục",
    title: "4.3.1 Xây dựng Đảng & Trách nhiệm sinh viên",
    desc: "Phương diện đường lối, tổ chức, chỉnh đốn Đảng và sứ mệnh của trí thức trẻ.",
  },
  {
    id: "xay-dung-nha-nuoc",
    category: "Chương mục",
    title: "4.3.2 Xây dựng Nhà nước & Đổi mới lãnh đạo",
    desc: "Phân công, phối hợp 3 nhánh quyền lực: Lập pháp, Hành pháp, Tư pháp.",
  },
  {
    id: "ket-luan",
    category: "Chuyên đề",
    title: "5.0 Ứng dụng AI Trong Bài Thuyết Trình Của Nhóm",
    desc: "Báo cáo công cụ AI (Antigravity, Copilot Chat, Gemini Notebook, ChatGPT) và quy trình đối chiếu giáo trình.",
  },
];

export default function SearchCommandModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleSelect = (id: string) => {
    scrollTo(id);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-paper-light border-2 border-accent/40 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-accent/30 bg-paper">
          <Search className="w-5 h-5 text-accent-dark flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm chương, luận điểm, chuyên đề, infographic..."
            className="w-full bg-transparent font-sans text-base text-ink placeholder:text-ink-muted/60 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="p-1 text-ink-muted hover:text-ink">
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded border border-accent/30 text-ink-muted bg-paper-light">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5 divide-y divide-accent/15">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-ink-muted font-sans text-sm">
              Không tìm thấy nội dung phù hợp với &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.id)}
                className="w-full p-3 rounded-xl text-left hover:bg-paper transition-all flex items-start justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-accent/15 text-accent-dark">
                      {item.category}
                    </span>
                    <h5 className="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-primary-dark">
                      {item.title}
                    </h5>
                  </div>
                  <p className="font-sans text-xs text-ink-muted line-clamp-1">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-accent-dark opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1.5 flex-shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-paper border-t border-accent/25 flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <span>{filtered.length} kết quả tìm thấy</span>
          <span>Nhấn để cuộn mượt tới vị trí nội dung</span>
        </div>
      </div>
    </div>
  );
}
