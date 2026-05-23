import type { Metadata } from "next";
import {
  Noto_Serif_JP,
  Noto_Sans_JP,
  Cormorant_Garamond,
  Cinzel,
  Shippori_Mincho_B1,
} from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "羊水塩の湯 | 泉州塩業 鯨屋 — 自宅で太古の海に還るミネラル浴",
  description:
    "羊水塩を一袋、お風呂に溶かすだけ。人体液と同じミネラルバランスの湯が、60兆の細胞を癒す。天文年間より490年、泉州唯一の塩屋「鯨屋」謹製。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`
        ${notoSerifJP.variable}
        ${notoSansJP.variable}
        ${cormorantGaramond.variable}
        ${cinzel.variable}
        ${shipporiMincho.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
