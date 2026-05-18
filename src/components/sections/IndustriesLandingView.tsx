'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Testimonials from '@/components/sections/Testimonials'
import Offices from '@/components/sections/Offices'
import { useI18n } from '@/i18n/provider'
import { industriesLanding, industrySlugs } from '@/i18n/landingContent'

export default function IndustriesLandingView() {
  const { locale, m } = useI18n()
  const copy = industriesLanding[locale]

  const industries = copy.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    href: industrySlugs[idx]?.href ?? '#',
  }))

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_42%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] py-10 md:py-14">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {m.siteCtas.discussProject}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#industries-grid"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {copy.hero.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm leading-6 text-slate-600 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="industries-grid" className="py-10 md:py-14">
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
            {industries.map((industry, index) => (
              <Card
                key={industry.title}
                padding="lg"
                className="group border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:shadow-xl"
              >
                <Link href={industry.href} className="block h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 transition-transform duration-300 group-hover:scale-105 group-hover:bg-sky-500/15">
                        <span className="text-sm font-bold">0{index + 1}</span>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                        {copy.grid.industryLabel}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {industry.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors duration-200 group-hover:text-sky-600">
                      {copy.grid.exploreCta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <Offices />
    </main>
  )
}
