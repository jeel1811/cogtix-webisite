export interface InsightsMetadata {
  title: string
  description: string
}

export interface InsightsCardCopy {
  title: string
  description: string
  exploreCta: string
}

export interface InsightsLandingCopy {
  metadata: InsightsMetadata
  hero: {
    badge: string
    titleLine1: string
    titleGradient: string
    description: string
    ctaBlogs: string
    ctaExplore: string
  }
  grid: {
    eyebrow: string
    title: string
    description: string
    cardPill: string
  }
  /** Same order as `insightCardHrefs` */
  cards: [InsightsCardCopy, InsightsCardCopy]
}

export const insightCardHrefs = ['/blogs', '/case-studies'] as const
