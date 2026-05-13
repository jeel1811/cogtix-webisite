import HowWeWorkHero from '@/components/sections/HowWeWorkHero'
import AnimatedSection from '@/components/sections/AnimatedSection'
import AnimatedCard from '@/components/sections/AnimatedCard'
import ProcessFlow from '@/components/sections/ProcessFlow'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { BrainCircuit, BriefcaseBusiness, Gauge, Users, Workflow } from 'lucide-react'

export const metadata = {
  title: 'Dedicated Resource Model - How We Work',
}

export default function DedicatedResourceModelPage() {
  const benefits = [
    {
      title: 'Flexibility',
      description: 'Hire full-time, part-time, or hourly resources that scale with your needs.',
      icon: Gauge,
    },
    {
      title: 'Control & Transparency',
      description: 'Maintain oversight with regular demos, standups and direct access to developers.',
      icon: Workflow,
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce hiring overheads and infrastructure costs while keeping high quality.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Agile Delivery',
      description: 'Iterate quickly without lengthy upfront specifications.',
      icon: BrainCircuit,
    },
  ]

  const processSteps = [
    {
      title: 'Onboarding',
      description: 'Ramp-up with knowledge transfer and alignment workshops so the team can start productively.',
    },
    {
      title: 'Execution',
      description: 'Sprint-based delivery with regular demos, shared prioritisation, and clear progress tracking.',
    },
    {
      title: 'Governance',
      description: 'Weekly reviews, issue logs, and KPI reporting that make management simple.',
    },
    {
      title: 'Scaling',
      description: 'Add or replace resources as priorities evolve without restarting the engagement.',
    },
  ]

  const roles = ['Project Managers', 'Business Analysts', 'UI/UX Designers', 'Frontend / Backend Developers', 'Data Engineers / Scientists', 'QA Engineers']

  return (
    <>
      <HowWeWorkHero title="Dedicated Resource Model" subtitle="Hire dedicated professionals to plug directly into your team and accelerate delivery with full control and transparency." />

      <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fbff_45%,#ffffff)]">
        <Container className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl space-y-16">
            <AnimatedSection id="overview">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    <Users className="h-4 w-4" />
                    Dedicated team extension
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Overview</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                    The Hire Dedicated Resource Model (HIRE) provides a dedicated technical professional or team to work on your project for an agreed period. It is ideal when you want flexible capacity, rapid onboarding, and close collaboration with internal teams.
                  </p>
                </div>

                <AnimatedCard className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] md:p-8" delay={0.1}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Why teams choose it</span>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">High visibility</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Direct access to the people doing the work',
                      'A flexible model that grows with demand',
                      'Clear collaboration without heavy process overhead',
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

            <AnimatedSection id="why" delay={0.08}>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">Why Choose This Model?</h3>
                  <p className="mt-2 max-w-2xl text-slate-600">A practical way to keep delivery moving while staying close to the work.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <AnimatedCard key={benefit.title} delay={0.05 * index}>
                      <div className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                        <div className="mb-4 flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700 shadow-inner transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900">{benefit.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  )
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection id="process" delay={0.16}>
              <ProcessFlow
                heading="Our Process"
                subheading="A simple operating model that still gives you strong control and visibility."
                items={[
                    { step: '1', title: 'Onboarding', description: 'Ramp-up with knowledge transfer and alignment workshops so the team can start productively.', iconKey: 'users', tone: 'dark' },
                    { step: '2', title: 'Execution', description: 'Sprint-based delivery with regular demos, shared prioritisation, and clear progress tracking.', iconKey: 'workflow' },
                    { step: '3', title: 'Governance', description: 'Weekly reviews, issue logs, and KPI reporting that make management simple.', iconKey: 'briefcase', tone: 'dark' },
                    { step: '4', title: 'Scaling', description: 'Add or replace resources as priorities evolve without restarting the engagement.', iconKey: 'brain' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection id="roles" delay={0.22}>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">Typical Roles You Can Hire</h3>
                  <p className="mt-2 max-w-2xl text-slate-600">A dedicated pod can be built around the exact skills your roadmap needs.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {roles.map((item, index) => (
                  <AnimatedCard key={item} delay={0.04 * index}>
                    <div className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4 text-slate-700 shadow-sm">
                      {item}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="contact" delay={0.28}>
              <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-r from-slate-950 via-sky-900 to-cyan-700 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ready to scale your team?</p>
                    <h4 className="mt-2 text-2xl font-semibold md:text-3xl">Talk to our staffing experts to design the right engagement model.</h4>
                    <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">We can help define the right roles, cadence, and delivery model for your next phase of growth.</p>
                  </div>
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5">
                    Get in touch
                    <Users className="h-4 w-4" />
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
