"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function InfographicQuyenLucKiemSoat() {
  const [selectedSolution, setSelectedSolution] = useState<number>(0);

  const chain = [
    { step: "QUYỀN LỰC", desc: "Do nhân dân ủy thác" },
    { step: "KIỂM SOÁT", desc: "Cơ chế chặt chẽ, đa tầng" },
    { step: "TRÁCH NHIỆM", desc: "Phụng sự nhân dân" },
    { step: "NIỀM TIN", desc: "Thước đo lòng dân" },
  ];

  const solutions = [
    {
      num: "I",
      keyword: "DÂN",
      title: "Nhân dân Giám sát",
      summary:
        "Thực hành dân chủ rộng rãi, tạo mọi điều kiện để nhân dân tham gia giám sát, phát hiện và tố giác sai phạm.",
    },
    {
      num: "II",
      keyword: "LUẬT",
      title: "Kỷ cương Pháp luật",
      summary:
        "Hoàn thiện thể chế pháp lý, siết chặt kỷ luật của Đảng và phép nước, thanh tra kiểm soát không có kẽ hở.",
    },
    {
      num: "III",
      keyword: "PHẠT",
      title: "Xử lý Nghiêm minh",
      summary:
        "Trừng trị thích đáng mọi hành vi tham ô, lãng phí, 'không có vùng cấm, không có ngoại lệ' dù ở bất kỳ cương vị nào.",
    },
    {
      num: "IV",
      keyword: "GƯƠNG",
      title: "Cán bộ Nêu gương",
      summary:
        "Người đứng đầu và cán bộ các cấp phải tiên phong gương mẫu thực hành Cần Kiệm Liêm Chính để cấp dưới noi theo.",
    },
    {
      num: "V",
      keyword: "GIÁO DỤC",
      title: "Khơi dậy Lương tâm",
      summary:
        "Thường xuyên giáo dục đạo đức cách mạng, bồi dưỡng lòng tự trọng, ý thức danh dự và tinh thần phụng sự Tổ quốc.",
    },
  ];

  return (
    <EditorialReveal className="my-0.5 p-3 sm:p-4 rounded-lg bg-paper-light/95 border border-accent/30 shadow-2xs text-ink">
      <div className="text-center max-w-2xl mx-auto mb-2">
        <span className="font-mono text-[9.5px] font-bold tracking-widest text-accent-dark uppercase block mb-0.5">
          HỆ GIẢI PHÁP ĐỒNG BỘ
        </span>
        <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
          Kiểm soát Quyền lực & Phòng chống Giặc nội xâm
        </h4>
        <p className="font-sans text-[11px] text-ink-muted mt-0.5">
          Chuỗi giá trị niềm tin và phương châm &ldquo;Xây đi đôi với Chống&rdquo;
        </p>
      </div>

      {/* The 4-Step Chain */}
      <div className="mb-2 p-2 sm:p-2.5 rounded bg-paper border border-accent/25">
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-1 text-center">
          CHUỖI VẬN HÀNH QUYỀN LỰC MINH BẠCH
        </span>
        <div className="flex flex-row items-center justify-between gap-1.5">
          {chain.map((c, idx) => {
            const isLast = idx === chain.length - 1;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`flex-1 p-1.5 rounded border text-center transition-all ${
                    isLast
                      ? "bg-primary text-paper-light border-primary"
                      : "bg-paper-light border-accent/30 text-ink"
                  }`}
                >
                  <div className="font-serif font-bold text-xs tracking-wide">
                    {c.step}
                  </div>
                  <div
                    className={`font-sans text-[9.5px] mt-0.5 truncate ${
                      isLast ? "text-paper-light/85" : "text-ink-muted"
                    }`}
                  >
                    {c.desc}
                  </div>
                </div>
                {idx < chain.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-accent-dark hidden sm:block flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 5 Solutions */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold block text-center">
          NĂM TRỤ CỘT BẢO ĐẢM NHÀ NƯỚC TRONG SẠCH, VỮNG MẠNH
        </span>

        <div className="grid grid-cols-5 gap-1" role="tablist">
          {solutions.map((sol, idx) => {
            const isSelected = selectedSolution === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSolution(idx)}
                className={`p-1 sm:p-1.5 rounded border text-center transition-all min-h-[44px] flex flex-col items-center justify-center gap-0.5 ${
                  isSelected
                    ? "bg-primary text-paper-light border-primary shadow-2xs"
                    : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
                }`}
              >
                <span
                  className={`font-mono text-[8.5px] font-bold ${
                    isSelected ? "text-accent-light" : "text-accent-dark"
                  }`}
                >
                  {sol.num}
                </span>
                <span className="font-serif text-[10.5px] sm:text-xs font-bold tracking-wide uppercase truncate">
                  {sol.keyword}
                </span>
                <span
                  className={`text-[9px] font-sans truncate ${
                    isSelected ? "text-paper-light/80" : "text-ink-muted"
                  }`}
                >
                  {sol.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Detail */}
        <div key={selectedSolution} className="p-2 sm:p-2.5 rounded bg-paper border border-accent/25 editorial-tab-panel">
          <h6 className="font-serif text-xs sm:text-sm font-bold text-primary mb-1">
            Trụ cột {solutions[selectedSolution].num}: {solutions[selectedSolution].keyword} — {solutions[selectedSolution].title}
          </h6>
          <p className="font-sans text-[11px] sm:text-xs text-ink leading-snug">
            {solutions[selectedSolution].summary}
          </p>
        </div>
      </div>
    </EditorialReveal>
  );
}
