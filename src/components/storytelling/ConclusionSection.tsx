"use client";

import React from "react";
import AcademicPortalSection, {
  TabItem,
} from "@/components/shared/AcademicPortalSection";
import AcademicQuizSection from "./AcademicQuizSection";
import { PRESENTATION_CONTENT } from "@/content/presentation-content";
import {
  Brain,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Terminal,
} from "lucide-react";

export default function ConclusionSection() {
  const { conclusion } = PRESENTATION_CONTENT;

  // Danh mục 4 công cụ AI chính xác mà nhóm đã sử dụng trong dự án
  const aiToolsList = [
    {
      name: "Google Antigravity",
      category: "Lập Trình & Xây Dựng Website",
      role: "Lập trình toàn bộ website tương tác",
      description:
        "Công cụ chính nhóm dùng để lập trình website Next.js 16, TypeScript, Tailwind CSS; xây dựng cuốn sách 3D Three.js, visualizer âm thanh Web Audio API và tối ưu hóa toàn bộ hệ thống.",
      badge: "Làm Web Tương Tác",
      color: "border-purple-300 bg-purple-50/70 text-purple-900",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      name: "Microsoft Copilot Chat",
      category: "Tạo Đồ Họa & Ảnh Minh Họa",
      role: "Thiết kế ảnh minh họa các element",
      description:
        "Nhóm dùng Copilot Chat để prompt tạo các hình ảnh minh họa cho các element, đồ họa biểu trưng và họa tiết trang trí nền cho các thẻ học thuật.",
      badge: "Ảnh Minh Họa Element",
      color: "border-blue-300 bg-blue-50/70 text-blue-900",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      name: "Gemini Notebook (NotebookLM)",
      category: "Nghiên Cứu & Nạp Tư Liệu Văn Kiện",
      role: "Phân tích ngữ liệu & Soạn thảo nội dung",
      description:
        "Nạp các tài liệu văn kiện, bài nói, bài viết lịch sử của Bác vào Gemini Notebook để phân tích ngữ cảnh, hỗ trợ soạn thảo nội dung cốt lõi của bài thuyết trình.",
      badge: "Nạp Tài Liệu & Phân Tích",
      color: "border-amber-300 bg-amber-50/70 text-amber-900",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      name: "ChatGPT",
      category: "Biên Soạn & Tinh Gọn Luận Điểm",
      role: "Dàn ý & Soạn thảo trắc nghiệm",
      description:
        "Hỗ trợ xây dựng cấu trúc bài giảng, tinh gọn các câu chữ lý luận phức tạp thành các ý chính ngắn gọn và biên soạn bộ câu hỏi trắc nghiệm ôn tập nhanh.",
      badge: "Dàn Ý & Trắc Nghiệm",
      color: "border-emerald-300 bg-emerald-50/70 text-emerald-900",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
  ];

  // Quy trình 3 bước nhóm làm việc với AI để biên soạn nội dung & đối chiếu giáo trình
  const researchWorkflow = [
    {
      step: "01",
      title: "Soạn Thảo Với Gemini Notebook & ChatGPT",
      desc: "Nạp các tài liệu văn kiện vào Gemini Notebook để phân tích ngữ liệu, kết hợp ChatGPT để tinh gọn dàn ý và dự thảo các luận điểm chính của bài thuyết trình.",
    },
    {
      step: "02",
      title: "Check Đối Chiếu Trực Tiếp Với Giáo Trình",
      desc: "Từng thành viên nhóm trực tiếp mở sách in Giáo trình Tư tưởng Hồ Chí Minh chuẩn của Bộ GD&ĐT (NXB Chính trị quốc gia Sự thật) để kiểm tra, đối soát chéo từng câu chữ, loại bỏ mọi điểm sai lệch.",
    },
    {
      step: "03",
      title: "Hoàn Thiện Bộ Trắc Nghiệm Ôn Tập Chuẩn Xác",
      desc: "Sau khi đối chiếu xong với giáo trình, chốt bộ câu hỏi trắc nghiệm khách quan có trích dẫn văn kiện gốc để cả lớp cùng ôn tập trực tiếp trên web.",
    },
  ];

  // Các hạng mục kỹ thuật AI đã đồng hành cùng nhóm viết code làm web
  const codingContributions = [
    {
      title: "Lập Trình Web với Antigravity (Next.js 16 & Tailwind CSS)",
      tech: "Google Antigravity • Next.js 16 • Tailwind CSS",
      detail:
        "Antigravity hỗ trợ nhóm xây dựng toàn bộ kiến trúc trang web tương tác, sidebar phong cách sách đỏ Bác Hồ, hệ thống tab mượt mà và chế độ thuyết trình toàn màn hình.",
    },
    {
      title: "Mô Phỏng Sách 3D Lật Trang Bằng Antigravity",
      tech: "Three.js • WebGL • PBR Shading",
      detail:
        "Antigravity hỗ trợ viết mã xử lý ma trận không gian 3D, mô phỏng chất liệu bìa da nhung ép nhũ vàng và hiệu ứng lật trang chân thực đạt chuẩn 60 FPS.",
    },
    {
      title: "Tạo Ảnh Minh Họa Element Bằng Copilot Chat",
      tech: "Copilot Chat • Prompt Engineering",
      detail:
        "Dùng Copilot Chat prompt tạo các hình ảnh minh họa cho các element, biểu tượng và đồ họa nền trang trí cho các thẻ học thuật mang phong cách báo chí truyền thống.",
    },
    {
      title: "Visualizer Âm Thanh & Tra Cứu Ctrl + K Siêu Tốc",
      tech: "Web Audio API • Command Palette Ctrl + K",
      detail:
        "Antigravity hỗ trợ viết logic phân tích phổ tần số sóng âm giọng Bác và thanh tìm kiếm nhanh giúp định vị đề mục tức thì chỉ trong 0.1 giây.",
    },
  ];

  // Bảng so sánh giữa cách dùng AI tự phát và cách dùng AI có trách nhiệm của nhóm
  const ethicsComparison = [
    {
      aspect: "Tư duy sử dụng",
      naive: "Phụ thuộc hoàn toàn, để AI tự viết toàn bộ nội dung từ A-Z.",
      responsible: "Nhóm trực tiếp làm chủ đề cương, AI chỉ đóng vai trò trợ lý tăng tốc kỹ thuật và tra cứu.",
    },
    {
      aspect: "Kiểm chứng thông tin",
      naive: "Copy-paste nguyên văn câu trả lời của AI mà không đối chiếu sách in.",
      responsible: "Nhóm đối soát chéo 100% trích dẫn với Giáo trình Bộ GD&ĐT và Hồ Chí Minh Toàn tập.",
    },
    {
      aspect: "Xử lý tư liệu lịch sử",
      naive: "Dễ dính bẫy AI bịa đặt nguồn (hallucination) hoặc dùng deepfake giả mạo.",
      responsible: "Tuyệt đối không dùng giọng giả, chỉ lọc ồn tư liệu thật; bảo đảm tính nguyên bản lịch sử.",
    },
    {
      aspect: "Hiệu quả bài tập lớn",
      naive: "Nội dung chung chung, thiếu dấu ấn tư duy và phản biện của sinh viên.",
      responsible: "Sản phẩm web độc đáo, tương tác sống động, khoa học và thuyết phục trước hội đồng.",
    },
  ];

  const tabs: TabItem[] = [
    // ----------------------------------------------------
    // TAB A: TECH STACK
    // ----------------------------------------------------
    {
      id: "ai-tech-stack",
      label: "a. Bộ Công Cụ AI Nhóm Dùng",
      badge: "AI Tech Stack",
      content: (
        <div className="space-y-3 text-ink">
          {/* Header giải pháp */}
          <div className="p-3 rounded-lg border border-[#ebd8c2] bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7a1818] text-white flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5" />
                </span>
                <h4 className="font-serif font-bold text-sm text-[#7a1818]">
                  Hệ Sinh Thái Công Cụ AI Nhóm Đã Ứng Dụng Trong Dự Án
                </h4>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Nhóm sinh viên không phụ thuộc vào một công cụ duy nhất mà kết hợp linh hoạt 4 nhóm AI chuyên trách để giải quyết từng bài toán cụ thể trong quá trình làm bài.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <span className="px-2.5 py-1 rounded bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/25 font-mono text-[10.5px] font-bold">
                04 Nhóm Công Cụ Chuyên Biệt
              </span>
            </div>
          </div>

          {/* Grid 4 Thẻ công cụ chi tiết */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {aiToolsList.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-2 hover:border-[#7a1818]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                      {tool.category}
                    </span>
                    <h5 className="font-serif font-bold text-sm text-[#7a1818]">
                      {tool.name}
                    </h5>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <div className="text-[11.5px] font-medium text-ink">
                  Vai trò: <span className="italic text-[#7a1818]">{tool.role}</span>
                </div>
                <p className="text-[11px] text-ink-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          {/* Thống kê hiệu quả thời gian */}
          <div className="p-3 rounded-lg bg-[#f5ecde] border border-[#e2d5c3] grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="space-y-0.5">
              <div className="font-mono font-bold text-base text-[#7a1818]">~65%</div>
              <div className="text-[10.5px] text-ink-muted">Thời gian kỹ thuật được tiết kiệm</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-mono font-bold text-base text-[#7a1818]">100%</div>
              <div className="text-[10.5px] text-ink-muted">Văn kiện được đối soát sách in</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-mono font-bold text-base text-[#7a1818]">Đa giác quan</div>
              <div className="text-[10.5px] text-ink-muted">Vừa đọc, nghe giọng Bác, vừa xem 3D</div>
            </div>
          </div>
        </div>
      ),
    },

    // ----------------------------------------------------
    // TAB B: RESEARCH & CONTENT
    // ----------------------------------------------------
    {
      id: "ai-research-content",
      label: "b. Tra Cứu & Biên Soạn Nội Dung",
      badge: "Prompting & Văn Kiện",
      content: (
        <div className="space-y-3 text-ink">
          {/* Header giải pháp */}
          <div className="p-3 rounded-lg border border-[#ebd8c2] bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7a1818] text-white flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5" />
                </span>
                <h4 className="font-serif font-bold text-sm text-[#7a1818]">
                  Quy Trình Nhóm Ứng Dụng AI Tra Cứu & Biên Soạn Nội Dung Học Thuật
                </h4>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Nhóm áp dụng kỹ thuật Prompting học thuật nghiêm ngặt (Academic Prompting) để chắt lọc từ 15 tập Hồ Chí Minh Toàn tập thành cấu trúc bài thuyết trình mạch lạc.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <span className="px-2.5 py-1 rounded bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/25 font-mono text-[10.5px] font-bold">
                Constrained Prompting
              </span>
            </div>
          </div>

          {/* 3 Bước làm việc */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {researchWorkflow.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-1.5"
              >
                <div className="flex items-center gap-2 text-[#7a1818]">
                  <span className="font-mono font-bold text-base leading-none">
                    {item.step}.
                  </span>
                  <h5 className="font-serif font-bold text-xs">{item.title}</h5>
                </div>
                <p className="text-[11px] text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Nhúng trực tiếp ngân hàng câu hỏi ôn tập do AI hỗ trợ biên soạn */}
          <div className="border border-[#ebd8c2] rounded-lg p-3 bg-[#fdfbf7] space-y-2">
            <div className="flex items-center justify-between pb-1 border-b border-[#e8dfcf]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7a1818] animate-pulse" />
                <span className="font-serif font-bold text-xs text-[#7a1818] uppercase tracking-wide">
                  Sản Phẩm Thực Tế: Ngân Hàng Trắc Nghiệm Do Nhóm Phối Hợp Cùng AI Biên Soạn
                </span>
              </div>
              <span className="text-[10px] text-ink-muted font-sans">
                Tự động chấm điểm & giải thích đối chiếu văn kiện
              </span>
            </div>
            <AcademicQuizSection />
          </div>
        </div>
      ),
    },

    // ----------------------------------------------------
    // TAB C: CODING ASSISTANT
    // ----------------------------------------------------
    {
      id: "ai-coding-web",
      label: "c. Hỗ Trợ Lập Trình & Làm Web",
      badge: "Next.js, 3D & Web Audio",
      content: (
        <div className="space-y-3 text-ink">
          {/* Header giải pháp */}
          <div className="p-3 rounded-lg border border-[#ebd8c2] bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7a1818] text-white flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </span>
                <h4 className="font-serif font-bold text-sm text-[#7a1818]">
                  AI Đồng Hành Cùng Nhóm Trong Quá Trình Xây Dựng Website Thuyết Trình
                </h4>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                AI đóng vai trò như một kỹ sư cố vấn kỹ thuật, hỗ trợ nhóm sinh viên hiện thực hóa ý tưởng &ldquo;bảo tàng số tương tác&rdquo; bằng mã nguồn Next.js 16 và Three.js WebGL.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <span className="px-2.5 py-1 rounded bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/25 font-mono text-[10.5px] font-bold">
                Pair Programming
              </span>
            </div>
          </div>

          {/* 4 Đóng góp kỹ thuật cụ thể */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {codingContributions.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h5 className="font-serif font-bold text-xs text-[#7a1818]">
                    0{idx + 1}. {item.title}
                  </h5>
                </div>
                <div className="inline-block font-mono text-[9.5px] px-1.5 py-0.5 rounded bg-[#ebd8c2] text-[#5c4632]">
                  {item.tech}
                </div>
                <p className="text-[11px] text-ink-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Box kinh nghiệm lập trình cùng AI */}
          <div className="p-3 rounded-lg bg-[#f6efe4] border-l-3 border-[#7a1818] flex items-start gap-2.5">
            <Terminal className="w-4 h-4 text-[#7a1818] shrink-0 mt-0.5" />
            <div className="space-y-1 text-[11px] leading-relaxed text-ink/85">
              <strong className="font-serif text-[#7a1818]">
                Kinh Nghiệm Thực Tế Của Nhóm Khi Code Cùng AI:
              </strong>
              <p>
                Để AI viết code chính xác, nhóm phải tự lên sơ đồ kiến trúc module trước, chia nhỏ từng tính năng (audio player, modal, 3D viewer) và dùng TypeScript với kiểu dữ liệu chặt chẽ. AI giúp tăng tốc độ viết code gấp nhiều lần, nhưng nhóm phải tự kiểm thử trực tiếp trên trình duyệt để sửa các lỗi bố cục và độ nhạy phím bấm.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ----------------------------------------------------
    // TAB D: ETHICS & FACT-CHECKING
    // ----------------------------------------------------
    {
      id: "ai-ethics-verification",
      label: "d. Kiểm Chứng Nguồn & Đạo Đức AI",
      badge: "Human-in-the-Loop",
      content: (
        <div className="space-y-3 text-ink">
          {/* Header giải pháp */}
          <div className="p-3 rounded-lg border border-[#ebd8c2] bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7a1818] text-white flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <h4 className="font-serif font-bold text-sm text-[#7a1818]">
                  Nguyên Tắc Đạo Đức AI & Quy Trình Kiểm Chứng Nguồn Gốc Của Nhóm
                </h4>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Tư tưởng Hồ Chí Minh là môn học lý luận chính trị thiêng liêng và chuẩn mực. Nhóm quán triệt tinh thần: AI chỉ là công cụ hỗ trợ, con người giữ vai trò kiểm soát và chịu trách nhiệm học thuật cao nhất.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <span className="px-2.5 py-1 rounded bg-[#7a1818]/10 text-[#7a1818] border border-[#7a1818]/25 font-mono text-[10.5px] font-bold">
                100% Fact-Checked
              </span>
            </div>
          </div>

          {/* Bảng so sánh trách nhiệm */}
          <div className="border border-[#e8dfcf] rounded-lg overflow-x-auto bg-[#fbf8f0]">
            <table className="w-full text-left text-xs font-sans border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#e8dfcf] bg-[#f4ece1] text-[#7a1818] font-serif uppercase text-[11px]">
                  <th className="py-2.5 px-3 w-[22%]">Tiêu Chí Đánh Giá</th>
                  <th className="py-2.5 px-3 w-[38%] text-ink-muted font-sans normal-case">
                    Lạm Dụng AI Bị Động (Không khuyến khích)
                  </th>
                  <th className="py-2.5 px-3 w-[40%] text-[#7a1818] font-bold">
                    Quy Trình Ứng Dụng Có Trách Nhiệm Của Nhóm
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ece2d4]">
                {ethicsComparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f6efe4] transition-colors">
                    <td className="py-2.5 px-3 font-serif font-bold text-[#7a1818] align-top">
                      {item.aspect}
                    </td>
                    <td className="py-2.5 px-3 text-ink-muted align-top leading-relaxed text-[11.5px]">
                      {item.naive}
                    </td>
                    <td className="py-2.5 px-3 text-ink align-top leading-relaxed text-[11.5px]">
                      <div className="font-medium text-[#7a1818] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item.responsible}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quy trình kiểm chứng 3 lớp */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-1">
              <div className="font-serif font-bold text-xs text-[#7a1818]">
                Lớp 1: Prompt Ràng Buộc
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Ngăn chặn hiện tượng AI tự &ldquo;bịa&rdquo; trích dẫn bằng cách yêu cầu dẫn xuất xứ tập, trang văn kiện cụ thể.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-1">
              <div className="font-serif font-bold text-xs text-[#7a1818]">
                Lớp 2: Đối Soát Sách In
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Từng thành viên trong nhóm mở sách in Giáo trình và Toàn tập đối chiếu từng từ để đảm bảo độ chuẩn xác 100%.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[#e8dfcf] bg-[#fbf8f0] space-y-1">
              <div className="font-serif font-bold text-xs text-[#7a1818]">
                Lớp 3: Duyệt Thống Nhất Nhóm
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Họp nhóm tổng duyệt nội dung bài thuyết trình trước khi báo cáo trước thầy cô và các bạn sinh viên.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AcademicPortalSection
      id="ket-luan"
      code="MỤC 5.0"
      title="ỨNG DỤNG AI"
      parentPath="Ứng dụng công nghệ"
      quote={
        conclusion.finalQuote?.text ||
        "Công nghệ AI giúp nhóm hiện thực hóa ý tưởng website tương tác một cách nhanh chóng, nhưng linh hồn của bài thuyết trình chính là sự chuẩn xác và nghiêm túc trong từng trang giáo trình được đối chiếu."
      }
      quoteAuthor={conclusion.finalQuote?.author || "Thông điệp Thực nghiệm của Nhóm Thuyết trình"}
      summary={
        conclusion.subtitle ||
        "Báo cáo thực tế về các công cụ AI (Google Antigravity, Copilot Chat, Gemini Notebook, ChatGPT) và quy trình nhóm sinh viên đối chiếu chéo 100% với Giáo trình Tư tưởng Hồ Chí Minh chuẩn của Bộ GD&ĐT."
      }
      tabs={tabs}
      prevSection={{
        id: "phong-chong-tham-nhung",
        label: "← 4.3.2 Phòng, chống giặc nội xâm",
      }}
      nextSection={{
        id: "hero",
        label: "Quay lại Đầu Trang ⟲",
      }}
    />
  );
}
