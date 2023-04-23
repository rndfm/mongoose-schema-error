import Mongoose from "mongoose";
import middlemanSchema from "./Middleman.js";

const companyWithMiddlemanSchema = new Mongoose.Schema({
	name: String,
    middleman: middlemanSchema
});

export default companyWithMiddlemanSchema;