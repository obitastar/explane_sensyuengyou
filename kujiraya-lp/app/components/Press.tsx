"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const mediaItems = [
  {
    name: "おとなミューズ",
    issue: "2021年9月号 vol.111",
    detail: "ビューティ特集 p.103 掲載",
    image:
      "https://www.sensyuengyo.jp/wp-content/uploads/otona_MUSE_w800.png",
  },
  {
    name: "おとなミューズ 掲載ページ",
    issue: "p.103 Bath Salt として紹介",
    detail: "",
    image:
      "https://www.sensyuengyo.jp/wp-content/uploads/Keisai_103p_w800.png",
  },
];

const otherMedia = [
  { name: "anan", issue: "2109号（2018年）", note: "秋元才加さんが塩風呂として紹介" },
  { name: "美STORY", issue: "", note: "" },
  { name: "ViVi", issue: "", note: "" },
  { name: "25ans", issue: "", note: "" },
  { name: "CREA", issue: "", note: "" },
];

export default function Press() {
  return (
    <section className="relative bg-noukon washi-texture py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="メディア掲載" en="Featured in" />

        <FadeInOnScroll className="text-center mb-16">
          <p className="text-kinari/40 text-sm leading-[2]">
            本物を知る人が、選んでいる。
            <br />
            数々のメディアで取り上げられた、鯨屋の羊水塩。
          </p>
        </FadeInOnScroll>

        {/* 雑誌画像 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item, i) => (
            <FadeInOnScroll key={i} delay={i * 0.15}>
              <div className="border border-kinpaku/10 overflow-hidden bg-sumi/10 group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-5">
                  <p className="font-serif-jp text-sm tracking-wider text-kinari/80">
                    {item.name}
                  </p>
                  <p className="font-garamond text-xs text-kinari/40 mt-1">
                    {item.issue}
                  </p>
                  {item.detail && (
                    <p className="text-kinari/30 text-xs mt-1">{item.detail}</p>
                  )}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* その他の掲載メディア */}
        <FadeInOnScroll>
          <div className="border-t border-kinpaku/10 pt-10">
            <p className="font-garamond text-[10px] tracking-[0.3em] text-kinpaku/40 uppercase mb-8 text-center">
              Also Featured in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {otherMedia.map((media, i) => (
                <motion.div
                  key={media.name}
                  className="text-center opacity-50 hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-garamond text-xl md:text-2xl text-kinari tracking-wider italic">
                    {media.name}
                  </span>
                  {media.issue && (
                    <p className="font-garamond text-[10px] text-kinari/30 mt-1">
                      {media.issue}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
