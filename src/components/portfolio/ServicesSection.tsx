import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    n: "01",
    name: "Full-Stack Development",
    d: "End-to-end web applications built with React, Next.js, Node.js and Express, from database schema to polished production interface.",
  },
  {
    n: "02",
    name: "Frontend & UI Engineering",
    d: "Responsive, accessible interfaces with Tailwind CSS and Shadcn UI, focused on layout, typography and a seamless user experience.",
  },
  {
    n: "03",
    name: "Backend & APIs",
    d: "Secure REST APIs, JWT authentication, role-based access control and payment integrations such as Stripe checkout flows.",
  },
  {
    n: "04",
    name: "Databases & Cloud",
    d: "PostgreSQL with Prisma, Supabase serverless data, PL/pgSQL workflows and SQLite with SQLAlchemy for persistent, reliable state.",
  },
  {
    n: "05",
    name: "AI Integration & Automation",
    d: "Multimodal AI assistants and automation with Google Gemini, Groq Whisper and scheduled background jobs via APScheduler.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)", color: "#0C0C0C" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
                borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
              }}
            >
              <span
                className="font-black leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", color: "#0C0C0C" }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#0C0C0C" }}
                >
                  {s.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    color: "#0C0C0C",
                    opacity: 0.6,
                  }}
                >
                  {s.d}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
