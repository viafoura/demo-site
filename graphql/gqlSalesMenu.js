const gql = String.raw;

export const gqlSalesMenu = gql`
  {
    allPosts(filter: { productDemo: { neq: "" } }, orderBy: productDemo_ASC) {
      id
      slug
      productDemo
    }
  }
`;
