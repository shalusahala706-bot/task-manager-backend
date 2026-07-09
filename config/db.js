import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
      const db = await mongoose.connect(process.env.database);
      console.log("db connected", db.connection.host);
  } catch (error) {
    console.log("error in db connection", error);
  }
};

export default connectDb;
