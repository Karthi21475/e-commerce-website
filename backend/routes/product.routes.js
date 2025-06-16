import express from 'express'
import Product from "../models/Productmodel.js";
import Authenticate from '../middlewares/Auth.js';
import isAdmin from '../middlewares/isAdmin.js';

const router =express.Router();

router.route('/').post(Authenticate,isAdmin,async(req,res)=>{
    const {price,productid,productname,image}=req.body;
    console.log(req.body);
    const details = {productid,productname,price,image};
    const Newproduct = new Product(details)
    try{
        await Newproduct.save()
        console.log("Product Added")
    }catch(err){
        console.error(err.message);
    }
}).get(async(req,res)=>{
    const all= await Product.find({})
    try{
        res.json(all)
    }catch(err){
        console.log(err.message);
    }
})

export default router;
