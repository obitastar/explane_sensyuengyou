"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const benefits = [
  {
    category: "美肌・スキンケア",
    color: "bg-terracotta/8",
    accent: "text-terracotta",
    items: [
      "ミネラル成分でお肌がツルツルに",
      "赤ちゃんのような美肌作りに",
      "皮膚の老化を防ぎ、細胞の活力を高める",
    ],
  },
  {
    category: "温浴・リラックス",
    color: "bg-deep-blue/8",
    accent: "text-deep-blue",
    items: [
      "体の芯から温まり、湯冷めしにくい",
      "まるで温泉上がりのしっとり感",
      "母体の胎内のような安らぎ",
    ],
  },
  {
    category: "デトックス",
    color: "bg-sage/10",
    accent: "text-sage",
    items: [
      "体内の過剰電気が流出",
      "長年蓄積された不要な物は排出",
      "必要なミネラルは吸収",
    ],
  },
  {
    category: "日常のケアに",
    color: "bg-bark/5",
    accent: "text-bark",
    items: [
      "足湯にも — 手軽にミネラル浴",
      "残り湯で洗濯 — 脂肪が分解されて落ちやすく",
      "湯垢が付かず、浴槽も清潔",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-warm-white py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="羊水塩の湯がもたらすもの" en="Benefits" />

        <FadeInOnScroll>
          <p className="text-text-sub text-sm leading-[2.4] max-w-2xl mx-auto text-center mb-16">
            皮膚の内外の成分・濃度が揃ったとき、
            60兆個の細胞は初めて本来の働きを取り戻します。
            <span className="text-earth font-bold">「人間に適した水」</span>
            での入浴だからこそ得られる実感。
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((group, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className={`${group.color} rounded-2xl p-8 h-full`}>
                <h3 className={`font-shippori text-lg font-bold tracking-wider ${group.accent} mb-5`}>
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-text-sub text-sm leading-[2] flex gap-3">
                      <span className={`${group.accent} opacity-40 flex-shrink-0 mt-1`}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
