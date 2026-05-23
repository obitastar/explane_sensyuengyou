"use client";

import Image from "next/image";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import { IMAGES } from "@/constants/images";

const products = [
  {
    name: "羊水塩 20袋入",
    sub: "ご家庭の定番に",
    spec: "500g × 20袋（10kg）",
    price: "¥10,000",
    image: IMAGES.product.box,
    width: 600,
    height: 450,
    badge: "一番人気",
    description:
      "毎日の調理から飲用・浴用まで。ご家族でたっぷり使える大容量。リピーターの多くがこちらを選ばれています。",
  },
  {
    name: "羊水塩 10袋入",
    sub: "まずはお試しに",
    spec: "500g × 10袋（5kg）",
    price: "¥5,000",
    image: IMAGES.product.box10,
    width: 800,
    height: 600,
    badge: "お試し",
    description:
      "初めての方におすすめ。まずは5kgから、鯨屋の塩を体験してください。送料700円で全国配送。",
  },
];

export default function ProductLineup() {
  return (
    <section className="relative bg-shikkoku py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <FadeInOnScroll className="text-center mb-6">
          <p className="font-garamond text-xs tracking-[0.4em] text-kinpaku/50 uppercase">
            Lineup
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="font-shippori text-2xl md:text-3xl font-bold tracking-[0.15em] text-kinari">
            商品ラインナップ
          </h2>
          <p className="text-kinari/40 text-sm mt-4">
            四百九十年の歴史が生んだ、三つの塩。
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((p, i) => (
            <FadeInOnScroll key={p.name} delay={i * 0.15}>
              <div className="border border-kinpaku/10 bg-sumi/10 overflow-hidden group hover:border-kinpaku/25 transition-colors">
                {/* バッジ */}
                <div className="relative">
                  <div className="p-6 flex justify-center bg-gradient-to-b from-sumi/20 to-transparent">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={p.width}
                      height={p.height}
                      className="object-contain w-full max-w-xs"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <span className="absolute top-4 right-4 font-shippori text-[10px] tracking-wider text-shikkoku bg-kinpaku/80 px-3 py-1">
                    {p.badge}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-shippori text-lg font-bold tracking-wider text-kinari">
                      {p.name}
                    </h3>
                    <p className="font-serif-jp text-xs text-kinpaku/60 mt-1">
                      {p.sub}
                    </p>
                  </div>
                  <p className="text-kinari/50 text-xs leading-[2]">
                    {p.description}
                  </p>
                  <div className="flex items-baseline justify-between pt-3 border-t border-kinpaku/10">
                    <span className="text-kinari/50 text-xs">{p.spec}</span>
                    <span className="font-garamond text-2xl text-kinari">
                      {p.price}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* 携帯塩 */}
        <FadeInOnScroll delay={0.3}>
          <div className="border border-kinpaku/10 bg-sumi/10 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-32 h-32 rounded-full border border-kinpaku/20 flex items-center justify-center bg-sumi/20">
              <div className="text-center">
                <p className="font-shippori text-sm text-kinari/80">携帯塩</p>
                <p className="font-garamond text-[9px] text-kinari/30 mt-1">40g</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="font-shippori text-lg font-bold tracking-wider text-kinari">
                  携帯塩
                </h3>
                <span className="font-garamond text-xs text-kinpaku/50">
                  — Portable Salt
                </span>
              </div>
              <p className="text-kinari/50 text-xs leading-[2] mb-3">
                歯・歯茎マッサージ用。重曹とミネラル塩、ニガリ、ミントを配合。
                保存料・発泡剤・研磨剤・甘味料は一切不使用。
                飲み込んでも安全な、口に入れるものへの老舗の矜持。
              </p>
              <div className="flex items-baseline justify-between">
                <span className="text-kinari/50 text-xs">40g入り</span>
                <span className="font-garamond text-xl text-kinari">&yen;800</span>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
