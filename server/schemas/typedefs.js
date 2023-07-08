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

  type PublicOwner {
    _id: ID!
    zipCode: Int
    myProducts: [Product]
    ownerName: String!
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

  type MyList {
    _id: ID
    username: String
    myList: [Product]}

  type ChatbotData {
    owner: Owner
  }

  type Query {
    publicOwners: [PublicOwner]
    productsByOwner(ownerId: ID!): PublicOwner
    productById(_id: ID!) : Product
    #buyerById(_id: ID!): MyList
    #buyerMe: Buyer
    #ownerMe: Owner
  }

type OwnerAuth {
    token: ID!
    owner: Owner
  }

type BuyerAuth {
    token: ID!
    buyer: Buyer
  }

#type Mutation {
    #addOwner(username: String!, email: String!, password: String!, zipCode: Int, ownerName: String, ownerStory: String, ownerImage: String): OwnerAuth
    #addBuyer(username: String!, email: String!, password: String!, zipCode: Int): BuyerAuth
    #loginOwner(email: String!, password: String!): OwnerAuth
    #loginBuyer(email: String!, password: String!): BuyerAuth
    
    #addProduct(productName: String!, description: String!, image: String, category: String!, price: Float!, quantity: Int, weight: Float, feature: Boolean!): Owner
    #updateProduct(_id: ID): Owner
    #deleteProduct(_id: ID): Owner

    #addProductToBuyer(_id: ID!): Buyer
    #removeProductFromBuyer(_id: ID!): Buyer
#}


`;
