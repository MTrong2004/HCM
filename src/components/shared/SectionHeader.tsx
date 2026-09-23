"use client";

import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  lead?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  lead,
  className = "",
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      {/* Chapter Number Badge */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`inline-block px-3.5 py-1 text-sm font-mono tracking-widest font-semibold uppercase rounded border ${
            isDark
              ? "bg-dark-surface border-accent/40 text-accent-light"
              : "bg-paper-light border-accent/40 text-primary font-bold shadow-sm"
          }`}
        >
          CHƯƠNG {number}
        </span>
        <div
          className={`h-px flex-1 ${
            isDark ? "bg-accent/20" : "bg-accent/30"
          }`}
        />
      </div>

      {/* Main Title */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 ${
          isDark ? "text-paper-light" : "text-primary"
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`font-serif italic text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-6 ${
            isDark ? "text-accent-light/90" : "text-accent-dark"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Lead Paragraph */}
      {lead && (
        <div
          className={`p-6 rounded-lg border-l-4 ${
            isDark
              ? "bg-dark-surface/80 border-accent text-paper-light/90"
              : "bg-paper-light border-primary text-ink shadow-sm"
          }`}
        >
          <p className="font-sans text-base sm:text-lg leading-relaxed font-normal">
            {lead}
          </p>
        </div>
      )}
    </header>
  );
}
