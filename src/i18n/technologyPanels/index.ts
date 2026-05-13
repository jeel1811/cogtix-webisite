import type { Locale } from '@/i18n/config'
import { deTechnologyPanels } from './de'
import { enTechnologyPanels } from './en'
import { esTechnologyPanels } from './es'
import { frTechnologyPanels } from './fr'
import { itTechnologyPanels } from './it'
import { nlTechnologyPanels } from './nl'
import type { ServiceTechnologyPanelsByVariant } from './types'

export type {
  ServiceTechnologyPanelCopy,
  ServiceTechnologyPanelsByVariant,
  TechnologyCategoryPanel,
} from './types'

export const serviceTechnologyPanels: Record<
  Locale,
  ServiceTechnologyPanelsByVariant
> = {
  en: enTechnologyPanels,
  es: esTechnologyPanels,
  fr: frTechnologyPanels,
  de: deTechnologyPanels,
  nl: nlTechnologyPanels,
  it: itTechnologyPanels,
}
