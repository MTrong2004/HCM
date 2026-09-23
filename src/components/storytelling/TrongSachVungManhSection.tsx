"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function TrongSachVungManhSection() {
  const tabs: TabItem[] = [
    {
      id: "kiem-soat-quyen-luc",
      label: "a. Kiểm soát quyền lực nhà nước",
      badge: "Kiểm soát đa chiều",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Bản chất & Tất yếu kiểm soát */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Bản chất Nhà nước trong sạch, vững mạnh
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững mạnh không chỉ là xây dựng một bộ máy hoạt động hiệu quả mà còn phải <strong>kiểm soát quyền lực</strong> và <strong>phòng, chống các biểu hiện tiêu cực</strong>.
                </p>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Quyền lực nhà nước phải được thực hiện đúng mục đích, đúng pháp luật và hướng đến lợi ích của nhân dân. Đồng thời, cán bộ, công chức phải có trách nhiệm, đạo đức và tuyệt đối không được lợi dụng chức vụ để phục vụ lợi ích cá nhân.
                </p>
              </div>
            </EditorialReveal>

            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Tất yếu khách quan: Vì sao phải kiểm soát quyền lực?
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Theo Hồ Chí Minh, quyền lực là cần thiết để Nhà nước thực hiện chức năng quản lý xã hội, nhưng quyền lực nếu không được kiểm soát có thể dẫn đến <strong>lạm quyền, lộng quyền hoặc chuyên quyền</strong>.
                </p>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Vì vậy, người được giao quyền lực không được tự ý sử dụng quyền lực theo ý muốn cá nhân mà phải chịu sự kiểm tra, giám sát chặt chẽ và tuân thủ pháp luật.
                </p>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Điểm nhấn cốt tử
                  </div>
                  <blockquote className="font-serif italic font-bold text-xs sm:text-[13.5px] text-[#7a1818] leading-relaxed">
                    “Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối.”
                  </blockquote>
                  <div className="text-[10.5px] font-mono text-[#7a1818] font-bold pt-0.5">
                    QUYỀN LỰC → KIỂM SOÁT → TRÁCH NHIỆM → NIỀM TIN CỦA NHÂN DÂN
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Ai kiểm soát & Phương thức kiểm soát */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Cơ chế và các chủ thể kiểm soát quyền lực
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Việc kiểm soát quyền lực không chỉ do một cơ quan đảm nhiệm mà cần có sự phối hợp đồng bộ giữa <strong>Đảng, Nhà nước và Nhân dân</strong>:
                </p>

                {/* Sơ đồ kiểm soát */}
                <div className="space-y-1.5 pt-1">
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">ĐẢNG LÃNH ĐẠO</span>
                      <span className="text-xs text-ink">Kiểm tra, giám sát cán bộ, đảng viên và đường lối</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7a1818] bg-white px-2 py-0.5 rounded border border-[#e5dac8]">Kiểm tra Đảng</span>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">NHÀ NƯỚC QUẢN LÝ</span>
                      <span className="text-xs text-ink">Pháp luật, thanh tra nội bộ và kiểm soát giữa các cơ quan</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7a1818] bg-white px-2 py-0.5 rounded border border-[#e5dac8]">Pháp quyền</span>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">NHÂN DÂN LÀM CHỦ</span>
                      <span className="text-xs text-ink">Chủ thể quyền lực: Tham gia, giám sát và phản ánh sai phạm</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7a1818] bg-white px-2 py-0.5 rounded border border-[#e5dac8]">Giám sát tối cao</span>
                  </div>
                </div>
              </div>
            </EditorialReveal>

            <EditorialReveal delay={240}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Phương thức Nhân dân thực hiện quyền kiểm soát
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Nhân dân không trực tiếp điều hành mọi việc nhưng thực hiện quyền làm chủ thông qua việc tham gia quản lý xã hội, đóng góp ý kiến, kiểm tra và phản ánh sai phạm.
                </p>
                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md text-xs sm:text-[13px] text-ink leading-relaxed">
                  Khi phát hiện cán bộ vi phạm, người dân có quyền khiếu nại, tố cáo đến cơ quan có thẩm quyền theo quy định pháp luật.
                </div>
                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs sm:text-[13.5px] font-serif italic text-[#7a1818] font-bold">
                  “Người có quyền lực cũng phải chịu sự kiểm soát của nhân dân.”
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "phong-chong-tieu-cuc",
      label: "b. Phòng, chống tiêu cực trong Nhà nước",
      badge: "Nhận diện & Phòng chống",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Nhận diện nguy cơ & 3 thứ "Giặc nội xâm" */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Tính tất yếu phòng, chống tiêu cực & 3 thứ &ldquo;Giặc nội xâm&rdquo;
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Theo Hồ Chí Minh, tiêu cực trong bộ máy làm suy yếu hiệu lực Nhà nước và xói mòn niềm tin của nhân dân. Vì vậy, phải chủ động ngăn chặn từ sớm, đặc biệt là 3 thứ giặc nguy hiểm:
                </p>

                {/* 3 Biểu hiện tiêu cực đặc biệt */}
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      1. Tham ô (Ăn cắp của công):
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Chiếm đoạt tài sản công, biến của công thành của tư; lợi dụng quyền hạn để mưu lợi cá nhân.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      2. Lãng phí:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Lãng phí sức lao động, thời gian và tiền của của Nhà nước và nhân dân mà không đem lại hiệu quả.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      3. Bệnh quan liêu (Nguồn gốc dung túng):
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Xa rời nhân dân, xa rời thực tế, chỉ giấy tờ bàn giấy; là bệnh gốc nuôi dưỡng và che chở cho tham ô, lãng phí.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r space-y-1.5 shadow-3xs">
                  <span className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider block">
                    Lời dạy của Bác về &ldquo;Giặc nội xâm&rdquo; (1952)
                  </span>
                  <blockquote className="font-serif italic text-xs sm:text-[13px] text-[#5c0d0d] font-semibold leading-relaxed">
                    &ldquo;Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng minh của thực dân và phong kiến... Tội lỗi ấy cũng nặng như tội lỗi Việt gian, mật thám.&rdquo;
                  </blockquote>
                  <div className="text-right text-[11px] text-ink-muted font-sans font-medium">
                    — Hồ Chí Minh: Toàn tập, t. 7, tr. 357–358 (Giáo trình tr. 88)
                  </div>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e2d7c5] rounded-md space-y-1 text-xs sm:text-[12.5px] text-ink">
                  <strong className="text-[#7a1818] block font-serif">
                    • Kỷ cương phép nước từ các sắc lệnh năm 1946:
                  </strong>
                  <p className="leading-relaxed">
                    Ngày 26-1-1946, Người ký Lệnh quy định rõ tội tham ô đến mức án cao nhất là <strong>tử hình</strong>; ngày 27-11-1946 ký Sắc lệnh phạt tội đưa và nhận hối lộ từ <strong>5 đến 20 năm tù khổ sai</strong> và phạt gấp đôi số tiền nhận hối lộ.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Các biểu hiện tiêu cực khác */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Các căn bệnh tiêu cực khác trong đội ngũ cán bộ
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Bên cạnh 3 thứ giặc nội xâm, Hồ Chí Minh còn kiên quyết phê phán những biểu hiện làm suy yếu nội bộ:
                </p>

                <div className="space-y-2">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Đặc quyền, đặc lợi:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Cậy thế mình là người trong cơ quan chính quyền để cửa quyền, hách dịch, lạm quyền và vơ vét tiền của cho cá nhân.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Tư túng:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Thiên vị người thân, phe nhóm; cất nhắc người thân quen thiếu năng lực vào các vị trí công quyền.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Chia rẽ:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Gây mất đoàn kết trong tập thể, bè phái cục bộ, bài trừ người có năng lực nhưng khác quan điểm.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-0.5">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Kiêu ngạo:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Cậy chức vụ coi thường quần chúng, tự cho mình là đúng, không chịu lắng nghe phê bình và ý kiến nhân dân.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs sm:text-[13px] text-ink leading-relaxed">
                  <strong className="text-[#7a1818]">Hậu quả nghiêm trọng:</strong> Những biểu hiện tiêu cực này phá vỡ khối đại đoàn kết nội bộ, làm mất uy tín của tổ chức và làm rạn nứt mối quan hệ máu thịt giữa Đảng, Nhà nước với Nhân dân.
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "xay-di-doi-voi-chong",
      label: "c. 'Xây' đi đôi với 'Chống' & Nêu gương",
      badge: "Xây đi đôi với Chống",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Phương châm "Xây" đi đôi với "Chống" & Nêu gương */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Phương châm &ldquo;Xây&rdquo; đi đôi với &ldquo;chống&rdquo;
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Theo tư tưởng Hồ Chí Minh, xây dựng Nhà nước trong sạch không thể chỉ tập trung vào việc “xây” mà phải đồng thời thực hiện “chống”. Hai mặt này gắn bó biện chứng, tác động tương hỗ:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1">
                    <div className="font-bold text-xs sm:text-[13px] text-[#7a1818]">
                      MẶT &ldquo;XÂY&rdquo;:
                    </div>
                    <p className="text-xs text-ink leading-relaxed">
                      Xây dựng Nhà nước dân chủ, hoàn thiện pháp luật, kiện toàn bộ máy hiệu quả và rèn luyện đội ngũ cán bộ tận tụy, trách nhiệm.
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1">
                    <div className="font-bold text-xs sm:text-[13px] text-[#7a1818]">
                      MẶT &ldquo;CHỐNG&rdquo;:
                    </div>
                    <p className="text-xs text-ink leading-relaxed">
                      Kiên quyết đấu tranh chống tham ô, lãng phí, quan liêu, bài trừ chủ nghĩa cá nhân và những hành vi lộng quyền.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Nguyên lý biện chứng
                  </div>
                  <p className="font-serif italic font-bold text-xs sm:text-[13.5px] text-[#7a1818] leading-relaxed">
                    “Xây” để tạo ra cái tốt – “Chống” để loại bỏ cái xấu.
                  </p>
                </div>
              </div>
            </EditorialReveal>

            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Trách nhiệm nêu gương của người cán bộ lãnh đạo
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Hồ Chí Minh đặc biệt coi trọng vai trò của người cán bộ trong việc xây dựng Nhà nước trong sạch. Cán bộ không chỉ cần có năng lực chuyên môn mà trước hết phải có đạo đức cách mạng trong sáng.
                </p>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Người có chức vụ càng cao thì càng phải làm gương, bởi hành động và phẩm chất của người lãnh đạo có sức lan tỏa trực tiếp đến toàn thể bộ máy và niềm tin của quần chúng.
                </p>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Chuẩn mực đạo đức công vụ
                  </div>
                  <blockquote className="font-serif italic font-bold text-xs sm:text-[13.5px] text-[#7a1818] leading-relaxed">
                    “Cán bộ phải vừa có đức, vừa có tài, trong đó đức là gốc.”
                  </blockquote>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: 5 Biện pháp phòng, chống tiêu cực */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Hệ thống 5 biện pháp phòng, chống tiêu cực trọng yếu (Dân - Luật - Phạt - Gương)
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                  Để phòng, chống tiêu cực hiệu quả trong bộ máy Nhà nước, Hồ Chí Minh đề ra hệ thống 5 giải pháp căn cơ:
                </p>

                <div className="space-y-2 pt-1">
                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">Phát huy dân chủ rộng rãi:</span>
                      <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">Nâng cao dân trí, tạo mọi điều kiện thuận lợi để nhân dân tham gia rộng rãi và trực tiếp giám sát hoạt động của cơ quan công quyền.</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">Tăng cường pháp luật, kiểm tra và giám sát:</span>
                      <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">Quyền lực phải luôn được đặt trong khuôn khổ pháp luật, có cơ chế kiểm tra định kỳ và đột xuất nghiêm ngặt.</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">Kỷ luật nghiêm minh, không vùng cấm:</span>
                      <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">Sai phạm phải được phát hiện kịp thời và xử lý nghiêm khắc, đúng người đúng tội, không có ngoại lệ, bất kể người đó là ai.</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">Cán bộ lãnh đạo phải tiên phong làm gương:</span>
                      <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">Người đứng đầu cơ quan phải nêu cao tinh thần trách nhiệm, cần kiệm liêm chính để cấp dưới và nhân dân noi theo.</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#7a1818] text-[#fff8ea] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      05
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-[13px] text-[#7a1818] block">Phát huy sức mạnh giám sát của nhân dân:</span>
                      <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">Động viên, bảo vệ nhân dân tham gia phát hiện, phản ánh và dũng cảm đấu tranh với các biểu hiện tiêu cực trong xã hội.</p>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialReveal>
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