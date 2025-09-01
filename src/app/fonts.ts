// src/app/fonts.ts
import { Orbitron, Exo_2 } from "next/font/google";

export const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["700"],
});

export const exo2 = Exo_2({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
});
