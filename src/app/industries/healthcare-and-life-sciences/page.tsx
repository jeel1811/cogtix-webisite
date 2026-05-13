import { Metadata } from 'next'
import IndustryPageView from '@/components/sections/IndustryPageView'

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences | Cogtix Solutions',
  description:
    'HIPAA-compliant software solutions for Healthcare, Telemedicine, and Life Sciences.',
}

export default function HealthcarePage() {
  return <IndustryPageView variant="healthcare" />
}
