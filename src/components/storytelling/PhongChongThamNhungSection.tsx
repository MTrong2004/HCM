"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function PhongChongThamNhungSection() {
  const tabs: TabItem[] = [
    {
      id: "nhan-dien-van-de",
      label: "a. Nhận diện 'Giặc ở trong lòng'",
      badge: "Tham ô • Lãng phí • Quan liêu",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái (6 cols trên LG): Nhận diện ba căn bệnh nguy hại */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Nhận diện hiểm họa “Giặc nội xâm”
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Chủ tịch Hồ Chí Minh khẳng định tham ô, lãng phí, quan liêu là{" "}
                  <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> – kẻ thù nguy hiểm vì nó phá hoại sự nghiệp cách mạng từ bên trong bộ máy:
                </p>

                {/* 3 Thẻ Bento nhận diện rõ ràng, chữ to rõ */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] flex items-center gap-1.5">
                        <span className="text-[#7a1818]">✦</span> Tham ô — Ăn cắp của công
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#7a1818]/10 text-[#7a1818] px-1.5 py-0.5 rounded font-bold">
                        Trục lợi cá nhân
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Lợi dụng chức vụ, quyền hạn để chiếm đoạt tài sản công của Nhà nước và nhân dân làm của riêng. Bác coi tham ô là hành vi ăn cắp tiền bạc của nhân dân.
                    </p>
                  </div>

                  <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] flex items-center gap-1.5">
                        <span className="text-[#7a1818]">✦</span> Lãng phí — Thiệt hại khôn lường
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#c8aa76]/30 text-[#540c0c] px-1.5 py-0.5 rounded font-bold">
                        Không hiệu quả
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Lãng phí sức lao động, thời gian và tiền của của Nhà nước và nhân dân. Tuy không trực tiếp chiếm đoạt nhưng kết quả tai hại, thất thoát nghiêm trọng ngang với tham ô.
                    </p>
                  </div>

                  <div className="p-3 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md shadow-3xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs sm:text-[13.5px] text-[#7a1818] flex items-center gap-1.5">
                        <span className="text-[#7a1818]">✦</span> Bệnh quan liêu — Gốc rễ tai họa
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-[#7a1818]/10 text-[#7a1818] px-1.5 py-0.5 rounded font-bold">
                        Cội nguồn dung dưỡng
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Xa rời thực tế, xa rời quần chúng; chỉ thích ngồi phòng giấy hách dịch, cửa quyền. Quan liêu chính là mảnh đất cội nguồn dung dưỡng cho tham ô và lãng phí sinh sôi.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải (6 cols trên LG): Tác hại sống còn & Lời dạy của Bác */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. Tác hại sống còn đối với lòng tin của Nhân dân
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Chủ tịch Hồ Chí Minh nghiêm khắc cảnh báo: Tham ô, lãng phí, quan liêu làm mục ruỗng bộ máy nhà nước, thoái hóa cán bộ và nguy hiểm nhất là{" "}
                  <strong>làm xói mòn lòng tin sinh tử của nhân dân</strong> vào chế độ chính trị và vai trò lãnh đạo của Đảng.
                </p>

                {/* Khối trích dẫn di sản chuẩn Editorial */}
                <div className="p-3 sm:p-3.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1.5 shadow-3xs">
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

                {/* Trọng tâm công tác hiện nay */}
                <div className="p-3 bg-[#fcf8f0] border border-[#e2d7c5] rounded-md space-y-1.5">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] flex items-center gap-1.5">
                    <span className="text-[#7a1818]">▪</span> Trọng tâm công tác xây dựng Đảng và Nhà nước hiện nay
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Kiên quyết chống thói cửa quyền, hách dịch, sách nhiễu nhân dân; thực hành tiết kiệm triệt để trong cơ quan nhà nước và đội ngũ cán bộ, công chức; củng cố mối quan hệ máu thịt giữa nhân dân với chế độ.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "ky-cuong-va-bien-phap",
      label: "b. Kỷ cương phép nước & 5 Biện pháp",
      badge: "Không có vùng cấm",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái (6 cols trên LG): Nguyên tắc kỷ cương phép nước */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Giữ vững nguyên tắc kỷ cương phép nước
                  </h3>
                </div>

                <div className="p-3 sm:p-3.5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-md space-y-1.5">
                  <span className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider block">
                    Nguyên tắc tối thượng
                  </span>
                  <blockquote className="font-serif italic text-xs sm:text-[13.5px] font-bold text-[#5c0d0d] leading-relaxed">
                    “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                  </blockquote>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Bất kỳ ai lợi dụng chức vụ, quyền hạn để tham nhũng, lãng phí đều phải bị xử lý nghiêm minh trước pháp luật và kỷ luật nghiêm khắc của Đảng.
                  </p>
                </div>

                {/* Cơ chế phòng ngừa 3 tầng */}
                <div className="space-y-1.5 pt-1">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818]">
                    Cơ chế phòng ngừa ba tầng khép kín:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 bg-[#fdfcf9] rounded-md border border-[#e2d7c5] shadow-3xs space-y-1">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG THỂ
                      </span>
                      <span className="text-xs text-ink leading-tight block">
                        Thể chế kín kẽ, luật pháp chặt chẽ
                      </span>
                    </div>
                    <div className="p-2.5 bg-[#fdfcf9] rounded-md border border-[#e2d7c5] shadow-3xs space-y-1">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG DÁM
                      </span>
                      <span className="text-xs text-ink leading-tight block">
                        Chế tài nghiêm minh, trừng trị thích đáng
                      </span>
                    </div>
                    <div className="p-2.5 bg-[#fdfcf9] rounded-md border border-[#e2d7c5] shadow-3xs space-y-1">
                      <span className="font-serif font-bold text-[#7a1818] block text-xs sm:text-[13px]">
                        KHÔNG CẦN
                      </span>
                      <span className="text-xs text-ink leading-tight block">
                        Đãi ngộ xứng đáng, liêm chính công vụ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải (6 cols trên LG): 5 Biện pháp phòng chống tiêu cực */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink tracking-tight">
                    2. 5 Biện pháp phòng, chống tiêu cực của Bác
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Vận dụng tư tưởng Hồ Chí Minh trong phòng, chống tham nhũng hiện nay (Hệ giải pháp Dân – Luật – Phạt – Gương – Giáo dục):
                </p>

                <div className="space-y-2">
                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2.5 shadow-3xs">
                    <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Phát huy dân chủ:</strong> Tạo điều kiện thuận lợi nhất để nhân dân trực tiếp tham gia và giám sát hoạt động của Nhà nước.
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2.5 shadow-3xs">
                    <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Tăng cường pháp luật:</strong> Quyền lực phải được đặt trong khuôn khổ luật pháp chặt chẽ và cơ chế kiểm tra thường xuyên.
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2.5 shadow-3xs">
                    <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Xử lý nghiêm minh:</strong> Sai phạm phải được phát hiện kịp thời và trừng trị đúng người, đúng mức độ, không có đặc quyền.
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2.5 shadow-3xs">
                    <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Cán bộ nêu gương:</strong> Người đứng đầu có chức vụ càng cao thì càng phải làm gương về cần, kiệm, liêm, chính.
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#fdfcf9] border border-[#e2d7c5] rounded-md flex items-start gap-2.5 shadow-3xs">
                    <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      <strong className="text-[#7a1818]">Sức mạnh Nhân dân:</strong> Phát huy sức mạnh của nhân dân trong việc phát hiện, phản ánh và kiên quyết đấu tranh đẩy lùi tiêu cực.
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
        label: "Tổng kết & Tài liệu tham khảo →",
      }}
    />
  );
}