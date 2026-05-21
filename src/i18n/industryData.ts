/**
 * Industry page technical data, kept here (not in localized content) because the
 * values are mostly numeric, brand, or icon references that should NOT be
 * translated per locale. Localized prose lives in `src/i18n/industryContent/`.
 */

import type { ReactNode } from 'react'
import type { ServiceVariant } from '@/components/sections/service-themes'
import type { IndustryVariant } from '@/i18n/industryContent/types'
import {
  Activity,
  ActivitySquare,
  Banknote,
  BarChart3,
  Code2,
  Database,
  DatabaseZap,
  FileCheck,
  HeartPulse,
  Lock,
  Map,
  Network,
  PackageX,
  RefreshCcw,
  Rocket,
  Route,
  Scaling,
  Search,
  ServerCrash,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  ThermometerSnowflake,
  Truck,
  UserCheck,
  Users,
  Users2,
  Zap,
} from 'lucide-react'
import { createElement } from 'react'

export interface IndustryFeatureExtras {
  highlights: string[]
}

export interface IndustryPageData {
  theme: ServiceVariant
  image: string
  statValues: [string, string, string]
  features: IndustryFeatureExtras[] // 6 entries, aligned to features.items
  challengeIcons: ReactNode[]       // 6 entries, aligned to challenges.items
  metricValues: string[]            // 4 entries, aligned to impact.metrics
}

const icon = (Comp: React.ComponentType<{ className?: string }>): ReactNode =>
  createElement(Comp, { className: 'h-5 w-5' })

export const industryData: Record<IndustryVariant, IndustryPageData> = {
  financial: {
    theme: 'enterprise',
    image: '/images/industries/finance_graphic_v4_transparent.png',
    statValues: ['15+', '99.99%', 'PCI-DSS'],
    features: [
      { highlights: ['Omnichannel experience', 'Mobile-first design', 'Real-time processing', 'Core banking API integration'] },
      { highlights: ['PCI-DSS compliance', 'Digital wallets', 'Cross-border payments', 'High-throughput architecture'] },
      { highlights: ['Automated rebalancing', 'AI-driven advice', 'Risk assessment', 'Interactive reporting'] },
      { highlights: ['Automated claims', 'AI underwriting', 'Fraud detection', 'Self-service portals'] },
      { highlights: ['KYC / AML automation', 'PSD2 compliance', 'Transaction monitoring', 'Automated reporting'] },
      { highlights: ['DeFi platforms', 'Asset tokenization', 'Smart contracts', 'Hyperledger Fabric'] },
    ],
    challengeIcons: [
      icon(ShieldCheck),
      icon(Lock),
      icon(Activity),
      icon(BarChart3),
      icon(FileCheck),
      icon(Banknote),
    ],
    metricValues: ['40%', '99.9%', '50%', '3x'],
  },
  healthcare: {
    theme: 'ai',
    image: '/images/industries/healthcare_graphic_v4_transparent.png',
    statValues: ['20+', 'HIPAA', '1M+'],
    features: [
      { highlights: ['WebRTC video', 'HIPAA compliant', 'e-Prescription integration', 'Secure messaging'] },
      { highlights: ['HL7 / FHIR standards', 'Interoperability', 'Data migration', 'Patient portals'] },
      { highlights: ['Remote patient monitoring', 'Wearable data sync', 'Real-time alerts', 'IoT backend'] },
      { highlights: ['Predictive diagnostics', 'Medical imaging AI', 'Resource allocation', 'Clinical decision support'] },
      { highlights: ['Inventory tracking', 'Automated fulfillment', 'e-Prescribing', 'Compliance tracking'] },
      { highlights: ['Patient recruitment', 'Electronic data capture', 'Site monitoring', 'FDA compliance'] },
    ],
    challengeIcons: [
      icon(ShieldAlert),
      icon(Network),
      icon(UserCheck),
      icon(Stethoscope),
      icon(ActivitySquare),
      icon(HeartPulse),
    ],
    metricValues: ['35%', '2.5x', '40%', '100%'],
  },
  retail: {
    theme: 'experience',
    image: '/images/industries/retail_graphic_v4_transparent.png',
    statValues: ['30+', '$500M+', 'Sub-second'],
    features: [
      { highlights: ['Headless commerce', 'PWA storefronts', 'Unified cart', 'Social commerce'] },
      { highlights: ['Real-time inventory sync', 'Offline mode', 'Hardware integration', 'Sales analytics'] },
      { highlights: ['Machine learning ranking', 'Dynamic pricing', 'Behavioral analytics', 'Targeted campaigns'] },
      { highlights: ['WMS integration', 'Automated order routing', 'Real-time tracking', 'ERP synchronization'] },
      { highlights: ['Gamification', 'Tiered reward systems', 'Mobile wallet integration', 'Retention analytics'] },
      { highlights: ['Custom pricing catalogs', 'Bulk ordering workflows', 'Quote-to-cash', 'PunchOut integration'] },
    ],
    challengeIcons: [
      icon(RefreshCcw),
      icon(Zap),
      icon(Search),
      icon(BarChart3),
      icon(Users),
      icon(ShoppingCart),
    ],
    metricValues: ['2.5x', '<1s', '40%', '100%'],
  },
  supplyChain: {
    theme: 'cloud',
    image: '/images/industries/logistics_graphic_v4_transparent.png',
    statValues: ['25+', '10M+', '30%'],
    features: [
      { highlights: ['Real-time GPS tracking', 'Telematics integration', 'Fuel optimization', 'Driver analytics'] },
      { highlights: ['RFID & barcode scanning', 'Automated picking logic', 'Robotics API integration', 'Storage optimization'] },
      { highlights: ['Predictive ETAs', 'Multi-carrier aggregation', 'IoT sensor data', 'Disruption alerts'] },
      { highlights: ['Dynamic mapping APIs', 'Machine learning routing', 'Load capacity planning', 'Traffic and weather inputs'] },
      { highlights: ['Proof of delivery', 'Driver mobile apps', 'Customer tracking portals', 'Turn-by-turn navigation'] },
      { highlights: ['Predictive analytics', 'Demand forecasting', 'Data-driven procurement', 'Seasonal trend analysis'] },
    ],
    challengeIcons: [
      icon(Map),
      icon(Route),
      icon(PackageX),
      icon(Database),
      icon(ThermometerSnowflake),
      icon(Truck),
    ],
    metricValues: ['25%', '99.9%', '40%', '360°'],
  },
  hiTech: {
    theme: 'microsoft',
    image: '/images/industries/tech_graphic_v4_transparent.png',
    statValues: ['50+', 'Millions', '< 3 mo'],
    features: [
      { highlights: ['Multi-tenant architecture', 'Subscription billing', 'Automated provisioning', 'SaaS dashboards'] },
      { highlights: ['Microservices', 'Serverless computing', 'Kubernetes & Docker', 'Auto-scaling infrastructure'] },
      { highlights: ['Agile sprints', 'Market validation', 'Core feature focus', 'Rapid prototyping'] },
      { highlights: ['REST and GraphQL', 'Developer portals', 'OAuth 2.0 security', 'API monetization'] },
      { highlights: ['Data warehousing', 'Real-time analytics', 'Machine learning ops', 'ETL pipelines'] },
      { highlights: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Zero-downtime deployment'] },
    ],
    challengeIcons: [
      icon(Rocket),
      icon(ServerCrash),
      icon(DatabaseZap),
      icon(Code2),
      icon(Users2),
      icon(Scaling),
    ],
    metricValues: ['3x', '40%', 'Zero', '100+'],
  },
}
