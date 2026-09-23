"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import {
  Layers,
  Palette,
  FileText,
  BookOpen,
  ShieldCheck,
  FileEdit,
  CheckCheck,
} from "lucide-react";

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
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#7a1818] flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-[#7a1818] shrink-0" strokeWidth={1.5} />
                <span>Mô Hình 3 Trụ Cột Công Nghệ & Trách Nhiệm Học Thuật</span>
              </h4>
              <p className="text-sm sm:text-[14.5px] text-ink-muted leading-relaxed">
                Phân định rõ vai trò kỹ thuật của từng công cụ AI, bảo chứng chất lượng và cơ sở khoa học bằng việc đối soát trực tiếp giáo trình in.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f5ede0] border border-[#dccbb4] text-[#7a1818] font-serif text-xs sm:text-[13px] font-bold shrink-0 self-start sm:self-center shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
              100% Đối Chiếu Giáo Trình In
            </span>
          </div>

          {/* 3 Cột Công Cụ AI - Tinh giản, biểu tượng nét mảnh chuẩn mực */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Cột 1: Antigravity */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase tracking-wider">
                    Nền Tảng Web Tương Tác
                  </span>
                  <div className="w-6 h-6 rounded-md bg-[#f4ede0] border border-[#e2d5c3] flex items-center justify-center shrink-0">
                    <Layers className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  </div>
                </div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  1. Google Antigravity
                </h5>
                <p className="text-sm sm:text-[14px] text-ink leading-relaxed font-sans">
                  Hỗ trợ xây dựng toàn bộ website tương tác: kiến trúc tạp chí lịch sử đa phương tiện, điều hướng chuyên đề liền mạch và tích hợp kho tư liệu âm thanh giọng đọc của Bác.
                </p>
              </div>
            </div>

            {/* Cột 2: Copilot Chat */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase tracking-wider">
                    Đồ Họa & Ảnh Tư Liệu
                  </span>
                  <div className="w-6 h-6 rounded-md bg-[#f4ede0] border border-[#e2d5c3] flex items-center justify-center shrink-0">
                    <Palette className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  </div>
                </div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  2. Microsoft Copilot Chat
                </h5>
                <p className="text-sm sm:text-[14px] text-ink leading-relaxed font-sans">
                  Tạo dựng hệ thống đồ họa biểu trưng, tranh minh họa tư liệu và hoa văn chuyên đề theo phong cách báo chí truyền thống, giúp bài học trực quan và trang trọng.
                </p>
              </div>
            </div>

            {/* Cột 3: NotebookLM & ChatGPT */}
            <div className="p-3.5 sm:p-4 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#8b1e1e] uppercase tracking-wider">
                    Soạn Thảo & Tinh Gọn Dàn Ý
                  </span>
                  <div className="w-6 h-6 rounded-md bg-[#f4ede0] border border-[#e2d5c3] flex items-center justify-center shrink-0">
                    <FileText className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  </div>
                </div>
                <h5 className="font-serif font-bold text-base text-[#7a1818]">
                  3. NotebookLM & ChatGPT
                </h5>
                <p className="text-sm sm:text-[14px] text-ink leading-relaxed font-sans">
                  Nạp các nguồn văn kiện và tài liệu lịch sử để phân tích ngữ cảnh, gợi ý dàn bài mạch lạc, tinh gọn luận điểm lý luận phức tạp và biên soạn câu hỏi ôn tập.
                </p>
              </div>
            </div>
          </div>

          {/* Khối Quy Trình Đối Chiếu Sách In & Cam Kết Học Thuật */}
          <div className="p-3.5 sm:p-4 rounded-lg border border-[#d8c8a8] bg-[#f6efe4] space-y-3">
            <div>
              <h5 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7a1818] shrink-0" strokeWidth={1.5} />
                <span>Quy Trình Đối Chiếu Trực Tiếp Với Giáo Trình Chuẩn (Bộ GD&ĐT)</span>
              </h5>
              <p className="text-xs sm:text-[13px] text-ink-muted">
                Đảm bảo tính chính xác học thuật — Tuyệt đối không phụ thuộc một chiều vào AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818] flex items-center gap-1.5">
                  <FileEdit className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  <span>01. Soạn Thảo Ban Đầu</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  AI hỗ trợ nạp nguồn tài liệu, gợi ý cấu trúc dàn bài và dự thảo các luận điểm chính.
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  <span>02. Mở Sách Đối Soát Chéo</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Thành viên nhóm trực tiếp mở sách in Giáo trình Bộ GD&ĐT đối soát từng câu chữ, trích dẫn.
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-[#fdfbf7] border border-[#e2d5c3] space-y-1">
                <div className="font-serif font-bold text-xs sm:text-sm text-[#7a1818] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7a1818]" strokeWidth={1.5} />
                  <span>03. Chốt Bản Chuẩn Xác</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Loại bỏ mọi sai sót hoặc suy diễn không chính thống, đảm bảo chuẩn mực tuyệt đối khi trình bày.
                </p>
              </div>
            </div>

            {/* Dòng cam kết học thuật tinh gọn */}
            <div className="pt-2 border-t border-[#dfcfb9] text-xs sm:text-[13.5px] text-ink leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7a1818] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="text-[#7a1818]">Cam kết học thuật: </strong>
                AI chỉ đóng vai trò trợ lý hỗ trợ kỹ thuật ban đầu. Toàn bộ nội dung và cơ sở khoa học đều do nhóm sinh viên trực tiếp nghiên cứu, kiểm duyệt và chịu trách nhiệm.
              </div>
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
        "Báo cáo thực tế về phương pháp kết hợp công nghệ AI thế hệ mới với quy trình đối chiếu, kiểm chứng nghiêm ngặt theo sách in Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT)."
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
