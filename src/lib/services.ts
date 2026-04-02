import type { AppLocale } from "@/i18n/routing";

export type ServiceStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const serviceStepsEn: ServiceStep[] = [
  {
    id: "strategy",
    number: "01",
    title: "Discovery & roadmap",
    description:
      "Prioritized use cases, boundaries, and owners-so you know what to pilot first and what “done” means.",
  },
  {
    id: "development",
    number: "02",
    title: "Pilot & build",
    description:
      "A scoped build that proves value in your real data and tools before you scale spend or headcount.",
  },
  {
    id: "integration",
    number: "03",
    title: "Rollout & integration",
    description:
      "Production cutover into your systems and workflows-security, handoffs, and training included.",
  },
  {
    id: "optimization",
    number: "04",
    title: "Measure & iterate",
    description:
      "KPIs, ownership, and a feedback loop so automation keeps paying off after go-live.",
  },
];

const serviceStepsDe: ServiceStep[] = [
  {
    id: "strategy",
    number: "01",
    title: "Discovery & Roadmap",
    description:
      "Priorisierte Use Cases, Grenzen und Verantwortliche – damit klar ist, was zuerst pilotiert wird und wann Sie fertig sind.",
  },
  {
    id: "development",
    number: "02",
    title: "Pilot & Umsetzung",
    description:
      "Ein begrenzter Build, der Nutzen in Ihren echten Daten und Tools zeigt, bevor Sie Budget oder Personal hochziehen.",
  },
  {
    id: "integration",
    number: "03",
    title: "Rollout & Integration",
    description:
      "Produktiver Einschub in Ihre Systeme und Abläufe – inkl. Security, Übergaben und Schulung.",
  },
  {
    id: "optimization",
    number: "04",
    title: "Messen & iterieren",
    description:
      "KPIs, Ownership und ein Feedback-Loop, damit Automatisierung nach dem Go-live weiter Nutzen liefert.",
  },
];

export function getServiceSteps(locale: AppLocale): ServiceStep[] {
  return locale === "de" ? serviceStepsDe : serviceStepsEn;
}
