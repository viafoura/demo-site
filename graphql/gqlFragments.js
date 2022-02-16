const gql = String.raw;

export const gqlResponsiveImageFragment = gql`
  fragment gqlResponsiveImageFragment on ResponsiveImage {
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

export const gqlMetaTagsFragment = gql`
  fragment gqlMetaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;
