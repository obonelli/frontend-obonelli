"use client";

import TagRow from "./TagRow";

export type Project = {
    title: string;
    desc: string;
    tags: string[];
    href?: string;
    live?: boolean;
};

export default function ProjectCard({ title, desc, tags, href, live }: Project) {
    const isDisabled = live === false;

    return (
        <a
            href={isDisabled ? undefined : href || "#"}
            className={`min-w-[280px] sm:min-w-[360px] snap-start prism-card inner-border p-4 block group ${isDisabled ? "pointer-events-none opacity-60 cursor-not-allowed" : ""
                }`}
            target={isDisabled ? undefined : "_blank"}
            rel={isDisabled ? undefined : "noreferrer"}
        >
            <div className="flex items-center justify-between">
                <div className="font-semibold">{title}</div>
                <div className="flex items-center gap-2 text-zinc-400">
                    <span
                        className={`inline-block h-2 w-2 rounded-full ${live ? "bg-emerald-400" : "bg-red-500"
                            }`}
                        aria-label={live ? "Live" : "Offline"}
                    />
                    {!isDisabled && (
                        <span className="text-xs group-hover:text-zinc-200 transition">↗</span>
                    )}
                </div>
            </div>
            <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            <TagRow items={tags} className="mt-3" />
        </a>
    );
}
