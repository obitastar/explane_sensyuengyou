"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const minerals = [
  { name: "ナトリウム", yousui: 34.50, regular: 39.22 },
  { name: "カリウム", yousui: 1.70, regular: 0.00 },
  { name: "カルシウム", yousui: 1.00, regular: 0.01 },
  { name: "マグネシウム", yousui: 0.20, regular: 0.07 },
  { name: "硫酸イオン", yousui: 0.50, regular: 0.01 },
];

export default function Difference() {
  return (
    <section className="relative bg-cream py-24 md:py-36 washi-texture">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="一般の塩との違い" en="Mineral Comparison" />

        <FadeInOnScroll>
          <p className="text-text-sub text-sm leading-[2.4] max-w-2xl mx-auto text-center mb-4">
            100gあたりの主要ミネラル含有量。
            羊水塩は人体液と同じバランスに調整されており、
            市販精製塩の<span className="text-earth font-bold">10倍以上</span>のミネラルを含みます。
          </p>
          <p className="text-stone text-xs text-center mb-14">
            ※ 粉末換算 100gあたりグラム数
          </p>
        </FadeInOnScroll>

        {/* グラフ */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {minerals.map((m, i) => (
            <FadeInOnScroll key={i} delay={i * 0.08}>
              <div>
                <p className="text-sm text-earth font-bold mb-2">{m.name}</p>
                <div className="space-y-2">
                  {/* 羊水塩 */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-terracotta w-14 flex-shrink-0 font-bold">
                      羊水塩
                    </span>
                    <div className="flex-1 h-6 bg-sand/40 rounded-full relative overflow-hidden">
                      <motion.div
                        className="h-full bg-terracotta/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(m.yousui / 40) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                    <span className="font-garamond text-sm text-earth w-14 text-right">
                      {m.yousui}g
                    </span>
                  </div>
                  {/* 精製塩 */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-stone w-14 flex-shrink-0">
                      精製塩
                    </span>
                    <div className="flex-1 h-4 bg-sand/20 rounded-full relative overflow-hidden">
                      <motion.div
                        className="h-full bg-stone/40 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(m.regular / 40) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                    <span className="font-garamond text-xs text-stone w-14 text-right">
                      {m.regular}g
                    </span>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="mt-16 text-center" delay={0.3}>
          <p className="font-shippori text-lg md:text-xl tracking-wider text-earth leading-[2]">
            「人体液と同じバランス」だから、
            <br />
            お風呂で溶かしたとき、肌が最も自然に受け入れる。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
