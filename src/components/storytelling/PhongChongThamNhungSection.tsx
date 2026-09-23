"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";

export default function PhongChongThamNhungSection() {
  const tabs: TabItem[] = [
    {
      id: "nhan-dien-van-de",
      label: "a. Nhận diện vấn đề (Giặc nội xâm)",
      badge: "Tham ô - Lãng phí - Quan liêu",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Nhận diện ba căn bệnh nguy hại */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Ba hiểm họa “giặc ở trong lòng”
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Hồ Chí Minh chỉ rõ ba căn bệnh hiểm nghèo tàn phá sự nghiệp cách
                mạng từ bên trong:
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Tham ô (Ăn cắp của công)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lợi dụng chức vụ quyền hạn để chiếm đoạt tài sản công, biến
                    của chung thành của riêng. Bác coi tham ô là hành động trộm
                    cắp của nhân dân.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Lãng phí (Tội ác với nhân dân)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lãng phí sức lao động, thời gian và tiền của của Nhà nước và
                    nhân dân. Bác khẳng định lãng phí tuy không lấy của công
                    nhưng kết quả có hại không kém gì tham ô.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Bệnh quan liêu (Nguồn gốc của tội lỗi)
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Xa rời thực tế, xa rời quần chúng nhân dân; chỉ thích ngồi
                    phòng giấy chỉ tay năm ngón, hội họp rườm rà. Quan liêu là cái
                    nôi dung dưỡng tham ô, lãng phí.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Tác hại tàn phá lòng tin */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Tác hại sống còn đối với chế độ
              </h4>
              <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Bác cảnh báo: Tham nhũng, lãng phí, quan liêu làm biến chất
                  đội ngũ cán bộ, phá vỡ kỷ cương pháp luật và nguy hiểm nhất là{" "}
                  <strong>làm xói mòn niềm tin của nhân dân</strong> vào Đảng và
                  Nhà nước.
                </p>
                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r text-xs font-serif italic text-ink">
                  “Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của
                  bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng
                  minh của thực dân và phong kiến.”
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "he-giai-phap-bon-tru-cot",
      label: "b. Hệ giải pháp Bốn trụ cột",
      badge: "Dân - Luật - Phạt - Gương",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Trụ cột 1: DÂN */}
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#7a1818] text-paper-light font-serif font-black text-sm flex items-center justify-center mb-3">
                  DÂN
                </div>
                <h5 className="font-serif font-bold text-sm text-ink mb-1.5">
                  Dựa vào Nhân dân
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Phát huy dân chủ, tạo điều kiện để nhân dân tham gia kiểm tra,
                  giám sát cán bộ và phát giác kịp thời hành vi tiêu cực.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#ede2d2] text-[11px] font-mono text-[#7a1818] font-bold">
                DÂN LÀ GỐC
              </div>
            </div>

            {/* Trụ cột 2: LUẬT */}
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#7a1818] text-paper-light font-serif font-black text-sm flex items-center justify-center mb-3">
                  LUẬT
                </div>
                <h5 className="font-serif font-bold text-sm text-ink mb-1.5">
                  Thượng tôn Pháp luật
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Hoàn thiện hệ thống thể chế, pháp luật chặt chẽ, minh bạch; bịt
                  kín mọi kẽ hở không để ai có thể lợi dụng tham nhũng.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#ede2d2] text-[11px] font-mono text-[#7a1818] font-bold">
                KỶ CƯƠNG PHÉP NƯỚC
              </div>
            </div>

            {/* Trụ cột 3: PHẠT */}
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#7a1818] text-paper-light font-serif font-black text-sm flex items-center justify-center mb-3">
                  PHẠT
                </div>
                <h5 className="font-serif font-bold text-sm text-ink mb-1.5">
                  Nghiêm minh, Không ngoại lệ
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Xử lý nghiêm khắc, đúng người đúng tội; không có vùng cấm,
                  không có ngoại lệ, bất kể người vi phạm giữ chức vụ gì.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#ede2d2] text-[11px] font-mono text-[#7a1818] font-bold">
                TRỪNG TRỊ THÍCH ĐÁNG
              </div>
            </div>

            {/* Trụ cột 4: GƯƠNG */}
            <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#7a1818] text-paper-light font-serif font-black text-sm flex items-center justify-center mb-3">
                  GƯƠNG
                </div>
                <h5 className="font-serif font-bold text-sm text-ink mb-1.5">
                  Cán bộ Nêu gương
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Cán bộ lãnh đạo phải đi đầu làm gương về liêm khiết; tu dưỡng
                  đạo đức cách mạng: Cần, Kiệm, Liêm, Chính, Chí công vô tư.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#ede2d2] text-[11px] font-mono text-[#7a1818] font-bold">
                ĐỨC LÀ GỐC
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
      title="PHÒNG, CHỐNG THAM NHŨNG"
      parentPath="4.3. Vận dụng xây dựng Đảng và Nhà nước"
      quote="Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Nó là giặc ở trong lòng, là bạn đồng minh của giặc ngoại xâm."
      quoteAuthor="Hồ Chí Minh"
      summary="Nhận diện hiểm họa ba căn bệnh 'giặc nội xâm' (Tham ô, Lãng phí, Quan liêu) và xây dựng hệ giải pháp đồng bộ trên Bốn trụ cột: Dân - Luật - Phạt - Gương."
      tabs={tabs}
      prevSection={{
        id: "xay-dung-nha-nuoc",
        label: "← 4.3.2 Xây dựng Nhà nước",
      }}
      nextSection={{
        id: "ket-luan",
        label: "5.0 Kết luận & Tham khảo →",
      }}
    />
  );
}
