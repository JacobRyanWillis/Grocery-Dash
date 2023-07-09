// Assuming you have the necessary imports and data models
const { Owner, Product, Buyer } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    buyerById: async (parent, { _id }) => {
      try {
        const product = await Buyer.findById(_id);
        return product;
      } catch (err) {
        throw new Error("Failed to fetch product");
      }
    },
    buyerMe: async (parent, args, context) => {
      if (context.user) {
        const buyer = await Buyer.findOne({ _id: context.user._id });
        return buyer
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    publicOwners: async () => {
      try {
        // Fetch all owners' public information from the database
        const publicOwners = await Owner.find().populate("myProducts");
        console.log(publicOwners);
        return publicOwners;
      } catch (err) {
        throw new Error("Failed to fetch owners");
      }
    },
    productsByOwner: async (parent, { ownerId }) => {
      try {
        // Owner: fetches owner's products so that owner can modify
        // Buyer: shows all products one Owner has
        //! We will need to grab OwnerId from state
        const publicOwner = await Owner.findById(ownerId).populate(
          "myProducts"
        );
        return publicOwner;
      } catch (err) {
        throw new Error("Failed to fetch owners");
      }
    },
    productById: async (parent, { _id }) => {
      try {
        const product = await Product.findById(_id);
        return product;
      } catch (err) {
        throw new Error("Failed to fetch product");
      }
    },

    ownerMe: async (parent, args, context) => {
      if (context.user) {
        return Owner.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    loginBuyer: async (parent, { email, password }) => {
      const buyer = await Buyer.findOne({ email });
      if (!buyer) {
        throw new AuthenticationError("No buyer found with this email address");
      }
      console.log(buyer)
      const correctPW = await buyer.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(buyer);
      return { token, buyer };
    },
    loginOwner: async (parent, { email, password }) => {
      const owner = await Owner.findOne({ email });
      if (!owner) {
        throw new AuthenticationError("No owner found with this email address");
      }
      const correctPW = await owner.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(owner);
      return { token, owner };
    },
  },
};

// const chatbotData = async () => {
//   try {
//     const owners = await Owner.find({});
//     return owners;
//   } catch (err) {
//     throw new Error('Failed to fetch owners');
//   }
// }

module.exports = resolvers;

// one to find all docs with option to populate through arguments
// one to find a single document based on args passed in. 2 resolvers for each model
// design the API to use args to populate the data you want to return
// models are correct.
// we will need to be using the front end a lot to determine what data will be displayed.
// we will need to be using State a lot to keep data
