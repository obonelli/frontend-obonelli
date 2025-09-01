"use client";
import { useId, useRef, useState, useEffect } from "react";

export default function Drawer({
    title,
    meta,            // opcional: texto a la derecha (p.ej. fechas)
    children,
    defaultOpen = false,
}: {
    title: string;
    meta?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);
    const btnId = useId();
    const panelId = useId();
    const panelRef = useRef<HTMLDivElement>(null);

    // animar max-height para smooth open/close
    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;
        if (open) {
            el.style.maxHeight = el.scrollHeight + "px";
            el.classList.add("open");
        } else {
            el.style.maxHeight = "0px";
            el.classList.remove("open");
        }
    }, [open]);

    return (
        <div className="drawer">
            <button
                id={btnId}
                className="drawer-btn"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen(!open)}
            >
                <span className="drawer-title">{title}</span>
                <span className="flex items-center gap-3">
                    {meta && <span className="text-xs text-zinc-400">{meta}</span>}
                    <span className="drawer-caret">›</span>
                </span>
            </button>

            <div
                id={panelId}
                ref={panelRef}
                role="region"
                aria-labelledby={btnId}
                className="drawer-panel"
            >
                <div className="drawer-content">{children}</div>
            </div>
        </div>
    );
}
