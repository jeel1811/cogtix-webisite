import type { Metadata } from 'next'
import HowWeWorkLandingView from '@/components/sections/HowWeWorkLandingView'
import { enHowWeWorkLanding } from '@/i18n/landingContent/en'

export const metadata: Metadata = {
  title: enHowWeWorkLanding.metadata.title,
  description: enHowWeWorkLanding.metadata.description,
}

export default function HowWeWorkPage() {
  return <HowWeWorkLandingView />
}
