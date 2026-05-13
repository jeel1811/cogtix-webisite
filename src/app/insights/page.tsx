import type { Metadata } from 'next'
import InsightsLandingView from '@/components/sections/InsightsLandingView'
import { enInsightsLanding } from '@/i18n/insightsContent/en'

export const metadata: Metadata = {
  title: enInsightsLanding.metadata.title,
  description: enInsightsLanding.metadata.description,
}

export default function InsightsPage() {
  return <InsightsLandingView />
}
