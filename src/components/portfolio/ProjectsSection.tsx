import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./Buttons";

const IMG = (id: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${id}&w=1280&q=85`;

const PROJECTS = [
  {
    n: "01",
    category: "Full-Stack / E-commerce",
    name: "QuickCart",
    stack: "Next.js · React · Tailwind · Node.js · Express · PostgreSQL (Prisma) · TypeScript",
    desc: "Full-stack e-commerce platform with JWT authentication, vendor & admin dashboards, product CRUD, cart, coupons, reviews, Cloudinary uploads and secure Stripe checkout, with Redux Toolkit + RTK Query state and real-time inventory.",
    images: [
      IMG("hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png"),
      IMG("hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png"),
      IMG("hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png"),
    ],
  },
  {
    n: "02",
    category: "Full-Stack / Web App",
    name: "Transform-X",
    stack: "React · Vite · Tailwind CSS · Shadcn UI · Supabase · PL/pgSQL · TypeScript",
    desc: "Responsive full-stack application with user authentication, secure data storage and Supabase-powered backend logic, robust PL/pgSQL database workflows and an accessible, high-fidelity Shadcn UI interface.",
    images: [
      IMG("hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png"),
      IMG("hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png"),
      IMG("hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png"),
    ],
  },
  {
    n: "03",
    category: "ERP / Institutional",
    name: "Library ERP System",
    stack: "Next.js · React · Tailwind CSS · Supabase · JavaScript",
    desc: "Institutional Library ERP that streamlines student registration, financial tracking and automated academic reporting, with a modular admin dashboard, quick-action modals and a real-time serverless Supabase architecture.",
    images: [
      IMG("hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png"),
      IMG("hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png"),
      IMG("hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png"),
    ],
  },
  {
    n: "04",
    category: "AI / Automation",
    name: "ATLAS — Multimodal AI Telegram Assistant",
    stack: "Python · Google Gemini API · Groq Whisper · SQLite · SQLAlchemy · APScheduler · Render",
    desc: "Autonomous multimodal Telegram assistant processing text, voice notes, photos, PDFs and spreadsheets via Groq Whisper and Google Gemini. Integrates real-time stock market data, RSS news feeds and AI deep-research synthesis for context-aware insights, with SQLite/SQLAlchemy memory persistence and timezone-aware APScheduler daily briefings.",
    images: [
      IMG("hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png"),
      IMG("hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png"),
      IMG("hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png"),
    ],
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
          <LiveProjectButton />
        </div>

        <div className="mt-6 flex gap-3">
          <div className="flex w-[40%] flex-col gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} interface preview`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} detail preview`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images[2]}
              alt={`${project.name} full preview`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
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
