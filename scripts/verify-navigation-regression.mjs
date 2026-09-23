import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== KIỂM TRA HỆ THỐNG NAVIGATION & SCROLL REGRESSION (PHASE 2) ===\n");

let failures = 0;
function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
  } else {
    console.error(`[FAIL] ${message}`);
    failures++;
  }
}

function parseCdpEval(evalRes, context = "") {
  const val = evalRes?.result?.result?.value ?? evalRes?.result?.value;
  if (!val) {
    throw new Error(`CDP evaluate [${context}] trả về rỗng: ${JSON.stringify(evalRes)}`);
  }
  return typeof val === "string" ? JSON.parse(val) : val;
}

// -------------------------------------------------------------
// 1. Kiểm tra Single Source of Truth cho 8 Canonical Sections
// -------------------------------------------------------------
const canonicalFile = path.join(rootDir, "src/content/canonical-sections.ts");
assert(fs.existsSync(canonicalFile), "File canonical-sections.ts tồn tại.");

const canonicalContent = fs.readFileSync(canonicalFile, "utf-8");
const expectedIds = [
  "hero",
  "dan-chu",
  "phap-quyen",
  "trong-sach-vung-manh",
  "xay-dung-dang",
  "xay-dung-nha-nuoc",
  "phong-chong-tham-nhung",
  "ket-luan",
];

for (const id of expectedIds) {
  assert(
    canonicalContent.includes(`id: "${id}"`),
    `Canonical sections chứa đầy đủ id: "${id}"`
  );
}

// -------------------------------------------------------------
// 2. Kiểm tra không duplicate mảng sections trong Navigation & ReadingProgress
// -------------------------------------------------------------
const navFile = path.join(rootDir, "src/components/shared/SectionNavigation.tsx");
const progressFile = path.join(rootDir, "src/components/shared/ReadingProgress.tsx");
const navContent = fs.readFileSync(navFile, "utf-8");
const progressContent = fs.readFileSync(progressFile, "utf-8");

assert(
  navContent.includes("CANONICAL_SECTIONS"),
  "SectionNavigation.tsx import CANONICAL_SECTIONS từ canonical config."
);
assert(
  !navContent.includes("const NAV_LINKS = ["),
  "SectionNavigation.tsx không còn khai báo mảng NAV_LINKS riêng."
);

assert(
  progressContent.includes("CANONICAL_SECTIONS"),
  "ReadingProgress.tsx import CANONICAL_SECTIONS từ canonical config."
);
assert(
  !progressContent.includes("const SECTIONS: SectionIndicator[] = ["),
  "ReadingProgress.tsx không còn khai báo mảng SECTIONS riêng."
);

// -------------------------------------------------------------
// 3. Kiểm tra SmoothScrollProvider & Scroll-Spy đồng bộ
// -------------------------------------------------------------
const providerFile = path.join(rootDir, "src/components/shared/SmoothScrollProvider.tsx");
const providerContent = fs.readFileSync(providerFile, "utf-8");

assert(
  providerContent.includes("CANONICAL_SECTION_IDS"),
  "SmoothScrollProvider sử dụng CANONICAL_SECTION_IDS cho scroll-spy và hash sync."
);
assert(
  providerContent.includes("isTOCDrawerOpen"),
  "SmoothScrollProvider quản lý trạng thái đồng bộ TOC Drawer."
);
assert(
  providerContent.includes("popstate"),
  "SmoothScrollProvider lắng nghe sự kiện popstate để hỗ trợ browser back/forward."
);
assert(
  providerContent.includes("window.history.pushState"),
  "SmoothScrollProvider hỗ trợ pushState cập nhật hash URL khi click nav mà không reload."
);

// -------------------------------------------------------------
// 4. Kiểm tra Scroll Margin & Deep Link Clearance
// -------------------------------------------------------------
const cssFile = path.join(rootDir, "src/app/globals.css");
const cssContent = fs.readFileSync(cssFile, "utf-8");
assert(
  cssContent.includes("scroll-margin-top"),
  "globals.css cấu hình scroll-margin-top cho các canonical anchors."
);

const storySecFile = path.join(rootDir, "src/components/shared/StorySection.tsx");
const storySecContent = fs.readFileSync(storySecFile, "utf-8");
assert(
  storySecContent.includes("scroll-mt-"),
  "StorySection.tsx chứa class scroll-mt- để đảm bảo khoảng trống dưới fixed header."
);

// -------------------------------------------------------------
// 5. Kiểm tra Mobile Accessibility & 44px Touch Targets
// -------------------------------------------------------------
assert(
  navContent.includes("min-h-[44px]") || navContent.includes("min-w-[44px]"),
  "SectionNavigation đảm bảo touch target tối thiểu 44px trên mobile."
);
assert(
  navContent.includes('aria-expanded={isTOCDrawerOpen}'),
  "Nút mở TOC drawer có thuộc tính aria-expanded."
);
assert(
  navContent.includes('aria-controls="editorial-toc-drawer"'),
  "Nút mở TOC drawer có thuộc tính aria-controls."
);
assert(
  navContent.includes('role="dialog"'),
  "TOC drawer có role='dialog' cho accessibility."
);
assert(
  providerContent.includes('document.body.style.overflow = "hidden"'),
  "TOC drawer kích hoạt body scroll lock khi mở."
);
assert(
  navContent.includes("previousFocusRef") && navContent.includes("focusableSelector"),
  "TOC drawer quản lý focus trap và phục hồi focus khi đóng."
);

// -------------------------------------------------------------
// 6. Kiểm tra Reading Progress (0-100% & Scroll-to-top regression)
// -------------------------------------------------------------
assert(
  progressContent.includes('role="progressbar"'),
  "ReadingProgress.tsx có role='progressbar'."
);
assert(
  progressContent.includes("aria-valuenow"),
  "ReadingProgress.tsx có aria-valuenow phản ánh tiến độ đọc."
);
assert(
  progressContent.includes("hidden sm:flex"),
  "Nút Scroll-to-top ẩn dưới breakpoint sm ('hidden sm:flex') để bảo toàn regression không che phụ đề mobile."
);
assert(
  progressContent.includes("%"),
  "ReadingProgress hiển thị phần trăm tiến độ đọc trực quan."
);

// -------------------------------------------------------------
// 7. Search command targets must resolve to canonical DOM sections
// -------------------------------------------------------------
const searchFile = path.join(rootDir, "src/components/shared/SearchCommandModal.tsx");
const searchContent = fs.readFileSync(searchFile, "utf-8");
const searchIds = [...searchContent.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]);
const invalidSearchIds = searchIds.filter((id) => !expectedIds.includes(id));
assert(
  invalidSearchIds.length === 0,
  `SearchCommandModal chỉ trỏ tới canonical section tồn tại${invalidSearchIds.length ? `; ID sai: ${invalidSearchIds.join(", ")}` : "."}`
);
assert(
  !/Triển lãm 3D|Mô hình 3D|scene-justice-scale|scene-power-network|quiz-section/.test(searchContent),
  "SearchCommandModal không quảng bá 3D hoặc target chưa mount trong active app."
);

// -------------------------------------------------------------
// 8. Live Edge CDP Browser Test (nếu có msedge.exe)
// -------------------------------------------------------------
const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

async function runBrowserTests() {
  if (!fs.existsSync(edgePath)) {
    console.log("[SKIP] Không tìm thấy msedge.exe để chạy dynamic browser CDP test.");
    return;
  }

  console.log("\n--- BẮT ĐẦU LIVE BROWSER CDP AUDIT ---");
  const testPort = 13000 + Math.floor(Math.random() * 1000);
  let serverProcess = null;
  const targetUrl = `http://127.0.0.1:${testPort}`;
  const nextBin = path.join(rootDir, "node_modules/next/dist/bin/next");

  console.log(`Khởi động production test server riêng trên cổng ${testPort}...`);
  serverProcess = spawn(process.execPath, [nextBin, "start", "-p", String(testPort)], {
    cwd: rootDir,
    stdio: "ignore",
  });

  let ready = false;
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 300));
    try {
      const res = await fetch(targetUrl);
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {}
  }

  if (!ready) {
    if (serverProcess) serverProcess.kill();
    throw new Error("Không thể khởi động production test server riêng cho CDP audit.");
  }

  try {
    // 7A. Test Desktop 1440px
    await runCDPViewport(targetUrl, { width: 1440, height: 1000 }, "Desktop 1440px", async (send) => {
      const evalRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const header = document.querySelector('header');
          const headerRect = header ? header.getBoundingClientRect() : null;
          const tocButton = document.querySelector('[aria-controls="editorial-toc-drawer"]');
          const rail = document.querySelector('nav[aria-label*="8 chương"]');
          const docScrollW = document.documentElement.scrollWidth;
          const winW = window.innerWidth;
          
          return JSON.stringify({
            headerHeight: headerRect ? Math.round(headerRect.height) : 0,
            hasTOCButton: !!tocButton,
            hasRail: !!rail,
            noOverflow: docScrollW <= winW + 1,
            hash: window.location.hash
          });
        })()`,
        returnByValue: true,
      });

      const data = parseCdpEval(evalRes, "Desktop 1440px");
      assert(
        data.headerHeight <= 68,
        `Desktop 1440px: Chiều cao header ${data.headerHeight}px <= 68px (không bị nhảy 3 dòng)`
      );
      assert(data.hasTOCButton, "Desktop 1440px: Nút Table of Contents hiển thị đúng.");
      assert(data.hasRail, "Desktop 1440px: Compact Chapter Rail hiển thị đúng.");
      assert(data.noOverflow, "Desktop 1440px: Không bị tràn ngang (no horizontal overflow).");
    });

    // 7B. Test Deep Link / Hash Clearance (#phong-chong-tham-nhung)
    await runCDPViewport(
      `${targetUrl}/#phong-chong-tham-nhung`,
      { width: 1440, height: 1000 },
      "Deep Link #phong-chong-tham-nhung",
      async (send) => {
        // Cho phép cuộn ổn định
        await new Promise((r) => setTimeout(r, 1500));

        const evalRes = await send("Runtime.evaluate", {
          expression: `(() => {
            const target = document.getElementById('phong-chong-tham-nhung');
            const header = document.querySelector('header');
            const headerBottom = header ? header.getBoundingClientRect().bottom : 64;
            const targetTop = target ? target.getBoundingClientRect().top : -999;
            
            return JSON.stringify({
              targetFound: !!target,
              headerBottom: Math.round(headerBottom),
              targetTop: Math.round(targetTop),
              isClearedBelowHeader: targetTop >= (headerBottom - 15) && targetTop <= (headerBottom + 120),
              activeSectionText: document.querySelector('[aria-controls="editorial-toc-drawer"]')?.textContent || ''
            });
          })()`,
          returnByValue: true,
        });

        const data = parseCdpEval(evalRes, "Deep Link");
        assert(data.targetFound, "Deep link: Tìm thấy section element #phong-chong-tham-nhung.");
        assert(
          data.isClearedBelowHeader,
          `Deep link: Section top (${data.targetTop}px) nằm ngay dưới header (${data.headerBottom}px), không bị che khuất.`
        );
      }
    );

    // 7C. Test Mobile 390px (touch targets, no overflow, drawer open & escape)
    await runCDPViewport(targetUrl, { width: 390, height: 844 }, "Mobile 390px", async (send) => {
      // 1. Kiểm tra touch targets & overflow
      const initRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const winW = window.innerWidth;
          const docScrollW = document.documentElement.scrollWidth;
          const headerButtons = Array.from(document.querySelectorAll('header button'));
          
          let minTouchW = 999;
          let minTouchH = 999;
          for (const btn of headerButtons) {
            const r = btn.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) {
              if (r.width < minTouchW) minTouchW = r.width;
              if (r.height < minTouchH) minTouchH = r.height;
            }
          }
          
          const scrollTopBtn = document.querySelector('button[aria-label="Lên đầu trang"]');
          const isScrollTopVisible = scrollTopBtn ? window.getComputedStyle(scrollTopBtn).display !== 'none' : false;

          return JSON.stringify({
            docScrollW,
            winW,
            noOverflow: docScrollW <= winW + 1,
            minTouchW: Math.round(minTouchW),
            minTouchH: Math.round(minTouchH),
            isScrollTopHidden: !isScrollTopVisible
          });
        })()`,
        returnByValue: true,
      });

      const initData = parseCdpEval(initRes, "Mobile 390px Init");
      assert(initData.noOverflow, `Mobile 390px: Không có horizontal overflow (scrollWidth: ${initData.docScrollW}px).`);
      assert(
        initData.minTouchW >= 40 && initData.minTouchH >= 40,
        `Mobile 390px: Các nút header đạt chuẩn touch target (~${initData.minTouchW}x${initData.minTouchH}px >= 40-44px).`
      );
      assert(
        initData.isScrollTopHidden,
        "Mobile 390px: Nút scroll-to-top được ẩn trên mobile (regression check)."
      );

      // 2. Mở TOC Drawer và kiểm tra body scroll lock + active item
      const clickRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const candidates = Array.from(document.querySelectorAll('button[aria-controls="editorial-toc-drawer"]'));
          const btn = candidates.find((candidate) => candidate.getAttribute('aria-expanded') === 'false');
          if (!btn) {
            return JSON.stringify({ clicked: false, count: candidates.length, labels: candidates.map((candidate) => candidate.getAttribute('aria-label')) });
          }
          btn.focus();
          btn.click();
          return JSON.stringify({ clicked: true, count: candidates.length, label: btn.getAttribute('aria-label') });
        })()`,
        returnByValue: true,
      });
      const clickData = parseCdpEval(clickRes, "Mobile Drawer Trigger");
      assert(clickData.clicked, `Mobile 390px: Tìm và kích hoạt TOC trigger (${clickData.count || 0} candidates).`);

      await new Promise((r) => setTimeout(r, 500));

      const drawerRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const drawer = document.getElementById('editorial-toc-drawer');
          const bodyOverflow = document.body.style.overflow;
          const activeItem = drawer ? drawer.querySelector('.bg-primary') : null;
          
          return JSON.stringify({
            drawerVisible: !!drawer,
            bodyOverflowLocked: bodyOverflow === 'hidden',
            hasActiveItem: !!activeItem
          });
        })()`,
        returnByValue: true,
      });

      const drawerData = parseCdpEval(drawerRes, "Mobile Drawer Open");
      assert(drawerData.drawerVisible, "Mobile 390px: TOC Drawer mở thành công.");
      assert(
        drawerData.bodyOverflowLocked,
        "Mobile 390px: Body scroll lock được kích hoạt khi drawer mở."
      );
      assert(
        drawerData.hasActiveItem,
        "Mobile 390px: Mục active trong drawer được làm nổi bật với nền đỏ/giấy chuẩn thiết kế."
      );

      // 3. Nhấn phím Escape để đóng drawer
      await send("Input.dispatchKeyEvent", {
        type: "rawKeyDown",
        windowsVirtualKeyCode: 27, // ESC
        key: "Escape",
      });
      await send("Input.dispatchKeyEvent", {
        type: "keyUp",
        windowsVirtualKeyCode: 27,
        key: "Escape",
      });

      await new Promise((r) => setTimeout(r, 400));

      const escRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const drawer = document.getElementById('editorial-toc-drawer');
          const bodyOverflow = document.body.style.overflow;
          return JSON.stringify({
            drawerClosed: !drawer,
            scrollUnlocked: bodyOverflow !== 'hidden'
          });
        })()`,
        returnByValue: true,
      });

      const escData = parseCdpEval(escRes, "Mobile Drawer Escape");
      assert(escData.drawerClosed, "Mobile 390px: Nhấn phím Escape đóng drawer thành công.");
      assert(escData.scrollUnlocked, "Mobile 390px: Body scroll được mở khóa sau khi đóng drawer.");
    });
  } finally {
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

async function runCDPViewport(url, viewport, label, callback) {
  const port = 9550 + Math.floor(Math.random() * 300);
  const userDataDir = `C:/Users/trong/AppData/Local/hermes/cache/scratch/edge-nav-${port}`;

  const edge = spawn(edgePath, [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    `--window-size=${viewport.width},${viewport.height}`,
    url,
  ]);

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      const res = await fetch(`http://localhost:${port}/json`);
      const pages = await res.json();
      const targetPage = pages.find((p) => p.type === "page" && p.url.startsWith(url));
      if (targetPage?.webSocketDebuggerUrl) {
        wsUrl = targetPage.webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    edge.kill();
    throw new Error(`Không thể kết nối Edge CDP cổng ${port}`);
  }

  const ws = new WebSocket(wsUrl);
  let msgId = 1;
  const pending = new Map();

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data);
      pending.delete(data.id);
    }
  };

  await new Promise((r) => (ws.onopen = r));

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
  });

  // Chờ trang tải và React hydrate hoàn tất
  for (let i = 0; i < 40; i++) {
    const checkRes = await send("Runtime.evaluate", {
      expression: "document.documentElement.getAttribute('data-hydrated') === 'true'",
      returnByValue: true,
    });
    const readyVal = checkRes?.result?.result?.value ?? checkRes?.result?.value;
    if (readyVal === true) break;
    await new Promise((r) => setTimeout(r, 200));
  }

  await new Promise((r) => setTimeout(r, 600));

  try {
    await callback(send);
  } finally {
    ws.close();
    edge.kill();
  }
}

async function main() {
  await runBrowserTests();

  console.log("\n=======================================================");
  if (failures > 0) {
    console.error(`[KẾT QUẢ]: THẤT BẠI với ${failures} lỗi.`);
    process.exit(1);
  } else {
    console.log("[KẾT QUẢ]: 100% KIỂM TRA NAVIGATION REGRESSION ĐẠT TIÊU CHUẨN!");
    process.exit(0);
  }
}

main().catch((err) => {
  console.error("Lỗi thực thi kiểm tra:", err);
  process.exit(1);
});
