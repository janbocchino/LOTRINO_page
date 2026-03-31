"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { getServiceSteps } from "@/lib/services";
import type { AppLocale } from "@/i18n/routing";

function ServiceIcon({ id, className }: { id: string; className?: string }) {
  const c = className ?? "h-7 w-7";
  switch (id) {
    case "strategy":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "development":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "integration":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case "optimization":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

const Services = () => {
  const reduceMotion = useReducedMotion();
  const locale = useLocale() as AppLocale;
  const t = useTranslations("services");
  const serviceSteps = useMemo(() => getServiceSteps(locale), [locale]);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-fade-bottom relative bg-neutral-950 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <motion.div
            className="mb-12 lg:col-span-5 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-accent">{t("label")}</span>
            <h2
              id="services-heading"
              className="font-heading mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
            >
              {t("headingBefore")}{" "}
              <span className="text-muted">{t("headingMuted")}</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted lg:text-base">{t("intro")}</p>
          </motion.div>

          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute left-[1.125rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-8"
              aria-hidden
            />
            <ul className="relative space-y-6 md:space-y-8">
              {serviceSteps.map((step, i) => (
                <motion.li
                  key={step.id}
                  initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px", amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <article
                    className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 pl-12 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition-[border-color,box-shadow] duration-300 hover:border-accent/20 md:pl-16 md:pr-8 md:py-7"
                    aria-labelledby={`${step.id}-title`}
                  >
                    <div
                      className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-neutral-950 text-xs font-bold text-accent md:left-3 md:top-8 md:h-10 md:w-10"
                      aria-hidden
                    >
                      {step.number}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent md:h-12 md:w-12">
                        <ServiceIcon id={step.id} />
                      </div>
                      <div className="min-w-0">
                        <h3
                          id={`${step.id}-title`}
                          className="font-heading text-lg font-semibold text-foreground md:text-xl"
                        >
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{step.description}</p>
                      </div>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-center text-sm text-muted">{t("outro")}</p>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-background outline-none ring-offset-2 ring-offset-neutral-950 transition-colors duration-300 hover:bg-accent focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t("cta")}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
