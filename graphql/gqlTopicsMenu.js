const gql = String.raw;

export const gqlTopicsMenu = gql`
  {
    allTopics(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`;
