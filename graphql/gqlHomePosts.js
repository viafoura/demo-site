import { gqlMetaTagsFragment, gqlResponsiveImageFragment } from "@/graphql/gqlFragments";

const gql = String.raw;

export const gqlHomePosts = gql`
  {
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
    allPosts(orderBy: productDemo_DESC) {
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
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 1112, h: 556 }) {
          ...gqlResponsiveImageFragment
        }
      }
    }
  }
  ${gqlMetaTagsFragment}
  ${gqlResponsiveImageFragment}
`;
