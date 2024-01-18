    const express= require("express");
    const { model } = require("mongoose");
    const  router = express.Router();
    const mongoose = require("mongoose")
    const detailmodel = require("../src/models/model.js")
    const servicemodel = require("../src/models/service.js");
    const contactmodel = require("../src/models/contact.js")

    mongoose.connect("mongodb://127.0.1:27017/project15Dec")
    .then(()=>{
    console.log("Db connnection sucessfull")
    })
    .catch((err)=>{
    console.log(err)
    })

    router.get("/",async(req,res)=>{
    const details= await detailmodel.findOne({"_id":"657d6da66e67e32e5360fd43"})
    const services = await servicemodel.find()
     
    console.log(details)
    res.render("index",{
    details:details,
    services:services
    })
    })

    router.get("/gallery",async(req,res)=>{
        
    const details= await detailmodel.findOne({"_id":"657d6da66e67e32e5360fd43"})
    const services = await servicemodel.find()

    console.log(details)
    res.render("gallery",{
    details:details,
    services:services,
    })
    })
    

    router.post("/contact",async(req,res)=>{
    console.log("Form is submitted")
    // res.send(req.body)
    try{
    const data = await contactmodel.create(req.body)
    console.log(data)
    res.redirect("/")
    }catch(err){
    console.log(err)
    res.redirect("/error")
    }
    })
    router.get("/error",(req,res)=>{
    res.send("errror")
    }) 

    module.exports=router
//unwantend code
//  service.create([
//  {
//  icon:'ri-instagram-line',
//  title:'Provide Best Caurses',
//  description:'We provide Best caurses 1',
//  linkText:'htts://www.learncodewithankush.com',
//  link:'check'
//  },
//  {
//  icon:'<i class="ri-telegram-fill"></i>',
//  title:'learning with js',
//  description:'We provide Best caurses 2',
//  linkText:'htts://www.learncodewithankush.com',
//  link:'check'
//  },
//  {
//  icon:'<i class="ri-mail-fill"></i>',
//  dtitle:'learn with html',
//  description:'We provide Best caurses 3',
//  linkText:'htts://www.learncodewithankush.com',
//  link:'check'
//  },   
//  ])
// router.get("/bekar",async(req,res)=>{ 
// const details= await detailmodel.findOne({"_id":"657c8327fbe19ccd50967940"})
// const services = await servicemodel.find()
// res.render("./partials/card",{
// details:details,
// services:services
//  })
//  })
//  mongoose.connect("mongodb://127.0.1:27017/project15Dec")
// detailmodel.create({
//         brandName :"info tech solution",
//         brandconURL:"https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         links:[
//         {
//          label:"Home",
//          url:"/"   
//         },
//         {
//         label:"Services",
//         url:"/services"   
//         },
//         {
//         label:"Gallery",
//         url:"/gallery"   
//         },
//         {
//         label:"About",
//         url:"/about"   
//         },
//         {
//         label:"Contact us",
//         url:"/contact-us"   
//         }
//         ]
//  })

