'use client'

import { useCallback, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import type { HireTalentFaqItem } from '@/data/hireTalentData'

export default function HireTalentFaqSection({
  title,
  items,
}: {
  title: string
  items: HireTalentFaqItem[]
}) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  const toggle = useCallback((i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }, [])

  return (
    <section className="border-t border-slate-200 bg-white py-14 md:py-20">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">Support</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Clear guidance on timelines, collaboration, security, vetting, and pricing for every engagement.
          </p>
        </header>

        <dl className="mt-10 w-full border border-slate-200">
          {items.map((item, i) => {
            const isOpen = open.has(i)
            return (
              <div
                key={item.q}
                className={i < items.length - 1 ? 'border-b border-slate-200' : ''}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition-colors hover:bg-slate-50 md:px-7 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold leading-snug text-navy-900 md:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-600 ${
                        isOpen ? 'border-blue-200 bg-blue-50 text-blue-700' : ''
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="space-y-4 border-t border-slate-100 bg-slate-50/50 px-5 py-5 text-left md:px-7 md:py-6">
                      {item.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] md:leading-7"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </Container>
    </section>
  )
}
