import express from "express";
import Router from "../service/productService.js";

const Router = express.Router();

Router.get("/product", async (req, res) => {
  const prod = await Router();
  res.status(200).json(prod);
  console.log(prod);
  return prod;
});

export default Router;
