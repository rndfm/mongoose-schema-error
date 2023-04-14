import { Schema } from "mongoose";
import productSchema from "./Product.js";

const companySchema = new Schema({
	name: String,
	products: [new Schema(productSchema)]
});

export default companySchema;