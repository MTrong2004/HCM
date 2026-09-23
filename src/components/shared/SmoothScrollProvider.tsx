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
import { CANONICAL_SECTION_IDS } from "@/content/canonical-sections";

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
}

const ScrollContext = createContext<ScrollContextType>({
  activeSection: "hero",
  setActiveSection: () => {},
  scrollProgress: 0,
  scrollTo: () => {},
  isTOCDrawerOpen: false,
  setIsTOCDrawerOpen: () => {},
  toggleTOCDrawer: () => {},
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
  const [activeSection, setActiveSection] = useState<string>("phap-quyen");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isTOCDrawerOpen, setIsTOCDrawerOpen] = useState<boolean>(false);
  const isNavigatingRef = useRef<boolean>(false);

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
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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

  // Body scroll lock when TOC drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isTOCDrawerOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isTOCDrawerOpen]);

  // Escape key listener to close drawer
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTOCDrawerOpen) {
        setIsTOCDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTOCDrawerOpen]);

  // Scroll-spy and scroll progress calculation
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          if (totalScroll > 0) {
            const progress = (scrollY / totalScroll) * 100;
            setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));
          }

          // If currently performing animated programmatic scroll, do not let spy fight it
          if (!isNavigatingRef.current) {
            // Scroll-position based detection with offset for fixed header
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Deep-link / Hash handling on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rawHash = window.location.hash.replace(/^#/, "");
    if (rawHash && (CANONICAL_SECTION_IDS as readonly string[]).includes(rawHash)) {
      const timer = setTimeout(() => {
        scrollTo(rawHash, -56, false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  // Back/Forward navigation synchronization (popstate)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && CANONICAL_SECTION_IDS.includes(hash)) {
        setActiveSection(hash);
        scrollTo(hash, -56, false);
      } else if (!hash) {
        setActiveSection("hero");
        scrollTo("hero", 0, false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollTo]);

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
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
