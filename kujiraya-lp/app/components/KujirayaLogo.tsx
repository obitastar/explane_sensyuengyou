type Props = {
  size?: number;
  className?: string;
};

export default function KujirayaLogo({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 外円 */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="#b8935a"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="#b8935a"
        strokeWidth="0.5"
        fill="none"
      />

      {/* 上部テキスト: SENSYU ENGYO */}
      <text
        fill="#b8935a"
        fontFamily="Cinzel, serif"
        fontSize="9"
        letterSpacing="0.15em"
      >
        <textPath href="#upperArc" startOffset="50%" textAnchor="middle">
          SENSYU ENGYO
        </textPath>
      </text>
      <defs>
        <path
          id="upperArc"
          d="M 30 100 A 70 70 0 0 1 170 100"
        />
      </defs>

      {/* 下部テキスト: KUJIRAYA */}
      <text
        fill="#b8935a"
        fontFamily="Cinzel, serif"
        fontSize="9"
        letterSpacing="0.15em"
      >
        <textPath href="#lowerArc" startOffset="50%" textAnchor="middle">
          KUJIRAYA
        </textPath>
      </text>
      <defs>
        <path
          id="lowerArc"
          d="M 35 115 A 70 70 0 0 0 165 115"
        />
      </defs>

      {/* 中央: 鯨と波の簡易表現 */}
      <g transform="translate(100, 95)" fill="#b8935a">
        {/* 波 */}
        <path
          d="M-30 10 Q-20 0 -10 10 Q0 20 10 10 Q20 0 30 10"
          stroke="#b8935a"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-25 16 Q-15 6 -5 16 Q5 26 15 16 Q25 6 35 16"
          stroke="#b8935a"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        {/* 鯨(簡略化したシルエット) */}
        <ellipse cx="0" cy="-8" rx="18" ry="8" opacity="0.9" />
        <path d="M16 -10 Q24 -20 28 -14 Q26 -8 18 -6Z" />
        <circle cx="-8" cy="-10" r="1.5" fill="#0a0a0a" />
      </g>

      {/* SINCE 1532 */}
      <text
        x="100"
        y="160"
        fill="#b8935a"
        fontFamily="Cormorant Garamond, serif"
        fontSize="8"
        textAnchor="middle"
        letterSpacing="0.2em"
        opacity="0.7"
      >
        SINCE 1532
      </text>
    </svg>
  );
}
