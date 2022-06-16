//server
//npm install express
//npm install mongoose
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect to database
const db = mongoose.connect("mongodb://localhost/item-shop");
//importing mongoose models
const Product = require("./model/product");
const WishList = require("./model/wishlist");

//server understands static and json
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.listen(3000, () => {
  console.log("Running on port 3000");
});

app.get("/products", (req, res) => {
  res.json();
});

app.post("/products", (req, res) => {
  const data = req.body;
});
