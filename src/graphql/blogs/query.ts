import { gql } from '@/components/queryGraphql/index';

export const BLOGS_LIST = gql`
  query Posts($where: RootQueryToPostConnectionWhereArgs, $first: Int) {
    posts(where: $where, first: $first) {
      edges {
        node {
          id
          slug
          title
          date
          modified
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          blogs {
            blogTitle
            blogCategory
            previewDesc
            blogDescription
            featuredImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            fieldGroupName
          }
          tags {
            nodes {
              slug
              name
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query Post($slug: String!) {
    postBy(slug: $slug) {
      id
      databaseId
      slug
      title
      date
      modified
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      blogs {
        blogTitle
        blogCategory
        previewDesc
        blogDescription
        featuredImage {
          mediaItemUrl
          mediaType
          mimeType
        }
        fieldGroupName
      }
      tags {
        nodes {
          slug
          name
        }
      }
    }
  }
`;
