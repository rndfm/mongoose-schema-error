import { Schema } from "mongoose";
import productSchema from "./Product.js";

const companySchema = new Schema({
	name: String,
	products: [productSchema]
});

export default companySchema;