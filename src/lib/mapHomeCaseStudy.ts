import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import type { Messages } from '@/i18n/messages'

export type HomeCaseStudyItem = Messages['homeCaseStudies']['items'][number]

const PROBLEM_LIMIT = 180
const SOLUTION_LIMIT = 180

export function resolveCaseStudyImageUrl(edge: CaseStudyEdge): string | null {
  return (
    edge.node.featuredImage?.node?.mediaItemUrl ||
    edge.node.caseStudy?.projectImages?.firstImage?.mediaItemUrl ||
    null
  )
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function truncate(text: string, limit: number) {
  if (text.length <= limit) return text
  return `${text.substring(0, limit).trim()}…`
}

function parseImpacts(keyOutcomes?: string | null): { value: string; label: string }[] {
  if (!keyOutcomes) return []

  const clean = stripHtml(keyOutcomes)
  const chunks = clean
    .split(/\n+|(?:\s*[-•]\s+)|(?:\.\s+(?=[A-Z]))/)
    .map((part) => part.trim())
    .filter((part) => part.length > 8)

  const parsed = chunks.slice(0, 3).map((chunk) => {
    const metric = chunk.match(
      /(\d+(?:\.\d+)?%|\d+(?:\.\d+)?x|\d+\s*weeks?|\d+\s*wks?|\d+\+?)/i
    )?.[0]

    if (metric) {
      const label = chunk.replace(metric, '').replace(/^[\s:,-]+/, '').trim()
      return {
        value: metric,
        label: label.length > 4 ? truncate(label, 48) : 'measurable outcome',
      }
    }

    const words = chunk.split(/\s+/)
    return {
      value: words.slice(0, 2).join(' '),
      label: truncate(words.slice(2).join(' ') || chunk, 48),
    }
  })

  return parsed.filter((item) => item.value && item.label)
}

export function mapCaseStudyEdgeToHomeItem(edge: CaseStudyEdge): HomeCaseStudyItem | null {
  const fields = edge.node.caseStudy
  if (!fields) return null

  const problem = truncate(
    stripHtml(fields.theChallange || fields.businessNeeds || fields.projectOverview || ''),
    PROBLEM_LIMIT
  )
  const solution = truncate(
    stripHtml(fields.ourSolution || fields.keyOutcomes || ''),
    SOLUTION_LIMIT
  )

  const descriptionSource =
    fields.shortPreviewDescription || fields.projectOverview || fields.ourSolution || ''
  const description = descriptionSource
    ? truncate(stripHtml(descriptionSource), 150)
    : problem || solution

  if (!description && !problem && !solution) return null

  const techFromCategory = fields.technologiesCategory?.filter(Boolean) ?? []
  const techFromString =
    fields.technology?.split(/[,|/]/).map((t) => t.trim()).filter(Boolean) ?? []
  const techStack = [...new Set([...techFromCategory, ...techFromString])].slice(0, 8)

  const impacts = parseImpacts(fields.keyOutcomes)
  const fallbackImpacts =
    impacts.length > 0
      ? impacts
      : [{ value: '✓', label: 'Delivered with measurable business outcomes' }]

  return {
    id: edge.node.id || edge.node.slug,
    title: fields.projectName || edge.node.title || 'Case study',
    sector: fields.sector || fields.tag || 'Client project',
    technology: fields.technology || techStack.slice(0, 3).join(' | ') || 'Technology-led delivery',
    description:
      description ||
      'We partnered with the client on architecture, delivery, and rollout to reach production goals.',
    problem: problem || 'A complex delivery challenge required a structured engineering response.',
    solution:
      solution || 'We partnered with the client on architecture, delivery, and rollout to reach production goals.',
    impacts: fallbackImpacts,
    techStack:
      techStack.length > 0 ? techStack : ['Cloud', 'Modern web', 'APIs', 'DevOps'],
    slug: edge.node.slug,
    imageUrl: resolveCaseStudyImageUrl(edge) ?? undefined,
  }
}

export function mergeHomeCaseStudies(
  cmsItems: HomeCaseStudyItem[],
  fallbackItems: HomeCaseStudyItem[],
  limit = 3
): HomeCaseStudyItem[] {
  const merged = [...cmsItems]
  for (const item of fallbackItems) {
    if (merged.length >= limit) break
    if (!merged.some((existing) => existing.id === item.id)) {
      merged.push(item)
    }
  }
  return merged.slice(0, limit)
}
