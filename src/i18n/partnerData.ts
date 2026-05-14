/**
 * Partner page technical data - non-translatable values (icons, numeric stats,
 * certification levels, theme keys). Localized prose lives in
 * `src/i18n/partnerContent/`.
 */

import type { ReactNode } from 'react'
import { createElement } from 'react'
import {
  Activity,
  BarChart3,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Layers,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { ServiceVariant } from '@/components/sections/service-themes'
import type { PartnerVariant } from '@/components/sections/partners/partner-types'

export interface PartnerCertificationLevel {
  level: string
}

export interface PartnerPageData {
  themeBody: ServiceVariant // theme used by ServiceFeatures / Challenges / Impact bodies
  statValues: [string, string, string]
  certificationLevels: PartnerCertificationLevel[] // 9 entries
  challengeIcons: ReactNode[] // 6 entries
  metricValues: string[] // 4 entries
}

const icon = (Comp: React.ComponentType<{ className?: string }>): ReactNode =>
  createElement(Comp, { className: 'h-5 w-5' })

export const partnerData: Record<PartnerVariant, PartnerPageData> = {
  microsoft: {
    themeBody: 'microsoft',
    statValues: ['150+', '50+', '15 yrs'],
    certificationLevels: [
      { level: 'AZ-305' },
      { level: 'AZ-104' },
      { level: 'AZ-204' },
      { level: 'AZ-400' },
      { level: 'PL-600' },
      { level: 'PL-400' },
      { level: 'DP-203' },
      { level: 'AI-102' },
      { level: 'SC-900' },
    ],
    challengeIcons: [
      icon(Cloud),
      icon(RefreshCw),
      icon(Workflow),
      icon(BrainCircuit),
      icon(ShieldCheck),
      icon(BarChart3),
    ],
    metricValues: ['40%', '99.99%', '8 weeks', '60%'],
  },
  aws: {
    themeBody: 'cloud',
    statValues: ['80+', '40+', '60%'],
    certificationLevels: [
      { level: 'SAP-C02' },
      { level: 'SAA-C03' },
      { level: 'DOP-C02' },
      { level: 'DVA-C02' },
      { level: 'SOA-C02' },
      { level: 'SCS-C02' },
      { level: 'DEA-C01' },
      { level: 'MLS-C01' },
      { level: 'CLF-C02' },
    ],
    challengeIcons: [
      icon(Server),
      icon(Activity),
      icon(Layers),
      icon(Workflow),
      icon(ShieldCheck),
      icon(BarChart3),
    ],
    metricValues: ['60%', '14 wks', '99.99%', '< 100 ms'],
  },
  'google-cloud': {
    themeBody: 'data',
    statValues: ['60+', '25+', '99.95%'],
    certificationLevels: [
      { level: 'PCA' },
      { level: 'PCD' },
      { level: 'PDE' },
      { level: 'PMLE' },
      { level: 'PCDE' },
      { level: 'PCSE' },
      { level: 'PCNE' },
      { level: 'PWA' },
      { level: 'ACE' },
    ],
    challengeIcons: [
      icon(Database),
      icon(Cpu),
      icon(Workflow),
      icon(Activity),
      icon(ShieldCheck),
      icon(BarChart3),
    ],
    metricValues: ['5×', '40%', '< 60 s', '12 wks'],
  },
}
