import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import queryGraphql from '@/components/queryGraphql/index'
import { GET_SINGLE_CAREER_BY_SLUG } from '@/graphql/careers/query'
import CareerDetailHero from '@/components/sections/careers/CareerDetailHero'
import JobDetails from '@/components/sections/careers/JobDetails'
import ContactForm from '@/components/sections/ContactForm'
import type { CareerNode } from '@/components/sections/careers/types'
import { buildMetadata } from '@/lib/seo'

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
    return buildMetadata({
      title: 'Job Not Found',
      description: 'The role you are looking for is no longer open.',
      path: '/careers',
      noIndex: true,
    })
  }

  const data = await getCareer(slug)
  if (!data) {
    return buildMetadata({
      title: 'Job Not Found',
      description: 'The role you are looking for is no longer open.',
      path: `/careers/${slug}`,
      noIndex: true,
    })
  }

  const location = data.careers?.jobLocation ?? ''
  const jobType = data.careers?.jobType ?? ''
  const detailsLine = [location, jobType].filter(Boolean).join(' · ')

  const title = `${data.title} | Apply for this Role`
  const description = detailsLine
    ? `Apply for ${data.title} at Cogtix Solutions (${detailsLine}). Join a global product engineering team building cloud, AI, data, and Microsoft technology solutions.`
    : `Apply for ${data.title} at Cogtix Solutions. Join a global product engineering team building cloud, AI, data, and Microsoft technology solutions.`

  const keywords = [
    data.title,
    `${data.title} jobs`,
    `${data.title} role`,
    `${data.title} hiring`,
    location ? `${data.title} in ${location}` : '',
    jobType ? `${jobType} ${data.title}` : '',
    'Cogtix careers',
    'software engineering jobs',
  ].filter(Boolean) as string[]

  return buildMetadata({
    title,
    description,
    path: `/careers/${data.slug}`,
    keywords,
  })
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
