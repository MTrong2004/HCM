"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import { ASSET_MANIFEST } from "@/content/asset-manifest";

export default function ConclusionSection() {
  const { conclusion } = PRESENTATION_CONTENT;

  const academicSources = [
    {
      title: "Hồ Chí Minh Toàn tập (15 tập)",
      publisher: "NXB Chính trị quốc gia Sự thật, Hà Nội",
      year: "2011",
      note: "Nguồn văn kiện gốc và các bài nói, bài viết của Chủ tịch Hồ Chí Minh.",
    },
    {
      title:
        "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học không chuyên lý luận chính trị)",
      publisher: "Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật",
      year: "2021",
      note: "Khung chương trình chuẩn và hệ thống hóa các luận điểm cốt lõi.",
    },
    {
      title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946",
      publisher: "Quốc hội khóa I thông qua",
      year: "1946",
      note: "Bản Hiến pháp đầu tiên đặt nền móng cho Nhà nước dân chủ kiểu mới.",
    },
    {
      title: "Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam năm 2013",
      publisher: "Quốc hội khóa XIII thông qua",
      year: "2013",
      note: "Kế thừa và phát triển tư tưởng Hồ Chí Minh về quyền làm chủ của nhân dân.",
    },
    {
      title: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII",
      publisher: "Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật",
      year: "2021",
      note: "Định hướng tiếp tục hoàn thiện Nhà nước pháp quyền XHCN trong giai đoạn mới.",
    },
  ];

  const tabs: TabItem[] = [
    {
      id: "luan-diem-cot-loi",
      label: "a. Năm Luận Điểm Cốt Lõi",
      badge: "5 Trụ cột tư tưởng",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: 3 Luận điểm đầu */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              1. Nền tảng Bản chất & Thượng tôn pháp luật
            </h4>

            <div className="space-y-1.5">
              {conclusion.summaryBullets.slice(0, 3).map((point: string, idx: number) => (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-md border border-[#e8dfcf] bg-[#fbf8f0] flex gap-2.5 items-start"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#7a1818] leading-none pt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="font-sans text-[11px] sm:text-xs text-ink leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: 2 Luận điểm tiếp theo & Thông điệp kết luận */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              2. Kỷ cương, Đạo đức & Khát vọng phát triển
            </h4>

            <div className="space-y-1.5">
              {conclusion.summaryBullets.slice(3, 5).map((point: string, idx: number) => (
                <div
                  key={idx + 3}
                  className="p-2 sm:p-2.5 rounded-md border border-[#e8dfcf] bg-[#fbf8f0] flex gap-2.5 items-start"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#7a1818] leading-none pt-0.5">
                    0{idx + 4}
                  </span>
                  <p className="font-sans text-[11px] sm:text-xs text-ink leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <span className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Thông điệp thời đại
              </span>
              <p className="text-[11px] sm:text-xs text-ink leading-snug">
                Xây dựng Nhà nước liêm chính, kiến tạo, phục vụ nhân dân là dòng chảy xuyên suốt từ bản Hiến pháp 1946 đến kỷ nguyên vươn mình của dân tộc hôm nay.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tai-lieu-tham-khao",
      label: "b. Căn Cứ Học Thuật",
      badge: "5 Nguồn văn kiện gốc",
      content: (
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
            Danh mục tài liệu tham khảo chính yếu & Căn cứ pháp lý
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {academicSources.map((source, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-md border border-[#e8dfcf] bg-[#fbf8f0] flex items-start gap-2.5"
              >
                <span className="font-serif font-bold text-xs text-[#7a1818] pt-0.5">
                  [{idx + 1}]
                </span>
                <div className="space-y-0.5 text-left">
                  <div className="font-serif font-bold text-xs text-ink">
                    {source.title}
                  </div>
                  <div className="text-[10.5px] text-ink-muted">
                    {source.publisher} ({source.year})
                  </div>
                  <div className="text-[10px] text-ink/75 italic">
                    {source.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "danh-muc-tu-lieu",
      label: "c. Danh Mục Tư Liệu Số",
      badge: `${ASSET_MANIFEST.length} Tệp tư liệu`,
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-ink-muted">
            <span className="font-medium text-[11px]">
              Bảng kiểm {ASSET_MANIFEST.length} tư liệu số phục vụ thuyết trình:
            </span>
            <span className="font-mono text-[10px] text-[#7a1818]">
              Chuẩn hóa tỷ lệ 16:9 • 4:3 • 3:2
            </span>
          </div>

          <div className="max-h-[220px] overflow-y-auto border border-[#e8dfcf] rounded-md bg-[#fbf8f0]">
            <table className="w-full text-left text-[11px] font-sans border-collapse">
              <thead>
                <tr className="border-b border-[#e8dfcf] bg-[#f4ebe1] text-[#7a1818] font-mono uppercase text-[10px] sticky top-0">
                  <th className="py-1.5 px-2">Tên File / ID</th>
                  <th className="py-1.5 px-2">Phần sử dụng</th>
                  <th className="py-1.5 px-2">Loại</th>
                  <th className="py-1.5 px-2">Tỷ lệ</th>
                  <th className="py-1.5 px-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ece2d4]">
                {ASSET_MANIFEST.map((item) => (
                  <tr key={item.id} className="hover:bg-[#f6efe4]">
                    <td className="py-1 px-2 font-mono text-[#7a1818]">
                      {item.filename}
                    </td>
                    <td className="py-1 px-2 text-ink-muted">{item.section}</td>
                    <td className="py-1 px-2 font-mono text-ink-muted">
                      {item.type}
                    </td>
                    <td className="py-1 px-2 font-mono text-ink-muted">
                      {item.aspectRatio}
                    </td>
                    <td className="py-1 px-2">
                      <span
                        className={`px-1.5 py-0.2 rounded text-[9.5px] font-mono font-bold ${
                          item.status === "ready"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.status === "ready" ? "Sẵn sàng" : "Placeholder"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="ket-luan"
      code="TỔNG KẾT"
      title="TỔNG KẾT & SUY NGẪM"
      parentPath="Chương 4: Tư tưởng Hồ Chí Minh về Đảng Cộng sản và Nhà nước Việt Nam"
      quote={
        conclusion.finalQuote?.text ||
        "Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ."
      }
      quoteAuthor={conclusion.finalQuote?.author || "Hồ Chí Minh"}
      summary={
        conclusion.subtitle ||
        "Năm luận điểm cốt lõi và hệ thống căn cứ học thuật chuẩn mực về Nhà nước của nhân dân, do nhân dân, vì nhân dân."
      }
      tabs={tabs}
      prevSection={{
        id: "phong-chong-tham-nhung",
        label: "← 4.3.2 Phòng, chống giặc nội xâm",
      }}
      nextSection={{
        id: "hero",
        label: "Quay lại Đầu Trang ⟲",
      }}
    />
  );
}
