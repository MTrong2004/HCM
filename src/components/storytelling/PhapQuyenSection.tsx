"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import { JusticeScalesIcon } from "@/components/shared/HeritageIcons";

export default function PhapQuyenSection() {
  const tabs: TabItem[] = [
    {
      id: "hop-hien-hop-phap",
      label: "a. Nhà nước hợp hiến, hợp pháp",
      badge: "1919 — 1946",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: Box 1 (Biểu hiện sớm) & Box 2 (Người đứng đầu Nhà nước) */}
          <div className="md:col-span-6 space-y-2 flex flex-col justify-between">
            {/* Box 1: Biểu hiện sớm (1919) */}
            <div className="p-2.5 sm:p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h3 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Biểu hiện sớm
                </h3>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Thể hiện qua bản <em>Yêu sách của nhân dân An Nam</em> gửi đến Hội nghị Vécxây (Pháp) năm 1919 với các yêu cầu:
              </p>

              {/* 3 Mục đánh số tròn 01, 02, 03 */}
              <div className="space-y-1 pt-0.5">
                <div className="flex items-start gap-2 p-1.5 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-white font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-xs">
                    01
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Cải cách nền pháp lý ở Đông Dương, giúp người bản xứ được hưởng bảo đảm về pháp luật như người Châu Âu.
                  </p>
                </div>

                <div className="flex items-start gap-2 p-1.5 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-white font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-xs">
                    02
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Xoá bỏ các toà án đặc biệt dùng làm công cụ khủng bố, áp bức người dân An Nam.
                  </p>
                </div>

                <div className="flex items-start gap-2 p-1.5 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-white font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-xs">
                    03
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Thay thế chế độ ra sắc lệnh bằng chế độ ra các đạo luật.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Khi trở thành người đứng đầu Nhà nước */}
            <div className="p-2 sm:p-2.5 bg-white border border-[#e5dac8] rounded-lg shadow-xs">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Khi trở thành người đứng đầu Nhà nước
                </h4>
              </div>
              <p className="text-[10.5px] text-ink-muted leading-relaxed">
                Người càng quan tâm bảo đảm Nhà nước được tổ chức, vận hành phù hợp với pháp luật và điều hành xã hội bằng pháp luật.
              </p>
            </div>
          </div>

          {/* Cột phải: Box 3 (Thực tiễn hành động - Timeline) & Callout Quote */}
          <div className="md:col-span-6 space-y-2 flex flex-col justify-between">
            {/* Box 3: Thực tiễn hành động */}
            <div className="p-2.5 sm:p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs relative overflow-hidden flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    3
                  </span>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                    Thực tiễn hành động
                  </h3>
                </div>
                <JusticeScalesIcon className="w-5 h-5 text-[#b58319]/45" />
              </div>

              {/* Dòng thời gian Timeline Trục Dọc Màu Đỏ Nối 3 Mốc */}
              <div className="relative pl-5 space-y-1.5 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#7a1818]">
                {/* Mốc 1: 03.9.1945 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-1.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md">
                    <div className="inline-block px-2 py-0.2 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-[9.5px] rounded-full mb-0.5 shadow-xs border border-[#d4af37]/30">
                      03.9.1945
                    </div>
                    <p className="text-[10px] text-ink leading-snug">
                      Ngay ngày 3-9-1945 (một ngày sau Tuyên ngôn độc lập), Người đề nghị Tổng tuyển cử với chế độ <strong>phổ thông đầu phiếu</strong> để lập Quốc hội, từ đó lập Chính phủ và bộ máy hợp hiến.
                    </p>
                  </div>
                </div>

                {/* Mốc 2: 06.01.1946 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-1.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md">
                    <div className="inline-block px-2 py-0.2 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-[9.5px] rounded-full mb-0.5 shadow-xs border border-[#d4af37]/30">
                      06.01.1946
                    </div>
                    <p className="text-[10px] text-ink leading-snug">
                      Tổng tuyển cử thành công (phổ thông đầu phiếu, trực tiếp, bỏ phiếu kín) cho tất cả công dân từ 18 tuổi trở lên.
                    </p>
                  </div>
                </div>

                {/* Mốc 3: 02.03.1946 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-1.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md">
                    <div className="inline-block px-2 py-0.2 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-[9.5px] rounded-full mb-0.5 shadow-xs border border-[#d4af37]/30">
                      02.03.1946
                    </div>
                    <p className="text-[10px] text-ink leading-snug">
                      Quốc hội khoá I họp phiên đầu tiên, thành lập bộ máy Nhà nước và bầu Hồ Chí Minh làm Chủ tịch Chính phủ liên hiệp đầu tiên.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Khung trích dẫn mở rộng (Quote Card đúng Designer_71) */}
            <div className="p-2 bg-[#eee3cb] border border-[#d8c8a8] rounded-lg shadow-xs relative">
              <span className="text-xl font-serif text-[#7a1818]/40 leading-none select-none inline-block mr-1">
                “
              </span>
              <blockquote className="font-serif italic text-[10.5px] text-ink font-medium leading-snug inline">
                Một chế độ mà dân không biết, dân không bàn, dân không làm, dân không kiểm tra, dân không thụ hưởng thì không phải là chế độ dân chủ.
              </blockquote>
              <div className="text-right text-[9.5px] font-serif font-bold text-[#7a1818] mt-0.5">
                — Hồ Chí Minh —
              </div>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: Lập pháp & Thực thi */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Nâng cao chất lượng công tác lập pháp
                </h4>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Hồ Chí Minh 2 lần trực tiếp chỉ đạo soạn thảo Hiến pháp (1946 và 1959); ký lệnh công bố 16 đạo luật, 613 sắc lệnh cùng hàng trăm văn bản dưới luật.
              </p>
            </div>

            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Đưa pháp luật vào cuộc sống & Thực thi
                </h4>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Nâng cao ý thức tuân thủ pháp luật của nhân dân. Pháp luật là công cụ quyền lực giúp dân <em>“biết dùng quyền dân chủ, dám nói, dám làm”</em>.
              </p>
            </div>
          </div>

          {/* Cột phải: Nghiêm minh & Cán bộ nêu gương */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  3
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Tính nghiêm minh của pháp luật
                </h4>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Khoan hồng với người cải tà quy chính, trừng trị nghiêm khắc kẻ phản bội đầu sỏ. Phê phán nghiêm khắc hiện tượng <em>“thưởng quá rộng, phạt không nghiêm”</em>.
              </p>
            </div>

            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  4
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Cán bộ nêu gương: Phụng công, thủ pháp
                </h4>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Cán bộ hành pháp, tư pháp phải nêu gương <strong>“phụng công, thủ pháp, chí công, vô tư”</strong>. Bác luôn tự giác chấp hành Hiến pháp như lối ứng xử tự nhiên.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "phap-quyen-nhan-nghia",
      label: "c. Pháp quyền nhân nghĩa",
      badge: "Vì con người",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: Quyền con người toàn diện */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Đảm bảo toàn diện quyền con người
                </h4>
              </div>
              <p className="text-[11px] text-ink leading-relaxed">
                Tiếp cận quyền con người từ <strong>quyền tự nhiên (cao nhất là quyền sống)</strong> đến quyền tự do, bình đẳng, chính trị và kinh tế.
              </p>
              <div className="p-2 bg-[#f8f4ec] rounded text-[10.5px] text-ink space-y-0.5 border border-[#e8decf]">
                <div className="font-bold text-[#7a1818]">Bảo vệ nhóm đặc thù:</div>
                <p>Đặc biệt quan tâm đến phụ nữ, trẻ em, đồng bào dân tộc thiểu số.</p>
              </div>
            </div>
          </div>

          {/* Cột phải: Tính nhân văn & Khuyến thiện */}
          <div className="md:col-span-6 space-y-2.5 flex flex-col justify-between">
            <div className="p-3 bg-white border border-[#e5dac8] rounded-lg shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818]">
                  Tính nhân văn và khuyến thiện
                </h4>
              </div>
              <p className="text-[11px] text-ink leading-relaxed">
                Xóa bỏ luật pháp hà khắc. Pháp luật nghiêm minh nhưng khách quan, công bằng, tuyệt đối chống đối xử dã man.
              </p>
            </div>

            <div className="p-2.5 bg-[#eee3cb] border border-[#d8c8a8] rounded-lg shadow-xs">
              <blockquote className="font-serif italic text-[11px] text-ink leading-snug">
                “Pháp luật lấy giáo dục, cảm hóa, thức tỉnh con người làm căn bản; xây dựng dựa trên nền tảng đạo đức xã hội. Pháp luật trong Nhà nước pháp quyền phải là pháp luật vì con người.”
              </blockquote>
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
      parentPath="4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân"
      quote="Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân, công việc đổi mới, xây dựng là trách nhiệm của dân..."
      quoteAuthor="Hồ Chí Minh"
      summary="Hồ Chí Minh luôn chú trọng xây dựng nền tảng pháp lý cho Nhà nước Việt Nam mới vì Người sớm thấy rõ tầm quan trọng của Hiến pháp và pháp luật trong đời sống chính trị - xã hội. Tư tưởng của Người về nhà nước pháp quyền thể hiện ở ba nội dung lớn: nhà nước hợp hiến, hợp pháp; nhà nước thượng tôn pháp luật; và pháp quyền nhân nghĩa."
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
