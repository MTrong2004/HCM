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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Slide 1 & Slide 2 */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Vì sao phải kiểm soát quyền lực? (Slide 1 & 2)
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững
              mạnh không chỉ là xây dựng bộ máy hoạt động hiệu quả mà còn
              phải kiểm soát quyền lực và phòng chống các biểu hiện tiêu cực.
            </p>
            <p className="text-[11px] sm:text-xs text-ink leading-snug">
              Quyền lực nếu không được kiểm soát có thể dẫn đến{" "}
              <strong>lạm quyền, lộng quyền hoặc chuyên quyền</strong>. Người
              được giao quyền lực phải chịu sự kiểm tra, giám sát và tuân thủ pháp luật.
            </p>

            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Điểm nhấn cốt lõi
              </div>
              <blockquote className="text-[11px] sm:text-xs font-serif italic text-ink font-semibold leading-snug">
                “Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối.”
              </blockquote>
              <div className="text-[10px] font-mono text-[#7a1818] font-bold">
                QUYỀN LỰC → KIỂM SOÁT → TRÁCH NHIỆM → NIỀM TIN CỦA NHÂN DÂN
              </div>
            </div>
          </div>

          {/* Cột phải: Slide 3 & Slide 4 */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Ai kiểm soát & Kiểm soát như thế nào? (Slide 3 & 4)
              </h3>
            </div>

            {/* Sơ đồ 3 cấp từ Slide 3 */}
            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="text-[10.5px] font-serif font-bold text-[#7a1818] uppercase tracking-wider">
                Sơ đồ 3 chủ thể kiểm soát quyền lực (Slide 3):
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                  <span className="font-bold text-[#7a1818]">1. Kiểm soát của Đảng</span>
                  <span className="text-ink">Kiểm tra, giám sát cán bộ</span>
                </div>
                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                  <span className="font-bold text-[#7a1818]">2. Kiểm soát trong bộ máy nhà nước</span>
                  <span className="text-ink">Pháp luật – Quy định – Thanh tra</span>
                </div>
                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                  <span className="font-bold text-[#7a1818]">3. Giám sát của nhân dân</span>
                  <span className="text-ink">Kiểm soát của nhân dân – Phản ánh</span>
                </div>
              </div>
            </div>

            {/* Slide 4: Nhân dân kiểm soát như thế nào */}
            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
              <div className="font-bold text-[10.5px] text-[#7a1818]">
                Nhân dân kiểm soát quyền lực như thế nào? (Slide 4)
              </div>
              <p className="text-[11px] text-ink leading-snug">
                Nhân dân có quyền tham gia quản lý xã hội, đóng góp ý kiến, kiểm tra,
                giám sát và phản ánh những hành vi sai phạm đến cơ quan có thẩm quyền.
              </p>
              <div className="pt-1 border-t border-[#ebd8c2] text-[10.5px] font-serif italic text-[#7a1818] font-bold">
                “Người có quyền lực cũng phải chịu sự kiểm soát.”
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "phong-chong-tieu-cuc",
      label: "b. Phòng, chống các biểu hiện tiêu cực",
      badge: "Slide 5 — 6",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Slide 5 - Vì sao phải phòng chống tiêu cực */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Vì sao phải phòng, chống tiêu cực? (Slide 5)
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Hồ Chí Minh chỉ rõ: Tham ô, lãng phí, quan liêu là thứ <strong>&ldquo;giặc nội xâm&rdquo;</strong>, là &ldquo;giặc ở trong lòng&rdquo; vô cùng nguy hiểm. Nguyên nhân chủ quan sâu xa chính là <strong>chủ nghĩa cá nhân</strong>.
            </p>

            <div className="space-y-1.5">
              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                  1. Tham ô (Ăn cắp của công)
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Hành vi chiếm đoạt tài sản công, biến của công thành của tư; làm tổn hại nghiêm trọng đến tài sản của Nhà nước và nhân dân.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                  2. Lãng phí (Không hiệu quả)
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Lãng phí sức lao động, thời gian và tiền của của nhân dân; gây thiệt hại to lớn cho sự nghiệp phát triển kinh tế - xã hội.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                  3. Bệnh quan liêu (Xa dân, xa thực tế)
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Xa rời nhân dân, chỉ thích ngồi bàn giấy, hội họp rườm rà. Quan liêu là cái nôi nuôi dưỡng tham ô, lãng phí.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Slide 6 - Những biểu hiện tiêu cực khác */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Những biểu hiện tiêu cực khác (Slide 6)
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Bên cạnh tham ô, lãng phí và quan liêu, Người kiên quyết phê phán thói đòi hưởng <strong>đặc quyền, đặc lợi</strong> và các thói hư tật xấu:
            </p>

            <div className="space-y-1.5">
              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-0.5">
                <div className="font-bold text-[10.5px] text-[#7a1818]">
                  • Tư túng, chia rẽ
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Tư túng thiên vị người thân, phe nhóm; chia rẽ gây mất đoàn kết nội bộ, kéo bè kéo cánh, làm suy yếu sức mạnh của tổ chức.
                </p>
              </div>

              <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-0.5">
                <div className="font-bold text-[10.5px] text-[#7a1818]">
                  • Kiêu ngạo & Thói cậy quyền
                </div>
                <p className="text-[10.5px] text-ink leading-snug">
                  Có chức vụ rồi kiêu ngạo coi thường người khác, tự cho mình là đúng, không chịu lắng nghe ý kiến đóng góp của quần chúng.
                </p>
              </div>

              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[10.5px] text-ink">
                <strong>Hậu quả:</strong> Làm xói mòn uy tín của Đảng và Nhà nước, phá vỡ mối quan hệ máu thịt giữa nhân dân với chính quyền.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Slide 7 & Slide 9 */}
          <div className="lg:col-span-6 space-y-2">
            {/* Slide 7: "Xây" đi đôi với "Chống" */}
            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Slide 7 — Phương châm: Xây đi đôi với chống
              </div>
              <div className="text-[11px] sm:text-xs font-serif font-bold text-ink">
                “XÂY” ĐỂ TẠO RA CÁI TỐT — “CHỐNG” ĐỂ LOẠI BỎ CÁI XẤU
              </div>
              <p className="text-[10.5px] text-ink leading-snug">
                Theo tư tưởng Hồ Chí Minh, xây dựng Nhà nước trong sạch không thể
                chỉ tập trung vào việc “xây” mà phải đồng thời thực hiện “chống”.
              </p>
              <div className="text-[10px] text-ink-muted space-y-0.5 pt-1 border-t border-[#ebd8c2]">
                <p><strong>Xây:</strong> Nhà nước dân chủ, pháp quyền hiệu quả và cán bộ có đạo đức, trách nhiệm.</p>
                <p><strong>Chống:</strong> Chống tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân và hành vi lợi dụng quyền lực.</p>
              </div>
            </div>

            {/* Slide 9: Cán bộ phải nêu gương */}
            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
              <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase">
                Slide 9 — Cán bộ phải nêu gương
              </div>
              <p className="text-[10.5px] text-ink leading-snug">
                Người có chức vụ càng cao thì càng phải làm gương, bởi hành động của người lãnh đạo có ảnh hưởng trực tiếp đến tập thể.
              </p>
              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded text-[10.5px] font-serif font-bold text-[#7a1818] text-center">
                “Cán bộ phải vừa có đức, vừa có tài, trong đó đức là gốc.”
              </div>
            </div>
          </div>

          {/* Cột phải: Slide 8 - 5 Biện pháp phòng, chống tiêu cực */}
          <div className="lg:col-span-6 space-y-1.5">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                Các biện pháp phòng, chống tiêu cực (Slide 8)
              </h3>
            </div>

            <div className="space-y-1">
              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  01
                </div>
                <div>
                  <span className="font-bold text-[10px] text-[#7a1818]">Phát huy dân chủ:</span>
                  <span className="text-[10px] text-ink ml-1">Tạo điều kiện để nhân dân tham gia và giám sát hoạt động Nhà nước.</span>
                </div>
              </div>

              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  02
                </div>
                <div>
                  <span className="font-bold text-[10px] text-[#7a1818]">Tăng cường pháp luật & giám sát:</span>
                  <span className="text-[10px] text-ink ml-1">Quyền lực đặt trong khuôn khổ luật pháp và kiểm tra thường xuyên.</span>
                </div>
              </div>

              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  03
                </div>
                <div>
                  <span className="font-bold text-[10px] text-[#7a1818]">Xử lý nghiêm minh:</span>
                  <span className="text-[10px] text-ink ml-1">Sai phạm phải được xử lý nghiêm khắc, đúng người, đúng tội.</span>
                </div>
              </div>

              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  04
                </div>
                <div>
                  <span className="font-bold text-[10px] text-[#7a1818]">Cán bộ nêu gương:</span>
                  <span className="text-[10px] text-ink ml-1">Người đứng đầu tiên phong làm gương để cấp dưới noi theo.</span>
                </div>
              </div>

              <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  05
                </div>
                <div>
                  <span className="font-bold text-[10px] text-[#7a1818]">Phát huy sức mạnh nhân dân:</span>
                  <span className="text-[10px] text-ink ml-1">Nhân dân chủ động phát hiện, phản ánh và đấu tranh với tiêu cực.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ky-cuong-thep-va-kiem-soat",
      label: "d. Kỷ cương thép & Sơ đồ kiểm soát",
      badge: "Án điểm & Infographic",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-start">
            <HeritageIntegrityPlate />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-start">
            <InfographicQuyenLucKiemSoat />
          </div>
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
