'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import CaseStudyCard from '@/components/sections/case-studies/CaseStudyCard'
import { useI18n } from '@/i18n/provider'
import { homeItemToCaseStudyCardData } from '@/lib/caseStudyCardData'
import type { HomeCaseStudyItem } from '@/lib/mapHomeCaseStudy'

interface HomeCaseStudiesProps {
  items: HomeCaseStudyItem[]
}

export default function HomeCaseStudies({ items }: HomeCaseStudiesProps) {
  const { m } = useI18n()
  const copy = m.homeCaseStudies

  if (!items.length) return null

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="home-cs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-cs-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {copy.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {copy.title}{' '}
            <span className="text-blue-600">{copy.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{copy.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => (
            <CaseStudyCard
              key={item.id}
              data={homeItemToCaseStudyCardData(item)}
              index={index}
              animation="inView"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            {copy.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
