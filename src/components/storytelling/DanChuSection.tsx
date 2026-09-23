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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Bản chất giai cấp công nhân */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                1. Bản chất giai cấp công nhân
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp
              công nhân; <strong>không phải là “nhà nước toàn dân” phi giai cấp</strong>.
            </p>

            <div className="space-y-1.5">
              <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
                <div className="font-bold text-[10.5px] text-[#7a1818]">
                  • Đảng Cộng sản giữ vai trò cầm quyền
                </div>
                <p className="text-[11px] text-ink leading-snug">
                  Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền. Lời nói
                  đầu của bản Hiến pháp năm 1959 khẳng định:{" "}
                  <em>
                    “Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên
                    nền tảng liên minh công nông, do giai cấp công nhân lãnh
                    đạo”
                  </em>
                  .
                </p>
                <div className="pt-1 border-t border-[#ebd8c2] text-[10px] text-ink-muted space-y-0.5">
                  <span className="font-semibold text-ink">Đảng cầm quyền bằng 3 phương thức thích hợp:</span>
                  <ol className="list-decimal pl-3.5 space-y-0.5">
                    <li>Bằng đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật;</li>
                    <li>Bằng hoạt động của các tổ chức đảng và đảng viên trong bộ máy nhà nước;</li>
                    <li>Bằng công tác kiểm tra.</li>
                  </ol>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    • Tính định hướng XHCN
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán.
                  </p>
                </div>

                <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    • Tập trung dân chủ
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Vừa phát huy tối đa dân chủ của quần chúng, vừa đảm bảo sự chỉ đạo tập trung thống nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Tính thống nhất giữa tính giai cấp, nhân dân và dân tộc */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                2. Thống nhất tính nhân dân và tính dân tộc
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
              Bản chất giai cấp công nhân của Người về Nhà nước mới ở Việt Nam
              là Nhà nước thống nhất với tính nhân dân và tính dân tộc, thể hiện cụ thể:
            </p>

            <div className="space-y-1.5">
              <div className="flex items-start gap-2 p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  01
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-ink leading-snug">
                  <strong>Nguồn gốc ra đời:</strong> Ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ người Việt Nam, của toàn thể dân tộc; không thuộc riêng một giai cấp nào.
                </p>
              </div>

              <div className="flex items-start gap-2 p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  02
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-ink leading-snug">
                  <strong>Mục tiêu phụng sự:</strong> Xác định rõ và luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng.
                </p>
              </div>

              <div className="flex items-start gap-2 p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  03
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-ink leading-snug">
                  <strong>Sứ mệnh lịch sử:</strong> Đảm đương nhiệm vụ tổ chức toàn dân tiến hành kháng chiến bảo vệ độc lập và kiến thiết một nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.
                </p>
              </div>
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
          {/* Cột trái: Định vị quyền lực & Hai hình thức dân chủ */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7a1818]" />
              1. Quyền lực tối cao thuộc về Nhân dân
            </h4>
            <p className="text-[11px] sm:text-xs text-ink leading-snug">
              Nhà nước của nhân dân là nhà nước mà tất cả mọi quyền lực trong nhà
              nước và trong xã hội đều thuộc về nhân dân. Nguyên lý{" "}
              <strong>“dân là chủ”</strong> khẳng định vị thế tối cao của nhân dân.
            </p>

            {/* Trích dẫn kinh điển của Bác - Editorial Quote Card thanh lịch */}
            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border-l-3 border-[#7a1818] border-y border-r border-[#e8dfcf] rounded-r-md">
              <p className="font-serif italic text-[11px] sm:text-[11.5px] text-[#5c0d0d] font-semibold leading-snug">
                “Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân.”
              </p>
              <span className="block mt-0.5 text-[9.5px] text-ink-muted">
                — Lời khẳng định kinh điển của Chủ tịch Hồ Chí Minh
              </span>
            </div>

            <div className="space-y-1 pt-0.5">
              <div className="text-[10px] sm:text-[10.5px] font-serif font-bold text-ink uppercase tracking-wider">
                Hai hình thức thực thi quyền lực:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    Dân chủ trực tiếp
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Nhân dân trực tiếp quyết định mọi vấn đề liên quan đến vận mệnh quốc gia và quyền lợi dân chúng (quyền bầu cử, bãi miễn, phúc quyết).
                  </p>
                </div>

                <div className="p-2 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    Dân chủ gián tiếp
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Nhân dân thực thi quyền lực thông qua các đại diện mà họ bầu ra và những thiết chế quyền lực do họ lập nên.
                  </p>
                </div>
              </div>

              <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-[10.5px] sm:text-[11px] text-ink space-y-0.5">
                <strong>Quyền lực “thừa ủy quyền”:</strong>
                <p className="leading-snug">
                  Quyền lực nhà nước là “thừa ủy quyền” của nhân dân. Tự bản thân nhà nước không có quyền lực. Đội ngũ cán bộ cần có trách nhiệm <em>“gánh vác việc chung cho dân, chứ không phải để đè đầu dân”</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Cán bộ là đầy tớ & Quyền bãi miễn của Dân */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#7a1818] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7a1818]" />
              2. Cán bộ là công bộc, đầy tớ & Quyền bãi miễn của Dân
            </h4>

            {/* Trích dẫn danh ngôn về công bộc/đầy tớ */}
            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border-l-3 border-[#c5a059] border-y border-r border-[#e8dfcf] rounded-r-md">
              <p className="font-serif italic text-[11px] sm:text-[11.5px] text-ink leading-snug">
                “Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng... là làm gì? Làm đầy tớ. Làm công bộc cho nhân dân, chứ không phải là làm quan cách mạng... Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ tịch một nước đều là phân công làm đầy tớ cho dân.”
              </p>
              <span className="block mt-0.5 text-[9.5px] text-ink-muted">
                — Tư tưởng Hồ Chí Minh về đạo đức công vụ và vị thế tối cao của Nhân dân
              </span>
            </div>

            {/* TƯ LIỆU ÂM THANH DUY NHẤT VÀ TRỌNG TÂM CỦA TIỂU MỤC */}
            <div className="space-y-1">
              <div className="text-[10px] sm:text-[10.5px] font-sans text-ink leading-snug font-medium">
                Nhân dân có quyền kiểm soát, phê bình nhà nước, bãi miễn đại biểu và quyền đuổi Chính phủ:
              </div>

              <UncleHoVoicePlayer
                id="voice-quyen-bai-mien"
                title="Quyền bãi miễn đại biểu và quyền đuổi Chính phủ"
                quote="Bác mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để làm trọn nhiệm vụ của mình là người đầy tớ trung thành tận tụy của nhân dân trong Nhà nước đó, nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân, thậm chí nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ."
                sourceContext="Chủ tịch Hồ Chí Minh trả lời các nhà báo và cử tri cả nước"
              />
            </div>

            {/* Chốt hạ về Pháp luật */}
            <div className="p-2 bg-[#7a1818] text-paper-light rounded-md text-[10.5px] sm:text-[11px] leading-snug font-serif shadow-2xs">
              <strong>Chốt lại:</strong> Luật pháp dân chủ là công cụ thực thi quyền lực của nhân dân, là phương tiện để kiểm soát quyền lực nhà nước.
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
          {/* Cột trái: Nguồn gốc lập nên & Vị thế bổn phận */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                1. Do nhân dân lập nên & Bổn phận người chủ
              </h3>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
              <div className="font-bold text-[10.5px] text-[#7a1818]">
                • Trình tự dân chủ lập nên Nhà nước
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-snug">
                Nhà nước do nhân dân trước hết là nhà nước do chính nhân dân lập nên
                thông qua các trình tự, quyền lực dân chủ (<strong>bầu cử, phúc quyết,...</strong>)
                sau khi giành thắng lợi dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
              </p>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
              <div className="font-serif font-bold text-[10.5px] text-[#7a1818] uppercase">
                Vị thế và Bổn phận của người chủ
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-snug font-medium">
                Khái niệm <strong>“dân làm chủ”</strong> gắn liền hữu cơ với <strong>“dân là chủ”</strong>:
              </p>
              <div className="space-y-1 text-[10.5px] text-ink-muted border-t border-[#ebd8c2] pt-1">
                <p>
                  <strong className="text-ink">“Dân là chủ”:</strong> Xác định vị thế tối cao của nhân dân đối với toàn bộ quyền lực nhà nước.
                </p>
                <p>
                  <strong className="text-ink">“Dân làm chủ”:</strong> Nhấn mạnh quyền lợi đi đôi với nghĩa vụ, trách nhiệm của nhân dân với tư cách người chủ đích thực.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Trách nhiệm của Nhà nước & Năng lực làm chủ */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                2. Nâng cao năng lực làm chủ của Nhân dân
              </h3>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1 text-[11px] sm:text-xs text-ink">
              <strong>Trách nhiệm của Nhà nước và Cán bộ:</strong>
              <p className="leading-snug">
                Nhà nước phải tạo mọi điều kiện để nhân dân thực hiện đầy đủ các quyền và nghĩa vụ làm chủ. Cán bộ có trách nhiệm tôn trọng quyền làm chủ của nhân dân.
              </p>
              <p className="leading-snug text-ink-muted">
                Nhà nước cần coi trọng việc giáo dục nhân dân, đồng thời nhân dân cũng phải tự giác phấn đấu để có đủ tri thức và năng lực thực hiện quyền dân chủ.
              </p>
            </div>

            {/* VOICE 4: Năng lực làm chủ của nhân dân */}
            <UncleHoVoicePlayer
              id="voice-nang-luc-lam-chu"
              title="Muốn làm chủ được tốt, phải có năng lực làm chủ"
              quote="Chúng ta là những người lao động làm chủ nước nhà. Muốn làm chủ được tốt, phải có năng lực làm chủ."
              sourceContext="Hồ Chí Minh: Bài nói chuyện tại các lớp bồi dưỡng cán bộ và tuyên truyền nhân dân"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Cột trái: Bản chất vì dân & VOICE 5 */}
          <div className="lg:col-span-6 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  1. Mục đích duy nhất là mưu cầu hạnh phúc cho dân
                </h3>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1">
                <div className="font-bold text-[10.5px] text-[#7a1818]">
                  • Bản chất của Nhà nước vì dân
                </div>
                <p className="text-[11px] sm:text-xs text-ink leading-snug">
                  Nhà nước được thành lập với <strong>mục đích duy nhất là phục vụ lợi ích và nguyện vọng chính đáng của nhân dân</strong>.
                  Nhà nước phải thực sự trong sạch, liêm khiết, hoạt động không có đặc quyền, đặc lợi.
                </p>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1 text-[11px] sm:text-xs text-ink">
                <strong>Thước đo lòng dân:</strong>
                <p className="leading-snug">
                  Hiệu quả hoạt động của chính quyền được đo lường bằng sự ấm no, tự do và hạnh phúc của nhân dân.
                  Cán bộ nhà nước phải một lòng một dạ phụng sự Tổ quốc, phụng sự nhân dân.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <UncleHoVoicePlayer
                id="voice-chinh-phu-vi-dan"
                title="Mục đích duy nhất của Chính phủ: Mưu tự do hạnh phúc cho dân"
                quote="Các công việc của Chính phủ làm phải nhằm vào một mục đích duy nhất là mưu tự do hạnh phúc cho mọi người. Cho nên Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi dân lên trên hết thảy. Việc gì có lợi cho dân thì làm. Việc gì có hại cho dân thì phải tránh."
                sourceContext="Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (Báo Cứu quốc số 69, ngày 17/10/1945)"
              />

              <div className="p-2 bg-[#7a1818] text-paper-light rounded-md text-[10.5px] sm:text-[11px] leading-snug font-serif shadow-2xs">
                <strong>Tổng kết nguyên lý:</strong> “Nhà nước của dân, do dân, vì dân” là một thể thống nhất biện chứng, lấy nhân dân làm gốc, lấy phục vụ dân làm lẽ sống của cán bộ và cơ quan công quyền.
              </div>
            </div>
          </div>

          {/* Cột phải: Infographic Của dân - Do dân - Vì dân */}
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
