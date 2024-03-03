const express=require("express")

const Product=require('../models/product.model.js')
const router=express.Router();
const {getProducts,getProduct,createProducts,updatedProduct,deleteProduct}=require('../controllers/product.controllers.js')

router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/',createProducts);

router.put('/:id',updatedProduct);

router.delete('/:id',deleteProduct);


    




module.exports=router;