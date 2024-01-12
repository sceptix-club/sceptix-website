const mongoose = require('mongoose')

const newEventSchema = new mongoose.Schema({
    eventName:String,
    eventDate:String,
    eventInfo:String,
    eventImage:String,
   

})

module.exports = newEventModel = mongoose.model("upcoming events",newEventSchema)