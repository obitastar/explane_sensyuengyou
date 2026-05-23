"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

const faqs = [
  {
    q: "追い焚き機能付きのお風呂でも使えますか？",
    a: "はい、追い焚き・循環風呂でも問題なくお使いいただけます。浴槽や釜に湯垢が付きません。",
  },
  {
    q: "一般の入浴剤と併用できますか？",
    a: "一般の入浴剤には香料や着色料が含まれているため、併用はお控えください。羊水塩のミネラルだけで十分な効果を実感いただけます。",
  },
  {
    q: "赤ちゃんや肌の弱い方でも大丈夫ですか？",
    a: "羊水塩の成分は人体液と同じミネラルバランスです。どんな肌質の方でも安心してご入浴いただけます。",
  },
  {
    q: "残り湯は洗濯に使えますか？",
    a: "はい、お使いいただけます。体脂肪が分解されて落ちやすくなるため、洗濯にも適しています。",
  },
  {
    q: "毎日入っても大丈夫ですか？",
    a: "毎日の習慣としてお使いいただくことをおすすめします。継続することで実感が深まります。",
  },
  {
    q: "浴槽にステンレスを使っていますが問題ないですか？",
    a: "ステンレス浴槽はまれに変色することがあります。よく溶かしてから入浴し、排水後は水道水で洗い流してください。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeInOnScroll delay={index * 0.08}>
      <div className="border-b border-sand">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        >
          <div className="flex items-start gap-4">
            <span className="font-garamond text-terracotta/50 text-sm flex-shrink-0 mt-0.5 font-bold">Q</span>
            <span className="text-sm text-earth leading-relaxed group-hover:text-terracotta transition-colors">
              {q}
            </span>
          </div>
          <span
            className="text-terracotta/40 text-xl flex-shrink-0 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
          >
            +
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex items-start gap-4 pb-5">
                <span className="font-garamond text-deep-blue/40 text-sm flex-shrink-0 mt-0.5 font-bold">A</span>
                <p className="text-text-sub text-sm leading-[2]">{a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeInOnScroll>
  );
}

export default function Faq() {
  return (
    <section className="relative bg-warm-white py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-16 max-w-3xl">
        <SectionTitle ja="よくあるご質問" en="FAQ" />

        <div className="bg-cream rounded-2xl p-8 md:p-12">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
