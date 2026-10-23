import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./css/globals.css";
import "./css/custom.css";
import "./css/base.css";
import "./css/responsive.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["100", "200", "400", "500", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata = {
  title: "Tên Website Của Bồ",
  description: "Mô tả website",
  icons: {
    icon: [
      { url: "/img/favicon/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/img/favicon/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.className}>
      <body>
        {children}
        {/* Dùng strategy afterInteractive để script chạy chuẩn mô hình Next.js */}
        <Script src="/js/frontend.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}