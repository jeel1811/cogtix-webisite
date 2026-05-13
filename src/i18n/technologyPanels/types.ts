import type { ServiceVariant } from '@/components/sections/service-themes'

export interface TechnologyCategoryPanel {
  overview: string
  outcomes: string[]
}

export interface ServiceTechnologyPanelCopy {
  panelOutcomesTitle: string
  categoryPanels: TechnologyCategoryPanel[]
}

export type ServiceTechnologyPanelsByVariant = Record<
  ServiceVariant,
  ServiceTechnologyPanelCopy
>
