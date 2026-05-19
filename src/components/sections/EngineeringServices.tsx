'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/i18n/provider'
import Container from '@/components/ui/Container'
import {
  AIEngineeringLogo,
  CloudDevOpsLogo,
  DataEngineeringLogo,
  EnterpriseLogo,
  ExperienceEngineeringLogo,
  MicrosoftLogo,
} from '@/lib/EngineeringLogos'

/** Same six services and routes as Engineering nav dropdown (NAV_ITEMS). */
const ENGINEERING_SERVICE_CARDS = [
  {
    id: 'aiMl',
    href: '/services/gen-ai-ml-development',
    icon: AIEngineeringLogo,
    navTitleKey: 'aiEngineering' as const,
  },
  {
    id: 'cloudDevOps',
    href: '/services/cloud-devops-engineering',
    icon: CloudDevOpsLogo,
    navTitleKey: 'cloudDevOpsEngineering' as const,
  },
  {
    id: 'digitalExperience',
    href: '/services/digital-experience-engineering',
    icon: ExperienceEngineeringLogo,
    navTitleKey: 'digitalExperienceEngineering' as const,
  },
  {
    id: 'dataEngineering',
    href: '/services/data-engineering',
    icon: DataEngineeringLogo,
    navTitleKey: 'dataEngineering' as const,
  },
  {
    id: 'enterprise',
    href: '/services/enterprise-solutions',
    icon: EnterpriseLogo,
    navTitleKey: 'enterpriseServices' as const,
  },
  {
    id: 'microsoft',
    href: '/services/microsoft-technologies',
    icon: MicrosoftLogo,
    navTitleKey: 'microsoftTechnologies' as const,
  },
] as const

type EngineeringCardId = (typeof ENGINEERING_SERVICE_CARDS)[number]['id']

export default function EngineeringServices() {
  const { m } = useI18n()
  const copy = m.engineeringServices

  const outcomes = [
    copy.outcomeScalability,
    copy.outcomePerformance,
    copy.outcomeAutomation,
    copy.outcomeCostOptimization,
  ]

  const descriptionById: Record<EngineeringCardId, string> = {
    aiMl: copy.aiMl.description,
    cloudDevOps: copy.cloudDevOps.description,
    digitalExperience: copy.digitalExperience.description,
    dataEngineering: copy.dataEngineering.description,
    enterprise: copy.enterprise.description,
    microsoft: copy.microsoft.description,
  }

  const services = ENGINEERING_SERVICE_CARDS.map((card) => ({
    id: card.id,
    title: m.nav[card.navTitleKey],
    description: descriptionById[card.id],
    icon: card.icon,
    href: card.href,
  }))

  return (
    <section className="relative overflow-hidden bg-slate-100/80 py-16 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[18%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[18%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[600px] opacity-[0.06]"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
          d="M600 0C520 60 380 140 300 180C220 220 140 240 60 300C-20 360 0 400 0 400"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <path
          d="M600 40C520 100 400 160 320 200C240 240 160 270 80 330C0 390 20 400 20 400"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 h-[350px] w-[500px] opacity-[0.05]"
        viewBox="0 0 500 350"
        fill="none"
      >
        <path
          d="M0 350C80 300 160 240 240 200C320 160 400 120 440 80C480 40 500 0 500 0"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <path
          d="M0 310C80 270 180 220 260 180C340 140 400 100 450 60C490 25 500 0 500 0"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
      </svg>

      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full border-[2px] border-blue-200/20" />
      <div aria-hidden className="pointer-events-none absolute top-[35%] -right-12 h-44 w-44 rounded-full border-[2px] border-dashed border-blue-200/15" />
      <div aria-hidden className="pointer-events-none absolute top-28 right-[15%] h-3 w-3 rounded-full bg-blue-300/25" />
      <div aria-hidden className="pointer-events-none absolute bottom-24 left-[10%] h-8 w-8 rotate-45 rounded-[3px] border-[2px] border-blue-200/20" />

      <Container className="relative z-10">
        <div className="mb-16 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {copy.badge}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                {copy.title}{' '}
                <span className="text-blue-600">{copy.titleHighlight}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">{copy.subtitle}</p>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {copy.outcomesTitle}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {outcomes.map((label) => (
                    <li
                      key={label}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 shadow-sm"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.id} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-white">
                    <service.icon className="h-9 w-9 shrink-0" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/85">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-blue-600 transition-colors duration-300 group-hover:text-white">
                  {copy.explore}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 scale-50 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}