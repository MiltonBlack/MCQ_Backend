import mongoose from "mongoose";
const MONGO_PROD_URI = "mongodb+srv://Blackdice:Black177@cluster0.1gxkqc6.mongodb.net/MCQ?retryWrites=true&w=majority&appName=Cluster0"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_PROD_URI as string || MONGO_PROD_URI);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}