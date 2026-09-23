"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, RotateCcw, Upload, Sparkles } from "lucide-react";
import { playSubtleClick } from "@/lib/sound-effects";
import { getAssetPath } from "@/lib/assets";

export interface UncleHoVoicePlayerProps {
  id: string;
  quote: string;
  title?: string;
  sourceContext?: string;
  audioSrc?: string;
  className?: string;
}

// Bảng thời lượng chính xác của các tư liệu ghi âm Bác Hồ để tránh hiển thị 0:00 / 0:00
const HISTORICAL_VOICE_DURATIONS: Record<string, number> = {
  "voice-can-bo-day-to": 41,
  "voice-chinh-phu-vi-dan": 62,
  "voice-nang-luc-lam-chu": 50,
  "voice-quyen-bai-mien": 45,
  "voice-quyen-luc-nhan-dan": 47,
  "tuyen-ngon-doc-lap-1945": 520,
};

// 16 thanh tần số âm thanh với hồ sơ âm vực giọng nói ấm áp tự nhiên của Bác
const EQUALIZER_BARS = [
  { minH: 35, maxH: 80, speed: 0.72, delay: 0.05 },
  { minH: 25, maxH: 95, speed: 0.65, delay: 0.12 },
  { minH: 45, maxH: 100, speed: 0.85, delay: 0.02 },
  { minH: 20, maxH: 75, speed: 0.58, delay: 0.18 },
  { minH: 50, maxH: 90, speed: 0.92, delay: 0.08 },
  { minH: 30, maxH: 100, speed: 0.68, delay: 0.22 },
  { minH: 60, maxH: 85, speed: 0.82, delay: 0.04 },
  { minH: 40, maxH: 95, speed: 0.76, delay: 0.15 },
  { minH: 55, maxH: 100, speed: 0.88, delay: 0.1 },
  { minH: 35, maxH: 90, speed: 0.62, delay: 0.25 },
  { minH: 65, maxH: 85, speed: 0.79, delay: 0.07 },
  { minH: 30, maxH: 95, speed: 0.71, delay: 0.16 },
  { minH: 45, maxH: 75, speed: 0.64, delay: 0.2 },
  { minH: 25, maxH: 85, speed: 0.83, delay: 0.11 },
  { minH: 40, maxH: 70, speed: 0.59, delay: 0.27 },
  { minH: 20, maxH: 60, speed: 0.74, delay: 0.14 },
];

export default function UncleHoVoicePlayer({
  id,
  quote,
  title = "Lời dạy của Chủ tịch Hồ Chí Minh",
  sourceContext,
  audioSrc,
  className = "",
}: UncleHoVoicePlayerProps) {
  const initialDuration = HISTORICAL_VOICE_DURATIONS[id] || 0;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasRealAudio, setHasRealAudio] = useState<boolean | null>(initialDuration > 0 ? true : null);
  const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(initialDuration);
  const [useMp3Fallback, setUseMp3Fallback] = useState<boolean>(false);
  const [showMissingNotice, setShowMissingNotice] = useState<boolean>(false);
  const [isLocalEnv, setIsLocalEnv] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Chỉ kích hoạt chức năng nạp file khi ở môi trường Local Development
  useEffect(() => {
    const isLocal =
      process.env.NODE_ENV === "development" ||
      (typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ||
          window.location.hostname.endsWith(".local")));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLocalEnv(isLocal);
  }, []);

  // Đường dẫn tệp âm thanh lịch sử thật bảo đảm chạy đúng cả local lẫn GitHub Pages
  const rawPath =
    audioSrc ||
    (useMp3Fallback ? `/audio/bac-ho/${id}.mp3` : `/audio/bac-ho/${id}.wav`);
  const activeSrc = customAudioUrl || getAssetPath(rawPath);

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTime(0);
  };

  // Dừng phát nếu người dùng bấm nghe một đoạn trích khác
  useEffect(() => {
    const handleGlobalStop = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail && customEvent.detail.id !== id) {
        stopPlayback();
      }
    };

    window.addEventListener("hcm-voice-play", handleGlobalStop);
    return () => {
      window.removeEventListener("hcm-voice-play", handleGlobalStop);
      stopPlayback();
    };
  }, [id]);

  // Khởi tạo và gắn các sự kiện Audio HTML5
  useEffect(() => {
    const audio = new Audio();
    audio.src = activeSrc;
    audio.preload = "metadata";

    const onLoadedMetadata = () => {
      setHasRealAudio(true);
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
      setShowMissingNotice(false);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const onError = () => {
      if (!useMp3Fallback && !customAudioUrl && !audioSrc) {
        setUseMp3Fallback(true);
      } else {
        if (!initialDuration) {
          setHasRealAudio(false);
        }
        setIsPlaying(false);
      }
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
  }, [activeSrc, customAudioUrl, audioSrc, useMp3Fallback, id, initialDuration]);

  // Xử lý nạp file âm thanh riêng ở máy Local
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioUrl(url);
      setHasRealAudio(true);
      setShowMissingNotice(false);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      }, 100);
    }
  };

  const handleTogglePlay = async () => {
    playSubtleClick();

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    if (hasRealAudio === false) {
      setShowMissingNotice(true);
      return;
    }

    window.dispatchEvent(
      new CustomEvent("hcm-voice-play", { detail: { id } })
    );

    setIsLoading(true);

    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
        setShowMissingNotice(false);
      } catch {
        setHasRealAudio(false);
        setIsPlaying(false);
        setIsLoading(false);
        setShowMissingNotice(true);
      }
    }
  };

  const handleReplay = () => {
    playSubtleClick();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  // Tính năng tương tác: Nhấp chuột lên thanh tiến trình để tua âm thanh
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = seekPercent * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-[#d8c8a8] bg-gradient-to-br from-[#fcf9f2] via-[#f7f0e3] to-[#f0e3cb] p-3 sm:p-3.5 shadow-sm transition-all duration-300 ${
        isPlaying
          ? "ring-2 ring-[#7a1818]/60 shadow-[0_6px_20px_rgba(122,24,24,0.12)] border-[#c8aa76]"
          : "hover:border-[#c8b693] hover:shadow-md"
      } ${className}`}
    >
      {/* File input ẩn chỉ dùng khi click nạp file ở Local Dev */}
      {isLocalEnv && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="audio/*"
          className="hidden"
        />
      )}

      {/* Hoa văn sen vàng chìm góc trên bên phải - trang nhã & cổ điển */}
      <div
        className="absolute -top-10 -right-10 w-36 h-36 opacity-15 pointer-events-none select-none text-[#a67c1e]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 0 C45 25 25 45 0 50 C25 55 45 75 50 100 C55 75 75 55 100 50 C75 45 55 25 50 0 Z" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      {/* 1. HEADER CARD: BIỂU TƯỢNG MICRO CỔ ĐIỂN BA ĐÌNH, TIÊU ĐỀ & NÚT BẤM */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 relative z-10 mb-2">
        <div className="flex items-center gap-3 min-w-0">
          {/* ICON VOICE MỚI: MICRO PHÁT THANH LỊCH SỬ BA ĐÌNH 1945 VỚI VÒNG SÓNG ÂM THANH DÁT VÀNG */}
          <div className="relative flex-shrink-0">
            {/* Hiệu ứng hào quang sóng âm lan tỏa khi đang phát */}
            {isPlaying && (
              <span className="absolute -inset-1 rounded-full bg-[#d4af37]/35 animate-ping opacity-75 pointer-events-none" />
            )}

            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
                isPlaying
                  ? "bg-gradient-to-br from-[#801212] via-[#660d0d] to-[#400505] border-[#ffd700] ring-2 ring-[#ffd700]/50 text-[#ffd700]"
                  : "bg-gradient-to-br from-[#7a1818] to-[#540c0c] border-[#d4af37]/60 text-[#fcedc7]"
              }`}
            >
              {/* Biểu tượng Vintage Ba Đình Broadcast Ribbon Microphone với sóng âm mạ vàng */}
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 drop-shadow-xs"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lưới micro cổ điển */}
                <rect
                  x="11"
                  y="6"
                  width="10"
                  height="14"
                  rx="5"
                  className={isPlaying ? "fill-[#ffd700]" : "fill-current"}
                />
                {/* Vạch ngang đặc trưng của mic phát thanh */}
                <path
                  d="M12 10H20M12 13H20M12 16H20"
                  stroke="#540c0c"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                {/* Khung đỡ kim loại cong chữ U */}
                <path
                  d="M8.5 14C8.5 18.1421 11.8579 21.5 16 21.5C20.1421 21.5 23.5 18.1421 23.5 14"
                  stroke={isPlaying ? "#ffd700" : "#fcedc7"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Trục đứng & Chân đế kim loại tròn */}
                <path
                  d="M16 21.5V26M11 26H21"
                  stroke={isPlaying ? "#ffd700" : "#fcedc7"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Sóng phát thanh hai bên lan tỏa (chỉ hiện sáng khi phát) */}
                <path
                  d="M5 11C4 12.8 4 15.2 5 17M27 11C28 12.8 28 15.2 27 17"
                  stroke={isPlaying ? "#ffd700" : "#d4af37"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className={isPlaying ? "opacity-100 animate-pulse" : "opacity-40"}
                />
              </svg>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5">
              <span className="font-mono text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#7a1818] uppercase">
                TƯ LIỆU ÂM THANH LỊCH SỬ
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/25 shadow-2xs">
                <Sparkles className="w-2.5 h-2.5 text-[#9e2424]" />
                <span>GIỌNG NÓI CHỦ TỊCH HỒ CHÍ MINH</span>
              </span>
            </div>
            <h5 className="font-serif font-bold text-xs sm:text-[13.5px] text-ink leading-snug truncate">
              {title}
            </h5>
          </div>
        </div>

        {/* CỤM NÚT ĐIỀU KHIỂN CHÍNH */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Nút Nghe lại (Replay) khi đã nghe một phần */}
          {currentTime > 0 && (
            <button
              type="button"
              onClick={handleReplay}
              title="Phát lại từ đầu"
              className="p-1.5 sm:p-2 rounded-full text-ink-muted hover:text-[#7a1818] hover:bg-[#e8dcbe] transition-colors cursor-pointer focus:outline-none"
              aria-label="Phát lại từ đầu"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* NÚT PHÁT CHÍNH: SANG TRỌNG, ĐẬM CHẤT LỊCH SỬ VỚI VIỀN ĐỒNG MẠ VÀNG */}
          <button
            type="button"
            onClick={handleTogglePlay}
            disabled={isLoading}
            aria-label={isPlaying ? "Tạm dừng đoạn ghi âm" : "Nghe giọng Bác Hồ"}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-serif font-bold transition-all duration-200 cursor-pointer shadow-sm select-none border ${
              isPlaying
                ? "bg-gradient-to-r from-[#6e1313] to-[#8a1c1c] text-[#fff8ea] border-[#ffd700] ring-2 ring-[#ffd700]/60 shadow-[0_4px_15px_rgba(122,24,24,0.3)]"
                : "bg-gradient-to-r from-[#7a1818] to-[#661212] text-[#fff8ea] border-[#d4af37]/60 hover:from-[#8d1c1c] hover:to-[#751616] hover:border-[#ffd700] hover:shadow-md"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
                <span>Tạm dừng</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
                <span>Nghe giọng Bác</span>
              </>
            )}
          </button>

          {/* NÚT TẢI FILE: CHỈ ÁP DỤNG Ở MÔI TRƯỜNG CHỈNH SỬA LOCAL (DEV/LOCAL EDIT) */}
          {isLocalEnv && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="[Chế độ biên tập nội bộ] Tải lên tệp ghi âm giọng Bác (.mp3 / .wav) từ máy bạn"
              className="p-1.5 sm:p-2 rounded-full bg-[#e8dcbe] hover:bg-[#deceab] border border-[#c5ad7c] text-[#7a1818] transition-all cursor-pointer text-xs flex items-center justify-center hover:scale-105"
              aria-label="Tải lên tệp ghi âm giọng Bác từ máy tính"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. NỘI DUNG CÂU NÓI CỦA BÁC ĐƯỢC ĐẶT TRANG TRỌNG */}
      <div className="relative pl-3 border-l-2 border-[#8b1e1e] my-2">
        <p className="font-serif text-[12px] sm:text-[13px] italic text-ink font-medium leading-relaxed">
          &ldquo;{quote.replace(/\(VOICE\)/gi, "").trim()}&rdquo;
        </p>
        {sourceContext && (
          <span className="block mt-1 text-[10px] text-ink-muted font-sans not-italic font-medium">
            — {sourceContext}
          </span>
        )}
      </div>

      {/* Thông báo nếu chưa có file âm thanh thật */}
      {showMissingNotice && (
        <div className="my-2 p-2.5 bg-[#fdf2e9] border border-[#e0b488] rounded-xl text-xs text-[#7a3200] space-y-1.5 animate-fadeIn">
          <div className="font-bold flex items-center gap-1.5 text-[#8a3800]">
            <Volume2 className="w-4 h-4 text-[#8a3800]" />
            <span>Tư liệu lịch sử & Bản ghi âm:</span>
          </div>
          <p className="leading-relaxed">
            Câu nói này được ghi lại trong Văn kiện lưu trữ (1945 - 1949). Để bảo đảm tính trang nghiêm của Lãnh tụ, hệ thống **tuyệt đối không sử dụng giọng đọc máy nhân tạo (AI/TTS)**.
          </p>
          {isLocalEnv && (
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#f0cbb0]">
              <span className="text-[11px] font-medium">Nạp file giọng Bác từ máy local:</span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 bg-[#7a1818] text-[#fff8ea] rounded font-bold text-[11px] hover:bg-[#631313] transition-colors cursor-pointer"
              >
                Chọn tệp MP3/WAV
              </button>
              <span className="text-[10px] text-ink-muted">hoặc lưu tại <code className="bg-[#ebd8c2] px-1 py-0.5 rounded font-mono">public/audio/bac-ho/{id}.wav</code></span>
            </div>
          )}
        </div>
      )}

      {/* 3. ANIMATION SÓNG ÂM QUANG PHỔ EQUALIZER 16 TẦN SỐ & THANH TIẾN TRÌNH TƯƠNG TÁC */}
      <div className="mt-2 pt-2 border-t border-[#dfd0ba] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 select-none">
        
        {/* Cụm sóng âm & Seeker Bar */}
        <div className="flex-1 flex items-center gap-3">
          
          {/* EQUALIZER HOẠT HỌA 16 TẦN SỐ CHUYÊN NGHIỆP - RỰC RỠ SỐNG ĐỘNG KHI PHÁT */}
          <div
            className="flex items-end gap-[2px] h-6 px-1.5 py-0.5 bg-[#ebe0cb]/60 rounded-md border border-[#dac8a8]/70 flex-shrink-0"
            title={isPlaying ? "Phổ tần số âm thanh giọng Bác đang phát" : "Sóng âm tư liệu lịch sử"}
            aria-hidden="true"
          >
            {EQUALIZER_BARS.map((bar, index) => {
              return (
                <span
                  key={index}
                  className={`w-[2.5px] rounded-full transition-all ${
                    isPlaying
                      ? "bg-gradient-to-t from-[#8b1e1e] via-[#b83828] to-[#d4af37]"
                      : "bg-[#8b1e1e]/35"
                  }`}
                  style={{
                    height: isPlaying
                      ? `${bar.maxH}%`
                      : `${bar.minH * 0.4}%`,
                    animation: isPlaying
                      ? `hcmSpectrum ${bar.speed}s ease-in-out infinite alternate ${bar.delay}s`
                      : "none",
                  }}
                />
              );
            })}
          </div>

          {/* THANH TIẾN TRÌNH CÓ THỂ NHẤP CHUỘT TUA (INTERACTIVE SCRUBBER) */}
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            className="flex-1 h-2 bg-[#e2d5be] hover:bg-[#d8c8ab] rounded-full overflow-hidden cursor-pointer relative transition-colors group/bar"
            title="Nhấp chuột để tua đoạn ghi âm"
            role="progressbar"
            aria-valuenow={Math.round(progressPercent)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* Lớp nền gradient tiến độ phát */}
            <div
              className="h-full bg-gradient-to-r from-[#7a1818] via-[#a82a2a] to-[#d4af37] rounded-full transition-all duration-100 relative"
              style={{ width: `${progressPercent}%` }}
            >
              {/* Con trỏ tua sáng ở đầu thanh tiến trình */}
              {isPlaying && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ffd700] ring-2 ring-[#7a1818] shadow-xs" />
              )}
            </div>
          </div>
        </div>

        {/* Thông tin trạng thái và bộ đếm thời lượng */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] font-mono text-ink-muted">
          <span className="flex items-center gap-1 font-sans text-[10.5px]">
            {isPlaying ? (
              <span className="flex items-center gap-1 text-[#8b1e1e] font-semibold animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b1e1e]" />
                Đang phát bản ghi lịch sử
              </span>
            ) : hasRealAudio ? (
              <span className="text-[#59442a]">Tư liệu sẵn sàng</span>
            ) : (
              <span className="text-amber-800">Bản ghi lưu trữ</span>
            )}
          </span>

          <span className="text-ink font-semibold bg-[#e8dcbe]/70 px-2 py-0.5 rounded border border-[#dac8a8]/60 shadow-2xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Style nhúng Animation Keyframe chuyên biệt cho Equalizer */}
      <style jsx>{`
        @keyframes hcmSpectrum {
          0% {
            height: 15%;
            opacity: 0.6;
          }
          50% {
            height: 95%;
            opacity: 1;
            filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.8));
          }
          100% {
            height: 35%;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
