import { Suspense } from 'react'
import type { Metadata } from 'next'
import HireTalentLandingView from '@/components/sections/hire-talent/HireTalentLandingView'

export const metadata: Metadata = {
  title: 'Hire Talent | Cogtix Solutions',
  description:
    'Hire vetted frontend, backend, mobile, data, automation, ML, cloud, and DevOps engineers. Flexible engagement models and global delivery from Cogtix Solutions.',
}

function HireTalentLandingFallback() {
  return (
    <main className="min-h-[40vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-500">Loading…</div>
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
