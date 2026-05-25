import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/partners/microsoft'
const TITLE =
  'Microsoft Solutions Partner | Azure, .NET, Power Platform, M365 & Dynamics 365'
const DESCRIPTION =
  'Cogtix is a Microsoft Solutions Partner delivering Azure migrations, .NET 8 modernization, Power Platform CoE, Microsoft 365, Dynamics 365, and Azure OpenAI copilots for the enterprise.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'Microsoft Solutions Partner',
    'Microsoft Azure partner',
    'Azure consulting partner',
    'Azure migration services',
    'Azure modernization',
    '.NET modernization partner',
    'Power Platform partner',
    'Power Platform Center of Excellence',
    'Microsoft 365 consulting partner',
    'SharePoint consulting partner',
    'Dynamics 365 partner',
    'Azure OpenAI services',
    'Copilot Studio development',
    'Microsoft Fabric partner',
    'Azure data partner',
  ],
})

export default function MicrosoftPartnerPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Microsoft Solutions Partner Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Microsoft Cloud Consulting & Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Partners', path: '/partners' },
    { name: 'Microsoft', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-partner-ms" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-partner-ms" data={breadcrumbJsonLd} />
      <PartnerPageView variant="microsoft" />
    </>
  )
}
