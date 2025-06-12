import mongoose from "mongoose";
import { Schema } from "mongoose";

const productschema= new Schema({
    productid:{  
        type:Number,
        required:true,
        unique:true
            },
    productname:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Productmodel=mongoose.model("products",productschema);

export default Productmodel;