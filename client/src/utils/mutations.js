import { gql } from "@apollo/client";

export const ADD_OWNER = gql`
mutation Mutation($ownerName: String!, $username: String!, $email: String!, $password: String!) {
  addOwner(ownerName: $ownerName, username: $username, email: $email, password: $password) {
    token
    owner {
      _id
    }
  }
}
`;
export const LOGIN_OWNER=gql`
mutation Mutation($email: String!, $password: String!) {
  loginOwner(email: $email, password: $password) {
    token
    owner {
      _id
    }
  }
}
`;

export const ADD_BUYER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addBuyer(username: $username, email: $email, password: $password) {
    token
    buyer {
      _id
    }
  }
}
`;
export const LOGIN_BUYER = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginBuyer(email: $email, password: $password) {
      token
      buyer {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct(
    $productName: String!
    $description: String!
    $category: String!
    $price: Float!
    $feature: Boolean!
  ) {
    addProduct(
      productName: $productName
      description: $description
      category: $category
      price: $price
      feature: $feature
    ) {
      _id
      myProducts {
        _id
        productName
        description
      }
    }
  }
`;


