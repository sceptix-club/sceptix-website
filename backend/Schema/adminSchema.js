const mongoose = require ('mongoose')

const adminSchema = new mongoose.Schema({
    key:String
})

module.exports = adminModel = mongoose.model("admin",adminSchema)