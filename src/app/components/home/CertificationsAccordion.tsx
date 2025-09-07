"use client";
import { useMemo } from "react";

type Item = {
    title: string;
    provider?: string;
    url?: string;
};

const ITEMS: Item[] = [
    {
        title: "Frontend Developer (React)",
        provider: "HackerRank",
        url: "https://www.hackerrank.com/certificates/b625d7705021"
    },
    {
        title: "Node.js (Intermediate)",
        provider: "HackerRank",
        url: "https://www.hackerrank.com/certificates/34c71b5ba35c"
    },
    {
        title: "Python (Basic)",
        provider: "HackerRank",
        url: "https://www.hackerrank.com/certificates/251c0526e2c7"
    },
    {
        title: "SQL (Advanced)",
        provider: "HackerRank",
        url: "https://www.hackerrank.com/certificates/4847cffedde9"
    },
];

function badgeColor(provider?: string) {
    const v = (provider || "").toLowerCase();
    if (v.includes("hackerrank")) return "bg-purple-500";
    return "bg-zinc-400";
}

export default function CertificationsAccordion() {
    const items = useMemo(
        () =>
            [...ITEMS].sort((a, b) => a.title.localeCompare(b.title)),
        []
    );

    return (
        <section className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4">
            <div className="flex flex-wrap gap-2">
                {items.map((c, i) => (
                    <a
                        key={i}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/60 px-3 py-1.5 text-xs hover:bg-zinc-800/60 transition"
                        title={`${c.title}${c.provider ? " · " + c.provider : ""}`}
                    >
                        <span
                            className={`h-2.5 w-2.5 rounded-full ${badgeColor(
                                c.provider
                            )}`}
                        />
                        <span className="font-medium">{c.title}</span>
                        {c.provider && (
                            <span className="text-[10px] text-zinc-400">· {c.provider}</span>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
}
