import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== KIỂM TRA TÍNH TOÀN VẸN NỘI DUNG CHƯƠNG 4 (CONTENT INTEGRITY AUDIT) ===");

// 1. Kiểm tra tồn tại các file cốt lõi
const coreFiles = [
  "src/content/presentation-content.ts",
  "src/content/sources.ts",
  "src/content/asset-manifest.ts",
  "src/app/page.tsx",
  "src/components/storytelling/HeroStorySection.tsx",
  "src/components/storytelling/DanChuSection.tsx",
  "src/components/storytelling/PhapQuyenSection.tsx",
  "src/components/storytelling/TrongSachVungManhSection.tsx",
  "src/components/storytelling/XayDungDangSection.tsx",
  "src/components/storytelling/XayDungNhaNuocSection.tsx",
  "src/components/storytelling/PhongChongThamNhungSection.tsx",
  "src/components/storytelling/ConclusionSection.tsx",
];

for (const relPath of coreFiles) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`[FAIL] Không tìm thấy file: ${relPath}`);
    process.exit(1);
  }
}
console.log("[PASS] Tất cả các file cốt lõi đều tồn tại.");

// 2. Đọc nội dung
const presentationContentText = fs.readFileSync(
  path.join(rootDir, "src/content/presentation-content.ts"),
  "utf-8"
);
const pageText = fs.readFileSync(path.join(rootDir, "src/app/page.tsx"), "utf-8");
if (!pageText.includes("PhongChongThamNhungSection")) {
  console.error("[FAIL] Thiếu import PhongChongThamNhungSection trong page.tsx");
  process.exit(1);
}

// 3. Kiểm tra Section IDs chuẩn trong luồng hiển thị của app/page.tsx và storytelling components
const requiredSections = [
  { id: "hero", file: "src/components/storytelling/HeroStorySection.tsx" },
  { id: "dan-chu", file: "src/components/storytelling/DanChuSection.tsx" },
  { id: "phap-quyen", file: "src/components/storytelling/PhapQuyenSection.tsx" },
  { id: "trong-sach-vung-manh", file: "src/components/storytelling/TrongSachVungManhSection.tsx" },
  { id: "xay-dung-dang", file: "src/components/storytelling/XayDungDangSection.tsx" },
  { id: "xay-dung-nha-nuoc", file: "src/components/storytelling/XayDungNhaNuocSection.tsx" },
  { id: "phong-chong-tham-nhung", file: "src/components/storytelling/PhongChongThamNhungSection.tsx" },
  { id: "ket-luan", file: "src/components/storytelling/ConclusionSection.tsx" },
];

let missingSections = 0;
for (const sec of requiredSections) {
  const fileContent = fs.readFileSync(path.join(rootDir, sec.file), "utf-8");
  if (!fileContent.includes(`id="${sec.id}"`)) {
    console.error(`[FAIL] Thiếu id="${sec.id}" trong ${sec.file}`);
    missingSections++;
  }
}

if (missingSections > 0) {
  console.error(`[FAIL] Có ${missingSections} Section ID bị thiếu trong DOM components.`);
  process.exit(1);
} else {
  console.log("[PASS] 100% (8/8) Canonical Section IDs hiện diện chính xác trong DOM các storytelling component.");
}

// 4. Kiểm tra tuyệt đối không có Three.js / 3D Viewer import
const allStorytellingFiles = fs.readdirSync(path.join(rootDir, "src/components/storytelling"));
for (const f of allStorytellingFiles) {
  if (f.endsWith(".tsx") || f.endsWith(".ts")) {
    const content = fs.readFileSync(path.join(rootDir, "src/components/storytelling", f), "utf-8");
    if (content.includes("three") || content.includes("@react-three") || content.includes("Book3DViewer")) {
      console.error(`[FAIL] Phát hiện Three.js/3D import trái quy định trong ${f}`);
      process.exit(1);
    }
  }
}
console.log("[PASS] Tuyệt đối không có Three.js hoặc Book3DViewer nào được import trong Storytelling components.");

// 5. Kiểm tra các luận điểm học thuật bắt buộc từ Master Spec
const academicChecklist = [
  // 4.2.1
  { section: "4.2.1", key: "Bản chất giai cấp công nhân", pattern: /bản chất giai cấp công nhân/i },
  { section: "4.2.1", key: "Nguyên tắc tập trung dân chủ", pattern: /tập trung dân chủ/i },
  { section: "4.2.1", key: "Định hướng XHCN", pattern: /xã hội chủ nghĩa/i },
  { section: "4.2.1", key: "Thống nhất tính giai cấp, nhân dân, dân tộc", pattern: /tính nhân dân.*tính dân tộc/i },
  { section: "4.2.1", key: "Dân chủ trực tiếp & gián tiếp", pattern: /dân chủ trực tiếp.*dân chủ gián tiếp|dân chủ gián tiếp.*dân chủ trực tiếp/is },
  { section: "4.2.1", key: "Công bộc của nhân dân", pattern: /công bộc/i },
  { section: "4.2.1", key: "Quyền bãi miễn đại biểu", pattern: /bãi miễn/i },
  { section: "4.2.1", key: "Quyền bầu cử, phúc quyết", pattern: /phúc quyết/i },
  { section: "4.2.1", key: "Là chủ và làm chủ", pattern: /là chủ.*làm chủ/i },
  { section: "4.2.1", key: "Nghĩa vụ công dân", pattern: /nghĩa vụ công dân/i },
  { section: "4.2.1", key: "Câu nói: Việc gì có lợi cho dân...", pattern: /việc gì có lợi cho dân/i },
  { section: "4.2.1", key: "Cán bộ vừa có đức vừa có tài", pattern: /đức.*tài|tài.*đức/i },

  // 4.2.2
  { section: "4.2.2", key: "Nhà nước hợp hiến, hợp pháp", pattern: /hợp hiến.*hợp pháp/i },
  { section: "4.2.2", key: "Phiên họp Chính phủ lâm thời 3/9/1945", pattern: /3\/9\/1945/ },
  { section: "4.2.2", key: "Tổng tuyển cử 6/1/1946", pattern: /6\/1\/1946/ },
  { section: "4.2.2", key: "Phổ thông đầu phiếu", pattern: /phổ thông đầu phiếu/i },
  { section: "4.2.2", key: "Hiến pháp năm 1946 & Hiến pháp 1959", pattern: /1946.*1959/is },
  { section: "4.2.2", key: "Thượng tôn pháp luật", pattern: /thượng tôn pháp luật/i },
  { section: "4.2.2", key: "Phụng công, thủ pháp, chí công, vô tư", pattern: /phụng công.*thủ pháp.*chí công.*vô tư/i },
  { section: "4.2.2", key: "Pháp quyền nhân nghĩa", pattern: /pháp quyền nhân nghĩa/i },
  { section: "4.2.2", key: "Bảo đảm quyền con người, quyền công dân", pattern: /quyền con người/i },
  { section: "4.2.2", key: "Quyền phụ nữ, trẻ em, dân tộc thiểu số", pattern: /phụ nữ.*trẻ em/i },
  { section: "4.2.2", key: "Giáo dục, cảm hóa, thức tỉnh", pattern: /cảm hóa/i },

  // 4.2.3
  { section: "4.2.3", key: "Kiểm soát quyền lực nhà nước", pattern: /kiểm soát quyền lực/i },
  { section: "4.2.3", key: "Chuỗi: Quyền lực -> Kiểm soát -> Trách nhiệm -> Niềm tin", pattern: /quyền lực.*kiểm soát.*trách nhiệm.*niềm tin/is },
  { section: "4.2.3", key: "Kiểm soát của Đảng", pattern: /kiểm soát của đảng/i },
  { section: "4.2.3", key: "Kiểm soát trong bộ máy nhà nước", pattern: /kiểm soát.*bộ máy/i },
  { section: "4.2.3", key: "Kiểm soát của nhân dân", pattern: /kiểm soát của nhân dân|giám sát của nhân dân/i },
  { section: "4.2.3", key: "Đặc quyền, đặc lợi", pattern: /đặc quyền.*đặc lợi/i },
  { section: "4.2.3", key: "Tham ô, lãng phí, quan liêu (Giặc nội xâm)", pattern: /tham ô.*lãng phí.*quan liêu/is },
  { section: "4.2.3", key: "Giặc nội xâm / giặc ở trong lòng", pattern: /giặc nội xâm/i },
  { section: "4.2.3", key: "Tư túng, chia rẽ, kiêu ngạo", pattern: /tư túng.*chia rẽ/i },
  { section: "4.2.3", key: "Nguyên nhân chủ quan (Chủ nghĩa cá nhân)", pattern: /chủ nghĩa cá nhân/i },
  { section: "4.2.3", key: "Phương châm: Xây đi đôi với chống", pattern: /xây đi đôi với chống/i },

  // 4.3.1
  { section: "4.3.1", key: "Tầm quan trọng sinh tử: Sai một ly thì đi một dặm", pattern: /sai một ly.*đi một dặm/i },
  { section: "4.3.1", key: "Kiên định chủ nghĩa Mác - Lênin & TTHCM", pattern: /mác.*lênin/i },
  { section: "4.3.1", key: "Đường lối đúng mới là nửa chặng đường", pattern: /nửa chặng đường/i },
  { section: "4.3.1", key: "Thể chế hóa thành chính sách, pháp luật", pattern: /thể chế hóa/i },
  { section: "4.3.1", key: "Đảng là đạo đức, là văn minh", pattern: /đạo đức.*văn minh/i },
  { section: "4.3.1", key: "Di chúc lịch sử 1969", pattern: /di chúc/i },
  { section: "4.3.1", key: "Trách nhiệm của sinh viên", pattern: /sinh viên/i },

  // 4.3.2
  { section: "4.3.2", key: "Pháp luật là công cụ quản lý và kiểm soát", pattern: /công cụ quản lý.*kiểm soát quyền lực|kiểm soát quyền lực.*công cụ/is },
  { section: "4.3.2", key: "Phân công, phối hợp 3 nhánh quyền lực", pattern: /lập pháp.*hành pháp.*tư pháp/is },
  { section: "4.3.2", key: "Cán bộ vừa hồng vừa chuyên", pattern: /vừa hồng vừa chuyên/i },
  { section: "4.3.2", key: "Trọng dụng nhân tài", pattern: /trọng dụng nhân tài/i },
  { section: "4.3.2", key: "Cơ chế: Không thể, không dám, không cần tham nhũng", pattern: /không thể.*không dám.*không cần/is },
  { section: "4.3.2", key: "Đổi mới phương thức lãnh đạo của Đảng", pattern: /đổi mới phương thức lãnh đạo/i },
  { section: "4.3.2", key: "Không bao biện làm thay", pattern: /không bao biện làm thay/i },

  // 4.3.3
  { section: "4.3.3", key: "Nhận diện Tham ô: chiếm đoạt của công", pattern: /chiếm đoạt/i },
  { section: "4.3.3", key: "Nhận diện Lãng phí: không hiệu quả", pattern: /không hiệu quả/i },
  { section: "4.3.3", key: "Nhận diện Quan liêu: Xa dân, xa thực tế", pattern: /xa dân.*xa thực tế/i },
  { section: "4.3.3", key: "Hệ giải pháp: Dân - Luật - Phạt - Gương", pattern: /dân.*luật.*phạt.*gương/i },
];

let failedCount = 0;
console.log(`\nKiểm tra ${academicChecklist.length} tiêu chí luận điểm học thuật...`);

for (const item of academicChecklist) {
  if (!item.pattern.test(presentationContentText)) {
    console.error(`[THIẾU] [${item.section}] ${item.key}`);
    failedCount++;
  }
}

if (failedCount > 0) {
  console.error(`\n[THẤT BẠI] Còn thiếu ${failedCount} tiêu chí.`);
  process.exit(1);
} else {
  console.log(`\n[KẾT QUẢ AUDIT THÀNH CÔNG]: 100% (${academicChecklist.length}/${academicChecklist.length}) luận điểm học thuật đã có đầy đủ.`);
}
