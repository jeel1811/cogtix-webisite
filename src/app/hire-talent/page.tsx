import { Suspense } from 'react'
import type { Metadata } from 'next'
import HireTalentLandingView from '@/components/sections/hire-talent/HireTalentLandingView'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Hire Vetted Developers | Remote Engineers & QA',
  description:
    'Hire vetted frontend, backend, mobile, data, ML, cloud, and DevOps engineers from Cogtix Solutions. Flexible engagements, global delivery from day one.',
  path: '/hire-talent',
  keywords: [
    'hire software developers',
    'hire remote developers',
    'hire dedicated developers',
    'hire frontend developers',
    'hire backend developers',
    'hire full stack developers',
    'hire mobile app developers',
    'hire React developers',
    'hire Node.js developers',
    'hire AI ML engineers',
    'hire data engineers',
    'hire DevOps engineers',
    'hire QA engineers',
    'staff augmentation services',
    'IT talent on demand',
  ],
})

function HireTalentLandingFallback() {
  return (
    <main className="min-h-[40vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
          Hire vetted developers and engineering teams
        </h1>
        <p className="mt-3 text-slate-500">Loading roles and rates…</p>
      </div>
    </main>
  )
}

export default function HireTalentPage() {
  return (
    <Suspense fallback={<HireTalentLandingFallback />}>
      <HireTalentLandingView />
    </Suspense>
  )
}
