import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  PRIMARY_PHONE_DISPLAY,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
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

const FAQS = [
  {
    question:
      'Is Cogtix Solutions a certified Microsoft Solutions Partner?',
    answer:
      'Yes. Cogtix is a Microsoft Solutions Partner with designations across Azure, Data and AI, and Business Applications. Our engineers and architects hold active certifications across Azure, Power Platform, Dynamics 365, and Microsoft 365 disciplines.',
  },
  {
    question: 'How do I hire .NET or Azure engineers from Cogtix Solutions?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com. We share vetted .NET, Azure, Power Platform, and Dynamics 365 profiles within five business days and engineers can start in two to four weeks.',
  },
  {
    question:
      'Can Cogtix modernize a legacy .NET Framework application to .NET 8?',
    answer:
      'Yes. We use the strangler fig pattern to migrate legacy ASP.NET Framework monoliths to .NET 8 services on AKS or Azure Container Apps. Each wave ships with OpenTelemetry, Application Insights, and CI CD on Azure DevOps or GitHub.',
  },
  {
    question:
      'Do you stand up a Power Platform Center of Excellence for governance?',
    answer:
      'Yes. We deploy the official CoE Starter Kit, define an environment strategy, set DLP policies, build a Dataverse domain model, and ship an ALM pipeline on Power Platform Pipelines so citizen development scales safely.',
  },
  {
    question:
      'Can Cogtix migrate workloads from on premises to Microsoft Azure?',
    answer:
      'Yes. We follow the Cloud Adoption Framework and Azure Well Architected. Engagements include a portfolio assessment in Azure Migrate, a Bicep based landing zone, wave based migration, and a FinOps baseline with tagging and budgets.',
  },
  {
    question:
      'Do you build Azure OpenAI copilots that are safe for the enterprise?',
    answer:
      'Yes. Our copilots run on Azure OpenAI with private endpoints, managed identity, content safety filters, and Prompt Flow evaluation. We pair every rollout with Application Insights dashboards for tokens, latency, and grounding rate.',
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

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-microsoft" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-microsoft" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-microsoft" data={faqJsonLd} />
      <ServicePageView variant="microsoft" />
    </>
  )
}
