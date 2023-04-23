import Mongoose from "mongoose";
import productSchema from "./Product.js";

const middlemanSchema = new Mongoose.Schema({
	name: String,
	products: [productSchema]
});

export default middlemanSchema;