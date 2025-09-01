import TagRow from "./TagRow";

export type Project = {
    title: string; desc: string; tags: string[]; href?: string; live?: boolean;
};

export default function ProjectCard({ title, desc, tags, href, live }: Project) {
    return (
        <a
            href={href || "#"}
            className="min-w-[280px] sm:min-w-[360px] snap-start prism-card inner-border p-4 block group"
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
        >
            <div className="flex items-center justify-between">
                <div className="font-semibold">{title}</div>
                <div className="flex items-center gap-2 text-zinc-400">
                    {live && <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-label="Live" />}
                    <span className="text-xs group-hover:text-zinc-200 transition">↗</span>
                </div>
            </div>
            <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            <TagRow items={tags} className="mt-3" />
        </a>
    );
}
