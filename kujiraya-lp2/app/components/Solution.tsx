"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";

export default function Solution() {
  return (
    <section className="relative bg-earth py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        {/* 大見出し */}
        <div className="text-center mb-20">
          <FadeInOnScroll>
            <p className="font-garamond text-sm tracking-[0.3em] text-sand/70 uppercase mb-6">
              The Answer
            </p>
          </FadeInOnScroll>

          <div className="flex justify-center">
            {"羊水塩の湯".split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-shippori text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <FadeInOnScroll delay={0.5}>
            <p className="font-garamond text-xs md:text-sm tracking-[0.25em] text-sand/50 italic mt-4">
              YOUSUI-EN BATH — Healing in Aqua
            </p>
          </FadeInOnScroll>
        </div>

        {/* コンセプト */}
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <FadeInOnScroll>
            <p className="font-shippori text-xl md:text-2xl font-bold tracking-wider text-cream leading-[2]">
              お風呂に一袋、溶かすだけ。
              <br />
              自宅の浴槽が「太古の海」になる。
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="space-y-4 text-sand/70 text-sm leading-[2.4] text-left md:text-center">
              <p>
                羊水塩1袋（500g）を浴槽（200L）に溶かすと、
                濃度0.25%——舌が塩味を感じ取れる最低の濃度です。
              </p>
              <p>
                この濃度で、人体液と同じミネラルバランスのイオン水が生まれます。
                皮膚の内外の成分・濃度・温度が同じになったとき、
                <span className="text-cream">
                  細胞は初めて「母体の中」と同じ安らぎを得る
                </span>のです。
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* 3つの比較 */}
        <FadeInOnScroll className="mt-20" delay={0.3}>
          <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden">
            {[
              {
                label: "羊水",
                sub: "AMNIOTIC FLUID",
                items: ["成分 — 体液と同じ", "濃度 — 最適", "温度 — 不変"],
                highlight: true,
              },
              {
                label: "海水",
                sub: "SEAWATER",
                items: ["成分 — 類似", "濃度 — 約4倍", "温度 — 変動"],
                highlight: false,
              },
              {
                label: "水道水",
                sub: "TAP WATER",
                items: ["成分 — 異質", "濃度 — 異質", "温度 — 変動"],
                highlight: false,
              },
            ].map((col, i) => (
              <div
                key={i}
                className={`p-8 ${
                  col.highlight
                    ? "bg-terracotta/20 border-2 border-terracotta/30"
                    : "bg-bark/30 border border-bark/20"
                }`}
              >
                <p className="font-shippori text-xl font-bold tracking-wider text-cream mb-1">
                  {col.label}
                </p>
                <p className="font-garamond text-[10px] tracking-[0.2em] text-sand/40 uppercase mb-6">
                  {col.sub}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-sm text-sand/60 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                {col.highlight && (
                  <p className="mt-6 text-xs text-terracotta font-shippori tracking-wider font-bold">
                    = 羊水塩の湯
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
