import type { MetadataRoute } from "next";
import { sitemapPaths, absoluteUrl, hreflangAlternates, lastModifiedForSitemapPath } from "@/lib/site";
import { routing } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of sitemapPaths) {
    const lastModified = lastModifiedForSitemapPath(path);
    for (const locale of routing.locales) {
      const loc = locale as AppLocale;
      const url = absoluteUrl(loc, path);
      entries.push({
        url,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.5,
        alternates: {
          languages: hreflangAlternates(path),
        },
      });
    }
  }

  return entries;
}
