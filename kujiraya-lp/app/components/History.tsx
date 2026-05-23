"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import { IMAGES } from "@/constants/images";

const lines = [
  "天文年間に始まり、",
  "四百九十年の歴史を誇る。",
  "江戸時代、国内最高の調味塩と認められ、",
  "『天下一』の称号を賜る。",
];

export default function History() {
  return (
    <section className="relative bg-noukon washi-texture min-h-screen flex items-center py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* 縦組みテキスト */}
        <div className="flex-1 flex flex-col items-center gap-12">
          <div className="hidden md:block vertical-rl">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                className="font-shippori text-2xl lg:text-3xl font-bold leading-[2.5] tracking-[0.2em] text-kinari/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* モバイル横組み */}
          <div className="md:hidden space-y-4">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                className="font-shippori text-xl font-bold tracking-[0.15em] text-kinari/90 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* 補足コピー */}
          <FadeInOnScroll delay={1.0}>
            <p className="text-kinari/40 text-sm leading-[2.2] text-center max-w-sm">
              将軍の食卓を、大名の饗応を、
              <br />
              そして幕末にはペリー提督をもてなした塩。
              <br />
              その一粒に、日本の歴史が息づく。
            </p>
          </FadeInOnScroll>
        </div>

        {/* 店舗画像 */}
        <FadeInOnScroll className="flex-1 max-w-md" delay={0.4}>
          <div className="relative">
            <div className="relative overflow-hidden border border-kinpaku/20">
              <Image
                src={IMAGES.shop.front}
                alt="泉州塩業 鯨屋 店舗"
                width={700}
                height={900}
                className="object-cover w-full"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noukon/50 via-transparent to-noukon/20" />
            </div>
            <p className="mt-4 font-garamond text-[11px] tracking-[0.2em] text-kinari/30 text-right">
              泉州塩業 鯨屋 — 岸和田・天神山町
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
