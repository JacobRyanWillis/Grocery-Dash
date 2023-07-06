const { gql } = require('apollo-server-express');

module.exports = gql`
  type Owner {
    _id: ID
    username: String
    email: String
    password: String
    zipCode: Int
    myProducts: [Product]
    ownerName: String
    ownerStory: String
    ownerImage: String
  }

  type Product {
    _id: ID
    productName: String!
    description: String!
    image: String
    category: String!
    price: Float!
    quantity: Int
    weight: Float
    feature: Boolean!
  }

  type Buyer {
    _id: ID
    username: String!
    email: String!
    password: String!
    zipCode: Int
    myList: [Product]
  }

  type ChatbotData {
    owner: Owner
    product: Product
  }

  type Query {
    allOwnersDevInfo: [Owner]
    allOwnersPublicInfo: [Owner]
    ownerById(_id: ID!): Owner
    allProducts: [Product]
    productById(_id: ID!): Product
    chatbotData: [ChatbotData]
  }

  schema {
    query: Query
  }
`;
