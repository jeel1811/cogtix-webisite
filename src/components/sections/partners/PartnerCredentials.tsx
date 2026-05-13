'use client'

import Container from '@/components/ui/Container'
import { Award, BadgeCheck } from 'lucide-react'
import { serviceThemes } from '../service-themes'
import { partnerAccents, type PartnerVariant } from './partner-types'

export interface PartnerCompetency {
  title: string
  description: string
}

export interface PartnerCertification {
  name: string
  level: string
}

interface PartnerCredentialsProps {
  variant: PartnerVariant
  badge?: string
  title: string
  description: string
  competencies: PartnerCompetency[]
  certifications: PartnerCertification[]
  certificationsTitle?: string
  certificationsDescription?: string
}

export default function PartnerCredentials({
  variant,
  badge = 'Partnership Credentials',
  title,
  description,
  competencies,
  certifications,
  certificationsTitle = 'Active certifications across our delivery teams',
  certificationsDescription = 'A snapshot of the role-based credentials our engineers, architects and consultants currently hold.',
}: PartnerCredentialsProps) {
  const theme = serviceThemes['microsoft']
  const accent = partnerAccents[variant]

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0EA5E9 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${theme.badgeBg} ${theme.badgeText} border border-gray-100`}>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">{badge}</span>
          </span>
          <h2 className="mt-6 text-3xl font-bold text-navy-900 md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">{description}</p>
        </div>

        {/* Competencies grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, idx) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${theme.accentSoftBg} ${theme.accentText}`}>
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-semibold text-navy-900">{c.title}</h3>
                    <span className="text-xs font-bold text-gray-300">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.description}</p>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.accentBg} translate-y-full transition-transform duration-300 group-hover:translate-y-0`} />
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className={`relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 p-8 ring-1 ${accent.ring} md:p-12`}>
          <div className={`absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[100px] ${accent.glow}`} />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${theme.accentSoftBg} ${theme.accentText}`}>
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900 md:text-2xl">{certificationsTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{certificationsDescription}</p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`rounded-xl bg-white p-4 ring-1 ${accent.ring} transition-all hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${accent.chipText}`}>
                      {cert.level}
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-navy-900 leading-snug">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
