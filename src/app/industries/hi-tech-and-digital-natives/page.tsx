import { Metadata } from 'next'
import IndustryPageView from '@/components/sections/IndustryPageView'

export const metadata: Metadata = {
  title: 'Hi-Tech & Digital Natives | Cogtix Solutions',
  description:
    'Scalable SaaS platforms, cloud-native architectures, and rapid MVP development for startups and tech companies.',
}

export default function HiTechPage() {
  return <IndustryPageView variant="hiTech" />
}
