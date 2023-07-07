const db = require("../config/connection");
const { Buyer, Owner, Product } = require("../models");
const buyerSeeds = require("./buyerSeeds.json");
const ownerSeeds = require("./ownerSeeds.json");
const productSeeds = require("./productSeeds.json");

db.once("open", async () => {
  try {
    await Buyer.deleteMany({});
    await Owner.deleteMany({});
    await Product.deleteMany({});

    const product = await Product.insertMany(productSeeds);

    const productId = product.map((prod) => {
      return prod._id.toString();
    });
    console.log(productId);

    const owner = await Owner.insertMany(ownerSeeds);

    const ownerId = owner.map((own) => {
      const id = own._id.toString()
      return id;
    });
    console.log(ownerId)

    await Owner.findByIdAndUpdate(
      ownerId[0],
      { $addToSet: { myProducts: "64a76694b33b3424f7e00b79" } },
      { new: true }
    );
    
    productId.forEach(async (_id, i) => {
        if (i % 3 == 0) {
          await Owner.findByIdAndUpdate(
            ownerId[0],
            { $addToSet: { myProducts: _id } },
            { new: true }
          );
          console.log("line 33");
        }

        if (i % 3 == 1) {
          await Owner.findByIdAndUpdate(
            ownerId[1],
            { $addToSet: { myProducts: _id } },
            { new: true }
          );
        }

        if (i % 3 == 2) {
          await Owner.findByIdAndUpdate(
            ownerId[2],
            { $addToSet: { myProducts: id } },
            { new: true }
          );
        }
      })
    
      
    /* for (let i=0; i < buyerSeeds.length; i++){
    const {_id}= await Buyer.create(buyerSeeds[i]);
    await Buyer.findByIdAndUpdate(_id, {
      $addToSet: {
        myList: 
      }
    })
    } */
    

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Data SEEDED!");
  process.exit(0);
});
