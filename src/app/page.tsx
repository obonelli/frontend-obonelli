"use client";
import "./home.css";
import Section from "./components/home/Section";
import IconLink from "./components/home/IconLink";
import ProjectsCarousel from "./components/home/ProjectsCarousel";
import TagRow from "./components/home/TagRow";
import ExperienceAccordion from "./components/home/ExperienceAccordion";
import EducationAccordion from "./components/home/EducationAccordion";
import CertificationsAccordion from "./components/home/CertificationsAccordion";

export default function HomePage() {
  return (
    <main className="pt-16 mx-auto max-w-5xl px-6 pb-24">
      {/* Header */}
      <header className="flex items-start justify-between gap-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Oscar <span className="fx-underline">Bonelli</span>
          </h1>

          <p className="mt-2 font-mono text-sm leading-relaxed text-zinc-300 max-w-[70ch]">
            Full-Stack / Front-End Engineer focused on building fast, beautiful,
            and reliable web apps that ship to production.
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
              />
            </svg>
            Mexico (Remote)
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <IconLink href="mailto:obonelli@gmail.com" label="Email">
              <path fill="currentColor" d="M22 6v12H2V6l10 7L22 6Zm-10 5L2 6h20l-10 5Z" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/oscar-bonelli" label="LinkedIn">
              <path fill="currentColor" d="M6.94 8.5H4V20h2.94V8.5ZM5.47 7.06A1.53 1.53 0 1 0 5.47 4a1.53 1.53 0 0 0 0 3.06ZM20 20h-2.93v-6.2c0-1.48-.53-2.49-1.84-2.49-1 0-1.6.68-1.86 1.33-.1.23-.13.55-.13.87V20H10.3s.04-9.77 0-10.8h2.93v1.53c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.27 3.4 4V20Z" />
            </IconLink>
            <IconLink href="https://github.com/Obonelli" label="GitHub">
              <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.85 10.94c.58.1.8-.25.8-.57v-2.1c-3.19.7-3.86-1.37-3.86-1.37-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.22 1.78 1.22 1.04 1.78 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.12-3.03 0 0 .98-.31 3.22 1.18a11.2 11.2 0 0 1 5.86 0c2.24-1.49 3.22-1.18 3.22-1.18.64 1.58.24 2.74.12 3.03.75.81 1.2 1.84 1.2 3.1 0 4.41-2.68 5.38-5.24 5.66.42.36.8 1.07.8 2.17v3.22c0 .33.21.68.81.57A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </IconLink>
            <IconLink href="/resume.pdf" label="Resume">
              <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2Z" />
            </IconLink>
          </div>
        </div>

        {/* Monograma */}
        <div className="shrink-0 overflow-hidden rounded-xl ring-1 ring-[var(--color-line)]">
          <div className="h-24 w-24 monogram-bg grid place-items-center font-black tracking-wider select-none">
            OB
          </div>
        </div>
      </header>

      {/* About */}
      <Section title="About">
        <p className="font-mono text-sm leading-7 text-zinc-300">
          I build products end-to-end: clean UI, robust APIs, and thoughtful performance.
          I enjoy refactoring, design systems, and shipping features that actually move business metrics.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ExperienceAccordion />
      </Section>

      {/* Education */}
      <Section title="Education">
        <EducationAccordion />
      </Section>

      {/* Projects — Carousel */}
      <ProjectsCarousel />

      {/* Certifications */}
      <Section title="Certifications">
        <CertificationsAccordion />
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <TagRow
          items={[
            "React / Next.js",
            "TypeScript",
            "MUI / Tailwind",
            "Node.js",
            "PostgreSQL",
            "GraphQL / REST",
            "Vercel / GCP",
            "Nx / CI-CD",
          ]}
        />
      </Section>

      {/* Soft Skills */}
      <Section title="Soft Skills">
        <TagRow
          items={[
            "Problem-solving",
            "Leadership",
            "Communication",
            "Critical thinking",
            "Growth mindset",
          ]}
        />
      </Section>

      <footer className="mt-16 border-t border-[var(--color-line)] pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Oscar Bonelli. Built with Next.js.
      </footer>
    </main>
  );
}
