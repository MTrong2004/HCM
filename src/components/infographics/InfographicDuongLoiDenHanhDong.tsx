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
    <EditorialReveal className="my-10 p-5 sm:p-7 rounded-lg bg-paper-light/90 border border-accent/30 shadow-sm text-ink">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="font-mono text-[11px] font-bold tracking-widest text-accent-dark uppercase block mb-1">
          QUY TRÌNH CHUYỂN HÓA LÃNH ĐẠO
        </span>
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
          Từ Chủ trương của Đảng đến Hiện thực Đời sống
        </h4>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1.5">
          Đường lối đúng mới là một nửa chặng đường; tổ chức thực hiện và chỉnh đốn là khâu quyết định
        </p>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5" role="tablist">
        {steps.map((st, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded border text-left transition-all min-h-[44px] ${
                isActive
                  ? "bg-primary text-paper-light border-primary shadow-sm"
                  : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
              }`}
            >
              <span
                className={`font-mono text-[10px] font-bold block mb-1 ${
                  isActive ? "text-accent-light" : "text-accent-dark"
                }`}
              >
                BƯỚC {st.num}
              </span>
              <h5 className="font-serif text-sm sm:text-base font-bold leading-snug">
                {st.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Active Step Panel */}
      <div className="p-5 rounded bg-paper border border-accent/25 mb-5">
        <span className="text-[11px] font-mono uppercase text-accent-dark font-bold block mb-1.5">
          BƯỚC {steps[activeStep].num}: {steps[activeStep].title}
        </span>
        <p className="font-sans text-[15px] text-ink leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>

      {/* Student Responsibilities Highlight Box */}
      <div className="p-4 sm:p-5 rounded border-l-4 border-accent-dark bg-paper/60 border-t border-r border-b border-accent/20">
        <h6 className="font-serif text-base font-bold text-primary mb-1">
          Trách nhiệm của Thế hệ Sinh viên, Trí thức trẻ
        </h6>
        <p className="font-sans text-xs sm:text-sm text-ink/85 leading-relaxed">
          Sinh viên là đảng viên phải tuyệt đối gương mẫu trong học tập và tác phong; sinh viên nói chung cần trau dồi chuyên môn, rèn đức luyện tài, nắm vững lý luận và sẵn sàng dấn thân cống hiến cho công cuộc đổi mới đất nước.
        </p>
      </div>
    </EditorialReveal>
  );
}
