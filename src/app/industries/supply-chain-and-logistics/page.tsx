import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import IndustryPageView from '@/components/sections/IndustryPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/industries/supply-chain-and-logistics'
const TITLE =
  'Supply Chain & Logistics Software | TMS, WMS, Fleet & Visibility'
const DESCRIPTION =
  'Fleet management, WMS, TMS, last-mile delivery, real-time tracking, and supply chain visibility software built by Cogtix. Modernize logistics operations with engineering you can trust.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'supply chain software development',
    'logistics software development',
    'transportation management system',
    'TMS software development',
    'warehouse management system',
    'WMS software development',
    'fleet management software',
    'last mile delivery platform',
    'supply chain visibility software',
    'route optimization software',
    'freight management software',
    '3PL software development',
    'inventory management software',
    'IoT logistics solutions',
    'shipment tracking software',
  ],
})

export default function SupplyChainPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Supply Chain & Logistics Software',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Supply Chain & Logistics Software Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Supply Chain & Logistics', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-supplychain" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-supplychain" data={breadcrumbJsonLd} />
      <IndustryPageView variant="supplyChain" />
    </>
  )
}
