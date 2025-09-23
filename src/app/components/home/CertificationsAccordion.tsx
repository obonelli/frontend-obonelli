"use client";
import { useMemo } from "react";

type Item = {
    title: string;
    provider?: string;
    url?: string;
};

const ITEMS: Item[] = [
    {
        title: "Problem Solving (Intermediate)",
        provider: "HackerRank",
        url: "https://www.hackerrank.com/certificates/3d79447a14ab"
    },
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
    {
        title: "JavaScript (Advanced)",
        provider: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/certificates/b8868ab729615356c8fd30d5181d31e5be3fdc3f041813919b085d2e19df283c"
    },
    {
        title: "Python (Advanced)",
        provider: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/certificates/4c1c4265b1809c704b96b06f100d87355f5d2b05b9b1d575ae50e4fb56b16891?trk=share_certificate"
    },
    {
        title: "AWS Cloud Practitioner Essentials",
        provider: "AWS",
        url: "AWS_Cloud_Practitioner_Essentials.pdf"
    },
    {
        title: "AWS Lambda Foundations",
        provider: "AWS",
        url: "AWS_Lambda_Foundations.pdf"
    },
    {
        title: "DevOps: Docker (Advanced)",
        provider: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/certificates/c702e91d149371b5dc0bb54e39cb7ca4745218f91ddbcf1581fafb7f2092dde7?trk=share_certificate"
    },
    {
        title: "Fine-Tunning for LLMs (Advanced)",
        provider: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/certificates/c1e903feed38df2204620d887f209a9cf818e47b89e77e6f47c5114aa29424ed"
    }
];

function badgeColor(provider?: string) {
    const v = (provider || "").toLowerCase();
    if (v.includes("hackerrank")) return "bg-purple-500";
    if (v.includes("linkedin")) return "bg-sky-500";
    if (v === "aws") return "bg-yellow-400";
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
