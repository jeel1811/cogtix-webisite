'use client'

import Container from '@/components/ui/Container'
// import Button from '@/components/ui/Button'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import Image from 'next/image'
// import { ArrowRight, Sparkles } from 'lucide-react'
import {
  ServiceVariant,
  serviceThemes,
} from './service-themes'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  highlight?: string
  variant?: ServiceVariant
  cta?: {
    text: string
    href: string
  }
  stats?: { value: string; label: string }[]
}

const serviceImages: Record<ServiceVariant, string> = {
  ai: '/images/services/ai_graphic_v3_transparent.png',
  cloud: '/images/services/cloud_graphic_v3_transparent.png',
  microsoft: '/images/services/microsoft_graphic_v3_transparent.png',
  enterprise: '/images/services/enterprise_graphic_v3_transparent.png',
  data: '/images/services/data_graphic_v3_transparent.png',
  experience: '/images/services/experience_graphic_v3_transparent.png',
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  highlight,
  variant = 'microsoft',
  stats,
}: ServiceHeroProps) {
  const theme = serviceThemes[variant]

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <span className="text-navy-900">{title}</span>
    }
    const [before, after] = title.split(highlight)
    return (
      <>
        <span className="text-navy-900">{before}</span>
        <span
          className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.ctaBgFrom} ${theme.ctaBgTo}`}
        >
          {highlight}
        </span>
        <span className="text-navy-900">{after}</span>
      </>
    )
  }

  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradientFrom} via-white ${theme.gradientTo}`}
      />

      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:32px_32px]" />

      <div
        className={`absolute -left-32 top-20 h-96 w-96 rounded-full blur-3xl ${theme.glowOrb} animate-[float-y-soft_8s_ease-in-out_infinite]`}
      />
      <div
        className={`absolute -right-24 bottom-10 h-72 w-72 rounded-full blur-3xl ${theme.glowOrb} animate-[float-y-soft_9s_ease-in-out_infinite]`}
      />

      <Container>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            
            {subtitle && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} ${theme.badgeText} border border-gray-100 mb-8`}
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  {subtitle}
                </span>
              </div>
            )}

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              {renderTitle()}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-200 pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`text-xl font-bold md:text-2xl ${theme.accentText}`}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative lg:col-span-5 flex justify-center items-center">
            <div className="relative aspect-square w-full max-w-xl animate-[float-y-soft_8s_ease-in-out_infinite]">
              <Image
                src={serviceImages[variant]}
                alt={`${variant} graphic`}
                fill
                className="object-contain transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <ScrollIndicator targetId="capabilities" />
    </section>
  )
}
