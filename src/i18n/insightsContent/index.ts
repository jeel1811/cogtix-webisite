import type { Locale } from '@/i18n/config'
import type { InsightsLandingCopy } from './types'
import { enInsightsLanding } from './en'
import { esInsightsLanding } from './es'
import { frInsightsLanding } from './fr'
import { deInsightsLanding } from './de'
import { nlInsightsLanding } from './nl'
import { itInsightsLanding } from './it'

export type { InsightsLandingCopy, InsightsCardCopy, InsightsMetadata } from './types'
export { insightCardHrefs } from './types'

export const insightsLanding: Record<Locale, InsightsLandingCopy> = {
  en: enInsightsLanding,
  es: esInsightsLanding,
  fr: frInsightsLanding,
  de: deInsightsLanding,
  nl: nlInsightsLanding,
  it: itInsightsLanding,
}
