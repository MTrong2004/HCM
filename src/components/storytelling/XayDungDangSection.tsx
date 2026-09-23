"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import EditorialReveal from "@/components/shared/EditorialReveal";

export default function XayDungDangSection() {
  const tabs: TabItem[] = [
    {
      id: "phuong-dien-duong-loi",
      label: "a. Phương diện đường lối",
      badge: "Đúng đắn & Sinh tử",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Tầm quan trọng sinh tử */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Phải đề ra đường lối, chủ trương đúng đắn
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  Đường lối, chủ trương của Đảng giữ vai trò quyết định, định hướng cho sự phát triển của toàn bộ dân tộc và đất nước.
                </p>
                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r-md space-y-1.5">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Tầm quan trọng sinh tử
                  </div>
                  <blockquote className="font-serif italic text-xs sm:text-[13.5px] text-ink font-semibold leading-relaxed">
                    “Sai một ly thì đi một dặm, đó là tầm quan trọng của đường lối, chủ trương của Đảng.”
                  </blockquote>
                  <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                    Một đường lối sai lầm về chính trị hoặc kinh tế sẽ kéo lùi sự phát triển của cả dân tộc, làm tổn hại sinh mạng và hạnh phúc của <strong>hàng chục triệu người dân</strong>.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: 3 Cơ sở khoa học hoạch định */}
          <div className="lg:col-span-6 space-y-2.5">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Cơ sở khoa học để hoạch định đường lối đúng đắn
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      1. Kiên định nền tảng lý luận:
                    </span>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Phải kiên định và vận dụng sáng tạo nền tảng lý luận chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      2. Xuất phát từ thực tiễn khách quan:
                    </span>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Phải xuất phát từ điều kiện thực tiễn khách quan của đất nước, tôn trọng quy luật kinh tế - xã hội trong từng thời kỳ, từng giai đoạn lịch sử cụ thể.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] block">
                      3. Xuất phát từ lợi ích chân chính của nhân dân lao động:
                    </span>
                    <p className="text-xs sm:text-[13px] text-ink italic font-serif leading-relaxed">
                      “Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.”
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "to-chuc-thuc-hien",
      label: "b. Phương diện tổ chức, thực hiện",
      badge: "Hành động & Nêu gương",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Khâu tổ chức thực hiện & Thể chế hóa */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    1. Tổ chức thực hiện thật tốt đường lối, chủ trương
                  </h3>
                </div>

                <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md text-xs sm:text-[13px] text-ink leading-relaxed">
                  <strong>Ý nghĩa quyết định:</strong> Đề ra đường lối đúng mới chỉ là một nửa chặng đường; khâu tổ chức thực hiện có ý nghĩa quyết định thắng lợi trong thực tế.
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Thể chế hóa thành chính sách, pháp luật:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Phải thể chế hóa đường lối của Đảng thành chính sách, pháp luật của Nhà nước và các đề án, kế hoạch hành động cụ thể.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                      • Biến đường lối thành hành động tự giác toàn dân:
                    </strong>
                    <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                      Phải biến đường lối thành hành động tích cực, tự giác của tất cả các tổ chức trong hệ thống chính trị và mọi tầng lớp nhân dân.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Trách nhiệm cán bộ & Nêu gương người đứng đầu */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    2. Trách nhiệm cán bộ & Gương mẫu của người đứng đầu
                  </h4>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                  <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                    • Trách nhiệm đội ngũ cán bộ, đảng viên:
                  </strong>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Thực thi và phát huy đầy đủ vai trò, trách nhiệm của đội ngũ cán bộ, đảng viên, đặc biệt là đội ngũ cán bộ cấp chiến lược; sâu sát thực tiễn cơ sở.
                  </p>
                </div>

                {/* Trách nhiệm làm gương của người đứng đầu */}
                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1.5">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Nêu cao trách nhiệm làm gương của người đứng đầu
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Giáo trình chỉ rõ: <em>“Đặc biệt quan trọng nữa là người đứng đầu phải nêu cao trách nhiệm làm gương tốt để mọi người noi theo”</em>.
                  </p>
                  <blockquote className="font-serif italic text-xs sm:text-[13px] text-[#7a1818] font-bold leading-relaxed pt-1">
                    Hồ Chí Minh từng căn dặn: “Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền.”
                  </blockquote>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "chinh-don-noi-bo",
      label: "c. Phương diện chỉnh đốn Đảng",
      badge: "Tất yếu & Kiểm tra",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Tính tất yếu & Người lãnh đạo, người đầy tớ */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Phải chú trọng hơn nữa công tác chỉnh đốn nội bộ
                  </h3>
                </div>

                <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r-md space-y-1">
                  <div className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wider">
                    Tính tất yếu sống còn
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed font-serif">
                    Giáo trình khẳng định sự nghiệp cách mạng và công cuộc đổi mới có thành công hay không hoàn toàn phụ thuộc vào chất lượng, năng lực lãnh đạo và sự trong sạch của bản thân Đảng.
                  </p>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1.5">
                  <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                    • Thường xuyên tự chỉnh đốn nội bộ:
                  </strong>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Để Đảng luôn xứng đáng là người cầm quyền; để mỗi đảng viên luôn xứng đáng <strong>“vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân”</strong>.
                  </p>
                </div>

                <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1.5">
                  <strong className="text-xs sm:text-[13px] text-[#7a1818] block">
                    • Giữ vững bản chất cao quý của Đảng:
                  </strong>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Làm cho Đảng luôn luôn là <strong>“Đảng là đạo đức, là văn minh”</strong> như Hồ Chí Minh đã khẳng định.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Khắc phục điểm nghẽn & Tăng cường kiểm tra, giám sát */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Khắc phục điểm nghẽn & Tăng cường kiểm tra, giám sát
                  </h4>
                </div>

                {/* Khắc phục khâu yếu kém nhất */}
                <div className="p-3 bg-[#fdf3e7] border border-[#e8cead] rounded-md space-y-1.5">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] uppercase tracking-wider">
                    Khắc phục khâu yếu kém nhất hiện nay
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Giáo trình chỉ rõ điểm nghẽn nghiêm trọng nhất: <em>“Cái thiếu nhất hiện nay là sự thống nhất giữa nói và làm trong Đảng”</em>.
                  </p>
                  <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                    Vì vậy, toàn Đảng phải quán triệt sâu sắc hơn nữa tư tưởng và phong cách Hồ Chí Minh về sự thống nhất giữa nói và làm.
                  </p>
                </div>

                {/* Tăng cường kiểm tra, giám sát */}
                <div className="p-3 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1.5">
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#7a1818] uppercase tracking-wider">
                    Tăng cường kiểm tra, giám sát
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink leading-relaxed">
                    Nhằm bảo đảm Đảng sử dụng và phát huy đúng đắn quyền lực chính trị do Nhân dân giao phó, phục vụ cho sự phát triển của dân tộc, đưa đất nước tiến những bước vững chắc lên chủ nghĩa xã hội, làm cho đất nước hùng cường, nhân dân ấm no, tự do, hạnh phúc.
                  </p>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      ),
    },
    {
      id: "trach-nhiem-sinh-vien",
      label: "d. Trách nhiệm của sinh viên",
      badge: "Đảng viên & Thế hệ trẻ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          {/* Cột trái: Sinh viên đang là đảng viên */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={80}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] border-l-4 border-l-[#7a1818] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Đối với sinh viên đang là đảng viên
                  </h3>
                </div>

                <div className="space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-[#7a1818] block">
                      • Thực hiện Điều lệ & Chủ trương Đảng:
                    </span>
                    <p className="leading-relaxed">
                      Cần chú trọng thực hiện thật tốt đường lối, quan điểm, chủ trương, <strong>Điều lệ Đảng</strong>.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-[#7a1818] block">
                      • Gương mẫu trong học tập và rèn luyện:
                    </span>
                    <p className="leading-relaxed">
                      Phải luôn gương mẫu trong học tập và rèn luyện đạo đức, tác phong sinh viên.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#f6efe4] border border-[#e5dac8] rounded-md space-y-1">
                    <span className="font-serif font-bold text-[#7a1818] block">
                      • Chuẩn mực kép:
                    </span>
                    <p className="leading-relaxed font-semibold">
                      Phải là công dân gương mẫu và là sinh viên tốt.
                    </p>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Cột phải: Sinh viên chưa là đảng viên & Lời Bác gửi gắm */}
          <div className="lg:col-span-6 space-y-3">
            <EditorialReveal delay={160}>
              <div className="p-3.5 sm:p-4 bg-[#fdfbf7] border border-[#e2d7c5] rounded-lg shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#dfd2be]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7a1818]" />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#7a1818] tracking-tight">
                    Đối với sinh viên chưa là đảng viên
                  </h4>
                </div>

                <div className="space-y-2 text-xs sm:text-[13px] text-ink">
                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-[#7a1818] block">
                      • Học tập lý luận & Tu dưỡng đạo đức:
                    </span>
                    <p className="leading-relaxed">
                      Cần tích cực nghiên cứu, học tập thật tốt lý luận chính trị và tư tưởng Hồ Chí Minh; <strong>tu dưỡng đạo đức cách mạng</strong>.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#fcf8f0] border border-[#e8dac5] rounded-md space-y-1">
                    <span className="font-serif font-bold text-[#7a1818] block">
                      • Phấn đấu vào Đảng hoặc ủng hộ Đảng:
                    </span>
                    <p className="leading-relaxed">
                      Phấn đấu trở thành đảng viên Đảng Cộng sản Việt Nam <strong>hoặc người công dân tích cực ủng hộ Đảng</strong>.
                    </p>
                  </div>

                  {/* Lời gửi gắm của Bác */}
                  <div className="p-3 bg-[#f8f1e2] border-l-3 border-[#7a1818] rounded-r space-y-1">
                    <span className="font-serif font-bold text-xs text-[#7a1818] block uppercase tracking-wider">
                      Sánh vai cùng các cường quốc năm châu
                    </span>
                    <p className="leading-relaxed text-ink italic font-serif">
                      Góp phần đưa nước nhà <em>“sánh vai với các cường quốc năm châu”</em> như Bác Hồ đã gửi gắm trong <strong>Thư gửi học sinh nhân ngày khai trường đầu tiên (tháng 9/1945)</strong>.
                    </p>
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
      id="xay-dung-dang"
      code="4.3.1"
      title="XÂY DỰNG ĐẢNG TRONG SẠCH, VỮNG MẠNH"
      parentPath="4.3. Vận dụng tư tưởng Hồ Chí Minh trong giai đoạn hiện nay"
      quote="Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân."
      quoteAuthor="Hồ Chí Minh — Di chúc (1969)"
      summary="Công tác xây dựng Đảng trong thời kỳ mới phải được tiến hành toàn diện trên cả 4 phương diện: Đường lối đúng đắn (nền tảng sống còn); Tổ chức thực hiện nghiêm minh; Thường xuyên tự chỉnh đốn nội bộ và Phát huy trách nhiệm của thế hệ trẻ, sinh viên."
      tabs={tabs}
      prevSection={{
        id: "trong-sach-vung-manh",
        label: "← 4.2.3 Nhà nước trong sạch, vững mạnh",
      }}
      nextSection={{
        id: "xay-dung-nha-nuoc",
        label: "4.3.2 Xây dựng Nhà nước →",
      }}
    />
  );
}