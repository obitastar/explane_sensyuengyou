"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KujirayaLogo from "./KujirayaLogo";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-10">
            {/* 紋章ロゴ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <KujirayaLogo size={140} />
            </motion.div>

            {/* 金の細線 */}
            <motion.div
              className="gold-line"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />

            {/* 社名: 泉州塩業株式会社 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="font-shippori text-xl md:text-2xl tracking-[0.35em] text-kinari/90 font-bold">
                泉州塩業株式会社
              </p>
            </motion.div>

            {/* 屋号: 鯨屋 */}
            <motion.div
              className="text-center -mt-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <p className="font-shippori text-4xl md:text-5xl tracking-[0.5em] text-kinari font-bold">
                鯨屋
              </p>
            </motion.div>

            {/* 英字 */}
            <motion.div
              className="text-center -mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <p className="font-cinzel text-[11px] tracking-[0.4em] text-kinpaku/50">
                SENSYU ENGYO — KUJIRAYA
              </p>
              <p className="font-garamond text-[10px] tracking-[0.3em] text-kinari/25 mt-2">
                SINCE 1532
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
