const mongoose = require("mongoose")

const slider = mongoose.Schema({
    title:String,
    subTitle:String,
    imageurl:String
})
module.exports=mongoose.model("slider",slider)