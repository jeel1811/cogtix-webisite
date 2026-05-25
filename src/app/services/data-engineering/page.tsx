import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
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

  return (
    <>
      <JsonLd id="service-jsonld-data" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-data" data={breadcrumbJsonLd} />
      <ServicePageView variant="data" />
    </>
  )
}
