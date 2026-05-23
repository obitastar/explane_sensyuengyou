"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* 背景 */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.bg}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-32 text-center">
        <motion.p
          className="font-garamond text-xs tracking-[0.5em] text-bark/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          KUJIRAYA — EST. 1532
        </motion.p>

        <motion.h1
          className="mt-8 font-shippori text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] text-earth leading-[1.6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          母なる海に、
          <br />
          還る湯。
        </motion.h1>

        <motion.p
          className="font-garamond text-sm md:text-base tracking-[0.25em] text-bark/40 italic mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Return to the Mother Sea
        </motion.p>

        <motion.p
          className="mt-10 text-text-sub text-sm md:text-base leading-[2.4] max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          羊水塩を一袋、湯に溶かす。
          <br />
          それだけで、お風呂が「太古の海」になる。
          <br />
          <span className="text-earth font-bold">60兆の細胞が歓ぶ、ミネラル浴。</span>
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <a
            href="#howto"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3.5 rounded-full transition-colors"
          >
            <span className="text-sm font-bold tracking-wider">
              羊水塩の湯とは
            </span>
          </a>
          <a
            href="#purchase"
            className="border border-bark/25 px-8 py-3.5 rounded-full hover:bg-bark/5 transition-colors"
          >
            <span className="text-sm text-bark tracking-wider">
              ご購入はこちら
            </span>
          </a>
        </motion.div>
      </div>

      {/* 下部 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="accent-line" />
        <div className="bg-warm-white/80 backdrop-blur-sm py-4 px-6 md:px-16 flex items-center justify-between">
          <p className="font-garamond text-[10px] md:text-xs tracking-[0.3em] text-bark/40">
            泉州塩業 鯨屋
            <span className="hidden md:inline ml-4 font-cinzel">
              SENSYU ENGYO — KUJIRAYA
            </span>
          </p>
          <div className="flex items-center gap-3">
            <span className="font-garamond text-[10px] tracking-[0.3em] text-bark/30">
              scroll
            </span>
            <motion.div
              className="w-px h-6 bg-bark/20 origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1.2,
                delay: 2.8,
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
