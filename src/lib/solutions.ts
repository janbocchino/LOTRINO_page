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

export const solutionsData: SolutionItem[] = [
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

/** JSON-LD fragment for merging into @graph (ItemList of offered solutions). */
export function getSolutionsItemListSchema() {
  return {
    "@type": "ItemList" as const,
    "@id": `${siteUrl}/#solutions-list`,
    name: "AI agent solutions",
    description:
      "AI agents and custom solutions for SEO, social media, operations, and e-commerce.",
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
