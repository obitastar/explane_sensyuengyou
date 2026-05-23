"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  charDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function VerticalText({
  text,
  className = "",
  charDelay = 0.08,
  as: Tag = "h2",
}: Props) {
  const chars = text.split("");

  return (
    <Tag
      className={`vertical-rl font-shippori font-bold ${className}`}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * charDelay }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
