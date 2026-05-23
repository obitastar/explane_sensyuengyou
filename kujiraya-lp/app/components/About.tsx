"use client";

import Image from "next/image";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import KujirayaLogo from "./KujirayaLogo";
import SectionTitle from "./ui/SectionTitle";
import { IMAGES } from "@/constants/images";

export default function About() {
  return (
    <section className="relative bg-shikkoku py-24 md:py-40 overflow-hidden">
      {/* 背景テクスチャ */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.unsplash.beach}
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 md:px-16 max-w-5xl relative z-10">
        <SectionTitle ja="鯨屋について" en="About KUJIRAYA" />

        {/* メインキャッチ */}
        <FadeInOnScroll className="text-center mb-8">
          <p className="font-shippori text-2xl md:text-4xl font-bold tracking-[0.2em] text-kinari leading-loose">
            泉州に残る、最後の塩屋。
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll className="text-center mb-20">
          <p className="text-kinari/40 text-sm leading-[2.2] max-w-lg mx-auto">
            かつて泉州の浜には数多の塩屋が軒を連ねた。
            <br />
            時代の波に一軒、また一軒と姿を消し、
            <br />
            今なお塩を造り続けるのは、鯨屋ただ一軒。
          </p>
        </FadeInOnScroll>

        {/* ロゴ + 説明 */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* 紋章ロゴ */}
          <FadeInOnScroll className="flex-shrink-0 flex flex-col items-center gap-6" delay={0.2}>
            <KujirayaLogo size={200} className="mx-auto" />
            {/* ブランドスローガン */}
            <div className="text-center">
              <p className="font-shippori text-sm tracking-[0.3em] text-kinpaku/70">
                生命は、海から。
              </p>
              <p className="font-garamond text-[11px] tracking-[0.2em] text-kinari/30 mt-1 italic">
                HEALING IN AQUA
              </p>
            </div>
          </FadeInOnScroll>

          {/* テキスト */}
          <FadeInOnScroll className="flex-1" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif-jp text-lg tracking-wider text-kinpaku/80 mb-4">
                  鯨屋の名のもとに
                </h3>
                <p className="text-kinari/70 text-sm leading-[2.2]">
                  「鯨屋」——泉州の海とともに生きてきた由井家が、
                  代々受け継ぐ屋号。
                  鯨は古来より海の王であり、豊穣の象徴。
                  その名を冠することは、海の恵みに対する畏敬と誇りの証である。
                </p>
              </div>

              <div>
                <h3 className="font-serif-jp text-lg tracking-wider text-kinpaku/80 mb-4">
                  天文年間——一五三二年
                </h3>
                <p className="text-kinari/70 text-sm leading-[2.2]">
                  戦国の世、由井家は泉州の浜で塩造りを始めた。
                  江戸期には幕府御用達の「天下一」の称号を賜り、
                  将軍の膳、大名の饗応、そしてペリー来航の宴にも
                  鯨屋の塩が供された。
                  五世紀にわたり、製法と志を一途に守り続けている。
                </p>
              </div>

              {/* 朱印アクセント */}
              <div className="flex items-center gap-6 pt-4">
                <div className="w-14 h-14 border-2 border-shu/60 flex items-center justify-center rotate-[-3deg]">
                  <span className="font-shippori text-shu/80 text-lg font-bold">
                    謹製
                  </span>
                </div>
                <div className="w-14 h-14 border-2 border-shu/60 rounded-full flex items-center justify-center rotate-[2deg]">
                  <span className="font-shippori text-shu/80 text-sm font-bold">
                    鯨屋
                  </span>
                </div>
                <p className="text-kinari/25 text-xs ml-2">
                  鯨屋謹製
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
