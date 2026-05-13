'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { AWARDS } from '@/lib/constants'
import { useI18n } from '@/i18n/provider'

export default function Awards() {
  const { m } = useI18n()

  // Triple the awards to ensure a smooth, seamless infinite loop
  const duplicatedAwards = [...AWARDS, ...AWARDS, ...AWARDS]

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          badge={m.awards.badge}
          title={m.awards.title}
          subtitle={m.awards.subtitle}
          className="mb-10"
        />
      </Container>

      <div className="relative mt-8">
        {/* Left & Right Gradient Fades for a "premium" edge look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{
            x: [0, '-33.33%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedAwards.map((award, index) => (
            <div
              key={`${award.name}-${index}`}
              className="group relative flex-shrink-0 w-[200px] md:w-[240px] bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              {/* Card Decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/40 transition-colors duration-500" />

              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={award.logo}
                  alt={award.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-1">
                <p className="text-[0.5625rem] font-bold text-blue-600 uppercase tracking-widest leading-tight">
                  Official Award
                </p>
                <h4 className="text-[0.6875rem] md:text-xs font-bold text-navy-900 leading-snug">
                  {award.name}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
