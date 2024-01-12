const mongoose = require ('mongoose')

const eventSchema = new mongoose.Schema({
    eventName:String,
    date:String,
    image:String,
    eventInfo:String,

})

module.exports = eventModel = mongoose.model("events",eventSchema)