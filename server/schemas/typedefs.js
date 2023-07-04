const {gql} = require('apollo-server-express')



const typeDefs = gql`
type Buyer {
    _id: ID
    username: String
    email: String
    password: String
    zipCode: Int
    myList: [Product]
}

type Product {
    _id: ID
    productName: String!
    description: String
    image: String
    category: String!
    price: Float!
    quantity: Int
    weight: Int
    feature: Boolean!
}

type Owner {
    _id: ID
    username: String
    email: String!
    password: String!
    zipCode: Int
    myProducts: [Product]
    ownerName: String!
    ownerStory: String
    ownerImage: String
}

type Query {
    chatbot: [ChatbotData] 
  }

  type ChatbotData { 
    owner: Owner
    product: Product
  }

`;

module.exports = typeDefs;

