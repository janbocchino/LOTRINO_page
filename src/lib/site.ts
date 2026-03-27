/** Canonical site URL — no trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://lotrino.com").replace(
    /\/$/,
    "",
  );

export const siteName = "LOTRINO";

export const siteDescription =
  "We bridge the gap between ideas and action. End-to-end AI consulting, from strategy development to implementation and optimization.";

export const routes = [
  "/",
  "/imprint",
  "/privacy-policy",
  "/terms",
] as const;
