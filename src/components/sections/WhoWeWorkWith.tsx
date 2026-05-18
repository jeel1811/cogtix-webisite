'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Layers, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { useI18n } from '@/i18n/provider'
import { CTA_LINKS } from '@/lib/cta'

const AUDIENCES = [
  {
    id: 'startups' as const,
    icon: Rocket,
    iconBg: 'bg-gradient-to-br from-violet-500 to-blue-600',
    tagClass: 'border-violet-100 bg-violet-50 text-violet-800',
    hoverBorder: 'hover:border-violet-300',
  },
  {
    id: 'saas' as const,
    icon: Layers,
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    tagClass: 'border-blue-100 bg-blue-50 text-blue-800',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    id: 'enterprises' as const,
    icon: Building2,
    iconBg: 'bg-gradient-to-br from-slate-700 to-blue-700',
    tagClass: 'border-slate-200 bg-slate-50 text-slate-800',
    hoverBorder: 'hover:border-slate-300',
  },
  {
    id: 'aiFounders' as const,
    icon: Sparkles,
    iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-600',
    tagClass: 'border-indigo-100 bg-indigo-50 text-indigo-800',
    hoverBorder: 'hover:border-indigo-300',
  },
] as const

export default function WhoWeWorkWith() {
  const { m } = useI18n()
  const copy = m.whoWeWorkWith

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-violet-100/30 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {copy.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {copy.title}{' '}
            <span className="text-blue-600">{copy.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{copy.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {AUDIENCES.map((item, index) => {
            const content = copy[item.id]
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.hoverBorder}`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${item.iconBg}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] ${item.tagClass}`}
                  >
                    {content.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950">{content.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                  {content.description}
                </p>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-blue-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={CTA_LINKS.project}
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            {m.siteCtas.discussProject}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
