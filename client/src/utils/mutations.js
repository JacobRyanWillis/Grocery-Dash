import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation AddProduct($productName: String!, $description: String!, $category: String!, $price: Float!, $feature: Boolean!) {
  addProduct(productName: $productName, description: $description, category: $category, price: $price, feature: $feature) {
    _id
    myProducts {
      _id
      productName
      description
    }
  }
}
`;