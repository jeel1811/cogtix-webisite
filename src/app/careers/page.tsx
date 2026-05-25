import type { Metadata } from 'next'
import queryGraphql from '@/components/queryGraphql/index'
import { CAREER_LIST } from '@/graphql/careers/query'
import { WORDPRESS_CAREER_CATEGORY } from '@/constants/index'
import CareersHero from '@/components/sections/careers/CareersHero'
import JobList from '@/components/sections/careers/JobList'
import WhyJoinUs from '@/components/sections/careers/WhyJoinUs'
import ContactForm from '@/components/sections/ContactForm'
import type { CareerEdge } from '@/components/sections/careers/types'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Careers at Cogtix | Engineering, Design & PM Jobs',
  description:
    'Build the next generation of software with Cogtix Solutions. Browse open roles for engineers, designers, PMs, and operations across four offices.',
  path: '/careers',
  keywords: [
    'careers at Cogtix',
    'software engineering jobs',
    'remote software jobs India',
    'frontend developer jobs',
    'backend developer jobs',
    'full stack developer jobs',
    'mobile app developer jobs',
    'DevOps engineer jobs',
    'data engineer jobs',
    'AI ML engineer jobs',
    'UX designer jobs',
    'project manager jobs',
    'tech jobs Ahmedabad',
    'cogtix jobs',
    'careers in software company',
  ],
})

async function getCareers(): Promise<CareerEdge[]> {
  try {
    const { data } = await queryGraphql(CAREER_LIST, {
      where: { categoryIn: WORDPRESS_CAREER_CATEGORY.id },
    })
    return (data?.posts?.edges as CareerEdge[]) ?? []
  } catch (err) {
    console.error('[careers] Failed to load careers list', err)
    return []
  }
}

export default async function CareersPage() {
  const careers = await getCareers()

  return (
    <>
      <CareersHero
        title="Build the Next Generation of Software."
        description="We're always on the lookout for thoughtful engineers, designers and product folks. Browse our open roles below or drop us a line :  we read every application."
        openCount={careers.length}
      />

      <JobList careers={careers} />

      <WhyJoinUs />

      <ContactForm />
    </>
  )
}
