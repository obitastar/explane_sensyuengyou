"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyCtaBar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand"
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-warm-white/95 backdrop-blur-md" />

      <div className="relative z-10 container mx-auto px-4 md:px-16 py-3 flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="font-shippori text-sm tracking-wider text-earth font-bold">
            羊水塩の湯
          </p>
          <p className="text-[10px] tracking-wider text-stone">
            自宅で太古の海に還るミネラル浴
          </p>
        </div>

        <div className="hidden sm:flex items-baseline gap-2">
          <span className="text-stone text-xs">1回あたり約</span>
          <span className="font-garamond text-xl text-earth font-bold">&yen;500</span>
          <span className="text-stone text-xs">で本格ミネラル浴</span>
        </div>

        <div className="flex gap-3 ml-auto">
          <a
            href="tel:072-428-3434"
            className="hidden md:flex items-center gap-2 border border-bark/20 px-4 py-2 rounded-full text-xs text-bark hover:bg-bark/5 transition-colors"
          >
            <span className="tracking-wider">TEL</span>
          </a>
          <a
            href="#purchase"
            className="flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-2.5 rounded-full transition-colors"
          >
            <span className="text-sm font-bold tracking-wider">
              ご購入はこちら
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
