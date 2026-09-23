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
      label: "a. Phương diện đường lối",
      badge: "Định hướng chiến lược",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Tầm quan trọng sinh tử */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  1. Tầm quan trọng sinh tử của đường lối
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Đường lối, chủ trương giữ vai trò quyết định, định hướng cho toàn
                bộ hoạt động của Nhà nước và xã hội.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Châm ngôn kinh điển
                </div>
                <blockquote className="font-serif italic text-sm text-ink font-semibold">
                  “Sai một ly thì đi một dặm, đó là tầm quan trọng của đường
                  lối, chủ trương của Đảng.”
                </blockquote>
                <p className="text-xs text-ink-muted">
                  Một đường lối sai lầm sẽ kéo lùi sự phát triển của cả dân tộc,
                  làm tổn hại đến hạnh phúc của nhân dân.
                </p>
              </div>
            </div>

            {/* Cột phải: 3 Cơ sở khoa học */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  2. Ba cơ sở khoa học hoạch định đường lối
                </h3>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Nền tảng lý luận vững chắc
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Kiên định và vận dụng sáng tạo chủ nghĩa Mác - Lênin và tư
                    tưởng Hồ Chí Minh phù hợp với từng giai đoạn.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Xuất phát từ thực tiễn khách quan
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Tôn trọng quy luật kinh tế - xã hội, đánh giá đúng bối cảnh
                    trong nước và xu thế quốc tế.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Lấy lợi ích của nhân dân làm gốc
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    <em>
                      “Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại
                      đến dân, ta phải hết sức tránh.”
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "to-chuc-thuc-hien",
      label: "b. Phương diện tổ chức, thực hiện",
      badge: "Hành động thực tế",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Biến đường lối thành hành động */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Thể chế hóa và tổ chức thực hiện
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Đề ra đường lối đúng mới chỉ là một nửa chặng đường; khâu tổ
                chức thực hiện có ý nghĩa quyết định thắng lợi trong thực tế.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Thể chế hóa pháp luật
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Thể chế hóa đường lối của Đảng thành chính sách, pháp luật
                    của Nhà nước và các đề án, kế hoạch cụ thể.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Hành động của toàn dân
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Biến chủ trương thành hành động tích cực, tự giác của mọi
                    tầng lớp nhân dân và cả hệ thống chính trị.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Trách nhiệm nêu gương của người đứng đầu */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Nêu gương người đứng đầu
              </h4>
              <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Giáo trình chỉ rõ:{" "}
                  <em>
                    “Đặc biệt quan trọng nữa là người đứng đầu phải nêu cao
                    trách nhiệm làm gương tốt để mọi người noi theo.”
                  </em>
                </p>
                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs font-serif italic text-ink">
                  “Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn
                  tuyên truyền.” — Hồ Chí Minh —
                </div>
              </div>
            </div>
          </div>

          <InfographicDuongLoiDenHanhDong />
        </div>
      ),
    },
    {
      id: "chinh-don-dang",
      label: "c. Chỉnh đốn Đảng & Sinh viên",
      badge: "Nói đi đôi với làm",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái: Công tác chỉnh đốn Đảng */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#7a1818]">
              1. Công tác chỉnh đốn nội bộ
            </h4>
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
              <div className="font-bold text-xs text-[#7a1818]">
                Đảng là đạo đức, là văn minh
              </div>
              <p className="text-xs text-ink leading-relaxed">
                Thường xuyên tự chỉnh đốn để mỗi đảng viên luôn xứng đáng là
                người lãnh đạo, người đầy tớ thật trung thành của nhân dân.
              </p>
            </div>

            <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-1">
              <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                Khắc phục khâu yếu kém nhất hiện nay
              </div>
              <p className="text-xs text-ink leading-relaxed">
                Giáo trình chỉ rõ:{" "}
                <em>
                  “Cái thiếu nhất hiện nay là sự thống nhất giữa nói và làm
                  trong Đảng.”
                </em>{" "}
                Cần quán triệt sâu sắc nguyên tắc <strong>nói đi đôi với làm</strong>.
              </p>
            </div>
          </div>

          {/* Cột phải: Trách nhiệm sinh viên */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#7a1818]">
              2. Trách nhiệm của sinh viên
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <span className="font-bold text-xs text-[#7a1818] block mb-1">
                  • Sinh viên đang là đảng viên
                </span>
                <p className="text-xs text-ink leading-relaxed">
                  Thực hiện nghiêm túc Cương lĩnh, Điều lệ Đảng; gương mẫu trong
                  học tập, rèn luyện; là công dân tốt và sinh viên xuất sắc.
                </p>
              </div>

              <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <span className="font-bold text-xs text-[#7a1818] block mb-1">
                  • Sinh viên chưa là đảng viên
                </span>
                <p className="text-xs text-ink leading-relaxed">
                  Tích cực học tập lý luận chính trị và tư tưởng Hồ Chí Minh; tu
                  dưỡng đạo đức để đưa non sông{" "}
                  <em>“sánh vai với các cường quốc năm châu”</em> theo Thư gửi
                  học sinh tháng 9/1945.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="xay-dung-dang"
      code="4.3.1"
      title="XÂY DỰNG ĐẢNG THẬT SỰ TRONG SẠCH, VỮNG MẠNH"
      parentPath="4.3. Vận dụng xây dựng Đảng và Nhà nước"
      quote="Sai một ly thì đi một dặm, đó là tầm quan trọng của đường lối, chủ trương của Đảng. Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư."
      quoteAuthor="Hồ Chí Minh"
      summary="Đề ra đường lối chủ trương đúng đắn, tổ chức thực hiện thắng lợi trong thực tiễn, kiên quyết tự chỉnh đốn nội bộ và xác định rõ trách nhiệm của thế hệ trẻ, sinh viên."
      tabs={tabs}
      prevSection={{
        id: "trong-sach-vung-manh",
        label: "← 4.2.3 Nhà nước trong sạch, vững mạnh",
      }}
      nextSection={{
        id: "xay-dung-nha-nuoc",
        label: "4.3.2 Xây dựng Nhà nước →",
      }}
    />
  );
}
