import type { Locale } from '@/i18n/config'
import { enPartnerContent, enPartnerLanding } from './en'
import { esPartnerContent, esPartnerLanding } from './es'
import { frPartnerContent, frPartnerLanding } from './fr'
import { dePartnerContent, dePartnerLanding } from './de'
import { nlPartnerContent, nlPartnerLanding } from './nl'
import { itPartnerContent, itPartnerLanding } from './it'
import type {
  PartnerContentByVariant,
  PartnerLandingCopy,
  PartnerPageContent,
  PartnerVariant,
} from './types'

export type {
  PartnerContentByVariant,
  PartnerLandingCopy,
  PartnerPageContent,
  PartnerVariant,
}

export const partnerContent: Record<Locale, PartnerContentByVariant> = {
  en: enPartnerContent,
  es: esPartnerContent,
  fr: frPartnerContent,
  de: dePartnerContent,
  nl: nlPartnerContent,
  it: itPartnerContent,
}

export const partnerLanding: Record<Locale, PartnerLandingCopy> = {
  en: enPartnerLanding,
  es: esPartnerLanding,
  fr: frPartnerLanding,
  de: dePartnerLanding,
  nl: nlPartnerLanding,
  it: itPartnerLanding,
}
