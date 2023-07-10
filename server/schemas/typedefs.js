const { gql } = require("apollo-server-express");

module.exports = gql`
  type Buyer {
    _id: ID
    username: String!
    email: String!
    password: String!
    zipCode: Int
    myList: [Product]
  }

  type MyList {
    _id: ID
    username: String
    myList: [Product]
  }

  type BuyerAuth {
    token: ID!
    buyer: Buyer
  }

  type Owner {
    _id: ID
    username: String
    email: String
    password: String
    zipCode: Int
    myProducts: [Product]
    ownerName: String!
    ownerStory: String
    ownerImage: String
  }

  type PublicOwner {
    _id: ID!
    zipCode: Int
    myProducts: [Product]
    ownerName: String!
    ownerStory: String
    ownerImage: String
  }

  type OwnerAuth {
    token: ID!
    owner: Owner
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

  type ChatbotData {
    owner: Owner
  }

  type Query {
    buyerById(_id: ID!): MyList
    buyerMe: Buyer
    publicOwners: [PublicOwner]
    productsByOwner(ownerId: ID!): PublicOwner
    productById(_id: ID!): Product
    ownerMe: Owner
  }

  type Mutation {
    addOwner( username: String!, email: String!, password: String! zipCode: Int, ownerName: String!, ownerStory: String, ownerImage: String): OwnerAuth
    loginOwner(email: String!, password: String!): OwnerAuth
    addBuyer(username: String!, email: String!, password: String!, zipCode: Int): BuyerAuth
    loginBuyer(email: String!, password: String!): BuyerAuth
    
    addProduct(productName: String!, description: String!, image: String, category: String!, price: Float!, quantity: Int, weight: Float, feature: Boolean!): Owner
    updateProduct(_id: ID!, productName: String!, description: String!, image: String, category: String!, price: Float!, quantity: Int, weight: Float, feature: Boolean!): Product
    deleteProduct(_id: ID!): Owner

    addProductToBuyer(_id: ID!): Buyer
    removeProductFromBuyer(_id: ID!): Buyer
  }
`;
