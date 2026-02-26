import AuditWizard from "@/components/AuditWizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Gap Audit — LOTRINO",
    description:
        "Discover your business's AI maturity score and annual inefficiency cost. Get a personalized roadmap from LOTRINO's AI strategist.",
};

export default function AuditPage() {
    return <AuditWizard />;
}
