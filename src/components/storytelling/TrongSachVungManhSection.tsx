"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";

export default function TrongSachVungManhSection() {
  const tabs: TabItem[] = [
    {
      id: "kiem-soat-quyen-luc",
      label: "a. Kiểm soát quyền lực nhà nước",
      badge: "Kiểm soát quyền lực",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Luận điểm 1 & 2 */}
          <div className="lg:col-span-6 space-y-2.5">
            {/* Luận điểm 1: Nhà nước trong sạch, vững mạnh */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink uppercase tracking-wide">
                  1. Nhà nước trong sạch, vững mạnh
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững
                mạnh không chỉ là xây dựng một bộ máy hoạt động hiệu quả mà còn
                phải kiểm soát quyền lực và phòng, chống các biểu hiện tiêu cực.
              </p>
              <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                Quyền lực nhà nước phải được thực hiện đúng mục đích, đúng pháp
                luật và hướng đến lợi ích của nhân dân. Đồng thời, cán bộ, công
                chức phải có trách nhiệm, đạo đức và không được lợi dụng chức vụ
                để phục vụ lợi ích cá nhân.
              </p>
            </div>

            {/* Luận điểm 2: Vì sao phải kiểm soát quyền lực? */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  2. Vì sao phải kiểm soát quyền lực?
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Theo Hồ Chí Minh, quyền lực là cần thiết để Nhà nước thực hiện
                chức năng quản lý xã hội, nhưng quyền lực nếu không được kiểm soát
                có thể dẫn đến <strong>lạm quyền, lộng quyền hoặc chuyên quyền</strong>.
              </p>
              <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                Vì vậy, người được giao quyền lực không được tự ý sử dụng quyền
                lực theo ý muốn cá nhân mà phải chịu sự kiểm tra, giám sát và tuân
                thủ pháp luật.
              </p>

              <div className="p-2 sm:p-2.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1 mt-1">
                <div className="font-serif font-bold text-[10px] text-[#7a1818] uppercase tracking-wider">
                  Điểm nhấn nổi bật
                </div>
                <blockquote className="text-[11px] sm:text-xs font-serif italic text-ink font-semibold leading-snug">
                  “Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối.”
                </blockquote>
                <div className="text-[9.5px] font-mono text-[#7a1818] font-bold pt-0.5">
                  QUYỀN LỰC → KIỂM SOÁT → TRÁCH NHIỆM → NIỀM TIN CỦA NHÂN DÂN
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Luận điểm 3 & 4 */}
          <div className="lg:col-span-6 space-y-2.5">
            {/* Luận điểm 3: Ai kiểm soát quyền lực nhà nước? */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  3. Ai kiểm soát quyền lực nhà nước?
                </h3>
              </div>
              <p className="text-[11px] text-ink leading-snug">
                Việc kiểm soát quyền lực không chỉ được thực hiện bởi một cá nhân
                hay một cơ quan mà cần có nhiều cơ chế và chủ thể cùng tham gia.
                Trong tư tưởng Hồ Chí Minh, việc kiểm soát quyền lực gắn với vai
                trò của <strong>Đảng, Nhà nước và nhân dân</strong>.
              </p>
              <p className="text-[11px] text-ink-muted leading-snug">
                Trong đó, nhân dân là chủ thể của quyền lực nhà nước, vì vậy nhân
                dân có quyền tham gia, kiểm tra và giám sát hoạt động của Nhà nước.
              </p>

              {/* Sơ đồ kiểm soát */}
              <div className="pt-1 space-y-1.5">
                <div className="text-[10px] font-serif font-bold text-[#7a1818] uppercase tracking-wider">
                  Sơ đồ kiểm soát quyền lực:
                </div>
                <div className="space-y-1">
                  {/* Nhánh 1: Đảng */}
                  <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-xs text-[#7a1818]">ĐẢNG</span>
                    <span className="text-[10.5px] text-ink font-medium">
                      ↓ Kiểm tra, giám sát cán bộ
                    </span>
                  </div>
                  {/* Nhánh 2: Nhà nước */}
                  <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-xs text-[#7a1818]">NHÀ NƯỚC</span>
                    <span className="text-[10.5px] text-ink font-medium">
                      ↓ Pháp luật – Quy định – Kiểm tra
                    </span>
                  </div>
                  {/* Nhánh 3: Nhân dân */}
                  <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <span className="font-bold text-xs text-[#7a1818]">NHÂN DÂN</span>
                    <span className="text-[10.5px] text-ink font-medium">
                      ↓ Tham gia – Giám sát – Phản ánh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Luận điểm 4: Nhân dân kiểm soát quyền lực như thế nào? */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  4. Nhân dân kiểm soát quyền lực như thế nào?
                </h3>
              </div>
              <p className="text-[11px] text-ink leading-snug">
                Nhân dân không trực tiếp điều hành tất cả hoạt động của Nhà nước
                nhưng có quyền tham gia quản lý xã hội, đóng góp ý kiến, kiểm tra,
                giám sát và phản ánh những hành vi sai phạm.
              </p>
              <p className="text-[11px] text-ink-muted leading-snug">
                Khi phát hiện cán bộ hoặc cơ quan có dấu hiệu vi phạm, người dân
                có thể phản ánh, khiếu nại hoặc tố cáo đến cơ quan, người có thẩm
                quyền theo quy định, chứ không nhất thiết phải phản ánh cho chính
                người bị phản ánh.
              </p>
              <div className="pt-1.5 border-t border-[#ebd8c2] text-[11px] font-serif italic text-[#7a1818] font-bold">
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
      badge: "Nhận diện & Phòng chống",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Luận điểm 1 - Vì sao phải phòng, chống tiêu cực */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  1. Vì sao phải phòng, chống tiêu cực?
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed">
                Theo Hồ Chí Minh, những biểu hiện tiêu cực trong bộ máy Nhà nước
                có thể làm suy yếu hiệu quả hoạt động của Nhà nước và ảnh hưởng
                đến niềm tin của nhân dân.
              </p>
              <p className="text-[11px] sm:text-xs text-ink leading-relaxed font-medium text-[#7a1818]">
                Vì vậy, muốn xây dựng Nhà nước trong sạch, vững mạnh thì phải chủ
                động phát hiện và ngăn chặn những biểu hiện tiêu cực, đặc biệt là{" "}
                <strong>tham ô, lãng phí và quan liêu</strong>.
              </p>

              {/* 3 Biểu hiện tiêu cực đặc biệt */}
              <div className="space-y-1.5 pt-1">
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    1. Tham ô
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Hành vi chiếm đoạt tài sản công, biến của công thành của tư; lợi dụng chức vụ để vụ lợi.
                  </p>
                </div>
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    2. Lãng phí
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Lãng phí sức lao động, thời gian và tiền của của Nhà nước và nhân dân mà không đem lại hiệu quả.
                  </p>
                </div>
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    3. Bệnh quan liêu
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Xa rời nhân dân, xa rời thực tế; là bệnh gốc nuôi dưỡng và che chở cho tham ô, lãng phí.
                  </p>
                </div>
              </div>

              <div className="p-2 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r text-[10.5px] text-ink">
                Hồ Chí Minh coi tham ô, lãng phí, quan liêu là thứ <strong>&ldquo;giặc nội xâm&rdquo;</strong>, là &ldquo;giặc ở trong lòng&rdquo; vô cùng nguy hiểm. Căn nguyên sâu xa chính là <strong>chủ nghĩa cá nhân</strong>.
              </div>
            </div>
          </div>

          {/* Cột phải: Luận điểm 2 - Những biểu hiện tiêu cực khác */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  2. Những biểu hiện tiêu cực khác
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-ink-muted leading-snug">
                Bên cạnh tham ô, lãng phí và quan liêu, Hồ Chí Minh còn phê phán
                nhiều biểu hiện tiêu cực khác trong đội ngũ cán bộ như{" "}
                <strong>tư túng, chia rẽ và kiêu ngạo</strong>:
              </p>

              <div className="space-y-1.5">
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded space-y-0.5">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    • Tư túng
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Thiên vị người thân, phe nhóm hoặc lợi ích riêng; đưa người thân quen thiếu năng lực vào cơ quan.
                  </p>
                </div>

                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded space-y-0.5">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    • Chia rẽ
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Gây mất đoàn kết trong tập thể, kéo bè kéo cánh, làm suy yếu sự gắn kết nội bộ.
                  </p>
                </div>

                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded space-y-0.5">
                  <div className="font-bold text-[11px] text-[#7a1818]">
                    • Kiêu ngạo
                  </div>
                  <p className="text-[10.5px] text-ink leading-snug">
                    Có chức vụ rồi coi thường người khác, tự cho mình là đúng, không chịu lắng nghe ý kiến đóng góp của quần chúng.
                  </p>
                </div>
              </div>

              <div className="p-2.5 bg-[#f8f1e2] border border-[#ebd8c2] rounded text-[11px] text-ink leading-relaxed">
                <strong className="text-[#7a1818]">Hậu quả:</strong> Những biểu hiện này nếu không được ngăn chặn có thể làm suy giảm tính đoàn kết và hiệu quả của bộ máy Nhà nước.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "xay-di-doi-voi-chong",
      label: "c. 'Xây' đi đôi với 'Chống' & Nêu gương",
      badge: "Xây đi đôi với Chống",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Cột trái: Luận điểm 1 & 3 */}
          <div className="lg:col-span-6 space-y-2.5">
            {/* Luận điểm 1: "Xây" đi đôi với "Chống" */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  1. &ldquo;Xây&rdquo; đi đôi với &ldquo;chống&rdquo;
                </h3>
              </div>
              <p className="text-[11px] text-ink leading-relaxed">
                Theo tư tưởng Hồ Chí Minh, xây dựng Nhà nước trong sạch không thể
                chỉ tập trung vào việc “xây” mà phải đồng thời thực hiện “chống”.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    XÂY:
                  </div>
                  <p className="text-[10px] text-ink leading-snug">
                    Xây dựng Nhà nước dân chủ, có pháp luật, bộ máy hoạt động hiệu quả và đội ngũ cán bộ có đạo đức, trách nhiệm.
                  </p>
                </div>
                <div className="p-2 bg-[#f6efe4] border border-[#e5dac8] rounded">
                  <div className="font-bold text-[10.5px] text-[#7a1818] mb-0.5">
                    CHỐNG:
                  </div>
                  <p className="text-[10px] text-ink leading-snug">
                    Chống tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân và những hành vi lợi dụng quyền lực.
                  </p>
                </div>
              </div>

              <div className="p-2 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r text-center font-serif italic text-xs font-bold text-[#7a1818]">
                “Xây” để tạo ra cái tốt – “Chống” để loại bỏ cái xấu.
              </div>
            </div>

            {/* Luận điểm 3: Cán bộ phải nêu gương */}
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  3. Cán bộ phải nêu gương
                </h3>
              </div>
              <p className="text-[11px] text-ink leading-relaxed">
                Hồ Chí Minh đặc biệt coi trọng vai trò của người cán bộ trong
                việc xây dựng Nhà nước trong sạch. Cán bộ không chỉ cần có năng
                lực mà còn phải có đạo đức, trách nhiệm và tinh thần phục vụ nhân dân.
              </p>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Người có chức vụ càng cao thì càng phải làm gương, bởi hành động
                của người lãnh đạo có ảnh hưởng trực tiếp đến tập thể và bộ máy
                mà họ quản lý.
              </p>
              <div className="p-2 bg-[#f8f1e2] border border-[#ebd8c2] rounded text-[11px] font-serif font-bold text-[#7a1818] text-center">
                “Cán bộ phải vừa có đức, vừa có tài, trong đó đức là gốc.”
              </div>
            </div>
          </div>

          {/* Cột phải: Luận điểm 2 - Các biện pháp phòng, chống tiêu cực */}
          <div className="lg:col-span-6 space-y-2">
            <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-ink">
                  2. Các biện pháp phòng, chống tiêu cực
                </h3>
              </div>
              <p className="text-[11px] text-ink-muted leading-snug">
                Để phòng, chống tiêu cực trong Nhà nước, Hồ Chí Minh nhấn mạnh nhiều biện pháp:
              </p>

              <div className="space-y-1.5 pt-0.5">
                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <span className="font-bold text-[10.5px] text-[#7a1818]">Phát huy dân chủ:</span>
                    <span className="text-[10.5px] text-ink ml-1">Tạo điều kiện để nhân dân tham gia và giám sát hoạt động của Nhà nước.</span>
                  </div>
                </div>

                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <span className="font-bold text-[10.5px] text-[#7a1818]">Tăng cường pháp luật, kiểm tra và giám sát:</span>
                    <span className="text-[10.5px] text-ink ml-1">Quyền lực phải được đặt trong khuôn khổ pháp luật và có cơ chế kiểm tra thường xuyên.</span>
                  </div>
                </div>

                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <span className="font-bold text-[10.5px] text-[#7a1818]">Xử lý nghiêm minh:</span>
                    <span className="text-[10.5px] text-ink ml-1">Sai phạm phải được phát hiện và xử lý đúng người, đúng mức độ.</span>
                  </div>
                </div>

                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    04
                  </div>
                  <div>
                    <span className="font-bold text-[10.5px] text-[#7a1818]">Cán bộ phải nêu gương:</span>
                    <span className="text-[10.5px] text-ink ml-1">Người có chức vụ càng cao càng phải có trách nhiệm làm gương.</span>
                  </div>
                </div>

                <div className="p-1.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    05
                  </div>
                  <div>
                    <span className="font-bold text-[10.5px] text-[#7a1818]">Phát huy sức mạnh của nhân dân:</span>
                    <span className="text-[10.5px] text-ink ml-1">Nhân dân tham gia phát hiện, phản ánh và đấu tranh với những biểu hiện tiêu cực.</span>
                  </div>
                </div>
              </div>
            </div>
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