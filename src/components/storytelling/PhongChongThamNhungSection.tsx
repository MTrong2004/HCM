"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";

export default function PhongChongThamNhungSection() {
  const tabs: TabItem[] = [
    {
      id: "phong-chong-tham-nhung-tong-quan",
      label: "4.3.3 Đấu tranh phòng, chống 'Giặc nội xâm'",
      badge: "Không có vùng cấm",
      content: (
        <div className="space-y-4 text-ink">
          {/* Hàng 1: Nhận diện và Tác hại đối với lòng tin */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
            {/* Cột trái: Nhận diện ba căn bệnh nguy hại */}
            <div className="lg:col-span-6 space-y-3">
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Nhận diện hiểm họa “Giặc nội xâm”
                  </h3>
                </div>
                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Chủ tịch Hồ Chí Minh khẳng định tham ô, lãng phí, quan liêu là{" "}
                  <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> – kẻ thù nguy hiểm vì nó phá hoại sự nghiệp cách mạng từ bên trong bộ máy:
                </p>

                <div className="space-y-2 pt-1">
                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                        ✦ Tham ô — Ăn cắp của công
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#7a1818]/10 text-[#7a1818] px-1.5 py-0.5 rounded font-bold">
                        Trục lợi
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Lợi dụng chức vụ, quyền hạn để chiếm đoạt tài sản công của Nhà nước và nhân dân làm của riêng. Bác coi tham ô là hành vi ăn cắp tiền bạc của nhân dân.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                        ✦ Lãng phí — Thiệt hại khôn lường
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#c8aa76]/30 text-[#540c0c] px-1.5 py-0.5 rounded font-bold">
                        Không hiệu quả
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Lãng phí sức lao động, thời gian và tiền của của Nhà nước và nhân dân. Tuy không trực tiếp chiếm đoạt nhưng kết quả tai hại, thất thoát nghiêm trọng ngang với tham ô.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                        ✦ Bệnh quan liêu — Gốc rễ tai họa
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#7a1818]/10 text-[#7a1818] px-1.5 py-0.5 rounded font-bold">
                        Cội nguồn
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Xa rời thực tế, xa rời quần chúng; chỉ thích ngồi phòng giấy hách dịch, cửa quyền. Quan liêu chính là mảnh đất cội nguồn dung dưỡng cho tham ô và lãng phí sinh sôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Tác hại sống còn & Lời dạy của Bác */}
            <div className="lg:col-span-6 space-y-3">
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. Tác hại sống còn đối với lòng tin của Nhân dân
                  </h3>
                </div>

                <p className="text-xs sm:text-[13.5px] text-ink leading-relaxed">
                  Chủ tịch Hồ Chí Minh nghiêm khắc cảnh báo: Tham ô, lãng phí, quan liêu làm mục ruỗng bộ máy nhà nước, thoái hóa cán bộ và nguy hiểm nhất là{" "}
                  <strong>làm xói mòn lòng tin sinh tử của nhân dân</strong> vào chế độ chính trị và vai trò lãnh đạo của Đảng.
                </p>

                <div className="p-3 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1.5 shadow-3xs">
                  <span className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider block">
                    Lời dạy bất hủ của Chủ tịch Hồ Chí Minh
                  </span>
                  <blockquote className="font-serif italic text-xs sm:text-[13.5px] md:text-sm text-[#5c0d0d] font-semibold leading-relaxed">
                    “Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng minh của thực dân và phong kiến.”
                  </blockquote>
                  <div className="text-right text-[11px] sm:text-xs text-ink-muted font-sans font-medium">
                    — Hồ Chí Minh (1952)
                  </div>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e2d7c5] rounded-md space-y-1">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                    <span>▪</span> Trọng tâm công tác hiện nay:
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Kiên quyết chống thói cửa quyền, hách dịch, sách nhiễu nhân dân; thực hành tiết kiệm triệt để trong cơ quan nhà nước; củng cố mối quan hệ máu thịt giữa nhân dân với chế độ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hàng 2: Kỷ cương phép nước & 5 Biện pháp Dân - Luật - Phạt - Gương */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
            {/* Cột trái: Nguyên tắc kỷ cương & Cơ chế phòng ngừa */}
            <div className="lg:col-span-6 space-y-3">
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    3. Kỷ cương phép nước & Cơ chế phòng ngừa
                  </h3>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1">
                  <span className="font-serif font-bold text-[11px] text-[#7a1818] uppercase tracking-wider block">
                    Nguyên tắc bất di bất dịch
                  </span>
                  <blockquote className="text-xs sm:text-[13.5px] font-serif font-bold text-[#5c0d0d] leading-relaxed">
                    “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                  </blockquote>
                  <p className="text-xs sm:text-[12.5px] text-ink leading-relaxed">
                    Bất kỳ ai lợi dụng quyền lực để tham nhũng, lãng phí đều phải bị xử lý nghiêm minh trước pháp luật.
                  </p>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#fbf8f0] border border-[#e2d7c5] rounded-md space-y-2">
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                    Cơ chế phòng ngừa 3 tầng khép kín:
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-[#fdfcf9] rounded border border-[#e2d7c5] shadow-3xs space-y-0.5">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG THỂ
                      </span>
                      <span className="text-[11px] sm:text-xs text-ink leading-tight block">
                        Thể chế chặt chẽ
                      </span>
                    </div>
                    <div className="p-2 bg-[#fdfcf9] rounded border border-[#e2d7c5] shadow-3xs space-y-0.5">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG DÁM
                      </span>
                      <span className="text-[11px] sm:text-xs text-ink leading-tight block">
                        Kỷ luật nghiêm minh
                      </span>
                    </div>
                    <div className="p-2 bg-[#fdfcf9] rounded border border-[#e2d7c5] shadow-3xs space-y-0.5">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG CẦN
                      </span>
                      <span className="text-[11px] sm:text-xs text-ink leading-tight block">
                        Đãi ngộ xứng đáng
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: 5 Biện pháp phòng chống tiêu cực */}
            <div className="lg:col-span-6 space-y-3">
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    4. 5 Biện pháp cốt lõi của Bác (Dân - Luật - Phạt - Gương - Giáo dục)
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs sm:text-[13px]">
                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2 shadow-3xs">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Phát huy dân chủ:</strong> Tạo điều kiện tối đa để nhân dân kiểm tra, giám sát hoạt động của cơ quan công quyền.
                    </div>
                  </div>

                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2 shadow-3xs">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Hoàn thiện pháp luật:</strong> Xây dựng hệ thống thể chế chặt chẽ, bịt kín mọi kẽ hở chính sách.
                    </div>
                  </div>

                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2 shadow-3xs">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Xử phạt nghiêm minh:</strong> Trừng trị thích đáng mọi hành vi sai phạm, trừng trị để răn đe và thức tỉnh.
                    </div>
                  </div>

                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2 shadow-3xs">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Cán bộ nêu gương:</strong> Cán bộ lãnh đạo phải đi đầu thực hành Cần, Kiệm, Liêm, Chính, chí công vô tư.
                    </div>
                  </div>

                  <div className="p-2 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2 shadow-3xs">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Sức mạnh Nhân dân:</strong> Dựa vào nhân dân để phát hiện, tố giác và kiên quyết bài trừ giặc nội xâm.
                    </div>
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
      id="phong-chong-tham-nhung"
      code="4.3.3"
      title="ĐẤU TRANH PHÒNG, CHỐNG “GIẶC NỘI XÂM”"
      parentPath="4.3. Vận dụng tư tưởng Hồ Chí Minh trong giai đoạn hiện nay"
      quote="Tham ô, lãng phí, quan liêu là 'giặc nội xâm', phá hoại sự nghiệp cách mạng từ bên trong bộ máy."
      quoteAuthor="Hồ Chí Minh"
      summary="Nhận diện đúng bản chất tham ô, lãng phí, quan liêu là 'giặc ở trong lòng' phá hoại sự nghiệp cách mạng từ bên trong; kiên quyết giữ vững nguyên tắc 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai' và xây dựng cơ chế phòng ngừa đồng bộ kết hợp Dân - Luật - Phạt - Gương."
      tabs={tabs}
      prevSection={{
        id: "xay-dung-nha-nuoc",
        label: "← 4.3.2 Xây dựng Nhà nước",
      }}
      nextSection={{
        id: "ket-luan",
        label: "Ứng dụng AI →",
      }}
    />
  );
}