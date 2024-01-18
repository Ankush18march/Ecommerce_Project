 const { name } = require('ejs')
const mongoose = require('mongoose')

 const Contact = mongoose.Schema({
    name:String,
    password:String,
    query:String
 })

 module.exports=mongoose.model("queries",Contact)