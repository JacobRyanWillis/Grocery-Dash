const db = require('../config/connection');
const { Buyer, Owner } = require('../models');
const buyerSeeds = require('./buyerSeeds.json');
const ownerSeeds = require('./ownerSeeds.json');

db.once('open', async () => {
  try {
    await Buyer.deleteMany({});
    await Owner.deleteMany({});

    await Buyer.insertMany(buyerSeeds);
    await Owner.insertMany(ownerSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Data SEEDED!');
  process.exit(0);
});
