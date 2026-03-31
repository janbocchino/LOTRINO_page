"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

const inputClass =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-base text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent/50 focus-visible:ring-2 focus-visible:ring-accent sm:text-base";

const Contact = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: t("fromName"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("errorGeneric"));
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-fade-top relative overflow-hidden bg-neutral-950 py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface" aria-hidden />
      <div
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent-secondary/10 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute -top-[80px] left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent">{t("label")}</span>
              <h2
                id="contact-heading"
                className="font-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                {t("titleBefore")}
                <span className="gradient-text">{t("titleHighlight")}</span>
                {t("titleAfter")}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted">{t("intro")}</p>

            <div className="pt-4">
              <a
                href="mailto:office@lotrino.com"
                className="group inline-flex min-h-11 items-center gap-3 rounded-lg text-foreground outline-none ring-offset-2 ring-offset-neutral-950 transition-colors duration-300 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full glass transition-colors duration-300 group-hover:bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">office@lotrino.com</span>
              </a>
            </div>
          </div>

          <div className="gradient-border p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder={t("placeholderName")}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder={t("placeholderEmail")}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder={t("placeholderMessage")}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/10 p-4 text-sm text-accent">
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t("success")}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  {errorMessage || t("errorGeneric")}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-glow relative z-10 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold tracking-wide text-background outline-none ring-offset-2 ring-offset-neutral-950 transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-accent"
              >
                {status === "loading" ? (
                  <>
                    <svg className="relative z-10 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span className="relative z-10">{t("sending")}</span>
                  </>
                ) : (
                  <span className="relative z-10">{t("submit")}</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
