const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const ownerSchema = require('./owner')


const userSchema = new Schema(
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
        isOwner: {
            type: Boolean,
            required: true,
        },
        // if they hit is owner they will get the owner info
        // idea: create separate table 
        ownerData: [ownerSchema],
        zipCode: {
            type: Number,
            required: false,
            max: 5,
        },

    },

    {
        toJSON: {
            virtuals: true,
        },
    }

);



userSchema.pre('save', async function (next) {
    if (this.isNew || this, this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});


// compare password for login 
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;