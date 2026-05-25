import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HireTalentRoleView from '@/components/sections/hire-talent/HireTalentRoleView'
import { ALL_HIRE_TALENT_SLUGS, getHireTalentRole } from '@/data/hireTalentData'
import { buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return ALL_HIRE_TALENT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const role = getHireTalentRole(slug)
  if (!role) {
    return buildMetadata({
      title: 'Hire Talent | Vetted Software Engineers & Designers',
      description:
        'Hire vetted software engineers, designers, and product specialists from Cogtix Solutions.',
      path: '/hire-talent',
      noIndex: true,
    })
  }

  const roleSpaced = slug.replace(/-/g, ' ')
  const keywords = [
    `hire ${role.label}`,
    `hire ${role.label.toLowerCase()}`,
    `hire dedicated ${role.label.toLowerCase()}`,
    `remote ${role.label.toLowerCase()}`,
    `${roleSpaced} for hire`,
    `${role.category.toLowerCase()} developers for hire`,
    'staff augmentation services',
    'hire developers Cogtix',
  ]

  // The seed metaTitle already includes the brand suffix; strip it so the
  // root layout title template does not double up the brand name. Then clamp
  // both title and description to fit Google's SERP budgets.
  const cleanedTitle = role.metaTitle.replace(
    /\s*\|\s*Cogtix Solutions\s*$/i,
    '',
  )
  const title = truncateAtWord(cleanedTitle, 50)
  const description = truncateAtWord(role.metaDescription, 155)

  return buildMetadata({
    title,
    description,
    path: `/hire-talent/${slug}`,
    keywords,
  })
}

function truncateAtWord(value: string, max: number): string {
  if (value.length <= max) return value
  const slice = value.slice(0, max)
  const lastSpace = slice.lastIndexOf(' ')
  const cut =
    lastSpace > Math.floor(max * 0.6) ? slice.slice(0, lastSpace) : slice
  return `${cut.replace(/[\s.,;:!?-]+$/u, '')}…`
}

export default async function HireTalentRolePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = getHireTalentRole(slug)
  if (!content) {
    notFound()
  }
  return <HireTalentRoleView content={content} />
}
