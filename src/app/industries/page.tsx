import type { Metadata } from 'next'
import IndustriesLandingView from '@/components/sections/IndustriesLandingView'
import { enIndustriesLanding } from '@/i18n/landingContent/en'

export const metadata: Metadata = {
  title: enIndustriesLanding.metadata.title,
  description: enIndustriesLanding.metadata.description,
}

export default function IndustriesPage() {
  return <IndustriesLandingView />
}
