const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});

    await User.insertMany(userSeeds);
    await User.insertMany(productSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Data SEEDED!');
  process.exit(0);
});
