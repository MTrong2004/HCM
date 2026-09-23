"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import InfographicCuaDoViDan from "@/components/infographics/InfographicCuaDoViDan";

export default function DanChuSection() {
  const tabs: TabItem[] = [
    {
      id: "ban-chat-giai-cap",
      label: "a. Bản chất giai cấp của nhà nước",
      badge: "Giai cấp & Dân tộc",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: 3 Phương diện thể hiện bản chất giai cấp công nhân */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  1. Bản chất giai cấp công nhân
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp
                công nhân; <strong>không phải là “nhà nước toàn dân” phi giai cấp</strong>.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-1.5">
                  <div className="font-bold text-xs text-[#7a1818]">
                    • Đảng Cộng sản giữ vai trò cầm quyền
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền. Lời nói
                    đầu của bản Hiến pháp năm 1959 khẳng định:{" "}
                    <em>
                      “Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên
                      nền tảng liên minh công nông, do giai cấp công nhân lãnh
                      đạo”
                    </em>
                    .
                  </p>
                  <div className="pt-1.5 border-t border-[#ebd8c2] text-[11px] text-ink-muted space-y-0.5">
                    <span className="font-semibold text-ink">Đảng cầm quyền bằng 3 phương thức thích hợp:</span>
                    <ol className="list-decimal pl-4 space-y-0.5">
                      <li>Bằng đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch;</li>
                      <li>Bằng hoạt động của các tổ chức đảng và đảng viên của mình trong bộ máy, cơ quan nhà nước;</li>
                      <li>Bằng công tác kiểm tra.</li>
                    </ol>
                  </div>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Tính định hướng xã hội chủ nghĩa
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa
                    cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Nguyên tắc vận hành: Tập trung dân chủ
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tổ chức và hoạt động theo nguyên tắc tập trung dân chủ, phát
                    huy trí tuệ tập thể đi đôi với đề cao trách nhiệm cá nhân.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Tính thống nhất giữa tính giai cấp, nhân dân và dân tộc */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  2. Thống nhất tính nhân dân và tính dân tộc
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Bản chất giai cấp công nhân của Người về Nhà nước mới ở Việt Nam
                là Nhà nước thống nhất với tính nhân dân và tính dân tộc, thể hiện cụ thể:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    01
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    <strong>Nguồn gốc ra đời:</strong> Nhà nước Việt Nam ra đời là kết
                    quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ
                    người Việt Nam, của toàn thể dân tộc. Nhà nước Việt Nam mới không
                    phải của riêng giai cấp, tầng lớp nào, mà là thuộc về nhân dân.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    02
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    <strong>Mục tiêu phụng sự:</strong> Nhà nước Việt Nam ngay từ khi
                    ra đời đã xác định rõ và luôn kiên trì, nhất quán mục tiêu vì
                    quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    03
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    <strong>Sứ mệnh lịch sử:</strong> Đảm đương nhiệm vụ tổ chức toàn
                    dân tiến hành các cuộc kháng chiến bảo vệ độc lập và xây dựng một
                    nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.
                  </p>
                </div>
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
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Định vị quyền lực & Hai hình thức dân chủ */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Quyền lực tối cao thuộc về Nhân dân
              </h4>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Nhà nước của nhân dân là nhà nước mà tất cả mọi quyền lực trong nhà
                nước và trong xã hội đều thuộc về nhân dân. Nguyên lý{" "}
                <strong>“dân là chủ”</strong> khẳng định vị thế tối cao của nhân dân.
              </p>

              <div className="p-3.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-1">
                <span className="font-mono text-[11px] text-[#7a1818] font-bold uppercase tracking-wider block">
                  Lời khẳng định kinh điển (VOICE)
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-ink leading-relaxed">
                  “Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi
                  quyền lực đều là của nhân dân.”
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-serif font-bold text-ink uppercase tracking-wider">
                  Hai hình thức thực thi quyền lực:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                    <div className="font-bold text-xs text-[#7a1818] mb-1">
                      Dân chủ trực tiếp
                    </div>
                    <p className="text-xs text-ink leading-relaxed">
                      Nhân dân trực tiếp quyết định mọi vấn đề liên quan đến vận
                      mệnh của quốc gia, dân tộc và quyền lợi của dân chúng.
                    </p>
                  </div>

                  <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                    <div className="font-bold text-xs text-[#7a1818] mb-1">
                      Dân chủ gián tiếp
                    </div>
                    <p className="text-xs text-ink leading-relaxed">
                      Nhân dân thực thi quyền lực thông qua các đại diện mà họ lựa
                      chọn, bầu ra và những thiết chế quyền lực mà họ lập nên.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#f6efe4] border border-[#e5dac8] rounded-lg text-xs text-ink space-y-1">
                  <strong>Quyền lực “thừa ủy quyền”:</strong>
                  <p className="leading-relaxed">
                    Tự bản thân nhà nước không có quyền lực. Quyền lực của nhà nước
                    là do nhân dân ủy thác. Các cơ quan quyền lực nhà nước cùng với
                    đội ngũ cán bộ cần có trách nhiệm <em>“gánh vác việc chung cho dân, chứ không phải để đè đầu dân”</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Cán bộ là đầy tớ & Quyền kiểm soát, bãi miễn của dân */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Cán bộ là đầy tớ & Quyền bãi miễn của Dân
              </h4>

              {/* Trích dẫn Voice Bác Hồ về làm đầy tớ */}
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <span className="font-mono text-[11px] text-[#7a1818] font-bold uppercase tracking-wider block">
                  Chủ tịch nước đến người quét nhà (VOICE)
                </span>
                <p className="text-xs sm:text-sm text-ink leading-relaxed italic">
                  “Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng, uỷ viên này uỷ
                  viên khác là làm gì? Làm đầy tớ. Làm đầy tớ cho nhân dân, chứ
                  không phải là làm quan cách mạng.”
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  “Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.
                  Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ
                  tịch một nước đều là phân công làm đầy tớ cho dân.”
                </p>
              </div>

              {/* Quyền kiểm soát & bãi miễn tối cao */}
              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Quyền bãi miễn & đuổi Chính phủ (VOICE)
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Nhân dân có quyền kiểm soát, phê bình nhà nước, có quyền bãi
                  miễn những đại biểu mà họ đã lựa chọn, bầu ra và có quyền giải
                  tán những thiết chế quyền lực mà họ đã lập nên:
                </p>
                <blockquote className="font-serif italic text-xs text-ink leading-relaxed pt-1 border-t border-[#ebd8c2]">
                  “Bác mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để
                  làm trọn nhiệm vụ của mình là người đầy tớ trung thành tận tụy
                  của nhân dân trong Nhà nước đó, nhân dân có quyền bãi miễn đại
                  biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy
                  tỏ ra không xứng đáng với sự tín nhiệm của nhân dân, thậm chí nếu
                  Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ.”
                </blockquote>
              </div>

              {/* Chốt hạ về Pháp luật */}
              <div className="p-3 bg-[#7a1818] text-paper-light rounded-lg text-xs leading-relaxed font-serif shadow-xs">
                <strong>Chốt lại:</strong> Luật pháp dân chủ và là công cụ thực
                thi quyền lực của nhân dân, là phương tiện để kiểm soát quyền lực
                nhà nước.
              </div>
            </div>
          </div>

          <InfographicCuaDoViDan />
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="dan-chu"
      code="4.2.1"
      title="NHÀ NƯỚC DÂN CHỦ"
      parentPath="4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân"
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
