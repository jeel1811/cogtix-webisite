'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { useI18n } from '@/i18n/provider'
import { insightsLanding, insightCardHrefs } from '@/i18n/insightsContent'

export default function InsightsLandingView() {
  const { locale } = useI18n()
  const copy = insightsLanding[locale]

  const cards = copy.cards.map((card, idx) => ({
    ...card,
    href: insightCardHrefs[idx] ?? '/blogs',
  }))

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 pt-28 pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-200 opacity-20 blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-200 opacity-20 blur-[140px]" />

          <svg
            className="absolute inset-0 h-full w-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="insights-diagonal-stripe"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="20" height="40" fill="#0f172a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#insights-diagonal-stripe)" />
          </svg>
        </div>

        <Container className="relative z-10 w-full">
          <div className="mx-auto max-w-4xl pt-6 text-center md:pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-blue-600 shadow-sm backdrop-blur-sm">
              {copy.hero.badge}
            </div>

            <h1 className="mb-8 mt-7 text-5xl leading-[1.1] font-bold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              {copy.hero.titleLine1}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600 bg-clip-text text-transparent">
                {copy.hero.titleGradient}
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {copy.hero.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {copy.hero.ctaBlogs}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#insights-grid"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
              >
                {copy.hero.ctaExplore}
              </Link>
            </div>
          </div>
        </Container>

        <ScrollIndicator targetId="insights-grid" />
      </section>

      <section id="insights-grid" className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                {copy.grid.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {copy.grid.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {copy.grid.description}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={card.href}
                padding="lg"
                className="group border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:shadow-xl"
              >
                <Link href={card.href} className="block h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                        {copy.grid.cardPill}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors duration-200 group-hover:text-sky-600">
                      {card.exploreCta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
