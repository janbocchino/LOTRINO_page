export type ServiceStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const serviceSteps: ServiceStep[] = [
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
