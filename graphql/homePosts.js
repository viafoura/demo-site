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
    allPosts(orderBy: menuName_DESC) {
      id
      slug
      title
      excerpt
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 856, h: 428 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;
