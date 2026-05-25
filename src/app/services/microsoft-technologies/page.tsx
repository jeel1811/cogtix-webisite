import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/microsoft-technologies'
const TITLE = 'Microsoft Technology Services | Azure & .NET'
const DESCRIPTION =
  'Cogtix Solutions is a Microsoft Solutions Partner. Build on .NET 8, Azure, Power Platform, Microsoft 365, and Dynamics 365 with confidence.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'Microsoft technology services',
    'Microsoft Solutions Partner India',
    'Microsoft consulting services',
    '.NET development services',
    '.NET 8 development company',
    '.NET Core development services',
    'ASP.NET MVC development',
    'Blazor development services',
    'Azure development services',
    'Azure consulting services',
    'Azure migration services',
    'Azure modernization services',
    'Power Platform development services',
    'Power Apps development services',
    'Power Automate consulting',
    'Power BI consulting services',
    'Microsoft 365 development services',
    'SharePoint development services',
    'Teams app development',
    'Microsoft Graph integration',
    'Dynamics 365 development services',
    'Dynamics 365 customization services',
    'Copilot Studio development',
    'Azure OpenAI consulting',
    'Microsoft Fabric consulting',
    'hire .NET developers',
    'hire Azure engineers',
  ],
})

const SERVICE_OFFERS = [
  {
    name: '.NET Application Engineering and Modernization',
    description:
      'Greenfield .NET 8 and legacy .NET Framework modernization with strangler fig migrations, AKS hosting, and OpenTelemetry.',
  },
  {
    name: 'Azure Migration and Cloud Engineering',
    description:
      'Azure landing zones, Bicep based IaC, Azure DevOps and GitHub Actions pipelines, Defender for Cloud, and FinOps controls.',
  },
  {
    name: 'Power Platform and Power Apps',
    description:
      'Canvas and model driven Power Apps, Power Automate flows, Power BI dashboards, AI Builder, and a governed Center of Excellence.',
  },
  {
    name: 'Dynamics 365 Customization',
    description:
      'Dynamics 365 Sales, Customer Service, Finance, and Field Service builds with PCF controls, plugins, Power Pages, and Dataverse.',
  },
  {
    name: 'Microsoft 365 and SharePoint Engineering',
    description:
      'SharePoint Framework intranets, Teams Toolkit apps, Viva Connections, Graph automations, and tenant security uplift.',
  },
  {
    name: 'Azure OpenAI and Microsoft Fabric',
    description:
      'Azure OpenAI grounded copilots, Copilot Studio agents, and Microsoft Fabric lakehouses with Purview governance.',
  },
]


export default function MicrosoftTechnologiesPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Microsoft Technology Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Microsoft Cloud and .NET Engineering',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Microsoft Technologies', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-microsoft" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-microsoft" data={breadcrumbJsonLd} />
      <ServicePageView variant="microsoft" />
    </>
  )
}
