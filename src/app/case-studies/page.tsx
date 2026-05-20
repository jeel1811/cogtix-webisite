import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import CaseStudiesHero from '@/components/sections/CaseStudiesHero'
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid'
import queryGraphql from '@/components/queryGraphql/index'
import { WORDPRESS_CASE_STUDIES_CATEGORY } from '@/constants/index'
import { CASE_STUDIES_LIST } from '@/graphql/case-studies/query'
import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import HappyClients from '@/components/sections/HappyClients'

export const metadata: Metadata = {
  title: 'Case Studies & Success Stories | Cogtix',
  description:
    'Explore how Cogtix has partnered with leading enterprises and startups to deliver transformative digital solutions and measurable business impact.',
  alternates: { canonical: 'https://www.cogtix.com/case-studies' },
  openGraph: {
    title: 'Case Studies & Success Stories | Cogtix',
    description:
      'Explore how Cogtix has partnered with leading enterprises and startups to deliver transformative digital solutions and measurable business impact.',
    url: 'https://www.cogtix.com/case-studies',
    type: 'website',
    siteName: 'Cogtix Solutions',
    images: ['https://www.cogtix.com/twitterimg.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Success Stories | Cogtix',
    description:
      'Explore how Cogtix has partnered with leading enterprises and startups to deliver transformative digital solutions and measurable business impact.',
    images: ['https://www.cogtix.com/twitterimg.webp'],
  },
}

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
