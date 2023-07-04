
const resolvers = {
  // Query: {
  //   categories: async () => {
  //     return await Category.find();
  //   },
  //   products: async (parent, { category, name }) => {
  //     const params = {};

  //     if (category) {
  //       params.category = category;
  //     }

  //     if (name) {
  //       params.name = {
  //         $regex: name
  //       };
  //     }

  //     return await Product.find(params).populate('category');
  //   },
  //   product: async (parent, { _id }) => {
  //     return await Product.findById(_id).populate('category');
  //   },
  //   user: async (parent, args, context) => {
  //     if (context.user) {
  //       const user = await User.findById(context.user._id).populate({
  //         path: 'orders.products',
  //         populate: 'category'
  //       });

  //       user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

  //       return user;
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   myList: async (parent, { _id }, context) => {
  //     if (context.user) {
  //       const user = await User.findById(context.user._id).populate({
  //         path: 'orders.products',
  //         populate: 'category'
  //       });

  //       return user.orders.id(_id);
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
    
  // Mutation: {
  // }}};
};


module.exports = resolvers;