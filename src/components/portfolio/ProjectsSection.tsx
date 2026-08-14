import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./Buttons";

import quickcart1 from "@/assets/quickcart-1.png.asset.json";
import quickcart2 from "@/assets/quickcart-2.png.asset.json";
import quickcart3 from "@/assets/quickcart-3.png.asset.json";
import quickcart4 from "@/assets/quickcart-4.png.asset.json";
import transformx1 from "@/assets/transformx-1.jpeg.asset.json";
import transformx2 from "@/assets/transformx-2.jpeg.asset.json";
import transformx3 from "@/assets/transformx-3.jpeg.asset.json";
import erp1 from "@/assets/erp-1.jpg.asset.json";
import erp2 from "@/assets/erp-2.jpg.asset.json";
import erp3 from "@/assets/erp-3.jpg.asset.json";
import atlas1 from "@/assets/atlas-1.jpeg.asset.json";
import atlas2 from "@/assets/atlas-2.jpeg.asset.json";
import atlas3 from "@/assets/atlas-3.jpeg.asset.json";

const PROJECTS = [
  {
    n: "01",
    category: "Full-Stack / E-commerce",
    name: "QuickCart",
    stack: "Next.js · React · Tailwind · Node.js · Express · PostgreSQL (Prisma) · TypeScript",
    desc: "Full-stack e-commerce platform with JWT authentication, vendor & admin dashboards, product CRUD, cart, coupons, reviews, Cloudinary uploads and secure Stripe checkout, with Redux Toolkit + RTK Query state and real-time inventory.",
    link: "https://github.com/JAWAD-72",
    linkLabel: "View Project",
    shape: "wide" as const,
    images: [quickcart1.url, quickcart2.url, quickcart3.url, quickcart4.url],
  },
  {
    n: "02",
    category: "Full-Stack / Web App",
    name: "Transform-X",
    stack: "React · Vite · Tailwind CSS · Shadcn UI · Supabase · PL/pgSQL · TypeScript",
    desc: "AI fitness companion with body scans, TDEE and calorie targets, workout splits and meal plans — user authentication, secure data storage and Supabase-powered backend logic behind an accessible dark Shadcn UI interface.",
    link: "https://transform-x.lovable.app",
    linkLabel: "Live Project",
    shape: "tall" as const,
    images: [transformx1.url, transformx2.url, transformx3.url],
  },
  {
    n: "03",
    category: "ERP / Institutional",
    name: "Library ERP System",
    stack: "Next.js · React · Tailwind CSS · Supabase · JavaScript",
    desc: "Institutional Library ERP that streamlines student registration, financial tracking and automated academic reporting, with a modular admin dashboard, quick-action modals and a real-time serverless Supabase architecture.",
    link: "https://github.com/JAWAD-72",
    linkLabel: "View Project",
    shape: "wide" as const,
    images: [erp1.url, erp2.url, erp3.url],
  },
  {
    n: "04",
    category: "AI / Automation",
    name: "ATLAS — Multimodal AI Telegram Assistant",
    stack: "Python · Google Gemini API · Groq Whisper · SQLite · SQLAlchemy · APScheduler · Render",
    desc: "Autonomous multimodal Telegram assistant processing text, voice notes, photos, PDFs and spreadsheets via Groq Whisper and Google Gemini. Integrates real-time stock market data, RSS news feeds and AI deep-research synthesis for context-aware insights, with SQLite/SQLAlchemy memory persistence and timezone-aware APScheduler daily briefings.",
    link: "https://t.me/MeetAtlasBot",
    linkLabel: "Try the Bot",
    shape: "tall" as const,
    images: [atlas1.url, atlas2.url, atlas3.url],
  },
];


function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number];
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
              {project.n}
            </span>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
              <p className="max-w-xl text-xs font-light uppercase tracking-wide text-[#D7E2EA]/50 sm:text-sm">
                {project.stack}
              </p>
              <p className="hidden max-w-2xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 md:block">
                {project.desc}
              </p>
            </div>
          </div>
          <LiveProjectButton label={project.linkLabel} href={project.link} />
        </div>

        <div
          className={`mt-6 grid gap-3 ${
            project.shape === "tall"
              ? "grid-cols-3"
              : "grid-cols-2 sm:grid-cols-" + Math.min(project.images.length, 4)
          }`}
        >
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name} screen ${i + 1}`}
              loading="lazy"
              className="w-full rounded-[24px] border border-[#D7E2EA]/10 object-cover object-top sm:rounded-[32px] md:rounded-[40px]"
              style={{
                height:
                  project.shape === "tall"
                    ? "clamp(220px, 30vw, 460px)"
                    : "clamp(120px, 15vw, 240px)",
              }}
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
