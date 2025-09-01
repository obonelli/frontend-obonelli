"use client";

import Drawer from "./Drawer";
import { orbitron, exo2 } from "@/app/fonts";

export default function EducationAccordion() {
    return (
        <div className={`${exo2.className} space-y-2`}>
            <Drawer
                title="Master in Quality and Competitiveness — IEST Anáhuac"
                meta="2014 – 2016"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <div className="text-sm text-zinc-300">Tampico, México</div>
            </Drawer>

            <Drawer
                title="B.S. in Superior Computer Systems — CEDIP"
                meta="2008 – 2012"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <div className="text-sm text-zinc-300">Tampico, México</div>
            </Drawer>
        </div>
    );
}
