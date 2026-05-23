"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const voices = [
  {
    text: "初めて入ったとき、肌がツルツルになって驚きました。まるで温泉に入ったあとのよう。翌朝も肌のしっとり感が続いていて感動しました。",
    name: "K.S 様",
    age: "40代女性",
  },
  {
    text: "冬場の乾燥肌に悩んでいましたが、羊水塩のお風呂に変えてから明らかに違います。子どもの肌荒れも落ち着いてきて、家族全員で愛用しています。",
    name: "M.T 様",
    age: "30代女性",
  },
  {
    text: "体の芯から温まる感じがあって、湯冷めしにくい。疲れた日の夜に入ると、ぐっすり眠れます。水道水のお風呂にはもう戻れません。",
    name: "Y.A 様",
    age: "50代男性",
  },
];

export default function Voices() {
  return (
    <section className="relative bg-warm-white py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="ご愛用者の声" en="Voices" />

        <div className="grid md:grid-cols-3 gap-8">
          {voices.map((voice, i) => (
            <FadeInOnScroll key={i} delay={i * 0.15}>
              <div className="bg-cream rounded-2xl p-8 h-full flex flex-col shadow-sm">
                <span className="font-garamond text-4xl text-terracotta/20 leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-text-sub text-sm leading-[2.2] flex-1">
                  {voice.text}
                </p>
                <div className="mt-6 pt-4 border-t border-sand">
                  <p className="text-earth text-sm font-shippori tracking-wider font-bold">
                    {voice.name}
                  </p>
                  <p className="text-stone text-xs mt-1">
                    {voice.age}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
