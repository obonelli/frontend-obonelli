"use client";

import { useRef } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { exo2 } from "@/app/fonts";

export default function ProjectsCarousel() {
    const ref = useRef<HTMLDivElement>(null);
    const projects: Project[] = [
        {
            title: "SwiftFund UI Kit",
            desc: "Design-system-first React components tuned for dashboards.",
            tags: ["React", "MUI", "Tailwind", "Storybook"],
            href: "#",
            live: true,
        },
        {
            title: "Help Center / FAQ",
            desc: "Modular knowledge base with categories, search and attachments.",
            tags: ["Next.js", "GraphQL", "UI-Kit"],
            href: "#",
            live: true,
        },
        {
            title: "CTX Reflector v2",
            desc: "Real-time operations console with charts and alerts.",
            tags: ["Next.js", "Charts", "WebSockets"],
            href: "#",
        },
        {
            title: "Lux in Tenebris",
            desc: "Minimal agency site with custom color tokens and animations.",
            tags: ["Next.js", "Tailwind"],
            href: "#",
        },
    ];

    const scroll = (dx: number) =>
        ref.current?.scrollBy({ left: dx, behavior: "smooth" });

    return (
        <section
            className={`${exo2.className} mt-12`}
            role="region"
            aria-labelledby="projects"
        >
            <h2
                id="projects"
                className="text-xl font-bold mb-4 text-zinc-100 tracking-tight"
            >
                Projects
            </h2>

            <div className="relative carousel-nav">
                {/* Fades */}
                <div className="carousel-fade-left" aria-hidden />
                <div className="carousel-fade-right" aria-hidden />

                {/* Flechas laterales reales */}
                <button
                    type="button"
                    aria-label="Previous projects"
                    className="carousel-arrow left"
                    onClick={() => scroll(-360)}
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Next projects"
                    className="carousel-arrow right"
                    onClick={() => scroll(360)}
                >
                    ›
                </button>

                {/* Lista */}
                <div ref={ref} className="carousel">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
