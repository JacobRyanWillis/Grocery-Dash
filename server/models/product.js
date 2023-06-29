const { Schema } = require('mongoose');

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
            required: true,
        },
        image: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            // add decimal
            type: Decimal,
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
        feature: {
            type: Boolean,
            required: true,
        }
    });

module.exports = productSchema;
