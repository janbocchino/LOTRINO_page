"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { UseCaseIndustry } from "@/lib/use-cases-data";

type Props = {
  industry: UseCaseIndustry;
};

export default function IndustryPage({ industry }: Props) {
  const { accentColor } = industry;
  const t = useTranslations("industryPage");
  const tNav = useTranslations("nav");

  return (
    <div className="space-y-12 md:space-y-16">
      <header className="space-y-4">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/use-cases"
                className="outline-none ring-offset-2 ring-offset-background transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t("breadcrumb")}
              </Link>
            </li>
            <li aria-hidden className="text-border">
              /
            </li>
            <li className="text-foreground">{industry.title}</li>
          </ol>
        </nav>
        <div
          className="relative overflow-hidden rounded-2xl border p-6 md:p-8"
          style={{
            borderColor: `${accentColor}40`,
            boxShadow: `0 0 80px -20px ${accentColor}55`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: accentColor }}
            aria-hidden
          />
          <p className="text-xs uppercase tracking-widest text-muted">{t("industryBadge")}</p>
          <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {industry.title}
          </h1>
        </div>
      </header>

      <section className="glass space-y-4 rounded-2xl p-6 md:p-8">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">{t("manualHeading")}</h2>
        <ul className="space-y-3">
          {industry.manualTasks.map((task) => (
            <li key={task} className="flex gap-3 leading-relaxed text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: accentColor }}
                aria-hidden
              />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass space-y-4 rounded-2xl p-6 md:p-8">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">{t("whyHeading")}</h2>
        <p className="leading-relaxed text-muted">{industry.whyUnpleasant}</p>
      </section>

      <section className="glass space-y-4 rounded-2xl p-6 md:p-8">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">{t("autoHeading")}</h2>
        <ul className="space-y-3">
          {industry.automationPoints.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: accentColor }}
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/use-cases"
          className="text-sm font-medium text-accent outline-none ring-offset-2 ring-offset-background transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
        >
          ← {t("back")}
        </Link>
        <Link
          href="/#contact"
          className="btn-glow relative z-10 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium tracking-wide text-background outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
        >
          <span className="relative z-10">{tNav("getInTouch")}</span>
        </Link>
      </footer>
    </div>
  );
}
