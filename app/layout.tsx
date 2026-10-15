import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.className}>
      <body>{children}
        <script src="/js/frontend.js" defer></script>
      </body>
    </html>
  );
}
