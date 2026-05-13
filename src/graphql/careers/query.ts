import { gql } from '@/components/queryGraphql/index'

export const CAREER_LIST = gql`
  query Posts(
    $where: RootQueryToPostConnectionWhereArgs
    $format: PostObjectFieldFormatEnum
  ) {
    posts(where: $where) {
      edges {
        node {
          title
          id
          slug
          content(format: $format)
          careers {
            designation
            fieldGroupName
            jobDescription
            jobExperience
            jobLocation
            jobTime
            jobType
          }
        }
      }
    }
  }
`

export const GET_SINGLE_CAREER_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      careers {
        designation
        fieldGroupName
        jobDescription
        jobExperience
        jobLocation
        jobTime
        jobType
      }
      slug
    }
  }
`
