import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import queryGraphql from '@/components/queryGraphql/index'
import {
  WORDPRESS_BLOG_CATEGORY,
  WORDPRESS_CAREER_CATEGORY,
  WORDPRESS_CASE_STUDIES_CATEGORY,
} from '@/constants/index'
import { BLOGS_LIST } from '@/graphql/blogs/query'
import { CASE_STUDIES_LIST } from '@/graphql/case-studies/query'
import { CAREER_LIST } from '@/graphql/careers/query'
import { ALL_HIRE_TALENT_SLUGS } from '@/data/hireTalentData'

/**
 * Marketing sitemap.
 *
 * Static routes come from this file and CMS-backed detail pages are fetched
 * from WordPress so crawlers can discover every canonical URL directly.
 */
export const revalidate = 3600

type SitemapRoute = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  lastModified?: Date
}

type WordPressPostEdge = {
  node?: {
    slug?: string | null
    modified?: string | null
    date?: string | null
  } | null
}

async function getWordPressRoutes({
  query,
  variables,
  basePath,
  changeFrequency,
  priority,
}: {
  query: string
  variables: Record<string, unknown>
  basePath: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}): Promise<SitemapRoute[]> {
  try {
    const { data } = await queryGraphql(query, variables)
    const edges = (data?.posts?.edges as WordPressPostEdge[] | undefined) ?? []

    return edges.flatMap((edge) => {
      const node = edge.node
      const slug = node?.slug
      if (!slug) return []

      const modified = node.modified || node.date

      return [
        {
          path: `${basePath}/${slug}`,
          changeFrequency,
          priority,
          lastModified: modified ? new Date(modified) : undefined,
        },
      ]
    })
  } catch (error) {
    console.error(`[sitemap] Failed to load ${basePath} routes`, error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  const routes: SitemapRoute[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },

    { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/careers', changeFrequency: 'daily', priority: 0.7 },

    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    {
      path: '/services/ai-ml-development',
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
    ...ALL_HIRE_TALENT_SLUGS.map((slug) => ({
      path: `/hire-talent/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    { path: '/insights', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/blogs', changeFrequency: 'daily', priority: 0.7 },
    { path: '/case-studies', changeFrequency: 'weekly', priority: 0.8 },

    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const [blogRoutes, caseStudyRoutes, careerRoutes] = await Promise.all([
    getWordPressRoutes({
      query: BLOGS_LIST,
      variables: {
        where: { categoryIn: WORDPRESS_BLOG_CATEGORY.id },
        first: 100,
      },
      basePath: '/blogs',
      changeFrequency: 'weekly',
      priority: 0.6,
    }),
    getWordPressRoutes({
      query: CASE_STUDIES_LIST,
      variables: {
        where: { categoryIn: WORDPRESS_CASE_STUDIES_CATEGORY.id },
        first: 100,
      },
      basePath: '/case-studies',
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
    getWordPressRoutes({
      query: CAREER_LIST,
      variables: {
        where: { categoryIn: WORDPRESS_CAREER_CATEGORY.id },
        format: 'RENDERED',
      },
      basePath: '/careers',
      changeFrequency: 'daily',
      priority: 0.5,
    }),
  ])

  return [...routes, ...blogRoutes, ...caseStudyRoutes, ...careerRoutes].map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: route.lastModified ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
