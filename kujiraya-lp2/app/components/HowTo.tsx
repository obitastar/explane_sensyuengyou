"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  {
    num: "01",
    title: "湯を張る",
    desc: "浴槽に38〜40℃のお湯を200L張ります。",
  },
  {
    num: "02",
    title: "一袋を溶かす",
    desc: "羊水塩500g（1袋）をお湯に入れ、よく溶かします。濃度0.25%の「羊水」が完成。",
  },
  {
    num: "03",
    title: "ゆったり浸かる",
    desc: "15〜20分、全身を浸してください。目を水中で開けても痛くありません。",
  },
  {
    num: "04",
    title: "そのまま上がる",
    desc: "排水後は水道水で浴槽を洗い流してください。湯垢が付かず、残り湯は洗濯にも。",
  },
];

const tips = [
  "0.9%液（4袋使用）にすると生理食塩水と同じ濃度に。浮力も増し、深い安らぎを実感できます。",
  "追い焚き・循環風呂でも問題なく使用できます。",
  "一般の入浴剤には香料・着色料が含まれているため、併用はお控えください。",
];

export default function HowTo() {
  return (
    <section id="howto" className="relative bg-cream py-24 md:py-36 washi-texture">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="使い方" en="How to Use" />

        {/* ステップ */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="relative bg-warm-white rounded-2xl p-6 pt-12 h-full shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-4 left-6 font-garamond text-4xl text-terracotta/20 font-light">
                  {step.num}
                </span>
                <h3 className="font-shippori text-lg font-bold tracking-wider text-earth mb-3">
                  {step.title}
                </h3>
                <p className="text-text-sub text-sm leading-[2]">
                  {step.desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* ヒント */}
        <FadeInOnScroll>
          <div className="bg-mist/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="font-garamond text-xs tracking-[0.2em] text-deep-blue/60 uppercase mb-4">
              Tips
            </p>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <p key={i} className="text-text-sub text-sm leading-[2] flex gap-3">
                  <span className="text-deep-blue/40 flex-shrink-0">*</span>
                  <span>{tip}</span>
                </p>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
