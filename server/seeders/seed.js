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
      return prod._id;
    });
    console.log(productId);

    const owner = await Owner.insertMany(ownerSeeds);

    const ownerId = owner.map((own) => {
      return own._id;
    });
  
    productId.forEach(async (id, i) => {
        if (i % 3 == 0) {
          const user1 = await Owner.findByIdAndUpdate(
            ownerId[0],
            { $addToSet: { myList: id } },
            { new: true }
          );
          console.log(user1);
        }

        if (i % 3 == 1) {
          await Owner.findByIdAndUpdate(
            ownerId[1],
            { $addToSet: { myList: id } },
            { new: true }
          );
        }

        if (i % 3 == 2) {
          await Owner.findByIdAndUpdate(
            ownerId[2],
            { $addToSet: { myList: id } },
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
