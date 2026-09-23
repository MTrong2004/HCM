"use client";

import React, { useState } from "react";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function InfographicPhapQuyenBaTang() {
  const [activeTier, setActiveTier] = useState<number>(2);

  const tiers = [
    {
      num: "I",
      level: "TẦNG 1",
      title: "Hợp hiến, Hợp pháp",
      tag: "Nền tảng chính danh",
      desc: "Xây dựng Nhà nước trên cơ sở Hiến pháp và pháp luật. Tổ chức Tổng tuyển cử ngày 6/1/1946, ban hành Hiến pháp 1946 xác lập vị thế hợp pháp tối cao trong và ngoài nước.",
      principles: [
        "Chính phủ lâm thời khẩn cấp chuẩn bị Hiến pháp và Tổng tuyển cử",
        "Bộ máy nhà nước được thiết lập đầy đủ tư cách pháp lý",
        "Quốc hội khóa I đại diện cho ý chí thống nhất của toàn dân",
      ],
    },
    {
      num: "II",
      level: "TẦNG 2",
      title: "Thượng tôn Pháp luật",
      tag: "Hiệu lực quản trị xã hội",
      desc: "Quản lý đất nước bằng Hiến pháp và luật pháp. Đảm bảo tính nghiêm minh 'không có vùng cấm', đồng thời đưa pháp luật thấm sâu vào nhận thức, nếp sống của nhân dân.",
      principles: [
        "Hoàn thiện hệ thống pháp luật dân chủ, bảo vệ quyền lợi nhân dân",
        "Đưa luật vào đời sống qua tuyên truyền, nâng cao dân trí",
        "Cán bộ thi hành công vụ: 'Phụng công, thủ pháp, chí công, vô tư'",
      ],
    },
    {
      num: "III",
      level: "TẦNG 3",
      title: "Pháp quyền Nhân nghĩa",
      tag: "Đỉnh cao nhân văn Hồ Chí Minh",
      desc: "Pháp luật vì con người, lấy bảo vệ quyền con người làm mục đích cao nhất. Kết hợp nghiêm trị kẻ phá hoại với giáo dục cảm hóa, hướng thiện.",
      principles: [
        "Tôn trọng và hiện thực hóa đầy đủ các quyền con người và quyền công dân",
        "Đặc biệt bảo vệ phụ nữ, trẻ em và đồng bào dân tộc thiểu số",
        "Gắn kết hài hòa giữa sự nghiêm minh của pháp lý và đạo lý nhân ái dân tộc",
      ],
    },
  ];

  return (
    <EditorialReveal className="my-10 p-5 sm:p-7 rounded-lg bg-paper-light/90 border border-accent/30 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="font-mono text-[11px] font-bold tracking-widest text-accent-dark uppercase block mb-1">
          CẤU TRÚC PHÁP QUYỀN BA TẦNG
        </span>
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
          Mô hình Pháp quyền theo Tư tưởng Hồ Chí Minh
        </h4>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1.5">
          Từ nền tảng pháp lý lịch sử tiến tới đỉnh cao nhân văn vì con người
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Tier Selector Column (Left) */}
        <div className="lg:col-span-5 space-y-2.5" role="tablist">
          {tiers.map((tier, idx) => {
            const isActive = activeTier === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTier(idx)}
                className={`w-full p-4 rounded border text-left transition-all duration-200 min-h-[44px] flex items-center gap-3.5 ${
                  isActive
                    ? "bg-primary text-paper-light border-primary shadow-sm"
                    : "bg-paper/50 border-accent/25 text-ink hover:border-accent hover:bg-paper"
                }`}
              >
                <span
                  className={`font-serif text-xl font-black w-8 text-center flex-shrink-0 ${
                    isActive ? "text-accent-light" : "text-accent-dark"
                  }`}
                >
                  {tier.num}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                        isActive ? "text-accent-light/90" : "text-accent-dark"
                      }`}
                    >
                      {tier.level}
                    </span>
                    <span
                      className={`text-[11px] font-sans italic ${
                        isActive ? "text-paper-light/80" : "text-ink-muted"
                      }`}
                    >
                      {tier.tag}
                    </span>
                  </div>
                  <h5 className="font-serif text-base sm:text-lg font-bold leading-tight mt-0.5">
                    {tier.title}
                  </h5>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Panel (Right) */}
        <div key={activeTier} className="lg:col-span-7 p-5 sm:p-6 rounded bg-paper border border-accent/30 editorial-tab-panel">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold text-accent-dark uppercase">
              {tiers[activeTier].level} —
            </span>
            <span className="text-xs font-sans italic text-ink-muted">
              {tiers[activeTier].tag}
            </span>
          </div>

          <h5 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2.5">
            {tiers[activeTier].title}
          </h5>

          <p className="font-sans text-[15px] text-ink leading-relaxed mb-4">
            {tiers[activeTier].desc}
          </p>

          <div className="border-t border-accent/20 pt-3.5 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent-dark font-bold block">
              Nguyên tắc vận hành:
            </span>
            <ul className="space-y-2 pl-1">
              {tiers[activeTier].principles.map((pr, pIdx) => (
                <li
                  key={pIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 leading-relaxed"
                >
                  <span className="text-primary font-bold text-xs mt-0.5">◆</span>
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </EditorialReveal>
  );
}
