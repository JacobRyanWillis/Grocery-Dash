// Assuming you have the necessary imports and data models
const { Owner, Product, Buyer } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
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
    productById: async (parent, { _id }) => {
      try {
        const product = await Product.findById(_id);
        return product;
      } catch (err) {
        throw new Error("Failed to fetch product");
      }
    },
    // buyerById: async () => {},
    buyerMe: async (parent, args, context) => {
      if (context.user) {
        const buyer = await Buyer.findOne({ _id: context.user._id });
        return buyer
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    ownerMe: async (parent, args, context) => {
      if (context.user) {
        return Owner.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
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
 addProduct: async (parent, { productName, description, image, category, price, quantity, weight, feature }, context) => {
  if (context.user) {
    const product = await Product.create({
      productName,
      description,
      image,
      category,
      price,
      quantity,
      weight,
      feature,
    });

    await Owner.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { myProducts: product._id } }
    );

    return owner;
  }
  throw new AuthenticationError('You need to be logged in!');
},
updateProduct: async (parent, args, context) => {
  const { id, productName, description, image, category, price, quantity, weight, feature } = args;

  if (!context.user) {
    throw new AuthenticationError('You need to be logged in!');
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: { productName, description, image, category, price, quantity, weight, feature } },
      { new: true }
    );

    return updatedProduct;
  } catch (error) {
    throw new Error('Failed to update product.');
  }
}





// deleteProduct: async (parent, args, context) => {}

// addProductToBuyer: async (parent, args, context) => {}
// removeProductFromBuyer: async (parent, args, context) => {}

}
};




module.exports = resolvers;

// one to find all docs with option to populate through arguments
// one to find a single document based on args passed in. 2 resolvers for each model
// design the API to use args to populate the data you want to return
// models are correct.
// we will need to be using the front end a lot to determine what data will be displayed.
// we will need to be using State a lot to keep data
