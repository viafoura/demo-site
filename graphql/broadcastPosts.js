const gql = String.raw;

export const broadcastPosts = gql`
  {
    allPosts(orderBy: createdAt_ASC) {
      id
      title
      excerpt
      slug
      topic {
        id
        name
      }
      coverImage {
        url(
          imgixParams: {
            fm: webp
            w: "60"
            h: "60"
            fit: crop
            crop: focalpoint
            fpX: "0.5"
            fpY: "0.5"
          }
        )
      }
    }
  }
`;
