import type { Metadata } from 'next'
import HowWeWorkHero from '@/components/sections/HowWeWorkHero'
import AnimatedSection from '@/components/sections/AnimatedSection'
import AnimatedCard from '@/components/sections/AnimatedCard'
import ProcessFlow from '@/components/sections/ProcessFlow'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { siteCtasContent } from '@/i18n/messages'
import { CTA_LINKS } from '@/lib/cta'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Discovery Process Model | Product & Architecture',
  description:
    'Lower delivery risk with a structured product discovery from Cogtix Solutions: research, technical architecture, UX prototypes, and a roadmap.',
  path: '/how-we-work/discovery-process-model',
  keywords: [
    'product discovery process',
    'software discovery phase',
    'technical discovery services',
    'product roadmap consulting',
    'software architecture discovery',
    'UX research and prototyping',
    'pre-development discovery',
    'discovery and delivery model',
  ],
})

export default function DiscoveryProcessModelPage() {

  return (
    <>
      <HowWeWorkHero title="Discovery Process Model" subtitle="Refine your vision with research, architecture and prototyping before development to reduce risk and increase confidence." />

      <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),linear-gradient(to_bottom,#ffffff,#f8fbff_42%,#ffffff)]">
        <Container className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl space-y-16">
            <AnimatedSection>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                    Reduce product risk
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Discovery Process</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                    We help you validate ideas, design architecture and prototype experiences before committing to full development. That means fewer surprises and sharper decisions.
                  </p>
                </div>

                <AnimatedCard className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] md:p-8" delay={0.1}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Why discovery works</span>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">Fast clarity</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Align business and technical teams early',
                      'Turn assumptions into testable prototypes',
                      'Create a roadmap with realistic budgets and milestones',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedSection>

            <AnimatedSection id="process" delay={0.08}>
              <ProcessFlow
                heading="Phases"
                subheading="A small number of high-confidence steps before full build-out starts."
                items={[
                    { step: '1', title: 'Discover', description: 'Interviews, market analysis, and technology research to align the vision before anything expensive is built.', iconKey: 'scansearch', tone: 'dark' },
                    { step: '2', title: 'Design', description: 'Architecture, UX flows, and wireframes turn the idea into a concrete product direction.', iconKey: 'layers' },
                    { step: '3', title: 'Validate', description: 'Proof-of-concept work and feasibility checks reduce risk and help stakeholders commit with confidence.', iconKey: 'compass', tone: 'dark' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection id="contact" delay={0.22}>
              <div className="rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-slate-950 via-sky-900 to-cyan-700 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Want to start a discovery?</p>
                    <h4 className="mt-2 text-2xl font-semibold md:text-3xl">Schedule a short workshop to scope your goals and outcomes.</h4>
                    <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">We’ll shape the problem, test assumptions, and give you a clear plan for the next phase.</p>
                  </div>
                  <Link href={CTA_LINKS.consultation} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5">
                    {siteCtasContent.bookConsultation}
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
