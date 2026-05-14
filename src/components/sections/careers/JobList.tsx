'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import {
  ArrowUpRight,
  Briefcase,
  MapPin,
  Clock,
  BadgeCheck,
} from 'lucide-react'
import type { CareerEdge } from './types'

interface JobListProps {
  careers: CareerEdge[]
}

export default function JobList({ careers }: JobListProps) {
  if (!careers || careers.length === 0) {
    return (
      <section id="open-positions" className="relative bg-white py-10 md:py-14 overflow-hidden">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-800 font-bold border border-gray-100 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest">Open Positions</span>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy-900 md:text-5xl">
              No open positions right now
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              We&apos;re always looking for great people. Drop us a line at{' '}
              <a
                href="mailto:info@cogtix.com"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                info@cogtix.com
              </a>{' '}
              and we&apos;ll keep you in mind for upcoming roles.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  // Separate WFH and others
  const wfhJobs = careers.filter(c => c.node.careers?.jobType?.toLowerCase().includes('home') || c.node.careers?.jobType?.toLowerCase().includes('remote'))
  const onSiteJobs = careers.filter(c => !c.node.careers?.jobType?.toLowerCase().includes('home') && !c.node.careers?.jobType?.toLowerCase().includes('remote'))

  return (
    <section id="open-positions" className="relative bg-white py-10 md:py-14 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Decorative geometrical shapes */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full border-[2px] border-blue-200/30 animate-[float-y-soft_10s_ease-in-out_infinite]" />
      <div aria-hidden className="pointer-events-none absolute top-32 left-10 h-8 w-8 rounded-full bg-blue-200/40 animate-pulse" />
      <div aria-hidden className="pointer-events-none absolute -bottom-16 left-1/4 h-32 w-32 rotate-12 rounded-3xl border-[1.5px] border-blue-200/40 animate-[float-x_12s_ease-in-out_infinite]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/30 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-800 font-bold border border-blue-100 mb-6 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest">Join Our Team</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-900 md:text-5xl">
              Current Openings at{' '}
              <span className="text-blue-600">
                Cogtix
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-gray-500">
                Hiring Snapshot
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-5xl font-black leading-none tracking-tight text-blue-600">
                  {careers.length}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  active position{careers.length === 1 ? '' : 's'} accepting
                  applications
                </span>
              </div>
            </div>
          </div>
        </div>

        {onSiteJobs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              On-site / Hybrid Roles
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {onSiteJobs.map(({ node }) => (
                <JobCard key={node.id ?? node.slug} node={node} />
              ))}
            </div>
          </div>
        )}

        {wfhJobs.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
              <div className="h-8 w-1 bg-blue-400 rounded-full" />
              Work from Home Roles
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {wfhJobs.map(({ node }) => (
                <JobCard key={node.id ?? node.slug} node={node} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

function JobCard({ node }: { node: CareerEdge['node'] }) {
  const career = node.careers ?? {}
  const href = `/careers/${node.slug}`

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-blue-700 border border-blue-100">
            <Briefcase className="h-3 w-3" />
            {career.jobType ?? 'Full-time'}
          </div>
          {career.jobTime ? (
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-blue-700 border border-blue-100">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              {career.jobTime}
            </div>
          ) : null}
        </div>

        {career.designation ? (
          <span className="rounded-full bg-navy-900/5 px-3 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-navy-900 border border-navy-900/10">
            {career.designation}
          </span>
        ) : null}
      </div>

      <h3 className="relative z-10 mt-6 text-xl font-bold leading-tight text-navy-900 transition-colors group-hover:text-blue-600 md:text-2xl">
        {node.title}
      </h3>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
        {career.jobLocation ? (
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-500" />
            {career.jobLocation}
          </span>
        ) : null}
        {career.jobExperience ? (
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-500" />
            {career.jobExperience}
          </span>
        ) : null}
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
        <span className="inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          <BadgeCheck className="h-3 w-3" />
          Actively Hiring
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition-all group-hover:gap-2 group-hover:text-blue-700">
          Apply Now
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
