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
      label: "a. Bản chất giai cấp công nhân",
      badge: "Giai cấp & Dân tộc",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: 3 Phương diện thể hiện bản chất giai cấp công nhân */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  1. Phương diện bản chất giai cấp công nhân
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp
                công nhân; không phải là “nhà nước toàn dân” phi giai cấp.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Đảng Cộng sản giữ vai trò cầm quyền
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lời nói đầu Hiến pháp 1959 khẳng định:{" "}
                    <em>
                      “Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên
                      nền tảng liên minh công nông, do giai cấp công nhân lãnh
                      đạo”
                    </em>
                    . Đảng lãnh đạo bằng đường lối thể chế hóa thành pháp luật,
                    bằng đảng viên trong bộ máy và bằng công tác kiểm tra.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Định hướng xã hội chủ nghĩa
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa
                    cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Nguyên tắc tập trung dân chủ
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tổ chức và hoạt động chặt chẽ theo nguyên tắc tập trung dân
                    chủ, kết hợp lãnh đạo tập thể với cá nhân phụ trách.
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

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    01
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Nhà nước ra đời là kết quả đấu tranh gian khổ của toàn thể
                    dân tộc, thuộc về nhân dân chứ không của riêng giai cấp nào.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    02
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Nhất quán mục tiêu vì quyền lợi của nhân dân, lấy lợi ích của
                    dân tộc làm nền tảng phát triển.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#7a1818] text-paper-light font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    03
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-snug">
                    Đảm đương sứ mệnh tổ chức toàn dân kháng chiến kiến quốc, xây
                    dựng một nước Việt Nam hòa bình, thống nhất, dân chủ và giàu
                    mạnh.
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
      badge: "Dân là chủ",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Hai hình thức thực thi dân chủ */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Dân chủ trực tiếp & Dân chủ gián tiếp
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Tất cả quyền lực nhà nước đều thuộc về nhân dân. Người khẳng
                định:{" "}
                <em>
                  “Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả
                  mọi quyền lực đều là của nhân dân.”
                </em>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Dân chủ trực tiếp
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Nhân dân trực tiếp quyết định vận mệnh quốc gia, thực hiện
                    quyền bầu cử, phúc quyết các vấn đề hệ trọng của đất nước.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Dân chủ gián tiếp
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Thực thi quyền lực thông qua các đại biểu được nhân dân bầu
                    ra và các thiết chế quyền lực do nhân dân lập nên.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded-lg text-xs text-ink">
                <strong>Quyền lực thừa ủy quyền:</strong> Nhà nước không tự có
                quyền lực, mà do nhân dân ủy thác để gánh vác việc chung chứ
                không phải để đè đầu dân.
              </div>
            </div>

            {/* Cột phải: Cán bộ là công bộc & Quyền bãi miễn của dân */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Cán bộ là công bộc & Quyền bãi miễn của dân
              </h4>
              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  <em>
                    “Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng, ủy viên
                    này ủy viên khác là làm gì? Làm đầy tớ. Làm đầy tớ cho nhân
                    dân, chứ không phải là làm quan cách mạng.”
                  </em>
                </p>
                <p className="text-xs text-ink-muted">
                  Cán bộ từ người quét nhà cho đến Chủ tịch nước đều là công bộc
                  được phân công làm đầy tớ cho nhân dân.
                </p>
              </div>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Quyền bãi miễn đại biểu tối cao
                </div>
                <p className="text-xs text-ink italic leading-relaxed">
                  “Nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội
                  đồng nhân dân nếu tỏ ra không xứng đáng, thậm chí nếu Chính phủ
                  làm hại dân thì dân có quyền đuổi Chính phủ.”
                </p>
              </div>
            </div>
          </div>

          <InfographicCuaDoViDan />
        </div>
      ),
    },
    {
      id: "do-dan-vi-dan",
      label: "c. Nhà nước do dân & vì dân",
      badge: "Làm chủ & Phục vụ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Cột trái: Nhà nước do nhân dân */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Nhà nước do nhân dân
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Nhà nước do nhân dân xây dựng, ủng hộ và bảo vệ. Mối quan hệ
                biện chứng giữa <strong>“là chủ”</strong> (vị thế, quyền hạn) và{" "}
                <strong>“làm chủ”</strong> (năng lực, trách nhiệm và nghĩa vụ
                công dân).
              </p>
              <div className="p-3 bg-[#f5ecdc] rounded text-xs text-ink space-y-1">
                <div className="font-bold text-[#7a1818]">Nghĩa vụ công dân:</div>
                <p>
                  Đi đôi với quyền lợi là nghĩa vụ tuân thủ pháp luật, lao động,
                  bảo vệ Tổ quốc và nâng cao dân trí để làm chủ thực chất.
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Nhà nước vì nhân dân */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Nhà nước vì nhân dân
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Mọi chủ trương, chính sách đều phải xuất phát từ lợi ích chính
                đáng của nhân dân. Người căn dặn:{" "}
                <em>
                  “Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến
                  dân, ta phải hết sức tránh.”
                </em>
              </p>
              <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs font-serif text-ink">
                Yêu cầu cán bộ phải vừa có đức vừa có tài, trong đó đức là gốc,
                gần dân, hiểu dân, học hỏi dân và thực sự phục vụ nhân dân.
              </div>
            </div>
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
      summary="Khẳng định bản chất giai cấp công nhân gắn bó máu thịt với tính nhân dân và tính dân tộc; quyền làm chủ tối cao thuộc về Nhân dân qua hai hình thức dân chủ trực tiếp và gián tiếp."
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
