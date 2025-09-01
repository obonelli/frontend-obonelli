// src/app/components/home/CertificationsAccordion.tsx
"use client";
import { useMemo } from "react";

/**
 * Lista unificada y minimal de certificaciones/cursos (sin años).
 * Fuente: tu PDF (sección COURSES + los 2 certs). 
 */

type Item = {
    title: string;
    provider?: string; // Platzi, Coursera, Google, etc.
};

const ITEMS: Item[] = [
    { title: "AWS Solutions Architect", provider: "Amazon Web Services" },
    { title: "Advanced JavaScript", provider: "Coursera" },
    { title: "API Design and Development", provider: "Coursera" },
    { title: "Agile Project Management with Scrum", provider: "edX" },
    { title: "Full-Stack Web Development", provider: "Udemy" },
    { title: "Git and GitHub", provider: "Udacity" },
    { title: "React.js", provider: "Platzi" },
    { title: "Tailwind CSS", provider: "Platzi" },
    { title: "Node.js", provider: "Platzi" },
    { title: "Backend Web Development with PHP", provider: "Platzi" },
    { title: "MySQL and SQL Server", provider: "Platzi" },
];

function iconFor(text?: string) {
    const v = (text || "").toLowerCase();
    if (v.includes("google") || v.includes("analytics")) return "📈";
    if (v.includes("neo4j")) return "🕸️";
    if (v.includes("amazon") || v.includes("aws")) return "☁️";
    if (v.includes("coursera")) return "🟦";
    if (v.includes("edx")) return "🧠";
    if (v.includes("udemy")) return "🟨";
    if (v.includes("udacity")) return "🔷";
    if (v.includes("platzi")) return "🟩";
    return "📜";
}

export default function CertificationsAccordion() {
    // Orden: proveedor A-Z y luego título A-Z
    const items = useMemo(
        () =>
            [...ITEMS].sort((a, b) => {
                const pa = (a.provider || "").toLowerCase();
                const pb = (b.provider || "").toLowerCase();
                if (pa !== pb) return pa.localeCompare(pb);
                return a.title.localeCompare(b.title);
            }),
        []
    );

    // UI: grid de “chips-cards” homogéneos (compactos, minimal)
    return (
        <section className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4">
            <div className="flex flex-wrap gap-2">
                {items.map((c, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/60 px-3 py-1.5 text-xs"
                        title={`${c.title}${c.provider ? " · " + c.provider : ""}`}
                    >
                        <span className="text-base leading-none">
                            {iconFor(c.provider || c.title)}
                        </span>
                        <span className="font-medium">{c.title}</span>
                        {c.provider && (
                            <span className="text-[10px] text-zinc-400">· {c.provider}</span>
                        )}
                    </span>
                ))}
            </div>
        </section>
    );
}
