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
          price
        }
      }
    }
`;

export const GET_ALL_PRODUCTS = gql`
query Query {
  allProducts {
    _id
    productName
    description
    image
    category
    price
    quantity
    weight
    feature
  }
}
`
