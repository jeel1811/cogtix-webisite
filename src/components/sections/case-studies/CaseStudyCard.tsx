'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export interface CaseStudyCardData {
  title: string
  sector?: string | null
  technology?: string | null
  description?: string | null
  imageUrl?: string | null
  technologies: string[]
  href: string
}

interface CaseStudyCardProps {
  data: CaseStudyCardData
  index?: number
  /** `inView` for home scroll animations; `mount` for listing page grid */
  animation?: 'inView' | 'mount'
}

export default function CaseStudyCard({
  data,
  index = 0,
  animation = 'inView',
}: CaseStudyCardProps) {
  const { title, sector, technology, description, imageUrl, technologies, href } = data
  const techTags = technologies.filter(Boolean).slice(0, 5)

  const motionProps =
    animation === 'mount'
      ? {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: index * 0.08 },
        }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.08, duration: 0.45 },
        }

  return (
    <motion.article
      {...motionProps}
      className="group relative col-span-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <Link href={href} className="relative z-10 flex h-full flex-col">
        <CaseStudyCardImage title={title} imageUrl={imageUrl} />

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              {sector ? (
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-blue-700 ring-1 ring-blue-100">
                  {sector}
                </span>
              ) : null}
              <p className="mt-3 text-sm font-medium text-slate-500">
                {technology || 'Technology-led delivery'}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-white" />
            </div>
          </div>

          <div className="mb-7 flex-1">
            <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600 md:text-2xl">
              {title}
            </h3>
            {description ? (
              <p className="mt-4 line-clamp-2 text-[15px] leading-relaxed text-slate-600">
                {description}
              </p>
            ) : null}
          </div>

          {techTags.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </motion.article>
  )
}

function CaseStudyCardImage({
  title,
  imageUrl,
}: {
  title: string
  imageUrl?: string | null
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={imageUrl.startsWith('http')}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Case Study
          </span>
        </div>
      )}
    </div>
  )
}
