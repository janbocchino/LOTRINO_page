import { getIndustries } from "./use-cases-data";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

/** Canonical site URL — no trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://lotrino.com").replace(
    /\/$/,
    "",
  );

export const siteName = "LOTRINO";

/** Default English description (legacy / non-request contexts). */
export const siteDescription =
  "We bridge the gap between ideas and action. End-to-end AI consulting, from strategy development to implementation and optimization.";

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
