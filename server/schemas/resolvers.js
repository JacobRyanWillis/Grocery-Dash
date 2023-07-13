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
        return buyer;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    publicOwners: async () => {
      try {
        // Fetch all owners' public information from the database
        const publicOwners = await Owner.find().populate("myProducts");
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
    allProducts: async () => {
      try {
        const product = await Product.find();
        return product;
      } catch (err) {
        throw new Error("Failed to fetch product");
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
    addOwner: async (parent, args) => {
      const owner = await Owner.create({ ...args });
      const token = signToken(owner);
      return { token, owner };
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
    addBuyer: async (parent, args) => {
      const buyer = await Buyer.create({ ...args });
      const token = signToken(buyer);
      return { token, buyer };
    },
    loginBuyer: async (parent, { email, password }) => {
      const buyer = await Buyer.findOne({ email });
      if (!buyer) {
        throw new AuthenticationError("No buyer found with this email address");
      }
      const correctPW = await buyer.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(buyer);
      return { token, buyer };
    },

    // product.create store in Variables. grab the id, new product.id then find the owner and owner.findoneandupdate, add to set the id to the owner.
    addProduct: async (parent, args, context) => {
      if (context.user) {
        const product = await Product.create({ ...args });
        console.log(product)
        const owner = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { myProducts: product._id } },
          { new: true }
        );
        return owner;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateProduct: async (parent, args, context) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        args._id,
        { $set: { ...args } },
        { new: true }
      );
      console.log(updatedProduct)
      return updatedProduct;
    },

    deleteProduct: async (parent, { _id }, context) => {
      if (context.user) {
        const product = await Product.deleteOne({_id: _id})
        console.log(product)
        const updateOwner = await Owner.findByIdAndUpdate(
          context.user._id,
          { $pull: { myProducts: _id } },
          { new: true }
        );
        console.log(updateOwner)
        return updateOwner;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addProductToBuyer: async (parent, { _id }, context) => {
      try {
        const buyer = await Buyer.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { myList: _id } },
          { new: true }
        );
        return buyer;
      } catch (error) {
        throw new Error("Failed to add product to my list.");
      }
    },
    removeProductFromBuyer: async (parent, { _id }, context) => {
      try {
        const buyer = await Buyer.findByIdAndUpdate(
          context.user._id,
          { $pull: { myList: _id } },
          { new: true }
        );
        console.log(buyer);
        return buyer;
      } catch (error) {
        throw new Error("Failed to remove product from my list.");
      }
    },
  },
};

module.exports = resolvers;

// one to find all docs with option to populate through arguments
// one to find a single document based on args passed in. 2 resolvers for each model
// design the API to use args to populate the data you want to return
// models are correct.
// we will need to be using the front end a lot to determine what data will be displayed.
// we will need to be using State a lot to keep data
