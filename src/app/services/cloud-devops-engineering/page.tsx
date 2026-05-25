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

const PAGE_PATH = '/services/cloud-devops-engineering'
const TITLE = 'Cloud & DevOps Engineering | AWS, Azure, GCP'
const DESCRIPTION =
  'Cloud migration, Kubernetes, CI/CD, Terraform, FinOps, and SRE services on AWS, Azure, and Google Cloud from Cogtix Solutions for modern teams.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'cloud and DevOps engineering services',
    'cloud consulting company India',
    'AWS cloud consulting services',
    'Azure cloud consulting services',
    'Google Cloud consulting services',
    'DevOps consulting services',
    'DevOps as a service',
    'Kubernetes consulting services',
    'EKS AKS GKE consulting',
    'CI CD pipeline services',
    'GitHub Actions consulting',
    'Azure DevOps consulting',
    'Terraform consulting services',
    'infrastructure as code services',
    'cloud migration services India',
    'cloud modernization services',
    'site reliability engineering',
    'SRE consulting services',
    'FinOps consulting services',
    'cloud cost optimization services',
    'platform engineering services',
    'DevSecOps consulting',
    'hire DevOps engineers',
    'hire cloud architects',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'Cloud Migration and Modernization',
    description:
      'Discovery, landing zones, and wave based migration to AWS, Azure, or Google Cloud aligned to CAF, AWS Well Architected, or the Google Cloud framework.',
  },
  {
    name: 'Kubernetes Platform Engineering',
    description:
      'Production EKS, AKS, and GKE platforms with GitOps via Argo CD or Flux, IRSA or Workload Identity, autoscaling, and policy as code.',
  },
  {
    name: 'CI CD and Release Engineering',
    description:
      'GitHub Actions, Azure DevOps, GitLab, and Cloud Build pipelines for application code, IaC, and ML workloads with progressive delivery.',
  },
  {
    name: 'Infrastructure as Code',
    description:
      'Terraform, Bicep, Pulumi, and CDK modules with policy guardrails, drift detection, and automated state management.',
  },
  {
    name: 'Site Reliability Engineering',
    description:
      'SLO design, observability with OpenTelemetry, Prometheus, and Grafana, incident response, and chaos engineering practices.',
  },
  {
    name: 'FinOps and Cloud Cost Engineering',
    description:
      'Tagging strategy, Savings Plans or CUDs, autoscaling tuning, and a monthly executive cost narrative for your finance team.',
  },
]

const FAQS = [
  {
    question:
      'Which cloud platforms does Cogtix Solutions deliver DevOps and migration work on?',
    answer:
      'Cogtix delivers production cloud and DevOps engineering on AWS, Microsoft Azure, and Google Cloud. We hold the certifications and partner standings needed to lead migrations, Kubernetes platforms, serverless modernization, and FinOps programs on all three providers.',
  },
  {
    question:
      'How do I hire Cogtix Solutions for cloud and DevOps consulting?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com. We start with a free discovery call, then propose a dedicated team or fixed scope engagement. Most cloud programs kick off within two to four weeks of contract signature.',
  },
  {
    question:
      'What does a typical cloud migration to AWS or Azure look like?',
    answer:
      'We baseline workloads with Migration Hub or Azure Migrate, design a landing zone in week one, then migrate in two week waves. A mid market estate typically completes core migration in eight to fourteen weeks, with FinOps and observability baked in before cutover.',
  },
  {
    question: 'Can Cogtix manage a production Kubernetes cluster for us?',
    answer:
      'Yes. We run managed Kubernetes engagements on EKS, AKS, and GKE with on call coverage, upgrade runbooks, GitOps delivery, policy enforcement, and capacity planning. SLAs and on call windows are agreed up front.',
  },
  {
    question:
      'How quickly can Cogtix Solutions place a dedicated DevOps engineer?',
    answer:
      'Most DevOps engineers can start within two to four weeks after profile approval. We coordinate access to your cloud accounts, SSO, and tooling so the engineer can deploy infrastructure changes and improve pipelines from week one.',
  },
  {
    question:
      'Does Cogtix Solutions help reduce cloud bills with FinOps practices?',
    answer:
      'Yes. Our FinOps program typically drives twenty to forty percent savings within ninety days by combining tagging governance, commitment plans, right sizing, lifecycle policies, and a monthly review with engineering and finance leads.',
  },
]

export default function CloudDevOpsPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Cloud and DevOps Engineering Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Cloud Computing and DevOps Engineering',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Cloud and DevOps Engineering', path: PAGE_PATH },
  ])

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-cloud" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-cloud" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-cloud" data={faqJsonLd} />
      <ServicePageView variant="cloud" />
    </>
  )
}
