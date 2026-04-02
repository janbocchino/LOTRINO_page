import type { Metadata } from "next";
import { getIndustries } from "./use-cases-data";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

/** Canonical site URL - no trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://lotrino.com").replace(
    /\/$/,
    "",
  );

export const siteName = "LOTRINO";

/** Default English description (legacy / non-request contexts). */
export const siteDescription =
  "Prioritized pilots, production-grade builds, and integration into the systems you already use-so automation stays practical and owned after go-live.";

/** Paths without locale prefix. */
export const routes = [
  "/",
  "/use-cases",
  "/team",
  "/imprint",
  "/privacy-policy",
  "/terms",
] as const;

export const useCaseIndustryRoutes = getIndustries("en").map(
  (i) => `/use-cases/${i.slug}`,
);

/** All canonical paths (no locale) for sitemap composition. */
export const sitemapPaths = [...routes, ...useCaseIndustryRoutes];

export const locales = routing.locales;

export function pathWithLocale(locale: AppLocale, path: string): string {
  const normalized = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function absoluteUrl(locale: AppLocale, path: string): string {
  const p = pathWithLocale(locale, path);
  return `${siteUrl}${p}`;
}

/** Next.js `opengraph-image` route under each locale segment. */
export function openGraphImageUrl(locale: AppLocale): string {
  return absoluteUrl(locale, "/opengraph-image");
}

/**
 * hreflang map for `alternates.languages` and sitemap - includes `x-default` (default locale).
 */
export function hreflangAlternates(path: string): Record<string, string> {
  const p = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const defaultLocale = routing.defaultLocale as AppLocale;
  return {
    en: absoluteUrl("en", p),
    de: absoluteUrl("de", p),
    "x-default": absoluteUrl(defaultLocale, p),
  };
}

/** ISO dates for sitemap `lastmod` (stable; update when content changes meaningfully). */
const SITEMAP_LAST_MOD: Record<string, string> = {
  "/": "2025-04-02",
  "/use-cases": "2025-04-02",
  "/team": "2025-04-02",
  "/imprint": "2025-01-15",
  "/privacy-policy": "2025-01-15",
  "/terms": "2025-01-15",
};

for (const r of useCaseIndustryRoutes) {
  SITEMAP_LAST_MOD[r] = "2025-04-02";
}

export function lastModifiedForSitemapPath(path: string): Date {
  const key = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const iso = SITEMAP_LAST_MOD[key];
  return iso ? new Date(iso) : new Date("2025-04-02");
}

/** Open Graph + Twitter cards using the locale `opengraph-image` route. */
export function defaultShareMetadata(
  locale: AppLocale,
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const og = openGraphImageUrl(locale);
  return {
    openGraph: {
      title,
      description,
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
  };
}
