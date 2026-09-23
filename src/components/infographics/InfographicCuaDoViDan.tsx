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
    <EditorialReveal className="p-3.5 sm:p-4 rounded-lg bg-[#fdfbf7] border border-[#e2d7c5] shadow-2xs space-y-3">
      {/* Tabs: 3 Pillars */}
      <div className="grid grid-cols-3 gap-2" role="tablist">
        {pillars.map((pillar, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 rounded border text-left transition-all duration-200 min-h-[44px] flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-[#fdfcf9] border-[#7a1818] shadow-2xs ring-1 ring-[#7a1818]/20"
                  : "bg-[#f7efe1]/50 border-[#e8dac5] hover:border-[#7a1818]/40 hover:bg-[#f7efe1]"
              }`}
            >
              <div>
                <span
                  className={`font-mono text-[11px] font-bold uppercase tracking-wider block ${
                    isActive ? "text-[#7a1818]" : "text-[#8a7250]"
                  }`}
                >
                  TRỤ CỘT {pillar.num}
                </span>
                <span
                  className={`font-serif text-sm sm:text-base font-bold ${
                    isActive ? "text-[#7a1818]" : "text-ink"
                  }`}
                >
                  {pillar.title}
                </span>
              </div>
              <span className={`font-sans text-xs font-semibold italic mt-0.5 ${isActive ? "text-[#7a1818]/90" : "text-[#8a7250]"}`}>
                {pillar.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Details */}
      <div key={activeTab} className="p-3.5 sm:p-4 rounded-md bg-[#fdfcf9] border border-[#e2d7c5] shadow-3xs editorial-tab-panel">
        <h5 className="font-serif text-sm sm:text-base font-bold text-[#7a1818] mb-1">
          Ý nghĩa cốt lõi: Nhà nước {pillars[activeTab].title}
        </h5>
        <p className="font-sans text-xs sm:text-[13.5px] text-ink leading-relaxed mb-2.5">
          {pillars[activeTab].desc}
        </p>
        <div className="space-y-1.5 pt-2 border-t border-[#ebd8c2]">
          <span className="text-xs font-mono uppercase text-[#7a1818] font-bold tracking-wider block">
            Luận điểm then chốt:
          </span>
          <ul className="space-y-1.5 pl-1">
            {pillars[activeTab].details.map((detail, dIdx) => (
              <li
                key={dIdx}
                className="flex items-start gap-2 text-xs sm:text-[13px] text-ink leading-relaxed"
              >
                <span className="text-[#7a1818] font-bold text-xs mt-0.5">◆</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </EditorialReveal>
  );
}
