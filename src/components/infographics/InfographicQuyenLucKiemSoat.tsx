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
    <EditorialReveal className="my-10 p-5 sm:p-7 rounded-lg bg-paper-light/90 border border-accent/30 shadow-sm text-ink">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="font-mono text-[11px] font-bold tracking-widest text-accent-dark uppercase block mb-1">
          HỆ GIẢI PHÁP ĐỒNG BỘ
        </span>
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
          Kiểm soát Quyền lực & Phòng chống Giặc nội xâm
        </h4>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1.5">
          Chuỗi giá trị niềm tin và phương châm &ldquo;Xây đi đôi với Chống&rdquo;
        </p>
      </div>

      {/* The 4-Step Chain */}
      <div className="mb-7 p-4 sm:p-5 rounded bg-paper border border-accent/25">
        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-3 text-center">
          CHUỖI VẬN HÀNH QUYỀN LỰC MINH BẠCH
        </span>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
          {chain.map((c, idx) => {
            const isLast = idx === chain.length - 1;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`w-full md:w-auto flex-1 p-3 rounded border text-center transition-all ${
                    isLast
                      ? "bg-primary text-paper-light border-primary"
                      : "bg-paper-light border-accent/30 text-ink"
                  }`}
                >
                  <div className="font-serif font-bold text-base tracking-wide">
                    {c.step}
                  </div>
                  <div
                    className={`font-sans text-xs mt-0.5 ${
                      isLast ? "text-paper-light/85" : "text-ink-muted"
                    }`}
                  >
                    {c.desc}
                  </div>
                </div>
                {idx < chain.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-accent-dark hidden md:block flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 5 Solutions */}
      <div className="space-y-3.5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-dark font-bold block text-center">
          NĂM TRỤ CỘT BẢO ĐẢM NHÀ NƯỚC TRONG SẠCH, VỮNG MẠNH
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2" role="tablist">
          {solutions.map((sol, idx) => {
            const isSelected = selectedSolution === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSolution(idx)}
                className={`p-3 rounded border text-center transition-all min-h-[44px] flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? "bg-primary text-paper-light border-primary shadow-sm"
                    : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold ${
                    isSelected ? "text-accent-light" : "text-accent-dark"
                  }`}
                >
                  TRỤ CỘT {sol.num}
                </span>
                <span className="font-serif text-sm font-bold tracking-wide uppercase">
                  {sol.keyword}
                </span>
                <span
                  className={`text-[11px] font-sans ${
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
        <div className="p-4 sm:p-5 rounded bg-paper border border-accent/25">
          <h6 className="font-serif text-base sm:text-lg font-bold text-primary mb-1.5">
            Trụ cột {solutions[selectedSolution].num}: {solutions[selectedSolution].keyword} — {solutions[selectedSolution].title}
          </h6>
          <p className="font-sans text-[15px] text-ink leading-relaxed">
            {solutions[selectedSolution].summary}
          </p>
        </div>
      </div>
    </EditorialReveal>
  );
}
