export default function ExperienceItem({
    company, role, dates, bullets,
}: { company: string; role: string; dates: string; bullets: string[] }) {
    return (
        <div className="relative pl-6">
            <span
                className="absolute left-0 top-3 h-3 w-3 rounded-full"
                style={{ background: "conic-gradient(from 0deg, var(--color-cyanFx), var(--color-violetFx), var(--color-amberFx))" }}
                aria-hidden
            />
            <div className="prism-card inner-border p-4">
                <div className="flex items-baseline justify-between gap-4">
                    <div>
                        <div className="font-semibold">{company}</div>
                        <div className="text-sm text-zinc-400">{role}</div>
                    </div>
                    <div className="text-xs text-zinc-500">{dates}</div>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                    {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
            </div>
        </div>
    );
}
