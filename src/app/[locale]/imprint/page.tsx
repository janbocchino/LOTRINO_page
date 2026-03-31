import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) return {};
  const t = await getTranslations({ locale, namespace: "imprint" });
  return {
    title: `${t("title")} | LOTRINO`,
    description: t("description"),
    alternates: {
      canonical: absoluteUrl(locale, "/imprint"),
      languages: {
        en: absoluteUrl("en", "/imprint"),
        de: absoluteUrl("de", "/imprint"),
      },
    },
  };
}

export default async function ImprintPage({ params }: Props) {
  const { locale: loc } = await params;
  const t = await getTranslations({ locale: loc, namespace: "imprint" });

  return (
    <section className="mx-auto max-w-3xl space-y-6 px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("title")}</h1>
      <div className="space-y-6">
        <div>
          <h2 className="mb-1 text-sm font-medium">{t("contact")}</h2>
          <p className="text-sm text-muted">
            Jan Bocchino
            <br />
            <a href="mailto:office@lotrino.com" className="text-muted underline hover:no-underline">
              office@lotrino.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="mb-1 text-sm font-medium">{t("address")}</h2>
          <p className="text-sm text-muted">
            Kenyongasse 21
            <br />
            1070, Vienna
          </p>
        </div>
        <div>
          <h2 className="mb-1 text-sm font-medium">{t("businessLicense")}</h2>
          <p className="text-sm text-muted">
            {t("chamber")}
            <br />
            {t("issuingAuthority")}
          </p>
        </div>
      </div>
    </section>
  );
}
