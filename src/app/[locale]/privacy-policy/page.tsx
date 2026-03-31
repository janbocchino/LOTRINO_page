import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PrivacyEn from "@/components/legal/privacy-en";
import PrivacyDe from "@/components/legal/privacy-de";
import { absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) return {};
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: `${t("title")} | LOTRINO`,
    description: t("description"),
    alternates: {
      canonical: absoluteUrl(locale, "/privacy-policy"),
      languages: {
        en: absoluteUrl("en", "/privacy-policy"),
        de: absoluteUrl("de", "/privacy-policy"),
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <section className="mx-auto max-w-3xl space-y-6 px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("title")}</h1>
      {locale === "de" ? <PrivacyDe /> : <PrivacyEn />}
    </section>
  );
}
