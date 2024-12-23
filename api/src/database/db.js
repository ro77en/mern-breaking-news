import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDatabase = () => {
  console.log("connecting database...");

  const uri = `mongodb+srv://ro77en:${process.env.DB_PASSWORD}@cluster0.vqtrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  mongoose
    .connect(uri)
    .then(() => console.log("database connected!"))
    .catch((e) => console.log("error connecting database: ", e));
};

export default connectDatabase;
