"use client";

import FadeInOnScroll from "./ui/FadeInOnScroll";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  return (
    <section className="relative bg-shikkoku py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <SectionTitle ja="会社情報・ご購入" en="Company &amp; Purchase" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* 左: 会社情報 + 地図 */}
          <FadeInOnScroll className="flex-1">
            <div className="space-y-6 mb-8">
              <h3 className="font-shippori text-xl font-bold tracking-wider text-kinari mb-2">
                泉州塩業株式会社
              </h3>
              <p className="text-kinari/40 text-xs leading-relaxed">
                鯨屋謹製 — 天文年間より続く泉州唯一の塩屋
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/50 uppercase w-20 flex-shrink-0 pt-1">
                    Address
                  </span>
                  <span className="text-sm text-kinari/70 leading-relaxed">
                    〒596-0834
                    <br />
                    大阪府岸和田市天神山町2-9-9
                  </span>
                </div>
                <div className="gold-line" />
                <div className="flex gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/50 uppercase w-20 flex-shrink-0 pt-1">
                    Tel
                  </span>
                  <a
                    href="tel:072-428-3434"
                    className="text-sm text-kinari/70 font-garamond tracking-wider hover:text-kinari transition-colors"
                  >
                    (072) 428-3434
                  </a>
                </div>
                <div className="gold-line" />
                <div className="flex gap-4">
                  <span className="font-garamond text-xs tracking-[0.2em] text-kinpaku/50 uppercase w-20 flex-shrink-0 pt-1">
                    Trade
                  </span>
                  <span className="text-sm text-kinari/70">
                    屋号: 鯨屋（KUJIRAYA）
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative border border-kinpaku/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.5!2d135.3756!3d34.4553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000da5f7e7fffff%3A0x0!2z5aSn6Ziq5bqc5bK45ZKM55Sw5biC5aSp56We5bGx55S677yS5LiB55uu77yZ!5e0!3m2!1sja!2sjp!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="泉州塩業株式会社 所在地"
              />
            </div>
          </FadeInOnScroll>

          {/* 右: ご購入 */}
          <FadeInOnScroll className="flex-1" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-shippori text-xl font-bold tracking-wider text-kinari mb-2">
                ご購入について
              </h3>
              <p className="text-kinari/40 text-xs leading-relaxed">
                四百九十年の歴史を、ご家庭の食卓へ。
              </p>

              <p className="text-sm text-kinari/60 leading-[2.2] mb-8">
                ふるさと納税（さとふる）、お電話、
                またはお問合わせフォームにて承っております。
                <br />
                全国配送対応。
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.satofull.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-kinpaku/20 px-6 py-4 hover:bg-kinpaku/5 transition-colors"
                >
                  <div>
                    <p className="font-garamond text-[10px] tracking-[0.25em] text-kinpaku/50 uppercase mb-1">
                      Furusato Tax
                    </p>
                    <p className="text-sm text-kinari/80">
                      さとふるで購入
                    </p>
                  </div>
                  <span className="font-garamond text-kinpaku/40 group-hover:text-kinpaku/70 transition-colors text-lg">
                    &rarr;
                  </span>
                </a>

                <a
                  href="https://www.sensyuengyo.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-kinpaku/20 px-6 py-4 hover:bg-kinpaku/5 transition-colors"
                >
                  <div>
                    <p className="font-garamond text-[10px] tracking-[0.25em] text-kinpaku/50 uppercase mb-1">
                      Contact &amp; Order
                    </p>
                    <p className="text-sm text-kinari/80">
                      お問合わせ・ご注文
                    </p>
                  </div>
                  <span className="font-garamond text-kinpaku/40 group-hover:text-kinpaku/70 transition-colors text-lg">
                    &rarr;
                  </span>
                </a>

                <a
                  href="tel:072-428-3434"
                  className="group flex items-center justify-between border border-kinpaku/20 px-6 py-4 hover:bg-kinpaku/5 transition-colors"
                >
                  <div>
                    <p className="font-garamond text-[10px] tracking-[0.25em] text-kinpaku/50 uppercase mb-1">
                      Telephone
                    </p>
                    <p className="text-sm text-kinari/80">
                      お電話でのご注文
                    </p>
                    <p className="font-garamond text-xs text-kinari/40 mt-1">
                      (072) 428-3434
                    </p>
                  </div>
                  <span className="font-garamond text-kinpaku/40 group-hover:text-kinpaku/70 transition-colors text-lg">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
