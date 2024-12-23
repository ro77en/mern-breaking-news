import mongoose from 'mongoose';

const connectDatabase = () => {
  console.log("connecting database...");

  const uri = process.env.DB_URI;

  mongoose
    .connect(uri)
    .then(() => console.log("database connected!"))
    .catch((e) => console.log("error connecting database: ", e));
};

export default connectDatabase;
