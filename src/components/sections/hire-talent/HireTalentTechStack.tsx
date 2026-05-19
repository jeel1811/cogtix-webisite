'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import { resolveTechLogo } from '@/lib/techIcons'
import type { HireTalentTechStack as TechStackData } from '@/data/hireTalentTechStacks'

function TechChip({ name, note }: { name: string; note?: string }) {
  const logo = resolveTechLogo(name)

  return (
    <div
      className="inline-flex items-center gap-2.5 border border-slate-200 bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:bg-slate-50"
      title={name}
    >
      <span
        className="flex h-4 w-4 shrink-0 items-center justify-center"
        style={{ color: logo.color }}
        aria-hidden
      >
        {React.cloneElement(logo.icon as React.ReactElement<Record<string, unknown>>, {
          size: 16,
        })}
      </span>
      <span className="text-[0.8125rem] font-medium leading-none text-slate-700 whitespace-nowrap">
        {name}
        {note ? <span className="ml-1 font-normal text-slate-500">({note})</span> : null}
      </span>
    </div>
  )
}

export default function HireTalentTechStack({
  roleLabel,
  categories,
}: {
  roleLabel: string
  categories: TechStackData
}) {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">Technical expertise</p>
          <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">
            Core skills &amp; stack
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Technologies our {roleLabel.toLowerCase()}s use to build secure, scalable solutions. Your exact stack is
            confirmed during onboarding.
          </p>
        </div>

        <div className="mt-10 w-full border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          {categories.map((category, rowIndex) => (
            <div
              key={category.title}
              className={`flex flex-col sm:flex-row ${
                rowIndex < categories.length - 1 ? 'border-b border-slate-200' : ''
              }`}
            >
              <div className="flex shrink-0 items-center border-slate-200 bg-slate-50 px-5 py-4 text-left sm:w-52 sm:border-r md:w-60 md:px-6 md:py-5 lg:w-64">
                <h3 className="text-sm font-semibold leading-snug text-slate-800 md:text-[0.9375rem]">
                  {category.title}
                </h3>
              </div>

              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-3 bg-white px-4 py-4 sm:px-5 sm:py-5">
                {category.items.map((item) => (
                  <TechChip key={`${category.title}-${item.name}`} name={item.name} note={item.note} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
