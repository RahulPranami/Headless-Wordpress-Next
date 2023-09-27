import { gql } from "@apollo/client";

export const getSiteInfo = gql`
  query GetSiteInfo {
    generalSettings {
      description
      title
    }
  }
`;

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
        hasPreviousPage
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
          excerpt
          uri
          date
        }
      }
    }
  }
`;

export const getEndCursor = gql`
  query getEndCursor($after: String = "", $first: Int!) {
    posts(after: $after, first: $first) {
      pageInfo {
        endCursor
      }
    }
  }
`;
