import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TermsEn from "@/components/legal/terms-en";
import TermsDe from "@/components/legal/terms-de";
import { absoluteUrl, defaultShareMetadata, hreflangAlternates } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) return {};
  const t = await getTranslations({ locale, namespace: "terms" });
  const title = `${t("title")} | LOTRINO`;
  const description = t("description");
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, "/terms"),
      languages: hreflangAlternates("/terms"),
    },
    ...defaultShareMetadata(locale, title, description),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <section className="mx-auto max-w-3xl space-y-6 px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("title")}</h1>
      <p className="text-sm text-muted">{t("subtitle")}</p>
      {locale === "de" ? <TermsDe /> : <TermsEn />}
    </section>
  );
}
