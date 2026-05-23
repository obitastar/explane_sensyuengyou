"use client";

import FadeInOnScroll from "./FadeInOnScroll";

type Props = {
  ja: string;
  en: string;
  className?: string;
};

export default function SectionTitle({ ja, en, className = "" }: Props) {
  return (
    <FadeInOnScroll className={`mb-16 text-center ${className}`}>
      <p className="font-garamond text-sm tracking-[0.3em] text-terracotta/70 uppercase mb-3">
        {en}
      </p>
      <h2 className="font-shippori text-3xl md:text-4xl font-bold tracking-wider text-earth">
        {ja}
      </h2>
      <div className="accent-line mt-6 w-16 mx-auto" />
    </FadeInOnScroll>
  );
}
