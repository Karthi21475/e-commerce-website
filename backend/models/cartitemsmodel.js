import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productid: { 
        type: Number,
        required: true 
    },
    productname:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },price:{
        type:Number,
        required:true
    },
    quantity: { type: Number, required: true, min: 1 },
});

const Cartitemmodel=mongoose.model("Cartitems", cartItemSchema);

export default Cartitemmodel;