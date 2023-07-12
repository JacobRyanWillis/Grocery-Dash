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
`;
export const SHOP = gql`
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
  publicOwners {
    myProducts {
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
}
`;

export const OWNER_ME = gql`
  query {
    ownerMe {
      _id
    }
  }
`;

export const PRODUCT_BY_OWNER = gql`
query Query($ownerId: ID!) {
  productsByOwner(ownerId: $ownerId) {
    myProducts {
      _id
      productName
      image
      price
      quantity
      weight
      feature
      category
      description
    }
  }
}
`;
