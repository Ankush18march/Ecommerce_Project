const express = require("express")
const route = require("./routes/route.js")
const app =express();
const port = process.env.PORT||5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")

app.use(express.static("public"))
app.use("/",route)

app.listen(port,()=>{console.log(`Sever run on port ${port}`)})