"use client";

import { useState, PropsWithChildren } from "react";
import clsx from "clsx";

type DrawerProps = PropsWithChildren<{
    title: string;
    meta?: string;
    className?: string;
    /** Aplica tipografía/estilos al título (ej. Orbitron) */
    titleClassName?: string;
    /** Aplica tipografía/estilos al meta (ej. Exo 2 italic) */
    metaClassName?: string;
    /** Controla apertura inicial */
    defaultOpen?: boolean;
}>;

/**
 * Drawer simple con <details> para accesibilidad.
 * Permite inyectar clases de tipografía para title/meta.
 */
export default function Drawer({
    title,
    meta,
    children,
    className,
    titleClassName,
    metaClassName,
    defaultOpen = false,
}: DrawerProps) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <details
            open={open}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
            className={clsx(
                "group rounded-lg border border-[var(--color-line)] bg-black/20 backdrop-blur-sm",
                "transition-shadow hover:shadow-[0_0_0_1px_var(--color-line)]",
                className
            )}
        >
            <summary
                className={clsx(
                    "flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 select-none",
                    "marker:hidden"
                )}
            >
                <div className="min-w-0">
                    <h3
                        className={clsx(
                            "text-base sm:text-lg tracking-tight truncate",
                            titleClassName
                        )}
                        title={title}
                    >
                        {title}
                    </h3>
                    {meta ? (
                        <p
                            className={clsx(
                                "mt-0.5 text-xs sm:text-[13px] text-zinc-400",
                                metaClassName
                            )}
                        >
                            {meta}
                        </p>
                    ) : null}
                </div>

                <span
                    aria-hidden
                    className={clsx(
                        "shrink-0 inline-grid place-items-center rounded-md border border-[var(--color-line)] px-2 py-1 text-[11px]",
                        "text-zinc-300"
                    )}
                >
                    {open ? "Hide" : "Show"}
                </span>
            </summary>

            <div className="px-5 pb-4">
                {children}
            </div>
        </details>
    );
}
