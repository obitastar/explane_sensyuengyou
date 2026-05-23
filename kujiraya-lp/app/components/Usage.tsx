"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";
import { IMAGES } from "@/constants/images";

type UsageItem = {
  title: string;
  en: string;
  catch: string;
  description: string;
  image: string;
};

const usages: UsageItem[] = [
  {
    title: "調理",
    en: "Cooking",
    catch: "素材が、目を覚ます。",
    description:
      "おにぎり、天ぷら、焼き魚——素材の持ち味を最大限に引き出すのが天然ミネラル塩の力。化学精製塩では出せない、丸みのある深い味わい。",
    image: IMAGES.unsplash.cooking,
  },
  {
    title: "飲用",
    en: "Drinking",
    catch: "一杯の水が、変わる。",
    description:
      "水1Lに10g——それだけで羊水と同じイオン組成に。毎日の水分補給を、ミネラル補給の時間へ。身体の内側から整える、最もシンプルな習慣。",
    image: IMAGES.unsplash.water,
  },
  {
    title: "浴用",
    en: "Bathing",
    catch: "海に還る、ひととき。",
    description:
      "湯船に一掴み。太古の海のミネラルに包まれる贅沢な入浴体験。身体を芯から温め、心までほどく。タラソテラピーの原点がここに。",
    image: IMAGES.unsplash.bathing,
  },
  {
    title: "洗浄",
    en: "Cleansing",
    catch: "古来の知恵、塩の浄化。",
    description:
      "歯磨き、洗顔、うがいに。天然ミネラルと重曹の力で口内を清浄に保つ携帯塩もご用意。保存料・発泡剤・研磨剤・甘味料不使用。",
    image: IMAGES.unsplash.cleansing,
  },
  {
    title: "塗布",
    en: "Body Care",
    catch: "肌が、呼吸する。",
    description:
      "マッサージソルトとして全身に。ミネラル豊富な天然塩が肌をやさしく整え、すこやかに保つ。飲み込んでも安全な成分だけで作られています。",
    image: IMAGES.unsplash.bodyCare,
  },
];

export default function Usage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative bg-shikkoku py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="五つの使い方" en="How to Use" />

        <FadeInOnScroll className="text-center mb-16">
          <p className="text-kinari/40 text-sm leading-[2]">
            調理だけではない。飲む、浸かる、洗う、塗る。
            <br />
            鯨屋の塩は、暮らしのすべてに寄り添う。
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {usages.map((usage, i) => (
            <FadeInOnScroll key={usage.en} delay={i * 0.08}>
              <motion.div
                className="group border border-kinpaku/10 cursor-pointer bg-sumi/10 overflow-hidden transition-colors hover:bg-sumi/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={usage.image}
                    alt={usage.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  {/* カード上のキャッチ */}
                  <div className="absolute inset-0 flex items-end p-4">
                    <p className="font-serif-jp text-xs text-kinari/60 leading-relaxed">
                      {usage.catch}
                    </p>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <p className="font-shippori text-lg font-bold tracking-wider text-kinari mb-1">
                    {usage.title}
                  </p>
                  <p className="font-garamond text-[10px] tracking-[0.25em] text-kinari/30 uppercase">
                    {usage.en}
                  </p>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-kinari/60 text-xs leading-[2] mt-4 pt-4 border-t border-kinpaku/10 text-left">
                          {usage.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
