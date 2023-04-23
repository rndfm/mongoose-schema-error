import Mongoose from 'mongoose';

const productSchema = new Mongoose.Schema({
	name: String
});

export default productSchema;