// 

const { Schema, model } = require('mongoose');

// product 
// how we are connecting 
const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
        },
        // product category 
        // drop down menu
        category: {
            type: String,
            required: true,
        },
        price: {
            // add decimal
            // look for decimal 
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: false,
        },
        weight: {
            type: Number,
            required: false,
        },
        // one item should be featured like a waring for feature if they already have it
        feature: {
            type: Boolean,
            required: true,
        }
    });

const Product = model('Product', productSchema)

module.exports = Product;
