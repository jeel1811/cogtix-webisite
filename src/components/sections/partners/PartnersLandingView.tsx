'use client'

import { ArrowRight, Handshake } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { serviceThemes } from '@/components/sections/service-themes'
import PartnerBrandMark from '@/components/sections/partners/PartnerBrandMark'
import {
  partnerAccents,
  type PartnerVariant,
} from '@/components/sections/partners/partner-types'
import ContactForm from '@/components/sections/ContactForm'
import Testimonials from '@/components/sections/Testimonials'
import { useI18n } from '@/i18n/provider'
import { partnerLanding } from '@/i18n/partnerContent'
import { partnerData } from '@/i18n/partnerData'

const variantOrder: PartnerVariant[] = ['microsoft', 'aws', 'google-cloud']

const partnerHrefs: Record<PartnerVariant, string> = {
  microsoft: '/partners/microsoft',
  aws: '/partners/aws',
  'google-cloud': '/partners/google-cloud',
}

export default function PartnersLandingView() {
  const { locale } = useI18n()
  const copy = partnerLanding[locale]
  const theme = serviceThemes['microsoft']

  const titleParts = copy.hero.highlight && copy.hero.title.includes(copy.hero.highlight)
    ? copy.hero.title.split(copy.hero.highlight)
    : [copy.hero.title]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-28 pb-20">
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
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${theme.badgeBg} ${theme.badgeText} border border-gray-100`}
            >
              <Handshake className="h-3.5 w-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                {copy.hero.eyebrow}
              </span>
            </span>
            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              {copy.hero.highlight && titleParts.length === 2 ? (
                <>
                  {titleParts[0]}
                  <span className={`${theme.accentText} font-semibold`}>
                    {copy.hero.highlight}
                  </span>
                  {titleParts[1]}
                </>
              ) : (
                copy.hero.title
              )}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-gray-600 md:text-xl">
              {copy.hero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Partner Cards */}
      <section className="relative bg-white py-14 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {variantOrder.map((variant, idx) => {
              const card = copy.cards[variant]
              const accent = partnerAccents[variant]
              const stats = card.statLabels.map((label, i) => ({
                value: partnerData[variant].statValues[i] ?? '',
                label,
              }))
              return (
                <motion.div
                  key={variant}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Link
                    href={partnerHrefs[variant]}
                    className={`group relative block h-full overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ${accent.ring} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                  >
                    <div
                      className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[80px] opacity-60 ${accent.glow}`}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                          <PartnerBrandMark
                            variant={variant}
                            className="h-9 w-9"
                          />
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${accent.badge}`}
                        >
                          {card.tier.split(' ').slice(-2).join(' ')}
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-bold text-navy-900">
                        {card.name}
                      </h2>
                      <p
                        className={`mt-1 text-xs font-semibold uppercase tracking-[0.14em] ${accent.chipText}`}
                      >
                        {card.tagline}
                      </p>

                      <p className="mt-5 text-sm leading-relaxed text-gray-600">
                        {card.description}
                      </p>

                      <ul className="mt-6 space-y-2.5">
                        {card.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.accentBg}`}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
                        {stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-lg font-bold text-navy-900">
                              {s.value}
                            </div>
                            <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${theme.accentText}`}
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Why partner with us */}
      <section className="relative overflow-hidden bg-slate-50 py-14 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${theme.badgeBg} ${theme.badgeText} border border-gray-100`}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                {copy.whyUs.eyebrow}
              </span>
            </span>
            <h2 className="mt-6 text-3xl font-bold text-navy-900 md:text-4xl">
              {copy.whyUs.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {copy.whyUs.description}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {copy.whyUs.items.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-gray-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.accentBg} translate-y-full transition-transform duration-300 group-hover:translate-y-0`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <ContactForm />
    </>
  )
}
