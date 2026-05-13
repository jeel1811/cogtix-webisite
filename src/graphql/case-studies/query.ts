import { gql } from '@/components/queryGraphql/index'

export const CASE_STUDIES_LIST = gql`
  query Posts(
    $where: RootQueryToPostConnectionWhereArgs
    $first: Int
  ) {
    posts(where: $where, first: $first) {
      edges {
        node {
          id
          title
          slug
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          caseStudy {
            businessNeeds
            clientBackground
            metaDescription
            metaTitle
            shortPreviewDescription
            technologiesCategory
            keyOutcomes
            ourSolution
            projectImages {
              firstImage {
                mediaItemUrl
              }
              secondImage {
                mediaItemUrl
              }
              thirdImage {
                mediaItemUrl
              }
            }
            projectName
            projectOverview
            sector
            technology
            tag
            theChallange
          }
        }
      }
    }
  }
`

export const GET_SINGLE_CASE_STUDY_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    posts(where: { name: $slug }) {
      nodes {
        id
        title
        slug
        caseStudy {
          businessNeeds
          clientBackground
          metaDescription
          metaTitle
          shortPreviewDescription
          technologiesCategory
          keyOutcomes
          ourSolution
          projectImages {
            firstImage {
              mediaItemUrl
            }
            secondImage {
              mediaItemUrl
            }
            thirdImage {
              mediaItemUrl
            }
          }
          projectName
          projectOverview
          sector
          technology
          tag
          theChallange
        }
      }
    }
  }
`
