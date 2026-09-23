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
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Tầm quan trọng sinh tử */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Phải đề ra đường lối, chủ trương đúng đắn
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Đường lối, chủ trương của Đảng giữ vai trò quyết định định hướng
                cho sự phát triển của toàn bộ dân tộc và đất nước.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Tầm quan trọng sinh tử
                </div>
                <blockquote className="font-serif italic text-xs sm:text-sm text-ink font-semibold leading-relaxed">
                  “Sai một ly thì đi một dặm, đó là tầm quan trọng của đường lối,
                  chủ trương của Đảng.”
                </blockquote>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Một đường lối sai lầm về chính trị hoặc kinh tế sẽ kéo lùi sự phát
                  triển của cả dân tộc, làm tổn hại sinh mạng và hạnh phúc của hàng
                  chục triệu người dân.
                </p>
              </div>
            </div>

            {/* Cột phải: 3 Cơ sở khoa học hoạch định */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  3 Cơ sở khoa học để hoạch định đường lối
                </h3>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Kiên định nền tảng lý luận
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Phải kiên định và vận dụng sáng tạo nền tảng lý luận chủ nghĩa
                    Mác - Lênin và tư tưởng Hồ Chí Minh.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Xuất phát từ thực tiễn khách quan
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Phải xuất phát từ điều kiện thực tiễn khách quan của đất nước,
                    tôn trọng quy luật kinh tế - xã hội trong từng thời kỳ, từng giai
                    đoạn lịch sử cụ thể.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    • Xuất phát từ lợi ích chân chính của Nhân dân
                  </span>
                  <p className="text-xs text-ink leading-relaxed italic font-serif">
                    “Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến
                    dân, ta phải hết sức tránh.”
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
      label: "(2) Phương diện tổ chức, thực hiện",
      badge: "Hành động & Nêu gương",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Khâu tổ chức thực hiện */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                Tổ chức thực hiện thật tốt đường lối, chủ trương
              </h4>
              <div className="p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg text-xs text-ink">
                <strong>Ý nghĩa quyết định:</strong> Đề ra đường lối đúng mới chỉ
                là một nửa chặng đường; khâu tổ chức thực hiện có ý nghĩa quyết định
                thắng lợi trong thực tế.
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Thể chế hóa thành chính sách, pháp luật
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Phải thể chế hóa đường lối của Đảng thành chính sách, pháp luật
                    của Nhà nước và các đề án, kế hoạch hành động cụ thể.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Biến thành hành động tự giác toàn dân
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Phải biến đường lối thành hành động tích cực, tự giác của tất cả
                    các tổ chức trong hệ thống chính trị và mọi tầng lớp nhân dân.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Phát huy trách nhiệm cán bộ chiến lược
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Thực thi và phát huy đầy đủ vai trò, trách nhiệm của đội ngũ cán
                    bộ, đảng viên, đặc biệt là đội ngũ cán bộ cấp chiến lược.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Trách nhiệm làm gương của người đứng đầu */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                Nêu cao trách nhiệm làm gương của người đứng đầu
              </h4>
              <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Giáo trình chỉ rõ:{" "}
                  <em>
                    “Đặc biệt quan trọng nữa là người đứng đầu phải nêu cao trách
                    nhiệm làm gương tốt để mọi người noi theo.”
                  </em>
                </p>
                <div className="p-4 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs font-serif italic text-ink space-y-1">
                  <span className="font-bold text-[#7a1818] block not-italic">
                    Lời Bác căn dặn:
                  </span>
                  “Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên
                  truyền.”
                </div>
              </div>
            </div>
          </div>

          <InfographicDuongLoiDenHanhDong />
        </div>
      ),
    },
    {
      id: "chinh-don-dang-va-sinh-vien",
      label: "(3) Chỉnh đốn & (4) Trách nhiệm SV",
      badge: "Nói đi đôi với làm",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái: (3) Phương diện công tác chỉnh đốn Đảng */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#7a1818]">
              (3) Chú trọng hơn nữa công tác chỉnh đốn nội bộ
            </h4>
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
              <div className="font-bold text-xs text-[#7a1818]">
                Tính tất yếu sống còn & Bản chất Đảng
              </div>
              <p className="text-xs text-ink leading-relaxed">
                Chất lượng, năng lực lãnh đạo và sự trong sạch của bản thân Đảng quyết
                định sự thành bại của cách mạng và đổi mới.
              </p>
              <p className="text-xs text-ink leading-relaxed">
                Thường xuyên tự chỉnh đốn để mỗi đảng viên luôn xứng đáng{" "}
                <em>“vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân”</em>.
                Làm cho Đảng luôn luôn là <strong>“Đảng là đạo đức, là văn minh”</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-1.5">
              <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                Khắc phục khâu yếu kém nhất hiện nay
              </div>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Giáo trình chỉ rõ điểm nghẽn nghiêm trọng nhất:{" "}
                <em>
                  “Cái thiếu nhất hiện nay là sự thống nhất giữa nói và làm trong
                  Đảng.”
                </em>
              </p>
              <p className="text-xs text-ink-muted leading-relaxed">
                Toàn Đảng phải quán triệt sâu sắc nguyên tắc thống nhất giữa nói và
                làm; tăng cường kiểm tra, giám sát để sử dụng đúng đắn quyền lực
                chính trị do Nhân dân giao phó.
              </p>
            </div>
          </div>

          {/* Cột phải: (4) Phương diện phát triển và trách nhiệm của sinh viên */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#7a1818]">
              (4) Trách nhiệm của sinh viên đối với xây dựng Đảng
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <span className="font-bold text-xs text-[#7a1818] block mb-1">
                  • Đối với sinh viên đang là đảng viên
                </span>
                <p className="text-xs text-ink leading-relaxed">
                  Cần chú trọng thực hiện thật tốt đường lối, quan điểm, chủ trương,
                  Điều lệ Đảng; gương mẫu trong học tập và rèn luyện; phải là công dân
                  gương mẫu và là sinh viên tốt.
                </p>
              </div>

              <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <span className="font-bold text-xs text-[#7a1818] block mb-1">
                  • Đối với sinh viên chưa là đảng viên
                </span>
                <p className="text-xs text-ink leading-relaxed">
                  Cần tích cực nghiên cứu, học tập thật tốt lý luận chính trị và tư
                  tưởng Hồ Chí Minh; tu dưỡng đạo đức cách mạng; phấn đấu trở thành
                  đảng viên Đảng Cộng sản Việt Nam hoặc người công dân tích cực ủng
                  hộ Đảng.
                </p>
                <div className="mt-2 pt-2 border-t border-[#ebd8c2] text-xs font-serif italic text-ink">
                  Góp phần đưa nước nhà <em>“sánh vai với các cường quốc năm châu”</em> như
                  Bác Hồ đã gửi gắm trong Thư gửi học sinh nhân ngày khai trường đầu
                  tiên (tháng 9/1945).
                </div>
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
      summary="Vận dụng 4 phương diện chiến lược: (1) Hoạch định đường lối đúng đắn; (2) Tổ chức thực hiện hiệu quả gắn với trách nhiệm nêu gương của người đứng đầu; (3) Tự chỉnh đốn nội bộ, khắc phục sự thiếu thống nhất giữa nói và làm; (4) Nâng cao vai trò, trách nhiệm của thế hệ sinh viên."
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
