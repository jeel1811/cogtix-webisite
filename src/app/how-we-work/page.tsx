import type { Metadata } from 'next'
import HowWeWorkLandingView from '@/components/sections/HowWeWorkLandingView'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title:
    'How We Work | Agile Delivery, Engagement Models & Process at Cogtix',
  description:
    'See how Cogtix Solutions delivers software. Agile process, three engagement models, transparent delivery cadence, and direct access to engineering for every project.',
  path: '/how-we-work',
  keywords: [
    'how we work Cogtix',
    'agile software development process',
    'software development engagement models',
    'dedicated team model',
    'fixed cost software development',
    'discovery process software',
    'software development methodology',
    'offshore development process',
    'transparent software delivery',
  ],
})

export default function HowWeWorkPage() {
  return <HowWeWorkLandingView />
}
