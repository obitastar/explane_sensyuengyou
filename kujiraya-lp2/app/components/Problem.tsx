"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b06a4e" strokeWidth="1.2">
        <path d="M6 24 Q10 18 16 24 Q22 30 26 24" />
        <path d="M16 6v14" />
        <circle cx="16" cy="4" r="2" />
      </svg>
    ),
    title: "水道水のお風呂",
    desc: "塩素・カルキが肌を刺激し、成分も濃度も体液とは異なります。細胞は水を吸って膨張してしまいます。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b06a4e" strokeWidth="1.2">
        <rect x="10" y="4" width="12" height="20" rx="2" />
        <path d="M13 24v4h6v-4" />
        <circle cx="16" cy="14" r="3" />
      </svg>
    ),
    title: "市販の入浴剤",
    desc: "香料・着色料・防腐剤を含み、皮膚から吸収されます。成分は「ムード」であって「癒し」ではありません。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b06a4e" strokeWidth="1.2">
        <path d="M4 20 Q8 14 12 20 Q16 26 20 20 Q24 14 28 20" />
        <path d="M4 26 Q8 20 12 26 Q16 32 20 26 Q24 20 28 26" />
        <path d="M12 8 Q16 2 20 8" />
        <path d="M14 12 Q16 6 18 12" />
      </svg>
    ),
    title: "温泉・海水浴",
    desc: "効果は高いですが毎日は通えません。現在の海水は太古より4倍以上濃く、体液とは組成が異なります。",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-warm-white py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="毎日の入浴、本当に癒されていますか" en="The Problem" />

        <FadeInOnScroll>
          <p className="text-text-sub text-sm leading-[2.4] max-w-2xl mx-auto text-center mb-16">
            人体の70%はミネラル水。皮膚の内側——細胞を包む液は、
            血液・羊水と同じ成分・濃度のイオン水です。
            <br />
            毎日浸かる「水」の質は、全身の細胞に直接届いています。
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <FadeInOnScroll key={i} delay={i * 0.15}>
              <div className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-shadow h-full text-center">
                <div className="flex justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-shippori text-lg font-bold tracking-wider text-earth mb-3">
                  {item.title}
                </h3>
                <p className="text-text-sub text-sm leading-[2]">
                  {item.desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
