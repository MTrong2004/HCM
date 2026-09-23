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
      label: "(1) Pháp luật & (2) Cơ chế 3 quyền",
      badge: "Thể chế & Thống nhất",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: (1) Hai mặt biện chứng của pháp luật */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                (1) Hoàn thiện hệ thống pháp luật gắn với thi hành
              </h4>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Nâng cao hiệu lực, hiệu quả quản lý của Nhà nước, quản lý đất nước
                theo Hiến pháp và pháp luật, đồng thời coi trọng xây dựng nền tảng
                đạo đức xã hội.
              </p>

              <div className="p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Bản chất “hai mặt biện chứng” của pháp luật:
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white rounded border border-[#dfd2be]">
                    <strong className="text-[#7a1818] block mb-0.5">
                      1. Công cụ quản lý của Nhà nước:
                    </strong>
                    Pháp luật là công cụ sắc bén để Nhà nước quản lý mọi mặt đời
                    sống kinh tế - xã hội.
                  </div>
                  <div className="p-2.5 bg-white rounded border border-[#dfd2be]">
                    <strong className="text-[#7a1818] block mb-0.5">
                      2. Công cụ tối thượng để Nhân dân làm chủ:
                    </strong>
                    Pháp luật đồng thời là công cụ pháp lý tối thượng để Nhân dân làm
                    chủ, kiểm tra, giám sát quyền lực nhà nước, ngăn ngừa sự tùy
                    tiện, lộng quyền của cơ quan công quyền.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg text-xs text-ink leading-relaxed">
                <strong>Bảo vệ quyền con người, quyền công dân:</strong> Tiếp tục
                hoàn thiện hệ thống pháp luật theo hướng tôn trọng, bảo đảm, bảo vệ
                quyền con người, quyền và nghĩa vụ cơ bản của công dân.
              </div>
            </div>

            {/* Cột phải: (2) Phân công, phối hợp và kiểm soát quyền lực */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                (2) Cơ chế phân công, phối hợp & kiểm soát quyền lực
              </h4>
              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Nguyên tắc nền tảng
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed font-semibold">
                  Quyền lực nhà nước là thống nhất, thuộc về Nhân dân.
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Phải xác định rõ cơ chế phân công, phối hợp và kiểm soát giữa
                  các cơ quan nhà nước trong việc thực hiện ba quyền:{" "}
                  <strong>Lập pháp (Quốc hội), Hành pháp (Chính phủ), Tư pháp (Tòa án và Viện kiểm sát)</strong>.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-ink">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-[#7a1818] block mb-1">
                    • Rõ thẩm quyền, tránh chồng chéo:
                  </span>
                  Quy định rõ hơn quyền hạn, trách nhiệm cụ thể của mỗi quyền để
                  tránh chồng chéo hoặc đùn đẩy trách nhiệm.
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <span className="font-bold text-[#7a1818] block mb-1">
                    • Phân định Trung ương và địa phương:
                  </span>
                  Phân định rành mạch thẩm quyền, trách nhiệm giữa cơ quan nhà nước
                  ở Trung ương và địa phương; hoàn thiện cơ chế phối hợp và kiểm
                  soát quyền lực ở từng cấp chính quyền địa phương.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "doi-ngu-can-bo",
      label: "(3) Xây dựng cán bộ 'Công bộc'",
      badge: "Vừa hồng vừa chuyên",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Chuẩn mực cán bộ */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                Xây dựng đội ngũ cán bộ, công chức (&ldquo;Công bộc của dân&rdquo;)
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Đảng tập trung lãnh đạo về đường lối, chủ trương, xây dựng tiêu
                chuẩn, cơ chế, chính sách về cán bộ, công chức.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Chuẩn mực toàn diện “vừa hồng, vừa chuyên”
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, có
                  trình độ chuyên môn nghiệp vụ phù hợp để thực thi công vụ trong
                  thời kỳ mới.
                </p>
              </div>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <div className="font-bold text-xs text-[#7a1818]">
                  Đổi mới căn bản tiêu chí đánh giá cán bộ
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Lấy <strong>bản lĩnh chính trị, phẩm chất đạo đức, năng lực và hiệu quả thực tế</strong> của
                  công việc làm thước đo để đánh giá, đề bạt, bổ nhiệm cán bộ.
                </p>
              </div>
            </div>

            {/* Cột phải: Các giải pháp đổi mới mang tính đột phá */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                Các giải pháp đổi mới mang tính đột phá
              </h4>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    <strong>Dân chủ hóa công tác cán bộ:</strong> Đẩy mạnh dân chủ
                    hóa công tác cán bộ; quy định rõ trách nhiệm, quyền hạn của
                    người đứng đầu cơ quan hành chính.
                  </span>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    <strong>Thí điểm dân bầu & thi tuyển:</strong> Thực hiện thí
                    điểm dân trực tiếp bầu một số chức danh ở cơ sở và cấp huyện;
                    mở rộng đối tượng thi tuyển chức danh cán bộ lãnh đạo, quản lý.
                  </span>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-2.5 text-xs text-ink">
                  <span className="font-mono font-bold text-[#7a1818] flex-shrink-0">
                    •
                  </span>
                  <span>
                    <strong>Trọng dụng nhân tài:</strong> Xây dựng cơ chế, chính
                    sách đãi ngộ xứng đáng, thu hút và trọng dụng nhân tài phục vụ
                    đất nước.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "giac-noi-xam-va-lanh-dao-dang",
      label: "(4) Chống giặc nội xâm & (5) Đổi mới lãnh đạo",
      badge: "Kỷ cương & Tiền đề",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: (4) Phòng chống tham nhũng, lãng phí, quan liêu */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                (4) Kiên quyết đấu tranh phòng, chống “giặc nội xâm”
              </h4>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Nhận diện đúng bản chất hiểm họa: Bác coi tham ô, lãng phí, quan
                liêu là <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> –
                kẻ thù phá hoại sự nghiệp cách mạng từ bên trong, làm xói mòn lòng
                tin sinh tử của nhân dân vào chế độ.
              </p>

              <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-1 text-xs text-ink">
                <strong>Chống thói quan liêu, hách dịch:</strong> Kiên quyết đấu
                tranh chống thói quan liêu, hách dịch, cửa quyền, sách nhiễu nhân
                dân trong bộ máy hành chính; thực hành tiết kiệm triệt để trong các
                cơ quan nhà nước và trong đội ngũ cán bộ, công chức.
              </div>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-1.5">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Nguyên tắc kỷ cương phép nước
                </div>
                <blockquote className="text-xs sm:text-sm font-serif font-bold text-ink">
                  “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                </blockquote>
                <p className="text-[11px] text-ink-muted">
                  Xây dựng cơ chế phòng ngừa đồng bộ: không thể tham nhũng, không dám
                  tham nhũng, không cần tham nhũng.
                </p>
              </div>
            </div>

            {/* Cột phải: (5) Đổi mới, tăng cường sự lãnh đạo của Đảng */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                (5) Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước
              </h4>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2.5 text-xs text-ink">
                <p className="leading-relaxed">
                  Đảng lãnh đạo Nhà nước bằng các chủ trương, chính sách lớn; lãnh
                  đạo thể chế hóa đường lối thành chính sách, pháp luật; xây dựng
                  đội ngũ cán bộ đủ phẩm chất, năng lực.
                </p>

                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded font-serif text-[#7a1818] font-bold">
                  Tuyệt đối không bao biện, làm thay, không buông lỏng vai trò lãnh đạo.
                </div>

                <p className="leading-relaxed text-ink-muted">
                  Chú trọng lãnh đạo đổi mới, nâng cao chất lượng lập pháp, cải cách
                  hành chính và cải cách tư pháp.
                </p>

                <p className="leading-relaxed">
                  <strong>Tính nêu gương tối cao:</strong> Mọi tổ chức Đảng và toàn
                  thể đảng viên phải nghiêm chỉnh, gương mẫu tuân thủ Hiến pháp và
                  pháp luật.
                </p>

                <div className="pt-2 border-t border-[#ebd8c2] font-semibold text-[#7a1818]">
                  Sự trong sạch, vững mạnh của Đảng là tiền đề tất yếu, quyết định sự
                  thành bại của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh.
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
      summary="Vận dụng 5 nội dung trọng yếu: (1) Hoàn thiện pháp luật và thi hành; (2) Cơ chế 3 nhánh quyền lực; (3) Xây dựng cán bộ 'vừa hồng vừa chuyên'; (4) Đấu tranh chống 'giặc nội xâm' không vùng cấm; (5) Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước."
      tabs={tabs}
      prevSection={{
        id: "xay-dung-dang",
        label: "← 4.3.1 Xây dựng Đảng",
      }}
      nextSection={{
        id: "phong-chong-tham-nhung",
        label: "Vận dụng: Chống 'Giặc nội xâm' →",
      }}
    />
  );
}
