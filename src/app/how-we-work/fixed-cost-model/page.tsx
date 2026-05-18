import HowWeWorkHero from '@/components/sections/HowWeWorkHero'
import AnimatedSection from '@/components/sections/AnimatedSection'
import AnimatedCard from '@/components/sections/AnimatedCard'
import ProcessFlow from '@/components/sections/ProcessFlow'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { CheckCircle2, HandCoins } from 'lucide-react'
import { siteCtasContent } from '@/i18n/messages'
import { CTA_LINKS } from '@/lib/cta'

export const metadata = {
  title: 'Fixed Cost Model - How We Work',
}

export default function FixedCostModelPage() {


  return (
    <>
      <HowWeWorkHero title="Fixed Cost Model" subtitle="When scope is clear, choose a fixed-price engagement for predictability and transparent delivery." />

      <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fbff_45%,#ffffff)]">
        <Container className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl space-y-16">
            <AnimatedSection>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    <HandCoins className="h-4 w-4" />
                    Predictable Delivery
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Fixed Cost Model</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                    Our fixed-cost engagements are ideal when scope, timeline and deliverables are well-defined. You get transparent pricing, milestone planning, and a delivery process that feels controlled from day one.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Defined scope', 'Milestone billing', 'Clear handoff'].map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatedCard className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] md:p-8" delay={0.1}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">What you get</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Best for clarity</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      'A scope that is fixed before development starts',
                      'A delivery roadmap with clear milestones and demos',
                      'A single accountable team for quality and launch',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedSection>

            <AnimatedSection id="process" delay={0.08}>
              <ProcessFlow
                heading="Process"
                subheading="Each step is designed to reduce uncertainty and keep the project moving without scope drift."
                items={[
                    { step: '1', title: 'Requirement Gathering', description: 'Detailed scoping workshops, acceptance criteria, and alignment on what is in and out of scope.', iconKey: 'clipboard', tone: 'dark' },
                    { step: '2', title: 'Design & Prototyping', description: 'Visual directions and interaction prototypes to lock UX decisions before development begins.', iconKey: 'pen' },
                    { step: '3', title: 'Implementation', description: 'Milestone-based development with predictable releases and clear progress checkpoints.', iconKey: 'filecheck', tone: 'dark' },
                    { step: '4', title: 'Quality & Delivery', description: 'Structured QA, UAT, and deployment support so launch feels controlled and low-risk.', iconKey: 'check' },
                    { step: '5', title: 'Support', description: 'Optional maintenance and handover support after launch for business continuity.', iconKey: 'headset', tone: 'dark' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection id="contact" delay={0.22}>
              <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 p-6 text-white shadow-[0_24px_60px_rgba(14,116,144,0.18)] md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Need a fixed-price estimate?</p>
                    <h4 className="mt-2 text-2xl font-semibold md:text-3xl">We can scope the work and give you a proposal that is easy to approve.</h4>
                    <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">Contact us and we will run a short scoping exercise to turn your requirements into a clear delivery plan.</p>
                  </div>
                  <Link href={CTA_LINKS.estimate} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5">
                    {siteCtasContent.freeEstimate}
                    <CheckCircle2 className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </main>
    </>
  )
}
