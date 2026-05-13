import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'Digital & Experience Engineering Services | Cogtix Solutions',
  description:
    'UX/UI design, product design, web design, mobile apps. User-centered design for digital products.',
}

export default function ExperienceDesignPage() {
  return <ServicePageView variant="experience" />
}
