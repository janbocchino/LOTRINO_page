import type { AppLocale } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

export type SolutionId =
  | "seo-agents"
  | "social-media-agents"
  | "internal-processes"
  | "ecommerce-agents"
  | "custom-solutions";

export type SolutionItem = {
  id: SolutionId;
  title: string;
  tagline: string;
  colSpan2?: boolean;
};

const solutionsDataEn: SolutionItem[] = [
  {
    id: "seo-agents",
    title: "SEO Agents",
    tagline:
      "Dominate search rankings with AI that writes and optimizes pages in lightning speed",
  },
  {
    id: "social-media-agents",
    title: "Social Media Agents",
    tagline: "Let AI craft, schedule, and amplify your social presence",
  },
  {
    id: "internal-processes",
    title: "Agents for Internal Processes",
    tagline: "Streamline operations with AI that works around the clock",
  },
  {
    id: "ecommerce-agents",
    title: "E-Commerce Agents",
    tagline: "AI-driven E-Commerce OS that handles your online sales",
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    tagline:
      "AI solutions designed specifically for your unique business challenges.",
    colSpan2: true,
  },
];

const solutionsDataDe: SolutionItem[] = [
  {
    id: "seo-agents",
    title: "SEO-Agenten",
    tagline:
      "Dominieren Sie die Suchergebnisse mit KI, die Seiten blitzschnell schreibt und optimiert",
  },
  {
    id: "social-media-agents",
    title: "Social-Media-Agenten",
    tagline: "KI erstellt, plant und verstärkt Ihre Social-Media-Präsenz",
  },
  {
    id: "internal-processes",
    title: "Agenten für interne Prozesse",
    tagline: "Verschlanken Sie Abläufe mit KI, die rund um die Uhr arbeitet",
  },
  {
    id: "ecommerce-agents",
    title: "E-Commerce-Agenten",
    tagline: "KI-gestütztes E-Commerce-System für Ihren Online-Vertrieb",
  },
  {
    id: "custom-solutions",
    title: "Individuelle Lösungen",
    tagline:
      "KI-Lösungen, genau auf Ihre spezifischen Business-Herausforderungen zugeschnitten.",
    colSpan2: true,
  },
];

export function getSolutionsData(locale: AppLocale): SolutionItem[] {
  return locale === "de" ? solutionsDataDe : solutionsDataEn;
}

/** JSON-LD fragment for merging into @graph (ItemList of offered solutions). */
export function getSolutionsItemListSchema(locale: AppLocale) {
  const solutionsData = getSolutionsData(locale);
  const name = locale === "de" ? "KI-Agenten-Lösungen" : "AI agent solutions";
  const description =
    locale === "de"
      ? "KI-Agenten und individuelle Lösungen für SEO, Social Media, Operations und E-Commerce."
      : "AI agents and custom solutions for SEO, social media, operations, and e-commerce.";

  return {
    "@type": "ItemList" as const,
    "@id": `${siteUrl}/#solutions-list`,
    name,
    description,
    numberOfItems: solutionsData.length,
    itemListElement: solutionsData.map((s, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "Service" as const,
        name: s.title,
        description: s.tagline,
        provider: { "@id": `${siteUrl}/#organization` },
      },
    })),
  };
}
