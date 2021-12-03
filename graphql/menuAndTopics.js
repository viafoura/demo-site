const gql = String.raw;

export const menuAndTopics = gql`
  {
    allTopics {
      id
      name
    }
    allPosts(orderBy: menuName_DESC) {
      id
      slug
      menuName
    }
  }
`;
