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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: (1) Hai mặt biện chứng của pháp luật */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              (1) Hoàn thiện hệ thống pháp luật gắn với thi hành
            </h4>
            <p className="text-[11px] sm:text-xs text-ink leading-snug">
              Nâng cao hiệu lực quản lý của Nhà nước theo Hiến pháp và pháp luật, đồng thời coi trọng xây dựng nền tảng đạo đức xã hội.
            </p>

            <div className="p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1.5">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Bản chất “hai mặt biện chứng” của pháp luật:
              </div>
              <div className="space-y-1 text-[10.5px]">
                <div className="p-1.5 bg-white rounded border border-[#dfd2be]">
                  <strong className="text-[#7a1818] block mb-0.5">
                    1. Công cụ quản lý của Nhà nước:
                  </strong>
                  Pháp luật là công cụ sắc bén để Nhà nước quản lý mọi mặt đời sống kinh tế - xã hội.
                </div>
                <div className="p-1.5 bg-white rounded border border-[#dfd2be]">
                  <strong className="text-[#7a1818] block mb-0.5">
                    2. Công cụ tối thượng để Nhân dân làm chủ:
                  </strong>
                  Pháp luật là công cụ tối thượng để Nhân dân làm chủ, kiểm soát quyền lực nhà nước, ngăn ngừa sự lộng quyền của cơ quan công quyền.
                </div>
              </div>
            </div>

            <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md text-[10.5px] text-ink leading-snug">
              <strong>Bảo vệ quyền con người, quyền công dân:</strong> Hoàn thiện hệ thống pháp luật theo hướng tôn trọng, bảo đảm, bảo vệ quyền con người và quyền cơ bản của công dân.
            </div>
          </div>

          {/* Cột phải: (2) Phân công, phối hợp và kiểm soát quyền lực */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              (2) Cơ chế phân công, phối hợp & kiểm soát quyền lực
            </h4>
            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Nguyên tắc nền tảng
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-snug font-semibold">
                Quyền lực nhà nước là thống nhất, thuộc về Nhân dân.
              </p>
              <p className="text-[10.5px] text-ink-muted leading-snug">
                Xác định rõ cơ chế phân công, phối hợp và kiểm soát giữa các cơ quan thực hiện 3 quyền:{" "}
                <strong>Lập pháp (Quốc hội), Hành pháp (Chính phủ), Tư pháp (Tòa án và Viện kiểm sát)</strong>.
              </p>
            </div>

            <div className="space-y-1.5 text-[10.5px] text-ink">
              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <span className="font-bold text-[#7a1818] block mb-0.5">
                  • Rõ thẩm quyền, tránh chồng chéo:
                </span>
                Quy định rõ hơn quyền hạn, trách nhiệm cụ thể của mỗi nhánh quyền lực để tránh chồng chéo hoặc đùn đẩy trách nhiệm.
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <span className="font-bold text-[#7a1818] block mb-0.5">
                  • Phân định Trung ương và địa phương:
                </span>
                Phân định rành mạch thẩm quyền giữa Trung ương và địa phương; hoàn thiện cơ chế phối hợp và kiểm soát quyền lực ở từng cấp.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Chuẩn mực cán bộ */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              Xây dựng đội ngũ cán bộ, công chức (&ldquo;Công bộc của dân&rdquo;)
            </h4>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Đảng tập trung lãnh đạo về đường lối, chủ trương, xây dựng tiêu chuẩn, cơ chế, chính sách về cán bộ, công chức.
            </p>

            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Chuẩn mực toàn diện “vừa hồng, vừa chuyên”
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-snug">
                Bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, có trình độ chuyên môn nghiệp vụ phù hợp để thực thi công vụ.
              </p>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
              <div className="font-bold text-[10.5px] text-[#7a1818]">
                Đổi mới căn bản tiêu chí đánh giá cán bộ
              </div>
              <p className="text-[10.5px] text-ink leading-snug">
                Lấy <strong>bản lĩnh chính trị, phẩm chất đạo đức, năng lực và hiệu quả thực tế</strong> của công việc làm thước đo đề bạt, bổ nhiệm.
              </p>
            </div>
          </div>

          {/* Cột phải: Các giải pháp đổi mới mang tính đột phá */}
          <div className="lg:col-span-6 space-y-1.5">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              Các giải pháp đổi mới mang tính đột phá
            </h4>

            <div className="space-y-1.5">
              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[10.5px] text-ink">
                <strong>• Dân chủ hóa công tác cán bộ:</strong> Quy định rõ trách nhiệm, quyền hạn của người đứng đầu cơ quan hành chính.
              </div>

              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[10.5px] text-ink">
                <strong>• Thí điểm dân bầu & thi tuyển:</strong> Thực hiện thí điểm dân trực tiếp bầu một số chức danh ở cơ sở; mở rộng thi tuyển chức danh lãnh đạo, quản lý.
              </div>

              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[10.5px] text-ink">
                <strong>• Trọng dụng nhân tài:</strong> Xây dựng chính sách đãi ngộ xứng đáng, thu hút và trọng dụng nhân tài phục vụ đất nước.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: (4) Phòng chống tham nhũng, lãng phí, quan liêu */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              (4) Kiên quyết đấu tranh phòng, chống “giặc nội xâm”
            </h4>
            <p className="text-[11px] sm:text-xs text-ink leading-snug">
              Bác coi tham ô, lãng phí, quan liêu là <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> – kẻ thù phá hoại từ bên trong, làm xói mòn lòng tin của nhân dân.
            </p>

            <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md text-[10.5px] text-ink leading-snug">
              <strong>Chống thói quan liêu, hách dịch:</strong> Kiên quyết chống thói cửa quyền, sách nhiễu; thực hành tiết kiệm triệt để trong cơ quan nhà nước.
            </div>

            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-0.5">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Nguyên tắc kỷ cương phép nước
              </div>
              <blockquote className="text-[11px] sm:text-xs font-serif font-bold text-ink">
                “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
              </blockquote>
              <p className="text-[10px] text-ink-muted">
                Xây dựng cơ chế phòng ngừa đồng bộ: không thể tham nhũng, không dám tham nhũng, không cần tham nhũng.
              </p>
            </div>
          </div>

          {/* Cột phải: (5) Đổi mới phương thức lãnh đạo của Đảng */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
              (5) Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước
            </h4>

            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5 text-[10.5px] text-ink">
              <p className="leading-snug">
                Đảng lãnh đạo Nhà nước bằng các chủ trương, chính sách lớn; lãnh đạo thể chế hóa đường lối thành chính sách, pháp luật; xây dựng đội ngũ cán bộ đủ phẩm chất, năng lực.
              </p>

              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded font-serif text-[#7a1818] font-bold">
                Tuyệt đối không bao biện, làm thay, không buông lỏng vai trò lãnh đạo.
              </div>

              <p className="leading-snug">
                <strong>Tính nêu gương tối cao:</strong> Mọi tổ chức Đảng và đảng viên phải nghiêm chỉnh, gương mẫu tuân thủ Hiến pháp và pháp luật.
              </p>

              <div className="pt-1 border-t border-[#ebd8c2] font-semibold text-[#7a1818]">
                Sự trong sạch của Đảng là tiền đề tất yếu quyết định sự thành bại xây dựng Nhà nước.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "co-che-van-hanh-va-infographic",
      label: "(6) Cơ chế vận hành & Infographic 3 quyền",
      badge: "Đảng - Nhà nước - Dân",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: 3 Vai trò cốt lõi */}
          <div className="lg:col-span-6 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Mối quan hệ: Đảng Lãnh đạo – Nhà nước Quản lý – Dân Làm chủ
                </h4>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1 text-[10.5px] text-ink">
                <div>
                  <strong className="text-[#7a1818]">1. Đảng Lãnh đạo:</strong> Đề ra đường lối, chủ trương, định hướng chính trị; bố trí cán bộ chủ chốt; kiểm tra và giám sát việc thực hiện.
                </div>
                <div>
                  <strong className="text-[#7a1818]">2. Nhà nước Quản lý:</strong> Thể chế hóa chủ trương của Đảng thành pháp luật; tổ chức thực thi hiệu lực, hiệu quả bằng bộ máy tinh gọn, liêm chính.
                </div>
                <div>
                  <strong className="text-[#7a1818]">3. Nhân dân Làm chủ:</strong> Chủ thể tối cao của quyền lực nhà nước; thực hiện quyền làm chủ trực tiếp và gián tiếp; kiểm tra, giám sát mọi hoạt động công quyền.
                </div>
              </div>
            </div>

            <div className="p-2 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-[10.5px] font-serif italic text-ink space-y-0.5">
              <span className="font-bold text-[#7a1818] block not-italic">
                Nguyên tắc vận hành tối cao:
              </span>
              Ba yếu tố gắn kết hữu cơ, thống nhất mục tiêu phụng sự Tổ quốc và Nhân dân. Không bao biện làm thay, không lấn sân, thượng tôn Hiến pháp và pháp luật.
            </div>
          </div>

          {/* Cột phải: Infographic 3 nhánh quyền lực */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <InfographicDangNhaNuocNhanDan />
          </div>
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
