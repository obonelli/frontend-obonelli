"use client";

import { useRef, useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { exo2 } from "@/app/fonts";

export default function ProjectsCarousel() {
    const ref = useRef<HTMLDivElement>(null);
    const [showNotice, setShowNotice] = useState(true);

    const projects: Project[] = [
        {
            title: "Lunara Games",
            desc:
                "Indie studio focused on crafting 2D experiences with AI-driven NPCs. Starting simple with CSS and Canvas, evolving into richer cross-platform worlds.",
            tags: ["JavaScript", "Canvas", "AI NPCs", "Cross-Platform"],
            href: "#",
            live: false,
        },
        {
            title: "Raven RAG — Private AI Search (Python + MySQL)",
            desc:
                "Retrieval-Augmented Generation service with FastAPI + Prisma + MySQL. Stores embeddings in MySQL and performs hybrid search with LangChain, packaged with Docker and ready to integrate with Next.js apps.",
            tags: ["Python", "FastAPI", "RAG", "Prisma", "MySQL", "LangChain", "Embeddings", "Docker"],
            href: "https://raven-rag.onrender.com/docs#/",
            live: true,
        },

        {
            title: "OmniOps LLM Platform",
            desc:
                "Autonomous AI layer that orchestrates processes, builds a live knowledge graph, and automates operations across the whole app — boosting efficiency and decision-making.",
            tags: ["Next.js", "LLM", "Agents", "Knowledge Graph", "Ops Automation", "Python"],
            href: "https://llmplatform.obonelli.dev/",
            live: true,
        },
        {
            title: "Lux In Tenebris — AI Recruitment Platform",
            desc:
                "Next.js 15 recruitment system that connects candidates with open roles, powered by AI-assisted matching, talent pool search, and technical screening. A modern job board built with scalability and real-time insights in mind.",
            tags: ["Next.js", "Prisma", "MySQL", "MUI", "NextAuth", "OpenAI"],
            href: "https://www.luxintenebris.mx/",
            live: true,
        }
    ];

    const scroll = (dx: number) =>
        ref.current?.scrollBy({ left: dx, behavior: "smooth" });

    return (
        <section
            className={`${exo2.className} mt-12`}
            role="region"
            aria-labelledby="projects"
        >
            {/* Título + aviso */}
            <div className="mb-4 flex items-center gap-3">
                <h2
                    id="projects"
                    className="text-xl font-bold text-zinc-100 tracking-tight"
                >
                    Projects
                </h2>

                {showNotice && (
                    <span
                        className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-md bg-zinc-800/70 ring-1 ring-zinc-700/60 text-zinc-300"
                        aria-live="polite"
                        title="Los dominios/enlaces se publicarán en ≤ 48 horas."
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            className="opacity-90"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.263 10.263 0 0 0 12 1.75m.75 5a.75.75 0 0 0-1.5 0v5.19a.75.75 0 0 0 .22.53l3.38 3.38a.75.75 0 0 0 1.06-1.06L12.75 12.7Z"
                            />
                        </svg>
                        All projects domains will go live very soon 🚀
                        <button
                            onClick={() => setShowNotice(false)}
                            className="ml-2 text-zinc-400 hover:text-zinc-200 transition"
                            aria-label="Close notice"
                        >
                            ✕
                        </button>
                    </span>
                )}
            </div>

            <div className="relative carousel-nav">
                {/* Fades */}
                <div className="carousel-fade-left" aria-hidden />
                <div className="carousel-fade-right" aria-hidden />

                {/* Flechas */}
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
