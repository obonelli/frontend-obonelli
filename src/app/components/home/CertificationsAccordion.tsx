"use client";
import { useMemo } from "react";

type Item = {
    title: string;
    provider?: string;
};

const ITEMS: Item[] = [
    { title: "AWS Solutions Architect", provider: "Amazon Web Services" },
    { title: "Advanced JavaScript", provider: "Coursera" },
    { title: "API Design and Development", provider: "Coursera" },
    { title: "Agile Project Management with Scrum", provider: "edX" },
    { title: "TypeScript Fundamentals", provider: "Udemy" },
    { title: "Git and GitHub", provider: "Udacity" },
    { title: "React.js", provider: "Platzi" },
    { title: "Tailwind CSS", provider: "Platzi" },
    { title: "Node.js", provider: "Platzi" },
    { title: "Python for Machine Learning", provider: "Platzi" },
    { title: "MySQL and SQL Server", provider: "Platzi" },
];

function badgeColor(provider?: string) {
    const v = (provider || "").toLowerCase();
    if (v.includes("amazon")) return "bg-orange-400";
    if (v.includes("coursera")) return "bg-blue-500";
    if (v.includes("edx")) return "bg-pink-500";
    if (v.includes("udemy")) return "bg-yellow-400";
    if (v.includes("udacity")) return "bg-cyan-500";
    if (v.includes("platzi")) return "bg-green-500";
    return "bg-zinc-400";
}

export default function CertificationsAccordion() {
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

    return (
        <section className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4">
            <div className="flex flex-wrap gap-2">
                {items.map((c, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/60 px-3 py-1.5 text-xs"
                        title={`${c.title}${c.provider ? " · " + c.provider : ""}`}
                    >
                        {/* Badge uniforme */}
                        <span
                            className={`h-2.5 w-2.5 rounded-full ${badgeColor(
                                c.provider
                            )}`}
                        />
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
