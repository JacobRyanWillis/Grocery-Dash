const { Schema } = require('mongoose');


const ownerSchema = new Schema(
    {
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

module.exports = ownerSchema;