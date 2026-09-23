"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import InfographicQuyenLucKiemSoat from "@/components/infographics/InfographicQuyenLucKiemSoat";
import HeritageIntegrityPlate from "./HeritageIntegrityPlate";

export default function TrongSachVungManhSection() {
  const tabs: TabItem[] = [
    {
      id: "kiem-soat-quyen-luc",
      label: "a. Kiểm soát quyền lực nhà nước",
      badge: "Slide 1 — 4",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Slide 1 & Slide 2 */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Vì sao phải kiểm soát quyền lực? (Slide 1 & 2)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững
                mạnh không chỉ là xây dựng một bộ máy hoạt động hiệu quả mà còn
                phải kiểm soát quyền lực và phòng, chống các biểu hiện tiêu cực.
              </p>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Quyền lực là cần thiết để Nhà nước thực hiện chức năng quản lý xã
                hội, nhưng quyền lực nếu không được kiểm soát có thể dẫn đến{" "}
                <strong>lạm quyền, lộng quyền hoặc chuyên quyền</strong>. Người
                được giao quyền lực không được tự ý sử dụng quyền lực theo ý muốn
                cá nhân mà phải chịu sự kiểm tra, giám sát và tuân thủ pháp luật.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Điểm nhấn cốt lõi
                </div>
                <blockquote className="text-xs sm:text-sm font-serif italic text-ink font-semibold leading-relaxed">
                  “Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối.”
                </blockquote>
                <div className="text-[11px] font-mono text-[#7a1818] font-bold">
                  QUYỀN LỰC → KIỂM SOÁT → TRÁCH NHIỆM → NIỀM TIN CỦA NHÂN DÂN
                </div>
              </div>
            </div>

            {/* Cột phải: Slide 3 & Slide 4 */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Ai kiểm soát & Kiểm soát như thế nào? (Slide 3 & 4)
                </h3>
              </div>

              {/* Sơ đồ 3 cấp từ Slide 3 */}
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <div className="text-xs font-serif font-bold text-[#7a1818] uppercase tracking-wider">
                  Sơ đồ 3 chủ thể kiểm soát quyền lực (Slide 3):
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-[#7a1818]">1. ĐẢNG</span>
                    <span className="text-ink">Kiểm tra, giám sát cán bộ</span>
                  </div>
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-[#7a1818]">2. NHÀ NƯỚC</span>
                    <span className="text-ink">Pháp luật – Quy định – Kiểm tra</span>
                  </div>
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-[#7a1818]">3. NHÂN DÂN</span>
                    <span className="text-ink">Tham gia – Giám sát – Phản ánh</span>
                  </div>
                </div>
              </div>

              {/* Slide 4: Nhân dân kiểm soát như thế nào */}
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <div className="font-bold text-xs text-[#7a1818]">
                  Nhân dân kiểm soát quyền lực như thế nào? (Slide 4)
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Nhân dân không trực tiếp điều hành tất cả hoạt động của Nhà nước
                  nhưng có quyền tham gia quản lý xã hội, đóng góp ý kiến, kiểm tra,
                  giám sát và phản ánh những hành vi sai phạm.
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Khi phát hiện cán bộ hoặc cơ quan có dấu hiệu vi phạm, người dân
                  có thể phản ánh, khiếu nại hoặc tố cáo đến cơ quan, người có thẩm
                  quyền theo quy định, chứ không nhất thiết phải phản ánh cho chính
                  người bị phản ánh.
                </p>
                <div className="pt-2 border-t border-[#ebd8c2] text-xs font-serif italic text-[#7a1818] font-bold">
                  “Người có quyền lực cũng phải chịu sự kiểm soát.”
                </div>
              </div>
            </div>
          </div>

          <HeritageIntegrityPlate />
        </div>
      ),
    },
    {
      id: "phong-chong-tieu-cuc",
      label: "b. Phòng, chống các biểu hiện tiêu cực",
      badge: "Slide 5 — 6",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Slide 5 - Vì sao phải phòng chống tiêu cực */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Vì sao phải phòng, chống tiêu cực? (Slide 5)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Theo Hồ Chí Minh, những biểu hiện tiêu cực trong bộ máy Nhà nước có
                thể làm suy yếu hiệu quả hoạt động của Nhà nước và ảnh hưởng đến
                niềm tin của nhân dân.
              </p>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Vì vậy, muốn xây dựng Nhà nước trong sạch, vững mạnh thì phải chủ
                động phát hiện và ngăn chặn những biểu hiện tiêu cực, đặc biệt là:
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    1. Tham ô (Ăn cắp của công)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Hành vi chiếm đoạt tài sản công, biến của công thành của tư; làm
                    tổn hại nghiêm trọng đến tài sản của Nhà nước và nhân dân.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    2. Lãng phí (Không hiệu quả)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lãng phí sức lao động, thời gian và tiền của của nhân dân; gây
                    thiệt hại to lớn cho sự nghiệp phát triển kinh tế - xã hội.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    3. Bệnh quan liêu (Xa dân, xa thực tế)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Xa rời quần chúng nhân dân, xa rời thực tế, chỉ thích ngồi bàn
                    giấy, hội họp rườm rà. Quan liêu là cái nôi nuôi dưỡng tham ô, lãng phí.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Slide 6 - Những biểu hiện tiêu cực khác */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Những biểu hiện tiêu cực khác (Slide 6)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Bên cạnh tham ô, lãng phí và quan liêu, Hồ Chí Minh còn phê phán
                nhiều biểu hiện tiêu cực khác trong đội ngũ cán bộ:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-1">
                  <div className="font-bold text-xs text-[#7a1818]">
                    • Tư túng
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Thiên vị người thân, phe nhóm hoặc lợi ích riêng, đưa người nhà
                    vào vị trí không đủ phẩm chất, năng lực.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-1">
                  <div className="font-bold text-xs text-[#7a1818]">
                    • Chia rẽ
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Gây mất đoàn kết trong tập thể, kéo bè kéo cánh, cục bộ địa
                    phương, làm suy yếu sức mạnh của tổ chức.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-1">
                  <div className="font-bold text-xs text-[#7a1818]">
                    • Kiêu ngạo
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Có chức vụ rồi coi thường người khác, tự cho mình là đúng, không
                    chịu lắng nghe ý kiến đóng góp của quần chúng.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg text-xs text-ink">
                <strong>Hậu quả:</strong> Những biểu hiện này nếu không được ngăn
                chặn có thể làm suy giảm tính đoàn kết và hiệu quả của bộ máy Nhà nước.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "xay-di-doi-voi-chong",
      label: "c. 'Xây' đi đôi với 'Chống' & Nêu gương",
      badge: "Slide 7 — 9",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Slide 7 & Slide 9 */}
            <div className="lg:col-span-6 space-y-4">
              {/* Slide 7: "Xây" đi đôi với "Chống" */}
              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Slide 7 — &ldquo;Xây&rdquo; đi đôi với &ldquo;Chống&rdquo;
                </div>
                <div className="text-xs sm:text-sm font-serif font-bold text-ink">
                  “XÂY” ĐỂ TẠO RA CÁI TỐT — “CHỐNG” ĐỂ LOẠI BỎ CÁI XẤU
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Theo tư tưởng Hồ Chí Minh, xây dựng Nhà nước trong sạch không thể
                  chỉ tập trung vào việc “xây” mà phải đồng thời thực hiện “chống”.
                </p>
                <div className="text-xs text-ink-muted space-y-1 pt-1 border-t border-[#ebd8c2]">
                  <p><strong>Xây:</strong> Xây dựng Nhà nước dân chủ, có pháp luật, bộ máy hoạt động hiệu quả và đội ngũ cán bộ có đạo đức, trách nhiệm.</p>
                  <p><strong>Chống:</strong> Chống tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân và những hành vi lợi dụng quyền lực.</p>
                </div>
              </div>

              {/* Slide 9: Cán bộ phải nêu gương */}
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Slide 9 — Cán bộ phải nêu gương
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Hồ Chí Minh đặc biệt coi trọng vai trò của người cán bộ trong việc
                  xây dựng Nhà nước trong sạch. Cán bộ không chỉ cần có năng lực mà
                  còn phải có đạo đức, trách nhiệm và tinh thần phục vụ nhân dân.
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Người có chức vụ càng cao thì càng phải làm gương, bởi hành động
                  của người lãnh đạo có ảnh hưởng trực tiếp đến tập thể và bộ máy mà
                  họ quản lý.
                </p>
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded text-xs font-serif font-bold text-[#7a1818] text-center">
                  “Cán bộ phải vừa có đức, vừa có tài, trong đó đức là gốc.”
                </div>
              </div>
            </div>

            {/* Cột phải: Slide 8 - 5 Biện pháp phòng, chống tiêu cực */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  Các biện pháp phòng, chống tiêu cực (Slide 8)
                </h3>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Để phòng, chống tiêu cực trong Nhà nước, Hồ Chí Minh nhấn mạnh 5 biện pháp đồng bộ:
              </p>

              <div className="space-y-2">
                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">Phát huy dân chủ</span>
                    <p className="text-xs text-ink">Tạo điều kiện để nhân dân tham gia và giám sát hoạt động của Nhà nước.</p>
                  </div>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">Tăng cường pháp luật, kiểm tra và giám sát</span>
                    <p className="text-xs text-ink">Quyền lực phải được đặt trong khuôn khổ pháp luật và có cơ chế kiểm tra thường xuyên.</p>
                  </div>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">Xử lý nghiêm minh</span>
                    <p className="text-xs text-ink">Sai phạm phải được phát hiện và xử lý đúng người, đúng mức độ.</p>
                  </div>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    04
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">Cán bộ phải nêu gương</span>
                    <p className="text-xs text-ink">Người có chức vụ càng cao càng phải có trách nhiệm làm gương.</p>
                  </div>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    05
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">Phát huy sức mạnh của nhân dân</span>
                    <p className="text-xs text-ink">Nhân dân tham gia phát hiện, phản ánh và đấu tranh với những biểu hiện tiêu cực.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InfographicQuyenLucKiemSoat />
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="trong-sach-vung-manh"
      code="4.2.3"
      title="NHÀ NƯỚC TRONG SẠCH, VỮNG MẠNH"
      parentPath="4.2. Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân"
      quote="Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối. Người có quyền lực cũng phải chịu sự kiểm soát."
      quoteAuthor="Hồ Chí Minh"
      summary="Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững mạnh không chỉ là xây dựng bộ máy hiệu quả mà còn phải kiểm soát quyền lực bằng cơ chế Đảng - Nhà nước - Nhân dân; kiên quyết phòng chống tiêu cực và nêu cao đạo đức 'đức là gốc'."
      tabs={tabs}
      prevSection={{
        id: "phap-quyen",
        label: "← 4.2.2 Nhà nước pháp quyền",
      }}
      nextSection={{
        id: "xay-dung-dang",
        label: "4.3.1 Xây dựng Đảng thật sự trong sạch, vững mạnh →",
      }}
    />
  );
}
