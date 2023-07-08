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

    const buyer = await Buyer.insertMany(buyerSeeds);
    const product = await Product.insertMany(productSeeds);
    const owner = await Owner.insertMany(ownerSeeds);
    /* 
     const productId = product.map((prod) => {
      return prod._id.toString();
    });
    console.log(productId);

    

    const ownerId = owner.map((own) => {
      const id = own._id.toString()
      return id;
    });
    console.log(ownerId)

    await Owner.findByIdAndUpdate(
      ownerId[0],
      { $addToSet: { myProducts: "64a76694b33b3424f7e00b86" } },
      { new: true }
    );
    
    const promises = productId.map(async (_id, i) => {
      if (i % 3 === 0) {
        console.log("hey I have no remainder");
        return Owner.findByIdAndUpdate(
          ownerId[0],
          { $addToSet: { myProducts: _id } },
          { new: true }
        );
      }
    
      if (i % 3 === 1) {
        console.log("1 1 1 1 1 1 1 1");
        return Owner.findByIdAndUpdate(
          ownerId[1],
          { $addToSet: { myProducts: _id } },
          { new: true }
        );
      }
    
      if (i % 3 === 2) {
        console.log("2 2 2 2 2 2 2 2");
        return Owner.findByIdAndUpdate(
          ownerId[2],
          { $addToSet: { myProducts: _id } },
          { new: true }
        );
      }
    });
    
    Promise.all(promises)
      .then(updatedOwners => {
        console.log("All updates completed successfully:", updatedOwners);
      })
      .catch(error => {
        console.error("An error occurred during the updates:", error);
      });  */
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Data SEEDED!");
  process.exit(0);
});



















// const db = require("../config/connection");
// const { Buyer, Owner, Product } = require("../models");
// const buyerSeeds = require("./buyerSeeds.json");
// const ownerSeeds = require("./ownerSeeds.json");
// const productSeeds = require("./productSeeds.json");

// db.once("open", async () => {
//   try {
//     await Buyer.deleteMany({});
//     await Owner.deleteMany({});
//     await Product.deleteMany({});

//     const buyer = await Buyer.insertMany(buyerSeeds);
//     const owner = await Owner.insertMany(ownerSeeds);
//     const product = await Product.insertMany(productSeeds);

// const productId = product.map((prod) => {
//       return prod._id.toString();
//     });

//     // const owner = await Owner.insertMany(ownerSeeds);

  
//     const ownerId = owner.map((own) => {
//       const id = own._id.toString()
//       return id;
//     });
//     console.log(ownerId)
// // run a loop on the product array and add the product id to the owner array


//     await Owner.findByIdAndUpdate(
//       ownerId[0],
//       { $addToSet: { myProducts: "p64a76694b33b3424f7e00b06" } },
//       { new: true }
//     );
    
//     const promises = productId.map(async (_id, i) => {
//       if (i % 3 === 0) {
//         console.log("hey I have no remainder");
//         return Owner.findByIdAndUpdate(
//           ownerId[0],
//           { $addToSet: { myProducts: _id } },
//           { new: true }
//         );
//       }
    
//       if (i % 3 === 1) {
//         console.log("1 1 1 1 1 1 1 1");
//         return Owner.findByIdAndUpdate(
//           ownerId[1],
//           { $addToSet: { myProducts: _id } },
//           { new: true }
//         );
//       }
    
//       if (i % 3 === 2) {
//         console.log("2 2 2 2 2 2 2 2");
//         return Owner.findByIdAndUpdate(
//           ownerId[2],
//           { $addToSet: { myProducts: _id } },
//           { new: true }
//         );
//       }
//     });
    
//     Promise.all(promises)
//       .then(updatedOwners => {
//         console.log("All updates completed successfully:", updatedOwners);
//       })
//       .catch(error => {
//         console.error("An error occurred during the updates:", error);
//       });
    
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log("Data SEEDED!");
//   process.exit(0);
// });
