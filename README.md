# LOTRINO Website

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (scheme + host, **no trailing slash**). Required in production for correct canonical URLs, sitemap entries, Open Graph, and structured data. |

## Deployment checklist

1. Set `NEXT_PUBLIC_SITE_URL` on your host (e.g. Vercel project → Environment Variables) to the live URL.
2. After launch, add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://<your-domain>/sitemap.xml`.
3. Use URL inspection in Search Console for key pages after releases.

## Routing (locales)

Internationalization uses `next-intl`. Next.js 16 supports [`src/proxy.ts`](src/proxy.ts) as the edge entry (equivalent role to `middleware.ts`); locale prefix is always on (`/en/...`, `/de/...`).