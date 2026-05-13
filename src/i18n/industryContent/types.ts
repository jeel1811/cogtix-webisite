export type IndustryVariant =
  | 'financial'
  | 'healthcare'
  | 'retail'
  | 'supplyChain'
  | 'hiTech'

export interface IndustryHeroCopy {
  badge: string
  title: string
  highlight: string
  description: string
  cta: string
  statLabels: [string, string, string]
}

export interface IndustryFeatureItem {
  title: string
  description: string
  details: string
  outcomes: string[]
}

export interface IndustryFeaturesCopy {
  badge: string
  title: string
  description: string
  outcomesTitle: string
  items: IndustryFeatureItem[]
}

export interface IndustryChallengeItem {
  challenge: string
  solution: string
}

export interface IndustryChallengesCopy {
  badge: string
  title: string
  description: string
  challengeLabel: string
  solutionLabel: string
  items: IndustryChallengeItem[]
}

export interface IndustryUseCaseItem {
  title: string
  description: string
}

export interface IndustryUseCasesCopy {
  badge: string
  title: string
  description: string
  items: IndustryUseCaseItem[]
}

export interface IndustryMetricItem {
  label: string
  description: string
}

export interface IndustryImpactCopy {
  badge: string
  title: string
  description: string
  metrics: IndustryMetricItem[]
}

export interface IndustryPageContent {
  hero: IndustryHeroCopy
  features: IndustryFeaturesCopy
  challenges: IndustryChallengesCopy
  useCases: IndustryUseCasesCopy
  impact: IndustryImpactCopy
}

export type IndustryContentByVariant = Record<IndustryVariant, IndustryPageContent>
