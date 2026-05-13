export interface CareerFields {
  designation?: string | null
  fieldGroupName?: string | null
  jobDescription?: string | null
  jobExperience?: string | null
  jobLocation?: string | null
  jobTime?: string | null
  jobType?: string | null
}

export interface CareerNode {
  title: string
  id?: string
  slug: string
  content?: string | null
  careers?: CareerFields | null
}

export interface CareerEdge {
  node: CareerNode
}
