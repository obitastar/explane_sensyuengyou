"use client";

import Image from "next/image";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import CountUp from "./ui/CountUp";
import { IMAGES } from "@/constants/images";

export default function Philosophy() {
  return (
    <section className="relative bg-shikkoku py-28 md:py-44 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.unsplash.salt}
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shikkoku via-transparent to-shikkoku" />
      </div>

      <div className="container mx-auto px-6 md:px-16 max-w-3xl relative z-10">
        {/* 問いかけ */}
        <FadeInOnScroll className="text-center mb-16">
          <p className="font-garamond text-xs tracking-[0.4em] text-kinpaku/50 uppercase mb-8">
            Why KUJIRAYA
          </p>
          <h2 className="font-shippori text-2xl md:text-4xl font-bold tracking-[0.15em] text-kinari leading-[2]">
            あなたの身体は、
            <br />
            毎日の「塩」でできている。
          </h2>
        </FadeInOnScroll>

        {/* ストーリーテリング */}
        <div className="space-y-12">
          <FadeInOnScroll>
            <p className="text-kinari/60 text-sm md:text-base leading-[2.5] text-center">
              人間の体液は、太古の海水と同じイオン組成を持つ。
              <br />
              血液も、涙も、羊水も——すべて「海」の記憶。
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.15}>
            <p className="text-kinari/60 text-sm md:text-base leading-[2.5] text-center">
              だからこそ、塩は「何でもいい」ではない。
              <br />
              精製された塩化ナトリウム99%の食卓塩と、
              <br />
              海のミネラルをそのまま宿した天然塩では、
              <br />
              身体への届き方が、まるで違う。
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3}>
            <div className="gold-line w-16 mx-auto my-12" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.35}>
            <p className="text-kinari/80 text-base md:text-lg leading-[2.5] text-center font-serif-jp">
              鯨屋の羊水塩は、
              <br />
              室戸海洋深層水のニガリで
              <br />
              人体液と同じミネラルバランスに調整した、
              <br />
              <span className="text-kinpaku">唯一無二のミネラル調整塩。</span>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.45}>
            <p className="text-kinari/50 text-sm leading-[2.5] text-center">
              水1リットルに10グラム溶かすだけで、
              <br />
              羊水と同じイオン組成が再現される。
              <br />
              それは、「生命の海」を飲むということ。
            </p>
          </FadeInOnScroll>
        </div>

        {/* 数字で訴求: カウントアップ */}
        <FadeInOnScroll className="mt-20">
          <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
            <div>
              <CountUp
                end={490}
                duration={2.5}
                className="font-garamond text-4xl md:text-5xl text-kinpaku"
              />
              <p className="text-kinari/40 text-xs mt-2 tracking-wider">
                年の歴史
              </p>
            </div>
            <div>
              <CountUp
                end={10}
                duration={1.8}
                suffix="x"
                className="font-garamond text-4xl md:text-5xl text-kinpaku"
              />
              <p className="text-kinari/40 text-xs mt-2 tracking-wider">
                ミネラル含有量
              </p>
            </div>
            <div>
              <CountUp
                end={25}
                duration={2.0}
                className="font-garamond text-4xl md:text-5xl text-kinpaku"
              />
              <p className="text-kinari/40 text-xs mt-2 tracking-wider">
                年のご愛顧
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
