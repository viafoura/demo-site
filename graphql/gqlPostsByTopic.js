import { gqlMetaTagsFragment, gqlResponsiveImageFragment } from "@/graphql/gqlFragments";

const gql = String.raw;

export const gqlPostsByTopic = gql`
  query PostsByTopic($topicId: [ItemId]) {
    site: _site {
      favicon: faviconMetaTags {
        ...gqlMetaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...gqlMetaTagsFragment
      }
    }
    allPosts(filter: { topic: { allIn: $topicId } }) {
      id
      vfPostContainerId
      slug
      title
      excerpt
      author {
        name
      }
      content {
        blocks {
          ... on ConversationRecord {
            id
          }
        }
      }
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }) {
          ...gqlResponsiveImageFragment
        }
      }
    }
  }
  ${gqlResponsiveImageFragment}
  ${gqlMetaTagsFragment}
`;
