import type { Metadata } from 'next'
import PartnersLandingView from '@/components/sections/partners/PartnersLandingView'
import { enPartnerLanding } from '@/i18n/partnerContent/en'

export const metadata: Metadata = {
  title: enPartnerLanding.metadata.title,
  description: enPartnerLanding.metadata.description,
}

export default function PartnersPage() {
  return <PartnersLandingView />
}
