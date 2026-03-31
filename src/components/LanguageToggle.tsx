"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageToggle() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/10 bg-black/25 p-px"
      role="group"
      aria-label={t("languageSwitch")}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`flex min-h-8 min-w-[2rem] items-center justify-center rounded-full px-2 text-center text-[11px] font-medium uppercase tracking-tight outline-none ring-offset-2 ring-offset-neutral-950 transition-colors focus-visible:ring-2 focus-visible:ring-accent ${
            locale === loc
              ? "bg-accent text-background"
              : "text-muted hover:text-foreground"
          }`}
          aria-current={locale === loc ? "true" : undefined}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
