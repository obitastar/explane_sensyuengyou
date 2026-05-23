"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";

type Testimonial = {
  text: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "料理人として三十年、塩は何十種類と試してきた。羊水塩に出会ってからは、これ以外を使う理由がなくなった。素材の味を殺さず、しかし確実に引き上げる。プロが最後にたどり着く塩だと思う。",
    author: "K. M.",
    role: "和食料理人・大阪",
  },
  {
    text: "毎朝コップ一杯の水に溶かして飲んでいます。身体が欲しがっていたものは、これだったのかと感じます。家族全員の日常に欠かせないものになりました。もう十年以上のお付き合いです。",
    author: "S. T.",
    role: "愛用歴12年・兵庫県",
  },
  {
    text: "入浴に使い始めて肌の調子がとても良い。合成入浴剤では得られない、海に入った後のような心地よさ。贅沢ですが、一度知るともう戻れません。",
    author: "A. Y.",
    role: "愛用歴5年・東京都",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-noukon washi-texture py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <FadeInOnScroll className="text-center mb-6">
          <p className="font-garamond text-xs tracking-[0.4em] text-kinpaku/50 uppercase">
            Voices
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="font-shippori text-2xl md:text-3xl font-bold tracking-[0.15em] text-kinari">
            選び続ける人の、声。
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeInOnScroll key={i} delay={i * 0.12}>
              <motion.div
                className="border border-kinpaku/10 p-8 bg-shikkoku/30 h-full flex flex-col"
                whileHover={{ borderColor: "rgba(184, 147, 90, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* 引用符 */}
                <span className="font-garamond text-4xl text-kinpaku/20 leading-none mb-4 block">
                  &ldquo;
                </span>
                <p className="text-kinari/60 text-sm leading-[2.2] flex-1">
                  {t.text}
                </p>
                <div className="mt-6 pt-4 border-t border-kinpaku/10">
                  <p className="font-garamond text-sm text-kinari/70 tracking-wider">
                    {t.author}
                  </p>
                  <p className="text-kinari/30 text-xs mt-1">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="text-center mt-12">
          <p className="text-kinari/25 text-xs">
            ※ 個人の感想であり、効果効能を保証するものではありません。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
