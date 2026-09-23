"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import {
  X,
  ChevronLeft,
  ChevronRight,
  QrCode,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  playPageTurn,
  playSubtleClick,
  toggleSound,
  isSoundMuted,
} from "@/lib/sound-effects";

interface BookPageData {
  chapter: string;
  title: string;
  quote: string;
  author: string;
  academicNote: string;
  content: string[];
  articleSnippet: string;
}

const BOOK_PAGES: BookPageData[] = [
  {
    chapter: "BÌA SÁCH & LỜI TỰA",
    title: "Hiến pháp Năm 1946 • Bản Tuyên ngôn Pháp quyền Dân chủ",
    quote: "Nước Việt Nam là một nước dân chủ cộng hòa. Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam, không phân biệt nòi giống, gái trai, giàu nghèo, giai cấp, tôn giáo.",
    author: "Điều thứ 1, Hiến pháp năm 1946",
    academicNote: "Văn bản lập hiến đầu tiên của nước Việt Nam mới do Chủ tịch Hồ Chí Minh trực tiếp làm Trưởng ban soạn thảo, xác lập mô hình Nhà nước của nhân dân đầu tiên tại Đông Nam Á.",
    content: [
      "Ngày 9 tháng 11 năm 1946, Quốc hội khóa I nước Việt Nam Dân chủ Cộng hòa đã thông qua bản Hiến pháp lịch sử.",
      "Hiến pháp gồm 7 chương, 70 điều, kết tinh tinh hoa tư tưởng pháp quyền tiến bộ của nhân loại và truyền thống yêu nước của dân tộc.",
      "Đặt nền móng pháp lý vững chắc cho chế độ dân chủ, bảo vệ quyền con người và quyền công dân.",
    ],
    articleSnippet: "ĐIỀU 1: Nước Việt Nam là một nước dân chủ cộng hòa. Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam.",
  },
  {
    chapter: "CHƯƠNG I: CHÍNH THỂ",
    title: "Chính thể Dân chủ • Quyền lực Tối cao nơi Dân",
    quote: "Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Công việc đổi mới, xây dựng là trách nhiệm của dân.",
    author: "Hồ Chí Minh (1949)",
    academicNote: "Xác lập dứt khoát chủ quyền thuộc về nhân dân, xóa bỏ hoàn toàn tàn dư phong kiến và thực dân.",
    content: [
      "Quyền bính quốc gia không thuộc về cá nhân hay phe nhóm đặc quyền nào, mà thuộc về toàn thể quốc dân đồng bào.",
      "Cán bộ từ Chủ tịch nước tới nhân viên đều là công bộc nhận sự ủy thác của nhân dân để phục vụ lợi ích chung.",
      "Dân có quyền chất vấn, kiểm tra và bãi miễn những đại biểu không còn xứng đáng với sự tín nhiệm.",
    ],
    articleSnippet: "ĐIỀU 4: Đất nước Việt Nam là một khối thống nhất Trung Nam Bắc không thể phân chia.",
  },
  {
    chapter: "CHƯƠNG II: NGHĨA VỤ & QUYỀN LỢI CÔNG DÂN",
    title: "Nhân quyền & Dân quyền • Bình đẳng Tuyệt đối",
    quote: "Mỗi một người dân Việt Nam, không phân biệt gái trai, giàu nghèo, tôn giáo, đều có quyền tự do, bình đẳng và nghĩa vụ thiêng liêng với Tổ quốc.",
    author: "Tuyên ngôn Lập quốc",
    academicNote: "Một trong những bản hiến pháp tiến bộ nhất đương thời khi sớm ghi nhận quyền bình đẳng nam nữ và quyền phổ thông đầu phiếu.",
    content: [
      "Tất cả công dân Việt Nam đều bình đẳng trước pháp luật, được tham gia chính quyền và công cuộc kiến thiết quốc gia.",
      "Phụ nữ được hưởng mọi quyền bính bình đẳng với nam giới về mọi phương diện chính trị, kinh tế, văn hóa và xã hội.",
      "Bảo đảm các quyền tự do ngôn luận, xuất bản, tổ chức, hội họp, tín ngưỡng và cư trú.",
    ],
    articleSnippet: "ĐIỀU 9: Đàn bà ngang quyền với đàn ông về mọi phương diện.",
  },
  {
    chapter: "CHƯƠNG III: CƠ CẤU QUYỀN LỰC",
    title: "Nghị viện Nhân dân • Cơ quan Quyền lực Cao nhất",
    quote: "Quốc hội là cơ quan do toàn dân bầu ra bằng lối đầu phiếu phổ thông, kín, đại diện chân chính cho ý chí của quốc dân.",
    author: "Hồ Chí Minh",
    academicNote: "Thiết chế nghị viện một viện tập trung quyền lực tối cao nhưng kiểm soát chặt chẽ các nhánh hành pháp và tư pháp.",
    content: [
      "Nghị viện nhân dân giải quyết mọi vấn đề chung cho toàn quốc, đặt ra pháp luật, biểu quyết ngân sách.",
      "Thực hiện quyền giám sát tối cao đối với Chính phủ và các thành viên nội các.",
      "Bầu Ban Thường trực để thay mặt Nghị viện trong thời gian không nhóm họp.",
    ],
    articleSnippet: "ĐIỀU 22: Nghị viện nhân dân là cơ quan có quyền cao nhất của nước Việt Nam Dân chủ Cộng hòa.",
  },
  {
    chapter: "CHƯƠNG IV: CHÍNH PHỦ & NỀN HÀNH CHÍNH",
    title: "Chính phủ Liêm chính • Người Đầy tớ của Dân",
    quote: "Quan tham là do dân dại, dân không dại thì quan không liêm cũng hóa ra liêm. Dân biết quyền mình thì quan không thể lộng hành.",
    author: "Hồ Chí Minh (1945)",
    academicNote: "Triết lý kiểm soát quyền lực từ gốc rễ: nâng cao dân trí, bồi dưỡng dũng khí đấu tranh của nhân dân để ngăn ngừa quan liêu, tham nhũng.",
    content: [
      "Chính phủ là cơ quan hành chính cao nhất toàn quốc, chấp hành nghị quyết của Nghị viện và pháp luật.",
      "Chủ tịch nước chọn Thủ tướng và các Bộ trưởng để Nghị viện nhân dân phê chuẩn.",
      "Kiên quyết loại bỏ ba thứ giặc nội xâm: Tham ô, Lãng phí, Quan liêu trong mọi ngóc ngách của nền hành chính.",
    ],
    articleSnippet: "ĐIỀU 43: Chính phủ là cơ quan hành chính cao nhất của toàn quốc.",
  },
  {
    chapter: "CHƯƠNG V: TÒA ÁN NHÂN DÂN",
    title: "Pháp quyền Nhân nghĩa • Độc lập Tư pháp & Công lý",
    quote: "Phải giữ cho thật công bằng, công chính. Trong khi xét xử, phải đứng về phía nhân dân, thấu hiểu con người, lấy khoan hồng và cảm hóa làm đầu.",
    author: "Thư gửi Hội nghị Tư pháp toàn quốc",
    academicNote: "Nguyên tắc tư pháp độc lập kết hợp giữa sự nghiêm minh của luật pháp và lòng nhân đạo cao cả của dân tộc Việt Nam.",
    content: [
      "Cơ quan tư pháp gồm Tòa án tối cao, các Tòa án phúc thẩm, các Tòa án đệ nhị cấp và sơ cấp.",
      "Trong khi xét xử, các Thẩm phán chỉ tuân theo pháp luật, các cơ quan khác không được can thiệp.",
      "Quyền bào chữa của bị cáo được bảo đảm trong tất cả các phiên xét xử.",
    ],
    articleSnippet: "ĐIỀU 69: Trong khi xét xử, các Thẩm phán chỉ tuân theo pháp luật, các cơ quan khác không được can thiệp.",
  },
  {
    chapter: "LỜI KẾT & DI SẢN",
    title: "Khát vọng Hùng cường • Giá trị Bất hủ",
    quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    author: "Chủ tịch Hồ Chí Minh",
    academicNote: "Tư tưởng Hồ Chí Minh về Nhà nước và Pháp luật tiếp tục là kim chỉ nam cho sự nghiệp xây dựng Nhà nước pháp quyền XHCN Việt Nam hiện đại.",
    content: [
      "Hiến pháp 1946 để lại bài học trường tồn về việc kết hợp sức mạnh đại đoàn kết dân tộc và tính tối thượng của pháp luật.",
      "Thế hệ trẻ ngày nay kế thừa di sản với tinh thần sống, học tập và làm việc theo Hiến pháp và Pháp luật.",
      "Xây dựng một nền quản trị quốc gia minh bạch, liêm chính, vì nhân dân phụng sự.",
    ],
    articleSnippet: "DI SẢN TRƯỜNG TỒN: Tư tưởng Hồ Chí Minh soi sáng con đường xây dựng Nhà nước Pháp quyền Việt Nam.",
  },
];

interface Book3DViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Book3DViewerModal({ isOpen, onClose }: Book3DViewerModalProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [soundMuted, setSoundMuted] = useState(() => isSoundMuted());

  // Three.js Book Scene Refs
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const bookGroupRef = useRef<THREE.Group | null>(null);
  const leftPageMeshRef = useRef<THREE.Mesh | null>(null);
  const rightPageMeshRef = useRef<THREE.Mesh | null>(null);
  const flippingPageRef = useRef<THREE.Mesh | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const bookRotation = useRef({ x: 0.35, y: -0.15 });
  const targetRotation = useRef({ x: 0.35, y: -0.15 });
  const flipProgress = useRef(1); // 1 = settled

  // Initialize Three.js Book Canvas
  useEffect(() => {
    if (!isOpen || !canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient and directional lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.2);
    scene.add(ambientLight);

    const goldSpotLight = new THREE.DirectionalLight(0xffdf99, 2.5);
    goldSpotLight.position.set(5, 8, 6);
    goldSpotLight.castShadow = true;
    scene.add(goldSpotLight);

    const rimLight = new THREE.DirectionalLight(0x8b1e1e, 1.5);
    rimLight.position.set(-6, -4, -3);
    scene.add(rimLight);

    // Book 3D Group
    const bookGroup = new THREE.Group();
    bookGroupRef.current = bookGroup;
    scene.add(bookGroup);

    // Helper: Create Parchment Texture Canvas
    function createPageCanvas(titleText: string, bodyText: string, isCover = false): THREE.CanvasTexture {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 1400;
      const ctx = c.getContext("2d")!;

      const computedHeading = typeof window !== "undefined"
        ? getComputedStyle(document.documentElement).getPropertyValue("--font-heading").trim() || "'Playfair Display', Georgia, serif"
        : "'Playfair Display', Georgia, serif";
      const computedBody = typeof window !== "undefined"
        ? getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim() || "Inter, -apple-system, sans-serif"
        : "Inter, -apple-system, sans-serif";

      if (isCover) {
        // Red Velvet Leather Cover with Gold Ornaments
        const grad = ctx.createLinearGradient(0, 0, 1024, 1400);
        grad.addColorStop(0, "#7A1616");
        grad.addColorStop(0.5, "#8B1E1E");
        grad.addColorStop(1, "#520E0E");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1024, 1400);

        // Gold border
        ctx.strokeStyle = "#D4AF37";
        ctx.lineWidth = 14;
        ctx.strokeRect(40, 40, 944, 1320);

        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        ctx.lineWidth = 4;
        ctx.strokeRect(60, 60, 904, 1280);

        // Gold star emblem
        ctx.fillStyle = "#FFDF00";
        ctx.beginPath();
        const cx = 512, cy = 400, spikes = 5, outerR = 90, innerR = 38;
        let rot = (Math.PI / 2) * 3;
        const step = Math.PI / spikes;
        ctx.moveTo(cx, cy - outerR);
        for (let i = 0; i < spikes; i++) {
          ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
          rot += step;
          ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
          rot += step;
        }
        ctx.closePath();
        ctx.fill();

        // Titles
        ctx.fillStyle = "#FFF2B2";
        ctx.font = `bold 56px ${computedHeading}, serif`;
        ctx.textAlign = "center";
        ctx.fillText("HIẾN PHÁP NĂM 1946", 512, 600);

        ctx.fillStyle = "#D4AF37";
        ctx.font = `bold 32px ${computedBody}, sans-serif`;
        ctx.fillText("VIỆT NAM DÂN CHỦ CỘNG HÒA", 512, 670);

        ctx.fillStyle = "rgba(255, 245, 230, 0.8)";
        ctx.font = `italic 28px ${computedHeading}, serif`;
        ctx.fillText("Tư tưởng Hồ Chí Minh về Nhà nước & Pháp quyền", 512, 850);

        ctx.fillStyle = "#D4AF37";
        ctx.font = `24px ${computedBody}, sans-serif`;
        ctx.fillText("• TỔNG TUYỂN CỬ ĐẦU TIÊN 6-1-1946 •", 512, 1200);
      } else {
        // Parchment paper
        ctx.fillStyle = "#F8F4EC";
        ctx.fillRect(0, 0, 1024, 1400);

        // Subtle vintage paper border
        ctx.strokeStyle = "rgba(139, 30, 30, 0.25)";
        ctx.lineWidth = 4;
        ctx.strokeRect(50, 50, 924, 1300);

        // Chapter tag
        ctx.fillStyle = "#8B1E1E";
        ctx.font = `bold 26px ${computedBody}, sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText(titleText.slice(0, 40).toUpperCase(), 90, 130);

        // Underline
        ctx.fillStyle = "#D4AF37";
        ctx.fillRect(90, 150, 844, 4);

        // Body Lines
        ctx.fillStyle = "#2D221E";
        ctx.font = `32px ${computedHeading}, serif`;
        const words = bodyText.split(" ");
        let line = "";
        let y = 230;
        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > 840 && i > 0) {
            ctx.fillText(line, 90, y);
            line = words[i] + " ";
            y += 54;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, 90, y);

        // Decorative seal
        ctx.strokeStyle = "rgba(168, 39, 39, 0.6)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(820, 1180, 80, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(168, 39, 39, 0.8)";
        ctx.font = `bold 22px ${computedHeading}, serif`;
        ctx.textAlign = "center";
        ctx.fillText("QUỐC ẤN", 820, 1175);
        ctx.font = `16px ${computedBody}, sans-serif`;
        ctx.fillText("1946", 820, 1205);
      }

      const texture = new THREE.CanvasTexture(c);
      texture.anisotropy = 8;
      return texture;
    }

    // Geometry parameters
    const pageWidth = 2.4;
    const pageHeight = 3.2;
    const bookThickness = 0.35;

    // Hardcover Back/Spine base
    const spineGeo = new THREE.BoxGeometry(0.2, pageHeight * 1.04, bookThickness);
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x5a1010,
      roughness: 0.45,
      metalness: 0.25,
    });
    const spineMesh = new THREE.Mesh(spineGeo, coverMat);
    spineMesh.position.set(0, 0, -bookThickness / 2);
    bookGroup.add(spineMesh);

    // Left Page Mesh (Fixed Open Left)
    const leftPageGeo = new THREE.PlaneGeometry(pageWidth, pageHeight);
    const leftCoverTex = createPageCanvas("LỜI NÓI ĐẦU", BOOK_PAGES[0].quote, false);
    const leftPageMat = new THREE.MeshStandardMaterial({
      map: leftCoverTex,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
    const leftPageMesh = new THREE.Mesh(leftPageGeo, leftPageMat);
    leftPageMesh.position.set(-pageWidth / 2, 0, 0.02);
    leftPageMeshRef.current = leftPageMesh;
    bookGroup.add(leftPageMesh);

    // Right Page Mesh (Fixed Open Right)
    const rightPageGeo = new THREE.PlaneGeometry(pageWidth, pageHeight);
    const rightCoverTex = createPageCanvas("ĐIỀU KHOẢN LẬP QUỐC", BOOK_PAGES[0].content.join(" "), false);
    const rightPageMat = new THREE.MeshStandardMaterial({
      map: rightCoverTex,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
    const rightPageMesh = new THREE.Mesh(rightPageGeo, rightPageMat);
    rightPageMesh.position.set(pageWidth / 2, 0, 0.02);
    rightPageMeshRef.current = rightPageMesh;
    bookGroup.add(rightPageMesh);

    // Flipping Animated Sheet
    const flipGeo = new THREE.PlaneGeometry(pageWidth, pageHeight, 16, 2);
    flipGeo.translate(pageWidth / 2, 0, 0); // Rotate around left edge
    const flipMat = new THREE.MeshStandardMaterial({
      map: rightCoverTex,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
    const flippingPage = new THREE.Mesh(flipGeo, flipMat);
    flippingPage.position.set(0, 0, 0.05);
    flippingPage.visible = false;
    flippingPageRef.current = flippingPage;
    bookGroup.add(flippingPage);

    // Golden dust particles floating around the book
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffdf88,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse drag handlers
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePos.current.x;
      const deltaY = e.clientY - prevMousePos.current.y;
      prevMousePos.current = { x: e.clientX, y: e.clientY };

      targetRotation.current.y += deltaX * 0.008;
      targetRotation.current.x += deltaY * 0.008;
      targetRotation.current.x = Math.max(-0.4, Math.min(0.8, targetRotation.current.x));
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth rotate towards target
      bookRotation.current.x += (targetRotation.current.x - bookRotation.current.x) * 0.1;
      bookRotation.current.y += (targetRotation.current.y - bookRotation.current.y) * 0.1;

      if (bookGroupRef.current) {
        bookGroupRef.current.rotation.x = bookRotation.current.x;
        bookGroupRef.current.rotation.y = bookRotation.current.y;
        // Subtle floating bob
        bookGroupRef.current.position.y = Math.sin(elapsed * 1.5) * 0.08;
      }

      // Rotate particles
      particleSystem.rotation.y = elapsed * 0.04;

      // Handle page flip curve animation
      if (flipProgress.current < 1 && flippingPageRef.current) {
        flipProgress.current += delta * 2.2;
        if (flipProgress.current >= 1) {
          flipProgress.current = 1;
          flippingPageRef.current.visible = false;
        } else {
          flippingPageRef.current.visible = true;
          // Rotate from 0 to -PI
          const angle = -Math.PI * flipProgress.current;
          flippingPageRef.current.rotation.y = angle;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      domEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      coverMat.dispose();
      leftPageGeo.dispose();
      rightPageGeo.dispose();
      flipGeo.dispose();
    };
  }, [isOpen]);

  // Handle Page Turn
  const goToPage = useCallback((newIndex: number) => {
    if (newIndex < 0 || newIndex >= BOOK_PAGES.length || newIndex === currentPage) return;
    playPageTurn();
    setCurrentPage(newIndex);
    flipProgress.current = 0; // Trigger page flip animation
  }, [currentPage]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        goToPage(currentPage + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPage(currentPage - 1);
      } else if (e.key === "Escape") {
        if (showQR) setShowQR(false);
        else onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPage, showQR, onClose, goToPage]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    playSubtleClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundMuted(!nextState);
    if (nextState) playSubtleClick();
  };

  if (!isOpen) return null;

  const page = BOOK_PAGES[currentPage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0806]/95 backdrop-blur-xl animate-in fade-in duration-300 select-none overflow-hidden"
    >
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={canvasContainerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing z-0"
      />

      {/* Floating HUD Overlays */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 sm:p-8 z-10">
        {/* Top Header Bar */}
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#8B1E1E]/80 border border-[#D4AF37]/50 text-[#FFF2B2] shadow-lg">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              SÁCH 3D TƯƠNG TÁC • HIẾN PHÁP 1946
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-paper-dark/70">
              Kéo chuột để xoay 3D • Cuộn phóng to
            </span>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            {/* Toggle Sound */}
            <button
              onClick={handleSoundToggle}
              className={`p-2.5 rounded-full border transition-all ${
                soundMuted
                  ? "bg-dark-surface/80 border-accent/20 text-ink-muted hover:text-paper-light"
                  : "bg-[#8B1E1E]/80 border-accent/60 text-[#FFF2B2] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              }`}
              title={soundMuted ? "Bật âm thanh hiệu ứng" : "Tắt âm thanh hiệu ứng"}
              aria-label="Bật tắt âm thanh"
            >
              {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Share QR Modal Trigger */}
            <button
              onClick={() => {
                playSubtleClick();
                setShowQR(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-[#1F1714]/90 border border-[#D4AF37]/40 text-[#FFF2B2] hover:bg-[#8B1E1E]/50 hover:border-[#D4AF37] transition-all"
              title="Chia sẻ mã QR"
            >
              <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Chia Sẻ QR</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-full bg-[#1F1714]/90 border border-[#D4AF37]/40 text-[#FFF2B2] hover:border-[#D4AF37] transition-all"
              title="Toàn màn hình"
              aria-label="Toàn màn hình"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Modal */}
            <button
              onClick={() => {
                playSubtleClick();
                onClose();
              }}
              className="p-2.5 rounded-full bg-[#8B1E1E] border border-[#D4AF37] text-white hover:bg-[#A82020] transition-transform hover:scale-105 shadow-lg"
              title="Đóng sách 3D"
              aria-label="Đóng sách 3D"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Left Floating Story Card (Glassmorphism HUD) */}
        <div className="pointer-events-auto hidden md:block max-w-sm w-full bg-[#16100C]/85 backdrop-blur-md border border-[#D4AF37]/40 rounded-2xl p-6 text-paper-light shadow-[0_16px_45px_rgba(0,0,0,0.8)] animate-in slide-in-from-left duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              {page.chapter}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug">
            {page.title}
          </h3>

          <blockquote className="border-l-2 border-[#D4AF37] pl-3 py-1 my-3 text-xs italic text-[#EDE3D5] font-serif leading-relaxed">
            &ldquo;{page.quote}&rdquo;
            <footer className="mt-1 text-[10px] font-sans font-semibold text-[#FFF2B2] not-italic">
              — {page.author}
            </footer>
          </blockquote>

          <div className="p-3 rounded-lg bg-[#8B1E1E]/30 border border-[#8B1E1E]/60 my-3">
            <strong className="block text-[11px] font-sans font-bold text-[#FFF2B2] uppercase tracking-wide mb-1">
              Ý nghĩa học thuật:
            </strong>
            <p className="text-xs text-[#E6D8C8] leading-relaxed">
              {page.academicNote}
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-accent/20 text-[11px] font-mono text-accent-light">
            {page.articleSnippet}
          </div>
        </div>

        {/* Bottom Interactive Navigation Slider */}
        <div className="pointer-events-auto self-center flex items-center gap-2 sm:gap-3 bg-[#16100C]/90 backdrop-blur-xl border border-[#D4AF37]/40 rounded-full px-3 py-2 sm:px-6 sm:py-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
          {/* Previous Button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-[#8B1E1E] text-white border border-[#D4AF37]/60 hover:bg-[#A82020] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TRƯỚC</span>
          </button>

          {/* Page Indicator Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {BOOK_PAGES.map((p, idx) => (
              <button
                key={p.chapter}
                onClick={() => goToPage(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  idx === currentPage
                    ? "bg-gradient-to-r from-[#8B1E1E] to-[#B82222] text-[#FFFDF0] border border-[#D4AF37] shadow-[0_0_12px_rgba(139,30,30,0.6)]"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-[#D4AF37]/50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === currentPage ? "bg-[#FFDF00]" : "bg-white/40"
                  }`}
                />
                <span className="hidden lg:inline text-[11px]">{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === BOOK_PAGES.length - 1}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-[#8B1E1E] text-white border border-[#D4AF37]/60 hover:bg-[#A82020] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <span className="hidden sm:inline">TIẾP THEO</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Share QR Modal Popup (Like FPT Demo) */}
      {showQR && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative max-w-sm w-full bg-[#18120D] text-white border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-serif text-xl font-bold text-[#FFF2B2]">
              QUÉT MÃ QR TRẢI NGHIỆM
            </h4>
            <p className="text-xs text-paper-dark">
              Quét mã để mở sách 3D Hiến pháp 1946 và bài thuyết trình trên điện thoại thông minh:
            </p>

            {/* Generated Clean Vector QR Code Representation */}
            <div className="inline-block p-4 rounded-2xl bg-white shadow-inner">
              <svg viewBox="0 0 100 100" className="w-44 h-44 text-black">
                {/* 3 Position Detection Patterns */}
                <rect x="10" y="10" width="28" height="28" fill="black" rx="4" />
                <rect x="14" y="14" width="20" height="20" fill="white" rx="2" />
                <rect x="18" y="18" width="12" height="12" fill="black" rx="1" />

                <rect x="62" y="10" width="28" height="28" fill="black" rx="4" />
                <rect x="66" y="14" width="20" height="20" fill="white" rx="2" />
                <rect x="70" y="18" width="12" height="12" fill="black" rx="1" />

                <rect x="10" y="62" width="28" height="28" fill="black" rx="4" />
                <rect x="14" y="66" width="20" height="20" fill="white" rx="2" />
                <rect x="18" y="70" width="12" height="12" fill="black" rx="1" />

                {/* Data Matrix Dots */}
                <rect x="42" y="15" width="4" height="4" fill="black" />
                <rect x="50" y="15" width="4" height="4" fill="black" />
                <rect x="46" y="25" width="4" height="4" fill="black" />
                <rect x="42" y="35" width="4" height="4" fill="black" />
                <rect x="54" y="35" width="4" height="4" fill="black" />

                <rect x="15" y="45" width="4" height="4" fill="black" />
                <rect x="25" y="45" width="4" height="4" fill="black" />
                <rect x="35" y="45" width="4" height="4" fill="black" />
                <rect x="45" y="45" width="4" height="4" fill="black" />
                <rect x="55" y="45" width="4" height="4" fill="black" />
                <rect x="65" y="45" width="4" height="4" fill="black" />
                <rect x="75" y="45" width="4" height="4" fill="black" />

                <rect x="42" y="65" width="4" height="4" fill="black" />
                <rect x="50" y="70" width="4" height="4" fill="black" />
                <rect x="65" y="65" width="4" height="4" fill="black" />
                <rect x="75" y="75" width="4" height="4" fill="black" />
                <rect x="85" y="65" width="4" height="4" fill="black" />
                <rect x="65" y="85" width="4" height="4" fill="black" />
                <rect x="80" y="85" width="4" height="4" fill="black" />

                {/* Center Badge */}
                <circle cx="50" cy="50" r="10" fill="#8B1E1E" />
                <polygon points="50,44 52,48 56,48 53,51 54,55 50,52 46,55 47,51 44,48 48,48" fill="#FFDF00" />
              </svg>
            </div>

            <p className="text-[11px] font-mono text-[#D4AF37]">
              https://localhost:3000 • CHUYÊN ĐỀ TTHCM
            </p>

            <button
              onClick={() => setShowQR(false)}
              className="w-full py-2.5 rounded-full bg-[#8B1E1E] border border-[#D4AF37] text-white font-bold text-xs hover:bg-[#A82020] transition-colors"
            >
              ĐÓNG HỘP THOẠI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
