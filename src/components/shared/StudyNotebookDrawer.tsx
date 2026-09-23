"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Save,
  Trash2,
  Copy,
  Check,
  X,
  Clock,
  ChevronRight,
  Presentation,
  Volume2,
  VolumeX,
  BookMarked,
  GraduationCap,
  ListTree,
  FileText,
  Search,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import {
  CANONICAL_SECTIONS,
  getSectionById,
} from "@/content/canonical-sections";
import {
  playSubtleClick,
  toggleSound,
  isSoundMuted,
  initSoundPreference,
} from "@/lib/sound-effects";

export interface StudyNote {
  id: string;
  sectionId: string;
  sectionTitle: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

interface GlossaryItem {
  id: string;
  term: string;
  context: string;
  definition: string;
  sectionId: string;
  sectionTitle: string;
}

const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: "glo-1",
    term: "Thần linh pháp quyền",
    context: "Việt Nam yêu cầu ca (1919) — Hồ Chí Minh: Toàn tập, t. 1, tr. 473",
    definition:
      "Tư tưởng quản lý xã hội bằng Hiến pháp và pháp luật, bảo đảm tính tối thượng của pháp luật dân chủ, không ai được đứng trên hoặc ngoài pháp luật.",
    sectionId: "phap-quyen",
    sectionTitle: "4.2.2 Nhà nước pháp quyền",
  },
  {
    id: "glo-2",
    term: "Dân vi bản (Lấy dân làm gốc)",
    context: "Hồ Chí Minh: Toàn tập, t. 6, tr. 232",
    definition:
      "Triết lý nhân văn cốt tủy khẳng định nhân dân là chủ thể tối cao của quyền lực; bao nhiêu lợi ích, quyền hạn, lực lượng đều ở nơi dân.",
    sectionId: "dan-chu",
    sectionTitle: "4.2.1 Nhà nước dân chủ",
  },
  {
    id: "glo-3",
    term: "Công bộc của dân",
    context: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (1945)",
    definition:
      "Cán bộ từ Chủ tịch nước đến nhân viên đều là đầy tớ trung thành của nhân dân, hưởng quyền hạn do dân ủy thác, tuyệt đối không làm 'quan cách mạng' đè đầu cưỡi cổ dân.",
    sectionId: "dan-chu",
    sectionTitle: "4.2.1 Nhà nước dân chủ",
  },
  {
    id: "glo-4",
    term: "Giặc nội xâm (Tham ô, Lãng phí, Quan liêu)",
    context: "Hồ Chí Minh: Toàn tập, t. 7, tr. 357",
    definition:
      "Thứ kẻ thù nguy hiểm vì không mang gươm súng mà ẩn nấp ngay trong bộ máy, phá hoại từ bên trong, làm xói mòn uy tín của Đảng và Nhà nước, xói mòn lòng tin của nhân dân.",
    sectionId: "phong-chong-tham-nhung",
    sectionTitle: "4.3.3 Chống tham nhũng",
  },
  {
    id: "glo-5",
    term: "Đức trị kết hợp Pháp trị",
    context: "Tư tưởng Hồ Chí Minh về xây dựng Nhà nước",
    definition:
      "Phương thức quản trị kết hợp nhuần nhuyễn giữa kỷ cương, chế tài nghiêm minh của pháp luật với sự cảm hóa, giáo dục của đạo đức cách mạng và tinh thần nhân ái.",
    sectionId: "phap-quyen",
    sectionTitle: "4.2.2 Nhà nước pháp quyền",
  },
  {
    id: "glo-6",
    term: "Cần, Kiệm, Liêm, Chính, Chí công vô tư",
    context: "Tác phẩm Cần Kiệm Liêm Chính (1949)",
    definition:
      "Bốn đức tính nền tảng của người cách mạng. Thiếu một đức thì không thành người. Cán bộ có quyền lực càng phải giữ gìn đức liêm chính để phục vụ đại cuộc chí công vô tư.",
    sectionId: "xay-dung-dang",
    sectionTitle: "4.3.1 Xây dựng Đảng",
  },
  {
    id: "glo-7",
    term: "Tập trung dân chủ",
    context: "Nguyên tắc tổ chức và hoạt động của Đảng & Nhà nước",
    definition:
      "Tập trung trên cơ sở dân chủ, dân chủ dưới sự chỉ đạo tập trung; thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên, toàn Đảng phục tùng Trung ương.",
    sectionId: "xay-dung-dang",
    sectionTitle: "4.3.1 Xây dựng Đảng",
  },
];

interface GoldenQuote {
  id: string;
  sectionCode: string;
  sectionTitle: string;
  quote: string;
  source: string;
  sectionId: string;
}

const GOLDEN_QUOTES: GoldenQuote[] = [
  {
    id: "gq-0",
    sectionCode: "0.0",
    sectionTitle: "Bản Lập hiến 1946",
    quote:
      "Nước Việt Nam là một nước dân chủ cộng hòa. Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam, không phân biệt nòi giống, gái trai, giàu nghèo, giai cấp, tôn giáo.",
    source: "Điều 1, Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946",
    sectionId: "hero",
  },
  {
    id: "gq-1",
    sectionCode: "4.2.1",
    sectionTitle: "Nhà nước dân chủ",
    quote:
      "Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Công việc đổi mới, xây dựng là trách nhiệm của dân. Sự nghiệp kháng chiến, kiến quốc là công việc của dân. Chính quyền từ xã đến Chính phủ trung ương do dân cử ra... Nói tóm lại, quyền hành và lực lượng đều ở nơi dân.",
    source: "Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 6, tr. 232",
    sectionId: "dan-chu",
  },
  {
    id: "gq-2",
    sectionCode: "4.2.1",
    sectionTitle: "Sứ mệnh phục vụ của Nhà nước",
    quote:
      "Chế độ ta là chế độ dân chủ, nghĩa là nhân dân là người chủ, mà Chính phủ - từ Toàn quyền cho đến anh nấu bếp - đều là đầy tớ của nhân dân.",
    source: "Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 8, tr. 123",
    sectionId: "dan-chu",
  },
  {
    id: "gq-3",
    sectionCode: "4.2.2",
    sectionTitle: "Thần linh pháp quyền",
    quote:
      "Bảy xin hiến pháp ban hành, Trăm điều phải có thần linh pháp quyền.",
    source: "Việt Nam yêu cầu ca (1919) — Hồ Chí Minh: Toàn tập, t. 1, tr. 473",
    sectionId: "phap-quyen",
  },
  {
    id: "gq-4",
    sectionCode: "4.2.2",
    sectionTitle: "Bình đẳng trước pháp luật",
    quote:
      "Pháp luật của ta là pháp luật dân chủ, bảo vệ quyền lợi của nhân dân lao động... Mọi người đều bình đẳng trước pháp luật, không ai được đứng trên hoặc ngoài pháp luật.",
    source: "Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 10, tr. 560",
    sectionId: "phap-quyen",
  },
  {
    id: "gq-5",
    sectionCode: "4.2.3",
    sectionTitle: "Kiểm soát quyền lực",
    quote:
      "Muốn kiểm soát cho tốt, phải có hai điều: một là kiểm soát phải có hệ thống, hai là người đi kiểm soát phải là những người rất có uy tín.",
    source: "Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 327",
    sectionId: "trong-sach-vung-manh",
  },
  {
    id: "gq-6",
    sectionCode: "4.3.1",
    sectionTitle: "Đạo đức cách mạng của Đảng",
    quote:
      "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân.",
    source: "Di chúc của Chủ tịch Hồ Chí Minh (1969)",
    sectionId: "xay-dung-dang",
  },
  {
    id: "gq-7",
    sectionCode: "4.3.2",
    sectionTitle: "Hết lòng vì lợi ích của dân",
    quote:
      "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh. Chúng ta phải yêu dân, kính dân thì dân mới yêu ta, kính ta.",
    source: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (17-10-1945)",
    sectionId: "xay-dung-nha-nuoc",
  },
  {
    id: "gq-8",
    sectionCode: "4.3.3",
    sectionTitle: "Chống giặc nội xâm",
    quote:
      "Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Kẻ thù khá nguy hiểm, vì nó không mang gươm mang súng, mà nó nằm trong các tổ chức của ta, để làm hỏng công việc của ta... là một thứ 'giặc ở trong lòng' - giặc nội xâm.",
    source: "Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 7, tr. 357",
    sectionId: "phong-chong-tham-nhung",
  },
];

interface CoreFactThesis {
  index: number;
  title: string;
  points: string[];
}

const CORE_FACT_THESES: CoreFactThesis[] = [
  {
    index: 1,
    title: "Bản chất Nhà nước của dân, do dân, vì dân",
    points: [
      "Bản chất giai cấp công nhân thống nhất hữu cơ với tính nhân dân và tính dân tộc sâu sắc.",
      "Nhân dân là chủ thể tối cao của quyền lực nhà nước; cơ quan quyền lực nhà nước do nhân dân bầu ra và ủy quyền.",
      "Cán bộ, đảng viên từ Chủ tịch nước đến nhân viên đều là 'công bộc', 'đầy tớ trung thành của nhân dân'.",
    ],
  },
  {
    index: 2,
    title: "Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ",
    points: [
      "'Thần linh pháp quyền' — quản lý xã hội bằng Hiến pháp và pháp luật, bảo đảm tính tối thượng của luật pháp dân chủ.",
      "Kết hợp nhuần nhuyễn giữa 'Đức trị' (giáo dục đạo đức, nhân nghĩa) và 'Pháp trị' (kỷ cương, chế tài nghiêm minh).",
      "Mọi công dân đều bình đẳng trước pháp luật; tư pháp độc lập, phụng công thủ pháp, chí công vô tư.",
    ],
  },
  {
    index: 3,
    title: "Kiểm soát quyền lực & Phòng chống các căn bệnh thoái hóa",
    points: [
      "Quyền lực nếu không kiểm soát sẽ tha hóa; phải kiểm soát đa chiều: từ trên xuống, từ dưới lên và qua nhân dân giám sát.",
      "Quyết liệt tiêu trừ 3 thứ 'giặc nội xâm' nguy hại: tham ô, lãng phí, quan liêu làm xói mòn lòng tin.",
      "Tự phê bình và phê bình thường xuyên như rửa mặt hàng ngày để bảo vệ sự liêm chính của bộ máy.",
    ],
  },
  {
    index: 4,
    title: "Xây dựng Đảng cầm quyền thật sự trong sạch, vững mạnh",
    points: [
      "Đảng là hạt nhân lãnh đạo hệ thống chính trị, đội tiên phong của giai cấp công nhân và toàn thể dân tộc.",
      "Mỗi cán bộ phải mẫu mực thực hành 4 đức tính cách mạng: Cần, Kiệm, Liêm, Chính, Chí công vô tư.",
      "Giữ gìn sự đoàn kết thống nhất trong Đảng như giữ gìn con ngươi của mắt mình theo Di chúc Bác Hồ.",
    ],
  },
  {
    index: 5,
    title: "Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước",
    points: [
      "Lãnh đạo bằng Cương lĩnh, chiến lược, chủ trương định hướng lớn chứ không bao biện, làm thay chính quyền.",
      "Lãnh đạo thông qua công tác tổ chức cán bộ, kiểm tra, giám sát và tính tiền phong gương mẫu của đảng viên.",
      "Bảo đảm phát huy đầy đủ vai trò, hiệu lực, hiệu quả quản trị điều hành của các cơ quan Nhà nước theo pháp luật.",
    ],
  },
];

const STORAGE_NOTES_KEY = "hcm_study_notes";

interface StudyNotebookDrawerProps {
  onOpenPresentation?: () => void;
  onOpenCitation?: () => void;
}

export default function StudyNotebookDrawer({
  onOpenPresentation,
  onOpenCitation,
}: StudyNotebookDrawerProps) {
  const {
    activeSection,
    scrollTo,
    isStudyNotebookOpen,
    setIsStudyNotebookOpen,
    toggleStudyNotebook,
    notebookTab,
    setNotebookTab,
    activeSubtabMap,
    setActiveSubtab,
  } = useSmoothScroll();

  const [notesViewFilter, setNotesViewFilter] = useState<"current" | "all">("current");
  const [notes, setNotes] = useState<StudyNote[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(STORAGE_NOTES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentNoteText, setCurrentNoteText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [soundMuted, setSoundMuted] = useState(() => {
    initSoundPreference();
    return isSoundMuted();
  });

  const drawerRef = useRef<HTMLElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentSectionData = getSectionById(activeSection) || CANONICAL_SECTIONS[0];

  // Phím tắt bàn phím Ctrl+B để bật/tắt Sổ tay
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        toggleStudyNotebook();
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [toggleStudyNotebook]);

  // Persist notes to localStorage
  const saveNotesToStorage = (updatedNotes: StudyNote[]) => {
    setNotes(updatedNotes);
    try {
      localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(updatedNotes));
    } catch (e) {
      console.error("Lỗi lưu ghi chú:", e);
    }
  };

  // Thêm ghi chú mới
  const handleSaveNote = () => {
    const text = (currentNoteText || textareaRef.current?.value || "").trim();
    if (!text) return;

    const newNote: StudyNote = {
      id: `note-${Date.now()}`,
      sectionId: currentSectionData.id,
      sectionTitle: `${currentSectionData.number !== "0" ? currentSectionData.number + " " : ""}${currentSectionData.shortTitle}`,
      content: text,
      createdAt: new Date().toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newNote, ...notes];
    saveNotesToStorage(updated);
    setCurrentNoteText("");
    if (textareaRef.current) textareaRef.current.value = "";
    setSaveSuccess(true);
    playSubtleClick();

    setTimeout(() => {
      setSaveSuccess(false);
    }, 2000);
  };

  // Xóa ghi chú
  const handleDeleteNote = (id: string) => {
    playSubtleClick();
    const updated = notes.filter((n) => n.id !== id);
    saveNotesToStorage(updated);
  };

  // Sao chép nội dung
  const handleCopyText = (text: string, id: string) => {
    playSubtleClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Bật/tắt âm thanh
  const handleSoundToggle = () => {
    const enabled = toggleSound();
    setSoundMuted(!enabled);
    if (enabled) playSubtleClick();
  };

  // Điều hướng từ Mục lục chi tiết
  const handleOutlineNavigate = (sectionId: string, subtabId?: string) => {
    playSubtleClick();
    scrollTo(sectionId, -56, true);
    if (subtabId) {
      setActiveSubtab(sectionId, subtabId);
    }
    setIsStudyNotebookOpen(false);
  };

  // Lọc ghi chú
  const currentTopicNotes = notes.filter((n) => n.sectionId === currentSectionData.id);
  const displayedNotes = notesViewFilter === "current" ? currentTopicNotes : notes;

  // Lọc thuật ngữ & danh ngôn theo từ khóa tìm kiếm
  const filteredGlossary = useMemo(() => {
    if (!searchQuery.trim()) return GLOSSARY_ITEMS;
    const q = searchQuery.toLowerCase();
    return GLOSSARY_ITEMS.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q) ||
        g.context.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredQuotes = useMemo(() => {
    if (!searchQuery.trim()) return GOLDEN_QUOTES;
    const q = searchQuery.toLowerCase();
    return GOLDEN_QUOTES.filter(
      (item) =>
        item.quote.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q) ||
        item.sectionTitle.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Sao chép toàn bộ 5 luận điểm ôn thi
  const handleCopyAllTheses = () => {
    const fullText = CORE_FACT_THESES.map(
      (t) =>
        `LUẬN ĐIỂM ${t.index}: ${t.title.toUpperCase()}\n` +
        t.points.map((p) => `  • ${p}`).join("\n")
    ).join("\n\n");

    handleCopyText(
      `TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG VÀ NHÀ NƯỚC - ĐỀ CƯƠNG ÔN TẬP 5 LUẬN ĐIỂM CỐT LÕI\n\n${fullText}`,
      "all-theses"
    );
  };

  if (!isStudyNotebookOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={() => setIsStudyNotebookOpen(false)}
      role="presentation"
    >
      {/* Drawer Container chuẩn dark obsidian/ruby palette */}
      <aside
        ref={drawerRef}
        id="study-notebook-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Sổ tay nghiên cứu học thuật & Tiện ích"
        className="w-full max-w-[440px] sm:max-w-md bg-[#220505] text-[#fbf8f0] border-l border-[#6b1c1c] shadow-2xl h-full flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header Sổ Tay */}
        <div className="p-3 sm:p-3.5 border-b border-[#631818] bg-[#1a0404] flex-shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#7a1818] border border-[#d4af37]/50 text-[#ffd700] flex items-center justify-center font-bold text-xs shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-xs sm:text-sm font-bold text-[#fff8ea] tracking-wide leading-tight">
                  SỔ TAY NGHIÊN CỨU & TIỆN ÍCH
                </h2>
                <p className="font-sans text-[9.5px] text-[#d4af37] tracking-wider uppercase mt-0.5">
                  TƯ TƯỞNG HỒ CHÍ MINH
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsStudyNotebookOpen(false)}
              className="min-h-[34px] min-w-[34px] flex items-center justify-center rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
              aria-label="Đóng sổ tay"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Hàng nút tác vụ nhanh (Trình chiếu, Trích dẫn, Âm thanh) */}
          <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setIsStudyNotebookOpen(false);
                if (onOpenPresentation) onOpenPresentation();
              }}
              className="min-h-[32px] px-2 py-1 rounded bg-[#7a1818] border border-[#d4af37]/40 text-[10.5px] font-medium text-[#fff8ea] hover:bg-[#8e1d1d] transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
              title="Mở chế độ trình chiếu toàn màn hình"
            >
              <Presentation className="w-3 h-3 text-[#d4af37]" />
              <span>Trình chiếu</span>
            </button>

            <button
              onClick={() => {
                setIsStudyNotebookOpen(false);
                if (onOpenCitation) onOpenCitation();
              }}
              className="min-h-[32px] px-2 py-1 rounded bg-white/10 border border-white/15 text-[10.5px] font-medium text-[#fbf8f0] hover:bg-white/20 transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
              title="Tạo trích dẫn chuẩn học thuật APA / MLA / Harvard"
            >
              <BookMarked className="w-3 h-3 text-[#d4af37]" />
              <span>Trích dẫn</span>
            </button>

            <button
              onClick={handleSoundToggle}
              className="min-h-[32px] px-2 py-1 rounded bg-white/10 border border-white/15 text-[10.5px] font-medium text-[#fbf8f0] hover:bg-white/20 transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
              title="Bật/Tắt âm thanh tương tác"
            >
              {soundMuted ? (
                <>
                  <VolumeX className="w-3 h-3 text-red-300" />
                  <span>Bật âm</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3 text-emerald-400" />
                  <span>Tắt âm</span>
                </>
              )}
            </button>
          </div>

          {/* 4 Tabs Điều Hướng Học Thuật Hữu Dụng */}
          <div className="grid grid-cols-4 gap-1 mt-2.5 pt-2 border-t border-white/10 text-center text-xs font-sans">
            <button
              onClick={() => {
                playSubtleClick();
                setNotebookTab("notes");
              }}
              className={`py-1.5 px-1 rounded transition-colors text-[10.5px] font-semibold truncate cursor-pointer ${
                notebookTab === "notes"
                  ? "bg-[#7a1818] text-white border border-[#d4af37]/60 shadow-xs"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              Ghi chú ({notes.length})
            </button>

            <button
              onClick={() => {
                playSubtleClick();
                setNotebookTab("outline");
              }}
              className={`py-1.5 px-1 rounded transition-colors text-[10.5px] font-semibold truncate cursor-pointer ${
                notebookTab === "outline"
                  ? "bg-[#7a1818] text-white border border-[#d4af37]/60 shadow-xs"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              Mục lục
            </button>

            <button
              onClick={() => {
                playSubtleClick();
                setNotebookTab("quotes");
              }}
              className={`py-1.5 px-1 rounded transition-colors text-[10.5px] font-semibold truncate cursor-pointer ${
                notebookTab === "quotes"
                  ? "bg-[#7a1818] text-white border border-[#d4af37]/60 shadow-xs"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              Tra cứu & Lời Bác
            </button>

            <button
              onClick={() => {
                playSubtleClick();
                setNotebookTab("summary");
              }}
              className={`py-1.5 px-1 rounded transition-colors text-[10.5px] font-semibold truncate cursor-pointer ${
                notebookTab === "summary"
                  ? "bg-[#7a1818] text-white border border-[#d4af37]/60 shadow-xs"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              Tóm tắt (5 ý)
            </button>
          </div>
        </div>

        {/* 2. Nội Dung Tab Sổ Tay */}
        <div className="flex-1 p-3 sm:p-3.5 space-y-3 overflow-y-auto custom-scrollbar">
          {/* ========================================================= */}
          {/* TAB 1: GHI CHÚ HỌC TẬP (STUDY NOTES)                      */}
          {/* ========================================================= */}
          {notebookTab === "notes" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              {/* Ô Nhập Ghi Chú Mới Cho Chuyên Đề */}
              <div className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg space-y-2">
                <label
                  htmlFor="topic-note-input"
                  className="block text-xs font-serif font-bold text-[#f5ebd2]"
                >
                  Thêm ghi chú cho &quot;{currentSectionData.shortTitle}&quot;:
                </label>
                <textarea
                  ref={textareaRef}
                  id="topic-note-input"
                  value={currentNoteText}
                  onChange={(e) => setCurrentNoteText(e.target.value)}
                  placeholder="Ghi lại luận điểm ôn tập, suy nghĩ hoặc câu hỏi thảo luận..."
                  rows={3}
                  className="w-full p-2 rounded bg-black/40 border border-[#832626] text-xs text-[#fbf8f0] placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] resize-none"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-white/50">
                    Lưu cục bộ vào trình duyệt
                  </span>

                  <button
                    data-testid="save-note-btn"
                    onClick={handleSaveNote}
                    disabled={!currentNoteText.trim()}
                    className={`min-h-[30px] px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                      currentNoteText.trim()
                        ? "bg-[#d4af37] text-[#420a0d] hover:bg-[#ffd700]"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    }`}
                  >
                    {saveSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-700" />
                        <span>Đã lưu!</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-3.5 h-3.5" />
                        <span>Lưu ghi chú</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Lọc danh sách ghi chú */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-serif font-bold text-[#d4af37] uppercase tracking-wider">
                  Danh sách ghi chú ({notes.length})
                </span>

                <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded border border-white/10 text-[10px]">
                  <button
                    onClick={() => setNotesViewFilter("current")}
                    className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                      notesViewFilter === "current"
                        ? "bg-[#7a1818] text-white font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Bài này ({currentTopicNotes.length})
                  </button>
                  <button
                    onClick={() => setNotesViewFilter("all")}
                    className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                      notesViewFilter === "all"
                        ? "bg-[#7a1818] text-white font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Tất cả ({notes.length})
                  </button>
                </div>
              </div>

              {/* Danh Sách Các Ghi Chú Đã Lưu */}
              {displayedNotes.length === 0 ? (
                <div className="p-6 text-center border border-dashed border-[#5a1616] rounded-lg bg-black/20 space-y-2">
                  <FileText className="w-8 h-8 text-[#d4af37]/40 mx-auto" />
                  <p className="text-xs text-white/60">
                    Chưa có ghi chú nào trong mục này.
                  </p>
                  <p className="text-[10px] text-white/40">
                    Hãy ghi lại những điểm cần nhớ khi học tập để dễ dàng ôn tập.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {displayedNotes.map((note) => (
                    <div
                      key={note.id}
                      className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-1.5">
                        <span className="text-[10px] font-mono font-bold text-[#d4af37] uppercase">
                          {note.sectionTitle}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleCopyText(note.content, note.id)}
                            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            title="Sao chép nội dung"
                          >
                            {copiedId === note.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1 rounded text-white/60 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                            title="Xóa ghi chú"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-[#fbf8f0] leading-relaxed whitespace-pre-wrap font-sans">
                        {note.content}
                      </p>

                      <div className="flex items-center gap-1 text-[9px] text-white/40 pt-1">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{note.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: MỤC LỤC CHI TIẾT & ĐIỀU HƯỚNG (INTERACTIVE OUTLINE) */}
          {/* ========================================================= */}
          {notebookTab === "outline" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="p-2.5 bg-[#180303] border border-[#6b1e1e] rounded-lg">
                <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#ffd700]">
                  <ListTree className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>CÂY MỤC LỤC & ĐIỀU HƯỚNG BÀI HỌC</span>
                </div>
                <p className="text-[10px] text-white/60 mt-0.5 leading-snug">
                  Nhấp vào từng chương hoặc tiểu mục con để nhảy nhanh đến nội dung.
                </p>
              </div>

              <div className="space-y-2">
                {CANONICAL_SECTIONS.map((sec) => {
                  const isCurrentSection = sec.id === activeSection;
                  const currentSubtabId = activeSubtabMap[sec.id];
                  const hasSubtabs = sec.subtabs && sec.subtabs.length > 0;

                  return (
                    <div
                      key={sec.id}
                      className={`p-2.5 rounded-lg border transition-all ${
                        isCurrentSection
                          ? "bg-[#350707] border-[#d4af37]/60 shadow-md"
                          : "bg-[#180303] border-[#5a1616] hover:border-[#832626]"
                      }`}
                    >
                      <button
                        onClick={() => handleOutlineNavigate(sec.id)}
                        className="w-full text-left flex items-start justify-between gap-2 cursor-pointer group"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-1.5">
                            {sec.number !== "0" && (
                              <span
                                className={`px-1.5 py-0.2 rounded font-mono font-bold text-[9.5px] ${
                                  isCurrentSection
                                    ? "bg-[#d4af37] text-[#420a0d]"
                                    : "bg-white/10 text-[#d4af37]"
                                }`}
                              >
                                {sec.number}
                              </span>
                            )}
                            <span
                              className={`font-serif text-xs font-bold truncate ${
                                isCurrentSection
                                  ? "text-[#fff8ea]"
                                  : "text-[#e8dac3] group-hover:text-white"
                              }`}
                            >
                              {sec.shortTitle}
                            </span>
                          </div>
                          <p className="text-[10px] text-white/50 truncate font-sans">
                            {sec.subtitle}
                          </p>
                        </div>

                        {isCurrentSection && (
                          <span className="px-1.5 py-0.5 bg-[#ffd700]/20 text-[#ffd700] rounded text-[9px] font-mono uppercase font-bold flex-shrink-0">
                            Đang xem
                          </span>
                        )}
                      </button>

                      {/* Các tiểu mục con (subtabs) */}
                      {hasSubtabs && (
                        <div className="mt-2 pt-1.5 border-t border-white/10 pl-2 space-y-1">
                          {sec.subtabs!.map((subtab) => {
                            const isTabActive =
                              isCurrentSection && currentSubtabId === subtab.id;

                            return (
                              <button
                                key={subtab.id}
                                onClick={() =>
                                  handleOutlineNavigate(sec.id, subtab.id)
                                }
                                className={`w-full text-left px-2 py-1 rounded text-[11px] flex items-center justify-between gap-1.5 transition-colors cursor-pointer ${
                                  isTabActive
                                    ? "bg-[#7a1818] text-white font-bold shadow-xs border border-[#d4af37]/40"
                                    : "text-white/70 hover:bg-white/10 hover:text-white font-medium"
                                }`}
                              >
                                <div className="flex items-center gap-1.5 truncate">
                                  <ChevronRight
                                    className={`w-3 h-3 flex-shrink-0 ${
                                      isTabActive
                                        ? "text-[#ffd700]"
                                        : "text-white/40"
                                    }`}
                                  />
                                  <span className="truncate">{subtab.label}</span>
                                </div>
                                {subtab.badge && (
                                  <span className="text-[9px] font-mono opacity-60 flex-shrink-0">
                                    {subtab.badge}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: TRA CỨU THUẬT NGỮ & LUẬN ĐIỂM BÁC (QUOTES & GLOSSARY) */}
          {/* ========================================================= */}
          {notebookTab === "quotes" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              {/* Thanh tìm kiếm tra cứu nhanh */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#d4af37]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tra cứu thuật ngữ hoặc lời dạy của Bác..."
                  className="w-full pl-8 pr-3 py-1.5 bg-[#180303] border border-[#6b1e1e] rounded-lg text-xs text-[#fbf8f0] placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* 1. Thuật ngữ lý luận cốt lõi */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-serif font-bold text-[#d4af37] uppercase tracking-wider">
                  <span>Thuật ngữ lý luận cốt lõi ({filteredGlossary.length})</span>
                </div>

                {filteredGlossary.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif font-bold text-xs text-[#ffd700]">
                        {item.term}
                      </h4>
                      <button
                        onClick={() => handleOutlineNavigate(item.sectionId)}
                        className="text-[9.5px] font-mono text-[#d4af37] hover:underline flex-shrink-0 cursor-pointer"
                      >
                        {item.sectionTitle} →
                      </button>
                    </div>
                    <p className="text-[11px] text-[#fbf8f0] leading-relaxed">
                      {item.definition}
                    </p>
                    <div className="text-[9.5px] font-serif italic text-white/50 pt-0.5 border-t border-white/10">
                      Nguồn: {item.context}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. Danh ngôn & Lời dạy của Bác */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-serif font-bold text-[#d4af37] uppercase tracking-wider">
                  <span>Lời dạy & Luận điểm của Bác ({filteredQuotes.length})</span>
                </div>

                {filteredQuotes.map((q) => (
                  <div
                    key={q.id}
                    className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg space-y-2"
                  >
                    <div className="flex items-center justify-between text-[9.5px] font-mono text-[#d4af37]">
                      <span>{q.sectionCode} {q.sectionTitle}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyText(`"${q.quote}" — ${q.source}`, q.id)}
                          className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                          title="Sao chép trích dẫn"
                        >
                          {copiedId === q.id ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                        <button
                          onClick={() => handleOutlineNavigate(q.sectionId)}
                          className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded text-[9px] cursor-pointer"
                        >
                          Xem bài
                        </button>
                      </div>
                    </div>

                    <blockquote className="font-serif italic text-xs text-[#fff8ea] leading-relaxed border-l-2 border-[#d4af37] pl-2.5">
                      “{q.quote}”
                    </blockquote>

                    <div className="text-[9.5px] font-sans text-white/50 text-right">
                      — {q.source} —
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: TÓM TẮT NHANH (FACT SHEET - 5 LUẬN ĐIỂM CỐT LÕI)   */}
          {/* ========================================================= */}
          {notebookTab === "summary" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-xs text-[#ffd700]">
                    5 LUẬN ĐIỂM CỐT LÕI ÔN THI & THUYẾT TRÌNH
                  </h3>
                  <p className="text-[10px] text-white/60 mt-0.5">
                    Hệ thống hóa toàn bộ nội dung Chương 4
                  </p>
                </div>

                <button
                  onClick={handleCopyAllTheses}
                  className="px-2.5 py-1 rounded bg-[#d4af37] text-[#420a0d] hover:bg-[#ffd700] text-[10.5px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                  title="Sao chép toàn bộ 5 luận điểm"
                >
                  {copiedId === "all-theses" ? (
                    <>
                      <Check className="w-3 h-3 text-green-800" />
                      <span>Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Chép hết</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2.5">
                {CORE_FACT_THESES.map((thesis) => (
                  <div
                    key={thesis.index}
                    className="p-3 bg-[#180303] border border-[#6b1e1e] rounded-lg space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#7a1818] border border-[#d4af37]/60 text-[#ffd700] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {thesis.index}
                      </span>
                      <h4 className="font-serif font-bold text-xs text-[#fff8ea]">
                        {thesis.title}
                      </h4>
                    </div>

                    <div className="pl-7 space-y-1 text-[11px] text-[#fbf8f0]/90 leading-relaxed font-sans">
                      {thesis.points.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#d4af37] mt-1 text-[8px] flex-shrink-0">
                            •
                          </span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. Footer Sổ Tay */}
        <div className="p-3 border-t border-[#631818] bg-[#1a0404] flex items-center justify-between text-[10px] font-mono text-white/60 flex-shrink-0">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LƯU TRỮ LOCALSTORAGE
          </span>
          <span>PHÍM TẮT: CTRL+B</span>
        </div>
      </aside>
    </div>
  );
}
