export default function Section({
    title, children, id,
}: { title: string; id?: string; children: React.ReactNode }) {
    const hid = id ?? title;
    return (
        <section className="mt-12" role="region" aria-labelledby={hid}>
            <h2 id={hid} className="text-xl font-bold">{title}</h2>
            <div className="mt-4 space-y-3">{children}</div>
        </section>
    );
}
