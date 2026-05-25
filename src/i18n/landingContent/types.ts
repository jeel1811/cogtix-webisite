export interface LandingMetadata {
  title: string
  description: string
}

export interface LandingHeroCopy {
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  highlights: [string, string, string]
}

export interface LandingGridCopy {
  eyebrow: string
  title: string
  description: string
  exploreCta: string
}

export interface ServicesLandingItem {
  title: string
  description: string
}

export interface ServicesLandingCopy {
  metadata: LandingMetadata
  hero: LandingHeroCopy
  grid: LandingGridCopy & { whatWeOffer?: string }
  /** 6 entries in the same order as `serviceSlugs` below */
  items: ServicesLandingItem[]
}

export interface IndustriesLandingItem {
  title: string
  description: string
}

export interface IndustriesLandingCopy {
  metadata: LandingMetadata
  hero: LandingHeroCopy
  grid: LandingGridCopy & { industryLabel: string }
  /** 5 entries in the same order as `industrySlugs` below */
  items: IndustriesLandingItem[]
}

export interface HowWeWorkLandingItem {
  title: string
  description: string
}

export interface HowWeWorkLandingCopy {
  metadata: LandingMetadata
  hero: LandingHeroCopy
  grid: LandingGridCopy
  items: HowWeWorkLandingItem[]
}

/**
 * Static, non-translatable slugs / hrefs for landing-grid entries.
 * Keep aligned with the order of `items` in the localized copy.
 */
export const serviceSlugs: { href: string }[] = [
  { href: '/services/ai-ml-development' },
  { href: '/services/cloud-devops-engineering' },
  { href: '/services/data-engineering' },
  { href: '/services/digital-experience-engineering' },
  { href: '/services/enterprise-solutions' },
  { href: '/services/microsoft-technologies' },
]

export const industrySlugs: { href: string }[] = [
  { href: '/industries/financial-services' },
  { href: '/industries/healthcare-and-life-sciences' },
  { href: '/industries/retail-and-e-commerce' },
  { href: '/industries/supply-chain-and-logistics' },
  { href: '/industries/hi-tech-and-digital-natives' },
]

export const howWeWorkSlugs: { href: string }[] = [
  { href: '/how-we-work/dedicated-resource-model' },
  { href: '/how-we-work/discovery-process-model' },
  { href: '/how-we-work/fixed-cost-model' },
]
