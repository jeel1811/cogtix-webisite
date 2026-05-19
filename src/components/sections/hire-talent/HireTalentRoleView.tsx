'use client'

import { ArrowRight, Compass, FileCheck2, Globe2, Layers3, UserCheck, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/sections/ContactForm'
import Offices from '@/components/sections/Offices'
import { useI18n } from '@/i18n/provider'
import { CTA_LINKS } from '@/lib/cta'
import type { HireTalentRoleContent } from '@/data/hireTalentData'
import HireTalentTechStack from '@/components/sections/hire-talent/HireTalentTechStack'
import HireTalentWhySection from '@/components/sections/hire-talent/HireTalentWhySection'
import HireTalentFaqSection from '@/components/sections/hire-talent/HireTalentFaqSection'

const WHY_ICONS: LucideIcon[] = [UserCheck, Layers3, Globe2]
const ENGAGEMENT_ICONS: LucideIcon[] = [Users, Compass, FileCheck2]

export default function HireTalentRoleView({ content }: { content: HireTalentRoleContent }) {
  const { m } = useI18n()

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
              <Button variant="primary" size="lg" href={CTA_LINKS.project} icon={<ArrowRight className="h-4 w-4" />}>
                {m.siteCtas.discussProject}
              </Button>
              <Button variant="outline" size="lg" href={CTA_LINKS.consultation}>
                {m.siteCtas.bookConsultation}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HireTalentWhySection
        title={content.introTitle}
        lead={content.introLead}
        paragraphs={content.introParagraphs}
      />

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

      <HireTalentTechStack roleLabel={content.label} categories={content.techStack} />

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
            <Button variant="primary" size="lg" href={CTA_LINKS.project}>
              {m.siteCtas.discussProject}
            </Button>
            <Button variant="outline" size="lg" href={CTA_LINKS.consultation}>
              {m.siteCtas.bookConsultation}
            </Button>
          </div>
        </Container>
      </section>

      <HireTalentFaqSection title={content.faqTitle} items={content.faqs} />

      <ContactForm />

      <Offices />
    </>
  )
}
