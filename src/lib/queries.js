import { gql } from "@apollo/client";

export const getMenu = gql`
  query getMenu {
    menuItems(where: { location: PRIMARY, parentId: "0" }) {
      edges {
        node {
          id
          label
          uri
          url
          path
          childItems {
            edges {
              node {
                id
                label
                uri
                url
                path
              }
            }
          }
        }
      }
    }
  }
`;

export const getPosts = gql`
  query getPosts($first: Int!, $after: String) {
    posts(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
        }
      }
    }
  }
`;
