'use client'

import { ClipboardCheck, Headphones, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Container from '@/components/ui/Container'

const PILLAR_META: { title: string; icon: LucideIcon }[] = [
  { title: 'Vetted for your stack', icon: Target },
  { title: 'Aligned before day one', icon: ClipboardCheck },
  { title: 'Supported end to end', icon: Headphones },
]

/** Split long copy into readable paragraphs at sentence boundaries. */
function toParagraphs(text: string): string[] {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (parts.length <= 1) return parts

  // Group into at most 2 paragraphs for card layout
  const mid = Math.ceil(parts.length / 2)
  return [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')].filter(Boolean)
}

export default function HireTalentWhySection({
  title,
  lead,
  paragraphs,
}: {
  title: string
  lead: string
  paragraphs: string[]
}) {
  const pillars = PILLAR_META.map((meta, index) => ({
    ...meta,
    bodyParagraphs: toParagraphs(paragraphs[index] ?? ''),
  }))

  return (
    <section id="capabilities" className="relative overflow-hidden border-b border-slate-200 bg-white py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <Container className="relative">
        <header className="w-full">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">Why Cogtix</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-navy-900 md:text-3xl lg:text-[2.125rem]">
            {title}
          </h2>
          <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-600 md:text-lg md:leading-8">
            {lead}
          </p>
        </header>

        <ul className="mt-12 flex w-full flex-col gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <li
                key={pillar.title}
                className="group relative flex flex-col border border-slate-200 bg-white p-6 text-left shadow-[0_8px_30px_-18px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_16px_40px_-20px_rgba(37,99,235,0.18)] md:p-7"
              >
                <span
                  className="pointer-events-none absolute right-4 top-4 text-4xl font-black leading-none text-slate-100 transition-colors group-hover:text-blue-50 md:text-5xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex items-start gap-4 pr-8">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-blue-100 bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-navy-900 md:text-lg">{pillar.title}</h3>
                    <div className="mt-3 space-y-3">
                      {pillar.bodyParagraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] md:leading-7"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
