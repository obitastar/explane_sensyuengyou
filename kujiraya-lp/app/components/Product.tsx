"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import { IMAGES } from "@/constants/images";

export default function Product() {
  return (
    <section className="relative bg-shikkoku py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-6xl">
        {/* セクションタイトル */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
          <div className="hidden md:block vertical-rl flex-shrink-0">
            {"羊水塩".split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-shippori text-6xl lg:text-8xl font-bold tracking-[0.3em] text-kinari"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <FadeInOnScroll className="md:hidden text-center">
            <h2 className="font-shippori text-5xl font-bold tracking-[0.3em] text-kinari">
              羊水塩
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1" delay={0.3}>
            <p className="font-garamond text-xs tracking-[0.3em] text-kinpaku/50 uppercase mb-4">
              THALASSO THERAPIE — Mineral-Balanced Salt
            </p>
            <p className="font-shippori text-2xl md:text-3xl font-bold tracking-[0.15em] text-kinari leading-relaxed mb-3">
              生命は、海から。
            </p>
            <p className="font-garamond text-sm tracking-[0.15em] text-kinari/40 italic mb-8">
              HEALING IN AQUA
            </p>
            <div className="space-y-3 text-kinari/50 text-sm leading-[2.2] max-w-lg">
              <p>
                太古の昔、生命は海の中で生まれた。
              </p>
              <p>
                人は長い進化の途中で、
                海水を体内に閉じ込めたまま陸に上がった。
              </p>
              <p>
                海水と人体液のイオン組成は、今でも同じ。
                <br />
                母体の羊水もまた、「太古の海」である。
              </p>
              <p className="text-kinari/70 font-serif-jp">
                生命の源——「太古の海」と「羊水」を再現するのが、
                <br />
                <span className="text-kinari tracking-widest">『羊水塩』</span>です。
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* 商品画像 + スペック */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* 実際の商品画像 */}
          <FadeInOnScroll className="flex-1 flex justify-center" delay={0.2}>
            <div className="relative w-80 md:w-96">
              <div className="relative overflow-hidden">
                <Image
                  src={IMAGES.product.box}
                  alt="羊水塩 — 鯨屋謹製 ミネラル調整塩 500g×20袋入"
                  width={600}
                  height={450}
                  className="object-contain w-full"
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
              <p className="mt-4 font-garamond text-[10px] tracking-[0.2em] text-kinari/25 text-center">
                鯨屋謹製 羊水塩 500g &times; 20袋入
              </p>
            </div>
          </FadeInOnScroll>

          {/* スペック */}
          <FadeInOnScroll className="flex-1" delay={0.4}>
            <div className="space-y-8">
              <p className="text-kinari/60 text-sm leading-[2.2]">
                国産天然塩に、室戸海洋深層水由来のニガリを加え、
                人体液と同様のミネラルバランスに調整。
                1%水溶液（水1Lに10g）で、
                羊水・血漿と同じイオン組成を再現します。
              </p>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/60 uppercase w-20 flex-shrink-0">
                    Raw
                  </span>
                  <span className="text-sm text-kinari/70">
                    国産天然塩 + 室戸海洋深層水のニガリ
                  </span>
                </div>
                <div className="gold-line" />
                <div className="flex items-baseline gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/60 uppercase w-20 flex-shrink-0">
                    Type
                  </span>
                  <span className="text-sm text-kinari/70">
                    ミネラル調整塩
                  </span>
                </div>
                <div className="gold-line" />
                <div className="flex items-baseline gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/60 uppercase w-20 flex-shrink-0">
                    Volume
                  </span>
                  <span className="text-sm text-kinari/70">500g / 袋</span>
                </div>
                <div className="gold-line" />
                <div className="flex items-baseline gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/60 uppercase w-20 flex-shrink-0">
                    Price
                  </span>
                  <div className="text-sm text-kinari/70">
                    <p>
                      <span className="font-garamond text-2xl text-kinari">&yen;10,000</span>
                      <span className="text-kinari/40 ml-2">（20袋入・10kg）</span>
                    </p>
                    <p className="mt-1">
                      <span className="font-garamond text-lg text-kinari/80">&yen;5,000</span>
                      <span className="text-kinari/40 ml-2">（10袋入・5kg）</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        {/* 10袋入り画像 */}
        <FadeInOnScroll className="mt-16 flex justify-center" delay={0.3}>
          <div className="w-64 md:w-72">
            <Image
              src={IMAGES.product.box10}
              alt="羊水塩 10袋入り"
              width={800}
              height={600}
              className="object-contain w-full"
              sizes="(max-width: 768px) 256px, 288px"
            />
            <p className="mt-3 font-garamond text-[10px] tracking-[0.2em] text-kinari/25 text-center">
              お試し用 10袋入（5kg）
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
