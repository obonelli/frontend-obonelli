export default function IconLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            aria-label={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-[var(--color-line)] text-zinc-300
                 hover:text-white hover:bg-zinc-800 hover:scale-105 hover:ring-zinc-500
                 transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none"
            >
                {children}
            </svg>
        </a>
    );
}
