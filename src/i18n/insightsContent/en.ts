import type { InsightsLandingCopy } from './types'

export const enInsightsLanding: InsightsLandingCopy = {
  metadata: {
    title: 'Insights | Cogtix Solutions',
    description:
      'Explore Cogtix insights, articles, case studies, and engineering perspectives across cloud, AI, digital transformation, and product delivery.',
  },
  hero: {
    badge: 'Insights',
    titleLine1: 'Insights &',
    titleGradient: 'Knowledge.',
    description:
      'Explore articles, case studies, and practical perspectives on software development, cloud technologies, digital transformation, and the delivery practices we use with clients.',
    ctaBlogs: 'Read blogs',
    ctaExplore: 'Explore insights',
  },
  grid: {
    eyebrow: 'Featured content',
    title: 'A simple entry point into our thinking and outcomes.',
    description:
      'Use this page to jump into blogs, case studies, and other content that shows how we approach real delivery challenges.',
    cardPill: 'Insight',
  },
  cards: [
    {
      title: 'Blogs',
      description:
        'Practical articles on software engineering, cloud delivery, AI, and digital transformation.',
      exploreCta: 'Explore blogs',
    },
    {
      title: 'Case Studies',
      description:
        'Project stories showing the outcomes, delivery approaches, and business impact behind our work.',
      exploreCta: 'Explore case studies',
    },
  ],
}
