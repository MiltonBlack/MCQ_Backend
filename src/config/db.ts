import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}