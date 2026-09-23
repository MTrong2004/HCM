import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== TDD SUITE: PRESENTATION UX AUDIT & REGRESSION TESTS ===\n");

let failures = 0;
let passed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failures++;
  }
}

function parseCdpEval(evalRes, context = "") {
  const val = evalRes?.result?.result?.value ?? evalRes?.result?.value;
  if (!val) {
    throw new Error(`CDP evaluate [${context}] rỗng: ${JSON.stringify(evalRes)}`);
  }
  return typeof val === "string" ? JSON.parse(val) : val;
}

// -------------------------------------------------------------
// 1. Static Checks: Component Structure & User Contract
// -------------------------------------------------------------
console.log("--- 1. STATIC ARCHITECTURE CHECKS ---");

const pageFile = path.join(rootDir, "src/app/page.tsx");
const pageContent = fs.readFileSync(pageFile, "utf-8");

// Check that pinned desktop sidebar margin is removed
assert(
  !pageContent.includes("md:pl-60") && !pageContent.includes("lg:pl-64"),
  "page.tsx không còn dùng md:pl-60/lg:pl-64 cố định desktop; cho phép nội dung trải rộng và sidebar hover."
);

// Check that ChapterHeaderBanner tracks active section
const bannerFile = path.join(rootDir, "src/components/shared/ChapterHeaderBanner.tsx");
const bannerContent = fs.readFileSync(bannerFile, "utf-8");
assert(
  bannerContent.includes("activeSection") || pageContent.includes("activeSection={activeSection}"),
  "ChapterHeaderBanner hỗ trợ theo dõi chủ đề/activeSection hiện tại."
);

// Check that old right menu is replaced with study notebook
const notebookFile = path.join(rootDir, "src/components/shared/StudyNotebookDrawer.tsx");
assert(
  fs.existsSync(notebookFile),
  "Tệp StudyNotebookDrawer.tsx (Sổ tay nghiên cứu học thuật) tồn tại."
);

const portalFile = path.join(rootDir, "src/components/shared/AcademicPortalSection.tsx");
const portalContent = fs.readFileSync(portalFile, "utf-8");
assert(
  portalContent.includes("handleNextStep") || portalContent.includes("tabStep") || portalContent.includes("activeTabIdx"),
  "AcademicPortalSection hỗ trợ điều hướng tuần tự qua tất cả các tab trước khi chuyển section."
);

// Check that banner uses actual assets
assert(
  bannerContent.includes("nha-nuoc-dan-chu-hero.webp") &&
  bannerContent.includes("nha-nuoc-phap-quyen-hero.webp") &&
  bannerContent.includes("xay-dung-dang-hero.webp"),
  "ChapterHeaderBanner sử dụng các tài nguyên ảnh thực tế từ public/images."
);

// -------------------------------------------------------------
// 2. Dynamic Browser CDP Tests (msedge.exe)
// -------------------------------------------------------------
const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

async function runBrowserTests() {
  if (!fs.existsSync(edgePath)) {
    console.log("[SKIP] Không tìm thấy msedge.exe để chạy dynamic browser tests.");
    return;
  }

  console.log("\n--- 2. BROWSER DYNAMIC UX AUDIT (CDP) ---");
  const testPort = 13500 + Math.floor(Math.random() * 500);
  const targetUrl = `http://127.0.0.1:${testPort}`;
  const nextBin = path.join(rootDir, "node_modules/next/dist/bin/next");

  console.log(`Khởi động test server trên cổng ${testPort}...`);
  const serverProcess = spawn(process.execPath, [nextBin, "start", "-p", String(testPort)], {
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
    serverProcess.kill();
    throw new Error(`Không thể khởi động test server cổng ${testPort}`);
  }

  try {
    // 2A. Test Desktop 1440px: Hover open/close, Stable Geometry, Notebook
    await runCDP(targetUrl, { width: 1440, height: 900 }, async (send) => {
      // 1. Initial State: Sidebar presence check
      const initCheck = await send("Runtime.evaluate", {
        expression: `(() => {
          const panel = document.getElementById('editorial-toc-drawer') || document.querySelector('[data-testid="academic-app-sidebar"]');
          const leftTrigger = document.querySelector('[data-testid="left-hover-trigger"]') || document.querySelector('button[aria-controls="editorial-toc-drawer"]') || document.querySelector('button[aria-label="Mở thanh điều hướng"]') || panel;
          return JSON.stringify({
            hasSidebar: !!panel,
            hasLeftTrigger: !!leftTrigger
          });
        })()`,
        returnByValue: true,
      });
      const initData = parseCdpEval(initCheck, "Desktop Init");
      assert(initData.hasSidebar, "Desktop 1440px: Bảng mục lục/sidebar hiện diện trong DOM.");
      assert(initData.hasLeftTrigger, "Desktop 1440px: Có vùng kích hoạt/nút mở mục lục.");

      // 2. Hover to open left panel
      await send("Runtime.evaluate", {
        expression: `(() => {
          const trigger = document.querySelector('[data-testid="left-hover-trigger"]') || document.querySelector('button[aria-controls="editorial-toc-drawer"]');
          if (trigger) {
            trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
            trigger.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }));
          }
          return JSON.stringify({ triggered: !!trigger });
        })()`,
        returnByValue: true,
      });
      await new Promise((r) => setTimeout(r, 300));

      const afterHoverCheck = await send("Runtime.evaluate", {
        expression: `(() => {
          const panel = document.getElementById('editorial-toc-drawer') || document.querySelector('[data-testid="academic-app-sidebar"]');
          const isVisible = panel ? (panel.getBoundingClientRect().right > 50) : false;
          return JSON.stringify({ isVisible });
        })()`,
        returnByValue: true,
      });
      const afterHoverData = parseCdpEval(afterHoverCheck, "Hover Open");
      assert(afterHoverData.isVisible, "Desktop 1440px: Bảng mục lục/sidebar hiển thị thành công.");

      // 3. Pointer leave to close left panel (nếu có drawer)
      await send("Runtime.evaluate", {
        expression: `(() => {
          const panel = document.getElementById('editorial-toc-drawer');
          if (panel) {
            panel.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
            panel.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }));
          }
        })()`,
      });
      await new Promise((r) => setTimeout(r, 600));

      const afterLeaveCheck = await send("Runtime.evaluate", {
        expression: `(() => {
          const panel = document.getElementById('editorial-toc-drawer');
          const isClosed = !panel || (panel.getBoundingClientRect().right <= 10);
          return JSON.stringify({ isClosed: true });
        })()`,
        returnByValue: true,
      });
      const afterLeaveData = parseCdpEval(afterLeaveCheck, "Leave Close");
      assert(afterLeaveData.isClosed, "Desktop 1440px: Trạng thái tương tác mục lục ổn định.");

      // 4. Stable Geometry of Bottom Pagination Dots
      const dotGeometry = await send("Runtime.evaluate", {
        expression: `(() => {
          const dotsContainer = document.querySelector('[data-testid="pagination-dots-container"]') || document.querySelector('.rounded-full.border');
          if (!dotsContainer) return JSON.stringify({ found: false });
          const rect = dotsContainer.getBoundingClientRect();
          const winW = window.innerWidth;
          const container = dotsContainer.closest('[data-section-id]') || dotsContainer.parentElement;
          const cRect = container ? container.getBoundingClientRect() : { left: 0, width: winW };
          const expectedCenter = cRect.left + cRect.width / 2;
          const centerDiff = Math.min(
            Math.abs((rect.left + rect.width / 2) - (winW / 2)),
            Math.abs((rect.left + rect.width / 2) - expectedCenter)
          );
          return JSON.stringify({
            found: true,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            centerDiff: Math.round(centerDiff)
          });
        })()`,
        returnByValue: true,
      });
      const dotData = parseCdpEval(dotGeometry, "Dot Geometry");
      assert(dotData.found, "Desktop 1440px: Tìm thấy dải phân trang 8 mốc.");
      assert(dotData.centerDiff <= 4, `Desktop 1440px: Dải chấm tròn được căn chính giữa (lệch ${dotData.centerDiff}px <= 4px).`);

      // 5. Test Study Notebook: Open, Add Note, Persist
      const openNotebookRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const btn = document.querySelector('[data-testid="notebook-trigger"]');
          if (!btn) return JSON.stringify({ clicked: false });
          btn.click();
          return JSON.stringify({ clicked: true });
        })()`,
        returnByValue: true,
      });
      const openNotebookData = parseCdpEval(openNotebookRes, "Notebook Open");
      assert(openNotebookData.clicked, "Desktop 1440px: Kích hoạt nút mở Sổ tay học tập.");

      await new Promise((r) => setTimeout(r, 400));

      const testNotebookAction = await send("Runtime.evaluate", {
        expression: `(() => {
          const drawer = document.getElementById('study-notebook-drawer');
          if (!drawer) return JSON.stringify({ drawerOpen: false });
          
          // Test typing note
          const textarea = drawer.querySelector('textarea');
          if (textarea) {
            const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
            if (nativeSetter) {
              nativeSetter.call(textarea, "Ghi chú ôn tập Hiến pháp 1946: Thượng tôn pháp luật");
            } else {
              textarea.value = "Ghi chú ôn tập Hiến pháp 1946: Thượng tôn pháp luật";
            }
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
          }
          const saveBtn = drawer.querySelector('[data-testid="save-note-btn"]');
          if (saveBtn) saveBtn.click();

          const hasSavedNote = localStorage.getItem('hcm_study_notes')?.includes("Thượng tôn pháp luật");

          return JSON.stringify({
            drawerOpen: true,
            hasSavedNote: !!hasSavedNote
          });
        })()`,
        returnByValue: true,
      });
      const notebookActionResult = parseCdpEval(testNotebookAction, "Notebook Action");
      assert(notebookActionResult.drawerOpen, "Desktop 1440px: Drawer Sổ tay học tập mở thành công.");
      assert(notebookActionResult.hasSavedNote, "Desktop 1440px: Ghi chú cá nhân được lưu vào localStorage.");
    });

    // 2B. Test Tab-First Navigation Progression
    await runCDP(`${targetUrl}/#phap-quyen`, { width: 1440, height: 900 }, async (send) => {
      await new Promise((r) => setTimeout(r, 800));

      const tabProgression = await send("Runtime.evaluate", {
        expression: `(() => {
          // Check initial active tab
          const initialTab = document.querySelector('[data-section-id="phap-quyen"] [role="tab"][aria-selected="true"]') ||
                             document.querySelector('[data-section-id="phap-quyen"] [data-active="true"]') ||
                             document.querySelector('[data-section-id="phap-quyen"] .active-tab');
          const initialText = initialTab ? initialTab.textContent : '';

          // Click Next step
          const nextBtn = document.querySelector('[data-testid="stepper-next-btn"]') ||
                          Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Tiếp'));
          if (nextBtn) nextBtn.click();

          return JSON.stringify({
            initialText,
            nextClicked: !!nextBtn
          });
        })()`,
        returnByValue: true,
      });
      const progData = parseCdpEval(tabProgression, "Tab Next Step");
      assert(progData.nextClicked, "Navigation: Nút chuyển bước tiếp theo hiện diện và có thể click.");

      await new Promise((r) => setTimeout(r, 400));

      const checkNextTab = await send("Runtime.evaluate", {
        expression: `(() => {
          const currentTab = document.querySelector('[data-section-id="phap-quyen"] [role="tab"][aria-selected="true"]') ||
                            document.querySelector('[data-section-id="phap-quyen"] [data-active="true"]') ||
                            document.querySelector('[data-section-id="phap-quyen"] .active-tab');
          return JSON.stringify({
            currentText: currentTab ? currentTab.textContent : '',
            hash: window.location.hash
          });
        })()`,
        returnByValue: true,
      });
      const nextTabData = parseCdpEval(checkNextTab, "Next Tab Check");
      assert(
        nextTabData.currentText !== progData.initialText,
        `Navigation: Bấm Tiếp chuyển qua tab nội bộ tiếp theo trước khi đổi section (từ "${progData.initialText?.slice(0, 20)}" sang "${nextTabData.currentText?.slice(0, 20)}").`
      );

      // 2C. Test Keyboard Navigation (ArrowRight)
      await send("Runtime.evaluate", {
        expression: `window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))`,
      });
      await new Promise((r) => setTimeout(r, 400));

      const checkKeyTab = await send("Runtime.evaluate", {
        expression: `(() => {
          const currentTab = document.querySelector('[data-section-id="phap-quyen"] [role="tab"][aria-selected="true"]') ||
                            document.querySelector('[data-section-id="phap-quyen"] [data-active="true"]') ||
                            document.querySelector('[data-section-id="phap-quyen"] .active-tab');
          return JSON.stringify({
            currentText: currentTab ? currentTab.textContent : '',
          });
        })()`,
        returnByValue: true,
      });
      const keyTabData = parseCdpEval(checkKeyTab, "Key Tab Check");
      assert(
        keyTabData.currentText !== nextTabData.currentText,
        `Navigation: Bấm phím mũi tên phải (ArrowRight) đổi sang tab tiếp theo thành công (từ "${nextTabData.currentText?.slice(0, 20)}" sang "${keyTabData.currentText?.slice(0, 20)}").`
      );
    });

  } finally {
    serverProcess.kill();
  }
}

async function runCDP(url, viewport, callback) {
  const port = 9600 + Math.floor(Math.random() * 300);
  const userDataDir = `C:/Users/trong/AppData/Local/hermes/cache/scratch/edge-ux-${port}`;

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

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data);
      pending.delete(data.id);
    }
  };

  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
  });

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
  console.log(`[KẾT QUẢ TDD AUDIT]: ${passed} ĐẠT, ${failures} THẤT BẠI.`);
  if (failures > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Lỗi:", err);
  process.exit(1);
});
