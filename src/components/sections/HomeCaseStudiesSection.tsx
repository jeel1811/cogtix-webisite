import queryGraphql from '@/components/queryGraphql/index'
import type { CaseStudyEdge } from '@/components/sections/case-studies/types'
import HomeCaseStudies from '@/components/sections/HomeCaseStudies'
import { WORDPRESS_CASE_STUDIES_CATEGORY } from '@/constants/index'
import { HOME_CASE_STUDIES_LIST } from '@/graphql/case-studies/query'
import { homeCaseStudiesContent } from '@/i18n/messages'
import {
  mapCaseStudyEdgeToHomeItem,
  mergeHomeCaseStudies,
} from '@/lib/mapHomeCaseStudy'

async function getCaseStudiesForHome(): Promise<CaseStudyEdge[]> {
  try {
    const { data } = await queryGraphql(HOME_CASE_STUDIES_LIST, {
      where: { categoryIn: WORDPRESS_CASE_STUDIES_CATEGORY.id },
    })

    return (data?.posts?.edges as CaseStudyEdge[]) ?? []
  } catch (error) {
    console.error('[home] Failed to load case studies for home section', error)
    return []
  }
}

export default async function HomeCaseStudiesSection() {
  const edges = await getCaseStudiesForHome()
  const cmsItems = edges
    .map(mapCaseStudyEdgeToHomeItem)
    .filter((item): item is NonNullable<typeof item> => item !== null)

  const items = mergeHomeCaseStudies(cmsItems, homeCaseStudiesContent.items, 3)

  return <HomeCaseStudies items={items} />
}
