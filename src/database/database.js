import mongoose from "mongoose";
import { DATABASE_MESSAGES } from "../utils/constant.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(DATABASE_MESSAGES.CONNECTION_ERROR, error);
        throw error;
    }
};

export default connectDB;
