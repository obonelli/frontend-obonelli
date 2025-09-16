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
                defaultOpen={!isMobile}
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Backend: Node.js (Express, Nest), Python (FastAPI); REST & GraphQL APIs.</li>
                    <li>Frontend: React.js, Next.js, React Native (Expo), TypeScript.</li>
                    <li>Databases: MySQL (Prisma ORM), MongoDB (Mongoose), PostgreSQL (Sequelize, TypeORM, SQLAlchemy), Redis</li>
                    <li>Cloud: AWS Lambda, Cloud Functions.</li>
                    <li>CI/CD: CircleCI & GitHub Actions for automated deployments.</li>
                    <li>Testing: Jest, React Testing Library, Enzyme.</li>
                    <li>Containers: Docker & Docker Compose for containerized environments.</li>
                    <li>Version Control: Git workflows for collaboration.</li>
                    <li>UI/UX: Prototypes and wireframes in Figma with cross-functional teams.</li>
                    <ul className="list-disc pl-8 space-y-1.5 text-sm leading-6 text-zinc-200">
                        <li>Refactored legacy v1 under strict deadlines, enhancing functionality and strengthening codebase.</li>
                        <li>Led the development of a next-gen UI with a scalable white-label system; mentored junior developers.</li>
                        <li>Implemented Storybook, reducing component build time by 25%.</li>
                        <li>Reduced infrastructure costs by 20% by migrating services to AWS Lambda & Cloud Functions.</li>
                        <li>Improved deployment frequency by 30% through CI/CD automation.</li>
                    </ul>
                </ul>
            </Drawer>

            <Drawer
                title="Persistent Systems — Lead Engineer"
                meta="05/2023 – 06/2024"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Backend: Node.js (Express, TypeScript), Python (FastAPI); RESTful & GraphQL APIs.</li>
                    <li>Frontend: JavaScript, HTML, CSS, React.js, Next.js, Redux, TypeScript, Tailwind, Material UI; Apollo Client.</li>
                    <li>UI/UX: Material UI, Tailwind, responsive design; Storybook for centralized UI component management.</li>
                    <li>Databases: MySQL (Prisma), SQLAlchemy, MongoDB (Mongoose).</li>
                    <li>Testing: Unit & integration testing with Jest.</li>
                    <li>Version Control: GitLab workflows.</li>
                    <li>Methodology: Agile/Scrum.</li>
                    <li className="font-semibold">Achievements:</li>
                    <ul className="list-disc pl-8 space-y-1.5 text-sm leading-6 text-zinc-200">
                        <li>Optimized API performance, improving response times by 40%.</li>
                        <li>Increased test coverage from 60% to 90% with Jest, reducing bugs and improving reliability.</li>
                    </ul>
                </ul>
            </Drawer>

            <Drawer
                title="Coppel — Software Developer"
                meta="08/2018 – 04/2023"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>PHP (Laravel), Node.js (Express), Java (Spring, Hibernate, Batch),Python (FastAPI)</li>
                    <li>React.js, React Native, Redux, TypeScript, Javascript</li>
                    <li>Automation with Maven & Jenkins; AWS services; </li>
                    <li>Testing with Jest, React testing library, Junit</li>
                    <li>DB optimization (MySQL, SQL Server, PostgreSQL, MongoDB).</li>
                    <li>Data Processing: Worked with Apache Spark.</li>
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
                title="Self-Employed — Senior Software Engineer"
                meta="04/2012 – Present"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Backend: PHP,Java,Node.js, Python (Django, Flask, FastAPI).</li>
                    <li>Frontend: React.js, AngularJS, JavaScript, jQuery, Less/Sass.</li>
                    <li>Databases: MySQL, SQL Server, PostgreSQL, MongoDB.</li>
                    <li>AI/ML: TensorFlow (classification, regression, computer vision); Vector DBs (Pinecone) for semantic search & RAG pipelines.</li>
                    <li>E-commerce: Built platforms with React & Node.js, integrating APIs, payment gateways, and scalable features.</li>
                    <li>CMS: WordPress, Joomla, Shopify — custom themes and plugins as required.</li>
                    <li className="font-semibold">Achievements:</li>
                    <ul className="list-disc pl-8 space-y-1.5 text-sm leading-6 text-zinc-200">
                        <li>Developed tailored e-commerce platforms and admin systems for 50+ clients.</li>
                        <li>Achieved 95% customer satisfaction across diverse industries.</li>
                    </ul>
                </ul>
            </Drawer>
        </div>
    );
}
