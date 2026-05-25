import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import IndustryPageView from '@/components/sections/IndustryPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/industries/financial-services'
const TITLE =
  'Financial Services Software Development | Fintech, Banking & Insurance'
const DESCRIPTION =
  'Secure, compliant software for banks, lenders, payments, capital markets, and insurance. Cogtix builds PCI DSS, SOC 2, and PSD2-ready fintech platforms that scale.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'financial services software development',
    'fintech software development company',
    'banking software development',
    'payment system development',
    'digital banking solutions',
    'insurtech software development',
    'wealth management software',
    'capital markets software',
    'lending platform development',
    'PCI DSS compliant development',
    'SOC 2 compliant software',
    'open banking API services',
    'core banking modernization',
    'fraud detection systems',
    'KYC AML software',
  ],
})

export default function FinancialServicesPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Financial Services Software Development',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Fintech & Banking Software Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Financial Services', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-financial" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-financial" data={breadcrumbJsonLd} />
      <IndustryPageView variant="financial" />
    </>
  )
}
