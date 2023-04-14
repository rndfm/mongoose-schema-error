import { Schema } from "mongoose";
import middlemanSchema from "./Middleman.js";

const companyWithMiddlemanSchema = new Schema({
	name: String,
    middleman: middlemanSchema
});

export default companyWithMiddlemanSchema;