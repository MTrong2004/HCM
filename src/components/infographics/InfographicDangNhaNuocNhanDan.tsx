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
    <EditorialReveal className="my-10 p-5 sm:p-7 rounded-lg bg-paper-light/90 border border-accent/30 shadow-sm text-ink">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="font-mono text-[11px] font-bold tracking-widest text-accent-dark uppercase block mb-1">
          CƠ CHẾ VẬN HÀNH ĐỒNG BỘ
        </span>
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
          Đảng Lãnh đạo – Nhà nước Quản lý – Nhân dân Làm chủ
        </h4>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1.5">
          Sự phân công, phối hợp và kiểm soát chặt chẽ giữa 3 nhánh quyền lực nhà nước thống nhất
        </p>
      </div>

      {/* Leadership Triad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <div className="p-4 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[10px] text-accent-dark uppercase font-bold tracking-wider block mb-1">
            VAI TRÒ LÃNH ĐẠO
          </span>
          <h5 className="font-serif font-bold text-primary text-base">
            ĐẢNG LÃNH ĐẠO
          </h5>
          <p className="font-sans text-xs text-ink/80 mt-1.5 leading-relaxed">
            Bằng đường lối, chủ trương, công tác cán bộ; không bao biện làm thay
          </p>
        </div>

        <div className="p-4 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[10px] text-accent-dark uppercase font-bold tracking-wider block mb-1">
            VAI TRÒ THỰC THI
          </span>
          <h5 className="font-serif font-bold text-accent-dark text-base">
            NHÀ NƯỚC QUẢN LÝ
          </h5>
          <p className="font-sans text-xs text-ink/80 mt-1.5 leading-relaxed">
            Bằng Hiến pháp và pháp luật; bộ máy tinh gọn, cán bộ liêm chính
          </p>
        </div>

        <div className="p-4 rounded bg-paper border border-accent/25 text-center">
          <span className="font-mono text-[10px] text-accent-dark uppercase font-bold tracking-wider block mb-1">
            CHỦ THỂ QUYỀN LỰC
          </span>
          <h5 className="font-serif font-bold text-primary-dark text-base">
            NHÂN DÂN LÀM CHỦ
          </h5>
          <p className="font-sans text-xs text-ink/80 mt-1.5 leading-relaxed">
            Là chủ thể tối cao của quyền lực; trực tiếp kiểm tra, giám sát
          </p>
        </div>
      </div>

      {/* 3 Branches: Legislative, Executive, Judicial */}
      <div className="border-t border-accent/25 pt-5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-3 text-center">
          BA NHÁNH QUYỀN LỰC NHÀ NƯỚC THỐNG NHẤT
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-5" role="tablist">
          {branches.map((b, idx) => {
            const isSelected = selectedBranch === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedBranch(idx)}
                className={`p-3.5 rounded border text-left transition-all min-h-[44px] flex items-center justify-between gap-2 ${
                  isSelected
                    ? "bg-primary text-paper-light border-primary shadow-sm"
                    : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[10px] font-bold block ${
                      isSelected ? "text-accent-light" : "text-accent-dark"
                    }`}
                  >
                    NHÁNH {b.num}
                  </span>
                  <span className="font-serif text-sm font-bold uppercase tracking-wider">
                    {b.title}
                  </span>
                </div>
                <span
                  className={`font-sans text-xs font-medium italic ${
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
        <div className="p-5 rounded bg-paper border border-accent/25">
          <h6 className="font-serif text-base sm:text-lg font-bold text-primary mb-1.5">
            Nhánh {branches[selectedBranch].title} ({branches[selectedBranch].org})
          </h6>
          <p className="font-sans text-[15px] text-ink leading-relaxed mb-3.5">
            {branches[selectedBranch].desc}
          </p>
          <div className="space-y-1.5 pt-2.5 border-t border-accent/15">
            <span className="text-[11px] font-mono uppercase text-accent-dark font-bold block">
              Nhiệm vụ trọng tâm:
            </span>
            <ul className="space-y-1.5 pl-1">
              {branches[selectedBranch].responsibilities.map((res, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-ink/85 leading-relaxed"
                >
                  <span className="text-primary font-bold text-xs mt-0.5">◆</span>
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
