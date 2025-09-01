import Drawer from "./Drawer";

export default function CertificationsAccordion() {
    return (
        <div className="space-y-2">
            <Drawer title="Google Analytics (Foundational)" meta="2023">
                <ul className="drawer-list list-disc">
                    <li>Foundational concepts: measurement, reports, events, conversions.</li>
                </ul>
            </Drawer>

            <Drawer title="Neo4j GraphAcademy (TypeScript)" meta="2024">
                <ul className="drawer-list list-disc">
                    <li>Graph data modeling and queries with Cypher + TypeScript drivers.</li>
                </ul>
            </Drawer>
        </div>
    );
}
