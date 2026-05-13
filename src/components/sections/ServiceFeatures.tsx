'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import { ServiceVariant, serviceThemes } from './service-themes'

interface Feature {
  title: string
  description: string
  highlights?: string[]
  details?: string
  outcomes?: string[]
  outcomesTitle?: string
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  description?: string
  features: Feature[]
  variant?: ServiceVariant
}

export default function ServiceFeatures({
  title,
  subtitle,
  description,
  features,
  variant = 'microsoft',
}: ServiceFeaturesProps) {
  const theme = serviceThemes[variant]
  const [activeIndex, setActiveIndex] = useState(0)
  const active = features[activeIndex]

  const defaultHighlights = [
    'Discovery & blueprint',
    'Build with rigour',
    'Operate at scale',
    'Iterate continuously',
  ]
  const highlights =
    active.highlights && active.highlights.length > 0
      ? active.highlights
      : defaultHighlights

  return (
    <section id="capabilities" className="relative bg-gray-50/60 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── Decorative geometrical shapes ──────────────────────────────────── */}
      {/* Large hollow circle - top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border-[2px] border-blue-200/30"
      />
      {/* Small filled circle - top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 left-10 h-5 w-5 rounded-full bg-blue-200/40"
      />
      {/* Rotated square - bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-[8%] h-12 w-12 rotate-45 rounded-[4px] border-[2px] border-indigo-200/30"
      />
      {/* Dotted ring - bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-[12%] h-40 w-40 rounded-full border-[2px] border-dashed border-blue-100/40"
      />
      {/* Small triangle - mid-left */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-[45%] left-[3%] w-8 h-8 opacity-[0.12]"
        viewBox="0 0 30 30"
        fill="none"
      >
        <polygon points="15,2 28,28 2,28" stroke="#3B82F6" strokeWidth="2" />
      </svg>
      {/* Tiny dots pattern - right side */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-[30%] right-[5%] w-20 h-20 opacity-[0.08]"
        viewBox="0 0 80 80"
      >
        {[0, 20, 40, 60].map((x) =>
          [0, 20, 40, 60].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="2" fill="#3B82F6" />
          ))
        )}
      </svg>

      <Container>
        {/* Section header */}
        <div className="relative mx-auto max-w-3xl text-center mb-14">
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

        {/* Tab layout: left list + right panel */}
        <div className="relative grid items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Left - tab list */}
          <div className="space-y-2">
            {features.map((feature, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-blue-200 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-100 hover:bg-blue-50/40'
                  }`}
                >
                  <span
                    className={`text-[14px] font-semibold leading-snug ${
                      isActive ? 'text-blue-700' : 'text-navy-900'
                    }`}
                  >
                    {feature.title}
                  </span>
                  <span
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right - content panel */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm min-h-[380px] transition-all duration-200 flex flex-col">
            <div className="p-8 pb-5 flex-1">
              <h3 className="text-2xl font-bold text-navy-900 md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                {active.description}
              </p>

              {/* Extended description box - no tick icon */}
              {active.details && (
                <div className="mt-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border border-blue-100/60 p-5">
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    {active.details}
                  </p>
                </div>
              )}

              {/* Concrete outcomes / deliverables */}
              {active.outcomes && active.outcomes.length > 0 && (
                <div className="mt-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {active.outcomesTitle ?? 'What we deliver'}
                  </div>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {active.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 rounded-lg bg-gray-50/80 px-3.5 py-2.5 ring-1 ring-gray-100"
                      >
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accentText}`} />
                        <span className="text-[13px] leading-snug text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Highlight tag chips - pinned to bottom */}
            <div className="border-t border-gray-100 px-8 py-5">
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className={`rounded-md border ${theme.badgeBg} border-blue-100 px-4 py-2 text-[13px] font-semibold ${theme.badgeText}`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
