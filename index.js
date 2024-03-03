const express = require("express");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.listen(3000,()=>
{
    console.log("server running")
})



app.get("/",(req,res)=>
{
    res.send("hello from abhimanya")
})



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://23b102:kitkat102@backenddb.cddx62d.mongodb.net/?retryWrites=true&w=majority&appName=backenddb')
.then(()=>
{
    console.log("connected")

})
.catch(()=>{
    console.log("failed")
}
)