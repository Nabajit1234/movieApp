//  Defining the User schema
const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const userModel = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true
    }
},
{timestamps: true})

const User = mongoose.model('User', userModel);
module.exports = User;