export default function LineItem({
    left, right, sub,
}: { left: string; right?: string; sub?: string }) {
    return (
        <div className="flex items-start justify-between gap-4 prism-card inner-border p-4">
            <div>
                <div className="font-medium">{left}</div>
                {sub && <div className="text-sm text-zinc-400">{sub}</div>}
            </div>
            {right && <div className="text-xs text-zinc-500">{right}</div>}
        </div>
    );
}
