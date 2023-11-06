const mongoose = require('mongoose')

const newEventSchema = new mongoose.Schema({
    eventName:String,
    eventDate:String,
    eventInfo:String,
    // img:{
    //     data:Buffer,
    //     contentType:String
    // }

})

module.exports = newEventModel = mongoose.model("upcoming events",newEventSchema)