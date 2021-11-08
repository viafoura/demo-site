const gql = String.raw;

export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

export const metaTagsFragment = gql`
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;
