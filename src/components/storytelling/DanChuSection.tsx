"use client";

import React from "react";
import AcademicPortalSection from "@/components/shared/AcademicPortalSection";
import UncleHoVoicePlayer from "@/components/shared/UncleHoVoicePlayer";
import InfographicCuaDoViDan from "@/components/infographics/InfographicCuaDoViDan";

export default function DanChuSection() {
  const tabs = [
    {
      id: "ban-chat-giai-cap",
      label: "a. Bản chất giai cấp công nhân",
      badge: "Giai cấp & Dân tộc",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái (7 cols trên LG): Trục Cầm Quyền & Quyền Lực Hiến Định */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
            {/* Card Tiêu điểm: Bản chất giai cấp công nhân & Hiến pháp 1959 */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] tracking-tight">
                  1. Bản chất giai cấp công nhân & Quyền lực Hiến định
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp
                công nhân; <strong>không phải là “nhà nước toàn dân” phi giai cấp</strong>.
              </p>

              {/* Editorial Callout: Lời mở đầu Hiến pháp 1959 */}
              <div className="p-2 sm:p-2.5 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md relative overflow-hidden">
                <p className="font-serif italic text-[11px] sm:text-[11.5px] text-[#5c0d0d] font-semibold leading-snug">
                  “Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên
                  nền tảng liên minh công nông, do giai cấp công nhân lãnh
                  đạo”
                </p>
                <div className="text-right text-[9.5px] text-ink-muted mt-1 font-sans">
                  — Lời nói đầu bản Hiến pháp năm 1959
                </div>
              </div>

              {/* 3 Phương thức cầm quyền: Trình bày dạng 3 thẻ chip mini ngang */}
              <div className="pt-1 border-t border-[#ebd8c2]">
                <div className="text-[10px] sm:text-[10.5px] font-sans font-bold text-[#7a1818] uppercase tracking-wider mb-1.5">
                  Đảng cầm quyền bằng 3 phương thức thích hợp:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs">
                    <span className="block font-mono font-bold text-[9.5px] text-[#7a1818] uppercase mb-0.5">
                      I. Thể chế hóa
                    </span>
                    <p className="text-[10px] text-ink leading-tight">
                      Đường lối, quan điểm, chủ trương thành pháp luật Nhà nước.
                    </p>
                  </div>
                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs">
                    <span className="block font-mono font-bold text-[9.5px] text-[#7a1818] uppercase mb-0.5">
                      II. Tổ chức
                    </span>
                    <p className="text-[10px] text-ink leading-tight">
                      Hoạt động của các tổ chức đảng và đảng viên trong bộ máy nhà nước.
                    </p>
                  </div>
                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs">
                    <span className="block font-mono font-bold text-[9.5px] text-[#7a1818] uppercase mb-0.5">
                      III. Kỷ cương
                    </span>
                    <p className="text-[10px] text-ink leading-tight">
                      Bằng công tác kiểm tra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Thẻ nền tảng dàn ngang ở đáy cột trái */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs">
                <div className="font-serif font-bold text-[11px] text-[#7a1818] mb-1 flex items-center gap-1.5">
                  <span className="text-[#b58319] text-xs">✦</span> Tính định hướng XHCN
                </div>
                <p className="text-[10.5px] text-ink leading-relaxed">
                  Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán.
                </p>
              </div>

              <div className="p-2.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs">
                <div className="font-serif font-bold text-[11px] text-[#7a1818] mb-1 flex items-center gap-1.5">
                  <span className="text-[#b58319] text-xs">✦</span> Tập trung dân chủ
                </div>
                <p className="text-[10.5px] text-ink leading-relaxed">
                  Vừa phát huy tối đa dân chủ của quần chúng, vừa đảm bảo sự chỉ đạo tập trung thống nhất.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải (5 cols trên LG): Dải Timeline Dọc Thanh Thoát (Vertical Accent Rail) */}
          <div className="lg:col-span-5 p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs flex flex-col justify-between space-y-2.5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-ink tracking-tight">
                  2. Thống nhất tính nhân dân và tính dân tộc
                </h3>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Bản chất giai cấp công nhân của Người về Nhà nước mới ở Việt Nam
                là Nhà nước thống nhất với tính nhân dân và tính dân tộc, thể hiện cụ thể:
              </p>
            </div>

            <div className="space-y-2 flex-1 flex flex-col justify-around py-1">
              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-[#e2d7c5]">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#b58319] leading-none shrink-0 w-6">
                  01
                </span>
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-[11px] text-[#7a1818]">
                    Nguồn gốc ra đời
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-ink leading-relaxed">
                    Ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ người Việt Nam, của toàn thể dân tộc; không thuộc riêng một giai cấp nào.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pb-2 border-b border-dashed border-[#e2d7c5]">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#b58319] leading-none shrink-0 w-6">
                  02
                </span>
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-[11px] text-[#7a1818]">
                    Mục tiêu phụng sự
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-ink leading-relaxed">
                    Xác định rõ và luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#b58319] leading-none shrink-0 w-6">
                  03
                </span>
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-[11px] text-[#7a1818]">
                    Sứ mệnh lịch sử
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-ink leading-relaxed">
                    Đảm đương nhiệm vụ tổ chức toàn dân tiến hành kháng chiến bảo vệ độc lập và kiến thiết một nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded text-[10px] sm:text-[10.5px] font-serif italic text-[#7a1818] leading-tight">
              “Giai cấp công nhân Việt Nam gắn bó máu thịt với toàn thể dân tộc.”
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái (7 cols trên LG): Định vị quyền lực & Hai hình thức dân chủ */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
            {/* Card Tiêu điểm: Quyền lực tối cao thuộc về Nhân dân */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] tracking-tight">
                  1. Quyền lực tối cao thuộc về Nhân dân
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Nhà nước của nhân dân là nhà nước mà tất cả mọi quyền lực trong nhà
                nước và trong xã hội đều thuộc về nhân dân. Nguyên lý{" "}
                <strong>“dân là chủ”</strong> khẳng định vị thế tối cao, thiêng liêng của nhân dân.
              </p>

              {/* Editorial Callout: Trích dẫn kinh điển của Bác */}
              <div className="p-2 sm:p-2.5 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md relative overflow-hidden">
                <p className="font-serif italic text-[11px] sm:text-[11.5px] text-[#5c0d0d] font-semibold leading-snug">
                  “Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân.”
                </p>
                <div className="text-right text-[9.5px] text-ink-muted mt-1 font-sans">
                  — Lời khẳng định kinh điển của Chủ tịch Hồ Chí Minh
                </div>
              </div>

              {/* Hai hình thức thực thi quyền lực: Trình bày dạng thẻ đôi đối xứng */}
              <div className="pt-1 border-t border-[#ebd8c2]">
                <div className="text-[10px] sm:text-[10.5px] font-sans font-bold text-[#7a1818] uppercase tracking-wider mb-1.5">
                  Hai hình thức thực thi quyền lực của Nhân dân:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <span className="font-serif font-bold text-[11px] text-[#7a1818] flex items-center gap-1.5">
                      <span className="text-[#b58319] text-xs">✦</span> Dân chủ trực tiếp
                    </span>
                    <p className="text-[10.5px] text-ink leading-relaxed">
                      Nhân dân trực tiếp quyết định vận mệnh quốc gia và quyền lợi dân chúng thông qua quyền <strong>bầu cử, bãi miễn, phúc quyết</strong>.
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <span className="font-serif font-bold text-[11px] text-[#7a1818] flex items-center gap-1.5">
                      <span className="text-[#b58319] text-xs">✦</span> Dân chủ gián tiếp
                    </span>
                    <p className="text-[10.5px] text-ink leading-relaxed">
                      Nhân dân thực thi quyền lực thông qua các cơ quan đại biểu Quốc hội, Hội đồng nhân dân do chính họ bầu ra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ nền tảng dưới cột trái: Quyền lực thừa ủy quyền */}
            <div className="p-2.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-3xs">
              <div className="font-serif font-bold text-[11px] text-[#7a1818] mb-1 flex items-center gap-1.5">
                <span className="text-[#b58319] text-xs">✦</span> Quyền lực “thừa ủy quyền”
              </div>
              <p className="text-[10.5px] text-ink leading-relaxed">
                Quyền lực nhà nước là do nhân dân ủy thác, trao gửi. Tự bản thân nhà nước không có quyền lực tự thân. Đội ngũ cán bộ mang trọng trách <em>“gánh vác việc chung cho dân, chứ không phải để đè đầu dân”</em>.
              </p>
            </div>
          </div>

          {/* Cột phải (5 cols trên LG): Cán bộ là công bộc & Quyền bãi miễn của Dân */}
          <div className="lg:col-span-5 p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs flex flex-col justify-between space-y-2.5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-ink tracking-tight">
                  2. Cán bộ là công bộc & Quyền bãi miễn
                </h3>
              </div>

              {/* Trích dẫn danh ngôn về công bộc/đầy tớ */}
              <div className="p-2 sm:p-2.5 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md relative">
                <p className="font-serif italic text-[10.5px] sm:text-[11px] text-ink leading-relaxed">
                  “Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng... là làm gì? Làm đầy tớ. Làm công bộc cho nhân dân, chứ không phải là làm quan cách mạng... Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ tịch một nước đều là phân công làm đầy tớ cho dân.”
                </p>
                <div className="text-right text-[9.5px] text-ink-muted mt-1 font-sans">
                  — Tư tưởng Hồ Chí Minh về đạo đức công vụ
                </div>
              </div>
            </div>

            {/* TƯ LIỆU ÂM THANH DUY NHẤT VÀ TRỌNG TÂM CỦA TIỂU MỤC */}
            <div className="py-0.5">
              <UncleHoVoicePlayer
                id="voice-quyen-bai-mien"
                title="Quyền bãi miễn đại biểu và quyền đuổi Chính phủ"
                quote="Bác mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để làm trọn nhiệm vụ của mình là người đầy tớ trung thành tận tụy của nhân dân trong Nhà nước đó, nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân, thậm chí nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ."
                sourceContext="Chủ tịch Hồ Chí Minh trả lời các nhà báo và cử tri cả nước"
              />
            </div>

            {/* Chốt hạ về Pháp luật */}
            <div className="p-2 bg-[#7a1818] text-paper-light rounded-md text-[10px] sm:text-[10.5px] leading-relaxed font-serif shadow-2xs">
              <strong>Chốt lại:</strong> Luật pháp dân chủ là công cụ thực thi quyền lực của nhân dân, đồng thời là phương tiện hữu hiệu để kiểm soát quyền lực nhà nước.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái (6 cols trên LG): Do nhân dân lập nên & Cặp phạm trù 'Dân là chủ' - 'Dân làm chủ' */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2.5">
            {/* Card Tiêu điểm 1: Trình tự dân chủ lập nên Nhà nước */}
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] tracking-tight">
                  1. Do nhân dân lập nên & Trình tự dân chủ
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Nhà nước do nhân dân trước hết là nhà nước do chính nhân dân sáng lập thông qua các trình tự và quyền lực dân chủ (<strong>bầu cử, phúc quyết,...</strong>) sau khi giành thắng lợi cách mạng dưới sự lãnh đạo của Đảng.
              </p>
              <div className="p-2 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md text-[10.5px] text-ink leading-relaxed">
                Nhân dân đóng thuế để nuôi bộ máy nhà nước, giám sát hoạt động của cơ quan công quyền và bảo vệ nền độc lập, tự do của Tổ quốc.
              </div>
            </div>

            {/* Card Tiêu điểm 2: Cặp phạm trù 'Dân là chủ' ↔ 'Dân làm chủ' */}
            <div className="p-3 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2">
              <div className="font-serif font-bold text-[11px] sm:text-xs text-[#7a1818] flex items-center gap-1.5 uppercase tracking-wider">
                <span className="text-[#b58319] text-xs">✦</span> Vị thế và Bổn phận người chủ
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                  <span className="font-serif font-bold text-[10.5px] text-[#7a1818] block">
                    “Dân là chủ” (Vị thế)
                  </span>
                  <p className="text-[10px] sm:text-[10.5px] text-ink leading-relaxed">
                    Xác định vị thế tối cao, bất khả xâm phạm của nhân dân đối với toàn bộ quyền lực nhà nước.
                  </p>
                </div>
                <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                  <span className="font-serif font-bold text-[10.5px] text-[#7a1818] block">
                    “Dân làm chủ” (Bổn phận)
                  </span>
                  <p className="text-[10px] sm:text-[10.5px] text-ink leading-relaxed">
                    Nhấn mạnh quyền lợi đi đôi với <strong>nghĩa vụ công dân</strong>, trách nhiệm và bổn phận của nhân dân đối với xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải (6 cols trên LG): Trách nhiệm Nhà nước & Nâng cao năng lực làm chủ */}
          <div className="lg:col-span-6 p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs flex flex-col justify-between space-y-2.5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-ink tracking-tight">
                  2. Nâng cao năng lực làm chủ của Nhân dân
                </h3>
              </div>
              <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1.5 text-[11px] text-ink">
                <div className="font-serif font-bold text-[11px] text-[#7a1818] flex items-center gap-1.5">
                  <span className="text-[#b58319] text-xs">✦</span> Trách nhiệm của Nhà nước và Cán bộ:
                </div>
                <p className="leading-relaxed">
                  Nhà nước phải kiến tạo mọi thể chế thuận lợi để nhân dân thực thi đầy đủ các quyền và nghĩa vụ làm chủ. Cán bộ công quyền phải tuyệt đối tôn trọng quyền làm chủ của nhân dân.
                </p>
                <p className="leading-relaxed text-ink-muted border-t border-[#dfd2be] pt-1">
                  Nhà nước coi trọng giáo dục nhân dân, đồng thời người dân tự giác trau dồi tri thức chính trị, pháp luật để làm chủ một cách thực chất và văn minh.
                </p>
              </div>
            </div>

            {/* VOICE 4: Năng lực làm chủ của nhân dân */}
            <div className="py-0.5">
              <UncleHoVoicePlayer
                id="voice-nang-luc-lam-chu"
                title="Năng lực làm chủ của Nhân dân lao động"
                quote="Chúng ta là những người lao động làm chủ nước nhà. Muốn làm chủ được tốt, phải có năng lực làm chủ."
                sourceContext="Hồ Chí Minh: Bài nói chuyện tại các lớp bồi dưỡng cán bộ và tuyên truyền nhân dân"
              />
            </div>

            <div className="p-2 bg-[#7a1818] text-paper-light rounded-md text-[10px] sm:text-[10.5px] leading-relaxed font-serif shadow-2xs">
              <strong>Ý nghĩa cốt lõi:</strong> Nhân dân chỉ thực sự làm chủ khi có đủ năng lực làm chủ và được bảo đảm bởi một hệ thống thể chế dân chủ minh bạch, nghiêm minh.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "nha-nuoc-vi-nhan-dan",
      label: "d. Nhà nước vì nhân dân",
      badge: "Phụng sự & Liêm khiết",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái (6 cols trên LG): Bản chất vì dân & VOICE 5 */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2.5">
            <div className="p-3 sm:p-3.5 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] tracking-tight">
                  1. Mục đích duy nhất là mưu cầu hạnh phúc cho dân
                </h3>
              </div>

              <div className="p-2.5 bg-[#f7eedf]/80 border border-[#e8dac5] rounded-md space-y-1">
                <div className="font-serif font-bold text-[10.5px] text-[#7a1818] uppercase">
                  Bản chất của Nhà nước vì dân
                </div>
                <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                  Nhà nước được thành lập với <strong>mục đích duy nhất là phục vụ lợi ích và nguyện vọng chính đáng của nhân dân</strong>.
                  Nhà nước phải thực sự trong sạch, liêm khiết, không có đặc quyền, đặc lợi.
                </p>
              </div>

              <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md space-y-1 text-[10.5px] sm:text-[11px] text-ink shadow-3xs">
                <span className="font-serif font-bold text-[#7a1818] flex items-center gap-1.5">
                  <span className="text-[#b58319] text-xs">✦</span> Thước đo lòng dân:
                </span>
                <p className="leading-relaxed">
                  Hiệu quả hoạt động của chính quyền đo lường bằng sự ấm no, tự do và hạnh phúc của nhân dân.
                  Cán bộ nhà nước phải một lòng một dạ phụng sự Tổ quốc, phụng sự nhân dân, phải <strong>vừa có đức vừa có tài</strong>, trong đó đức là gốc.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <UncleHoVoicePlayer
                id="voice-chinh-phu-vi-dan"
                title="Mục đích duy nhất của Chính phủ: Phụng sự Nhân dân"
                quote="Các công việc của Chính phủ làm phải nhằm vào một mục đích duy nhất là mưu tự do hạnh phúc cho mọi người. Cho nên Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi dân lên trên hết thảy. Việc gì có lợi cho dân thì làm. Việc gì có hại cho dân thì phải tránh."
                sourceContext="Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (Báo Cứu quốc số 69, ngày 17/10/1945)"
              />

              <div className="p-2 bg-[#7a1818] text-paper-light rounded-md text-[10px] sm:text-[10.5px] leading-relaxed font-serif shadow-2xs">
                <strong>Tổng kết nguyên lý:</strong> “Nhà nước của dân, do dân, vì dân” là một thể thống nhất biện chứng, lấy nhân dân làm gốc, lấy phục vụ dân làm lẽ sống của cán bộ và cơ quan công quyền.
              </div>
            </div>
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
