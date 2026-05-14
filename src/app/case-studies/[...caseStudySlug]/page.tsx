import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import queryGraphql from '@/components/queryGraphql/index'
import ContactForm from '@/components/sections/ContactForm'
import Container from '@/components/ui/Container'
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

function formatContent(content: string | null | undefined) {
  if (!content) return ''
  // If it already looks like HTML, return as is
  if (content.includes('<p>') || content.includes('<br')) return content
  
  // Otherwise split by double newlines or single newlines and wrap in paragraphs
  return content
    .split(/\n\n+/)
    .map(p => `<p>${p.trim()}</p>`)
    .join('')
}

function renderSection(title: string, content?: string | null) {
  if (!content) return null

  return (
    <section className="border-t border-slate-100 py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto max-w-4xl xl:max-w-5xl text-center">
        <div
          className="text-slate-700 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-blue-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900 [&_p]:my-6 [&_p]:leading-8 [&_p]:text-slate-700 [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_li]:my-3 [&_li>p]:my-0 [&_strong]:text-slate-950 [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: formatContent(content) }}
        />
      </div>
    </section>
  )
}

function renderArticleSection(title: string, content: string | null, sidebarImage: string | null = null, bottomImage: string | null = null, reverse = false) {
  if (!content && !sidebarImage && !bottomImage) return null

  return (
    <section className="border-t border-slate-100 py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      
      <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl overflow-hidden px-4 sm:px-6">
        {sidebarImage && (
          <div className={`mb-8 sm:mb-0 ${reverse ? 'sm:float-left sm:mr-10' : 'sm:float-right sm:ml-10'} relative w-full sm:w-[400px] xl:sm:w-[520px] 2xl:sm:w-[600px]`}>
            <div className="absolute -inset-10 rounded-[4rem] bg-blue-50/50 opacity-50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl shadow-slate-200/50">
              <Image
                src={sidebarImage}
                alt={`${title} view`}
                width={500}
                height={375}
                className="h-auto w-full object-contain"
                unoptimized={sidebarImage.startsWith('http')}
              />
            </div>
          </div>
        )}

        <div
          className="text-slate-700 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-blue-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900 [&_p]:my-6 [&_p]:leading-8 [&_p]:text-slate-700 [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_li]:my-3 [&_li>p]:my-0 [&_strong]:text-slate-950 [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: formatContent(content) }}
        />

        {/* Clear floats */}
        <div className="clear-both" />
      </div>

      {bottomImage && (
        <div className="mt-20 relative group mx-auto max-w-6xl 2xl:max-w-7xl">
          <div className="absolute -inset-10 rounded-[4rem] bg-slate-50/50 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-slate-200/60">
            <Image
              src={bottomImage}
              alt={`${title} wide view`}
              width={1200}
              height={675}
              className="h-auto w-full object-contain max-h-[700px]"
              unoptimized={bottomImage.startsWith('http')}
            />
          </div>
        </div>
      )}
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 pt-28 pb-4">
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

            <div 
                className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl whitespace-pre-line"
              dangerouslySetInnerHTML={{ 
                  __html: caseStudy.metaDescription || caseStudy.shortPreviewDescription || caseStudy.projectOverview || 'A real client case study from Cogtix Solutions.' 
              }}
            />

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
                <div className="mx-auto lg:ml-auto lg:mr-0 w-fit overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)]">
                  <Image
                    src={heroImage}
                    alt={title}
                    width={600}
                    height={450}
                    className="h-auto w-auto max-w-full max-h-[500px] object-contain"
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

      <section className="bg-white py-6">
        <Container className="py-8">
          {renderSection('Project Overview', caseStudy.projectOverview || null)}
          {renderSection('Client Background', caseStudy.clientBackground || null)}
          
          {/* Magazine Style Sections */}
          {renderArticleSection('Business Needs', caseStudy.businessNeeds || null)}
          
          {renderArticleSection(
            'The Challenge', 
            caseStudy.theChallange || null, 
            challengeImage, 
            null, 
            true
          )}
          
          {renderArticleSection(
            'Our Solution', 
            caseStudy.ourSolution || null, 
            solutionImage
          )}
          
          {renderArticleSection(
            'Key Outcomes', 
            caseStudy.keyOutcomes || null, 
            null, 
            null, 
            true
          )}
        </Container>
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
