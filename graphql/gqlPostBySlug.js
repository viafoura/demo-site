import { gqlMetaTagsFragment, gqlResponsiveImageFragment } from "@/graphql/gqlFragments";

const gql = String.raw;

export const gqlPostBySlug = gql`
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...gqlMetaTagsFragment
      }
    }
    post(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        ...gqlMetaTagsFragment
      }
      topic {
        id
        name
        vfTopicContainerId
      }
      id
      vfPostContainerId
      title
      slug
      date
      showLivechat
      content {
        value
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image {
              responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }) {
                ...gqlResponsiveImageFragment
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
          ... on ConversationStarterRecord {
            id
            conversationStarter
          }
        }
      }
      ogImage: coverImage {
        url(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 })
      }
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }) {
          ...gqlResponsiveImageFragment
        }
      }
      author {
        id
        name
        picture {
          url(imgixParams: { fm: jpg, fit: crop, w: 48, h: 48 })
        }
      }
    }
  }
  ${gqlResponsiveImageFragment}
  ${gqlMetaTagsFragment}
`;
