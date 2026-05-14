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
  ExperienceEngineeringLogo,
  EnterpriseLogo,
  MicrosoftLogo,
} from '@/lib/EngineeringLogos'

export default function EngineeringServices() {
  const { m } = useI18n()

  const services = [
    {
      title: m.nav.aiEngineering,
      description: 'End-to-end AI/ML systems for production environments.',
      icon: AIEngineeringLogo,
      href: '/services/gen-ai-ml-development',
    },
    {
      title: m.nav.cloudDevOpsEngineering,
      description: 'Cloud-native infrastructure and resilient DevOps ecosystems.',
      icon: CloudDevOpsLogo,
      href: '/services/cloud-devops-engineering',
    },
    {
      title: m.nav.dataEngineering,
      description: 'Advanced data pipelines for real-time and batch processing.',
      icon: DataEngineeringLogo,
      href: '/services/data-engineering',
    },
    {
      title: m.nav.digitalExperienceEngineering,
      description: 'Immersive digital products focused on user experience.',
      icon: ExperienceEngineeringLogo,
      href: '/services/digital-experience-engineering',
    },
    {
      title: m.nav.enterpriseServices,
      description: 'Domain-driven solutions for complex enterprise ecosystems.',
      icon: EnterpriseLogo,
      href: '/services/enterprise-solutions',
    },
    {
      title: m.nav.microsoftTechnologies,
      description: 'Modern business applications powered by the Microsoft stack.',
      icon: MicrosoftLogo,
      href: '/services/microsoft-technologies',
    }
  ]

  return (
    <section className="relative overflow-hidden bg-slate-100/80 py-16 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── Background vertical lines ─────── */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[18%] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[18%] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #3B82F6 14px, #3B82F6 15px)',
          maskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
        }}
      />

      {/* ── Decorative SVG curves ─────── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 w-[600px] h-[400px] opacity-[0.06]"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path d="M600 0C520 60 380 140 300 180C220 220 140 240 60 300C-20 360 0 400 0 400" stroke="#3B82F6" strokeWidth="2" />
        <path d="M600 40C520 100 400 160 320 200C240 240 160 270 80 330C0 390 20 400 20 400" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 w-[500px] h-[350px] opacity-[0.05]"
        viewBox="0 0 500 350"
        fill="none"
      >
        <path d="M0 350C80 300 160 240 240 200C320 160 400 120 440 80C480 40 500 0 500 0" stroke="#3B82F6" strokeWidth="2" />
        <path d="M0 310C80 270 180 220 260 180C340 140 400 100 450 60C490 25 500 0 500 0" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>

      {/* ── Geometrical shapes ─────── */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full border-[2px] border-blue-200/20" />
      <div aria-hidden className="pointer-events-none absolute top-[35%] -right-12 h-44 w-44 rounded-full border-[2px] border-dashed border-blue-200/15" />
      <div aria-hidden className="pointer-events-none absolute top-28 right-[15%] h-3 w-3 rounded-full bg-blue-300/25" />
      <div aria-hidden className="pointer-events-none absolute bottom-24 left-[10%] h-8 w-8 rotate-45 rounded-[3px] border-[2px] border-blue-200/20" />

      <Container className="relative z-10">
        <div className="mb-16 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {m.services.badge}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Engineering <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {m.services.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-8 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/85">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-blue-600 transition-colors duration-300 group-hover:text-white">
                  Explore
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Decorative corner circles on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-50 group-hover:scale-100"
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
