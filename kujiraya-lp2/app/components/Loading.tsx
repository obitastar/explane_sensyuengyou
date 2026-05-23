"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* 波のアイコン */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M0 20 Q10 10 20 20 Q30 30 40 20 Q50 10 60 20" stroke="#b06a4e" strokeWidth="1.5" fill="none" />
                <path d="M5 28 Q15 18 25 28 Q35 38 45 28 Q55 18 65 28" stroke="#c4b5a0" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
            </motion.div>

            <motion.p
              className="font-shippori text-xl tracking-[0.3em] text-earth font-bold"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              羊水塩の湯
            </motion.p>

            <motion.div
              className="h-px bg-stone"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />

            <motion.p
              className="font-garamond text-[10px] tracking-[0.3em] text-stone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              YOUSUI-EN BATH
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
