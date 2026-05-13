import type { Locale } from '@/i18n/config'
import type {
  IndustriesLandingCopy,
  ServicesLandingCopy,
  HowWeWorkLandingCopy,
} from './types'
import { enServicesLanding, enIndustriesLanding, enHowWeWorkLanding } from './en'
import { esServicesLanding, esIndustriesLanding } from './es'
import { frServicesLanding, frIndustriesLanding } from './fr'
import { deServicesLanding, deIndustriesLanding } from './de'
import { nlServicesLanding, nlIndustriesLanding } from './nl'
import { itServicesLanding, itIndustriesLanding } from './it'

export type {
  IndustriesLandingCopy,
  ServicesLandingCopy,
  ServicesLandingItem,
  IndustriesLandingItem,
  LandingHeroCopy,
  LandingGridCopy,
  LandingMetadata,
} from './types'
export { serviceSlugs, industrySlugs, howWeWorkSlugs } from './types'

export const servicesLanding: Record<Locale, ServicesLandingCopy> = {
  en: enServicesLanding,
  es: esServicesLanding,
  fr: frServicesLanding,
  de: deServicesLanding,
  nl: nlServicesLanding,
  it: itServicesLanding,
}

export const industriesLanding: Record<Locale, IndustriesLandingCopy> = {
  en: enIndustriesLanding,
  es: esIndustriesLanding,
  fr: frIndustriesLanding,
  de: deIndustriesLanding,
  nl: nlIndustriesLanding,
  it: itIndustriesLanding,
}

export const howWeWorkLanding: Record<Locale, HowWeWorkLandingCopy> = {
  en: enHowWeWorkLanding,
  es: enHowWeWorkLanding,
  fr: enHowWeWorkLanding,
  de: enHowWeWorkLanding,
  nl: enHowWeWorkLanding,
  it: enHowWeWorkLanding,
}
