import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/User.routes.js";
import ProductRoutes from "./routes/product.routes.js";
import CartRoutes from './routes/cart.routes.js'
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/user',UserRoutes);
app.use('/api/products',ProductRoutes);
app.use('/api/cart',CartRoutes);

const __filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename);
app.use(express.static(path.join(__dirname,'../frontend/dist')));

mongoose.connect("mongodb://localhost:27017/myDatabase").then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.get('/*all',( req, res) => { 
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
})

app.listen(3000,()=>{console.log("server listening at http://localhost:3000")});