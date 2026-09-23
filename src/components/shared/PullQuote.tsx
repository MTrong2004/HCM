"use client";

import React from "react";

interface PullQuoteProps {
  quote: string;
  author: string;
  context?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function PullQuote({
  quote,
  author,
  context,
  className = "",
  theme = "light",
}: PullQuoteProps) {
  const isDark = theme === "dark";

  return (
    <figure
      className={`relative my-8 sm:my-10 pl-5 sm:pl-7 pr-4 sm:pr-6 py-4 sm:py-5 border-l-4 rounded-r-lg border-t border-r border-b ${
        isDark
          ? "bg-dark-surface/60 border-l-accent-light border-accent/25 text-paper-light"
          : "bg-paper-light/70 border-l-primary border-accent/25 text-ink shadow-sm"
      } ${className}`}
    >
      <blockquote className="font-serif text-base sm:text-xl md:text-2xl font-normal italic leading-relaxed tracking-normal">
        “{quote}”
      </blockquote>

      <figcaption className="mt-3.5 flex flex-wrap items-baseline justify-end gap-2 text-right border-t border-accent/20 pt-2.5">
        <cite
          className={`font-serif font-bold not-italic text-sm sm:text-base ${
            isDark ? "text-accent-light" : "text-primary"
          }`}
        >
          — {author}
        </cite>
        {context && (
          <span
            className={`font-sans text-xs sm:text-sm font-normal italic ${
              isDark ? "text-paper-dark/70" : "text-ink-muted"
            }`}
          >
            ({context})
          </span>
        )}
      </figcaption>
    </figure>
  );
}
