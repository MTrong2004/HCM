"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  CANONICAL_SECTIONS,
  CANONICAL_SECTION_IDS,
  getSectionById,
} from "@/content/canonical-sections";
import { playSubtleClick } from "@/lib/sound-effects";

export type NotebookTabType = "notes" | "outline" | "quotes" | "summary";

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollProgress: number;
  scrollTo: (
    target: string | HTMLElement,
    offset?: number,
    pushHash?: boolean
  ) => void;
  isTOCDrawerOpen: boolean;
  setIsTOCDrawerOpen: (open: boolean) => void;
  toggleTOCDrawer: () => void;
  isStudyNotebookOpen: boolean;
  setIsStudyNotebookOpen: (open: boolean) => void;
  toggleStudyNotebook: () => void;
  notebookTab: NotebookTabType;
  setNotebookTab: (tab: NotebookTabType) => void;
  openNotebookWithTab: (tab: NotebookTabType) => void;

  // Điều hướng tuần tự tiểu mục (Subtabs) & Section
  activeSubtabMap: Record<string, string>;
  setActiveSubtab: (sectionId: string, subtabId: string) => void;
  subtabDirection: 1 | -1;
  setSubtabDirection: (dir: 1 | -1) => void;
  stepNext: () => void;
  stepPrev: () => void;

  // Trạng thái thu gọn/mở rộng ChapterHeaderBanner khi cuộn đọc bài
  isBannerCollapsed: boolean;
  setIsBannerCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBannerCollapsed: () => void;
}

const ScrollContext = createContext<ScrollContextType>({
  activeSection: "hero",
  setActiveSection: () => {},
  scrollProgress: 0,
  scrollTo: () => {},
  isTOCDrawerOpen: true,
  setIsTOCDrawerOpen: () => {},
  toggleTOCDrawer: () => {},
  isStudyNotebookOpen: false,
  setIsStudyNotebookOpen: () => {},
  toggleStudyNotebook: () => {},
  notebookTab: "notes",
  setNotebookTab: () => {},
  openNotebookWithTab: () => {},

  activeSubtabMap: {},
  setActiveSubtab: () => {},
  subtabDirection: 1,
  setSubtabDirection: () => {},
  stepNext: () => {},
  stepPrev: () => {},

  isBannerCollapsed: false,
  setIsBannerCollapsed: () => {},
  toggleBannerCollapsed: () => {},
});

export function useSmoothScroll() {
  return useContext(ScrollContext);
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  // Khởi tạo activeSection mặc định là "hero" để bảo đảm khớp 100% giữa SSR và Client Hydration
  const [activeSection, setActiveSection] = useState<string>("hero");

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isTOCDrawerOpen, setIsTOCDrawerOpen] = useState<boolean>(true);
  const [isStudyNotebookOpen, setIsStudyNotebookOpen] = useState<boolean>(false);
  const [notebookTab, setNotebookTab] = useState<NotebookTabType>("notes");

  // Bản đồ lưu tab đang chọn cho từng section
  const [activeSubtabMap, setActiveSubtabMap] = useState<Record<string, string>>({
    "dan-chu": "ban-chat-giai-cap",
    "phap-quyen": "hop-hien-hop-phap",
    "trong-sach-vung-manh": "kiem-soat-quyen-luc",
    "xay-dung-dang": "phuong-dien-duong-loi",
    "xay-dung-nha-nuoc": "phap-luat-quyen-luc",
    "ket-luan": "tong-quan-tat-ca-trong-1",
  });
  const [subtabDirection, setSubtabDirection] = useState<1 | -1>(1);

  // Trạng thái thu gọn ChapterHeaderBanner khi cuộn đọc
  const [isBannerCollapsed, setIsBannerCollapsed] = useState<boolean>(false);
  const toggleBannerCollapsed = useCallback(() => {
    setIsBannerCollapsed((prev) => !prev);
  }, []);

  const activeSectionRef = useRef<string>(activeSection);
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const isNavigatingRef = useRef<boolean>(false);

  const setActiveSubtab = useCallback((sectionId: string, subtabId: string) => {
    setActiveSubtabMap((prev) => {
      if (prev[sectionId] === subtabId) return prev;
      return { ...prev, [sectionId]: subtabId };
    });
  }, []);

  // Đồng bộ URL hash khi client hydrate xong và khi người dùng back/forward browser
  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawHash = window.location.hash.replace(/^#/, "");
    if (rawHash && (CANONICAL_SECTION_IDS as readonly string[]).includes(rawHash)) {
      window.requestAnimationFrame(() => {
        setActiveSection(rawHash);
      });
    }
    const handleHashChange = () => {
      const newHash = window.location.hash.replace(/^#/, "");
      if (newHash && (CANONICAL_SECTION_IDS as readonly string[]).includes(newHash)) {
        setActiveSection(newHash);
      }
    };
    const handlePopState = () => {
      const newHash = window.location.hash.replace(/^#/, "");
      if (newHash && (CANONICAL_SECTION_IDS as readonly string[]).includes(newHash)) {
        setActiveSection(newHash);
      } else if (!newHash) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Guard against external theme extensions (e.g. DarkReader) altering calibrated palette
  useEffect(() => {
    const removeDarkStyles = () => {
      const els = document.querySelectorAll('style.darkreader, style[class*="darkreader"]');
      for (let i = 0; i < els.length; i++) {
        els[i].remove();
      }
    };
    removeDarkStyles();
    if (typeof window !== "undefined" && window.MutationObserver) {
      const observer = new MutationObserver(removeDarkStyles);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, []);

  // Initialize Lenis and keep its lifecycle synchronized with reduced motion.
  useEffect(() => {
    document.documentElement.setAttribute("data-hydrated", "true");

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tickerAttached = false;

    const setLenisState = (active: boolean) => {
      document.documentElement.setAttribute(
        "data-lenis-active",
        active ? "true" : "false"
      );
      (window as unknown as { __LENIS_ACTIVE__?: boolean }).__LENIS_ACTIVE__ = active;
    };

    const tickerUpdate = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };

    const stopLenis = () => {
      if (tickerAttached) {
        gsap.ticker.remove(tickerUpdate);
        tickerAttached = false;
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
      setLenisState(false);
    };

    const startLenis = () => {
      if (lenisRef.current) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });

      lenis.on("scroll", ScrollTrigger.update);
      lenisRef.current = lenis;
      gsap.ticker.add(tickerUpdate);
      gsap.ticker.lagSmoothing(0);
      tickerAttached = true;
      setLenisState(true);
    };

    const syncMotionPreference = () => {
      const isReduced = mediaQuery.matches;
      document.documentElement.setAttribute(
        "data-reduced-motion",
        isReduced ? "true" : "false"
      );
      if (isReduced) {
        stopLenis();
      } else {
        startLenis();
      }
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
      stopLenis();
    };
  }, []);

  // Cập nhật lại kích thước tính toán của Lenis khi chiều cao banner thay đổi
  useEffect(() => {
    if (lenisRef.current) {
      const timer = setTimeout(() => {
        lenisRef.current?.resize();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isBannerCollapsed]);

  // Scroll to section with consistent offset and optional hash push
  const scrollTo = useCallback(
    (
      target: string | HTMLElement,
      offset = -72,
      pushHash = true
    ) => {
      const targetId =
        typeof target === "string" ? target.replace(/^#/, "") : target.id;

      isNavigatingRef.current = true;
      setActiveSection(targetId);
      setIsBannerCollapsed(false);

      if (pushHash && targetId && typeof window !== "undefined") {
        const newHash = `#${targetId}`;
        if (window.location.hash !== newHash) {
          window.history.pushState(null, "", newHash);
        }
      }

      const el =
        typeof target === "string"
          ? document.getElementById(targetId)
          : target;

      const isReduced =
        typeof window !== "undefined" &&
        (document.documentElement.getAttribute("data-reduced-motion") === "true" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches);

      if (el) {
        if (lenisRef.current && !isReduced) {
          lenisRef.current.scrollTo(el, { offset, duration: 0.9 });
        } else {
          const targetY =
            el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: isReduced ? "auto" : "smooth",
          });
        }
      } else {
        if (lenisRef.current && !isReduced) {
          lenisRef.current.scrollTo(0, { duration: 0.6 });
        } else if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: isReduced ? "auto" : "smooth",
          });
        }
      }

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1000);
    },
    []
  );

  const toggleTOCDrawer = useCallback(() => {
    setIsTOCDrawerOpen((prev) => !prev);
  }, []);

  const toggleStudyNotebook = useCallback(() => {
    setIsStudyNotebookOpen((prev) => !prev);
  }, []);

  const openNotebookWithTab = useCallback((tab: NotebookTabType) => {
    setNotebookTab(tab);
    setIsStudyNotebookOpen(true);
  }, []);

  // Body scroll lock ONLY when Study Notebook drawer modal is open (TOC sidebar is a layout column, not a modal)
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isStudyNotebookOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isStudyNotebookOpen]);

  // Escape key listener to close drawer or notebook
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isTOCDrawerOpen) setIsTOCDrawerOpen(false);
        if (isStudyNotebookOpen) setIsStudyNotebookOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTOCDrawerOpen, isStudyNotebookOpen]);

  // -------------------------------------------------------------
  // ĐIỀU HƯỚNG TUẦN TỰ (TAB-FIRST PROGRESSION)
  // -------------------------------------------------------------
  const stepNext = useCallback(() => {
    playSubtleClick();
    const secIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === activeSection);
    if (secIdx === -1) return;
    const currentSec = CANONICAL_SECTIONS[secIdx];
    const subtabs = currentSec.subtabs;

    if (subtabs && subtabs.length > 0) {
      const currentTabId = activeSubtabMap[activeSection] || subtabs[0].id;
      const tabIdx = subtabs.findIndex((t) => t.id === currentTabId);
      if (tabIdx >= 0 && tabIdx < subtabs.length - 1) {
        // Chuyển sang tab kế tiếp trong cùng section
        const nextTab = subtabs[tabIdx + 1];
        setSubtabDirection(1);
        setActiveSubtabMap((prev) => ({ ...prev, [activeSection]: nextTab.id }));
        return;
      }
    }

    // Đã ở tab cuối cùng (hoặc section không có subtabs) -> chuyển tiếp sang section tiếp theo
    if (activeSection === "xay-dung-nha-nuoc") {
      // 4.3.2 chuyển sang luôn Ứng dụng AI (4.3.3 chỉ để dự phòng, không thuyết trình)
      setSubtabDirection(1);
      scrollTo("ket-luan", -56, true);
      const ketLuanSec = getSectionById("ket-luan");
      if (ketLuanSec?.subtabs && ketLuanSec.subtabs.length > 0) {
        setActiveSubtabMap((prev) => ({
          ...prev,
          "ket-luan": ketLuanSec.subtabs![0].id,
        }));
      }
      return;
    }

    if (secIdx < CANONICAL_SECTIONS.length - 1) {
      const nextSec = CANONICAL_SECTIONS[secIdx + 1];
      setSubtabDirection(1);
      scrollTo(nextSec.id, -56, true);
      if (nextSec.subtabs && nextSec.subtabs.length > 0) {
        setActiveSubtabMap((prev) => ({
          ...prev,
          [nextSec.id]: nextSec.subtabs![0].id,
        }));
      }
    } else {
      // Đã ở trang cuối cùng -> quay lại trang đầu (hero)
      const firstSec = CANONICAL_SECTIONS[0];
      setSubtabDirection(1);
      scrollTo(firstSec.id, -56, true);
    }
  }, [activeSection, activeSubtabMap, scrollTo]);

  const stepPrev = useCallback(() => {
    playSubtleClick();
    const secIdx = CANONICAL_SECTIONS.findIndex((s) => s.id === activeSection);
    if (secIdx === -1) return;
    const currentSec = CANONICAL_SECTIONS[secIdx];
    const subtabs = currentSec.subtabs;

    if (subtabs && subtabs.length > 0) {
      const currentTabId = activeSubtabMap[activeSection] || subtabs[0].id;
      const tabIdx = subtabs.findIndex((t) => t.id === currentTabId);
      if (tabIdx > 0) {
        // Lùi về tab trước trong cùng section
        const prevTab = subtabs[tabIdx - 1];
        setSubtabDirection(-1);
        setActiveSubtabMap((prev) => ({ ...prev, [activeSection]: prevTab.id }));
        return;
      }
    }

    // Đã ở tab đầu tiên -> lùi về section trước
    if (activeSection === "ket-luan") {
      // Khi ở Ứng dụng AI, lùi lại trở về thẳng 4.3.2 Xây dựng Nhà nước
      const prevSec = getSectionById("xay-dung-nha-nuoc");
      setSubtabDirection(-1);
      scrollTo("xay-dung-nha-nuoc", -56, true);
      if (prevSec?.subtabs && prevSec.subtabs.length > 0) {
        const lastTab = prevSec.subtabs[prevSec.subtabs.length - 1];
        setActiveSubtabMap((prev) => ({
          ...prev,
          "xay-dung-nha-nuoc": lastTab.id,
        }));
      }
      return;
    }

    if (secIdx > 0) {
      const prevSec = CANONICAL_SECTIONS[secIdx - 1];
      setSubtabDirection(-1);
      scrollTo(prevSec.id, -56, true);
      // Khi lùi về section trước, chuyển đến tab cuối cùng của section đó
      if (prevSec.subtabs && prevSec.subtabs.length > 0) {
        const lastTab = prevSec.subtabs[prevSec.subtabs.length - 1];
        setActiveSubtabMap((prev) => ({
          ...prev,
          [prevSec.id]: lastTab.id,
        }));
      }
    }
  }, [activeSection, activeSubtabMap, scrollTo]);

  // Phím tắt mũi tên trái / phải toàn cục (Đổi trang / tiểu mục)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = document.activeElement as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      // Không đổi trang nếu đang mở modal (như Sổ tay nghiên cứu, Cài đặt, Trắc nghiệm, Thước phim)
      if (isStudyNotebookOpen) return;
      const hasOpenModal = Boolean(
        document.querySelector('[role="dialog"], [aria-modal="true"]')
      );
      if (hasOpenModal) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        stepNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stepNext, stepPrev, isStudyNotebookOpen]);

  // Scroll-spy and scroll progress calculation
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastToggleTime = 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight;
          const innerHeight = window.innerHeight;
          const totalScroll = scrollHeight - innerHeight;

          if (totalScroll > 0) {
            const progress = (scrollY / totalScroll) * 100;
            setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));
          }

          const now = Date.now();
          const deltaY = scrollY - lastScrollY;
          lastScrollY = scrollY;

          // Xử lý thu gọn / mở rộng banner:
          // 1. Khi đang ở trang chủ (hero): Giữ nguyên ảnh bìa mở rộng, KHÔNG bao giờ auto-collapse
          //    để người dùng trải nghiệm trọn vẹn trang bìa và không bị mất thanh cuộn/giật màn hình.
          if (activeSectionRef.current === "hero") {
            setIsBannerCollapsed((prev) => (prev ? false : prev));
          } else {
            // 2. Với các chương học khác (nội dung dài):
            // - Tự động thu gọn khi cuộn xuống rõ rệt (scrollY > 120, deltaY > 0, totalScroll > 150)
            // - Tự động mở lại khi cuộn ngược lên gần đỉnh (scrollY <= 30 hoặc deltaY < -10 && scrollY < 80)
            if (now - lastToggleTime > 300) {
              if (scrollY > 120 && deltaY > 0 && totalScroll > 150) {
                setIsBannerCollapsed((prev) => {
                  if (!prev) {
                    lastToggleTime = now;
                    return true;
                  }
                  return prev;
                });
              } else if (scrollY <= 30 || (deltaY < -10 && scrollY < 80)) {
                setIsBannerCollapsed((prev) => {
                  if (prev) {
                    lastToggleTime = now;
                    return false;
                  }
                  return prev;
                });
              }
            }
          }

          if (!isNavigatingRef.current) {
            const triggerY = scrollY + window.innerHeight * 0.35;
            for (let i = CANONICAL_SECTION_IDS.length - 1; i >= 0; i--) {
              const id = CANONICAL_SECTION_IDS[i];
              const el = document.getElementById(id);
              if (el) {
                const elTop = el.getBoundingClientRect().top + scrollY;
                if (elTop <= triggerY) {
                  setActiveSection(id);
                  break;
                }
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Khi người dùng cuộn bánh xe chuột hướng lên ở đỉnh trang, lập tức khôi phục ảnh bìa
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && window.scrollY <= 15) {
        setIsBannerCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollProgress,
        scrollTo,
        isTOCDrawerOpen,
        setIsTOCDrawerOpen,
        toggleTOCDrawer,
        isStudyNotebookOpen,
        setIsStudyNotebookOpen,
        toggleStudyNotebook,
        notebookTab,
        setNotebookTab,
        openNotebookWithTab,

        activeSubtabMap,
        setActiveSubtab,
        subtabDirection,
        setSubtabDirection,
        stepNext,
        stepPrev,

        isBannerCollapsed,
        setIsBannerCollapsed,
        toggleBannerCollapsed,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
