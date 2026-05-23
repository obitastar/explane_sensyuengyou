"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* 背景画像: 暗い海 */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.bg}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
      </div>

      {/* メインコンテンツ: 2カラム */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">
        {/* 左: ブランドメッセージ */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 md:gap-8">
          {/* 鯨屋謹製 */}
          <motion.p
            className="font-garamond text-[10px] md:text-xs tracking-[0.4em] text-kinpaku/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            KUJIRAYA — SINCE 1532
          </motion.p>

          {/* 羊水塩 大判 */}
          <motion.div
            className="flex items-baseline gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h1 className="font-shippori text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] text-kinari">
              羊水塩
            </h1>
          </motion.div>

          {/* YOUSUI-EN */}
          <motion.p
            className="font-garamond text-sm md:text-base tracking-[0.3em] text-kinari/40 -mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            YOUSUI-EN
          </motion.p>

          {/* メインキャッチ */}
          <motion.div
            className="mt-4 text-center md:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <p className="font-shippori text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.15em] text-kinari leading-[2]">
              生命は、海から。
            </p>
            <p className="font-garamond text-xs md:text-sm tracking-[0.2em] text-kinari/40 italic mt-2">
              HEALING IN AQUA
            </p>
          </motion.div>

          {/* サブコピー */}
          <motion.div
            className="mt-2 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <p className="text-kinari/50 text-sm leading-[2.2] max-w-md">
              天文年間より四百九十年——
              <br />
              泉州にただ一軒残る塩屋「鯨屋」が造る、
              <br />
              人体液と同じミネラルバランスの塩。
            </p>
          </motion.div>

          {/* 天下一 バッジ */}
          <motion.div
            className="mt-4 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <div className="flex items-center gap-3 border border-kinpaku/20 px-4 py-2">
              <span className="font-shippori text-lg text-kinpaku/80 font-bold tracking-widest">
                天下一
              </span>
              <span className="text-kinari/30 text-[10px] leading-tight">
                江戸幕府より賜りし<br />最高品位の称号
              </span>
            </div>
            <div className="w-10 h-10 border border-shu/40 rounded-full flex items-center justify-center rotate-[-3deg]">
              <span className="font-shippori text-shu/60 text-xs font-bold">
                謹製
              </span>
            </div>
          </motion.div>
        </div>

        {/* 右: 商品画像 */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end max-w-sm md:max-w-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 1.2 }}
        >
          <div className="relative">
            <Image
              src={IMAGES.product.box}
              alt="羊水塩 — 鯨屋謹製 ミネラル調整塩"
              width={600}
              height={450}
              className="object-contain w-full drop-shadow-2xl"
              sizes="(max-width: 768px) 90vw, 450px"
              priority
            />
            {/* 商品スペック */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-left-8 bg-shikkoku/80 backdrop-blur-sm border border-kinpaku/15 px-5 py-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <p className="font-garamond text-[10px] tracking-[0.2em] text-kinpaku/50 uppercase">
                Mineral-Balanced Salt
              </p>
              <p className="text-kinari/70 text-xs mt-1">
                500g &times; 20袋入
              </p>
              <p className="font-garamond text-lg text-kinari mt-0.5">
                &yen;10,000
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 下部: ブランドライン */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <div className="gold-line" />
        <div className="bg-shikkoku/60 backdrop-blur-sm py-4 px-6 md:px-16 flex items-center justify-between">
          <p className="font-garamond text-[10px] md:text-xs tracking-[0.3em] text-kinari/30">
            泉州塩業株式会社 鯨屋
            <span className="hidden md:inline ml-4 font-cinzel">
              SENSYU ENGYO — KUJIRAYA
            </span>
          </p>
          {/* スクロールインジケーター */}
          <div className="flex items-center gap-3">
            <span className="font-garamond text-[10px] tracking-[0.3em] text-kinari/25">
              scroll
            </span>
            <motion.div
              className="w-px h-6 bg-kinari/15 origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1.2,
                delay: 3.0,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
