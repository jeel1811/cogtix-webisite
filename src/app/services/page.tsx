import type { Metadata } from 'next'
import ServicesLandingView from '@/components/sections/ServicesLandingView'
import { enServicesLanding } from '@/i18n/landingContent/en'

export const metadata: Metadata = {
  title: enServicesLanding.metadata.title,
  description: enServicesLanding.metadata.description,
}

export default function ServicesPage() {
  return <ServicesLandingView />
}
