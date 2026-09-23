"use client";

import React, { useEffect, useState } from "react";
import { Copy, Check, BookMarked, X } from "lucide-react";

export default function CitationToolModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const citations = [
    {
      format: "TCVN (Việt Nam)",
      text: "Nhóm Nghiên cứu Tư tưởng Hồ Chí Minh. (2026). Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân (Tạp chí số tương tác). Xuất bản học thuật số.",
    },
    {
      format: "APA 7th Edition",
      text: "Ho Chi Minh Thought Research Group. (2026). Ho Chi Minh's Thought on the State of the People, by the People, and for the People: An Interactive Digital Magazine. Academic Interactive Media.",
    },
    {
      format: "Chicago Manual of Style",
      text: "Ho Chi Minh Thought Research Group. 2026. \"Ho Chi Minh's Thought on the State of the People, by the People, and for the People.\" Interactive Digital Exhibition.",
    },
  ];

  const handleCopy = (format: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-paper-light border-2 border-accent/40 rounded-2xl p-6 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-accent/30">
          <div className="flex items-center gap-2.5">
            <BookMarked className="w-5 h-5 text-primary" />
            <h4 className="font-serif text-xl font-bold text-primary">
              Trích dẫn Công trình Nghiên cứu
            </h4>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng công cụ trích dẫn"
            className="p-1.5 rounded-lg text-ink-muted hover:text-primary hover:bg-paper transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
          Sao chép định dạng trích dẫn chuẩn cho tiểu luận, luận văn, bài báo khoa học hoặc báo cáo chuyên đề:
        </p>

        <div className="space-y-3">
          {citations.map((c) => (
            <div
              key={c.format}
              className="p-3.5 rounded-xl bg-paper border border-accent/30 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase text-accent-dark">
                  {c.format}
                </span>
                <button
                  onClick={() => handleCopy(c.format, c.text)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-paper-light border border-accent/30 hover:border-primary text-primary text-xs font-mono font-medium transition-colors"
                >
                  {copiedFormat === c.format ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-ink select-all">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
