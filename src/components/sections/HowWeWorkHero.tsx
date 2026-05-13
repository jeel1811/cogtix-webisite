"use client"

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const titleGradient = 'bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-sky-950 to-sky-600'

export default function HowWeWorkHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 pt-28 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[150px]"
        />

        <motion.div
          animate={{ y: [0, 22, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-200 rounded-full blur-[140px]"
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-stripe-ww" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="20" height="40" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripe-ww)" />
        </svg>
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center pt-6 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-6 inline-flex items-center rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur"
          >
            How We Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-950 mb-6 tracking-tight leading-[1.05]"
          >
            <span className={titleGradient}>{title}</span>
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  )
}
