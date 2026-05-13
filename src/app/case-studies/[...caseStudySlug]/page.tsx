import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import queryGraphql from '@/components/queryGraphql/index'
import ContactForm from '@/components/sections/ContactForm'
import { GET_SINGLE_CASE_STUDY_BY_SLUG } from '@/graphql/case-studies/query'
import type { CaseStudyNode } from '@/components/sections/case-studies/types'

interface PageParams {
  caseStudySlug: string[]
}

async function getCaseStudy(slug: string): Promise<CaseStudyNode | null> {
  try {
    const { data } = await queryGraphql(GET_SINGLE_CASE_STUDY_BY_SLUG, { slug })
    return (data?.posts?.nodes?.[0] as CaseStudyNode) ?? null
  } catch (error) {
    console.error('[case-studies] Failed to load single case study', error)
    return null
  }
}

function resolveSlug(segments: string[] | undefined): string | null {
  if (!segments || segments.length === 0) return null
  return segments[segments.length - 1] ?? null
}

function resolveImageUrl(node: CaseStudyNode, key: 'firstImage' | 'secondImage' | 'thirdImage') {
  return node.caseStudy?.projectImages?.[key]?.mediaItemUrl ?? null
}

function renderSection(title: string, content?: string | null) {
  if (!content) return null

  return (
    <section className="border-t border-slate-200 py-12 first:border-t-0 first:pt-0">
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>
        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}

function renderImageSection(title: string, content?: string | null, image?: string | null, reverse = false) {
  if (!content && !image) return null

  return (
    <section className="border-t border-slate-200 py-12 first:border-t-0 first:pt-0">
      <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:[grid-template-columns:1fr_0.92fr]' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            {title}
          </h2>
          {content ? (
            <div
              className="prose prose-slate mt-4 max-w-none prose-headings:font-bold prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : null}
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={image.startsWith('http')}
              />
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-sm text-slate-500">
              Image not available for this section.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { caseStudySlug } = await params
  const slug = resolveSlug(caseStudySlug)
  if (!slug) {
    return { title: 'Case Studies | Cogtix Solutions' }
  }

  const data = await getCaseStudy(slug)
  if (!data) {
    return { title: 'Case Studies | Cogtix Solutions' }
  }

  const title = data.caseStudy?.metaTitle || data.caseStudy?.projectName || data.title || 'Case Study'
  const description =
    data.caseStudy?.metaDescription ||
    data.caseStudy?.shortPreviewDescription ||
    data.caseStudy?.projectOverview ||
    'Case study from Cogtix Solutions.'
  const url = `https://www.cogtix.com/case-studies/${data.slug}`

  return {
    title: `${title} | Cogtix Solutions`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Cogtix Solutions`,
      description,
      url,
      type: 'article',
      siteName: 'Cogtix Solutions',
      images: ['https://www.cogtix.com/twitterimg.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Cogtix Solutions`,
      description,
      images: ['https://www.cogtix.com/twitterimg.webp'],
    },
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { caseStudySlug } = await params
  const slug = resolveSlug(caseStudySlug)
  if (!slug) notFound()

  const data = await getCaseStudy(slug)
  if (!data) notFound()

  const caseStudy = data.caseStudy ?? {}
  const title = caseStudy.projectName || data.title || 'Case Study'
  const heroImage = resolveImageUrl(data, 'firstImage') || data.featuredImage?.node?.mediaItemUrl || null
  const challengeImage = resolveImageUrl(data, 'secondImage')
  const solutionImage = resolveImageUrl(data, 'thirdImage')

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 pt-28 pb-16">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.75rem] font-semibold text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-blue-600">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/case-studies" className="hover:text-blue-600">
              Case Studies
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="truncate text-slate-900">{title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-100">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Client Success Story
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {caseStudy.metaDescription || caseStudy.shortPreviewDescription || caseStudy.projectOverview || 'A real client case study from Cogtix Solutions.'}
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {caseStudy.sector ? (
                  <li className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    Sector: {caseStudy.sector}
                  </li>
                ) : null}
                {caseStudy.technology ? (
                  <li className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    Technology: {caseStudy.technology}
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="lg:col-span-5">
              {heroImage ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)]">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    unoptimized={heroImage.startsWith('http')}
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white shadow-sm">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Case study image unavailable
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {renderSection('Project Overview', caseStudy.projectOverview)}
          {renderSection('Client Background', caseStudy.clientBackground)}
          {renderImageSection('Business Needs', caseStudy.businessNeeds, null, false)}
          {renderImageSection('The Challenge', caseStudy.theChallange, challengeImage, true)}
          {renderImageSection('Our Solution', caseStudy.ourSolution, solutionImage, false)}
          {renderImageSection('Key Outcomes', caseStudy.keyOutcomes, null, true)}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Technologies
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(caseStudy.technologiesCategory ?? []).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
