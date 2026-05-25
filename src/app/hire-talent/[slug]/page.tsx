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
  // root layout title template does not double up the brand name.
  const cleanedTitle = role.metaTitle.replace(/\s*\|\s*Cogtix Solutions\s*$/i, '')

  return buildMetadata({
    title: cleanedTitle,
    description: role.metaDescription,
    path: `/hire-talent/${slug}`,
    keywords,
  })
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
