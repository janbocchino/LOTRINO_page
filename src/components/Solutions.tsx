"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";
import type { SolutionId } from "@/lib/solutions";
import { getSolutionsData } from "@/lib/solutions";
import type { AppLocale } from "@/i18n/routing";

function SolutionIcon({ id, className }: { id: SolutionId; className?: string }) {
  const c = className ?? "h-8 w-8";
  switch (id) {
    case "seo-agents":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "social-media-agents":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    case "internal-processes":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "ecommerce-agents":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      );
    case "custom-solutions":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    default:
      return null;
  }
}

const Solutions = () => {
  const reduceMotion = useReducedMotion();
  const locale = useLocale() as AppLocale;
  const t = useTranslations("solutions");
  const solutionsData = useMemo(() => getSolutionsData(locale), [locale]);

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-fade-top section-fade-bottom relative bg-neutral-950 py-20 lg:py-28"
    >
      <div className="mesh-gradient pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center lg:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-accent">{t("label")}</span>
          <h2
            id="solutions-heading"
            className="font-heading mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
          >
            {t("headingBefore")}{" "}
            <span className="text-muted">{t("headingMuted")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {solutionsData.map((solution, i) => (
            <motion.article
              key={solution.id}
              id={solution.id}
              aria-labelledby={`${solution.id}-title`}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px", amount: 0.2 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.55,
                      delay: i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] ring-1 ring-white/5 transition-[border-color,box-shadow] duration-300 hover:border-accent/25 hover:shadow-[0_28px_90px_-28px_rgba(121,184,186,0.12)] sm:p-8 ${solution.colSpan2 ? "sm:col-span-2" : ""}`}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300"
                aria-hidden
              />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/20">
                  <SolutionIcon id={solution.id} />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h3
                    id={`${solution.id}-title`}
                    className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl"
                  >
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{solution.tagline}</p>
                  {(solution.id === "internal-processes" || solution.id === "custom-solutions") && (
                    <p className="mt-3 text-sm">
                      <Link
                        href="/use-cases"
                        className="font-medium text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {t("useCasesLink")}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-5 lg:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <p className="text-base text-muted">{t("outro")}</p>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-base font-bold text-background shadow-[0_0_25px_rgba(121,184,186,0.28)] outline-none ring-offset-2 ring-offset-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(121,184,186,0.45)] focus-visible:ring-2 focus-visible:ring-accent md:px-10 md:py-4 md:text-lg"
          >
            {t("cta")}
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
