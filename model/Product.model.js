import mongoose from "mongoose";

let productSchema = new mongoose.Schema(
  {
    name: String,
    id: Number,
    image: String,
    description: String,
    stock: Number,
    price: Number,
    spec: Array,
    category: String,
  },
  {
    collection: "products",
  }
);

const Product = mongoose.model("product", productSchema, "products");

export default Product;
