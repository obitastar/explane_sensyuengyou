"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

export default function Purchase() {
  return (
    <section id="purchase" className="relative bg-cream py-24 md:py-36 washi-texture">
      <div className="container mx-auto px-6 md:px-16 max-w-4xl">
        <SectionTitle ja="ご購入・お問合わせ" en="Purchase" />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* 左: 会社情報 */}
          <FadeInOnScroll className="flex-1">
            <div className="bg-warm-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="font-shippori text-xl font-bold tracking-wider text-earth">
                泉州塩業株式会社
              </h3>
              <p className="text-stone text-xs mt-1 mb-6">
                鯨屋謹製 — 天文年間より続く泉州唯一の塩屋
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-xs tracking-wider text-terracotta/60 w-16 flex-shrink-0 pt-1 font-bold">
                    住所
                  </span>
                  <span className="text-sm text-text-sub leading-relaxed">
                    〒596-0834<br />大阪府岸和田市天神山町2-9-9
                  </span>
                </div>
                <div className="accent-line" />
                <div className="flex gap-4">
                  <span className="text-xs tracking-wider text-terracotta/60 w-16 flex-shrink-0 pt-1 font-bold">
                    電話
                  </span>
                  <a
                    href="tel:072-428-3434"
                    className="text-sm text-text-sub font-garamond tracking-wider hover:text-terracotta transition-colors"
                  >
                    (072) 428-3434
                  </a>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* 右: 購入リンク */}
          <FadeInOnScroll className="flex-1" delay={0.2}>
            <div className="space-y-4">
              <a
                href="https://www.satofull.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-warm-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-[10px] tracking-wider text-terracotta/50 uppercase mb-1 font-bold">
                    Furusato Tax
                  </p>
                  <p className="text-sm text-earth font-bold">
                    さとふるで購入
                  </p>
                </div>
                <span className="text-terracotta/40 group-hover:text-terracotta transition-colors text-lg">
                  &rarr;
                </span>
              </a>

              <a
                href="https://www.sensyuengyo.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-warm-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-[10px] tracking-wider text-terracotta/50 uppercase mb-1 font-bold">
                    Contact &amp; Order
                  </p>
                  <p className="text-sm text-earth font-bold">
                    お問合わせ・ご注文
                  </p>
                </div>
                <span className="text-terracotta/40 group-hover:text-terracotta transition-colors text-lg">
                  &rarr;
                </span>
              </a>

              <a
                href="tel:072-428-3434"
                className="group flex items-center justify-between bg-warm-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-[10px] tracking-wider text-terracotta/50 uppercase mb-1 font-bold">
                    Telephone
                  </p>
                  <p className="text-sm text-earth font-bold">
                    お電話でのご注文
                  </p>
                  <p className="font-garamond text-xs text-stone mt-1">
                    (072) 428-3434
                  </p>
                </div>
                <span className="text-terracotta/40 group-hover:text-terracotta transition-colors text-lg">
                  &rarr;
                </span>
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
