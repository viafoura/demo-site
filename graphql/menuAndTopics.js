const gql = String.raw;

export const menuAndTopics = gql`
  {
    allTopics {
      id
      name
      slug
    }
    allPosts(orderBy: menuName_DESC) {
      id
      slug
      menuName
    }
  }
`;
