import express from "express";
import authenticate from "../middlewares/Auth.js";
import Cartitemmodel from "../models/cartitemsmodel.js";

const router = express.Router();

router.route('/').post(authenticate,async(req,res)=>{
    const {productid,productname,price,image} =req.body;
    const cartItemData={productid,productname,price,image,quantity:1}

    const NewcartItem=new Cartitemmodel(cartItemData);

    try{
        await NewcartItem.save()
        console.log("item added")
        res.json({message:"Item Added to Cart"})
    }catch(err){
        res.json({message:`${err}`})
        console.log(err);
    }
}).get(async(req,res)=>{
    const items=await Cartitemmodel.find({});
    try{
        res.json(items);
    }catch(err){
        console.log(err.message);
    }
})
router.route('/:id').put(authenticate,async(req,res)=>{
    const {id}=req.params;
    const {quantity}=req.body;
    
    await Cartitemmodel.findByIdAndUpdate({_id:id},{quantity:quantity});

    res.json({message:"Upadated it broo"})
    
}).delete(authenticate,async(req,res)=>{
    const {id}=req.params;
    await Cartitemmodel.findByIdAndDelete({_id:id})
    res.json({message:"Deleted it broo"})
})

export default router;