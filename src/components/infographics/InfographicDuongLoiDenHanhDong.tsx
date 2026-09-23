"use client";

import React, { useState } from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function InfographicDuongLoiDenHanhDong() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Đường lối, Chủ trương",
      desc: "Xuất phát từ thực tiễn, kiên định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh. 'Sai một ly thì đi một dặm' — đường lối giữ vai trò định hướng sống còn cho toàn dân tộc.",
    },
    {
      num: "02",
      title: "Thể chế hóa",
      desc: "Chuyển hóa chủ trương, nghị quyết của Đảng thành chính sách, pháp luật đồng bộ của Nhà nước để toàn xã hội dễ dàng thực hiện và tuân thủ.",
    },
    {
      num: "03",
      title: "Tổ chức Hành động",
      desc: "Hành động thực tế của hệ thống chính trị và các tầng lớp nhân dân. Cán bộ, đảng viên tiên phong, người đứng đầu phải nêu gương chịu trách nhiệm.",
    },
    {
      num: "04",
      title: "Kiểm tra & Tự chỉnh đốn",
      desc: "Thường xuyên kiểm tra, tự soi, tự sửa nội bộ Đảng. 'Đảng là đạo đức, là văn minh' — giữ vững kỷ cương và loại bỏ các phần tử cơ hội, tha hóa.",
    },
  ];

  return (
    <EditorialReveal className="my-0.5 p-3 sm:p-4 rounded-lg bg-paper-light/95 border border-accent/30 shadow-2xs text-ink">
      <div className="text-center max-w-2xl mx-auto mb-2">
        <span className="font-mono text-[9.5px] font-bold tracking-widest text-accent-dark uppercase block mb-0.5">
          QUY TRÌNH CHUYỂN HÓA LÃNH ĐẠO
        </span>
        <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
          Từ Chủ trương của Đảng đến Hiện thực Đời sống
        </h4>
        <p className="font-sans text-[11px] text-ink-muted mt-0.5">
          Đường lối đúng mới là một nửa chặng đường; tổ chức thực hiện và chỉnh đốn là khâu quyết định
        </p>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-2" role="tablist">
        {steps.map((st, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveStep(idx)}
              className={`p-2 rounded border text-left transition-all min-h-[44px] ${
                isActive
                  ? "bg-primary text-paper-light border-primary shadow-2xs"
                  : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
              }`}
            >
              <span
                className={`font-mono text-[8.5px] sm:text-[9px] font-bold block mb-0.5 ${
                  isActive ? "text-accent-light" : "text-accent-dark"
                }`}
              >
                BƯỚC {st.num}
              </span>
              <h5 className="font-serif text-xs sm:text-[13px] font-bold leading-snug truncate">
                {st.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Active Step Panel */}
      <div key={activeStep} className="p-2 sm:p-2.5 rounded bg-paper border border-accent/25 mb-2 editorial-tab-panel">
        <span className="text-[10px] font-mono uppercase text-accent-dark font-bold block mb-1">
          BƯỚC {steps[activeStep].num}: {steps[activeStep].title}
        </span>
        <p className="font-sans text-[11px] sm:text-xs text-ink leading-snug">
          {steps[activeStep].desc}
        </p>
      </div>

      {/* Student Responsibilities Highlight Box */}
      <div className="p-2 sm:p-2.5 rounded border-l-4 border-accent-dark bg-paper/60 border-t border-r border-b border-accent/20">
        <h6 className="font-serif text-xs sm:text-[13px] font-bold text-primary mb-0.5">
          Trách nhiệm của Thế hệ Sinh viên, Trí thức trẻ
        </h6>
        <p className="font-sans text-[10.5px] sm:text-[11px] text-ink/85 leading-snug">
          Sinh viên là đảng viên phải tuyệt đối gương mẫu; sinh viên nói chung cần trau dồi chuyên môn, rèn đức luyện tài, nắm vững lý luận và sẵn sàng dấn thân cống hiến cho công cuộc đổi mới.
        </p>
      </div>
    </EditorialReveal>
  );
}
