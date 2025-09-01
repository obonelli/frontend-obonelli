export default function TagRow({ items, className = "" }: { items: string[]; className?: string }) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {items.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
    );
}
