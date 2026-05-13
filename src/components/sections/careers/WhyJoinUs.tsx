'use client'

import Container from '@/components/ui/Container'
import {
  GraduationCap,
  Clock3,
  Users,
  Wallet,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react'

const REASONS = [
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Sponsored certifications, internal tech-talks, and a curated library so your skill curve never plateaus.',
    accent: 'from-blue-500 to-blue-600',
  },
  {
    icon: Clock3,
    title: 'Flexible Schedule',
    description:
      'Outcome-driven culture with flexible hours and remote-first options that respect your time and energy.',
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Collaborative Teams',
    description:
      'Tight-knit pods of designers and engineers shipping together :  no silos, no politics, just craft.',
    accent: 'from-violet-500 to-blue-500',
  },
  {
    icon: Wallet,
    title: 'Competitive Pay',
    description:
      'Salaries benchmarked to senior market rates with performance bonuses and clear growth ladders.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Culture',
    description:
      'Hackathons, off-sites, and a no-blame environment where mistakes turn into post-mortems, not finger-pointing.',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Real Impact',
    description:
      'Work directly with customers, ship to production weekly, and see your code drive real business outcomes.',
    accent: 'from-amber-500 to-orange-500',
  },
]

export default function WhyJoinUs() {
  return (
    <section id="why-join" className="relative overflow-hidden bg-white py-10 md:py-14">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-white" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.03)_1px,transparent_0)] [background-size:32px_32px]" />
      
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-100/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-blue-50/50 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-800 font-bold border border-blue-100 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">Why Join Us</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-900 md:text-5xl">
            The Cogtix way of{' '}
            <span className="text-blue-600">
              building & belonging
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            We invest in people first. Here&apos;s what life as a Cogtix engineer
            looks like - beyond the salary slip.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 backdrop-blur-sm"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
                
                <div className="relative z-10">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors duration-300">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 font-medium">
                    {r.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
