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
  ai: '/images/services/ai_graphic.png',
  cloud: '/images/services/cloud_graphic.png',
  microsoft: '/images/services/microsoft_graphic.png',
  enterprise: '/images/services/enterprise_graphic.png',
  data: '/images/services/data_graphic.png',
  experience: '/images/services/experience_graphic.png',
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

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl 2xl:text-6xl">
              {renderTitle()}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base 2xl:text-lg 2xl:max-w-3xl">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-200 pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`text-xl font-bold md:text-2xl ${theme.accentText}`}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-lg animate-[float-y-soft_8s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 rounded-[2rem] shadow-2xl backdrop-blur-sm -rotate-3 z-0" />
              <div className="absolute inset-0 bg-white/40 rounded-[2rem] shadow-xl backdrop-blur-md rotate-3 z-0" />
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/50">
                <Image
                  src={serviceImages[variant]}
                  alt={`${variant} graphic`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ScrollIndicator targetId="capabilities" />
    </section>
  )
}
