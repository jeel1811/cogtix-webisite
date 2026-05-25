import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/partners/google-cloud'
const TITLE =
  'Google Cloud Partner | BigQuery, Vertex AI, GKE & Anthos Services'
const DESCRIPTION =
  'Cogtix is a Google Cloud Partner delivering BigQuery data platforms, Vertex AI productionization, GKE Autopilot, and Anthos modernization for data-led, regulated organizations.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'Google Cloud Partner',
    'GCP consulting partner',
    'BigQuery consulting services',
    'BigQuery development',
    'Vertex AI consulting',
    'Vertex AI MLOps',
    'Gemini development services',
    'GKE consulting',
    'GKE Autopilot services',
    'Anthos modernization',
    'Looker consulting partner',
    'LookML development',
    'Pub/Sub Dataflow consulting',
    'Cloud Run development',
    'GCP migration services',
    'Google Cloud FinOps',
  ],
})

export default function GoogleCloudPartnerPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Google Cloud Partner Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Google Cloud Consulting & Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Partners', path: '/partners' },
    { name: 'Google Cloud', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-partner-gcp" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-partner-gcp" data={breadcrumbJsonLd} />
      <PartnerPageView variant="google-cloud" />
    </>
  )
}
