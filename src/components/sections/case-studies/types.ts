export interface CaseStudyImageNode {
  mediaItemUrl?: string | null
}

export interface CaseStudyImages {
  firstImage?: CaseStudyImageNode | null
  secondImage?: CaseStudyImageNode | null
  thirdImage?: CaseStudyImageNode | null
}

export interface CaseStudyFields {
  businessNeeds?: string | null
  clientBackground?: string | null
  metaDescription?: string | null
  metaTitle?: string | null
  shortPreviewDescription?: string | null
  technologiesCategory?: string[] | null
  keyOutcomes?: string | null
  ourSolution?: string | null
  projectImages?: CaseStudyImages | null
  projectName?: string | null
  projectOverview?: string | null
  sector?: string | null
  technology?: string | null
  tag?: string | null
  theChallange?: string | null
}

export interface CaseStudyNode {
  id?: string
  title?: string | null
  slug: string
  uri?: string | null
  featuredImage?: {
    node?: CaseStudyImageNode | null
  } | null
  caseStudy?: CaseStudyFields | null
}

export interface CaseStudyEdge {
  node: CaseStudyNode
}
