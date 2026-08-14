import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {text.split(" ").map((word, w) => {
        const start = index;
        index += word.length + 1;
        return (
          <span key={w} className="inline-block whitespace-nowrap">
            {word.split("").map((char, i) => (
              <Char
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[(start + i) / total, (start + i + 1) / total]}
              />
            ))}
            <Char
              char=" "
              progress={scrollYProgress}
              range={[(start + word.length) / total, (start + word.length + 1) / total]}
            />
          </span>
        );
      })}
    </p>
  );
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
