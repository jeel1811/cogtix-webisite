import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import IndustryPageView from '@/components/sections/IndustryPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/industries/hi-tech-and-digital-natives'
const TITLE = 'Hi-Tech & SaaS Software | MVPs & Multi-Tenant'
const DESCRIPTION =
  'MVP development, multi-tenant SaaS engineering, and cloud-native architecture for high-tech and digital-native companies. Built to scale fast.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'hi-tech software development',
    'digital native software services',
    'SaaS development company',
    'SaaS application development',
    'multi-tenant SaaS architecture',
    'cloud-native development services',
    'MVP development services',
    'startup software development',
    'B2B SaaS development',
    'micro-services architecture',
    'serverless development services',
    'product engineering for startups',
    'platform engineering for SaaS',
    'API-first product development',
  ],
})

export default function HiTechPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Hi-Tech & Digital Natives Software',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'SaaS & Hi-Tech Software Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Hi-Tech & Digital Natives', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-hitech" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-hitech" data={breadcrumbJsonLd} />
      <IndustryPageView variant="hiTech" />
    </>
  )
}
