"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import { JusticeScalesIcon } from "@/components/shared/HeritageIcons";
import HeritageJuridicalPlate from "./HeritageJuridicalPlate";
import InfographicPhapQuyenBaTang from "@/components/infographics/InfographicPhapQuyenBaTang";

export default function PhapQuyenSection() {
  const tabs: TabItem[] = [
    {
      id: "hop-hien-hop-phap",
      label: "a. Nhà nước hợp hiến, hợp pháp",
      badge: "1919 — 1946",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái: Cơ sở lý luận & nhận thức */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  1. Biểu hiện sớm (Yêu sách năm 1919)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                Hồ Chí Minh luôn chú trọng xây dựng nền tảng pháp lý cho Nhà
                nước Việt Nam mới vì Người sớm thấy rõ tầm quan trọng của Hiến
                pháp và pháp luật trong đời sống chính trị - xã hội. Thể hiện qua
                bản <em>Yêu sách của nhân dân An Nam</em> gửi đến Hội nghị
                Vécxây (Pháp) năm 1919:
              </p>

              {/* 3 Khối tròn đánh số đỏ 01, 02, 03 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    01
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Cải cách nền pháp lý ở Đông Dương, giúp người bản xứ được
                    hưởng bảo đảm về pháp luật như người Châu Âu.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    02
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Xoá bỏ các toà án đặc biệt dùng làm công cụ khủng bố, áp bức
                    người dân An Nam.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    03
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Thay thế chế độ ra sắc lệnh bằng chế độ ra các đạo luật.
                  </p>
                </div>
              </div>
            </div>

            {/* Mục 2: Khi trở thành người đứng đầu Nhà nước */}
            <div className="pt-4 border-t border-[#ebd8c2]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h4 className="font-serif font-bold text-base text-ink">
                  2. Khi trở thành người đứng đầu Nhà nước
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Người càng quan tâm bảo đảm Nhà nước được tổ chức, vận hành phù
                hợp với pháp luật và điều hành xã hội bằng pháp luật, đặt nền
                móng cho một Nhà nước hợp hiến, hợp pháp thực thụ.
              </p>
            </div>
          </div>

          {/* Cột phải: Thực tiễn hành động & Dòng thời gian lịch sử */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  3. Thực tiễn hành động lịch sử
                </h3>
              </div>
              <JusticeScalesIcon className="w-7 h-7 text-[#b58319]" />
            </div>

            {/* Dòng thời gian Timeline Trục Dọc Màu Đỏ Nối 3 Mốc */}
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#7a1818]">
              {/* Mốc 1: 03.9.1945 */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#7a1818] ring-4 ring-[#fdfcf9]" />
                <div className="p-3.5 bg-[#fbf6ed] border border-[#e5d7c3] rounded-lg">
                  <div className="inline-block px-2 py-0.5 bg-[#8b2323] text-paper-light font-mono font-bold text-[11px] rounded mb-1.5 shadow-xs">
                    03.9.1945
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tại phiên họp đầu tiên của Chính phủ lâm thời (một ngày sau
                    Tuyên ngôn độc lập), Người đề nghị Tổng tuyển cử với chế độ{" "}
                    <strong>phổ thông đầu phiếu</strong> để lập Quốc hội và ban
                    hành Hiến pháp.
                  </p>
                </div>
              </div>

              {/* Mốc 2: 06.01.1946 */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#7a1818] ring-4 ring-[#fdfcf9]" />
                <div className="p-3.5 bg-[#fbf6ed] border border-[#e5d7c3] rounded-lg">
                  <div className="inline-block px-2 py-0.5 bg-[#8b2323] text-paper-light font-mono font-bold text-[11px] rounded mb-1.5 shadow-xs">
                    06.01.1946
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Cuộc Tổng tuyển cử đầu tiên thành công vang dội: phổ thông
                    đầu phiếu, trực tiếp, bỏ phiếu kín cho mọi công dân từ 18
                    tuổi trở lên, khẳng định tính chính danh pháp lý cao nhất.
                  </p>
                </div>
              </div>

              {/* Mốc 3: 02.03.1946 */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#7a1818] ring-4 ring-[#fdfcf9]" />
                <div className="p-3.5 bg-[#fbf6ed] border border-[#e5d7c3] rounded-lg">
                  <div className="inline-block px-2 py-0.5 bg-[#8b2323] text-paper-light font-mono font-bold text-[11px] rounded mb-1.5 shadow-xs">
                    02.03.1946
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Quốc hội khoá I họp phiên đầu tiên, lập Chính phủ liên hiệp
                    đầu tiên do Hồ Chí Minh làm Chủ tịch, có đầy đủ tư cách pháp
                    lý đối nội và đối ngoại.
                  </p>
                </div>
              </div>
            </div>

            {/* Khung trích dẫn mở rộng (Callout Box) */}
            <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg">
              <blockquote className="font-serif italic text-xs sm:text-sm text-ink font-medium leading-relaxed">
                “Một chế độ mà dân không biết, dân không bàn, dân không làm, dân
                không kiểm tra, dân không thụ hưởng thì không phải là chế độ dân
                chủ.”
              </blockquote>
              <p className="text-right text-[11px] font-serif font-bold text-[#7a1818] mt-2">
                — Hồ Chí Minh —
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "thuong-ton-phap-luat",
      label: "b. Nhà nước thượng tôn pháp luật",
      badge: "Lập pháp & Kỷ cương",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Công tác lập pháp & Đưa pháp luật vào cuộc sống */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] mb-2">
                  1. Nâng cao chất lượng công tác lập pháp
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Hồ Chí Minh 2 lần trực tiếp chỉ đạo soạn thảo Hiến pháp (Hiến
                  pháp 1946 và Hiến pháp 1959); ký lệnh công bố 16 đạo luật,
                  613 sắc lệnh (trong đó 243 sắc lệnh về tổ chức Nhà nước và
                  pháp luật) cùng hàng trăm văn bản dưới luật.
                </p>
              </div>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] mb-2">
                  2. Đưa pháp luật vào cuộc sống & Thực thi
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Nâng cao trình độ hiểu biết và ý thức tuân thủ pháp luật của
                  nhân dân. Pháp luật là công cụ quyền lực của dân, giúp dân{" "}
                  <em>
                    “biết hưởng quyền dân chủ, biết dùng quyền dân chủ, dám nói,
                    dám làm”
                  </em>
                  . Chú trọng giáo dục pháp luật cho thế hệ trẻ.
                </p>
              </div>
            </div>

            {/* Cột phải: Tính nghiêm minh & Cán bộ nêu gương */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] mb-2">
                  3. Tính nghiêm minh của pháp luật
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Khoan hồng với người cải tà quy chính, trừng trị nghiêm khắc
                  những tên phản bội đầu sỏ. Phê phán nghiêm khắc hiện tượng{" "}
                  <em>“thưởng quá rộng, phạt không nghiêm”</em>, lẫn lộn giữa
                  công và tội.
                </p>
              </div>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] mb-2">
                  4. Khuyến khích giám sát & Cán bộ nêu gương
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Khuyến khích nhân dân phê bình, giám sát cán bộ. Cán bộ ngành
                  hành pháp, tư pháp phải nêu gương sáng{" "}
                  <strong>“phụng công, thủ pháp, chí công, vô tư”</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Masterpiece Plate & Three Tiers Infographic */}
          <HeritageJuridicalPlate />
          <InfographicPhapQuyenBaTang />
        </div>
      ),
    },
    {
      id: "phap-quyen-nhan-nghia",
      label: "c. Pháp quyền nhân nghĩa",
      badge: "Vì con người",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái: Quyền con người toàn diện */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Đảm bảo toàn diện quyền con người
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Bác tiếp cận quyền con người từ quyền tự nhiên (cao nhất là quyền
                sống) đến các quyền chính trị, dân sự, kinh tế, văn hóa, xã hội.
              </p>
              <div className="p-3 bg-[#f5ecdc] rounded text-xs text-ink space-y-1">
                <div className="font-bold text-[#7a1818]">Đối tượng ưu tiên:</div>
                <p>
                  Đặc biệt quan tâm bảo vệ phụ nữ, trẻ em và đồng bào các dân
                  tộc thiểu số.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Tính nhân văn & Khuyến thiện */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Tính nhân văn và khuyến thiện của pháp luật
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Ngay khi thành lập, Chính phủ xóa bỏ luật pháp hà khắc của thực
                dân. Pháp luật nghiêm minh nhưng công bằng, chống đối xử dã
                man. Kể cả kẻ phản bội Tổ quốc, Người tuyên bố xử lý theo luật
                pháp chứ <em>“không có ai bị tàn sát”</em>.
              </p>
              <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs font-serif italic text-ink">
                “Pháp luật trong Nhà nước pháp quyền phải là pháp luật vì con
                người, lấy giáo dục, cảm hóa, thức tỉnh con người làm căn bản.”
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="phap-quyen"
      code="4.2.2"
      title="NHÀ NƯỚC PHÁP QUYỀN"
      parentPath="4.2. Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân"
      quote="Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân, bao nhiêu quyền hành và lực lượng đều ở nơi dân."
      quoteAuthor="Hồ Chí Minh"
      summary="Xây dựng nền tảng pháp lý của Nhà nước Việt Nam mới trên 3 trụ cột: Nhà nước hợp hiến, hợp pháp; Nhà nước thượng tôn pháp luật; và Pháp quyền nhân nghĩa vì con người."
      tabs={tabs}
      prevSection={{
        id: "dan-chu",
        label: "← 4.2.1 Nhà nước dân chủ",
      }}
      nextSection={{
        id: "trong-sach-vung-manh",
        label: "4.2.3 Nhà nước trong sạch, vững mạnh →",
      }}
    />
  );
}
