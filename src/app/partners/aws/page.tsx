import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/partners/aws'
const TITLE = 'AWS Partner | Migration, EKS, Serverless, Bedrock'
const DESCRIPTION =
  'Cogtix is an AWS Partner Network member building Well-Architected workloads: MAP migrations, EKS platforms, serverless, and Bedrock copilots.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'AWS Partner Network',
    'AWS consulting partner',
    'AWS migration services',
    'AWS Well-Architected partner',
    'Amazon EKS consulting',
    'AWS Lambda development',
    'AWS serverless consulting',
    'Amazon Bedrock services',
    'AWS GenAI services',
    'AWS data lake services',
    'AWS Iceberg lakehouse',
    'AWS FinOps consulting',
    'AWS DevOps services',
    'AWS security consulting',
    'AWS Control Tower setup',
  ],
})

export default function AWSPartnerPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'AWS Partner Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'AWS Cloud Consulting & Engineering',
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Partners', path: '/partners' },
    { name: 'AWS', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-partner-aws" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-partner-aws" data={breadcrumbJsonLd} />
      <PartnerPageView variant="aws" />
    </>
  )
}
