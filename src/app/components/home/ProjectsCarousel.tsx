"use client";

import { useRef } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { exo2 } from "@/app/fonts";

export default function ProjectsCarousel() {
    const ref = useRef<HTMLDivElement>(null);

    const projects: Project[] = [
        {
            title: "Raven UI — React + Tailwind v4",
            desc:
                "Reusable design system: Buttons, Inputs and more. Packaged for npm, dual ESM/CJS, PostCSS/Tailwind v4 styles and Storybook docs.",
            tags: ["React", "Tailwind v4", "Storybook", "npm package", "PostCSS"],
            href: "https://raven-ui.obonelli.dev",
            live: true,
        },
        {
            title: "Raven-One — App Shell",
            desc:
                "Next.js base app that centralizes all our web projects. Navigation, theming, and shared layout with our custom Raven UI.",
            tags: ["Next.js 15", "App Router", "Raven UI", "Tailwind"],
            href: "https://raven-one.obonelli.dev/",
            live: true,
        },
        {
            title: "Raven Core — Backend Node stack",
            desc:
                "Production-ready Node.js backend: Express + TypeScript, DynamoDB for Users, Prisma/MySQL for UserDetails, Redis cache, JWT auth, OpenAPI/Swagger, Jest tests, CI/CD, and observability via Sentry/Prometheus/Grafana.",
            tags: [
                "Node.js",
                "Express",
                "TypeScript",
                "DynamoDB",
                "Prisma",
                "MySQL",
                "Redis",
                "JWT",
                "OpenAPI",
                "Jest",
                "CI/CD",
                "Sentry",
                "Prometheus",
                "Grafana",
            ],
            href: "https://github.com/obonelli/Raven-core",
            live: true,
        },
        {
            title: "Raven RAG — Private AI Search (Python + MySQL)",
            desc:
                "Retrieval-Augmented Generation service with FastAPI + Prisma + MySQL. Stores embeddings in MySQL and performs hybrid search with LangChain, packaged with Docker and ready to integrate with Next.js apps.",
            tags: ["Python", "FastAPI", "RAG", "Prisma", "MySQL", "LangChain", "Docker"],
            href: "https://github.com/obonelli/Raven-rag",
            live: true,
        },
    ];

    const scroll = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

    return (
        <section className={`${exo2.className} mt-12`} role="region" aria-labelledby="projects">
            <div className="mb-4">
                <h2 id="projects" className="text-xl font-bold text-zinc-100 tracking-tight">
                    Projects
                </h2>
            </div>

            <div className="relative carousel-nav">
                {/* Fades */}
                <div className="carousel-fade-left" aria-hidden />
                <div className="carousel-fade-right" aria-hidden />

                {/* Arrows */}
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

                {/* List */}
                <div ref={ref} className="carousel">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
