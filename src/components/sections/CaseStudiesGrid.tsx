'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Layers3 } from 'lucide-react'
import Container from '@/components/ui/Container'
import CaseStudyCard from '@/components/sections/case-studies/CaseStudyCard'
import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import { edgeToCaseStudyCardData } from '@/lib/caseStudyCardData'

interface CaseStudiesGridProps {
  studies: CaseStudyEdge[]
}

const ITEMS_PER_PAGE = 9

export default function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  const [currentPage, setCurrentPage] = useState(1)

  if (!studies.length) {
    return (
      <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
        <Container className="relative z-10">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Layers3 className="mx-auto h-10 w-10 text-blue-500" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">No case studies found</h2>
            <p className="mt-2 text-slate-600">
              The CMS did not return any case studies for the selected category.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  const totalPages = Math.ceil(studies.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const endIdx = startIdx + ITEMS_PER_PAGE
  const paginatedStudies = studies.slice(startIdx, endIdx)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const gridElement = document.getElementById('case-studies-grid')
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div id="case-studies-grid" className="scroll-mt-20">
          <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {paginatedStudies.map((study, idx) => (
              <CaseStudyCard
                key={study.node.id || study.node.slug}
                data={edgeToCaseStudyCardData(study)}
                index={idx}
                animation="mount"
              />
            ))}
          </div>

          {totalPages > 1 ? (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                      currentPage === page
                        ? 'border border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-500/30'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ) : null}

          <div className="mt-8 text-center text-sm text-slate-500">
            Showing {startIdx + 1}-{Math.min(endIdx, studies.length)} of {studies.length} case
            studies
          </div>
        </div>
      </Container>
    </section>
  )
}
