import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSolutionsItemListSchema } from "@/lib/solutions";
import {
  siteName,
  siteUrl,
  absoluteUrl,
  hreflangAlternates,
  openGraphImageUrl,
} from "@/lib/site";
import { routing, type AppLocale } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: loc } = await params;
  if (!routing.locales.includes(loc as AppLocale)) notFound();
  const locale = loc as AppLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = `${siteName} - ${t("homeTitle")}`;
  const description = t("homeDescription");
  const keywords = t("keywords")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords,
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/icon.png", type: "image/png" }],
    },
    alternates: {
      canonical: absoluteUrl(locale, "/"),
      languages: hreflangAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url: absoluteUrl(locale, "/"),
      siteName,
      title,
      description,
      images: [{ url: openGraphImageUrl(locale), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImageUrl(locale)],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: loc } = await params;
  if (!routing.locales.includes(loc as AppLocale)) notFound();
  const locale = loc as AppLocale;

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });
  const siteDescription = t("homeDescription");

  const organizationNode = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/icon.png`,
    description: siteDescription,
    email: "office@lotrino.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kenyongasse 21",
      addressLocality: "Vienna",
      postalCode: "1070",
      addressCountry: "AT",
    },
    areaServed: { "@type": "Country", name: "Austria" },
    contactPoint: {
      "@type": "ContactPoint",
      email: "office@lotrino.com",
      contactType: "customer service",
      availableLanguage: ["English", "German"],
    },
    sameAs: ["https://www.linkedin.com/company/lotrino"],
  };

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [organizationNode, getSolutionsItemListSchema(locale)],
  };

  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <html id="top" lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="absolute left-[-9999px] top-4 z-[100] rounded-lg bg-accent px-4 py-3 text-sm font-medium text-background outline-none ring-2 ring-offset-2 ring-offset-background focus:left-4 focus:top-4"
          >
            {tCommon("skipToMain")}
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
