"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle } from "lucide-react";
import { playSuccessChime, playBuzzer, playSubtleClick } from "@/lib/sound-effects";
import EditorialReveal from "@/components/shared/EditorialReveal";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question:
      "Theo tư tưởng Hồ Chí Minh, bản chất giai cấp của Nhà nước Việt Nam mới là gì?",
    options: [
      "Mang bản chất giai cấp vô sản thuần túy, loại bỏ các giai tầng khác.",
      "Mang bản chất giai cấp công nhân, có tính nhân dân và tính dân tộc sâu sắc.",
      "Là nhà nước phi giai cấp, đại diện chung cho mọi cá nhân không phân biệt.",
      "Chỉ mang tính dân tộc, không đề cập đến bản chất giai cấp công nhân.",
    ],
    correct: 1,
    explanation:
      "Hồ Chí Minh khẳng định Nhà nước ta mang bản chất giai cấp công nhân, nhưng luôn gắn bó hữu cơ với tính nhân dân và tính dân tộc rộng rãi.",
  },
  {
    id: "q2",
    question:
      "Khẩu hiệu pháp quyền nổi tiếng trong tác phẩm 'Việt Nam yêu cầu ca' (1919) của Nguyễn Ái Quốc là gì?",
    options: [
      "Bảy xin hiến pháp ban hành, Trăm điều phải có thần linh pháp quyền.",
      "Pháp luật nghiêm minh, không vì tình riêng.",
      "Muốn dân chủ thì phải có luật pháp chặt chẽ.",
      "Nước có quốc pháp, nhà có gia quy.",
    ],
    correct: 0,
    explanation:
      "Trong bản Yêu sách của nhân dân An Nam gửi Hội nghị Versailles (1919), Nguyễn Ái Quốc đã diễn ca yêu cầu 'Trăm điều phải có thần linh pháp quyền'.",
  },
  {
    id: "q3",
    question:
      "Trong mối quan hệ giữa Cán bộ và Nhân dân, Chủ tịch Hồ Chí Minh định vị người cán bộ là gì?",
    options: [
      "Quan cách mạng, người chỉ huy tối cao của quần chúng.",
      "Người quản lý tài phán, đứng ngoài các phong trào nhân dân.",
      "Người đày tớ, công bộc trung thành tận tụy của nhân dân.",
      "Tầng lớp tinh hoa dẫn dắt quần chúng mà không chịu sự kiểm tra.",
    ],
    correct: 2,
    explanation:
      "Hồ Chí Minh nhiều lần căn dặn: 'Cán bộ từ Trung ương đến làng xã đều là đầy tớ của dân, chứ không phải là quan cách mạng để đè đầu cưỡi cổ dân'.",
  },
  {
    id: "q4",
    question:
      "Chủ tịch Hồ Chí Minh xếp ba căn bệnh: Tham ô, Lãng phí, Quan liêu vào loại gì?",
    options: [
      "Khuyết điểm thông thường trong quá trình điều hành kinh tế.",
      "Kẻ thù nguy hiểm — 'Giặc nội xâm' tàn phá từ bên trong.",
      "Hiện tượng tạm thời sẽ tự khỏi khi kinh tế phát triển.",
      "Vấn đề cá nhân đạo đức, không liên quan đến thể chế.",
    ],
    correct: 1,
    explanation:
      "Người chỉ rõ tham ô, lãng phí, quan liêu là thứ 'giặc ở trong lòng', là 'giặc nội xâm', nguy hiểm không kém giặc ngoại xâm vì nó làm ruỗng mục bộ máy và mất lòng dân.",
  },
  {
    id: "q5",
    question:
      "Phương châm căn bản để thực hành dân chủ sâu rộng trong đời sống xã hội là gì?",
    options: [
      "Dân chờ, Dân nghe, Dân chấp hành chỉ thị.",
      "Dân biết, Dân bàn, Dân làm, Dân kiểm tra.",
      "Cán bộ quyết, Cán bộ làm, Nhân dân thụ hưởng.",
      "Tập trung dân chủ trên giấy tờ, linh hoạt theo thời cuộc.",
    ],
    correct: 1,
    explanation:
      "Phương châm 'Dân biết, Dân bàn, Dân làm, Dân kiểm tra' là cốt lõi của việc thực hành dân chủ trực tiếp và phát huy quyền làm chủ của nhân dân.",
  },
];

export default function AcademicQuizSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionId: string, optionIdx: number) => {
    if (showResults) return;
    playSubtleClick();
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleShowResults = () => {
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setShowResults(true);

    if (correctCount >= 4) {
      playSuccessChime();
    } else {
      playBuzzer();
    }
  };

  const handleReset = () => {
    playSubtleClick();
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = Object.keys(selectedAnswers).length === QUIZ_QUESTIONS.length;

  return (
    <EditorialReveal id="quiz-section" className="p-5 sm:p-8 rounded-lg bg-paper-light/95 border border-accent/30 shadow-sm space-y-6 my-10 text-ink">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-accent/25">
        <div>
          <span className="font-mono text-xs font-bold tracking-widest text-accent-dark uppercase block mb-1">
            TƯƠNG TÁC HỌC THUẬT
          </span>
          <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
            Kiểm tra Nhanh: 5 Luận điểm Cốt lõi
          </h4>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1">
            Đánh giá mức độ nắm vững các luận điểm tư tưởng Hồ Chí Minh về Nhà nước
          </p>
        </div>

        {showResults && (
          <div className="flex items-center gap-3 bg-paper p-3 rounded border border-accent/30 shadow-sm">
            <Award className="w-6 h-6 text-accent-dark" />
            <div>
              <span className="text-[10px] font-mono uppercase text-ink-muted block">
                Kết quả đạt được
              </span>
              <span className="font-serif font-bold text-xl text-primary">
                {score} / {QUIZ_QUESTIONS.length} câu đúng
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correct;

          return (
            <div
              key={q.id}
              className={`p-4 sm:p-5 rounded-lg border transition-all ${
                showResults
                  ? isCorrect
                    ? "bg-emerald-50/50 border-emerald-300"
                    : "bg-red-50/50 border-red-300"
                  : "bg-paper border-accent/25"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded bg-accent/20 border border-accent/35 text-accent-dark font-mono text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h5 className="font-serif text-base sm:text-lg font-bold text-ink leading-snug">
                  {q.question}
                </h5>
              </div>

              {/* Options */}
              <div className="space-y-2 pl-2 sm:pl-9">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optStyle = "bg-paper-light border-accent/25 hover:border-accent text-ink";

                  if (showResults) {
                    if (optIdx === q.correct) {
                      optStyle = "bg-emerald-100/80 border-emerald-500 text-emerald-950 font-medium";
                    } else if (isSelected && !isCorrect) {
                      optStyle = "bg-red-100/80 border-red-400 text-red-950";
                    } else {
                      optStyle = "opacity-60 bg-paper-light border-accent/20 text-ink";
                    }
                  } else if (isSelected) {
                    optStyle = "bg-primary text-paper-light border-primary shadow-sm";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full p-3 rounded border text-left text-sm sm:text-[15px] font-sans transition-all flex items-start gap-2.5 min-h-[44px] ${optStyle}`}
                    >
                      <span className="font-mono font-bold mt-0.5 opacity-80">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="flex-1 leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation (when revealed) */}
              {showResults && (
                <div className="mt-3.5 pl-2 sm:pl-9 pt-3 border-t border-accent/20 text-xs sm:text-sm font-sans flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-ink leading-relaxed">
                    <span className="font-bold text-primary mr-1">Cơ sở lý luận:</span>
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-accent/25">
        <div className="text-xs font-mono text-ink-muted flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-accent-dark" />
          <span>Đã trả lời {Object.keys(selectedAnswers).length}/{QUIZ_QUESTIONS.length} câu</span>
        </div>

        <div className="flex items-center gap-3">
          {showResults && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-accent/40 bg-paper hover:bg-paper-dark/30 text-ink text-xs font-mono font-semibold transition-colors min-h-[44px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Làm lại
            </button>
          )}

          {!showResults && (
            <button
              onClick={handleShowResults}
              disabled={!allAnswered}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all min-h-[44px] ${
                allAnswered
                  ? "bg-primary text-paper-light hover:bg-primary-dark shadow-sm"
                  : "bg-paper-dark/50 text-ink-muted/50 cursor-not-allowed border border-accent/20"
              }`}
            >
              Xem Kết quả & Đáp án
            </button>
          )}
        </div>
      </div>
    </EditorialReveal>
  );
}
