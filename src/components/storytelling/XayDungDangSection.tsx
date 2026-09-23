"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import InfographicDuongLoiDenHanhDong from "@/components/infographics/InfographicDuongLoiDenHanhDong";

export default function XayDungDangSection() {
  const tabs: TabItem[] = [
    {
      id: "phuong-dien-duong-loi",
      label: "(1) Phương diện đường lối",
      badge: "Đúng đắn & Sinh tử",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Tầm quan trọng sinh tử */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Phải đề ra đường lối, chủ trương đúng đắn
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Đường lối, chủ trương của Đảng giữ vai trò quyết định định hướng
              cho sự phát triển của toàn bộ dân tộc và đất nước.
            </p>

            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Tầm quan trọng sinh tử
              </div>
              <blockquote className="font-serif italic text-[11px] sm:text-xs text-ink font-semibold leading-snug">
                “Sai một ly thì đi một dặm, đó là tầm quan trọng của đường lối,
                chủ trương của Đảng.”
              </blockquote>
              <p className="text-[10.5px] text-ink-muted leading-snug">
                Một đường lối sai lầm về chính trị hoặc kinh tế sẽ kéo lùi sự phát
                triển của cả dân tộc, làm tổn hại sinh mạng và hạnh phúc của nhân dân.
              </p>
            </div>
          </div>

          {/* Cột phải: 3 Cơ sở khoa học hoạch định */}
          <div className="lg:col-span-6 space-y-1.5">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                3 Cơ sở khoa học để hoạch định đường lối
              </h3>
            </div>

            <div className="space-y-1">
              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <span className="font-bold text-[10.5px] text-[#7a1818] block mb-0.5">
                  • Kiên định nền tảng lý luận
                </span>
                <p className="text-[10.5px] text-ink leading-snug">
                  Kiên định và vận dụng sáng tạo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh vào điều kiện cụ thể của Việt Nam.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <span className="font-bold text-[10.5px] text-[#7a1818] block mb-0.5">
                  • Xuất phát từ thực tiễn khách quan
                </span>
                <p className="text-[10.5px] text-ink leading-snug">
                  Xuất phát từ thực tiễn khách quan, tôn trọng các quy luật kinh tế - xã hội trong từng thời kỳ phát triển.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <span className="font-bold text-[10.5px] text-[#7a1818] block mb-0.5">
                  • Xuất phát từ lợi ích của Nhân dân
                </span>
                <p className="text-[10.5px] text-ink leading-snug italic font-serif">
                  “Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.”
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "to-chuc-thuc-hien",
      label: "(2) Phương diện tổ chức, thực hiện",
      badge: "Hành động & Nêu gương",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Khâu tổ chức thực hiện */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              Tổ chức thực hiện thật tốt đường lối, chủ trương
            </h4>
            <div className="p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[11px] text-ink">
              <strong>Ý nghĩa quyết định:</strong> Đề ra đường lối đúng mới chỉ
              là một nửa chặng đường; khâu tổ chức thực hiện có ý nghĩa quyết định thắng lợi trong thực tế.
            </div>

            <div className="space-y-1.5">
              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                  • Thể chế hóa thành chính sách, pháp luật
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Thể chế hóa đường lối của Đảng thành chính sách, pháp luật của Nhà nước và các kế hoạch hành động cụ thể.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                  • Biến thành hành động tự giác toàn dân
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Biến đường lối thành hành động tích cực, tự giác của mọi tổ chức trong hệ thống chính trị và toàn dân.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Trách nhiệm làm gương của người đứng đầu */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              Nêu cao trách nhiệm làm gương của người đứng đầu
            </h4>
            <div className="p-2.5 sm:p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-2">
              <p className="text-[11px] sm:text-xs text-ink leading-snug">
                Giáo trình chỉ rõ:{" "}
                <em>
                  “Đặc biệt quan trọng nữa là người đứng đầu phải nêu cao trách nhiệm làm gương tốt để mọi người noi theo.”
                </em>
              </p>
              <div className="p-2 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-[10.5px] sm:text-[11px] font-serif italic text-ink space-y-0.5">
                <span className="font-bold text-[#7a1818] block not-italic">
                  Lời Bác căn dặn:
                </span>
                “Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền.”
              </div>
              <div className="pt-1 border-t border-[#ebd8c2] text-[10.5px] text-ink-muted">
                Thực thi và phát huy đầy đủ vai trò, trách nhiệm của cán bộ, đặc biệt là đội ngũ cán bộ cấp chiến lược.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "chinh-don-dang-va-sinh-vien",
      label: "(3) Chỉnh đốn & Trách nhiệm SV",
      badge: "Di chúc & Infographic",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: (3) Chỉnh đốn Đảng & Trách nhiệm sinh viên */}
          <div className="lg:col-span-6 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  (3) Chú trọng công tác chỉnh đốn nội bộ Đảng
                </h4>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
                <p className="text-[10.5px] sm:text-[11px] text-ink leading-snug">
                  Trong <strong>Di chúc lịch sử năm 1969</strong>, Bác Hồ căn dặn: Việc cần làm trước tiên là chỉnh đốn lại Đảng. Phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình. Làm cho <strong>“Đảng là đạo đức, là văn minh”</strong>.
                </p>
                <div className="p-1.5 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-[10px] text-ink-muted">
                  <em>“Cái thiếu nhất hiện nay là sự thống nhất giữa nói và làm trong Đảng.”</em> Toàn Đảng phải kiên quyết khắc phục, nói đi đôi với làm.
                </div>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  (4) Trách nhiệm của sinh viên đối với xây dựng Đảng
                </h4>
              </div>

              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1 text-[10.5px] sm:text-[11px] text-ink">
                <div>
                  <strong className="text-[#7a1818]">• Sinh viên là đảng viên:</strong> Gương mẫu trong học tập và rèn luyện; là công dân gương mẫu.
                </div>
                <div>
                  <strong className="text-[#7a1818]">• Sinh viên chưa là đảng viên:</strong> Học tập tốt lý luận chính trị và tư tưởng Hồ Chí Minh; phấn đấu trở thành đảng viên Đảng Cộng sản Việt Nam, góp phần đưa nước nhà <em>“sánh vai với các cường quốc năm châu”</em>.
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Infographic chuyển hóa đường lối */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <InfographicDuongLoiDenHanhDong />
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="xay-dung-dang"
      code="4.3.1"
      title="XÂY DỰNG ĐẢNG TRONG SẠCH, VỮNG MẠNH"
      parentPath="4.3. Vận dụng tư tưởng Hồ Chí Minh trong giai đoạn hiện nay"
      quote="Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân."
      quoteAuthor="Hồ Chí Minh — Di chúc (1969)"
      summary="Công tác xây dựng Đảng trong thời kỳ mới phải được tiến hành toàn diện trên cả 4 phương diện: Đường lối đúng đắn (nền tảng sống còn); Tổ chức thực hiện nghiêm minh; Thường xuyên tự chỉnh đốn nội bộ và Phát huy trách nhiệm của thế hệ trẻ, sinh viên."
      tabs={tabs}
      prevSection={{
        id: "trong-sach-vung-manh",
        label: "← 4.2.3 Nhà nước trong sạch, vững mạnh",
      }}
      nextSection={{
        id: "xay-dung-nha-nuoc",
        label: "4.3.2 Xây dựng Nhà nước pháp quyền →",
      }}
    />
  );
}
