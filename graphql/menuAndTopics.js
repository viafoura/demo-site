const gql = String.raw;

export const menuAndTopics = gql`
  {
    allTopics(orderBy: name_ASC) {
      id
      name
      slug
    }
    allPosts(orderBy: menuName_ASC) {
      id
      slug
      menuName
    }
  }
`;
