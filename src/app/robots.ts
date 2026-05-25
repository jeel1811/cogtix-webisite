import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/**
 * robots.txt aligned with Google's "Robots.txt Specifications":
 * https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
 *
 * Rules:
 *  - User-agent: *  Allow:/  Disallow:/api/,/_next/,/admin/  (block app internals)
 *  - User-agent: GPTBot  Allow:/  (opt-in for OpenAI training crawler)
 *  - User-agent: CCBot   Disallow:/  (block CommonCrawl)
 *  - Sitemap reference (Google reads sitemap directives from robots.txt)
 *
 * The `host` field from sitemaps.org is intentionally NOT emitted — it is a
 * Yandex-specific extension and is not part of the Google-respected protocol.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
