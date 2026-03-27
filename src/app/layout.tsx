import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSolutionsItemListSchema } from "@/lib/solutions";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

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

const defaultTitle = `${siteName} - AI Consulting & Implementation`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI consulting",
    "artificial intelligence",
    "AI implementation",
    "machine learning",
    "digital transformation",
  ],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
  },
};

const organizationNode = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  sameAs: ["https://linkedin.com/company/lotrino"],
};

const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, getSolutionsItemListSchema()],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="top" lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
        <a
          href="#main"
          className="absolute left-[-9999px] top-4 z-[100] rounded-lg bg-accent px-4 py-3 text-sm font-medium text-background outline-none ring-2 ring-offset-2 ring-offset-background focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
