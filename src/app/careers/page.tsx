import type { Metadata } from 'next'
import queryGraphql from '@/components/queryGraphql/index'
import { CAREER_LIST } from '@/graphql/careers/query'
import { WORDPRESS_CAREER_CATEGORY } from '@/constants/index'
import CareersHero from '@/components/sections/careers/CareersHero'
import JobList from '@/components/sections/careers/JobList'
import WhyJoinUs from '@/components/sections/careers/WhyJoinUs'
import ContactForm from '@/components/sections/ContactForm'
import type { CareerEdge } from '@/components/sections/careers/types'

export const metadata: Metadata = {
  title: 'Careers at Cogtix Solutions | Join Our Team',
  description:
    'Explore career opportunities at Cogtix Solutions! Discover our open positions, learn about our company culture, employee benefits, and find out how to join our talented team.',
  alternates: { canonical: 'https://www.cogtix.com/careers' },
  openGraph: {
    title: 'Careers at Cogtix Solutions | Join Our Team',
    description:
      'Explore open roles at Cogtix Solutions. Build software for clients across the globe.',
    url: 'https://www.cogtix.com/careers',
    type: 'website',
    siteName: 'Cogtix Solutions',
    images: ['https://www.cogtix.com/twitterimg.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Cogtix Solutions | Join Our Team',
    description:
      'Explore open roles at Cogtix Solutions. Build software for clients across the globe.',
    images: ['https://www.cogtix.com/twitterimg.webp'],
  },
}

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
