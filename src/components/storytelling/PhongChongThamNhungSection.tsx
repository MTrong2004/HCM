"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";

export default function PhongChongThamNhungSection() {
  const tabs: TabItem[] = [
    {
      id: "nhan-dien-van-de",
      label: "a. Nhận diện 'Giặc ở trong lòng'",
      badge: "Tham ô • Lãng phí • Quan liêu",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Nhận diện ba căn bệnh nguy hại */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Nhận diện đúng bản chất hiểm họa “giặc nội xâm”
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Bác coi tham ô, lãng phí, quan liêu là{" "}
                <strong>“giặc ở trong lòng”</strong>, <strong>“giặc nội xâm”</strong> –
                kẻ thù phá hoại sự nghiệp cách mạng từ bên trong:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Tham ô (Ăn cắp của công)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lợi dụng chức vụ quyền hạn để chiếm đoạt tài sản công, biến
                    của chung thành của riêng. Bác coi tham ô là hành vi ăn cắp tiền
                    của của nhân dân.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Lãng phí (Không hiệu quả)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lãng phí sức lao động, thời gian và tiền của của Nhà nước và
                    nhân dân. Tuy không trực tiếp chiếm đoạt tài sản nhưng kết quả
                    tai hại không hiệu quả, nguy hiểm không kém gì tham ô.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    • Quan liêu (Xa dân, xa thực tế)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Xa rời thực tế, xa rời quần chúng nhân dân; chỉ thích ngồi phòng
                    giấy chỉ tay năm ngón, hách dịch, cửa quyền. Bệnh quan liêu là
                    cội nguồn dung dưỡng tham ô, lãng phí.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Tác hại tàn phá lòng tin sinh tử */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Tác hại sống còn đối với lòng tin của Nhân dân
              </h4>
              <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Bác cảnh báo: Tham ô, lãng phí, quan liêu làm mục ruỗng bộ máy
                  nhà nước, thoái hóa cán bộ và nguy hiểm nhất là{" "}
                  <strong>làm xói mòn lòng tin sinh tử của nhân dân</strong> vào chế
                  độ và sự lãnh đạo của Đảng.
                </p>

                <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-1.5">
                  <span className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                    Lời dạy bất hủ của Bác Hồ
                  </span>
                  <blockquote className="font-serif italic text-xs sm:text-sm text-ink leading-relaxed">
                    “Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của
                    bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng
                    minh của thực dân và phong kiến.”
                  </blockquote>
                </div>

                <div className="p-3 bg-[#f6efe4] border border-[#e5dac8] rounded text-xs text-ink">
                  <strong>Trọng tâm hiện nay:</strong> Kiên quyết đấu tranh chống
                  thói quan liêu, hách dịch, cửa quyền, sách nhiễu nhân dân trong bộ
                  máy hành chính; thực hành tiết kiệm triệt để trong các cơ quan nhà
                  nước và trong đội ngũ cán bộ, công chức.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ky-cuong-va-bien-phap",
      label: "b. Kỷ cương phép nước & 5 Biện pháp",
      badge: "Không có vùng cấm",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Nguyên tắc kỷ cương phép nước */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Giữ vững nguyên tắc kỷ cương phép nước
              </h4>
              <div className="p-5 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-3">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Nguyên tắc cốt lõi
                </div>
                <blockquote className="text-sm sm:text-base font-serif font-bold text-ink leading-snug">
                  “Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.”
                </blockquote>
                <p className="text-xs text-ink leading-relaxed">
                  Bất kỳ ai lợi dụng quyền lực để tham nhũng, lãng phí, sách nhiễu
                  đều phải bị xử lý nghiêm minh trước pháp luật, giữ vững tính nghiêm
                  minh của Nhà nước pháp quyền.
                </p>
              </div>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-2">
                <div className="font-bold text-xs text-[#7a1818]">
                  Cơ chế phòng ngừa ba tầng khép kín:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-[#f6efe4] rounded border border-[#e5dac8]">
                    <span className="font-bold text-[#7a1818] block">KHÔNG THỂ</span>
                    <span className="text-[11px] text-ink-muted">Thể chế kín kẽ</span>
                  </div>
                  <div className="p-2 bg-[#f6efe4] rounded border border-[#e5dac8]">
                    <span className="font-bold text-[#7a1818] block">KHÔNG DÁM</span>
                    <span className="text-[11px] text-ink-muted">Chế tài nghiêm khắc</span>
                  </div>
                  <div className="p-2 bg-[#f6efe4] rounded border border-[#e5dac8]">
                    <span className="font-bold text-[#7a1818] block">KHÔNG CẦN</span>
                    <span className="text-[11px] text-ink-muted">Đãi ngộ xứng đáng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: 5 Biện pháp phòng chống tiêu cực */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. 5 Biện pháp phòng, chống tiêu cực của Bác
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Vận dụng tư tưởng Hồ Chí Minh trong phòng, chống tham nhũng hiện nay:
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    01
                  </span>
                  <span><strong>Phát huy dân chủ:</strong> Tạo điều kiện để nhân dân tham gia và giám sát hoạt động Nhà nước.</span>
                </div>

                <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    02
                  </span>
                  <span><strong>Tăng cường pháp luật & giám sát:</strong> Quyền lực phải đặt trong khuôn khổ pháp luật và kiểm tra thường xuyên.</span>
                </div>

                <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    03
                  </span>
                  <span><strong>Xử lý nghiêm minh:</strong> Sai phạm phải được phát hiện và xử lý đúng người, đúng mức độ.</span>
                </div>

                <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    04
                  </span>
                  <span><strong>Cán bộ phải nêu gương:</strong> Người có chức vụ càng cao càng phải có trách nhiệm làm gương.</span>
                </div>

                <div className="p-2.5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7a1818] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    05
                  </span>
                  <span><strong>Phát huy sức mạnh Nhân dân:</strong> Nhân dân tham gia phát hiện, phản ánh và đấu tranh với tiêu cực.</span>
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
      code="VẬN DỤNG"
      title="ĐẤU TRANH PHÒNG, CHỐNG “GIẶC NỘI XÂM”"
      parentPath="4.3. Vận dụng xây dựng Đảng và Nhà nước — Trọng tâm mục 4.3.2"
      quote="Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng minh của thực dân và phong kiến."
      quoteAuthor="Hồ Chí Minh"
      summary="Nhận diện đúng bản chất tham ô, lãng phí, quan liêu là 'giặc nội xâm' phá hoại sự nghiệp cách mạng từ bên trong; kiên quyết giữ vững nguyên tắc 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai' và xây dựng cơ chế phòng ngừa đồng bộ kết hợp Dân - Luật - Phạt - Gương."
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
