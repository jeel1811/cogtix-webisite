import type { Metadata } from 'next'
import PartnersLandingView from '@/components/sections/partners/PartnersLandingView'
import JsonLd from '@/components/seo/JsonLd'
import { buildBreadcrumbJsonLd, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cloud Partners | Microsoft, AWS & Google Cloud',
  description:
    'Cogtix Solutions is a credentialed Microsoft Solutions Partner, AWS Partner Network member, and Google Cloud Partner for enterprise teams.',
  path: '/partners',
  keywords: [
    'cloud partnerships',
    'cloud consulting partner India',
    'Microsoft Solutions Partner',
    'AWS Partner Network member',
    'Google Cloud Partner',
    'multi cloud consulting services',
    'cloud certified partner',
    'Azure consulting partner',
    'AWS consulting partner',
    'GCP consulting partner',
    'Cogtix cloud partnerships',
  ],
})

export default function PartnersPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Partners', path: '/partners' },
  ])

  return (
    <>
      <JsonLd id="breadcrumb-jsonld-partners" data={breadcrumbJsonLd} />
      <PartnersLandingView />
    </>
  )
}
