import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import queryGraphql from '@/components/queryGraphql/index'
import { GET_SINGLE_CAREER_BY_SLUG } from '@/graphql/careers/query'
import CareerDetailHero from '@/components/sections/careers/CareerDetailHero'
import JobDetails from '@/components/sections/careers/JobDetails'
import ContactForm from '@/components/sections/ContactForm'
import type { CareerNode } from '@/components/sections/careers/types'

interface PageParams {
  careerSlug: string[]
}

async function getCareer(slug: string): Promise<CareerNode | null> {
  try {
    const { data } = await queryGraphql(GET_SINGLE_CAREER_BY_SLUG, { slug })
    return (data?.postBy as CareerNode) ?? null
  } catch (err) {
    console.error('[careers] Failed to load single career', err)
    return null
  }
}

function resolveSlug(segments: string[] | undefined): string | null {
  if (!segments || segments.length === 0) return null
  return segments[segments.length - 1] ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { careerSlug } = await params
  const slug = resolveSlug(careerSlug)
  if (!slug) {
    return { title: 'Careers | Cogtix Solutions' }
  }

  const data = await getCareer(slug)
  if (!data) {
    return { title: 'Careers | Cogtix Solutions' }
  }

  const url = `https://www.cogtix.com/careers/${data.slug}`
  return {
    title: `${data.title} | Cogtix Solutions Careers`,
    description: `Apply for ${data.title} at Cogtix Solutions. ${
      data.careers?.jobLocation ?? ''
    } ${data.careers?.jobType ?? ''}`.trim(),
    alternates: { canonical: url },
    openGraph: {
      title: `${data.title} | Cogtix Solutions Careers`,
      description: `Open role at Cogtix Solutions :  ${data.title}.`,
      url,
      type: 'website',
      siteName: 'Cogtix Solutions',
      images: ['https://www.cogtix.com/twitterimg.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | Cogtix Solutions Careers`,
      description: `Open role at Cogtix Solutions :  ${data.title}.`,
      images: ['https://www.cogtix.com/twitterimg.webp'],
    },
  }
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { careerSlug } = await params
  const slug = resolveSlug(careerSlug)
  if (!slug) notFound()

  const data = await getCareer(slug)
  if (!data) notFound()

  return (
    <>
      <CareerDetailHero data={data} />
      <JobDetails data={data} />
      <ContactForm />
    </>
  )
}
