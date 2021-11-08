import { metaTagsFragment, responsiveImageFragment } from "@/graphql/fragments";

const gql = String.raw;

export const indexPosts = gql`
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
      menuName
      title
      excerpt
      date
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
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;
