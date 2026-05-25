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

const FAQS = [
  {
    question:
      'What enterprise software services does Cogtix Solutions provide?',
    answer:
      'Cogtix delivers enterprise software services across legacy modernization, ERP and CRM customization, enterprise integration on MuleSoft and iPaaS platforms, BPM and workflow automation, custom application engineering, and enterprise security and compliance programs.',
  },
  {
    question:
      'How do I engage Cogtix Solutions for an enterprise modernization program?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com. We start with a current state assessment, share an executive summary with risk and ROI, and propose a wave based modernization plan that fits your budget cycle.',
  },
  {
    question: 'Do you customize Dynamics 365 and Salesforce platforms?',
    answer:
      'Yes. We build PCF controls, plugins, Power Pages portals, and Dataverse integrations on Dynamics 365 and Apex, Lightning Web Components, and managed packages on Salesforce. Each engagement ships with ALM, test automation, and ongoing release support.',
  },
  {
    question:
      'How long does a legacy modernization or ERP rollout typically take?',
    answer:
      'A focused modernization wave usually completes in twelve to sixteen weeks. Full estate modernizations and global ERP rollouts run in three to six month phases with parallel pilots, change management, and a measurable cutover plan.',
  },
  {
    question:
      'Does Cogtix support SOC 2, ISO 27001, HIPAA, and GDPR for enterprise builds?',
    answer:
      'Yes. Our enterprise engagements ship with audit ready logging, identity hardening, encryption, and policy as code. We work under customer MSAs, NDAs, and security questionnaires and we map controls to SOC 2, ISO 27001, HIPAA, and GDPR.',
  },
  {
    question:
      'Can Cogtix provide a dedicated enterprise application team?',
    answer:
      'Yes. We assemble dedicated pods that combine enterprise architects, backend engineers, integration specialists, QA engineers, and a delivery lead. Pods integrate with your in house ceremonies and reporting expectations from week one.',
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

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-enterprise" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-enterprise" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-enterprise" data={faqJsonLd} />
      <ServicePageView variant="enterprise" />
    </>
  )
}
