import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import janPortrait from "@/assets/Jan.jpeg";
import mattisPortrait from "@/assets/Mattis.jpeg";
import { absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) return {};
  const t = await getTranslations({ locale, namespace: "team" });
  const title = `${t("title")} | LOTRINO`;
  const description = t("intro");
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, "/team"),
      languages: {
        en: absoluteUrl("en", "/team"),
        de: absoluteUrl("de", "/team"),
      },
    },
    openGraph: { title, description },
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  const t = await getTranslations({ locale, namespace: "team" });

  return (
    <section className="mx-auto max-w-5xl space-y-10 px-6 py-24 lg:px-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("title")}</h1>
        <p className="max-w-2xl leading-relaxed text-muted">{t("intro")}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="glass space-y-5 rounded-2xl p-6">
          <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl sm:max-w-[220px]">
            <Image
              src={janPortrait}
              alt={t("janAlt")}
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-accent">{t("janRole")}</p>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">Jan Bocchino</h2>
            <p className="leading-relaxed text-muted">{t("janBio")}</p>
          </div>
        </article>

        <article className="glass space-y-5 rounded-2xl p-6">
          <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl sm:max-w-[220px]">
            <Image
              src={mattisPortrait}
              alt={t("mattisAlt")}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-accent">{t("mattisRole")}</p>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">Mattis Scherbacher</h2>
            <p className="leading-relaxed text-muted">{t("mattisBio")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
