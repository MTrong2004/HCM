"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";

export default function ConclusionSection() {
  const { conclusion } = PRESENTATION_CONTENT;

  const tabs: TabItem[] = [
    {
      id: "tong-quan-tat-ca-trong-1",
      label: "Ứng Dụng AI & Đối Chiếu Giáo Trình",
      badge: "Báo Cáo Thực Tế",
      content: (
        <div className="space-y-3 sm:space-y-3.5 text-ink">
          {/* Header Báo Cáo Gọn Gàng */}
          <div className="p-3 sm:p-3.5 rounded-lg border border-[#ebd8c2] bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#7a1818]">
                Báo Cáo Ứng Dụng AI Trong Bài Thuyết Trình
              </h4>
              <p className="text-sm sm:text-[14.5px] text-ink-muted leading-relaxed">
                Nhóm ứng dụng AI làm công cụ hỗ trợ kỹ thuật và biên soạn dàn ý, kết hợp mở sách in Giáo trình Bộ GD&ĐT đối chiếu chéo 100%.
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-[#f5ede0] border border-[#dccbb4] text-[#7a1818] font-serif text-xs sm:text-[13px] font-bold shrink-0 self-start sm:self-center">
              100% Đối Chiếu Giáo Trình In
            </span>
          </div>

          {/* 3 Cột Công Cụ AI - Gọn gàng, súc tích, không lạm dụng icon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Cột 1: Antigravity */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2">
              <div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  1. Google Antigravity
                </h5>
                <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase">
                  Làm Web Thuyết Trình
                </span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-ink leading-relaxed">
                Hỗ trợ xây dựng toàn bộ website tương tác: giao diện tạp chí lịch sử, trải nghiệm học tập đa phương tiện, tích hợp âm thanh giọng Bác và thanh tra cứu nhanh (Ctrl + K).
              </p>
            </div>

            {/* Cột 2: Copilot Chat */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2">
              <div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  2. Microsoft Copilot Chat
                </h5>
                <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase">
                  Tạo Ảnh Minh Họa Element
                </span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-ink leading-relaxed">
                Tạo các hình ảnh minh họa cho element và đồ họa trang trí bài học theo phong cách báo chí truyền thống, giúp bài thuyết trình sinh động, trực quan.
              </p>
            </div>

            {/* Cột 3: Gemini Notebook & ChatGPT */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2">
              <div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  3. Gemini Notebook & ChatGPT
                </h5>
                <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase">
                  Soạn Thảo & Tinh Gọn Dàn Ý
                </span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-ink leading-relaxed">
                Nạp tư liệu văn kiện để phân tích ngữ cảnh, gợi ý dàn bài mạch lạc, tinh gọn luận điểm lý luận phức tạp và biên soạn câu hỏi trắc nghiệm ôn tập.
              </p>
            </div>
          </div>

          {/* Khối Quy Trình Đối Chiếu Sách In & Cam Kết Học Thuật - Tích hợp gọn trong 1 dải */}
          <div className="p-3.5 sm:p-4 rounded-lg border border-[#d8c8a8] bg-[#f6efe4] space-y-3">
            <div>
              <h5 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                Quy Trình Đối Chiếu Trực Tiếp Với Giáo Trình Chuẩn (Bộ GD&ĐT)
              </h5>
              <p className="text-xs sm:text-[13px] text-ink-muted">
                Đảm bảo tính chính xác học thuật — Tuyệt đối không phụ thuộc một chiều vào AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  01. Soạn Thảo Ban Đầu
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  AI hỗ trợ nạp nguồn tài liệu, gợi ý cấu trúc dàn bài và dự thảo các luận điểm chính.
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  02. Mở Sách Đối Soát Chéo
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Thành viên nhóm trực tiếp mở sách in Giáo trình Bộ GD&ĐT đối soát từng câu chữ, trích dẫn.
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  03. Chốt Bản Chuẩn Xác
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Loại bỏ mọi sai sót hoặc suy diễn không chính thống, đảm bảo chuẩn mực tuyệt đối khi trình bày.
                </p>
              </div>
            </div>

            {/* Dòng cam kết học thuật tinh gọn */}
            <div className="pt-2 border-t border-[#dfcfb9] text-xs sm:text-[13.5px] text-ink leading-relaxed">
              <strong className="text-[#7a1818]">Cam kết học thuật: </strong>
              AI chỉ đóng vai trò trợ lý hỗ trợ kỹ thuật ban đầu. Toàn bộ nội dung và cơ sở khoa học đều do nhóm sinh viên trực tiếp nghiên cứu, kiểm duyệt và chịu trách nhiệm.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="ket-luan"
      code="CHUYÊN ĐỀ"
      title="ỨNG DỤNG AI"
      parentPath="Ứng dụng công nghệ"
      bannerHeading="BÁO CÁO ỨNG DỤNG AI TRONG BÀI THUYẾT TRÌNH CỦA NHÓM"
      quote={
        conclusion.finalQuote?.text ||
        "Công nghệ AI giúp nhóm hiện thực hóa ý tưởng website tương tác một cách nhanh chóng, nhưng linh hồn của bài thuyết trình chính là sự chuẩn xác và nghiêm túc trong từng trang giáo trình được đối chiếu."
      }
      quoteAuthor={conclusion.finalQuote?.author || "Thông điệp Thực nghiệm của Nhóm Thuyết trình"}
      summary={
        conclusion.subtitle ||
        "Báo cáo thực tế về việc nhóm dùng Antigravity để làm web, Copilot Chat tạo ảnh minh họa element, Gemini Notebook & ChatGPT soạn thảo nội dung và đối chiếu trực tiếp với Giáo trình chuẩn của Bộ GD&ĐT."
      }
      tabs={tabs}
      prevSection={{
        id: "xay-dung-nha-nuoc",
        label: "← 4.3.2 Xây dựng Nhà nước",
      }}
      nextSection={{
        id: "hero",
        label: "Quay lại Đầu Trang ⟲",
      }}
    />
  );
}
