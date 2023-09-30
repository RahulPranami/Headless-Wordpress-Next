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

export const getPost = gql`
  query getPost($id: ID!) {
    post(id: $id, idType: URI) {
      author {
        node {
          name
          uri
          slug
          avatar {
            default
            foundAvatar
            height
            size
            url
            width
          }
        }
      }
      content
      categories {
        edges {
          node {
            count
            name
            slug
            uri
          }
        }
      }
      comments {
        edges {
          node {
            author {
              node {
                name
                ... on CommentAuthor {
                  id
                  email
                }
              }
            }
            content
          }
          cursor
        }
      }
      date
      dateGmt
      contentTypeName
      enqueuedScripts {
        edges {
          node {
            args
            src
            handle
            extra
            id
            dependencies {
              args
              extra
              handle
              id
              src
            }
          }
        }
      }
      featuredImageDatabaseId
      featuredImageId
      featuredImage {
        node {
          fileSize
          link
          mediaItemUrl
          slug
          uri
          title
          srcSet
          sourceUrl
          altText
        }
      }
      slug
      uri
      title
      tags {
        edges {
          node {
            count
            name
            link
            slug
            uri
          }
        }
      }
    }
  }
`;
