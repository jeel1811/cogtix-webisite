import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HireTalentRoleView from '@/components/sections/hire-talent/HireTalentRoleView'
import { ALL_HIRE_TALENT_SLUGS, getHireTalentRole } from '@/data/hireTalentData'

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
    return { title: 'Hire Talent | Cogtix Solutions' }
  }
  return {
    title: role.metaTitle,
    description: role.metaDescription,
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      type: 'website',
    },
  }
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
