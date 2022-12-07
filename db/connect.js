import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://hateryx:1234@nodeexpressprojects.klyr3du.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
