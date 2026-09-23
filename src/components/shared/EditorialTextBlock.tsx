"use client";

import React from "react";
import PullQuote from "./PullQuote";
import EditorialReveal from "./EditorialReveal";

export interface EditorialTextBlockProps {
  title: string;
  description?: string;
  points?: string[];
  subSections?: {
    title: string;
    content: string;
    bullets?: string[];
  }[];
  quote?: {
    text: string;
    author: string;
    context?: string;
  };
  theme?: "light" | "dark";
  className?: string;
}

export default function EditorialTextBlock({
  title,
  description,
  points,
  subSections,
  quote,
  theme = "light",
  className = "",
}: EditorialTextBlockProps) {
  const isDark = theme === "dark";

  return (
    <EditorialReveal
      className={`my-10 mx-auto w-full max-w-prose lg:max-w-3xl space-y-6 leading-relaxed ${className}`}
    >
      {/* Title */}
      <h3
        className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight pb-3 border-b ${
          isDark
            ? "text-paper-light border-accent/20"
            : "text-primary border-accent/30"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p
          className={`font-sans text-[15px] sm:text-base lg:text-[1.05rem] leading-[1.8] ${
            isDark ? "text-paper-light/90" : "text-ink"
          }`}
        >
          {description}
        </p>
      )}

      {/* Key Points */}
      {points && points.length > 0 && (
        <ul className="space-y-3.5 my-6 pl-1">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 group">
              <span
                className={`flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-none rotate-45 ${
                  isDark ? "bg-accent-light" : "bg-primary"
                }`}
                aria-hidden="true"
              />
              <span
                className={`font-sans text-[15px] sm:text-base leading-[1.75] ${
                  isDark ? "text-paper-light/85" : "text-ink/90"
                }`}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Subsections: Flowing Editorial Architecture without Card Fatigue */}
      {subSections && subSections.length > 0 && (
        <div className="space-y-6 pt-3">
          {subSections.map((sub, idx) => (
            <div
              key={idx}
              className={`py-4 border-t ${
                isDark ? "border-dark-border/80" : "border-accent/25"
              }`}
            >
              <h4
                className={`font-serif text-lg sm:text-xl font-bold mb-2.5 ${
                  isDark ? "text-accent-light" : "text-primary-dark"
                }`}
              >
                {sub.title}
              </h4>
              <p
                className={`font-sans text-[15px] sm:text-base leading-[1.8] mb-3.5 ${
                  isDark ? "text-paper-light/90" : "text-ink"
                }`}
              >
                {sub.content}
              </p>
              {sub.bullets && sub.bullets.length > 0 && (
                <ul className="space-y-2 pl-3 border-l-2 border-accent/35 my-2">
                  {sub.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm sm:text-[15px] leading-relaxed"
                    >
                      <span
                        className={
                          isDark ? "text-paper-light/80" : "text-ink-muted"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Embedded Quote */}
      {quote && (
        <PullQuote
          quote={quote.text}
          author={quote.author}
          context={quote.context}
          theme={theme}
        />
      )}
    </EditorialReveal>
  );
}
