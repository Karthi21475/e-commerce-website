import mongoose from "mongoose";
import cartItemSchema from './cartitemsmodel';

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  items: [cartItemSchema.schema],
}, { timestamps: true });

const Cartmodel = mongoose.model("Cart", cartSchema);

export default Cartmodel;
