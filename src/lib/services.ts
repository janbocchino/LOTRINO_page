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
    title: "Strategy",
    description: "AI roadmap aligned with your business goals",
  },
  {
    id: "development",
    number: "02",
    title: "Development",
    description: "Custom AI solutions built for your specific challenges",
  },
  {
    id: "integration",
    number: "03",
    title: "Integration",
    description:
      "Seamless deployment into your existing infrastructure and workflows",
  },
  {
    id: "optimization",
    number: "04",
    title: "Optimization",
    description: "Continuous refinement for maximum performance",
  },
];

const serviceStepsDe: ServiceStep[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategie",
    description: "KI-Roadmap, abgestimmt auf Ihre Geschäftsziele",
  },
  {
    id: "development",
    number: "02",
    title: "Entwicklung",
    description: "Maßgeschneiderte KI-Lösungen für Ihre konkreten Herausforderungen",
  },
  {
    id: "integration",
    number: "03",
    title: "Integration",
    description: "Nahtlose Einbindung in Ihre bestehende Infrastruktur und Workflows",
  },
  {
    id: "optimization",
    number: "04",
    title: "Optimierung",
    description: "Kontinuierliche Verfeinerung für maximale Performance",
  },
];

export function getServiceSteps(locale: AppLocale): ServiceStep[] {
  return locale === "de" ? serviceStepsDe : serviceStepsEn;
}
