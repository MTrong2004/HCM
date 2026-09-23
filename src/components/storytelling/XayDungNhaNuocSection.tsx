"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import EditorialReveal from "@/components/shared/EditorialReveal";
import ArchivalPhotoPlate from "@/components/shared/ArchivalPhotoPlate";

export default function XayDungNhaNuocSection() {
  const tabs: TabItem[] = [
    {
      id: "phap-luat-quyen-luc",
      label: "a. Hoàn thiện pháp luật & Kiểm soát quyền lực",
      badge: "Thể chế & Kiểm soát",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái (6 cols trên LG): Hoàn thiện hệ thống pháp luật gắn với thi hành */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Hoàn thiện hệ thống pháp luật gắn với thi hành
                  </h3>
                </div>

                <div className="p-2.5 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Mục tiêu cốt lõi
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Nâng cao hiệu lực, hiệu quả quản lý của Nhà nước theo Hiến pháp và pháp luật; bảo đảm quyền con người, quyền và nghĩa vụ cơ bản của công dân.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                    Bản chất “hai mặt biện chứng” của pháp luật:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-ink">
                    <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                      <strong className="text-xs text-[#7a1818] block font-serif">
                        Công cụ của Nhà nước:
                      </strong>
                      <p className="text-xs leading-relaxed text-ink/90">
                        Quản lý mọi mặt đời sống kinh tế - xã hội, giữ vững kỷ cương phép nước.
                      </p>
                    </div>

                    <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                      <strong className="text-xs text-[#7a1818] block font-serif">
                        Công cụ của Nhân dân:
                      </strong>
                      <p className="text-xs leading-relaxed text-ink/90">
                        Thực thi quyền làm chủ, giám sát công quyền, ngăn ngừa tùy tiện, lộng quyền.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-xs sm:text-[13px] text-ink leading-relaxed">
                  <span className="font-bold text-[#7a1818]">Gắn lập pháp với thi hành:</span> Pháp luật chỉ phát huy trọn vẹn giá trị khi đi vào đời sống; tinh thần thượng tôn pháp luật phải trở thành chuẩn mực tự giác của mọi cơ quan và mỗi công dân.
                </div>
              </div>
            </EditorialReveal>

            {/* Tư liệu hình ảnh: Chính phủ hợp hiến 1946 */}
            <EditorialReveal delay={160}>
              <ArchivalPhotoPlate
                src="/images/archival/chinh-phu-hop-hien-1946.webp"
                alt="Chính phủ Liên hiệp Kháng chiến năm 1946 do Chủ tịch Hồ Chí Minh đứng đầu"
                caption="Chính phủ Liên hiệp Kháng chiến ra mắt Quốc hội khóa I ngày 2/3/1946 do Chủ tịch Hồ Chí Minh đứng đầu — bộ máy điều hành hợp hiến, hợp pháp đầu tiên của nước Việt Nam mới."
                year="1946"
                badgeText="CHÍNH PHỦ HỢP HIẾN • 1946"
                source="Trung tâm Lưu trữ Quốc gia III"
                aspectRatio="16/9"
                compact
              />
            </EditorialReveal>
          </div>

          {/* Cột phải (6 cols trên LG): Phân công, phối hợp & kiểm soát quyền lực */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    2. Phân công, phối hợp & kiểm soát quyền lực
                  </h4>
                </div>

                <div className="p-2.5 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Nguyên tắc nền tảng tối cao
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-ink font-semibold leading-relaxed">
                    Quyền lực nhà nước là thống nhất, thuộc về Nhân dân — là cội nguồn của mọi quyền lực chính trị.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block font-serif text-[13px]">
                      • Rõ quyền hạn, không chồng chéo:
                    </strong>
                    <p className="leading-relaxed text-ink/90">
                      Quy định rành mạch quyền hạn, trách nhiệm cụ thể của từng nhánh quyền lực để loại bỏ triệt để tình trạng đùn đẩy hoặc né tránh trách nhiệm.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block font-serif text-[13px]">
                      • Phân định Trung ương và địa phương:
                    </strong>
                    <p className="leading-relaxed text-ink/90">
                      Phân định rành mạch thẩm quyền giữa Trung ương và địa phương; hoàn thiện cơ chế phối hợp và kiểm soát quyền lực ở từng cấp chính quyền.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block font-serif text-[13px]">
                      • Kiểm soát quyền lực chặt chẽ:
                    </strong>
                    <p className="leading-relaxed text-ink/90">
                      Thiết lập cơ chế kiểm soát đa tầng (Đảng lãnh đạo, Nhà nước tự kiểm tra, Nhân dân giám sát tối cao) để không một quyền lực nào đứng ngoài pháp luật.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "doi-ngu-can-bo",
      label: "b. Cán bộ 'Công bộc'",
      badge: "Vừa hồng vừa chuyên",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Vai trò Đảng & Chuẩn mực cán bộ */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Xây dựng đội ngũ cán bộ, công chức (&ldquo;Công bộc của dân&rdquo;)
                  </h3>
                </div>

                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-xs sm:text-[13px] text-ink leading-relaxed">
                  <strong>Vai trò của Đảng:</strong> Đảng tập trung lãnh đạo về đường lối, chủ trương, xây dựng tiêu chuẩn, cơ chế, chính sách về cán bộ, công chức.
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Chuẩn mực toàn diện “vừa hồng vừa chuyên”
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, có trình độ chuyên môn nghiệp vụ phù hợp để thực thi công vụ trong thời kỳ mới.
                  </p>
                </div>

                <div className="p-3 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1.5">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                    Đổi mới căn bản tiêu chí đánh giá cán bộ
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Lấy <strong>bản lĩnh chính trị, phẩm chất đạo đức, năng lực và hiệu quả thực tế của công việc</strong> làm thước đo để đánh giá, đề bạt, bổ nhiệm cán bộ.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Các giải pháp đổi mới mang tính đột phá */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Các giải pháp đổi mới mang tính đột phá
                  </h4>
                </div>

                <div className="space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block">
                      • Dân chủ hóa công tác cán bộ:
                    </strong>
                    <p className="leading-relaxed">
                      Đẩy mạnh dân chủ hóa công tác cán bộ; quy định rõ trách nhiệm, quyền hạn của người đứng đầu cơ quan hành chính.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block">
                      • Thí điểm dân trực tiếp bầu & thi tuyển:
                    </strong>
                    <p className="leading-relaxed">
                      Thực hiện thí điểm dân trực tiếp bầu một số chức danh ở cơ sở và <strong>cấp huyện</strong>; mở rộng đối tượng thi tuyển chức danh cán bộ lãnh đạo, quản lý.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block">
                      • Trọng dụng nhân tài:
                    </strong>
                    <p className="leading-relaxed">
                      Xây dựng cơ chế, chính sách đãi ngộ xứng đáng, thu hút và <strong>trọng dụng nhân tài</strong> phục vụ đất nước.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "phong-chong-giac-noi-xam",
      label: "c. Phòng, chống 'Giặc nội xâm'",
      badge: "Không vùng cấm",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Nhận diện hiểm họa & Đấu tranh triệt để */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu
                  </h3>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Nhận diện đúng bản chất hiểm họa
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Bác coi tham ô, lãng phí, quan liêu là <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> – kẻ thù phá hoại sự nghiệp cách mạng từ bên trong, làm xói mòn <strong>lòng tin sinh tử của nhân dân vào chế độ</strong>.
                  </p>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1 text-xs sm:text-[13px] text-ink">
                  <strong className="text-[#7a1818] block">
                    • Chống thói quan liêu, hách dịch, cửa quyền:
                  </strong>
                  <p className="leading-relaxed">
                    Kiên quyết đấu tranh chống thói quan liêu, hách dịch, cửa quyền, sách nhiễu nhân dân trong bộ máy hành chính; thực hành tiết kiệm triệt để trong các cơ quan nhà nước và <strong>trong đội ngũ cán bộ, công chức</strong>.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Kỷ cương phép nước & Cơ chế phòng ngừa đồng bộ */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Nguyên tắc kỷ cương phép nước
                  </h4>
                </div>

                <div className="p-3 bg-[#fdf3e7] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Nguyên tắc tối cao
                  </div>
                  <blockquote className="font-serif italic font-bold text-xs sm:text-[13.5px] text-[#7a1818] leading-relaxed">
                    “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                  </blockquote>
                </div>

                <div className="p-3 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1.5 text-xs sm:text-[13px] text-ink">
                  <div className="font-serif font-bold text-[#7a1818]">
                    Hệ thống cơ chế phòng ngừa đồng bộ:
                  </div>
                  <p className="leading-relaxed text-ink-muted">
                    Xây dựng cơ chế chặt chẽ để <strong>không thể tham nhũng</strong>, cơ chế xử phạt nghiêm khắc để <strong>không dám tham nhũng</strong>, và cơ chế chính sách đãi ngộ thỏa đáng để <strong>không cần tham nhũng</strong>.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "doi-moi-phuong-thuc-lanh-dao",
      label: "d. Đổi mới lãnh đạo của Đảng",
      badge: "Gương mẫu & Tiền đề",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Đổi mới phương thức lãnh đạo */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Đổi mới, tăng cường sự lãnh đạo của Đảng đối với Nhà nước
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Tiếp tục nâng cao hiệu quả và đổi mới mạnh mẽ phương thức lãnh đạo của Đảng đối với Nhà nước:
                </p>

                <div className="space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block">
                      • Lãnh đạo bằng chủ trương & thể chế hóa:
                    </strong>
                    <p className="leading-relaxed">
                      Đảng lãnh đạo Nhà nước bằng các chủ trương, chính sách lớn; lãnh đạo thể chế hóa đường lối thành chính sách, pháp luật.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block">
                      • Xây dựng cán bộ & tổ chức thi hành:
                    </strong>
                    <p className="leading-relaxed">
                      Đảng lãnh đạo xây dựng đội ngũ cán bộ công chức đủ phẩm chất và năng lực; <strong>lãnh đạo tổ chức thực hiện có hiệu quả pháp luật</strong>.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1">
                    <strong className="text-[#7a1818] block font-serif">
                      Nguyên tắc lãnh đạo chuẩn mực:
                    </strong>
                    <p className="leading-relaxed font-semibold text-[#7a1818]">
                      Tuyệt đối không bao biện, làm thay, không buông lỏng vai trò lãnh đạo.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Cải cách lập pháp/tư pháp, Tính nêu gương & Tiền đề sống còn */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Cải cách tư pháp, tính nêu gương & tiền đề sống còn
                  </h4>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1 text-xs sm:text-[13px] text-ink">
                  <strong className="text-[#7a1818] block">
                    • Lãnh đạo cải cách thể chế:
                  </strong>
                  <p className="leading-relaxed">
                    Chú trọng lãnh đạo đổi mới, <strong>nâng cao chất lượng lập pháp, cải cách hành chính và cải cách tư pháp</strong>.
                  </p>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Tính nêu gương tối cao
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Mọi tổ chức Đảng và toàn thể đảng viên phải nghiêm chỉnh, gương mẫu tuân thủ Hiến pháp và pháp luật.
                  </p>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1 text-xs sm:text-[13px]">
                  <div className="font-serif font-bold text-[#7a1818]">
                    Tiền đề quyết định thắng lợi:
                  </div>
                  <p className="text-ink leading-relaxed font-serif font-bold">
                    Sự trong sạch, vững mạnh của Đảng là tiền đề tất yếu, quyết định sự thành bại của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh.
                  </p>
                </div>
              </div>
            </EditorialReveal>
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
      summary="Vận dụng 4 nội dung trọng yếu: a. Hoàn thiện pháp luật & kiểm soát quyền lực; b. Xây dựng cán bộ 'vừa hồng vừa chuyên'; c. Đấu tranh chống 'giặc nội xâm' không vùng cấm; d. Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước."
      tabs={tabs}
      prevSection={{
        id: "xay-dung-dang",
        label: "← 4.3.1 Xây dựng Đảng",
      }}
      nextSection={{
        id: "ket-luan",
        label: "Ứng dụng AI →",
      }}
    />
  );
}