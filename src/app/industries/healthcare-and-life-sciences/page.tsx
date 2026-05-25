import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import IndustryPageView from '@/components/sections/IndustryPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/industries/healthcare-and-life-sciences'
const TITLE =
  'Healthcare & Life Sciences Software | HIPAA, EHR, Telemedicine, FHIR'
const DESCRIPTION =
  'HIPAA-compliant software for hospitals, payers, providers, and life sciences. Build EHR integrations, telehealth platforms, FHIR APIs, patient portals, and clinical analytics with Cogtix.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'healthcare software development',
    'HIPAA compliant software development',
    'EHR development services',
    'EMR system development',
    'telemedicine app development',
    'telehealth platform development',
    'FHIR API development',
    'HL7 integration services',
    'patient engagement platform',
    'medical device software',
    'clinical trial management software',
    'pharmacy management software',
    'remote patient monitoring software',
    'life sciences software development',
    'healthcare analytics platform',
  ],
})

export default function HealthcarePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Healthcare & Life Sciences Software',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Healthcare & Life Sciences Software Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Healthcare & Life Sciences', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-healthcare" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-healthcare" data={breadcrumbJsonLd} />
      <IndustryPageView variant="healthcare" />
    </>
  )
}
