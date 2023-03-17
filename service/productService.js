const express = require("express");
const product = require("../model/Product.model");
const Router = express.Router;

Router.post("/product", async (req, res) => {
  const body = req.body;
  const newProduct = new product(body);
  const result = await newProduct.save();

  res.json({
    data: result,
  });
});

module.exports = Router;
