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
    query Query {
      publicOwners {
        _id
        ownerName
        ownerImage
        myProducts {
          _id
          category
          feature
          productName
          image
        }
      }
    }
`;