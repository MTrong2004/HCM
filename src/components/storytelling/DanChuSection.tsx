"use client";

import React from "react";
import AcademicPortalSection from "@/components/shared/AcademicPortalSection";
import UncleHoVoicePlayer from "@/components/shared/UncleHoVoicePlayer";
import InfographicCuaDoViDan from "@/components/infographics/InfographicCuaDoViDan";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function DanChuSection() {
  const tabs = [
    {
      id: "ban-chat-giai-cap",
      label: "a. Bản chất giai cấp của nhà nước",
      badge: "Giai cấp & Dân tộc",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái (7 cols trên LG): Trục Cầm Quyền & Quyền Lực Hiến Định */}
          <div className="lg:col-span-7 space-y-3">
            {/* Card Tiêu điểm: Bản chất giai cấp công nhân & Hiến pháp 1959 */}
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Bản chất giai cấp công nhân & Quyền lực Hiến định
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp
                  công nhân; <strong>không phải là “nhà nước toàn dân” phi giai cấp</strong>.
                </p>

                {/* Editorial Callout: Lời mở đầu Hiến pháp 1959 */}
                <div className="p-2.5 sm:p-3 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md relative overflow-hidden">
                  <p className="font-serif italic text-xs sm:text-[13.5px] md:text-sm text-[#5c0d0d] font-semibold leading-relaxed">
                    “Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên
                    nền tảng liên minh công nông, do giai cấp công nhân lãnh
                    đạo”
                  </p>
                  <div className="text-right text-[10.5px] sm:text-xs text-ink-muted mt-1 font-sans">
                    — Lời nói đầu bản Hiến pháp năm 1959
                  </div>
                </div>

                {/* 3 Phương thức cầm quyền: Trình bày dạng 3 thẻ chip mini ngang */}
                <div className="pt-1.5 border-t border-[#ebd8c2]">
                  <div className="text-xs font-sans font-bold text-[#7a1818] uppercase tracking-wider mb-2">
                    Đảng cầm quyền bằng 3 phương thức thích hợp:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <EditorialReveal delay={80}>
                      <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                        <span className="block font-mono font-bold text-[10.5px] sm:text-[11px] text-[#7a1818] uppercase">
                          I. Thể chế hóa
                        </span>
                        <p className="text-xs text-ink leading-snug">
                          Đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch.
                        </p>
                      </div>
                    </EditorialReveal>
                    <EditorialReveal delay={160}>
                      <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                        <span className="block font-mono font-bold text-[10.5px] sm:text-[11px] text-[#7a1818] uppercase">
                          II. Tổ chức
                        </span>
                        <p className="text-xs text-ink leading-snug">
                          Hoạt động của các tổ chức đảng và đảng viên của mình trong bộ máy, cơ quan nhà nước.
                        </p>
                      </div>
                    </EditorialReveal>
                    <EditorialReveal delay={240}>
                      <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                        <span className="block font-mono font-bold text-[10.5px] sm:text-[11px] text-[#7a1818] uppercase">
                          III. Kiểm tra
                        </span>
                        <p className="text-xs text-ink leading-snug">
                          Bằng công tác kiểm tra, giám sát thường xuyên.
                        </p>
                      </div>
                    </EditorialReveal>
                  </div>
                </div>
              </div>
            </EditorialReveal>

            {/* 2 Thẻ nền tảng dàn ngang ở đáy cột trái */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <EditorialReveal delay={80}>
                <div className="p-3 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs space-y-1">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                    <span className="text-[#b58319] text-xs">✦</span> Tính định hướng XHCN
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh.
                  </p>
                </div>
              </EditorialReveal>

              <EditorialReveal delay={160}>
                <div className="p-3 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs space-y-1">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                    <span className="text-[#b58319] text-xs">✦</span> Nguyên tắc vận hành
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tổ chức và hoạt động theo nguyên tắc <strong>tập trung dân chủ</strong>.
                  </p>
                </div>
              </EditorialReveal>
            </div>
          </div>

          {/* Cột phải (5 cols trên LG): Dải Timeline Dọc Thanh Thoát (Vertical Accent Rail) */}
          <div className="lg:col-span-5 p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-3">
            <EditorialReveal delay={80}>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. Thống nhất tính nhân dân và tính dân tộc
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Bản chất giai cấp công nhân của Người về Nhà nước mới ở Việt Nam
                  là Nhà nước thống nhất với tính nhân dân và tính dân tộc, thể hiện cụ thể:
                </p>
              </div>
            </EditorialReveal>

            <div className="space-y-3 py-1">
              <EditorialReveal delay={80}>
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#e2d7c5]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#b58319] leading-none shrink-0 w-7">
                    01
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#7a1818]">
                      Nguồn gốc ra đời
                    </h4>
                    <p className="text-xs text-ink leading-relaxed">
                      Ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ người Việt Nam, của toàn thể dân tộc. Nhà nước Việt Nam mới không phải của riêng giai cấp, tầng lớp nào, mà là thuộc về nhân dân.
                    </p>
                  </div>
                </div>
              </EditorialReveal>

              <EditorialReveal delay={160}>
                <div className="flex items-start gap-3 pb-3 border-b border-dashed border-[#e2d7c5]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#b58319] leading-none shrink-0 w-7">
                    02
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#7a1818]">
                      Mục tiêu phụng sự
                    </h4>
                    <p className="text-xs text-ink leading-relaxed">
                      Ngay từ khi ra đời đã xác định rõ và luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng.
                    </p>
                  </div>
                </div>
              </EditorialReveal>

              <EditorialReveal delay={240}>
                <div className="flex items-start gap-3">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-[#b58319] leading-none shrink-0 w-7">
                    03
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#7a1818]">
                      Sứ mệnh lịch sử
                    </h4>
                    <p className="text-xs text-ink leading-relaxed">
                      Đảm đương nhiệm vụ tổ chức toàn dân tiến hành các cuộc kháng chiến bảo vệ độc lập và xây dựng một nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.
                    </p>
                  </div>
                </div>
              </EditorialReveal>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "nha-nuoc-cua-nhan-dan",
      label: "b. Nhà nước của nhân dân",
      badge: "Dân là chủ & Đầy tớ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái (7 cols trên LG): Định vị quyền lực & Hai hình thức dân chủ */}
          <div className="lg:col-span-7 space-y-3">
            {/* Card Tiêu điểm: Quyền lực tối cao thuộc về Nhân dân */}
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Quyền lực tối cao thuộc về Nhân dân
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Nhà nước của nhân dân là nhà nước mà tất cả mọi quyền lực trong nhà
                  nước và trong xã hội đều thuộc về nhân dân. Nguyên lý{" "}
                  <strong>“dân là chủ”</strong> khẳng định vị thế tối cao của nhân dân.
                </p>

                {/* Editorial Callout: Trích dẫn kinh điển của Bác */}
                <div className="p-2.5 sm:p-3 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md relative overflow-hidden">
                  <p className="font-serif italic text-xs sm:text-[13.5px] md:text-sm text-[#5c0d0d] font-semibold leading-relaxed">
                    “Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân.”
                  </p>
                  <div className="text-right text-[10.5px] sm:text-xs text-ink-muted mt-1 font-sans">
                    — Hồ Chí Minh (VOICE)
                  </div>
                </div>

                {/* Hai hình thức thực thi quyền lực: Trình bày dạng thẻ đôi đối xứng */}
                <div className="pt-1.5 border-t border-[#ebd8c2]">
                  <div className="text-xs font-sans font-bold text-[#7a1818] uppercase tracking-wider mb-2">
                    Hai hình thức thực thi quyền lực:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                      <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                        <span className="text-[#b58319] text-xs">✦</span> Dân chủ trực tiếp
                      </span>
                      <p className="text-xs text-ink leading-relaxed">
                        Nhân dân trực tiếp quyết định mọi vấn đề liên quan đến vận mệnh của quốc gia, dân tộc và quyền lợi của dân chúng.
                      </p>
                    </div>
                    <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                      <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                        <span className="text-[#b58319] text-xs">✦</span> Dân chủ gián tiếp
                      </span>
                      <p className="text-xs text-ink leading-relaxed">
                        Nhân dân thực thi quyền lực của mình thông qua các đại diện mà họ lựa chọn, bầu ra và những thiết chế quyền lực mà họ lập nên.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialReveal>

            {/* Thẻ nền tảng dưới cột trái: Quyền lực thừa ủy quyền */}
            <EditorialReveal delay={160}>
              <div className="p-3 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs space-y-1.5">
                <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                  <span className="text-[#b58319] text-xs">✦</span> Quyền lực “thừa ủy quyền” trong dân chủ gián tiếp
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Tự bản thân nhà nước không có quyền lực. Quyền lực của nhà nước là do nhân dân ủy thác. Các cơ quan quyền lực nhà nước cùng với đội ngũ cán bộ cần có trách nhiệm <em>“gánh vác việc chung cho dân, chứ không phải để đè đầu dân”</em>.
                </p>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải (5 cols trên LG): Cán bộ là đầy tớ & Quyền bãi miễn của Dân */}
          <div className="lg:col-span-5 space-y-3">
            <EditorialReveal delay={240}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. Cán bộ là đầy tớ & Quyền kiểm soát của Dân
                  </h3>
                </div>

                {/* Trích dẫn danh ngôn về công bộc/đầy tớ */}
                <div className="p-2.5 sm:p-3 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md space-y-2">
                  <p className="font-serif italic text-xs sm:text-[13px] text-ink leading-relaxed">
                    “Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng, uỷ viên này uỷ viên khác là làm gì? Làm đầy tớ. Làm đầy tớ cho nhân dân, chứ không phải là làm quan cách mạng.”
                  </p>
                  <p className="font-serif italic text-xs sm:text-[13px] text-ink leading-relaxed border-t border-[#ebd8c2] pt-1.5">
                    “Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ. Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ tịch một nước đều là phân công làm đầy tớ cho dân.”
                  </p>
                  <div className="text-right text-[10.5px] sm:text-xs text-ink-muted font-sans">
                    — Hồ Chí Minh (VOICE)
                  </div>
                </div>

                {/* Quyền kiểm soát, bãi miễn và giải tán thiết chế */}
                <div className="p-2.5 bg-[#fcf8f0] border border-[#e2d7c5] rounded-md text-xs text-ink leading-relaxed space-y-1">
                  <div className="font-serif font-bold text-[#7a1818]">
                    Quyền lực tối cao của Nhân dân:
                  </div>
                  <p>
                    Nhân dân có quyền kiểm soát, phê bình nhà nước; có quyền <strong>bãi miễn</strong> những đại biểu mà họ đã lựa chọn, bầu ra và <strong>có quyền giải tán những thiết chế quyền lực mà họ đã lập nên</strong>.
                  </p>
                </div>
              </div>
            </EditorialReveal>

            {/* TƯ LIỆU ÂM THANH DUY NHẤT VÀ TRỌNG TÂM CỦA TIỂU MỤC */}
            <UncleHoVoicePlayer
              id="voice-quyen-bai-mien"
              title="Quyền bãi miễn đại biểu và quyền đuổi Chính phủ"
              quote="Bác mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để làm trọn nhiệm vụ của mình là người đầy tớ trung thành tận tụy của nhân dân trong Nhà nước đó, nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân, thậm chí nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ."
              sourceContext="Hồ Chí Minh: Trả lời các nhà báo và cử tri cả nước"
            />

            <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md text-xs text-ink leading-relaxed">
              <span className="text-[#b58319] font-bold mr-1">▪</span>
              Luật pháp dân chủ là công cụ thực thi quyền lực của nhân dân, là phương tiện để kiểm soát quyền lực nhà nước.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "nha-nuoc-do-nhan-dan",
      label: "c. Nhà nước do nhân dân",
      badge: "Dân lập & Năng lực làm chủ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái (6 cols trên LG): Do nhân dân lập nên & Cặp phạm trù 'Dân là chủ' - 'Dân làm chủ' */}
          <div className="lg:col-span-6 space-y-3">
            {/* Card Tiêu điểm 1: Trình tự dân chủ lập nên Nhà nước */}
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Do nhân dân lập nên & Trình tự dân chủ
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Nhà nước do nhân dân trước hết là nhà nước do chính nhân dân lập nên thông qua các trình tự, quyền lực dân chủ (<strong>bầu cử, phúc quyết,...</strong>) sau khi giành thắng lợi dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
                </p>
              </div>
            </EditorialReveal>

            {/* Card Tiêu điểm 2: Cặp phạm trù 'Dân là chủ' ↔ 'Dân làm chủ' */}
            <EditorialReveal delay={160}>
              <div className="p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5 uppercase tracking-wider">
                  <span className="text-[#b58319] text-xs">✦</span> Vị thế và Bổn phận của người chủ
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Khái niệm <strong>“dân làm chủ”</strong> gắn liền <strong>“dân là chủ”</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      “Dân là chủ” (Vị thế)
                    </span>
                    <p className="text-xs text-ink leading-relaxed">
                      Xác định vị thế của nhân dân đối với quyền lực nhà nước.
                    </p>
                  </div>
                  <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      “Dân làm chủ” (Bổn phận)
                    </span>
                    <p className="text-xs text-ink leading-relaxed">
                      Nhấn mạnh <strong>quyền lợi và nghĩa vụ</strong> của nhân dân với tư cách là người chủ.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải (6 cols trên LG): Trách nhiệm Nhà nước & Nâng cao năng lực làm chủ */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={240}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. Trách nhiệm Nhà nước & Năng lực làm chủ
                  </h3>
                </div>
                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                    <span className="text-[#b58319] text-xs">✦</span> Trách nhiệm của Nhà nước:
                  </div>
                  <p className="leading-relaxed">
                    Nhà nước phải tạo mọi điều kiện để nhân dân thực hiện đầy đủ các quyền và nghĩa vụ làm chủ. Cán bộ, đảng viên có trách nhiệm tôn trọng quyền làm chủ của nhân dân.
                  </p>
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5 border-t border-[#dfd2be] pt-2">
                    <span className="text-[#b58319] text-xs">✦</span> Giáo dục & Tự giác phấn đấu:
                  </div>
                  <p className="leading-relaxed text-ink-muted">
                    Nhà nước do nhân dân cần coi trọng việc giáo dục nhân dân, đồng thời nhân dân cũng phải tự giác phấn đấu để có đủ <strong>năng lực làm chủ</strong>, thực hiện quyền dân chủ của mình.
                  </p>
                </div>
              </div>
            </EditorialReveal>

            {/* VOICE 4: Năng lực làm chủ của nhân dân */}
            <UncleHoVoicePlayer
              id="voice-nang-luc-lam-chu"
              title="Năng lực làm chủ của Nhân dân lao động"
              quote="Chúng ta là những người lao động làm chủ nước nhà. Muốn làm chủ được tốt, phải có năng lực làm chủ."
              sourceContext="Hồ Chí Minh (VOICE)"
            />
          </div>
        </div>
      ),
    },
    {
      id: "nha-nuoc-vi-nhan-dan",
      label: "d. Nhà nước vì nhân dân",
      badge: "Phụng sự & Liêm khiết",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái (6 cols trên LG): Bản chất vì dân, Lời Bác & Thẻ Cán bộ */}
          <div className="lg:col-span-6 space-y-3">
            {/* Box 1: Bản chất của Nhà nước vì dân */}
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Bản chất của Nhà nước vì dân
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Nhà nước được thành lập với mục đích duy nhất là phục vụ lợi ích và nguyện vọng của nhân dân. Nhà nước phải thực sự trong sạch, liêm khiết, hoạt động không có đặc quyền, đặc lợi.
                </p>
              </div>
            </EditorialReveal>

            {/* Box 2: Cán bộ vừa là người đầy tớ, vừa là người lãnh đạo nhân dân */}
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818]">
                    2. Cán bộ: Vừa là người đầy tớ, vừa là người lãnh đạo
                  </h4>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Trong Nhà nước vì dân, cán bộ giữ vai trò kép biện chứng mẫu mực:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      Là người đầy tớ:
                    </span>
                    <p className="text-xs text-ink leading-relaxed">
                      Phải trung thành, tận tụy, cần kiệm liêm chính, chí công vô tư, <em>lo trước thiên hạ, vui sau thiên hạ</em>.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      Là người lãnh đạo:
                    </span>
                    <p className="text-xs text-ink leading-relaxed">
                      Phải có trí tuệ hơn người, minh mẫn, sáng suốt, nhìn xa trông rộng, gần gũi nhân dân, trọng dụng hiền tài.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>

            {/* Tư liệu âm thanh lời Bác */}
            <UncleHoVoicePlayer
              id="voice-chinh-phu-vi-dan"
              title="Mục đích duy nhất của Chính phủ: Mưu tự do, hạnh phúc cho dân"
              quote="Các công việc của Chính phủ làm phải nhằm vào một mục đích duy nhất là mưu tự do hạnh phúc cho mọi người. Cho nên Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi dân lên trên hết thảy. Việc gì có lợi cho dân thì làm. Việc gì có hại cho dân thì phải tránh."
              sourceContext="Hồ Chí Minh (VOICE)"
            />
          </div>

          {/* Cột phải (6 cols trên LG): Infographic Của dân - Do dân - Vì dân */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <InfographicCuaDoViDan />
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="dan-chu"
      code="4.2.1"
      title="NHÀ NƯỚC DÂN CHỦ"
      parentPath="4.2. Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân"
      quote="Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân."
      quoteAuthor="Hồ Chí Minh"
      summary="Nhà nước Việt Nam mang bản chất giai cấp công nhân thống nhất với tính nhân dân và tính dân tộc; quyền lực nhà nước là do nhân dân ủy thác; cán bộ từ Chủ tịch đến người nấu ăn đều là đầy tớ tận tụy của nhân dân."
      tabs={tabs}
      prevSection={{
        id: "hero",
        label: "← Mở đầu Chương 4",
      }}
      nextSection={{
        id: "phap-quyen",
        label: "4.2.2 Nhà nước pháp quyền →",
      }}
    />
  );
}
