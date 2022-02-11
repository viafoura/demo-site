import { metaTagsFragment, responsiveImageFragment } from "@/graphql/fragments";

const gql = String.raw;

export const homePosts = gql`
  {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
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
          ...responsiveImageFragment
        }
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;
