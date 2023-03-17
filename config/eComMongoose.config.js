import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://mongoose:12345678a@cluster0.gqhbgdd.mongodb.net/eCommerce?retryWrites=true&w=majority"
);

export default mongoose.connection;
