'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { serviceThemes } from '../service-themes'
import PartnerBrandMark from './PartnerBrandMark'
import { partnerAccents, type PartnerVariant } from './partner-types'

interface PartnerHeroProps {
  variant: PartnerVariant
  eyebrow: string
  title: string
  highlight?: string
  description: string
  tier: string
  tierSubtitle: string
  highlights: string[]
  cta?: { text: string; href: string }
  exploreCapabilitiesLabel?: string
  activePartnerLabel?: string
  stats: { value: string; label: string }[]
}

export default function PartnerHero({
  variant,
  eyebrow,
  title,
  highlight,
  description,
  tier,
  tierSubtitle,
  highlights,
  cta = { text: 'Talk to a Partnership Expert', href: '#contact' },
  exploreCapabilitiesLabel = 'Explore capabilities',
  activePartnerLabel = 'Active Partner',
  stats,
}: PartnerHeroProps) {
  const theme = serviceThemes['microsoft']
  const accent = partnerAccents[variant]

  let titleParts = [title]
  if (highlight && title.includes(highlight)) {
    titleParts = title.split(highlight)
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-28 pb-20">
      {/* Background decor - matches existing service/industry hero language */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#7dd3fc 1px, transparent 1px), linear-gradient(90deg, #7dd3fc 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className={`absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full blur-[150px] opacity-[0.08] bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo}`}
        />
        <div className={`absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full blur-[120px] opacity-30 ${accent.glow}`} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${theme.badgeBg} ${theme.badgeText} border border-gray-100`}
            >
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.18em]">{eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-navy-900 md:text-5xl lg:text-6xl"
            >
              {highlight ? (
                <>
                  {titleParts[0]}
                  <span className={`${theme.accentText} font-semibold`}>{highlight}</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
            >
              {description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className={`h-5 w-5 shrink-0 ${theme.accentText}`} />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href={cta.href}
                className={`group inline-flex items-center gap-2 rounded-full ${theme.accentBg} ${theme.accentBgHover} px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5`}
              >
                {cta.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
              >
                {exploreCapabilitiesLabel}
              </Link>
            </motion.div>

            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
                className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-gray-200 pt-6"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`text-2xl font-bold md:text-3xl ${theme.accentText}`}>{s.value}</div>
                    <div className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: partner credential card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* Decorative offset frames */}
              <div className={`absolute -inset-3 -rotate-3 rounded-[2rem] bg-white/40 shadow-xl backdrop-blur-sm ring-1 ${accent.ring}`} />
              <div className={`absolute -inset-3 rotate-3 rounded-[2rem] bg-white/30 shadow-lg backdrop-blur-sm ring-1 ${accent.ring}`} />

              {/* Main card */}
              <div className={`relative rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ${accent.ring}`}>
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                    <PartnerBrandMark variant={variant} className="h-9 w-9" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider ${accent.badge}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {activePartnerLabel}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy-900">{tier}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{tierSubtitle}</p>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
                  {stats.slice(0, 3).map((s) => (
                    <div key={`card-${s.label}`} className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                      <div className="text-lg font-bold text-navy-900">{s.value}</div>
                      <div className="mt-0.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-gray-500">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brand color accent line */}
                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-slate-100" />
                  <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Cogtix × {variant === 'google-cloud' ? 'Google Cloud' : variant === 'aws' ? 'AWS' : 'Microsoft'}
                  </span>
                  <div className="h-1 flex-1 rounded-full bg-slate-100" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <ScrollIndicator targetId="capabilities" />
    </section>
  )
}
