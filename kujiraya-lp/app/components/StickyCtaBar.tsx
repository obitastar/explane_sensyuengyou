"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyCtaBar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // ヒーローセクションを過ぎたら表示
    setVisible(latest > 800);
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-kinpaku/15"
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      {/* 背景のぼかし */}
      <div className="absolute inset-0 bg-shikkoku/90 backdrop-blur-md" />

      <div className="relative z-10 container mx-auto px-4 md:px-16 py-3 flex items-center justify-between gap-4">
        {/* 左: キャッチ */}
        <div className="hidden md:block">
          <p className="font-shippori text-sm tracking-wider text-kinari/80">
            羊水塩 — 鯨屋謹製
          </p>
          <p className="font-garamond text-[10px] tracking-[0.2em] text-kinari/30">
            MINERAL-BALANCED SALT SINCE 1532
          </p>
        </div>

        {/* 中: 価格 */}
        <div className="hidden sm:flex items-baseline gap-2">
          <span className="font-garamond text-lg text-kinari">&yen;5,000</span>
          <span className="text-kinari/30 text-xs">（10袋・お試し）</span>
          <span className="text-kinari/20 mx-2">|</span>
          <span className="font-garamond text-lg text-kinari">&yen;10,000</span>
          <span className="text-kinari/30 text-xs">（20袋）</span>
        </div>

        {/* 右: CTAボタン */}
        <div className="flex gap-3 ml-auto">
          <a
            href="tel:072-428-3434"
            className="hidden md:flex items-center gap-2 border border-kinpaku/30 px-4 py-2 text-xs text-kinari/70 hover:bg-kinpaku/5 transition-colors"
          >
            <span className="font-garamond tracking-wider">TEL</span>
          </a>
          <a
            href="https://www.sensyuengyo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-kinpaku/90 hover:bg-kinpaku px-6 py-2.5 transition-colors"
          >
            <span className="font-shippori text-sm text-shikkoku font-bold tracking-wider">
              ご購入・お問合わせ
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
