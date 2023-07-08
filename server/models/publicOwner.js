const { Schema, model } = require('mongoose');

const PublicOwnerSchema = new Schema(
    {
        zipCode: {
            type: Number,
            required: false,
            max: 100000,
        },
        myProducts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
              },
        ],
        ownerName: {
            type: String,
            required: true,
        },
        ownerStory: {
            type: String,
        },
        ownerImage: {
            type: String,
        },
    }
);







const PublicOwner = model('PublicOwner', PublicOwnerSchema);


module.exports = PublicOwner;

