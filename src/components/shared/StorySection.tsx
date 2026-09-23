"use client";

import React, { forwardRef } from "react";

interface StorySectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

const StorySection = forwardRef<HTMLElement, StorySectionProps>(
  ({ id, children, className = "", theme = "light" }, ref) => {
    const isDark = theme === "dark";

    return (
      <section
        id={id}
        ref={ref}
        data-section-id={id}
        className={`relative min-h-screen scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500 overflow-hidden ${
          isDark
            ? "bg-dark-bg text-paper-light bg-dark-texture border-t border-b border-dark-border"
            : "bg-paper text-ink bg-paper-texture border-b border-accent/20"
        } ${className}`}
      >
        <div className="w-full max-w-5xl lg:max-w-6xl mx-auto relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

StorySection.displayName = "StorySection";

export default StorySection;
