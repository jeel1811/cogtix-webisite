'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import {
  ChevronRight,
  Home,
  MapPin,
  Briefcase,
  Clock,
  ArrowDown,
} from 'lucide-react'
import type { CareerNode } from './types'

interface CareerDetailHeroProps {
  data: CareerNode
}

export default function CareerDetailHero({ data }: CareerDetailHeroProps) {
  const career = data?.careers ?? {}

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl animate-[float-y-soft_8s_ease-in-out_infinite]" />
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl animate-[float-y-soft_9s_ease-in-out_infinite]" />

      <Container>
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 flex flex-wrap items-center gap-1.5 text-[0.75rem] font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-blue-600"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link href="/careers" className="hover:text-blue-600">
            Careers
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="truncate text-navy-900">{data?.title}</span>
        </nav>

        <div className="relative z-10 mt-8 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            {career.designation ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {career.designation}
              </div>
            ) : null}

            <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              {data?.title}
            </h1>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-600">
              {career.jobLocation ? (
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="font-semibold text-navy-900">
                    {career.jobLocation}
                  </span>
                </li>
              ) : null}
              {career.jobType ? (
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200">
                  <Briefcase className="h-4 w-4 text-teal-500" />
                  <span className="font-semibold text-navy-900">
                    {career.jobType}
                  </span>
                </li>
              ) : null}
              {career.jobTime ? (
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200">
                  <Clock className="h-4 w-4 text-violet-500" />
                  <span className="font-semibold text-navy-900">
                    {career.jobTime}
                  </span>
                </li>
              ) : null}
              {career.jobExperience ? (
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-gray-500">
                    Experience
                  </span>
                  <span className="font-semibold text-navy-900">
                    {career.jobExperience}
                  </span>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Apply for this Role
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
