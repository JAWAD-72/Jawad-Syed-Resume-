import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";

const EXPERIENCE = [
  {
    n: "01",
    category: "Software Engineering Intern",
    name: "MBMC",
    period: "Aug 9, 2024 — Jan 20, 2025",
    stack: "Website Testing · QA · UI Usability · Bug Fixing",
    points: [
      "Worked as a Software Engineering Intern under SIP-8.",
      "Assisted in website testing and quality assurance.",
      "Improved UI usability and user experience.",
      "Helped identify and resolve website issues.",
    ],
  },
  {
    n: "02",
    category: "Web Development Intern",
    name: "Compozent",
    period: "Jan 15, 2025 — Feb 15, 2025",
    stack: "React · REST APIs · Responsive Frontend",
    points: [
      "Developed a responsive Weather Application.",
      "Integrated real-time weather APIs.",
      "Built a mobile-friendly frontend.",
    ],
  },
  {
    n: "03",
    category: "Software Engineer Intern",
    name: "Simpler Technologies",
    period: "Oct 6, 2025 — Nov 16, 2025",
    stack: "Next.js · Supabase · Backend Logic · Frontend Integration",
    points: [
      "Developed a Library ERP System.",
      "Designed and implemented modules for library management.",
      "Worked on backend logic and frontend integration.",
    ],
  },
];

function ExperienceCard({
  item,
  index,
  total,
  progress,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: "#0C0C0C",
          position: "relative",
        }}
        className="w-full rounded-[40px] border-2 border-[#D7E2EA] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {item.n}
            </span>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {item.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {item.name}
              </h3>
              <p className="max-w-xl text-xs font-light uppercase tracking-wide text-[#D7E2EA]/50 sm:text-sm">
                {item.stack}
              </p>
            </div>
          </div>
          <span className="rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:px-8 sm:py-3 sm:text-sm">
            {item.period}
          </span>
        </div>

        <ul className="mt-6 grid gap-3 sm:mt-8">
          {item.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-[24px] border border-[#D7E2EA]/10 px-5 py-4 text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:rounded-[32px] sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7E2EA]/50" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative z-10 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Work
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {EXPERIENCE.map((e, i) => (
          <ExperienceCard
            key={e.n}
            item={e}
            index={i}
            total={EXPERIENCE.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
