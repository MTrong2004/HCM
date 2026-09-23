/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Maximize2, X, AlertCircle } from "lucide-react";
import { playSubtleClick, playSwoosh } from "@/lib/sound-effects";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { getAssetPath } from "@/lib/assets";

interface AssetPlaceholderProps {
  filename: string;
  aspectRatio?: "16:9" | "4:3" | "3:2" | "1:1";
  minResolution?: string;
  description: string;
  className?: string;
  caption?: string;
  sourceReference?: string;
  theme?: "light" | "dark";
  illustrationOnly?: boolean;
}

function HistoricalIllustration({
  filename,
  isDark,
}: {
  filename: string;
  isDark: boolean;
}) {
  const strokeColor = isDark ? "#DEC285" : "#8B1E1E";
  const accentColor = isDark ? "#C6A15B" : "#C6A15B";
  const fillColor = isDark ? "rgba(198, 161, 91, 0.08)" : "rgba(139, 30, 30, 0.05)";

  if (filename.includes("dan-chu") || filename.includes("tong-tuyen-cu")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Minh họa tổng tuyển cử năm 1946"
      >
        <rect x="130" y="70" width="140" height="110" rx="3" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
        <rect x="120" y="60" width="160" height="14" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
        <rect x="175" y="64" width="50" height="6" rx="2" fill={strokeColor} />
        {/* Voting ballot */}
        <path d="M185 30 L215 30 L210 68 L180 68 Z" stroke={accentColor} strokeWidth="1.5" fill={isDark ? "#241E1C" : "#FAF6ED"} />
        <path d="M190 42 L205 42" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M190 50 L202 50" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        {/* Ballot star */}
        <polygon points="200,95 204,107 217,107 206,115 210,127 200,119 190,127 194,115 183,107 196,107" fill={accentColor} />
        <text x="200" y="155" textAnchor="middle" fill={strokeColor} fontSize="14" className="font-serif font-bold" letterSpacing="3">6 - 1 - 1946</text>
        <text x="200" y="172" textAnchor="middle" fill={accentColor} fontSize="9" className="font-sans" letterSpacing="1">TỔNG TUYỂN CỬ ĐẦU TIÊN</text>
        <path d="M100 160 C90 120 100 80 125 65" stroke={accentColor} strokeWidth="1.25" strokeDasharray="2 3" />
        <path d="M300 160 C310 120 300 80 275 65" stroke={accentColor} strokeWidth="1.25" strokeDasharray="2 3" />
      </svg>
    );
  }

  if (filename.includes("can-bo") || filename.includes("phuc-vu")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Minh họa cán bộ phục vụ nhân dân"
      >
        <circle cx="200" cy="110" r="75" stroke={accentColor} strokeWidth="1.25" strokeDasharray="3 3" fill={fillColor} />
        <circle cx="200" cy="90" r="22" stroke={strokeColor} strokeWidth="1.5" />
        <path d="M165 140 C165 120 180 115 200 115 C220 115 235 120 235 140" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="130" cy="105" r="15" stroke={accentColor} strokeWidth="1.25" />
        <path d="M110 145 C110 130 120 125 130 125 C140 125 150 130 150 145" stroke={accentColor} strokeWidth="1.25" />
        <circle cx="270" cy="105" r="15" stroke={accentColor} strokeWidth="1.25" />
        <path d="M250 145 C250 130 260 125 270 125 C280 125 290 130 290 145" stroke={accentColor} strokeWidth="1.25" />
        <text x="200" y="175" textAnchor="middle" fill={strokeColor} fontSize="11" className="font-serif italic">Cán bộ là người đầy tớ trung thành của nhân dân</text>
      </svg>
    );
  }

  if (filename.includes("phap-quyen") || filename.includes("hien-phap") || filename.includes("thuong-ton")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Minh họa biểu tượng hiến pháp"
      >
        <rect x="140" y="35" width="120" height="150" rx="3" stroke={strokeColor} strokeWidth="1.5" fill={isDark ? "#1C1715" : "#FAF6ED"} />
        <rect x="148" y="43" width="104" height="134" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" fill="none" />
        <polygon points="200,60 203,69 212,69 205,75 208,84 200,78 192,84 195,75 188,69 197,69" fill={accentColor} />
        <text x="200" y="102" textAnchor="middle" fill={strokeColor} fontSize="11" className="font-serif font-bold" letterSpacing="1">HIẾN PHÁP</text>
        <text x="200" y="118" textAnchor="middle" fill={accentColor} fontSize="9" className="font-serif font-bold" letterSpacing="2">NĂM 1946</text>
        <line x1="230" y1="175" x2="280" y2="125" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="280" y1="125" x2="288" y2="117" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (filename.includes("trong-sach")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Minh họa biểu tượng liêm chính"
      >
        <path d="M200 45 L250 65 V120 C250 155 200 175 200 175 C200 175 150 155 150 120 V65 Z" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
        <line x1="200" y1="75" x2="200" y2="135" stroke={accentColor} strokeWidth="1.5" />
        <line x1="175" y1="90" x2="225" y2="90" stroke={accentColor} strokeWidth="1.5" />
        <path d="M175 90 L168 112 H182 Z" stroke={strokeColor} strokeWidth="1.2" fill={fillColor} />
        <path d="M225 90 L218 112 H232 Z" stroke={strokeColor} strokeWidth="1.2" fill={fillColor} />
        <text x="200" y="150" textAnchor="middle" fill={accentColor} fontSize="8" className="font-sans" letterSpacing="1">LIÊM CHÍNH</text>
      </svg>
    );
  }

  if (filename.includes("xay-dung-dang")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Minh họa văn kiện đường lối"
      >
        <circle cx="200" cy="90" r="45" stroke={accentColor} strokeWidth="1" strokeDasharray="3 3" fill={fillColor} />
        <path d="M192 110 L196 150 H204 L208 110 Z" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
        <path d="M200 70 C210 80 215 95 200 110 C185 95 190 80 200 70 Z" stroke={accentColor} strokeWidth="1.5" fill="rgba(198, 161, 91, 0.2)" />
        <rect x="130" y="155" width="140" height="25" rx="3" stroke={strokeColor} strokeWidth="1.25" fill={isDark ? "#241E1C" : "#FAF6ED"} />
        <text x="200" y="171" textAnchor="middle" fill={strokeColor} fontSize="10" className="font-serif font-bold" letterSpacing="1">VĂN KIỆN ĐƯỜNG LỐI</text>
      </svg>
    );
  }

  // Default / National Assembly Architecture
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full max-h-48 max-w-sm mx-auto select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Minh họa biểu tượng nghị trường"
    >
      <rect x="110" y="140" width="180" height="30" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
      {[130, 155, 180, 205, 230, 255].map((x, i) => (
        <line key={i} x1={x} y1="95" x2={x} y2="140" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
      ))}
      <polygon points="200,60 100,95 300,95" stroke={strokeColor} strokeWidth="1.5" fill={isDark ? "#241E1C" : "#FAF6ED"} />
      <polygon points="200,75 203,82 210,82 204,87 207,94 200,89 193,94 196,87 190,82 197,82" fill={accentColor} />
      <text x="200" y="160" textAnchor="middle" fill={strokeColor} fontSize="9" className="font-serif font-bold" letterSpacing="2">QUỐC HỘI VIỆT NAM</text>
    </svg>
  );
}

export default function AssetPlaceholder({
  filename,
  aspectRatio = "16:9",
  minResolution = "1920 × 1080 px",
  description,
  className = "",
  caption,
  sourceReference,
  theme = "light",
  illustrationOnly = false,
}: AssetPlaceholderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(illustrationOnly);
  const isDark = theme === "dark";

  const handleOpenModal = () => {
    playSwoosh();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    playSubtleClick();
    setModalOpen(false);
  };

  return (
    <>
      <EditorialReveal as="figure" className={`my-8 sm:my-10 w-full group ${className}`}>
        <div
          className={`relative w-full rounded-lg border ${
            isDark
              ? "border-accent/30 bg-dark-surface/70"
              : "border-accent/30 bg-paper-light/90 shadow-sm"
          } overflow-hidden p-4 sm:p-5`}
        >
          {/* Top Editorial Utility Line */}
          <div className="w-full flex items-center justify-between pb-2.5 mb-3 border-b border-accent/20 z-10">
            <span className="font-mono text-xs text-accent-dark font-medium uppercase tracking-wider">
              {caption || "Tư liệu minh họa"}
            </span>

            <button
              onClick={handleOpenModal}
              className={`p-1.5 rounded transition-colors ${
                isDark
                  ? "text-accent-light/80 hover:text-accent-light hover:bg-dark-surface"
                  : "text-ink-muted hover:text-primary hover:bg-paper-dark/30"
              }`}
              aria-label="Phóng to ảnh"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Main Visual: Verified Photographic Asset or Editorial Illustration Fallback */}
          <div className="relative w-full flex flex-col items-center justify-center">
            {!imgError ? (
              <div
                className="relative w-full overflow-hidden rounded border border-accent/30 bg-black/40 cursor-pointer"
                onClick={handleOpenModal}
              >
                <img
                  src={getAssetPath(`/images/${filename}`)}
                  alt={caption || description}
                  className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-cover object-center filter sepia-[0.06] contrast-[1.04] brightness-[0.98] group-hover:scale-[1.015] transition-transform duration-500"
                  onError={() => setImgError(true)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {caption && (
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-1 pointer-events-none">
                    <span className="font-serif font-bold text-xs sm:text-sm text-accent-light drop-shadow">
                      {caption}
                    </span>
                    {sourceReference && (
                      <span className="font-mono text-[10px] text-white/90 bg-black/60 px-1.5 py-0.5 rounded border border-white/20">
                        {sourceReference}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full py-4 text-center">
                {/* Truthful Editorial Fallback Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-accent/10 border border-accent/30 text-accent-dark font-serif text-xs italic mb-4">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Minh họa biên tập — chưa có ảnh tư liệu được xác minh</span>
                </div>
                <HistoricalIllustration filename={filename} isDark={isDark} />
              </div>
            )}

            {description && (
              <p
                className={`mt-3 font-serif text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed text-center ${
                  isDark ? "text-paper-dark" : "text-ink-muted"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Authentic Documentary Figcaption */}
        {(caption || sourceReference) && (
          <figcaption
            className={`mt-2.5 text-xs font-sans flex flex-wrap items-center justify-between gap-1 px-1 ${
              isDark ? "text-paper-dark/70" : "text-ink-muted"
            }`}
          >
            {caption && <span>{caption}</span>}
            {sourceReference && (
              <span className="italic">Nguồn: {sourceReference}</span>
            )}
          </figcaption>
        )}
      </EditorialReveal>

      {/* Modal Inspection View */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1A1513] text-paper-light border border-accent/40 rounded-xl p-5 sm:p-7 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-accent/25">
              <h4 className="font-serif text-base sm:text-lg font-bold text-accent-light">
                {caption || "Tư liệu minh họa"}
              </h4>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded text-paper-dark hover:text-paper-light hover:bg-dark-surface transition-colors"
                aria-label="Đóng bảng tư liệu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 sm:p-5 rounded bg-[#120F0E] border border-accent/20 flex flex-col items-center space-y-3">
              {!imgError ? (
                <div className="relative w-full max-h-[500px] overflow-hidden rounded border border-accent/30 bg-black/90 flex items-center justify-center p-2">
                  <img
                    src={getAssetPath(`/images/${filename}`)}
                    alt={caption || description}
                    className="max-h-[460px] w-auto max-w-full object-contain mx-auto"
                  />
                </div>
              ) : (
                <div className="w-full py-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-accent/10 border border-accent/30 text-accent-dark font-serif text-xs italic mb-4">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Minh họa biên tập — chưa có ảnh tư liệu được xác minh</span>
                  </div>
                  <HistoricalIllustration filename={filename} isDark={true} />
                </div>
              )}
              {caption && (
                <h5 className="font-serif text-base font-bold text-accent-light text-center">
                  {caption}
                </h5>
              )}
              {description && (
                <p className="font-sans text-xs sm:text-sm text-paper-dark text-center leading-relaxed max-w-xl">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-accent/15 text-[11px] font-mono text-paper-dark/70">
              <span>{aspectRatio} • {minResolution}</span>
              {sourceReference && (
                <span>
                  Nguồn tư liệu: <span className="text-paper-light">{sourceReference}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
