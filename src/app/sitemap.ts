import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/**
 * Static, marketing-page sitemap.
 *
 * Dynamic content (blogs, case studies, careers) is sourced from WordPress at
 * request time, so we expose them here as section roots and let crawlers find
 * the individual posts through the canonical landing pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },

    { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/careers', changeFrequency: 'daily', priority: 0.7 },

    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    {
      path: '/services/gen-ai-ml-development',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/services/cloud-devops-engineering',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/services/data-engineering',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/services/digital-experience-engineering',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/services/experience-design',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      path: '/services/enterprise-solutions',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/services/microsoft-technologies',
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    { path: '/industries', changeFrequency: 'monthly', priority: 0.9 },
    {
      path: '/industries/financial-services',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/industries/healthcare-and-life-sciences',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/industries/retail-and-e-commerce',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/industries/supply-chain-and-logistics',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/industries/hi-tech-and-digital-natives',
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    { path: '/partners', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/partners/microsoft', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/partners/aws', changeFrequency: 'monthly', priority: 0.8 },
    {
      path: '/partners/google-cloud',
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    { path: '/how-we-work', changeFrequency: 'monthly', priority: 0.7 },
    {
      path: '/how-we-work/dedicated-resource-model',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      path: '/how-we-work/discovery-process-model',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      path: '/how-we-work/fixed-cost-model',
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    { path: '/hire-talent', changeFrequency: 'weekly', priority: 0.9 },

    { path: '/insights', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/blogs', changeFrequency: 'daily', priority: 0.7 },
    { path: '/case-studies', changeFrequency: 'weekly', priority: 0.8 },

    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
