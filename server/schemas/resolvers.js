// Assuming you have the necessary imports and data models
const { Owner, Product, Buyer } = require('../models');

const resolvers = {
  Query: {
    // fetch all owners info with their products


    // fetch a single owner by id with their products


    // fetch all products


    // fetch a single product by id


    // MAYBE fetch all buyers info with the products in their list.

    // fetch a single buyer by id with the products in their list

    // fetch all chatbot data, including owner and product information

  //   allOwnersDevInfo: async () => {
  //     try {
  //       // Fetch all owners' development information from the database
  //       const owners = await Owner.find();
  //       return owners;
  //     } catch (err) {
  //       throw new Error('Failed to fetch owners\' development information');
  //     }
  //   },
  //   allOwnersPublicInfo: async () => {
  //     try {
  //       // Fetch all owners' public information from the database
  //       const owners = await Owner.find({}, 'username email zipCode');
  //       return owners;
  //     } catch (err) {
  //       throw new Error('Failed to fetch owners\' public information');
  //     }
  //   },
  //   ownerById: async (_, { _id }) => {
  //     try {
  //       // Fetch a specific owner by ID from the database
  //       const owner = await Owner.findById(_id);
  //       return owner;
  //     } catch (err) {
  //       throw new Error('Failed to fetch owner by ID');
  //     }
  //   },
  //   allProducts: async () => {
  //     try {
  //       // Fetch all products from the database
  //       const products = await Product.find();
  //       return products;
  //     } catch (err) {
  //       throw new Error('Failed to fetch all products');
  //     }
  //   },
  //   productById: async (_, { _id }) => {
  //     try {
  //       // Fetch a specific product by ID from the database
  //       const product = await Product.findById(_id);
  //       return product;
  //     } catch (err) {
  //       throw new Error('Failed to fetch product by ID');
  //     }
  //   },
  //   chatbotData: async () => {
  //     try {
  //       // Fetch chatbot data, including owner and product information
  //       const chatbotData = await ChatbotData.find().populate('owner').populate('product');
  //       return chatbotData;
  //     } catch (err) {
  //       throw new Error('Failed to fetch chatbot data');
  //     }
  //   },
  },
};

module.exports = resolvers;



// one to find all docs with option to populate through arguments
// one to find a single document based on args passed in. 2 resolvers for each model
// design the API to use args to populate the data you want to return
// models are correct.
// we will need to be using the front end a lot to determine what data will be displayed.
// we will need to be using State a lot to keep data