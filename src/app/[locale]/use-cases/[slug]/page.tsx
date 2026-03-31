import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/use-cases/IndustryPage";
import { getIndustry, getIndustries } from "@/lib/use-cases-data";
import { siteName, absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getIndustries(locale as AppLocale).map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) {
    return {};
  }
  const industry = getIndustry(slug, locale);
  if (!industry) {
    return { title: "Not found" };
  }
  const t = await getTranslations({ locale, namespace: "industryPage" });
  const titleShort = industry.title.replace(/\s*\([^)]*\)\s*$/, "").trim() || industry.title;
  const title = `${titleShort} — ${t("metaSuffix")}`;
  return {
    title,
    description: industry.tagline,
    alternates: {
      canonical: absoluteUrl(locale, `/use-cases/${slug}`),
      languages: {
        en: absoluteUrl("en", `/use-cases/${slug}`),
        de: absoluteUrl("de", `/use-cases/${slug}`),
      },
    },
    openGraph: {
      title: `${titleShort} | ${siteName}`,
      description: industry.tagline,
    },
  };
}

export default async function UseCaseIndustryRoute({ params }: Props) {
  const { slug, locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) notFound();

  const industry = getIndustry(slug, locale);
  if (!industry) notFound();

  return (
    <section className="noise mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <IndustryPage industry={industry} />
    </section>
  );
}
