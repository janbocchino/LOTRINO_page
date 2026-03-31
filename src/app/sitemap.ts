import type { MetadataRoute } from "next";
import { sitemapPaths, absoluteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const languageAlternates = (path: string) => {
    const p = path === "/" ? "/" : path;
    return Object.fromEntries(
      routing.locales.map((loc) => [loc, absoluteUrl(loc as AppLocale, p)]),
    ) as Record<string, string>;
  };

  for (const path of sitemapPaths) {
    for (const locale of routing.locales) {
      const loc = locale as AppLocale;
      const url = absoluteUrl(loc, path);
      entries.push({
        url,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.5,
        alternates: {
          languages: languageAlternates(path),
        },
      });
    }
  }

  return entries;
}
