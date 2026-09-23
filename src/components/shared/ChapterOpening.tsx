/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";
import { getAssetPath } from "@/lib/assets";

interface ChapterOpeningProps {
  number: string;
  title: string;
  subtitle?: string;
  lead?: string;
  image: string;
  imageAlt: string;
  caption: string;
  source: string;
  theme?: "light" | "dark";
  imageSide?: "left" | "right";
  eyebrow?: string;
}

export default function ChapterOpening({
  number,
  title,
  subtitle,
  lead,
  image,
  imageAlt,
  caption,
  source,
  theme = "light",
  imageSide = "left",
  eyebrow = "TƯ TƯỞNG HỒ CHÍ MINH",
}: ChapterOpeningProps) {
  const isDark = theme === "dark";
  const imageFirst = imageSide === "left";

  return (
    <header
      className={`chapter-opening ${isDark ? "chapter-opening--dark" : "chapter-opening--light"}`}
    >
      <EditorialReveal
        className={`chapter-opening__media ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
      >
        <img src={getAssetPath(image)} alt={imageAlt} className="chapter-opening__image" />
        <div className="chapter-opening__veil" />
        <div className="chapter-opening__index" aria-hidden="true">
          {number}
        </div>
        <div className="chapter-opening__caption">
          <p>{caption}</p>
          <span>[ {source} ]</span>
        </div>
      </EditorialReveal>

      <EditorialReveal
        delay={80}
        className={`chapter-opening__copy ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="chapter-opening__breadcrumb">
          <span>CHƯƠNG 4</span>
          <i />
          <span>MỤC {number}</span>
        </div>
        <p className="chapter-opening__eyebrow">{eyebrow}</p>
        <strong className="chapter-opening__number">{number}</strong>
        <h2>{title}</h2>
        {subtitle && <p className="chapter-opening__subtitle">{subtitle}</p>}
        {lead && <p className="chapter-opening__lead">{lead}</p>}
        <div className="chapter-opening__rule">
          <span>DI SẢN TƯ TƯỞNG</span>
          <b>1945—2026</b>
        </div>
      </EditorialReveal>
    </header>
  );
}
