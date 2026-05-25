import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicesLandingView from '@/components/sections/ServicesLandingView'
import {
  PRIMARY_PHONE_DISPLAY,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const PAGE_PATH = '/services'
const TITLE =
  'Engineering Services | Custom Software, Cloud, AI ML, Data and Microsoft'
const DESCRIPTION =
  'Explore the full Cogtix Solutions engineering portfolio. AI and ML, cloud and DevOps, data engineering, digital experience, enterprise services, and Microsoft technologies. Call ' +
  PRIMARY_PHONE_DISPLAY +
  '.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'engineering services',
    'engineering services company India',
    'software engineering services',
    'AI ML engineering services',
    'cloud and DevOps engineering services',
    'data engineering services',
    'digital experience engineering services',
    'experience design services',
    'enterprise software services',
    'Microsoft technologies services',
    'Cogtix services',
    'custom software development services',
    'product engineering services',
    'hire software engineers',
    'IT services company India USA',
  ],
})

export default function ServicesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="breadcrumb-jsonld-services" data={breadcrumbJsonLd} />
      <ServicesLandingView />
    </>
  )
}
