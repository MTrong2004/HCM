import { spawn } from "node:child_process";

const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

async function checkViewport(viewport) {
  const port = 9500 + Math.floor(Math.random() * 400);
  const userDataDir = `C:/Users/trong/AppData/Local/hermes/cache/scratch/edge-overflow-${port}`;

  const edge = spawn(edgePath, [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    `--window-size=${viewport.width},${viewport.height}`,
    "http://localhost:3000",
  ]);

  let targetPage;
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      const res = await fetch(`http://localhost:${port}/json`);
      const pages = await res.json();
      targetPage = pages.find(
        (p) => p.type === "page" || (p.url && p.url.includes("localhost:3000"))
      );
      if (targetPage?.webSocketDebuggerUrl) break;
    } catch {}
  }

  if (!targetPage?.webSocketDebuggerUrl) {
    edge.kill();
    throw new Error(`Cannot connect to Edge CDP on port ${port}`);
  }

  const ws = new WebSocket(targetPage.webSocketDebuggerUrl);
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

  // Set device metrics override to guarantee exact viewport simulation
  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
  });

  await new Promise((r) => setTimeout(r, 800));

  const evalRes = await send("Runtime.evaluate", {
    expression: `(() => {
      const doc = document.documentElement;
      const body = document.body;
      const winW = window.innerWidth;

      const overflowingElements = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'NOSCRIPT') continue;
        const rect = el.getBoundingClientRect();
        // Check elements that bleed off-screen by more than 1px
        if (rect.right > winW + 1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: (el.className?.slice ? el.className.slice(0, 60) : ''),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      }

      return JSON.stringify({
        viewportWidth: winW,
        docScrollWidth: doc.scrollWidth,
        bodyScrollWidth: body.scrollWidth,
        overflowingCount: overflowingElements.length,
        firstOverflow: overflowingElements[0] || null
      });
    })()`,
    returnByValue: true,
  });

  ws.close();
  edge.kill();

  const rawVal = evalRes.result?.result?.value || evalRes.result?.value;
  const result = JSON.parse(rawVal || "{}");
  return result;
}

async function run() {
  console.log("=== REGRESSION TEST: VIEWPORT HORIZONTAL OVERFLOW ===");
  const viewports = [
    { name: "Mobile iPhone 12/13/14 (390x844)", width: 390, height: 844 },
    { name: "Mobile Compact (375x667)", width: 375, height: 667 },
    { name: "Mobile Large (412x915)", width: 412, height: 915 },
    { name: "Desktop Standard (1440x900)", width: 1440, height: 900 },
  ];

  let hasError = false;
  for (const vp of viewports) {
    try {
      const res = await checkViewport(vp);
      const pass =
        res.docScrollWidth <= vp.width &&
        res.bodyScrollWidth <= vp.width &&
        res.overflowingCount === 0;

      if (pass) {
        console.log(
          `[PASS] ${vp.name}: doc=${res.docScrollWidth}px, body=${res.bodyScrollWidth}px, overflowing=0`
        );
      } else {
        hasError = true;
        console.error(
          `[FAIL] ${vp.name}: doc=${res.docScrollWidth}px, body=${res.bodyScrollWidth}px, overflowing=${res.overflowingCount}`,
          res.firstOverflow
        );
      }
    } catch (e) {
      hasError = true;
      console.error(`[ERROR] ${vp.name}:`, e.message);
    }
  }

  if (hasError) {
    console.error("Test layout overflow: FAILED");
    process.exit(1);
  } else {
    console.log("Test layout overflow: PASSED (All viewports fit within 0px overflow).");
  }
}

run();
