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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Dẫn nhập khái quát đầu tab */}
          <div className="lg:col-span-12 p-3 sm:p-3.5 bg-[#fbf7ee] border-l-[3px] border-[#7a1818] rounded-r-lg shadow-3xs">
            <p className="text-xs sm:text-sm text-ink font-serif italic leading-relaxed">
              “Hồ Chí Minh luôn chú trọng xây dựng nền tảng pháp lý cho Nhà nước Việt Nam mới vì Người sớm thấy rõ tầm quan trọng của Hiến pháp và pháp luật trong đời sống chính trị - xã hội.”
            </p>
          </div>

          {/* Cột trái (6 cols trên LG): Biểu hiện sớm & Người đứng đầu */}
          <div className="lg:col-span-6 space-y-3">
            {/* Box 1: Biểu hiện sớm (1919) */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Biểu hiện sớm: Yêu sách Vécxây (1919)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Thể hiện qua bản <em>Yêu sách của nhân dân An Nam</em> gửi đến Hội nghị Vécxây (Pháp) năm 1919 với 3 yêu cầu pháp lý mang tính bước ngoặt:
              </p>

              {/* 3 Mục đánh số tròn 01, 02, 03 */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-start gap-2.5 p-2 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    01
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Cải cách nền pháp lý ở Đông Dương, giúp người bản xứ được hưởng bảo đảm về pháp luật như người Châu Âu.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 p-2 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    02
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Xoá bỏ các toà án đặc biệt dùng làm công cụ khủng bố, áp bức người dân An Nam.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 p-2 bg-[#f8f4ec] border border-[#ebe0d0] rounded-md">
                  <div className="w-6 h-6 rounded-full bg-[#7a1818] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    03
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Thay thế chế độ ra sắc lệnh bằng chế độ ra các đạo luật.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Khi trở thành người đứng đầu Nhà nước */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Khi trở thành người đứng đầu Nhà nước
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Người càng quan tâm bảo đảm Nhà nước được tổ chức, vận hành phù hợp với pháp luật và điều hành xã hội bằng pháp luật.
              </p>
            </div>
          </div>

          {/* Cột phải (6 cols trên LG): Thực tiễn hành động - Timeline 3 mốc */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#ebdcc9] pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    3
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                    Thực tiễn hành động xây dựng bộ máy hợp hiến
                  </h3>
                </div>
                <JusticeScalesIcon className="w-5 h-5 text-[#7a1818]/70" />
              </div>

              {/* Dòng thời gian Timeline Trục Dọc Màu Đỏ Nối 3 Mốc */}
              <div className="relative pl-5 space-y-2.5 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#7a1818]">
                {/* Mốc 1: 03.9.1945 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-2 sm:p-2.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md space-y-1">
                    <div className="inline-block px-2 py-0.5 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-xs rounded-full shadow-xs border border-[#d4af37]/30">
                      03.9.1945
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Ngay ngày 3-9-1945 (một ngày sau Tuyên ngôn độc lập), Người đề nghị Tổng tuyển cử với chế độ <strong>phổ thông đầu phiếu</strong> để lập Quốc hội, từ đó lập Chính phủ và bộ máy hợp hiến.
                    </p>
                    <div className="p-1.5 bg-[#f4ebe1] rounded text-[11.5px] sm:text-xs text-[#5c0d0d] font-serif italic border-l-2 border-[#7a1818]">
                      Ý nghĩa pháp lý: Tạo cơ sở pháp lý vững chắc để làm việc với quân Đồng Minh, quan hệ quốc tế bình đẳng và thiết lập cơ chế quyền lực hợp pháp.
                    </div>
                  </div>
                </div>

                {/* Mốc 2: 06.01.1946 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-2 sm:p-2.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md space-y-1">
                    <div className="inline-block px-2 py-0.5 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-xs rounded-full shadow-xs border border-[#d4af37]/30">
                      06.01.1946
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong>Tổng tuyển cử thành công rực rỡ</strong> (phổ thông đầu phiếu, trực tiếp, bỏ phiếu kín) cho tất cả công dân từ 18 tuổi trở lên trên phạm vi cả nước.
                    </p>
                  </div>
                </div>

                {/* Mốc 3: 02.03.1946 */}
                <div className="relative">
                  <div className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#7a1818] ring-2 ring-white" />
                  <div className="p-2 sm:p-2.5 bg-[#fcf8f0] border border-[#e8ddce] rounded-md space-y-1">
                    <div className="inline-block px-2 py-0.5 bg-[#6b1414] text-[#fff8ea] font-mono font-bold text-xs rounded-full shadow-xs border border-[#d4af37]/30">
                      02.03.1946
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Quốc hội khoá I họp phiên đầu tiên, thành lập bộ máy Nhà nước và bầu Hồ Chí Minh làm Chủ tịch Chính phủ liên hiệp đầu tiên.
                    </p>
                    <div className="p-1.5 bg-[#f4ebe1] rounded text-[11.5px] sm:text-xs text-[#5c0d0d] font-serif italic border-l-2 border-[#7a1818]">
                      Tư cách pháp lý: Chính phủ có đầy đủ tư cách pháp lý tối cao để giải quyết toàn diện các vấn đề đối nội và đối ngoại.
                    </div>
                  </div>
                </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Dẫn nhập khái quát đầu tab */}
          <div className="lg:col-span-12 p-3 sm:p-3.5 bg-[#fbf7ee] border-l-[3px] border-[#7a1818] rounded-r-lg shadow-3xs">
            <p className="text-xs sm:text-sm text-ink font-serif italic leading-relaxed">
              “Nhà nước quản lý bằng nhiều biện pháp, nhưng quan trọng nhất là bằng Hiến pháp và pháp luật.”
            </p>
          </div>

          {/* Cột trái (6 cols trên LG): Lập pháp & Đưa luật vào đời sống */}
          <div className="lg:col-span-6 space-y-3">
            {/* Box 1: Nâng cao công tác lập pháp */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Nâng cao công tác lập pháp
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-ink leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#7a1818] font-bold">▪</span>
                  <span>Hồ Chí Minh <strong>2 lần tham gia chỉ đạo soạn thảo Hiến pháp</strong> (Hiến pháp năm 1946 và Hiến pháp 1959).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7a1818] font-bold">▪</span>
                  <span>
                    Ký lệnh công bố <strong>16 đạo luật</strong>, <strong>613 sắc lệnh</strong> (trong đó có <strong>243 sắc lệnh về tổ chức Nhà nước và pháp luật</strong>) cùng nhiều văn bản dưới luật.
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2: Đưa pháp luật vào cuộc sống & Thực thi */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Đưa pháp luật vào cuộc sống & Thực thi pháp luật
                </h4>
              </div>
              <div className="space-y-2 text-xs sm:text-[13px] text-ink leading-relaxed">
                <p>
                  Nâng cao trình độ hiểu biết, ý thức tuân thủ pháp luật của nhân dân. Pháp luật là công cụ quyền lực của dân, giúp dân:
                </p>
                <div className="p-2 bg-[#fcf8f0] border-l-2 border-[#b58319] rounded-r text-xs sm:text-[13px] font-serif italic text-[#5c0d0d] font-semibold">
                  “Biết hưởng quyền dân chủ, biết dùng quyền dân chủ, dám nói, dám làm.”
                </div>
                <p>
                  Chú trọng giáo dục pháp luật (đặc biệt cho thế hệ trẻ) và nâng cao dân trí toàn xã hội.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải (6 cols trên LG): Tính nghiêm minh & Giám sát nêu gương */}
          <div className="lg:col-span-6 space-y-3">
            {/* Box 3: Tính nghiêm minh */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  3
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Tính nghiêm minh của pháp luật
                </h4>
              </div>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-ink leading-relaxed">
                <p>
                  Pháp luật vừa khoan hồng với người cải tà quy chính, vừa <strong className="text-[#7a1818]">“thẳng tay trừng trị những tên Việt gian đầu sỏ”</strong>.
                </p>
                <p>
                  Yêu cầu người thực thi pháp luật phải công tâm, nghiêm minh. Phê phán nghiêm khắc hiện tượng <em className="text-[#5c0d0d]">“thưởng quá rộng, phạt không nghiêm”</em>, lẫn lộn giữa công và tội.
                </p>
              </div>
            </div>

            {/* Box 4: Giám sát & Nêu gương */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  4
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Phát huy vai trò giám sát & Nêu gương
                </h4>
              </div>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-ink leading-relaxed">
                <p>
                  <strong>Khuyến khích nhân dân:</strong> Phê bình, giám sát chặt chẽ các cơ quan Nhà nước trong quá trình thực thi pháp luật.
                </p>
                <p>
                  <strong>Đội ngũ cán bộ:</strong> Đặc biệt là ngành hành pháp, tư pháp phải gương mẫu thực hiện phương châm:
                </p>
                <div className="p-2 bg-[#f4ebe1] rounded text-xs sm:text-[13px] text-[#7a1818] font-serif font-bold text-center border border-[#e2d7c5]">
                  “Phụng công, thủ pháp, chí công, vô tư”
                </div>
                <p className="text-[11.5px] sm:text-xs text-ink-muted">
                  Bản thân Chủ tịch Hồ Chí Minh luôn tự giác chấp hành Hiến pháp và pháp luật như một thói quen, lối ứng xử tự nhiên hàng ngày.
                </p>
              </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Dẫn nhập khái quát đầu tab */}
          <div className="lg:col-span-12 p-3 sm:p-3.5 bg-[#fbf7ee] border-l-[3px] border-[#7a1818] rounded-r-lg shadow-3xs">
            <p className="text-xs sm:text-sm text-ink font-serif italic leading-relaxed">
              “Pháp quyền nhân nghĩa là Nhà nước phải tôn trọng, bảo đảm thực hiện đầy đủ quyền con người, chăm lo lợi ích cho mọi người.”
            </p>
          </div>

          {/* Cột trái (6 cols trên LG): Quyền con người toàn diện */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Đảm bảo toàn diện quyền con người
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px] text-ink leading-relaxed">
                <p>
                  Bác tiếp cận quyền con người từ <strong>quyền tự nhiên (cao nhất là quyền sống)</strong> đến các quyền chính trị, dân sự, kinh tế, văn hóa và xã hội.
                </p>

                <div className="p-2.5 bg-[#f8f4ec] rounded-md border border-[#e8decf] space-y-1">
                  <div className="font-bold text-[#7a1818] text-xs sm:text-[13px] font-serif">
                    Chăm lo đối tượng đặc thù:
                  </div>
                  <p>
                    Quan tâm sâu sắc đến quyền công dân nói chung và các nhóm đối tượng cụ thể như: phụ nữ, trẻ em, đồng bào dân tộc thiểu số và những nhóm người yếu thế.
                  </p>
                </div>

                <div className="p-2 bg-[#fcf8f0] border-l-2 border-[#7a1818] rounded-r text-xs sm:text-[13px] text-[#5c0d0d] font-serif italic">
                  Mục tiêu cách mạng: Mọi mục tiêu đấu tranh cách mạng đều nhằm giải phóng con người, giúp con người có cuộc sống hạnh phúc, ấm no và tự do thực sự.
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải (6 cols trên LG): Tính nhân văn & Khuyến thiện */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-[#ebdcc9] pb-2">
                <span className="w-5 h-5 rounded bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                  Tính nhân văn và khuyến thiện của pháp luật
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px] text-ink leading-relaxed">
                <p>
                  Ngay khi thành lập, Chính phủ lâm thời đã kiên quyết <strong>xóa bỏ mọi luật pháp hà khắc</strong> của chế độ thực dân cũ.
                </p>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#ebdcc9] rounded-md space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818]">
                    Tuyên ngôn nhân đạo lịch sử:
                  </div>
                  <p className="font-serif italic text-xs sm:text-[13px] text-[#5c0d0d]">
                    Pháp luật nghiêm minh nhưng khách quan, công bằng, tuyệt đối chống đối xử dã man. Kể cả kẻ phản bội Tổ quốc, Bác tuyên bố sẽ tha thứ hay trừng trị theo luật pháp chứ <strong>“không có ai bị tàn sát”</strong>.
                  </p>
                </div>

                <p>
                  Pháp luật lấy giáo dục, cảm hóa, thức tỉnh con người làm căn bản; xây dựng dựa trên nền tảng đạo đức xã hội. Nói cách khác: <strong>Pháp luật trong Nhà nước pháp quyền phải là pháp luật vì con người.</strong>
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
