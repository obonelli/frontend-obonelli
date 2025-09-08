"use client";

import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { orbitron, exo2 } from "@/app/fonts";

export default function ExperienceAccordion() {
    // Assume MOBILE on first render (SSR) so drawers don't auto-open
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const check = () => {
            // Match Tailwind's sm: breakpoint (640px)
            const mq = window.matchMedia("(max-width: 639px)");
            setIsMobile(mq.matches);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div className={`${exo2.className} space-y-2`}>
            {/* key forces remount when switching between mobile/desktop */}
            <Drawer
                key={isMobile ? "m" : "d"}
                title="Cloud Transit Xchange — Lead Full-Stack Engineer"
                meta="06/2024 – 06/2025"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
                defaultOpen={!isMobile} // open by default only on desktop
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Frontend: React, Next.js, React Native (Expo), TypeScript.</li>
                    <li>Backend: Node.js (Express), Python (FastAPI); REST & GraphQL APIs.</li>
                    <li>Cloud: AWS Lambda; Cloud Functions.</li>
                    <li>CI/CD: CircleCI; GitHub Actions.</li>
                    <li>Testing: Jest; React Testing Library; Enzyme.</li>
                    <li>Quality: Modular components; Husky; ESLint.</li>
                    <li>UI/UX: Prototypes & wireframes in Figma.</li>
                    <li>
                        Achievements: refactored & modernized v1; strengthened codebase; led next-gen UI; delivered a scalable white-label system.
                    </li>
                </ul>
            </Drawer>

            <Drawer
                title="Persistent Systems — Lead Engineer"
                meta="05/2023 – 06/2024"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Backend: Node.js (Express, TypeScript), Python; RESTful & GraphQL APIs.</li>
                    <li>Frontend (Dev): JS, HTML, CSS, React, Next.js, Redux, TS, Tailwind; REST & GraphQL (Apollo).</li>
                    <li>UX/UI: Material UI, Tailwind, responsive design; Storybook for UI components.</li>
                    <li>Databases: MySQL (Prisma), MongoDB (Mongoose).</li>
                    <li>Testing: Unit & integration testing with Jest.</li>
                    <li>Version Control: GitLab workflows.</li>
                    <li>Methodology: Agile/Scrum.</li>
                    <li>
                        Achievements: +40% API speed; test coverage 60%→90%; −25% component build time with Storybook.
                    </li>
                </ul>
            </Drawer>

            <Drawer
                title="Coppel — Software Developer"
                meta="08/2018 – 04/2023"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>PHP (Laravel), Node.js (Express), Java (Spring, Hibernate, Batch), React.js, React Native, Redux.</li>
                    <li>Automation with Maven & Jenkins; AWS services; DB optimization (MySQL, SQL Server, PostgreSQL, MongoDB).</li>
                    <li>Improved e-commerce platform (+5% sales).</li>
                    <li>Loyalty points system (+25% retention).</li>
                    <li>UI redesign with UX team (+30% satisfaction).</li>
                    <li>React Native performance improvements (+20% downloads).</li>
                </ul>
            </Drawer>

            <Drawer
                title="Cabezut — Engineer in Software Development"
                meta="04/2015 – 06/2018"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Developed APIs & web services; −50% data retrieval time.</li>
                    <li>DB tuning (MySQL, SQL Server); −25% server load.</li>
                    <li>Stack: PHP OOP MVC, React.js, Vanilla JS, jQuery, Bootstrap.</li>
                    <li>On-time, on-budget delivery (+15% client satisfaction).</li>
                </ul>
            </Drawer>

            <Drawer
                title="Self-Employed - Senior Software Engineer"
                meta="04/2012 – Present"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Backend: PHP, Node.js, Python (Django, Flask, FastAPI).</li>
                    <li>Frontend: React.js, AngularJS, JavaScript, jQuery, Less/Sass.</li>
                    <li>Databases: MySQL, SQL Server, PostgreSQL, MongoDB.</li>
                    <li>AI/ML: TensorFlow for model design, training, and deployment (classification, regression, computer vision).</li>
                    <li>E-commerce: Built and customized platforms with React & Node.js, integrating APIs, payment gateways, and scalable front-end features.</li>
                    <li>CMS: WordPress, Joomla, and Shopify — custom themes and plugins as required.</li>
                    <li>
                        Achievements: Delivered tailored e-commerce platforms and admin systems for 50+ clients, achieving 95% satisfaction across industries.
                    </li>
                </ul>
            </Drawer>
        </div>
    );
}
