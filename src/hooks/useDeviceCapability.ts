"use client";

import { useSyncExternalStore } from "react";

export interface DeviceCapability {
  isWebGLAvailable: boolean;
  isMobile: boolean;
  isLowEnd: boolean;
}

const DEFAULT_CAPABILITY: DeviceCapability = {
  isWebGLAvailable: true,
  isMobile: false,
  isLowEnd: false,
};

let cachedCapability: DeviceCapability | null = null;

function getDeviceCapabilitySnapshot(): DeviceCapability {
  if (typeof window === "undefined") return DEFAULT_CAPABILITY;
  if (cachedCapability) return cachedCapability;

  let webglSupported = false;
  try {
    const canvas = document.createElement("canvas");
    webglSupported = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    webglSupported = false;
  }

  const isMobileDevice = window.innerWidth < 768;
  const cores = navigator.hardwareConcurrency || 4;
  const isLowEndDevice = cores <= 2 || isMobileDevice;

  cachedCapability = {
    isWebGLAvailable: webglSupported,
    isMobile: isMobileDevice,
    isLowEnd: isLowEndDevice,
  };

  return cachedCapability;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handleResize = () => {
    cachedCapability = null;
    callback();
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}

export function useDeviceCapability(): DeviceCapability {
  return useSyncExternalStore(
    subscribe,
    getDeviceCapabilitySnapshot,
    () => DEFAULT_CAPABILITY
  );
}
