"use client";

import React, { useState } from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function InfographicDangNhaNuocNhanDan() {
  const [selectedBranch, setSelectedBranch] = useState<number>(0);

  const branches = [
    {
      num: "I",
      title: "LẬP PHÁP",
      org: "Quốc hội",
      desc: "Cơ quan đại biểu cao nhất của nhân dân, cơ quan quyền lực nhà nước cao nhất, thực hiện quyền lập hiến, lập pháp và giám sát tối cao.",
      responsibilities: [
        "Ban hành Hiến pháp và luật đồng bộ",
        "Quyết định các vấn đề hệ trọng quốc gia",
        "Giám sát tối cao hoạt động của bộ máy",
      ],
    },
    {
      num: "II",
      title: "HÀNH PHÁP",
      org: "Chính phủ",
      desc: "Cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp, chấp hành Hiến pháp và pháp luật, điều hành phát triển kinh tế - xã hội.",
      responsibilities: [
        "Tổ chức thi hành nghiêm minh pháp luật",
        "Quản trị hành chính công tinh gọn, hiệu lực",
        "Xây dựng đội ngũ công bộc vì dân",
      ],
    },
    {
      num: "III",
      title: "TƯ PHÁP",
      org: "Tòa án & Viện kiểm sát",
      desc: "Cơ quan xét xử, bảo vệ công lý, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa và lợi ích của Nhà nước, nhân dân.",
      responsibilities: [
        "Xét xử độc lập, chỉ tuân theo pháp luật",
        "Bảo đảm tranh tụng dân chủ, công bằng",
        "Thực thi pháp quyền nhân nghĩa, chuẩn xác",
      ],
    },
  ];

  return (
    <EditorialReveal className="my-0.5 p-3 sm:p-4 rounded-lg bg-paper-light/95 border border-accent/30 shadow-2xs text-ink">
      <div className="text-center max-w-2xl mx-auto mb-2">
        <span className="font-mono text-[9.5px] font-bold tracking-widest text-accent-dark uppercase block mb-0.5">
          CƠ CHẾ VẬN HÀNH ĐỒNG BỘ
        </span>
        <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
          Đảng Lãnh đạo – Nhà nước Quản lý – Nhân dân Làm chủ
        </h4>
        <p className="font-sans text-[11px] text-ink-muted mt-0.5">
          Sự phân công, phối hợp và kiểm soát chặt chẽ giữa 3 nhánh quyền lực nhà nước thống nhất
        </p>
      </div>

      {/* Leadership Triad */}
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        <div className="p-1.5 sm:p-2 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[8.5px] text-accent-dark uppercase font-bold tracking-wider block mb-0.5">
            LÃNH ĐẠO
          </span>
          <h5 className="font-serif font-bold text-primary text-xs sm:text-[13px]">
            ĐẢNG LÃNH ĐẠO
          </h5>
          <p className="font-sans text-[9.5px] text-ink/80 mt-0.5 leading-snug truncate">
            Đường lối, không bao biện làm thay
          </p>
        </div>

        <div className="p-1.5 sm:p-2 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[8.5px] text-accent-dark uppercase font-bold tracking-wider block mb-0.5">
            THỰC THI
          </span>
          <h5 className="font-serif font-bold text-accent-dark text-xs sm:text-[13px]">
            NHÀ NƯỚC QUẢN LÝ
          </h5>
          <p className="font-sans text-[9.5px] text-ink/80 mt-0.5 leading-snug truncate">
            Bằng Hiến pháp và pháp luật
          </p>
        </div>

        <div className="p-1.5 sm:p-2 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[8.5px] text-accent-dark uppercase font-bold tracking-wider block mb-0.5">
            CHỦ THỂ
          </span>
          <h5 className="font-serif font-bold text-primary-dark text-xs sm:text-[13px]">
            NHÂN DÂN LÀM CHỦ
          </h5>
          <p className="font-sans text-[9.5px] text-ink/80 mt-0.5 leading-snug truncate">
            Chủ thể tối cao, giám sát
          </p>
        </div>
      </div>

      {/* 3 Branches: Legislative, Executive, Judicial */}
      <div className="border-t border-accent/25 pt-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-1.5 text-center">
          BA NHÁNH QUYỀN LỰC NHÀ NƯỚC THỐNG NHẤT
        </span>

        <div className="grid grid-cols-3 gap-1.5 mb-2" role="tablist">
          {branches.map((b, idx) => {
            const isSelected = selectedBranch === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedBranch(idx)}
                className={`p-1.5 rounded border text-left transition-all min-h-[44px] flex flex-col justify-between ${
                  isSelected
                    ? "bg-primary text-paper-light border-primary shadow-2xs"
                    : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[8.5px] font-bold block ${
                      isSelected ? "text-accent-light" : "text-accent-dark"
                    }`}
                  >
                    NHÁNH {b.num}
                  </span>
                  <span className="font-serif text-xs font-bold uppercase tracking-wider">
                    {b.title}
                  </span>
                </div>
                <span
                  className={`font-sans text-[9.5px] font-medium italic truncate ${
                    isSelected ? "text-paper-light/85" : "text-ink-muted"
                  }`}
                >
                  {b.org}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Detail */}
        <div className="p-2 sm:p-2.5 rounded bg-paper border border-accent/25">
          <h6 className="font-serif text-xs sm:text-sm font-bold text-primary mb-0.5">
            Nhánh {branches[selectedBranch].title} ({branches[selectedBranch].org})
          </h6>
          <p className="font-sans text-[11px] sm:text-xs text-ink leading-snug mb-1.5">
            {branches[selectedBranch].desc}
          </p>
          <div className="space-y-0.5 pt-1 border-t border-accent/15">
            <span className="text-[9.5px] font-mono uppercase text-accent-dark font-bold block">
              Nhiệm vụ trọng tâm:
            </span>
            <ul className="space-y-0.5 pl-1">
              {branches[selectedBranch].responsibilities.map((res, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] text-ink/85 leading-snug"
                >
                  <span className="text-primary font-bold text-[9px] mt-0.5">◆</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </EditorialReveal>
  );
}
