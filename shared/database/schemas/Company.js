import Mongoose from "mongoose";
import productSchema from "./Product.js";

const companySchema = new Mongoose.Schema({
	name: String,
	products: [productSchema]
});

export default companySchema;