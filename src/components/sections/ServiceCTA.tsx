'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { ServiceVariant, serviceThemes } from './service-themes'

interface ServiceCTAProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: ServiceVariant
}

export default function ServiceCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'microsoft',
}: ServiceCTAProps) {
  const theme = serviceThemes[variant]

  return (
    <section className="relative bg-white py-12 md:py-16">
      <Container>
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${theme.ctaBgFrom} ${theme.ctaBgTo} px-6 py-12 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.5)] md:px-12 md:py-16`}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, ${theme.ctaPattern}, transparent 30%), radial-gradient(circle at 80% 80%, ${theme.ctaPattern}, transparent 35%)`,
            }}
          />

          <svg
            aria-hidden
            viewBox="0 0 600 600"
            className="absolute -right-20 -top-20 h-80 w-80 opacity-20"
          >
            <circle cx="300" cy="300" r="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="300" cy="300" r="280" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
          </svg>

          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Let&apos;s build together
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Button
                href={primaryCta.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="w-full bg-white text-navy-900 hover:bg-gray-100 sm:w-auto"
              >
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
