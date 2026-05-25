import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/enterprise-solutions'
const TITLE = 'Enterprise Software Services | ERP, CRM, BPM'
const DESCRIPTION =
  'Enterprise software services from Cogtix Solutions. Modernize legacy systems, integrate ERP and CRM, automate workflows, ship governed software.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'enterprise software services',
    'enterprise software development company',
    'enterprise application development services',
    'ERP implementation services',
    'ERP modernization services',
    'CRM development services',
    'Salesforce development services',
    'legacy system modernization',
    'application modernization services',
    'mainframe modernization services',
    'business process automation services',
    'BPM consulting services India',
    'workflow automation services',
    'RPA development services',
    'enterprise integration services',
    'API integration services',
    'iPaaS implementation services',
    'MuleSoft consulting services',
    'enterprise platform engineering',
    'enterprise SaaS development',
    'custom enterprise application development',
    'enterprise security compliance services',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'Legacy Application Modernization',
    description:
      'Strangler fig migrations of .NET Framework, Java EE, and SAP ABAP estates onto modern stacks with measurable delivery milestones.',
  },
  {
    name: 'ERP and CRM Implementation and Extensions',
    description:
      'Dynamics 365, Salesforce, NetSuite, and SAP customizations, integrations, and reporting layers tailored to your business model.',
  },
  {
    name: 'Enterprise Integration and iPaaS',
    description:
      'MuleSoft, Boomi, Azure Logic Apps, AWS EventBridge, and Apigee based integration with API governance and observability.',
  },
  {
    name: 'Business Process Automation',
    description:
      'Workflow automation on Camunda, Power Automate, ServiceNow, UiPath, and Automation Anywhere with ROI tracking.',
  },
  {
    name: 'Custom Enterprise Application Development',
    description:
      'Bespoke .NET, Java, and Node.js applications engineered for SSO, audit, role based access, and enterprise reporting standards.',
  },
  {
    name: 'Enterprise Security and Compliance',
    description:
      'Zero trust rollouts, audit ready logging, SOC 2 and ISO 27001 alignment, and data residency strategies for regulated industries.',
  },
]


export default function EnterpriseSolutionsPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Enterprise Software Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Enterprise Software and Modernization',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Enterprise Services', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-enterprise" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-enterprise" data={breadcrumbJsonLd} />
      <ServicePageView variant="enterprise" />
    </>
  )
}
