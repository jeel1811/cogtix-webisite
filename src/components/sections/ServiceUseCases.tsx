'use client'

import { useState, useCallback } from 'react'
import Container from '@/components/ui/Container'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ServiceVariant, serviceThemes } from './service-themes'

export interface UseCase {
  title: string
  description: string
}

interface ServiceUseCasesProps {
  title?: string
  subtitle?: string
  description?: string
  useCases: UseCase[]
  variant?: ServiceVariant
}

export default function ServiceUseCases({
  title = 'Use Cases We Cater To',
  subtitle = 'Use Cases',
  description,
  useCases,
  variant = 'ai',
}: ServiceUseCasesProps) {
  const theme = serviceThemes[variant]
  const CARDS_PER_PAGE = 3
  const totalPages = Math.ceil(useCases.length / CARDS_PER_PAGE)
  const [currentPage, setCurrentPage] = useState(0)

  const prev = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - 1))
  }, [])

  const next = useCallback(() => {
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
  }, [totalPages])

  const startIdx = currentPage * CARDS_PER_PAGE
  const visible = useCases.slice(startIdx, startIdx + CARDS_PER_PAGE)

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── Background vertical lines - like Technology section ─────────── */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[15%] opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[15%] opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
        }}
      />

      {/* ── Geometrical shapes ─────────────────────────────────────────── */}
      {/* Hollow hexagon - top-left */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-12 left-[6%] w-14 h-14 opacity-[0.08]"
        viewBox="0 0 50 50"
        fill="none"
      >
        <polygon
          points="25,2 47,14 47,36 25,48 3,36 3,14"
          stroke="#3B82F6"
          strokeWidth="2"
        />
      </svg>
      {/* Filled circle - top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-[10%] h-4 w-4 rounded-full bg-indigo-300/20"
      />
      {/* Rotated diamond - bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-[8%] h-10 w-10 rotate-45 rounded-[3px] border-[2px] border-blue-200/25"
      />
      {/* Large ghost circle - bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-blue-100/20"
      />
      {/* Plus shape - mid-right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-[40%] right-[4%] w-6 h-6 opacity-[0.10]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <line x1="12" y1="2" x2="12" y2="22" stroke="#6366F1" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#6366F1" strokeWidth="2" />
      </svg>

      <Container>
        {/* Section header */}
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full ${theme.badgeBg} px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] ${theme.badgeText}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${theme.badgeDot}`} />
            {subtitle}
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy-900 md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>
          )}
        </div>

        {/* Slider */}
        <div className="relative mt-14 flex items-center gap-5">
          {/* Prev button */}
          <button
            type="button"
            onClick={prev}
            disabled={currentPage === 0}
            aria-label="Previous"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>

          {/* Cards */}
          <div className="grid flex-1 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((uc, i) => (
              <div
                key={`page-${currentPage}-card-${i}`}
                className="relative flex flex-col overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 min-h-[240px]"
                style={{
                  background:
                    'linear-gradient(135deg, #0052A3 0%, #0066CC 60%, #3390FF 100%)',
                }}
              >
                {/* Decorative circles */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full opacity-20"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-5 -bottom-5 h-32 w-32 rounded-full border border-white/20"
                />

                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                  {uc.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/85 flex-1">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            disabled={currentPage >= totalPages - 1}
            aria-label="Next"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* Dot indicators */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === currentPage
                    ? 'w-7 bg-blue-600'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
