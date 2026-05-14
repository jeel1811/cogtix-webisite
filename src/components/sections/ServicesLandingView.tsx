'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Testimonials from '@/components/sections/Testimonials'
import Offices from '@/components/sections/Offices'
import { useI18n } from '@/i18n/provider'
import { servicesLanding, serviceSlugs } from '@/i18n/landingContent'

export default function ServicesLandingView() {
  const { locale } = useI18n()
  const copy = servicesLanding[locale]

  const services = copy.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    href: serviceSlugs[idx]?.href ?? '#',
  }))

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_42%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] py-10 md:py-14">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {copy.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services-grid"
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

      <section id="services-grid" className="py-10 md:py-14">
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

          {/* <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                {service.title}
              </Link>
            ))}
          </div> */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                padding="lg"
                className="group border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:shadow-xl"
              >
                <Link href={service.href} className="block h-full">
                  <div className="flex h-full flex-col">
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
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
