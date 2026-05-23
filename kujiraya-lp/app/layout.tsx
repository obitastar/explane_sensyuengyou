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
  title: "泉州塩業 鯨屋 | SENSYU ENGYO KUJIRAYA — SINCE 1532",
  description:
    "天文年間より四百五十年。泉州にただ一軒、塩を造り続ける。天下一と称された格式ある塩造りの伝統。",
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
