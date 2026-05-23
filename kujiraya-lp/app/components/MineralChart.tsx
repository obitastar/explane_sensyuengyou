"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";
import CountUp from "./ui/CountUp";
import { IMAGES } from "@/constants/images";

type MineralData = {
  label: string;
  en: string;
  yosuien: number;
  other: number;
  unit: string;
  ratio: string;
};

const minerals: MineralData[] = [
  { label: "マグネシウム", en: "Mg", yosuien: 2810, other: 180, unit: "mg", ratio: "15.6" },
  { label: "カルシウム", en: "Ca", yosuien: 620, other: 22, unit: "mg", ratio: "28.2" },
  { label: "カリウム", en: "K", yosuien: 1160, other: 100, unit: "mg", ratio: "11.6" },
  { label: "鉄", en: "Fe", yosuien: 8.2, other: 0, unit: "mg", ratio: "∞" },
];

function MineralCard({ data, index }: { data: MineralData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const barHeight = (data.yosuien / 2810) * 100;
  const otherBarHeight = Math.max((data.other / 2810) * 100, 1.5);

  return (
    <motion.div
      ref={ref}
      className="relative border border-kinpaku/10 bg-shikkoku/40 backdrop-blur-sm p-6 pt-8 flex flex-col items-center group hover:border-kinpaku/25 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* 元素記号 */}
      <span className="font-garamond text-4xl md:text-5xl text-kinpaku/15 font-bold absolute top-3 right-4">
        {data.en}
      </span>

      {/* ミネラル名 */}
      <p className="font-serif-jp text-sm tracking-wider text-kinari/70 mb-2">
        {data.label}
      </p>

      {/* 倍率 — 大きく */}
      <div className="mb-6 text-center">
        <span className="font-garamond text-4xl md:text-5xl text-kinpaku font-bold">
          {data.ratio === "∞" ? (
            "∞"
          ) : isInView ? (
            <CountUp
              end={parseFloat(data.ratio) * 10}
              duration={2.0}
              className="font-garamond text-4xl md:text-5xl text-kinpaku font-bold"
            />
          ) : (
            "0"
          )}
        </span>
        {data.ratio !== "∞" && (
          <span className="font-garamond text-lg text-kinpaku/60 ml-0.5">
            x
          </span>
        )}
        {data.ratio !== "∞" && (
          <p className="text-kinari/25 text-[10px] mt-0.5 tracking-wider">
            ※実際の倍率: {data.ratio}倍
          </p>
        )}
      </div>

      {/* 縦バーチャート */}
      <div className="flex items-end gap-5 h-40 mb-4">
        {/* 羊水塩バー */}
        <div className="flex flex-col items-center gap-2 w-12">
          <div className="relative w-full h-36 bg-sumi/30 overflow-hidden flex items-end">
            <motion.div
              className="w-full relative"
              initial={{ height: 0 }}
              whileInView={{ height: `${barHeight}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3 + index * 0.12,
                ease: "easeOut",
              }}
            >
              {/* グロー */}
              <div className="absolute inset-0 bg-gradient-to-t from-kinpaku/90 via-kinpaku/60 to-kinpaku/30" />
              <div className="absolute -inset-1 bg-kinpaku/20 blur-md" />
            </motion.div>
          </div>
          <span className="text-[9px] text-kinpaku/70 tracking-wider">
            羊水塩
          </span>
        </div>

        {/* 食卓塩バー */}
        <div className="flex flex-col items-center gap-2 w-12">
          <div className="relative w-full h-36 bg-sumi/30 overflow-hidden flex items-end">
            <motion.div
              className="w-full bg-kinari/10"
              initial={{ height: 0 }}
              whileInView={{ height: `${otherBarHeight}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.12,
                ease: "easeOut",
              }}
            />
          </div>
          <span className="text-[9px] text-kinari/25 tracking-wider">
            食卓塩
          </span>
        </div>
      </div>

      {/* 数値 */}
      <div className="w-full space-y-1.5 border-t border-kinpaku/10 pt-4">
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] text-kinpaku/50">羊水塩</span>
          <span className="font-garamond text-base text-kinari">
            {data.yosuien.toLocaleString()}
            <span className="text-[10px] text-kinari/40 ml-1">{data.unit}</span>
          </span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] text-kinari/25">食卓塩</span>
          <span className="font-garamond text-base text-kinari/30">
            {data.other.toLocaleString()}
            <span className="text-[10px] text-kinari/20 ml-1">{data.unit}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MineralChart() {
  return (
    <section className="relative bg-noukon py-24 md:py-44 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.unsplash.deepSea}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 md:px-16 max-w-5xl relative z-10">
        <SectionTitle ja="成分比較" en="Mineral Composition" />

        <FadeInOnScroll className="text-center mb-8">
          <p className="font-shippori text-xl md:text-3xl font-bold tracking-[0.15em] text-kinari leading-relaxed">
            一般食塩の
            <span className="font-garamond text-4xl md:text-6xl text-kinpaku mx-2 inline-block">
              <CountUp end={10} duration={1.5} className="font-garamond text-4xl md:text-6xl text-kinpaku" />
            </span>
            倍以上のミネラル
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="text-center mb-16">
          <p className="text-kinari/40 text-sm leading-[2] max-w-md mx-auto">
            「塩ならどれも同じ」ではない。
            <br />
            海洋深層水のニガリが生む、圧倒的なミネラル差。
            <br />
            数字が、鯨屋の塩の本質を語る。
          </p>
        </FadeInOnScroll>

        {/* カードグリッド */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {minerals.map((mineral, i) => (
            <MineralCard key={mineral.en} data={mineral} index={i} />
          ))}
        </div>

        <FadeInOnScroll className="mt-12">
          <p className="font-garamond text-[11px] tracking-[0.15em] text-kinari/25 text-right">
            ※ 100gあたりの含有量。自社調べ。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
