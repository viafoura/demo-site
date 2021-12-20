const gql = String.raw;

export const menuAndTopics = gql`
  {
    allTopics(orderBy: name_ASC) {
      id
      name
      slug
    }
    allPosts(orderBy: productDemo_ASC) {
      id
      slug
      productDemo
    }
  }
`;
