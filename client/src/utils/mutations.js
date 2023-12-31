import { gql } from "@apollo/client";

export const ADD_OWNER = gql`
  mutation Mutation(
    $ownerName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addOwner(
      ownerName: $ownerName
      username: $username
      email: $email
      password: $password
    ) {
      token
      owner {
        _id
      }
    }
  }
`;
export const LOGIN_OWNER = gql`
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
  mutation Mutation(
    $productName: String!
    $description: String!
    $image: String
    $category: String!
    $price: Float!
    $quantity: Int
    $weight: Float
    $feature: Boolean!
  ) {
    addProduct(
      productName: $productName
      description: $description
      image: $image
      category: $category
      price: $price
      quantity: $quantity
      weight: $weight
      feature: $feature
    ) {
      myProducts {
        _id
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation Mutation($id: ID!) {
    addProductToBuyer(_id: $id) {
      _id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($_id: ID!) {
    deleteProduct(_id: $_id) {
      _id
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation Mutation($id: ID!) {
    removeProductFromBuyer(_id: $id) {
      _id
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation Mutation(
    $id: ID!
    $productName: String!
    $description: String!
    $category: String!
    $price: Float!
    $feature: Boolean!
    $image: String
    $quantity: Int
    $weight: Float
  ) {
    updateProduct(
      _id: $id
      productName: $productName
      description: $description
      category: $category
      price: $price
      feature: $feature
      image: $image
      quantity: $quantity
      weight: $weight
    ) {
      _id
    }
  }
`;
