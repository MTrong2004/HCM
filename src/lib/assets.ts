/**
 * Helper to ensure assets and image paths respect Next.js basePath
 * when deployed to subpaths like GitHub Pages (/HCM) or root paths like Vercel (/).
 */
export function getAssetPath(src: string): string {
  if (!src) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath && src.startsWith("/") && !src.startsWith(basePath)) {
    return `${basePath}${src}`;
  }
  return src;
}
