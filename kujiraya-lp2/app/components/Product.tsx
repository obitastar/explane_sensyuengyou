"use client";

import Image from "next/image";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";
import { IMAGES } from "@/constants/images";

export default function Product() {
  return (
    <section className="relative bg-cream py-24 md:py-36 washi-texture">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="商品情報" en="Product" />

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* 商品画像 */}
          <FadeInOnScroll className="flex-1 flex justify-center">
            <div className="relative w-72 md:w-80">
              <div className="bg-warm-white rounded-2xl p-8 shadow-sm">
                <Image
                  src={IMAGES.product.box}
                  alt="羊水塩 — 鯨屋謹製 ミネラル調整塩 500g"
                  width={600}
                  height={450}
                  className="object-contain w-full"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              <p className="mt-4 font-garamond text-[10px] tracking-[0.2em] text-stone text-center">
                鯨屋謹製 羊水塩 500g
              </p>
            </div>
          </FadeInOnScroll>

          {/* スペック */}
          <FadeInOnScroll className="flex-1" delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="font-shippori text-2xl font-bold tracking-wider text-earth mb-2">
                  羊水塩
                </p>
                <p className="font-garamond text-xs tracking-[0.2em] text-terracotta/70 uppercase">
                  YOUSUI-EN — Mineral-Balanced Salt
                </p>
              </div>

              <p className="text-text-sub text-sm leading-[2.2]">
                国産天然塩に、室戸海洋深層水由来のニガリを加え、
                人体液と同様のミネラルバランスに調整した塩です。
                浴用では1袋で約200Lのミネラル浴が楽しめます。
              </p>

              <div className="space-y-4">
                {[
                  { label: "原料", value: "国産天然塩 + 室戸海洋深層水のニガリ" },
                  { label: "内容量", value: "500g / 袋" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs tracking-wider text-terracotta/60 w-16 flex-shrink-0 font-bold">
                        {item.label}
                      </span>
                      <span className="text-sm text-text-sub">{item.value}</span>
                    </div>
                    <div className="accent-line mt-4" />
                  </div>
                ))}
              </div>

              {/* 浴用の目安 */}
              <div className="bg-deep-blue/8 rounded-xl p-6 mt-4">
                <p className="text-xs tracking-wider text-deep-blue font-bold mb-3">
                  浴用の使用量目安
                </p>
                <div className="space-y-2 text-sm text-text-sub">
                  <p>
                    <span className="text-earth font-bold">基本:</span> 1袋（500g）/ 浴槽200L = 0.25%
                  </p>
                  <p>
                    <span className="text-earth font-bold">しっかり:</span> 4袋（2kg）/ 浴槽200L = 0.9%
                  </p>
                </div>
              </div>

              {/* 価格 */}
              <div className="space-y-2 mt-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-garamond text-3xl text-earth font-bold">&yen;10,000</span>
                  <span className="text-stone text-xs">（20袋入・10kg）</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-garamond text-xl text-earth">&yen;5,000</span>
                  <span className="text-stone text-xs">（10袋入・5kg）</span>
                </div>
                <p className="text-terracotta text-xs mt-2 font-bold">
                  20袋入なら、1回あたり約500円で本格ミネラル浴。
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
