import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import IndustryPageView from '@/components/sections/IndustryPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/industries/retail-and-e-commerce'
const TITLE = 'Retail & E-commerce Software | Omnichannel & POS'
const DESCRIPTION =
  'Composable commerce, headless storefronts, POS integration, and personalization for retail. Cogtix builds omnichannel platforms that convert.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'retail software development',
    'e-commerce development company',
    'ecommerce platform development',
    'omnichannel commerce solutions',
    'headless commerce development',
    'composable commerce services',
    'Shopify development services',
    'Magento development services',
    'Salesforce commerce cloud',
    'POS integration services',
    'order management system development',
    'personalization engine development',
    'product recommendation engine',
    'B2B ecommerce development',
    'D2C ecommerce platform',
    'marketplace development',
  ],
})

export default function RetailEcommercePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Retail & E-commerce Software Development',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Retail & E-commerce Software Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Retail & E-commerce', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-retail" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-retail" data={breadcrumbJsonLd} />
      <IndustryPageView variant="retail" />
    </>
  )
}
