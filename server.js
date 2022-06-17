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

//Server accepts post request
app.post("/product", (req, res) => {
  //new mongoose object created from mongoose product model
  const product = new Product();
  product.title = req.body.title;
  product.price = req.body.price;

  //save model object to mongodb + callback
  product.save((err, savedProduct) => {
    if (err) {
      //callback returns response error if error when saving
      res.status(500).json({ error: "Could not save product" });
    } else {
      //else callback returns response saved mongoose object
      res.status(200).json(savedProduct);
    }
  });
});