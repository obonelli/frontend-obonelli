"use client";

import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { orbitron, exo2 } from "@/app/fonts";

export default function ExperienceAccordion() {
    // 1) Asumimos MOBILE por defecto para que en SSR NO se abra
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const check = () => {
            // usa media query para que coincida con sm: (640px)
            const mq = window.matchMedia("(max-width: 639px)");
            setIsMobile(mq.matches);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div className={`${exo2.className} space-y-2`}>
            {/* 2) key para forzar remount cuando cambia isMobile */}
            <Drawer
                key={isMobile ? "m" : "d"}
                title="Cloud Transit Xchange — Lead Full-Stack Engineer"
                meta="06/2024 – 06/2025"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
                defaultOpen={!isMobile} // abierto sólo en desktop
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Designed and maintained user interfaces using React Native, React.js, HTML5, CSS3, and modern JavaScript (ES6+).</li>
                    <li>Integrated RESTful and Apollo GraphQL APIs with Node.js/Express using AWS Lambda and Cloud Functions.</li>
                    <li>Implemented CI/CD workflows with CircleCI for rapid and automated deployments.</li>
                    <li>Performed unit and functional testing with Jest, React Testing Library, and Enzyme.</li>
                    <li>Created prototypes and wireframes in Figma with strong UX/UI focus.</li>
                    <li>Led modernization of v1 app under tight deadlines and spearheaded a next-gen white-label version.</li>
                </ul>
            </Drawer>

            <Drawer
                title="Dacodes — Full Stack Developer"
                meta="05/2023 – 06/2024"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Node.js – Express – TypeScript, React.js – React Native (Expo), Redux.</li>
                    <li>Version control in GitLab, unit and integration testing with Jest.</li>
                    <li>Implemented Storybook for centralized UI component management.</li>
                    <li>Delivered integrations for Google, Amazon, Microsoft services.</li>
                    <li>Optimized API performance (40% faster), increased test coverage (60% → 90%).</li>
                    <li>Streamlined UI development, reduced conflicts, and improved project delivery efficiency.</li>
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
                    <li>Automation with Maven and Jenkins, AWS services, and database optimization (MySQL, SQL Server, PostgreSQL, MongoDB).</li>
                    <li>Maintained and improved e-commerce platform, increasing sales by 5%.</li>
                    <li>Implemented custom loyalty point system (25% customer retention increase).</li>
                    <li>Redesigned UI with UX team, achieving 30% increase in satisfaction.</li>
                    <li>Enhanced React Native apps performance, boosting downloads by 20%.</li>
                </ul>
            </Drawer>

            <Drawer
                title="Cabezut — Engineer in Software Development"
                meta="04/2015 – 06/2018"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Developed APIs and web services, optimized data retrieval by 50%.</li>
                    <li>Enhanced databases (MySQL, SQL Server) reducing server load by 25%.</li>
                    <li>Worked with PHP OOP MVC, React.js, Vanilla JS, jQuery, Bootstrap.</li>
                    <li>Delivered multiple projects on time and within budget (15% client satisfaction increase).</li>
                </ul>
            </Drawer>

            <Drawer
                title="Senior Software Engineer"
                meta="04/2012 – Present"
                titleClassName={`${orbitron.className} font-bold`}
                metaClassName="italic"
            >
                <ul className="drawer-list list-disc pl-5 space-y-1.5 text-sm leading-6 text-zinc-200">
                    <li>Developed custom e-commerce platforms and admin systems (95% client satisfaction).</li>
                    <li>Back-end: PHP, C#, Node.js, Elixir, Python (Django, Flask, FastAPI).</li>
                    <li>Front-end: JavaScript, React, Angular, jQuery, Less/Sass.</li>
                    <li>Created and integrated APIs, reducing data transfer times by 30%.</li>
                    <li>Developed 20+ plugins/themes for WordPress, Joomla, Shopify (40% engagement increase).</li>
                    <li>Integrated secure payment gateways, facilitating +$1M in transactions.</li>
                    <li>Optimized databases across MySQL, SQL Server, PostgreSQL, MongoDB (25% faster retrieval).</li>
                </ul>
            </Drawer>
        </div>
    );
}
