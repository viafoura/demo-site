import { metaTagsFragment, responsiveImageFragment } from "@/graphql/fragments";

const gql = String.raw;

export const postBySlug = gql`
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    allPosts(orderBy: menuName_DESC) {
      id
      slug
      menuName
    }
    post(filter: { slug: { eq: $slug } }) {
      id
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }
              ) {
                ...responsiveImageFragment
              }
            }
          }
          ... on ContentRecirculationRecord {
            id
            contentRecirculation
          }
          ... on ConversationRecord {
            id
            conversation
          }
          ... on LiveChatRecord {
            id
            liveChat
          }
          ... on LiveStoryRecord {
            id
            liveStory
          }
        }
      }
      date
      ogImage: coverImage {
        url(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 })
      }
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: { fm: jpg, fit: crop, w: 48, h: 48 })
        }
      }
    }
  }
  ${responsiveImageFragment}
  ${metaTagsFragment}
`;
