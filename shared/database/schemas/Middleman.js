import { Schema } from "mongoose";
import productSchema from "./Product.js";

const middlemanSchema = new Schema({
	name: String,
	products: [productSchema]
});

export default middlemanSchema;