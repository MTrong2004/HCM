"use client";

import React, { useState } from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function InfographicCuaDoViDan() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      num: "I",
      title: "CỦA DÂN",
      subtitle: "Chủ quyền tối cao",
      desc: "Toàn bộ quyền lực nhà nước thuộc về nhân dân. Nhân dân là chủ thể tối cao, ủy thác quyền quản trị cho các cơ quan công quyền.",
      details: [
        "Quyền lực do dân ủy thác, không phải quyền lực tự thân của cán bộ",
        "Nhân dân có quyền kiểm tra, chất vấn và phê bình cơ quan nhà nước",
        "Quyền bãi miễn đại biểu không còn xứng đáng với sự tín nhiệm",
      ],
    },
    {
      num: "II",
      title: "DO DÂN",
      subtitle: "Xây dựng & Quản lý",
      desc: "Nhà nước do nhân dân lập nên bằng lá phiếu dân chủ; nhân dân trực tiếp tham gia quản lý, bảo vệ và giám sát bộ máy.",
      details: [
        "Dân không chỉ 'là chủ' mà phải tích cực 'làm chủ'",
        "Gắn liền quyền làm chủ với nghĩa vụ công dân nghiêm túc",
        "Nâng cao dân trí để nhân dân có đầy đủ năng lực làm chủ",
      ],
    },
    {
      num: "III",
      title: "VÌ DÂN",
      subtitle: "Mục tiêu tối thượng",
      desc: "Mọi chính sách, luật pháp đều hướng tới tự do, ấm no và hạnh phúc của nhân dân; cán bộ là công bộc tận tụy.",
      details: [
        "'Việc gì có lợi cho dân thì hết sức làm. Việc gì có hại cho dân thì hết sức tránh'",
        "Thước đo chính danh: Được lòng dân, được dân tin yêu",
        "Tuyệt đối không có đặc quyền, đặc lợi, gương mẫu Cần Kiệm Liêm Chính",
      ],
    },
  ];

  return (
    <EditorialReveal className="my-10 p-5 sm:p-7 rounded-lg bg-paper-light/90 border border-accent/30 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="font-mono text-[11px] font-bold tracking-widest text-accent-dark uppercase block mb-1">
          CHUYÊN ĐỀ TƯ LIỆU DÂN CHỦ
        </span>
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
          Bản chất Nhà nước Dân chủ: Của dân – Do dân – Vì dân
        </h4>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1.5">
          Chọn từng trụ cột để nghiên cứu các luận điểm cốt lõi của Chủ tịch Hồ Chí Minh
        </p>
      </div>

      {/* Tabs: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6" role="tablist">
        {pillars.map((pillar, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded border text-left transition-all duration-200 min-h-[44px] flex items-center justify-between gap-3 ${
                isActive
                  ? "bg-paper border-primary shadow-sm"
                  : "bg-paper/40 border-accent/25 hover:border-accent hover:bg-paper/80"
              }`}
            >
              <div>
                <span
                  className={`font-mono text-[10px] font-bold uppercase tracking-wider block ${
                    isActive ? "text-primary" : "text-accent-dark"
                  }`}
                >
                  TRỤ CỘT {pillar.num}
                </span>
                <span
                  className={`font-serif text-lg font-bold ${
                    isActive ? "text-primary" : "text-ink"
                  }`}
                >
                  {pillar.title}
                </span>
              </div>
              <span className="font-sans text-[11px] text-accent-dark font-medium text-right italic">
                {pillar.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Details */}
      <div className="p-5 sm:p-6 rounded bg-paper border border-accent/25">
        <h5 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2">
          Ý nghĩa cốt lõi: Nhà nước {pillars[activeTab].title}
        </h5>
        <p className="font-sans text-[15px] text-ink leading-relaxed mb-4">
          {pillars[activeTab].desc}
        </p>
        <div className="space-y-2 pt-3 border-t border-accent/20">
          <span className="text-[11px] font-mono uppercase text-accent-dark font-bold tracking-wider block">
            Luận điểm then chốt:
          </span>
          <ul className="space-y-2 pl-2">
            {pillars[activeTab].details.map((detail, dIdx) => (
              <li
                key={dIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 leading-relaxed"
              >
                <span className="text-primary font-bold text-xs mt-0.5">◆</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </EditorialReveal>
  );
}
