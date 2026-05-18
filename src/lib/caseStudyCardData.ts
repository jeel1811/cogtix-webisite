import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import type { CaseStudyCardData } from '@/components/sections/case-studies/CaseStudyCard'
import type { HomeCaseStudyItem } from '@/lib/mapHomeCaseStudy'
import { resolveCaseStudyImageUrl, stripHtml } from '@/lib/mapHomeCaseStudy'

const DESCRIPTION_LIMIT = 150

export function truncateCaseStudyDescription(text: string, limit = DESCRIPTION_LIMIT) {
  const clean = stripHtml(text)
  if (clean.length <= limit) return clean
  return `${clean.substring(0, limit).trim()}...`
}

export function edgeToCaseStudyCardData(edge: CaseStudyEdge): CaseStudyCardData {
  const fields = edge.node.caseStudy
  const title = fields?.projectName || edge.node.title || 'Case Study'
  const technologies = fields?.technologiesCategory?.filter(Boolean) ?? []
  const techFromString =
    fields?.technology?.split(/[,|/]/).map((t) => t.trim()).filter(Boolean) ?? []
  const mergedTech = [...new Set([...technologies, ...techFromString])]

  const descriptionSource =
    fields?.shortPreviewDescription ||
    fields?.projectOverview ||
    fields?.ourSolution ||
    ''

  return {
    title,
    sector: fields?.sector || fields?.tag,
    technology: fields?.technology || mergedTech.slice(0, 3).join(' | ') || null,
    description: descriptionSource
      ? truncateCaseStudyDescription(descriptionSource)
      : null,
    imageUrl: resolveCaseStudyImageUrl(edge),
    technologies: mergedTech,
    href: `/case-studies/${edge.node.slug}`,
  }
}

export function homeItemToCaseStudyCardData(item: HomeCaseStudyItem): CaseStudyCardData {
  const description =
    item.description ||
    truncateCaseStudyDescription(
      [item.problem, item.solution].filter(Boolean).join(' ')
    )

  return {
    title: item.title,
    sector: item.sector,
    technology:
      item.technology || item.techStack.slice(0, 3).join(' | ') || 'Technology-led delivery',
    description,
    imageUrl: item.imageUrl ?? null,
    technologies: item.techStack,
    href: item.slug ? `/case-studies/${item.slug}` : '/case-studies',
  }
}
