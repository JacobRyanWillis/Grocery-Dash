const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const buyerSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        zipCode: {
            type: Number,
            required: false,
            max: 100000,
        },
        myList: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Product',
            },
        ],

    },

    {
        toJSON: {
            virtuals: true,
        },
    }

);

// this will get us the count of product buyer has
buyerSchema.virtual('listCount').get(function () {
    return this.myList.length;
});

buyerSchema.pre('save', async function (next) {
    if (this.isNew || this, this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});


// compare password for login 
buyerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};




const Buyer = model('Buyer', buyerSchema);

module.exports = Buyer;