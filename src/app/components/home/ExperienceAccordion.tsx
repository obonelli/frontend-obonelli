import Drawer from "./Drawer";

export default function ExperienceAccordion() {
    return (
        <div className="space-y-2">
            <Drawer title="Cloud Transit Xchange — Senior Front-End Engineer" meta="2024 — Current">
                <ul className="drawer-list list-disc">
                    <li>Next.js + MUI design system and dashboards.</li>
                    <li>GraphQL/REST integrations, CI/CD and perf budgets.</li>
                    <li>Led UI architecture for modules (Help Center, FAQ, Categories).</li>
                </ul>
            </Drawer>

            <Drawer title="Freelance — Full-Stack Engineer" meta="2012 — 2024">
                <ul className="drawer-list list-disc">
                    <li>React, Node, PostgreSQL, AWS/GCP — shipped production apps.</li>
                    <li>Reusable component libraries and Storybook setups.</li>
                    <li>Partnered with clients to meet deadlines and KPIs.</li>
                </ul>
            </Drawer>
        </div>
    );
}
