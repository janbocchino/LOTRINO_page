import { getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("about");
  const values = t.raw("values") as string[];

  return (
    <section
      id="about"
      aria-labelledby="about-vision-heading"
      className="section-fade-top section-fade-bottom relative overflow-hidden bg-neutral-950 py-28 lg:py-36"
    >
      <div className="mesh-gradient absolute inset-0 opacity-45" aria-hidden />
      <div
        className="absolute -top-[100px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent">{t("visionLabel")}</span>
            <h2
              id="about-vision-heading"
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl"
            >
              {t("visionTitleBefore")}
              <span className="gradient-text">{t("visionTitleHighlight")}</span>
              {t("visionTitleAfter")}
            </h2>
            <p className="leading-relaxed text-muted">{t("visionLead")}</p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="mt-1 text-sm text-muted">{t("statHuman")}</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">∞</div>
                <div className="mt-1 text-sm text-muted">{t("statPoss")}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pt-16">
            <span className="text-xs uppercase tracking-widest text-accent">{t("approachLabel")}</span>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {t("approachTitleBefore")}
              <span className="gradient-text">{t("approachTitleHighlight")}</span>
              {t("approachTitleAfter")}
            </h2>
            <p className="leading-relaxed text-muted">{t("approachLead")}</p>

            <div className="space-y-4 pt-4">
              {values.map((item, i) => (
                <div key={i} className="group flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent">
                    <svg
                      className="h-4 w-4 text-accent transition-colors duration-300 group-hover:text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
