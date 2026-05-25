import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import CaseStudiesHero from '@/components/sections/CaseStudiesHero'
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid'
import queryGraphql from '@/components/queryGraphql/index'
import { WORDPRESS_CASE_STUDIES_CATEGORY } from '@/constants/index'
import { CASE_STUDIES_LIST } from '@/graphql/case-studies/query'
import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import HappyClients from '@/components/sections/HappyClients'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title:
    'Case Studies | Cloud, AI, Data & Product Engineering Success Stories',
  description:
    'See how Cogtix Solutions partners with enterprises and startups to ship cloud, AI, data, and product engineering wins. Browse case studies and measurable business outcomes.',
  path: '/case-studies',
  keywords: [
    'case studies',
    'software development case studies',
    'cloud migration case studies',
    'AI ML case studies',
    'data engineering case studies',
    'product engineering success stories',
    'Cogtix client work',
    'enterprise software case studies',
    'SaaS development case studies',
  ],
})

async function getCaseStudies(): Promise<CaseStudyEdge[]> {
  try {
    const { data } = await queryGraphql(CASE_STUDIES_LIST, {
      where: { categoryIn: WORDPRESS_CASE_STUDIES_CATEGORY.id },
      first: 100,
    })

    return (data?.posts?.edges as CaseStudyEdge[]) ?? []
  } catch (error) {
    console.error('[case-studies] Failed to load case studies list', error)
    return []
  }
}

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies()

  return (
    <div className="min-h-screen bg-white">
      <CaseStudiesHero />
      <CaseStudiesGrid studies={studies} />
      <HappyClients />
      <ContactForm />
    </div>
  )
}
