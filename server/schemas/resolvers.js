// Assuming you have the necessary imports and data models
const { Owner, Product} = require('../models');



const resolvers = {
  Query: {
    allOwnersDevInfo: async () => {
      try {
        // Fetch all owners' development information from the database
        const owners = await Owner.find();
        return owners;
      } catch (err) {
        throw new Error('Failed to fetch owners\' development information');
      }
    },
    allOwnersPublicInfo: async () => {
      try {
        // Fetch all owners' public information from the database
        const owners = await Owner.find({}, 'username email zipCode');
        return owners;
      } catch (err) {
        throw new Error('Failed to fetch owners\' public information');
      }
    },
    ownerById: async (_, { _id }) => {
      try {
        // Fetch a specific owner by ID from the database
        const owner = await Owner.findById(_id);
        return owner;
      } catch (err) {
        throw new Error('Failed to fetch owner by ID');
      }
    },
    allProducts: async () => {
      try {
        // Fetch all products from the database
        const products = await Product.find();
        return products;
      } catch (err) {
        throw new Error('Failed to fetch all products');
      }
    },
    productById: async (_, { _id }) => {
      try {
        // Fetch a specific product by ID from the database
        const product = await Product.findById(_id);
        return product;
      } catch (err) {
        throw new Error('Failed to fetch product by ID');
      }
    },
    chatbotData: async () => {
      try {
        // Fetch owner and product data separately
        const owners = await Owner.find();
        const products = await Product.find();

        // Combine owner and product data into chatbotData array
        const chatbotData = owners.map((owner, index) => ({
          owner,
          product: products[index % products.length]
        }));

        return chatbotData;
      } catch (err) {
        throw new Error('Failed to fetch chatbot data');
      }
    },
  },
};

module.exports = resolvers;
