const { Schema } = require('mongoose');
const productSchema = require('./product');


const ownerSchema = new Schema(
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
            max: 5,
        },
        myProducts: [productSchema],
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


ownerSchema.pre('save', async function (next) {
    if (this.isNew || this, this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});


// compare password for login 
ownerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


//
const Owner = model('Owner', ownerSchema);


module.exports = ownerSchema;

