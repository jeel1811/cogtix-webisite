import type { Metadata } from 'next'
import InsightsLandingView from '@/components/sections/InsightsLandingView'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Insights | Engineering Blogs & Case Studies',
  description:
    'Explore Cogtix Solutions insights: blogs, case studies, and engineering perspectives on cloud, AI, data, digital transformation, and delivery.',
  path: '/insights',
  keywords: [
    'Cogtix insights',
    'software engineering blogs',
    'cloud engineering articles',
    'AI insights and articles',
    'data engineering case studies',
    'digital transformation insights',
    'product delivery perspectives',
  ],
})

export default function InsightsPage() {
  return <InsightsLandingView />
}
