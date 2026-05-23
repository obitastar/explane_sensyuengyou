import KujirayaLogo from "./KujirayaLogo";

export default function Footer() {
  return (
    <footer className="relative bg-shikkoku border-t border-kinpaku/10 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          {/* ロゴ */}
          <KujirayaLogo size={100} />

          {/* 社名 */}
          <div className="text-center">
            <p className="font-shippori text-sm tracking-[0.3em] text-kinari/60 mb-1">
              泉州塩業株式会社
            </p>
            <p className="font-cinzel text-xs tracking-[0.3em] text-kinari/30">
              SENSYU ENGYO KUJIRAYA
            </p>
          </div>

          {/* 金の細線 */}
          <div className="gold-line w-24" />

          {/* コピーライト */}
          <p className="font-garamond text-[11px] tracking-[0.2em] text-kinari/20">
            &copy; {new Date().getFullYear()} Sensyu Engyo Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
