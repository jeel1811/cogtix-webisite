import type { Metadata } from 'next'

/**
 * Centralized SEO configuration for the entire Cogtix Solutions website.
 *
 * Every page in the app reads from this file (directly or through a helper)
 * so we never duplicate site-level data and every page can still keep its
 * own unique, keyword-rich title, description, OG, and canonical URL.
 */

export const SITE_URL = 'https://www.cogtix.com'

export const SITE_NAME = 'Cogtix Solutions'

export const SITE_TAGLINE =
  'Product Engineering & Cloud Transformation'

/** Used as the OG / Twitter image fallback when a page does not provide one. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/twitterimg.webp`

export const TWITTER_HANDLE = '@cogtix'

/**
 * Primary business contact (India HQ). Used inside every JSON-LD payload and
 * inside the `other` meta-tag block, so search engines and crawlers always
 * surface the Indian number first.
 */
export const PRIMARY_PHONE_E164 = '+919327924201'
export const PRIMARY_PHONE_DISPLAY = '+91 93279 24201'
export const PRIMARY_EMAIL = 'info@cogtix.com'

/** Locales the site is published in. */
export const SUPPORTED_LOCALES = ['en_US', 'en_GB', 'en_IN', 'en_AU'] as const

/**
 * Convert a relative path (e.g. "/services/ai-ml-development") into the
 * canonical absolute URL that should appear in OG tags and canonicals.
 */
export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http')) return path
  const cleaned = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${cleaned === '/' ? '' : cleaned}`
}

export interface PageSeoInput {
  /** Page-specific title (the site name template is added automatically). */
  title: string
  /** Concise, 150 to 160 character page description. */
  description: string
  /** Path relative to the site root (e.g. "/services/ai-ml-development"). */
  path: string
  /** Page-specific keyword list used for the meta-keywords tag. */
  keywords?: string[]
  /** Optional OG/Twitter image override (absolute URL). */
  image?: string
  /** Override the OG type (e.g. "article" for blog posts). */
  ogType?: 'website' | 'article' | 'profile'
  /** ISO date string the content was published. */
  publishedTime?: string
  /** ISO date string the content was last modified. */
  modifiedTime?: string
  /** Article author names (used for OG article type). */
  authors?: string[]
  /** Optional locale override. */
  locale?: string
  /** Set to true if the page should not be indexed. */
  noIndex?: boolean
}

/**
 * Build a fully-populated, page-specific `Metadata` object.
 *
 * Why a helper instead of writing metadata blocks by hand on every page:
 *  - guarantees every page exports unique title + description + keywords + canonical
 *  - guarantees OG, Twitter, robots, alternates, and image tags stay in lock-step
 *  - keeps the site-level URL, brand name, default image, and India phone in one place
 */
export function buildMetadata(input: PageSeoInput): Metadata {
  const url = absoluteUrl(input.path)
  const image = input.image ?? DEFAULT_OG_IMAGE
  const ogType = input.ogType ?? 'website'
  const locale = input.locale ?? 'en_US'

  const metadata: Metadata = {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: input.title,
      description: input.description,
      images: [image],
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }

  if (ogType === 'article') {
    metadata.openGraph = {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime,
      authors: input.authors,
    }
  }

  return metadata
}

/**
 * Build a JSON-LD Organization graph that we can drop into the root layout.
 * Search engines use this for the Knowledge Panel + sitelinks.
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: 'Cogtix Solutions',
    url: SITE_URL,
    logo: `${SITE_URL}/cogtix.svg`,
    image: DEFAULT_OG_IMAGE,
    description:
      'Cogtix Solutions is a product engineering company delivering custom software, cloud transformation, AI/ML, data, and Microsoft technology services from India to clients across the USA, UK, India, and Australia.',
    sameAs: [
      'https://www.linkedin.com/company/cogtix',
      'https://twitter.com/cogtix',
      'https://facebook.com/cogtix',
      'https://instagram.com/cogtix',
      'https://dribbble.com/cogtix',
      'https://behance.net/cogtix',
    ],
    telephone: PRIMARY_PHONE_E164,
    email: PRIMARY_EMAIL,
    foundingDate: '2014',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: PRIMARY_EMAIL,
        telephone: PRIMARY_PHONE_E164,
        areaServed: ['IN', 'US', 'GB', 'AU'],
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: PRIMARY_EMAIL,
        telephone: PRIMARY_PHONE_E164,
        areaServed: ['IN', 'US', 'GB', 'AU'],
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'A-901, Eastface, Ambli to Bopal Road, Near Maruti Suzuki Showroom, Ambli',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380058',
      addressCountry: 'IN',
    },
  }
}

/**
 * LocalBusiness / ProfessionalService graph that gives Google a local-listing
 * understanding of the India HQ (used for local SEO and Maps surfacing).
 */
export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description:
      'Cogtix Solutions is a product engineering services company providing custom software, cloud, AI/ML, data, and Microsoft technology delivery from Ahmedabad, India to clients across the USA, UK, India, and Australia.',
    url: SITE_URL,
    logo: `${SITE_URL}/cogtix.svg`,
    image: [DEFAULT_OG_IMAGE, `${SITE_URL}/cogtix.svg`],
    priceRange: '$$',
    telephone: PRIMARY_PHONE_E164,
    email: PRIMARY_EMAIL,
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Australia' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'A-901, Eastface, Ambli to Bopal Road, Near Maruti Suzuki Showroom, Ambli',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380058',
      addressCountry: 'IN',
    },
    // Google requires geo precision of at least 5 decimal places. Strings
    // are used so trailing zeros are preserved in the emitted JSON.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.03950',
      longitude: '72.47960',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:30',
        closes: '18:30',
      },
    ],
  }
}

/**
 * Build a BreadcrumbList JSON-LD for a single page. Search engines render
 * this as the breadcrumb trail in SERP results.
 */
export function buildBreadcrumbJsonLd(
  trail: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/**
 * Build a `Service` JSON-LD payload for a service / industry page.
 */
export function buildServiceJsonLd(input: {
  name: string
  description: string
  path: string
  serviceType?: string
  areaServed?: string[]
  offers?: Array<{ name: string; description: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType ?? input.name,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PRIMARY_PHONE_E164,
      email: PRIMARY_EMAIL,
    },
    areaServed: (input.areaServed ?? ['IN', 'US', 'GB', 'AU']).map((c) => ({
      '@type': 'Country',
      name: c,
    })),
    ...(input.offers
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${input.name} Offerings`,
            itemListElement: input.offers.map((offer) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: offer.name,
                description: offer.description,
              },
            })),
          },
        }
      : {}),
  }
}

/**
 * Build an `Article` JSON-LD payload for blog / insights detail pages.
 *
 * Per Google Search Central, an Article is eligible for the Article rich
 * result when it carries headline, image, author, publisher, datePublished,
 * and dateModified.
 *
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/article
 */
export function buildArticleJsonLd(input: {
  headline: string
  description: string
  path: string
  image: string
  authorName?: string
  datePublished?: string
  dateModified?: string
}) {
  const url = absoluteUrl(input.path)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: input.headline,
    description: input.description,
    image: [input.image],
    url,
    author: {
      '@type': input.authorName ? 'Person' : 'Organization',
      name: input.authorName ?? SITE_NAME,
      ...(input.authorName ? {} : { url: SITE_URL }),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/cogtix.svg`,
      },
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
  }
}
