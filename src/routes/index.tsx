import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jawad Syed — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jawad Syed, full stack developer building scalable web apps with React, Next.js, Node.js, Supabase and AI integrations.",
      },
      { property: "og:title", content: "Jawad Syed — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full stack developer crafting scalable web applications, ERP systems and AI-powered assistants.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <footer
        className="px-6 py-12 text-center text-xs uppercase tracking-widest text-[#D7E2EA]/60 md:px-10"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        Jawad Syed · +91 9555903369 · jawadsyed421@gmail.com ·{" "}
        <a href="https://github.com/JAWAD-72" className="hover:opacity-70">
          github.com/JAWAD-72
        </a>
      </footer>
    </main>
  );
}
