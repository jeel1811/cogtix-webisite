import type { PartnerVariant } from '@/components/sections/partners/partner-types'

export type { PartnerVariant }

export interface PartnerMetadataCopy {
  title: string
  description: string
}

export interface PartnerHeroCopy {
  eyebrow: string
  title: string
  highlight: string
  description: string
  tier: string
  tierSubtitle: string
  cta: string
  exploreCapabilities: string
  activePartnerBadge: string
  highlights: string[]
  statLabels: [string, string, string]
}

export interface PartnerCompetencyCopy {
  title: string
  description: string
}

export interface PartnerCertificationCopy {
  name: string
}

export interface PartnerCredentialsCopy {
  badge: string
  title: string
  description: string
  certificationsTitle: string
  certificationsDescription: string
  competencies: PartnerCompetencyCopy[] // 6 entries
  certifications: PartnerCertificationCopy[] // 9 entries
}

export interface PartnerFeatureItem {
  title: string
  description: string
  details: string
  outcomes: string[]
}

export interface PartnerFeaturesCopy {
  badge: string
  title: string
  description: string
  outcomesTitle: string
  items: PartnerFeatureItem[] // 6 entries
}

export interface PartnerChallengeItem {
  challenge: string
  solution: string
}

export interface PartnerChallengesCopy {
  badge: string
  title: string
  description: string
  challengeLabel: string
  solutionLabel: string
  items: PartnerChallengeItem[] // 6 entries
}

export interface PartnerUseCaseItem {
  title: string
  description: string
}

export interface PartnerUseCasesCopy {
  badge: string
  title: string
  description: string
  items: PartnerUseCaseItem[] // 8 entries
}

export interface PartnerMetricItem {
  label: string
  description: string
}

export interface PartnerImpactCopy {
  badge: string
  title: string
  description: string
  metrics: PartnerMetricItem[] // 4 entries
}

export interface PartnerPageContent {
  metadata: PartnerMetadataCopy
  hero: PartnerHeroCopy
  credentials: PartnerCredentialsCopy
  features: PartnerFeaturesCopy
  challenges: PartnerChallengesCopy
  useCases: PartnerUseCasesCopy
  impact: PartnerImpactCopy
}

export type PartnerContentByVariant = Record<PartnerVariant, PartnerPageContent>

export interface PartnerLandingCardCopy {
  name: string
  tier: string
  tagline: string
  description: string
  highlights: string[]
  statLabels: [string, string, string]
  cta: string // "Explore our X practice"
}

export interface PartnerWhyUsItem {
  title: string
  description: string
}

export interface PartnerLandingCopy {
  metadata: PartnerMetadataCopy
  hero: {
    eyebrow: string
    title: string
    highlight: string
    description: string
  }
  cards: Record<PartnerVariant, PartnerLandingCardCopy>
  whyUs: {
    eyebrow: string
    title: string
    description: string
    items: PartnerWhyUsItem[] // 6 entries
  }
}
