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
    title: "SEO & content agents",
    tagline:
      "Drafts and tune-ups for pages and metadata so search work does not bottleneck on bandwidth.",
  },
  {
    id: "social-media-agents",
    title: "Social content agents",
    tagline:
      "Turn briefs into posts and calendars your team can approve-fewer blank-page days in marketing.",
  },
  {
    id: "internal-processes",
    title: "Internal workflow agents",
    tagline:
      "Support handoffs in tickets, docs, and CRM-where repetitive work piles up in real operations.",
  },
  {
    id: "ecommerce-agents",
    title: "E-commerce agents",
    tagline:
      "Listing copy, catalog hygiene, and shop workflows wired to your stack-not a generic storefront OS.",
  },
  {
    id: "custom-solutions",
    title: "Custom builds",
    tagline:
      "When a catalog agent is not enough: architecture, integration, and ownership end to end.",
    colSpan2: true,
  },
];

const solutionsDataDe: SolutionItem[] = [
  {
    id: "seo-agents",
    title: "SEO- & Content-Agenten",
    tagline:
      "Entwürfe und Feintuning für Seiten und Metadaten – damit SEO nicht an fehlender Kapazität scheitert.",
  },
  {
    id: "social-media-agents",
    title: "Social-Content-Agenten",
    tagline:
      "Briefings in Posts und Redaktionspläne übersetzen, die Ihr Team schnell freigibt – weniger leere Kalender.",
  },
  {
    id: "internal-processes",
    title: "Agenten für interne Workflows",
    tagline:
      "Unterstützung bei Tickets, Dokumenten und CRM-Übergaben – dort, wo wiederkehrende Arbeit im Alltag steckt.",
  },
  {
    id: "ecommerce-agents",
    title: "E-Commerce-Agenten",
    tagline:
      "Listing-Texte, Katalogpflege und Shop-Workflows angebunden an Ihre Systeme – kein generisches Shop-OS.",
  },
  {
    id: "custom-solutions",
    title: "Individuelle Umsetzungen",
    tagline:
      "Wenn Standard-Agenten nicht reichen: Architektur, Integration und Verantwortung End-to-End.",
    colSpan2: true,
  },
];

export function getSolutionsData(locale: AppLocale): SolutionItem[] {
  return locale === "de" ? solutionsDataDe : solutionsDataEn;
}

/** JSON-LD fragment for merging into @graph (ItemList of offered solutions). */
export function getSolutionsItemListSchema(locale: AppLocale) {
  const solutionsData = getSolutionsData(locale);
  const name =
    locale === "de"
      ? "KI-Agenten für SEO, Social, Ops und E-Commerce"
      : "AI agents for SEO, social, operations, and commerce";
  const description =
    locale === "de"
      ? "Agentische Unterstützung für Content, Social, interne Workflows, E-Commerce und maßgeschneiderte Automatisierung."
      : "Agent-style automation for content, social, internal workflows, commerce, and custom integrations.";

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
