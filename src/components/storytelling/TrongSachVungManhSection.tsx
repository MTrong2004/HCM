"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import InfographicQuyenLucKiemSoat from "@/components/infographics/InfographicQuyenLucKiemSoat";
import HeritageIntegrityPlate from "./HeritageIntegrityPlate";

export default function TrongSachVungManhSection() {
  const tabs: TabItem[] = [
    {
      id: "kiem-soat-quyen-luc",
      label: "a. Kiểm soát quyền lực nhà nước",
      badge: "Đảng - Nhà nước - Dân",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Vì sao phải kiểm soát quyền lực? */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  1. Tính tất yếu của việc kiểm soát quyền lực
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Quyền lực là cần thiết để Nhà nước quản lý xã hội, nhưng quyền
                lực nếu không được kiểm soát có thể dẫn đến lạm quyền, lộng
                quyền hoặc chuyên quyền.
              </p>

              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg space-y-2">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase">
                  Thông điệp cốt lõi
                </div>
                <p className="text-xs sm:text-sm text-ink font-serif italic leading-relaxed">
                  “Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối. Người
                  có quyền lực cũng phải chịu sự kiểm soát.”
                </p>
                <div className="text-[11px] font-mono text-[#7a1818] font-bold">
                  QUYỀN LỰC → KIỂM SOÁT → TRÁCH NHIỆM → NIỀM TIN NHÂN DÂN
                </div>
              </div>
            </div>

            {/* Cột phải: Ba chủ thể kiểm soát quyền lực */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                  2. Ba chủ thể kiểm soát quyền lực nhà nước
                </h3>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">
                      ĐẢNG CỘNG SẢN
                    </span>
                    <span className="text-xs text-ink-muted">
                      Kiểm soát của Đảng: Kiểm tra, giám sát cán bộ, đảng viên
                      trong các cơ quan công quyền.
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">
                      BỘ MÁY NHÀ NƯỚC
                    </span>
                    <span className="text-xs text-ink-muted">
                      Kiểm soát trong bộ máy nhà nước: Bằng pháp luật, quy định,
                      thanh tra, giám sát giữa các nhánh quyền lực.
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#7a1818] block">
                      NHÂN DÂN LAO ĐỘNG
                    </span>
                    <span className="text-xs text-ink-muted">
                      Kiểm soát của nhân dân: Tham gia quản lý xã hội, phản ánh,
                      khiếu nại, tố cáo hành vi sai phạm đến cơ quan có thẩm
                      quyền.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HeritageIntegrityPlate />
        </div>
      ),
    },
    {
      id: "phong-chong-tieu-cuc",
      label: "b. Phòng, chống tiêu cực (Giặc nội xâm)",
      badge: "Nhận diện & Nguyên nhân",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Nhận diện biểu hiện tiêu cực */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                1. Nhận diện các biểu hiện tiêu cực trong bộ máy
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Hồ Chí Minh phê phán nghiêm khắc những thói hư tật xấu làm suy
                yếu hiệu quả hoạt động và xói mòn niềm tin của nhân dân:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Tham ô & Lãng phí
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Lợi dụng chức vụ chiếm đoạt của công; lãng phí sức lao động,
                    thời gian và tiền của của nhân dân.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Quan liêu hách dịch
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Quan liêu: Xa rời quần chúng nhân dân, xa rời thực tế, bàn
                    giấy hội họp, không sâu sát công việc.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Tư túng & Chia rẽ
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tư túng, chia rẽ, kiêu ngạo: thiên vị người thân, phe nhóm,
                    gây mất đoàn kết trong tập thể.
                  </p>
                </div>

                <div className="p-3 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                  <div className="font-bold text-xs text-[#7a1818] mb-1">
                    Kiêu ngạo cậy quyền
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    Tự cao tự đại, có chút quyền hành rồi coi thường quần chúng,
                    tự cho mình là đúng.
                  </p>
                </div>
              </div>
            </div>

            {/* Cột phải: Căn nguyên căn bệnh */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#7a1818]">
                2. Căn nguyên căn bệnh: Chủ nghĩa cá nhân
              </h4>
              <div className="p-5 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg space-y-3">
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Bác khẳng định <strong>chủ nghĩa cá nhân</strong> là thứ vi
                  trùng độc hại, là <em>“bệnh mẹ sinh ra trăm thứ bệnh con”</em>
                  . Người mắc bệnh này chỉ chăm lo vun vén cho lợi ích cá nhân,
                  quên đi lợi ích của tập thể và nhân dân.
                </p>
                <div className="p-3 bg-[#f5ecdc] rounded text-xs text-ink font-serif italic">
                  “Chủ nghĩa cá nhân là một thứ vi trùng rất độc, do nó mà sinh
                  ra các bệnh: tham lam, lười biếng, kiêu ngạo, hiếu danh, thiếu
                  kỷ luật...”
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "xay-di-doi-voi-chong",
      label: "c. 'Xây' đi đôi với 'Chống' & Nêu gương",
      badge: "5 Giải pháp",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Phương châm Xây đi đôi với Chống */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 bg-[#f8f1e2] border-l-4 border-[#7a1818] rounded-r-lg">
                <div className="font-serif font-bold text-xs text-[#7a1818] uppercase mb-1">
                  Phương châm chỉ đạo
                </div>
                <div className="text-sm font-serif font-bold text-ink mb-2">
                  “XÂY” ĐỂ TẠO RA CÁI TỐT — “CHỐNG” ĐỂ LOẠI BỎ CÁI XẤU
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Xây dựng Nhà nước dân chủ, bộ máy trong sạch gắn liền với kiên
                  quyết loại trừ tham nhũng, lãng phí, quan liêu ra khỏi bộ máy.
                </p>
              </div>

              <div className="p-4 bg-[#fbf8f0] border border-[#e8dfcf] rounded-lg">
                <div className="font-bold text-sm text-[#7a1818] mb-1">
                  Cán bộ phải nêu gương sáng
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Người có chức vụ càng cao thì càng phải làm gương tốt. Cán bộ
                  phải <strong>vừa có đức, vừa có tài, trong đó đức là gốc</strong>
                  .
                </p>
              </div>
            </div>

            {/* Cột phải: 5 Biện pháp phòng chống tiêu cực */}
            <div className="lg:col-span-6 space-y-2.5">
              <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider mb-1">
                5 Biện pháp đồng bộ
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center gap-2.5 text-xs">
                  <span className="font-mono font-bold text-[#7a1818]">01</span>
                  <span>Phát huy dân chủ rộng rãi để nhân dân tham gia kiểm tra, giám sát.</span>
                </div>
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center gap-2.5 text-xs">
                  <span className="font-mono font-bold text-[#7a1818]">02</span>
                  <span>Tăng cường pháp luật, hoàn thiện cơ chế thanh tra, kiểm tra thường xuyên.</span>
                </div>
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center gap-2.5 text-xs">
                  <span className="font-mono font-bold text-[#7a1818]">03</span>
                  <span>Xử lý nghiêm minh mọi hành vi vi phạm, không có ngoại lệ.</span>
                </div>
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center gap-2.5 text-xs">
                  <span className="font-mono font-bold text-[#7a1818]">04</span>
                  <span>Cán bộ lãnh đạo phải nêu gương, cần kiệm liêm chính, chí công vô tư.</span>
                </div>
                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded flex items-center gap-2.5 text-xs">
                  <span className="font-mono font-bold text-[#7a1818]">05</span>
                  <span>Phát huy toàn diện sức mạnh của nhân dân trong cuộc đấu tranh phòng, chống tiêu cực.</span>
                </div>
              </div>
            </div>
          </div>

          <InfographicQuyenLucKiemSoat />
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
      summary="Kiểm soát quyền lực nhà nước bằng cơ chế đa tầng; kiên quyết phòng chống các biểu hiện tiêu cực như tham ô, lãng phí, quan liêu; thực hiện phương châm 'Xây' đi đôi với 'Chống' và đề cao đạo đức nêu gương của cán bộ."
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
