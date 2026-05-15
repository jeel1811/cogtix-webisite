'use client'

import { useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, ChevronRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import {
  getHireTalentCategoriesForLanding,
  getHireTalentCategoryOverview,
  getHireTalentRoleCardBlurb,
  getHireTalentRoleIconName,
} from '@/data/hireTalentData'

function RoleIcon({ name, className }: { name: string; className?: string }) {
  const iconMap = LucideIcons as unknown as Record<string, LucideIcon>
  const Comp = iconMap[name] ?? LucideIcons.CircleDot
  return <Comp className={className ?? 'h-5 w-5 text-blue-600'} />
}

export default function HireTalentLandingView() {
  const categories = getHireTalentCategoriesForLanding()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat')

  const selectedIndex = useMemo(() => {
    if (!catParam) return 0
    const idx = categories.findIndex((c) => c.label === catParam)
    return idx >= 0 ? idx : 0
  }, [categories, catParam])

  const active = categories[selectedIndex] ?? categories[0]

  const selectCategory = useCallback(
    (index: number) => {
      const label = categories[index]?.label
      if (!label) return
      const next = new URLSearchParams()
      next.set('cat', label)
      router.replace(`${pathname}?${next.toString()}`, { scroll: false })
    },
    [categories, pathname, router],
  )

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(ellipse_at_80%_-20%,rgba(14,165,233,0.12),transparent_50%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-5xl lg:text-[3.25rem]">
              Engineering talent,{' '}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                matched to how you build
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Pick a discipline on the left to see how we staff it. Then open any role for engagement
              models, skills we screen for, and answers to common questions. No stock imagery, just
              clear expectations and the same quality bar as our delivery teams.
            </p>
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

      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Explore by discipline</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Find the right profile
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Select a category to preview how we position that talent, then jump into a specific role.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-10">
            <nav
              aria-label="Hire talent categories"
              className="flex flex-col gap-2 lg:sticky lg:top-24"
            >
              {categories.map((cat, index) => {
                const isActive = index === selectedIndex
                return (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => selectCategory(index)}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-semibold transition-all md:text-base ${
                      isActive
                        ? 'border-blue-400/80 bg-blue-50/80 text-navy-900 shadow-sm ring-1 ring-blue-200/60'
                        : 'border-slate-200 bg-slate-50/40 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <span className="min-w-0">{cat.label}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        isActive
                          ? 'border-blue-500 bg-blue-600 text-white'
                          : 'border-slate-200 bg-white text-slate-400'
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </button>
                )
              })}
            </nav>

            <div className="min-w-0 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white p-6 shadow-sm md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-navy-900 md:text-3xl">{active.label}</h3>
              <div className="mt-5 rounded-2xl border border-blue-100/80 bg-blue-50/50 px-5 py-4 text-sm leading-relaxed text-slate-700 md:text-base">
                {getHireTalentCategoryOverview(active.label)}
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">Roles in this category</p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {active.roles.map((role) => {
                  const iconName = getHireTalentRoleIconName(role.slug, active.label)
                  const blurb = getHireTalentRoleCardBlurb(active.label, role.label)
                  return (
                    <li key={role.slug}>
                      <Link
                        href={`/hire-talent/${role.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100/80">
                            <RoleIcon name={iconName} className="h-5 w-5 text-blue-600" />
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                        </div>
                        <span className="mt-4 text-base font-bold text-navy-900">{role.label}</span>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{blurb}</p>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
