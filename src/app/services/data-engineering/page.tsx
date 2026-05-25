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

const PAGE_PATH = '/services/data-engineering'
const TITLE = 'Data Engineering | Snowflake, Databricks, dbt'
const DESCRIPTION =
  'Scalable data engineering from Cogtix Solutions: modern pipelines, lakehouses, warehouses, dbt models, and analytics platforms for AI-ready data.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'data engineering services',
    'data engineering company India',
    'data engineering consulting',
    'data pipeline development services',
    'ETL development services',
    'ELT pipeline services',
    'data warehouse development',
    'data lakehouse services',
    'Snowflake consulting partner',
    'Snowflake data platform services',
    'Databricks consulting services',
    'Databricks development company',
    'BigQuery development services',
    'Amazon Redshift consulting',
    'dbt consulting services',
    'dbt development partner',
    'Apache Airflow services',
    'Apache Spark consulting',
    'Apache Iceberg lakehouse',
    'real time data streaming services',
    'Kafka consulting services',
    'data analytics platform development',
    'data platform engineering',
    'hire data engineers',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'Modern Data Warehouse Engineering',
    description:
      'Snowflake, BigQuery, Redshift, and Synapse data warehouses with dimensional models, slot or warehouse sizing, and cost governance.',
  },
  {
    name: 'Data Lakehouse on S3, ADLS, or GCS',
    description:
      'Medallion architectures on Apache Iceberg or Delta Lake with batch and streaming ingestion, schema registries, and CDC.',
  },
  {
    name: 'dbt and Transformation Engineering',
    description:
      'dbt projects with documented tests, lineage, semantic models, and CI gates on GitHub Actions or GitLab CI.',
  },
  {
    name: 'Real Time Streaming Pipelines',
    description:
      'Kafka, Kinesis, Pub Sub, and Event Hubs streaming pipelines with exactly once semantics and dead letter handling.',
  },
  {
    name: 'Business Intelligence and Semantic Layer',
    description:
      'Power BI, Looker, Tableau, and Quicksight semantic models with row level security, certified datasets, and governance.',
  },
  {
    name: 'Data Governance and Quality',
    description:
      'Cataloging on Purview, Unity Catalog, Collibra, or DataHub with data quality, classification, and lineage automation.',
  },
]

const FAQS = [
  {
    question:
      'What data engineering services does Cogtix Solutions offer?',
    answer:
      'Cogtix builds modern data platforms end to end. That includes data warehouses on Snowflake, BigQuery, Redshift, and Synapse, lakehouses on Iceberg or Delta, transformation with dbt, real time pipelines on Kafka and Pub Sub, BI on Power BI, Looker, and Tableau, and governance on Purview, Unity Catalog, or Collibra.',
  },
  {
    question: 'How do I hire data engineers from Cogtix Solutions?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com to start a discovery call. We share vetted data engineer profiles within five to seven business days. Engagement models include dedicated resources, time and materials, and fixed scope delivery.',
  },
  {
    question:
      'Should we choose a data warehouse or a lakehouse architecture?',
    answer:
      'For analytics heavy workloads with structured data, a Snowflake or BigQuery warehouse usually wins on time to value. For mixed data, AI training sets, and open table formats, an Iceberg or Delta lakehouse on object storage gives more flexibility. We run a short architecture discovery to recommend the right pattern for your data volumes and use cases.',
  },
  {
    question:
      'Can Cogtix Solutions modernize a legacy ETL platform with dbt?',
    answer:
      'Yes. We migrate Informatica, SSIS, Talend, and stored procedure based ETL into dbt projects with version control, automated tests, lineage, and CI gates. Migrations are sized in two to three week increments so reporting stays live throughout the transition.',
  },
  {
    question:
      'How long does a modern data platform implementation take?',
    answer:
      'A focused MVP that lands one or two domains in Snowflake or BigQuery with dbt and a BI semantic model usually takes ten to fourteen weeks. Multi domain enterprise rollouts run in three to six month phases with governance and FinOps embedded from the start.',
  },
  {
    question:
      'Does Cogtix provide ongoing managed services for data platforms?',
    answer:
      'Yes. We run managed data platform engagements with on call coverage for pipeline failures, freshness SLAs, dbt deployment, BI dataset certification, and monthly cost reviews. SLAs and reporting cadence are documented in a managed services agreement.',
  },
]

export default function DataEngineeringPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Data Engineering Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Data Engineering and Analytics',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Data Engineering', path: PAGE_PATH },
  ])

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-data" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-data" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-data" data={faqJsonLd} />
      <ServicePageView variant="data" />
    </>
  )
}
