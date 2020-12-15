import mongoose from "mongoose";

const groupchatSchema=mongoose.Schema({
	message: String,
	name: String,
	timestamp: String
});

export default mongoose.model("messagecontents",groupchatSchema)