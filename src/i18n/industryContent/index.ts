import type { Locale } from '@/i18n/config'
import { deIndustryContent } from './de'
import { enIndustryContent } from './en'
import { esIndustryContent } from './es'
import { frIndustryContent } from './fr'
import { itIndustryContent } from './it'
import { nlIndustryContent } from './nl'
import type { IndustryContentByVariant } from './types'

export type {
  IndustryChallengeItem,
  IndustryChallengesCopy,
  IndustryContentByVariant,
  IndustryFeatureItem,
  IndustryFeaturesCopy,
  IndustryHeroCopy,
  IndustryImpactCopy,
  IndustryMetricItem,
  IndustryPageContent,
  IndustryUseCaseItem,
  IndustryUseCasesCopy,
  IndustryVariant,
} from './types'

export const industryContent: Record<Locale, IndustryContentByVariant> = {
  en: enIndustryContent,
  es: esIndustryContent,
  fr: frIndustryContent,
  de: deIndustryContent,
  nl: nlIndustryContent,
  it: itIndustryContent,
}
