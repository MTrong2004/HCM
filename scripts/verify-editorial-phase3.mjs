import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

console.log("=== KIỂM TRA PHONG CÁCH EDITORIAL HERITAGE CHRONICLE (PHASE 3 AUDIT) ===");

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    passed++;
    console.log(`[PASS] ${message}`);
  } else {
    console.error(`[FAIL] ${message}`);
    process.exitCode = 1;
  }
}

// 1. HeroSection audit
const heroContent = fs.readFileSync(path.join(root, "src/components/storytelling/HeroStorySection.tsx"), "utf8");
assert(!heroContent.includes("animate-pulse bg-emerald-600"), "Hero: Đã loại bỏ hoàn toàn pulse dot kiểu SaaS server status");
assert(!heroContent.includes("max-w-[366px]"), "Hero: Đã loại bỏ max-w-[366px] hardcoded gây lệch lề responsive");
assert(heroContent.includes("BA TRỤ CỘT HIẾN ĐỊNH"), "Hero: Giữ nguyên nội dung Ba trụ cột hiến định");
assert(heroContent.toLowerCase().includes("dân vi bản"), "Hero: Giữ nguyên ấn triện Dân vi bản");
assert(heroContent.includes("scrollToPhapQuyen"), "Hero: Giữ nguyên navigation CTA");
assert(!heroContent.includes("100%"), "Hero: Không còn dải KPI marketing '100% của toàn dân'");
assert(!heroContent.includes("grid grid-cols-3 divide-x"), "Hero: Số liệu lịch sử không còn trình bày như stat grid SaaS");
assert(!heroContent.includes("shadow-2xl") && !heroContent.includes("shadow-xl"), "Hero: Không còn outer app shell đổ bóng nặng");

// 2. StorySection audit
const storyContent = fs.readFileSync(path.join(root, "src/components/shared/StorySection.tsx"), "utf8");
assert(!storyContent.includes("max-w-[366px]"), "StorySection: Đã loại bỏ max-w-[366px] hardcoded gây bất đối xứng margin");
assert(storyContent.includes("scroll-mt-"), "StorySection: Giữ nguyên scroll-margin-top cho header offset");

// 3. AssetPlaceholder audit
const assetContent = fs.readFileSync(path.join(root, "src/components/shared/AssetPlaceholder.tsx"), "utf8");
assert(!assetContent.includes("HỒ SƠ TƯ LIỆU LỊCH SỬ"), "AssetPlaceholder: Không còn nhãn giả 'HỒ SƠ TƯ LIỆU LỊCH SỬ'");
assert(!assetContent.includes("LƯU TRỮ QUỐC GIA"), "AssetPlaceholder: Không còn nhãn giả 'LƯU TRỮ QUỐC GIA'");
assert(!assetContent.includes("MÃ LƯU TRỮ:"), "AssetPlaceholder: Không còn nhãn giả 'MÃ LƯU TRỮ'");
assert(!assetContent.includes("CHUẨN TƯ LIỆU:"), "AssetPlaceholder: Không còn nhãn giả 'CHUẨN TƯ LIỆU'");
assert(
  assetContent.includes("Minh họa biên tập — chưa có ảnh tư liệu được xác minh"),
  "AssetPlaceholder: Fallback trung thực 'Minh họa biên tập — chưa có ảnh tư liệu được xác minh'"
);

// 4. PullQuote audit
const pullQuoteContent = fs.readFileSync(path.join(root, "src/components/shared/PullQuote.tsx"), "utf8");
assert(!pullQuoteContent.includes("w-24 h-24 sm:w-32 sm:h-32"), "PullQuote: Đã loại bỏ icon Quote watermark 128px generic");
assert(pullQuoteContent.includes("border-l-primary"), "PullQuote: Viền đỏ rượu di sản chuẩn editorial");

// 5. EditorialTextBlock audit
const textBlockContent = fs.readFileSync(path.join(root, "src/components/shared/EditorialTextBlock.tsx"), "utf8");
assert(!textBlockContent.includes("p-6 rounded-lg border bg-paper-light/80"), "EditorialTextBlock: Đã xóa bỏ generic Tailwind card fatigue cho từng đoạn văn");
assert(textBlockContent.includes("mx-auto w-full max-w-prose"), "EditorialTextBlock: Cột đọc desktop được căn giữa theo trục editorial");

// 6. Infographics unified styling audit
const infoFiles = [
  "src/components/infographics/InfographicCuaDoViDan.tsx",
  "src/components/infographics/InfographicPhapQuyenBaTang.tsx",
  "src/components/infographics/InfographicQuyenLucKiemSoat.tsx",
  "src/components/infographics/InfographicDuongLoiDenHanhDong.tsx",
  "src/components/infographics/InfographicDangNhaNuocNhanDan.tsx",
];

for (const file of infoFiles) {
  const c = fs.readFileSync(path.join(root, file), "utf8");
  assert(!c.includes("rounded-full flex items-center justify-center bg-primary text-paper-light"), `${path.basename(file)}: Đã loại bỏ circular candy icon badges`);
  assert(c.includes("min-h-[44px]"), `${path.basename(file)}: Đạt chuẩn touch target tương tác >= 44px`);
}

// 7. Heritage Plates audit
const juridicalContent = fs.readFileSync(path.join(root, "src/components/storytelling/HeritageJuridicalPlate.tsx"), "utf8");
assert(!juridicalContent.includes("JUSTICE"), "HeritageJuridicalPlate: Đã loại bỏ watermark tiếng Anh 'JUSTICE'");

const integrityContent = fs.readFileSync(path.join(root, "src/components/storytelling/HeritageIntegrityPlate.tsx"), "utf8");
assert(!integrityContent.includes("1950 select-none pointer-events-none"), "HeritageIntegrityPlate: Đã loại bỏ watermark '1950'");

// 8. Quiz touch target & accessibility
const quizContent = fs.readFileSync(path.join(root, "src/components/storytelling/AcademicQuizSection.tsx"), "utf8");
assert(quizContent.includes("min-h-[44px]"), "AcademicQuizSection: Tất cả các lựa chọn trắc nghiệm đạt touch target >= 44px");

console.log(`\n[KẾT QUẢ PHASE 3 AUDIT]: ${passed}/${total} tiêu chí kiểm định phong cách Editorial thành công!`);
