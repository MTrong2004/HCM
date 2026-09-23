import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân | Tạp chí Tương tác",
  description:
    "Công trình thuyết trình tương tác dạng Digital Magazine / Scroll Storytelling về Tư tưởng Hồ Chí Minh: Nhà nước dân chủ, Nhà nước pháp quyền và Nhà nước trong sạch, vững mạnh.",
  keywords: [
    "Tư tưởng Hồ Chí Minh",
    "Nhà nước của dân do dân vì dân",
    "Nhà nước pháp quyền",
    "Pháp quyền nhân nghĩa",
    "Kiểm soát quyền lực",
    "Hiến pháp 1946",
    "Chính trị học",
    "Lịch sử Việt Nam",
  ],
  authors: [{ name: "Nhóm Nghiên cứu Tư tưởng Hồ Chí Minh" }],
  openGraph: {
    title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
    description:
      "Tạp chí số tương tác chuyển tải toàn vẹn hệ thống luận điểm học thuật và triết lý lập quốc của Chủ tịch Hồ Chí Minh.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="darkreader-lock" content="true" />
        <meta name="darkreader" content="NO-DARKREADER" />
        <meta name="color-scheme" content="light" />
        <Script
          id="detect-reduced-motion"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
                document.documentElement.setAttribute('data-reduced-motion','true');
              }
              function removeDarkStyles(){
                var els = document.querySelectorAll('style.darkreader, style[class*="darkreader"]');
                for (var i = 0; i < els.length; i++) {
                  els[i].remove();
                }
              }
              removeDarkStyles();
              if (window.MutationObserver) {
                new MutationObserver(removeDarkStyles).observe(document.documentElement, { childList: true, subtree: true });
              }
            }catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-paper text-ink selection:bg-primary selection:text-paper-light antialiased"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
