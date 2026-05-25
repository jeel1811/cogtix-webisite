import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
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

  return (
    <>
      <JsonLd id="service-jsonld-cloud" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-cloud" data={breadcrumbJsonLd} />
      <ServicePageView variant="cloud" />
    </>
  )
}
