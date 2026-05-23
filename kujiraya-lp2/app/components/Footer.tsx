export default function Footer() {
  return (
    <footer className="relative bg-earth py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          {/* 波マーク */}
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
            <path d="M0 12 Q8 4 16 12 Q24 20 32 12 Q40 4 48 12" stroke="#c4b5a0" strokeWidth="1.2" fill="none" />
          </svg>

          <div className="text-center">
            <p className="font-shippori text-sm tracking-[0.3em] text-cream/80 mb-1">
              泉州塩業株式会社
            </p>
            <p className="font-cinzel text-xs tracking-[0.3em] text-sand/40">
              SENSYU ENGYO KUJIRAYA
            </p>
          </div>

          <div className="h-px w-16 bg-sand/20" />

          <p className="font-garamond text-[11px] tracking-[0.2em] text-sand/30">
            &copy; {new Date().getFullYear()} Sensyu Engyo Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
