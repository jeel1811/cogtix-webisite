'use client'

import Container from '@/components/ui/Container'
import { ServiceVariant, serviceThemes } from './service-themes'

export interface ExpertisePillar {
  title: string
  description: string
  tags?: string[]
}

interface ServiceExpertiseProps {
  title?: string
  subtitle?: string
  description?: string
  pillars: ExpertisePillar[]
  variant?: ServiceVariant
}

export default function ServiceExpertise({
  title = 'Precision, Expertise & Tools That Future-Proof Your Solutions',
  subtitle = 'Why Choose Us',
  description,
  pillars,
  variant = 'ai',
}: ServiceExpertiseProps) {
  const theme = serviceThemes[variant]

  return (
    <section className="relative bg-slate-50 py-10 md:py-14 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── Background vertical lines - matching Technology section ─────── */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[18%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #6366F1 14px, #6366F1 15px)',
          maskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[18%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 14px, #6366F1 14px, #6366F1 15px)',
          maskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
        }}
      />

      {/* ── Decorative SVG curves ────────────────────────────────────────── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 w-[600px] h-[400px] opacity-[0.06]"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path d="M600 0C520 60 380 140 300 180C220 220 140 240 60 300C-20 360 0 400 0 400" stroke="#3B82F6" strokeWidth="2" />
        <path d="M600 40C520 100 400 160 320 200C240 240 160 270 80 330C0 390 20 400 20 400" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M600 80C540 130 420 190 340 230C260 270 180 300 100 350C20 400 40 400 40 400" stroke="#3B82F6" strokeWidth="1" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 w-[500px] h-[350px] opacity-[0.05]"
        viewBox="0 0 500 350"
        fill="none"
      >
        <path d="M0 350C80 300 160 240 240 200C320 160 400 120 440 80C480 40 500 0 500 0" stroke="#6366F1" strokeWidth="2" />
        <path d="M0 310C80 270 180 220 260 180C340 140 400 100 450 60C490 25 500 0 500 0" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M0 270C90 240 200 200 280 160C360 120 420 80 460 40C495 10 500 0 500 0" stroke="#6366F1" strokeWidth="1" />
      </svg>

      {/* ── Geometrical shapes ─────────────────────────────────────────── */}
      {/* Large hollow circle - top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full border-[2px] border-blue-200/20"
      />
      {/* Dotted ring - center-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[35%] -right-12 h-44 w-44 rounded-full border-[2px] border-dashed border-indigo-200/15"
      />
      {/* Small filled dot */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-28 right-[15%] h-3 w-3 rounded-full bg-blue-300/25"
      />
      {/* Rotated square */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-[10%] h-8 w-8 rotate-45 rounded-[3px] border-[2px] border-indigo-200/20"
      />
      {/* Cross */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-[30%] right-[6%] w-7 h-7 opacity-[0.08]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <line x1="12" y1="2" x2="12" y2="22" stroke="#3B82F6" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#3B82F6" strokeWidth="2" />
      </svg>
      {/* Triangle */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-[50%] left-[4%] w-10 h-10 opacity-[0.07]"
        viewBox="0 0 40 40"
        fill="none"
      >
        <polygon points="20,4 36,36 4,36" stroke="#6366F1" strokeWidth="2" />
      </svg>

      {/* Radial blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-64 -top-64 h-[700px] w-[700px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #0066CC 0%, transparent 65%)' }}
      />

      <Container>
        {/* Section header */}
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full ${theme.badgeBg} px-4 py-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] ${theme.badgeText}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${theme.badgeDot}`} />
            {subtitle}
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy-900 md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* 6-card grid with hover color-flip */}
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-3 cursor-default overflow-hidden rounded-2xl border border-blue-100 p-7 transition-all duration-300 bg-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="text-[1rem] font-bold leading-snug text-blue-700 transition-colors duration-300 group-hover:text-white">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[0.8125rem] leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/85 flex-1">
                {pillar.description}
              </p>

              {/* Optional tags */}
              {pillar.tags && pillar.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5 pt-3 border-t border-blue-100 group-hover:border-white/20 transition-colors duration-300">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[0.625rem] font-semibold text-blue-700 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Decorative corner circle on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-50 group-hover:scale-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
