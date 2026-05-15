'use client'

import { useCallback, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Compass,
  FileCheck2,
  Globe2,
  HelpCircle,
  Layers3,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/sections/ContactForm'
import Offices from '@/components/sections/Offices'
import { CONTACT_INFO } from '@/lib/constants'
import type { HireTalentRoleContent } from '@/data/hireTalentData'

const WHY_ICONS: LucideIcon[] = [UserCheck, Layers3, Globe2]
const ENGAGEMENT_ICONS: LucideIcon[] = [Users, Compass, FileCheck2]

function FaqBlock({
  title,
  items,
}: {
  title: string
  items: { q: string; a: string }[]
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
    <section className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,#f1f5f9_0%,#f8fafc_35%,#ffffff_100%)] py-14 md:py-20">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-none md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">Support</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:mx-0 md:text-base">
            Straight answers on how we staff, onboard, and stand behind every match.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:gap-5">
          {items.map((item, i) => {
            const isOpen = open.has(i)
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 md:rounded-3xl ${
                  isOpen
                    ? 'border-blue-200/90 shadow-md shadow-blue-500/5 ring-1 ring-blue-100/80'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-start gap-4 px-5 py-4 text-left md:gap-5 md:px-7 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-sm shadow-blue-500/25 md:h-11 md:w-11">
                    <HelpCircle className="h-5 w-5 md:h-5 md:w-5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 flex-1 pt-1">
                    <span className="block text-sm font-bold leading-snug text-navy-900 md:text-base">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-blue-200 bg-blue-50 text-blue-700'
                        : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-5 pl-[4.25rem] pr-5 pt-1 md:px-7 md:pb-6 md:pl-[4.75rem]">
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default function HireTalentRoleView({ content }: { content: HireTalentRoleContent }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(ellipse_at_50%_-30%,rgba(14,165,233,0.1),transparent_55%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">{content.category}</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              {content.heroTitle}
              {content.heroHighlight ? (
                <>
                  {' '}
                  <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                    {content.heroHighlight}
                  </span>
                </>
              ) : null}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">{content.heroDescription}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="lg" href="/contact-us" icon={<ArrowRight className="h-4 w-4" />}>
                Talk to talent desk
              </Button>
              <Button variant="outline" size="lg" href={CONTACT_INFO.calendlyContactPath}>
                Schedule a call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="relative bg-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Why Cogtix
              </span>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-navy-900 md:text-3xl lg:text-[2rem]">
                {content.introTitle}
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                Expectations, cadence, and quality bar are clear before anyone joins your backlog.
              </p>
            </div>
            <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-blue-50/30 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)] md:p-10">
              <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl" />
              <p className="relative text-base leading-relaxed text-slate-700 md:text-lg">{content.introBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">At a glance</p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">{content.whyTitle}</h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              How we staff and support every {content.label.toLowerCase()} engagement.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {content.whyPoints.map((p, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length]
              return (
                <li
                  key={p}
                  className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/80 hover:shadow-lg hover:shadow-blue-500/5 md:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">{p}</p>
                  <span className="pointer-events-none absolute right-5 top-5 text-5xl font-black leading-none text-slate-100 transition-colors group-hover:text-blue-50 md:right-6 md:top-6">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="relative bg-white py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">Core skills &amp; stack</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Tags reflect how we staff and evaluate {content.label}s for client work. Your exact stack is matched
                during onboarding.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block lg:translate-y-[-0.5rem]" />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40 p-6 shadow-inner shadow-slate-200/40 md:p-9">
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {content.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100/90 bg-white/90 px-4 py-2 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-200 hover:bg-blue-50/90 md:text-sm"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <Container className="relative">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">Ways to engage</p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">{content.engagementTitle}</h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Pick the model that fits your roadmap. We stay flexible as needs change.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.engagementCards.map((card, idx) => {
              const Icon = ENGAGEMENT_ICONS[idx % ENGAGEMENT_ICONS.length]
              return (
                <div
                  key={card.title}
                  className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-500/5 md:p-8"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/[0.06]" />
                  <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative text-lg font-bold text-navy-900">{card.title}</h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                    {card.body}
                  </p>
                  <div className="relative mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                </div>
              )
            })}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="lg" href="/contact-us">
              Request profiles
            </Button>
            <Button variant="outline" size="lg" href={CONTACT_INFO.calendlyContactPath}>
              Book 30 minutes
            </Button>
          </div>
        </Container>
      </section>

      <FaqBlock title={content.faqTitle} items={content.faqs} />

      <ContactForm />

      <Offices />
    </>
  )
}
