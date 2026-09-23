"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import InfographicDangNhaNuocNhanDan from "@/components/infographics/InfographicDangNhaNuocNhanDan";

export default function XayDungNhaNuocSection() {
  const tabs: TabItem[] = [
    {
      id: "phap-luat-quyen-luc",
      label: "a. Pháp luật & Kiểm soát quyền lực",
      badge: "Thể chế & 3 Quyền",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Hai mặt biện chứng của pháp luật */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Hoàn thiện hệ thống pháp luật & Thi hành
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Nâng cao hiệu lực quản lý Nhà nước, quản lý đất nước theo Hiến
                pháp và pháp luật, đồng thời coi trọng xây dựng nền tảng đạo đức
                xã hội.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    Công cụ quản lý của Nhà nước
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Pháp luật là công cụ sắc bén để Nhà nước quản lý mọi mặt đời
                    sống kinh tế - xã hội.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-xs text-[#7a1818] block mb-1">
                    Công cụ làm chủ của Nhân dân
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    Pháp luật là công cụ tối thượng để Nhân dân làm chủ, kiểm
                    tra, giám sát quyền lực nhà nước, ngăn ngừa tùy tiện lộng
                    quyền.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Cơ chế phân công và kiểm soát quyền lực */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Phân công, phối hợp và kiểm soát quyền lực
              </h4>
              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Nguyên tắc cốt lõi
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Quyền lực nhà nước là thống nhất, thuộc về Nhân dân; có sự phân
                  công rành mạch, phối hợp chặt chẽ và kiểm soát hiệu quả giữa
                  ba quyền: <strong>Lập pháp</strong> (Quốc hội),{" "}
                  <strong>Hành pháp</strong> (Chính phủ), và{" "}
                  <strong>Tư pháp</strong> (Tòa án và Viện kiểm sát).
                </p>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed">
                Phân định thẩm quyền rõ ràng giữa Trung ương và địa phương, tránh
                chồng chéo và đùn đẩy trách nhiệm.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "doi-ngu-can-bo",
      label: "b. Xây dựng cán bộ 'Công bộc'",
      badge: "Vừa hồng vừa chuyên",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Chuẩn mực cán bộ */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Chuẩn mực “vừa hồng, vừa chuyên”
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Đảng tập trung lãnh đạo xây dựng tiêu chuẩn, cơ chế, chính sách
                cán bộ công chức có bản lĩnh chính trị vững vàng, phẩm chất đạo
                đức trong sáng và trình độ chuyên môn cao.
              </p>
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <div className="font-bold text-xs text-[#7a1818]">
                  Thước đo đánh giá cán bộ
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Lấy bản lĩnh chính trị, phẩm chất đạo đức, năng lực và hiệu quả
                  thực tế của công việc làm thước đo để đánh giá, đề bạt, bổ
                  nhiệm cán bộ.
                </p>
              </div>
            </div>

            {/* Cột phải: Đổi mới đột phá trong công tác cán bộ */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Các giải pháp đột phá
              </h4>
              <div className="space-y-2.5">
                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    Đẩy mạnh dân chủ hóa công tác cán bộ; quy định rõ trách nhiệm,
                    quyền hạn người đứng đầu.
                  </span>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    Thí điểm dân trực tiếp bầu một số chức danh ở cơ sở và cấp
                    huyện; mở rộng thi tuyển cán bộ lãnh đạo.
                  </span>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    Xây dựng cơ chế, chính sách đãi ngộ xứng đáng, thu hút và
                    trọng dụng nhân tài phụng sự đất nước.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "phong-chong-giac-noi-xam",
      label: "c. Phòng chống tiêu cực & Đổi mới lãnh đạo",
      badge: "Kỷ cương & Đổi mới",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Đấu tranh chống giặc nội xâm */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Đấu tranh chống “giặc nội xâm”
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Tham ô, lãng phí, quan liêu là <em>“giặc ở trong lòng”</em>,{" "}
                <em>“giặc nội xâm”</em> làm xói mòn niềm tin của nhân dân.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Nguyên tắc xử lý
                </div>
                <p className="text-xs sm:text-sm text-ink font-semibold">
                  “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                </p>
                <p className="text-xs text-ink-muted">
                  Xây dựng cơ chế phòng ngừa đồng bộ: không thể tham nhũng, không
                  dám tham nhũng, không cần tham nhũng.
                </p>
              </div>
            </div>

            {/* Cột phải: Đổi mới phương thức lãnh đạo của Đảng */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Đổi mới sự lãnh đạo của Đảng
              </h4>
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Đảng lãnh đạo Nhà nước bằng chủ trương lớn, thể chế hóa thành
                  chính sách, pháp luật.
                </p>
                <div className="p-3 bg-[#f5ecdc] rounded text-xs text-ink space-y-1">
                  <div className="font-bold text-[#7a1818]">Nguyên tắc cốt tử:</div>
                  <p>
                    Tuyệt đối không bao biện làm thay, không làm thay công việc
                    của các cơ quan nhà nước; đồng thời không buông lỏng vai trò
                    lãnh đạo toàn diện của Đảng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <InfographicDangNhaNuocNhanDan />
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="xay-dung-nha-nuoc"
      code="4.3.2"
      title="XÂY DỰNG NHÀ NƯỚC"
      parentPath="4.3. Vận dụng xây dựng Đảng và Nhà nước"
      quote="Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém. Cán bộ là người đầy tớ trung thành, tận tụy của nhân dân."
      quoteAuthor="Hồ Chí Minh"
      summary="Đẩy mạnh hoàn thiện hệ thống pháp luật gắn với tổ chức thi hành; phân công, phối hợp và kiểm soát quyền lực; xây dựng đội ngũ cán bộ vừa hồng vừa chuyên; kiên quyết đấu tranh phòng chống giặc nội xâm; và đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước."
      tabs={tabs}
      prevSection={{
        id: "xay-dung-dang",
        label: "← 4.3.1 Xây dựng Đảng",
      }}
      nextSection={{
        id: "phong-chong-tham-nhung",
        label: "4.3.3 Phòng, chống tham nhũng →",
      }}
    />
  );
}
