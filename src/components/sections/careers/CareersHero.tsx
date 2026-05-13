'use client'

import Container from '@/components/ui/Container'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { Briefcase, MapPin, ArrowDown } from 'lucide-react'

interface CareersHeroProps {
  title: string
  description: string
  openCount: number
}

export default function CareersHero({
  title,
  description,
  openCount,
}: CareersHeroProps) {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-[float-y-soft_8s_ease-in-out_infinite]" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-[float-y-soft_9s_ease-in-out_infinite]" />

      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight md:text-6xl">
              <span className="text-navy-900">{title}</span>{' '}
              <span className="text-blue-600">Together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#open-positions"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View Open Positions
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-gray-200 pt-6">
              <div>
                <div className="text-2xl font-bold text-blue-600 md:text-3xl">
                  {openCount}
                </div>
                <div className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Open Roles
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500 md:text-3xl">
                  3
                </div>
                <div className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Global Offices
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 md:text-3xl">
                  150+
                </div>
                <div className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Engineers
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <CareersVisual />
          </div>
        </div>
      </Container>

      <ScrollIndicator targetId="open-positions" />
    </section>
  )
}

import Image from 'next/image'

function CareersVisual() {
  return (
    <div className="relative flex justify-center w-full">
      <div className="relative aspect-[4/3] w-full max-w-lg animate-[float-y-soft_8s_ease-in-out_infinite]">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-blue-400/10 rounded-[2rem] shadow-2xl backdrop-blur-sm -rotate-3 z-0" />
        <div className="absolute inset-0 bg-white/40 rounded-[2rem] shadow-xl backdrop-blur-md rotate-3 z-0" />
        <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/50 bg-white">
          <Image
            src="/images/careers/careers_graphic.png"
            alt="Careers at Cogtix"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Small floating elements to add more life */}
        <div className="absolute -right-6 top-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-wider text-white shadow-lg animate-[float-y-soft_6s_ease-in-out_infinite] z-20">
          <Briefcase className="h-3 w-3" />
          Hiring Now
        </div>

        <div className="absolute -bottom-4 -left-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[0.6875rem] font-bold text-blue-700 shadow-md animate-[float-y-soft_7s_ease-in-out_infinite] z-20">
          <MapPin className="h-3 w-3" />
          Ahmedabad, India
        </div>
      </div>
    </div>
  )
}
