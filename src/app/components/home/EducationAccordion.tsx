import Drawer from "./Drawer";

export default function EducationAccordion() {
    return (
        <div className="space-y-2">
            <Drawer title="Master in Quality and Competitiveness — IEST Anáhuac" meta="2014 – 2016">
                <div className="text-sm text-zinc-300">
                    Tampico, México
                </div>
            </Drawer>

            <Drawer title="B.S. in Superior Computer Systems — CEDIP" meta="2008 – 2012">
                <div className="text-sm text-zinc-300">
                    Tampico, México
                </div>
            </Drawer>
        </div>
    );
}
