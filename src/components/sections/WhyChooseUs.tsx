'use client'

import Image from 'next/image'
import { Award, Check, Cloud, Handshake, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useI18n } from '@/i18n/provider'
import type { LucideIcon } from 'lucide-react'

const PILLAR_ICONS: LucideIcon[] = [Award, Cloud, Rocket, Handshake]

const PILLAR_STYLES = [
  {
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    iconBg: 'bg-gradient-to-br from-slate-600 to-blue-700',
    hoverBorder: 'hover:border-slate-300',
  },
  {
    iconBg: 'bg-gradient-to-br from-violet-500 to-blue-600',
    hoverBorder: 'hover:border-violet-300',
  },
  {
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    hoverBorder: 'hover:border-cyan-300',
  },
] as const

export default function WhyChooseUs() {
  const { m } = useI18n()
  const pillars = m.whyCogtixPillars

  const checklist = [
    m.whyChooseUs.trackRecord,
    m.whyChooseUs.certifiedExperts,
    m.whyChooseUs.clientCentric,
    m.whyChooseUs.innovativeSolutions,
    m.whyChooseUs.endToEndSupport,
  ]

  return (
    <section className="relative overflow-hidden bg-blue-50/60 py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="absolute top-20 left-10 -z-10 h-64 w-64 animate-pulse rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 -z-10 h-96 w-96 animate-pulse rounded-full bg-blue-100/20 blur-3xl delay-1000" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative mx-auto aspect-square max-w-[500px]">
              <div className="absolute -top-10 -left-10 h-40 w-40 animate-pulse rounded-full bg-blue-50 opacity-60 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-60 w-60 animate-pulse rounded-full bg-pink-50 opacity-60 blur-3xl delay-700" />

              <Image
                src="/why-choose-us.png"
                alt="Why Choose Cogtix"
                fill
                className="relative z-10 object-contain"
                priority
              />

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-0 z-20 h-8 w-8 text-blue-400 opacity-60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-10 left-0 z-20 h-6 w-6 text-blue-400 opacity-50"
              >
                <div className="h-full w-full rounded-full border-2 border-current" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-4 z-20 h-4 w-4 text-pink-400 opacity-60"
              >
                <div className="h-full w-full rotate-45 border-l-2 border-t-2 border-current" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                {m.whyChooseUs.badge}
              </span>
            </div>

            <h2 className="mb-8 text-4xl leading-[1.1] font-extrabold text-navy-900 md:text-5xl lg:text-6xl">
              {m.whyChooseUs.title}
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
              {m.whyChooseUs.subtitle}
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600">
                    <Check className="h-3.5 w-3.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-slate-700 transition-colors duration-300 group-hover:text-navy-900">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 border-t border-blue-100/90 pt-12 md:mt-16 md:pt-14"
        >
          <div className="mb-10 text-center md:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {pillars.badge}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {pillars.items.map((pillar, index) => {
              const Icon = PILLAR_ICONS[index] ?? Award
              const style = PILLAR_STYLES[index] ?? PILLAR_STYLES[0]

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className={`group relative flex h-full flex-col rounded-2xl border border-white/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7 ${style.hoverBorder}`}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${style.iconBg}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-navy-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-blue-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
