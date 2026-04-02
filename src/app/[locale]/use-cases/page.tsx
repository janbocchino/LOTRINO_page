import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getIndustries, getFazitSection } from "@/lib/use-cases-data";
import { absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const staggerDelays = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  if (!routing.locales.includes(locale)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: "useCasesPage" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, "/use-cases"),
      languages: {
        en: absoluteUrl("en", "/use-cases"),
        de: absoluteUrl("de", "/use-cases"),
      },
    },
    openGraph: { title, description },
  };
}

export default async function UseCasesPage({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as AppLocale;
  const t = await getTranslations({ locale, namespace: "useCasesPage" });
  const industries = getIndustries(locale);
  const fazitSection = getFazitSection(locale);

  return (
    <div className="noise">
      <div className="relative border-b border-white/5 mesh-gradient grid-pattern">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl space-y-4">
            <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Use <span className="gradient-text">Cases</span>
            </h1>
            <p className="leading-relaxed text-muted">{t("intro")}</p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12 lg:gap-6">
          {industries.map((industry, index) => {
            const spanClass =
              index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4";
            const stagger = staggerDelays[index] ?? "animation-delay-500";
            return (
              <Link
                key={industry.slug}
                href={`/use-cases/${industry.slug}`}
                className={`group animate-fade-in-up relative overflow-hidden rounded-2xl border bg-black/40 p-6 transition-all duration-300 hover:-translate-y-0.5 md:p-7 ${spanClass} ${stagger}`}
                style={{
                  borderColor: `${industry.accentColor}35`,
                  boxShadow: `0 0 0 1px ${industry.accentColor}12 inset`,
                }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: industry.accentColor }}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="space-y-2">
                    <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {industry.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted">{industry.tagline}</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: industry.accentColor }}
                  >
                    {t("readMore")}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/30 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                {fazitSection.title}
              </h2>
              <p className="text-muted">{fazitSection.subtitle}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-3xl">
              {fazitSection.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-foreground"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs text-accent"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
