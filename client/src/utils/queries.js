import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;


export const GET_PUBLIC_OWNERS = gql`
  query GetPublicOwners {
    publicOwners {
      _id
      ownerName
      myProducts {
        _id
        productName
        image
        owner {
          ownerName
        }
      }
    }
  }
`;