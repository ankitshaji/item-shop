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

//Server accepts get request - product list
app.get("/product", (req, res) => {
  //Find all products + callback
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).json({ error: "Error when loading products" });
    } else {
      res.json(products);
    }
  });
});

//Servr accepts get request - wishlist list
app.get("/wishlist", (req, res) => {
  //Find all wishlists + callback
  WishList.find({}, (err, wishLists) => {
    if (err) {
      res.status(500).json({ error: "Error when loading wishlist" });
    } else {
      res.json(wishLists);
    }
  });
});

//Server accepts post request - product creation
app.post("/product", (req, res) => {
  //new mongoose object created from mongoose Product model
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
      res.json(savedProduct);
    }
  });
});

//Server accpets post requests - /wishlist creation
app.post("/wishlist", (req, res) => {
  //new mongoose object created from mongoose WishList model
  const wishList = new WishList();
  wishList.title = req.body.title;

  //save model object to mongodb + callback
  wishList.save((err, savedWishList) => {
    if (err) {
      //callback returns response error if error when saving
      res.status(500).json({ error: "Could not save wishlist" });
    } else {
      //else callback returns response saved mongoose object
      res.json(savedWishList);
    }
  });
});
