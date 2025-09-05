"use client";
import { Orbitron, Exo_2 } from "next/font/google";
import "./home.css";
import Image from "next/image";
import Section from "./components/home/Section";
import IconLink from "./components/home/IconLink";
import ProjectsCarousel from "./components/home/ProjectsCarousel";
import ExperienceAccordion from "./components/home/ExperienceAccordion";
import EducationAccordion from "./components/home/EducationAccordion";
import CertificationsAccordion from "./components/home/CertificationsAccordion";
import Skills from "./components/home/Skills";
import SoftSkills from "./components/home/SoftSkills";

// Orbitron solo para headings (tu nombre)
const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });

// Exo 2 para todo el contenido (texto normal/italic/bold)
const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

export default function HomePage() {
  return (
    <main
      className={`${exo2.className} mx-auto max-w-5xl pb-24 pt-14 sm:pt-16 px-4 sm:px-6 snap-mobile`}
    >
      {/* Header */}
      <header className="grid grid-cols-1 gap-5 sm:flex sm:items-start sm:justify-between sm:gap-10">
        {/* Texto */}
        <div className="order-2 sm:order-1 text-center sm:text-left">
          <h1 className={`${orbitron.className} text-[28px] leading-tight sm:text-4xl font-bold tracking-tight`}>
            Oscar Antonio Bonelli Nasta
          </h1>

          <p className="mt-2 text-[13.5px] leading-6 text-zinc-300 max-w-[65ch] mx-auto sm:mx-0">
            Full-Stack / Front-End Engineer focused on building fast, beautiful,
            and reliable web apps that ship to production.
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400 justify-center sm:justify-start">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
              />
            </svg>
            Tampico, Tamps, Mexico (Remote)
          </p>

          <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
            <IconLink href="mailto:bonelli.personal@gmail.com" label="Email">
              <path fill="currentColor" d="M22 6v12H2V6l10 7L22 6Zm-10 5L2 6h20l-10 5Z" />
            </IconLink>

            {/* Teléfono */}
            <IconLink href="tel:+528332087965" label="+52 833 208 79 65">
              <path
                fill="currentColor"
                d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z"
              />
            </IconLink>

            <IconLink href="https://www.linkedin.com/in/obonelli" label="LinkedIn">
              <path
                fill="currentColor"
                d="M6.94 8.5H4V20h2.94V8.5ZM5.47 7.06A1.53 1.53 0 1 0 5.47 4a1.53 1.53 0 0 0 0 3.06ZM20 20h-2.93v-6.2c0-1.48-.53-2.49-1.84-2.49-1 0-1.6.68-1.86 1.33-.1.23-.13.55-.13.87V20H10.3s.04-9.77 0-10.8h2.93v1.53c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.27 3.4 4V20Z"
              />
            </IconLink>

            <IconLink href="https://github.com/Obonelli" label="GitHub">
              <path
                fill="currentColor"
                d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.85 10.94c.58.1.8-.25.8-.57v-2.1c-3.19.7-3.86-1.37-3.86-1.37-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.22 1.78 1.22 1.04 1.78 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.12-3.03 0 0 .98-.31 3.22 1.18a11.2 11.2 0 0 1 5.86 0c2.24-1.49 3.22-1.18 3.22-1.18.64 1.58.24 2.74.12 3.03.75.81 1.2 1.84 1.2 3.1 0 4.41-2.68 5.38-5.24 5.66.42.36.8 1.07.8 2.17v3.22c0 .33.21.68.81.57A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
              />
            </IconLink>

            <IconLink href="/Ing_Oscar_Bonelli.pdf" label="Resume">
              <path fill="currentColor" d="M5 20h14v-2H5v2Zm7-18v12l4-4h-3V4h-2v6H8l4 4V2Z" />
            </IconLink>
          </div>
        </div>

        {/* Avatar */}
        <div className="order-1 sm:order-2 justify-self-center sm:justify-self-auto">
          <div className="rounded-xl p-[2px] bg-[radial-gradient(120%_120%_at_0%_0%,rgba(139,92,246,.35)_0%,rgba(14,165,233,.18)_38%,rgba(244,63,94,.18)_70%,rgba(24,24,27,.6)_100%)] ring-1 ring-[var(--color-line)]">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-[10px] bg-zinc-900">
              <Image
                src="/obonelli.png"
                alt="Oscar Bonelli"
                fill
                sizes="96px, (min-width: 640px) 112px"
                priority
                className="object-cover filter brightness-105 contrast-105 saturate-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </div>
        </div>
      </header>

      {/* Secciones con “bloques” y snap en móvil */}
      <div className="section-block snap-section">
        <Section title="About">
          <ul className="list-disc pl-5 space-y-2 text-[13px] leading-5 text-zinc-300">
            <li>Creator of Realities — Builder of Worlds through code and imagination.</li>
            <li>I’m a software developer fully committed to delivering high-quality work and meeting deadlines.</li>
            <li>I love turning fresh ideas into real, innovative solutions that bring value.</li>
            <li>I enjoy working in teams and sharing knowledge to help others grow.</li>
            <li>Challenges fuel me — they push me to achieve results and keep growing.</li>
          </ul>
        </Section>
      </div>

      <div className="section-block snap-section">
        <Section title="Experience">
          <ExperienceAccordion />
        </Section>
      </div>

      <div className="section-block snap-section">
        <Section title="Education">
          <EducationAccordion />
        </Section>
      </div>

      <div className="section-block snap-section">
        <ProjectsCarousel />
      </div>

      <div className="section-block snap-section">
        <Section title="Certifications">
          <CertificationsAccordion />
        </Section>
      </div>

      <div className="section-block snap-section">
        <Section title="Skills">
          <Skills />
        </Section>
      </div>

      <div className="section-block snap-section">
        <Section title="Soft Skills">
          <SoftSkills />
        </Section>
      </div>

      <footer className="mt-16 border-t border-[var(--color-line)] pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Oscar Bonelli. Built with Next.js.
      </footer>
    </main>
  );
}
