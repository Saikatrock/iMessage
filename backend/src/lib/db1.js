import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://saikatmitra530_db_user:mW6jieSJKZNCuJOQ@cluster0.s3113tt.mongodb.net/imassage");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
connectDB();

export default connectDB;

