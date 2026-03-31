"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PixelBlast from "@/components/PixelBlast";

const motionSafeFade =
  "animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#79b8ba"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          speed={0.2}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_80%_75%_at_50%_45%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.55)_45%,transparent_80%)] motion-reduce:bg-[radial-gradient(ellipse_80%_75%_at_50%_45%,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.65)_50%,transparent_85%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-28 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="space-y-8 sm:space-y-10">
          <div className={motionSafeFade}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white/75 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
              {t("badge")}
            </span>
          </div>

          <h1
            id="hero-heading"
            className={`font-heading text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl ${motionSafeFade} animation-delay-100`}
          >
            {t("titleLine1")}
            <br />
            <span className="gradient-text glow-text">{t("titleLine2")}</span>
          </h1>

          <p
            className={`mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl ${motionSafeFade} animation-delay-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]`}
          >
            {t("subtitle")}
          </p>

          <div className={`pt-2 sm:pt-4 ${motionSafeFade} animation-delay-300`}>
            <Link
              href="/#contact"
              className="btn-glow relative z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-background outline-none ring-offset-2 ring-offset-neutral-950 transition hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="relative z-10">{t("cta")}</span>
              <svg
                className="relative z-10 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
