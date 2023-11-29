const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    eventName:String,
    otp: String,
    date: String,
    createdAT: Date,
    expiresAT: Date,
    verified: {
        type: Boolean,
        default: false,
    },
});

module.exports = userSchema