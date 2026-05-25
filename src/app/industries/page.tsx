import type { Metadata } from 'next'
import IndustriesLandingView from '@/components/sections/IndustriesLandingView'
import JsonLd from '@/components/seo/JsonLd'
import { buildBreadcrumbJsonLd, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Industries We Serve | Software for 5 Verticals',
  description:
    'Cogtix Solutions delivers industry-specific software for fintech, healthcare, retail, supply chain, and high-tech digital-native businesses.',
  path: '/industries',
  keywords: [
    'industries we serve',
    'industry specific software development',
    'vertical software solutions India',
    'software for financial services',
    'software for healthcare and life sciences',
    'software for retail and e-commerce',
    'software for supply chain and logistics',
    'software for SaaS and hi-tech startups',
    'Cogtix industry expertise',
    'BFSI software development services',
    'industry domain software company',
  ],
})

export default function IndustriesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
  ])

  return (
    <>
      <JsonLd id="breadcrumb-jsonld-industries" data={breadcrumbJsonLd} />
      <IndustriesLandingView />
    </>
  )
}
